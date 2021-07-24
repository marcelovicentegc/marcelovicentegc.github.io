import React from "react"
import ParentSize from "@visx/responsive/lib/components/ParentSize"
import Helmet from "react-helmet"
import { graphql, useStaticQuery } from "gatsby"
import { Site } from "../components/Site"
import { Main } from "../components/Main"
import { PageHeader } from "../components/PageHeader"
import { Inner } from "../components/System"
import { Section } from "../components/Section"
import { BarStackHorizontal } from "@visx/shape"
import { SeriesPoint } from "@visx/shape/lib/types"
import { Group } from "@visx/group"
import { AxisBottom, AxisLeft } from "@visx/axis"
import { scaleBand, scaleLinear, scaleOrdinal } from "@visx/scale"
import { timeParse, timeFormat } from "d3-time-format"
import { withTooltip, Tooltip, defaultStyles } from "@visx/tooltip"
import { WithTooltipProvidedProps } from "@visx/tooltip/lib/enhancers/withTooltip"
import { LegendOrdinal } from "@visx/legend"

type BioImpedanceData = {
  date: string
  weigth: number
  bmi: number
  bodyFat: number
  muscle: number
  water: number
  protein: number
  basalMetabolism: number
  visceralFat: number
  boneMass: number
  bodyAge: number
}

const bioImpedenceLabelMap: { [key: string]: string } = {
  date: "Date",
  weigth: "Weight (kg)",
  bmi: "BMI",
  bodyFat: "Body fat (%)",
  muscle: "Muscle (%)",
  water: "Water (%)",
  protein: "Protein (%)",
  basalMetabolism: "Basal metabolism (kcal)",
  visceralFat: "Visceral fat",
  boneMass: "Bone mass (kg)",
  bodyAge: "Body age (years)",
}

const data: BioImpedanceData[] = [
  {
    date: "2021-07-07",
    weigth: 63.65, // kg
    bmi: 20.7,
    bodyFat: 14.7, // %
    muscle: 51.53, // kg
    water: 58.5, // %
    protein: 22.4, // %
    basalMetabolism: 1.475, // kcal
    visceralFat: 5,
    boneMass: 2.76, // kg
    bodyAge: 21, // years,
  },
  {
    date: "2021-07-11",
    weigth: 63.9,
    bmi: 20.8,
    bodyFat: 15,
    muscle: 51.57,
    water: 58.3,
    protein: 22.4,
    basalMetabolism: 1.479,
    visceralFat: 5,
    boneMass: 2.76,
    bodyAge: 22,
  },
  {
    date: "2021-07-14",
    weigth: 64.65,
    bmi: 21.1,
    bodyFat: 15.2,
    muscle: 52.03,
    water: 58.2,
    protein: 22.3,
    basalMetabolism: 1.49,
    visceralFat: 6,
    boneMass: 2.79,
    bodyAge: 21,
  },
  {
    date: "2021-07-16",
    weigth: 64.25,
    bmi: 20.9,
    bodyFat: 15,
    muscle: 51.81,
    water: 58.3,
    protein: 22.4,
    basalMetabolism: 1.484,
    visceralFat: 6,
    boneMass: 2.78,
    bodyAge: 21,
  },
  {
    date: "2021-07-19",
    weigth: 64.5,
    bmi: 21,
    bodyFat: 15.3,
    muscle: 51.83,
    water: 58.1,
    protein: 22.3,
    basalMetabolism: 1.488,
    visceralFat: 6,
    boneMass: 2.78,
    bodyAge: 22,
  },
  {
    date: "2021-07-22",
    weigth: 64.5,
    bmi: 21.2,
    bodyFat: 15.6,
    muscle: 52.02,
    water: 57.9,
    protein: 22.2,
    basalMetabolism: 1.495,
    visceralFat: 6,
    boneMass: 2.79,
    bodyAge: 22,
  },
]

type TooltipData = {
  bar: SeriesPoint<BioImpedanceData>
  key: string
  index: number
  height: number
  width: number
  x: number
  y: number
  color: string
}

export type BarStackHorizontalProps = {
  width: number
  height: number
  margin?: { top: number; right: number; bottom: number; left: number }
  events?: boolean
}

const purple1 = "#6c5efb"
const purple2 = "#c998ff"
export const purple3 = "#a44afe"
export const background = "#eaedff"
const defaultMargin = { top: 40, left: 50, right: 40, bottom: 100 }
const tooltipStyles = {
  ...defaultStyles,
  minWidth: 60,
  backgroundColor: "rgba(0,0,0,0.9)",
  color: "white",
}

const keys = Object.keys(data[0]).filter(d => d !== "date")

const temperatureTotals = data.reduce((allTotals, currentDate) => {
  const totalTemperature = keys.reduce((dailyTotal, k) => {
    // @ts-ignore
    dailyTotal += Number(currentDate[k])
    return dailyTotal
  }, 0)
  allTotals.push(totalTemperature)
  return allTotals
}, [] as number[])

const parseDate = timeParse("%Y-%m-%d")
const format = timeFormat("%b %d")
const formatDate = (date: string) => format(parseDate(date) as Date)

// accessors
const getDate = (d: BioImpedanceData) => d.date

// scales
const temperatureScale = scaleLinear<number>({
  domain: [0, Math.max(...temperatureTotals)],
  nice: true,
})
const dateScale = scaleBand<string>({
  domain: data.map(getDate),
  padding: 0.2,
})
const colorScale = scaleOrdinal<string, string>({
  domain: keys,
  range: [purple1, purple2, purple3],
})

let tooltipTimeout: number

const Chart = withTooltip<BarStackHorizontalProps, TooltipData>(
  ({
    width,
    height,
    events = false,
    margin = defaultMargin,
    tooltipOpen,
    tooltipLeft,
    tooltipTop,
    tooltipData,
    hideTooltip,
    showTooltip,
  }: BarStackHorizontalProps & WithTooltipProvidedProps<TooltipData>) => {
    // bounds
    const xMax = width - margin.left - margin.right
    const yMax = height - margin.top - margin.bottom

    temperatureScale.rangeRound([0, xMax])
    dateScale.rangeRound([yMax, 0])

    return (
      <div>
        <svg width={width} height={data.length * 100}>
          <rect width={width} height={height} fill={background} rx={14} />
          <Group top={margin.top} left={margin.left}>
            <BarStackHorizontal<BioImpedanceData, string>
              data={data}
              keys={keys}
              height={yMax}
              y={getDate}
              xScale={temperatureScale}
              yScale={dateScale}
              color={colorScale}
            >
              {barStacks =>
                barStacks.map(barStack =>
                  barStack.bars.map(bar => (
                    <rect
                      key={`barstack-horizontal-${barStack.index}-${bar.index}`}
                      x={bar.x}
                      y={bar.y}
                      width={bar.width}
                      height={bar.height}
                      fill={bar.color}
                      onClick={() => {
                        if (events) alert(`clicked: ${JSON.stringify(bar)}`)
                      }}
                      onMouseLeave={() => {
                        tooltipTimeout = window.setTimeout(() => {
                          hideTooltip()
                        }, 300)
                      }}
                      onMouseMove={() => {
                        if (tooltipTimeout) clearTimeout(tooltipTimeout)
                        const top = bar.y + margin.top
                        const left = bar.x + bar.width + margin.left
                        showTooltip({
                          tooltipData: bar,
                          tooltipTop: top,
                          tooltipLeft: left,
                        })
                      }}
                    />
                  ))
                )
              }
            </BarStackHorizontal>
            <AxisLeft
              hideAxisLine
              hideTicks
              scale={dateScale}
              tickFormat={formatDate}
              stroke={purple3}
              tickStroke={purple3}
              tickLabelProps={() => ({
                fill: purple3,
                fontSize: 11,
                textAnchor: "end",
                dy: "0.33em",
              })}
            />
            <AxisBottom
              top={yMax}
              scale={temperatureScale}
              stroke={purple3}
              tickStroke={purple3}
              tickLabelProps={() => ({
                fill: purple3,
                fontSize: 11,
                textAnchor: "middle",
              })}
            />
          </Group>
        </svg>
        <div
          style={{
            width: "100%",
            display: "block",
            fontSize: "14px",
            maxWidth: 708,
            paddingTop: "2rem",
          }}
        >
          <LegendOrdinal
            scale={colorScale}
            direction="row"
            labelMargin="0 15px 0 0"
          >
            {formattedLabel =>
              formattedLabel.map(label => (
                <div
                  style={{
                    display: "inline-flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginRight: "0.5rem",
                  }}
                >
                  <div
                    style={{
                      width: 20,
                      height: 20,
                      backgroundColor: label.value,
                      marginRight: "0.2rem",
                    }}
                  />{" "}
                  {bioImpedenceLabelMap[label.text]}
                </div>
              ))
            }
          </LegendOrdinal>
        </div>
        {tooltipOpen && tooltipData && (
          <Tooltip top={tooltipTop} left={tooltipLeft} style={tooltipStyles}>
            <div style={{ color: colorScale(tooltipData.key) }}>
              <strong>{bioImpedenceLabelMap[tooltipData.key]}</strong>
            </div>
            {/* @ts-ignore */}
            <div>{tooltipData.bar.data[tooltipData.key]}</div>
            <div>
              <small>{formatDate(getDate(tooltipData.bar.data))}</small>
            </div>
          </Tooltip>
        )}
      </div>
    )
  }
)

interface SiteData {
  site: {
    siteMetadata: {
      defaultTitle: string
      defaultDescription: string
    }
  }
}

const HealthPage = () => {
  const data: SiteData = useStaticQuery(graphql`
    query HealthPageSiteData {
      site {
        siteMetadata {
          defaultTitle
          defaultDescription
        }
      }
    }
  `)

  const meta = data.site.siteMetadata

  return (
    <Site>
      <Main>
        <Helmet title={`${meta.defaultTitle}'s map`}>
          <meta
            name="twitter:title"
            content={`${meta.defaultTitle}'s health`}
          />
          <meta name="twitter:description" content={meta.defaultDescription} />
        </Helmet>
        <PageHeader title="Health" />
        <Inner>
          <Section>
            <ParentSize>
              {({ width, height }) => <Chart width={width} height={height} />}
            </ParentSize>
          </Section>
        </Inner>
      </Main>
    </Site>
  )
}

export default HealthPage
