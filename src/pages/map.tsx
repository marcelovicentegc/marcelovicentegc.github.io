import React from "react"
import Helmet from "react-helmet"
import { graphql, useStaticQuery } from "gatsby"
import { Site } from "../components/Site"
import { PageHeader } from "../components/PageHeader"
import { Inner } from "../components/System"
import { Section } from "../components/Section"

interface SiteData {
  site: {
    siteMetadata: {
      defaultTitle: string
      defaultDescription: string
    }
  }
}

const MapPage = () => {
  const data: SiteData = useStaticQuery(graphql`
    query MapPageSiteData {
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
      <main>
        <Helmet title={`${meta.defaultTitle}'s map`}>
          <meta name="twitter:title" content={`${meta.defaultTitle}'s map`} />
          <meta name="twitter:description" content={meta.defaultDescription} />
        </Helmet>
        <PageHeader title="Map" />
        <Inner>
          <Section>
            <iframe
              style={{
                background: "#f9f9f9",
                maxWidth: 740,
                minWidth: 320,
                minHeight: "50vh",
                maxHeight: "100vh",
                height: "100%",
                width: "100%",
              }}
              src="https://nomadlist.com/@marcelovicenteg/embed"
              scrolling="no"
              frameBorder="0"
              allowFullScreen
            />
          </Section>
        </Inner>
      </main>
    </Site>
  )
}

export default MapPage
