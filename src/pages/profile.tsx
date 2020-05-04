import React from "react"
import Helmet from "react-helmet"
import { graphql, useStaticQuery } from "gatsby"
import { Site } from "../components/Site"
import { PageHeader } from "../components/PageHeader"
import { Inner } from "../components/System"
import { Section, SectionTitle } from "../components/Section"
import { P, Text } from "../typography"
import { Row } from "../components/Row"

interface Repository {
  name: string
  description: string
  url: string
  stargazers: {
    totalCount: number
  }
  forkCount: number
}

interface GithubData {
  github: {
    viewer: {
      repositories: {
        nodes: Repository[]
      }
    }
  }
}

interface SiteData {
  site: {
    siteMetadata: {
      defaultTitle: string
      defaultDescription: string
    }
  }
}

interface Data extends SiteData, GithubData {}

const ProfilePage: React.FC = () => {
  const data: Data = useStaticQuery(graphql`
    query ProfileQueryAndGetRepositories {
      github {
        viewer {
          repositories(
            privacy: PUBLIC
            first: 100
            isFork: false
            orderBy: { field: UPDATED_AT, direction: DESC }
          ) {
            nodes {
              name
              description
              url
            }
          }
        }
      }

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
        <Helmet title={`Profile - ${meta.defaultTitle}`}>
          <meta
            name="twitter:title"
            content={`Profile - ${meta.defaultTitle}`}
          />
          <meta name="twitter:description" content={meta.defaultDescription} />
        </Helmet>
        <PageHeader title="Profile" />
        <Inner>
          <Section>
            <P>
              I'm Marcelo, a Frontend Engineer based in Salvador currently at{" "}
              <a
                href="https://cubos.io"
                target="_blank"
                rel="noopener noreferrer"
              >
                Cubos
              </a>
              .
            </P>
          </Section>
          <Section>
            <SectionTitle>Experience</SectionTitle>
            <P fontWeight={500}>Cubos (2019 - Present)</P>
            <P>
              I developed and maintained web applications within the range of 5
              to 80k lines of code mostly written with React, on a MVVM fashion,
              while also writing unit tests, building complex pipelines,
              documenting the front-end, back-end, the business logic and
              developing APIs with Typescript and an incredibly amazing tool
              developed internally at Cubos called &nbsp;
              <a href="https://github.com/sdkgen/sdkgen" target="_blank">
                sdkgen
              </a>
              .
            </P>
            <P>
              The projects I had a critical role were Fitdance and Credcesta.
            </P>
            <P>
              Fitdance is a huge dancing platform, mainly online. While at
              Fitdance, I built an{" "}
              <a href="https://fitdance.com" target="_blank">
                e-commerce
              </a>{" "}
              and a CMS to manage both the e-commerce and the dancing platform
              itself. We were a team of eight people: a project manager, a QA
              analyst, four backend developers and two frontend developers -
              with me included. The e-commerce handles 100k users/month.
            </P>
            <P>
              Credcesta is a payroll loan platform implemented in the state of
              Bahia, Brazil, for clients and the business owners. I maintained
              the website for users to manage their payroll loans while working
              on its redesign and expansion. Besides that, I built the website
              for the Credcesta staff to manage themselves, visualize data
              related to the main platform usage, and send push notifications to
              their clients. I used a UI library I built and made available on a
              private NPM registry based on the design system developed at Cubos
              on both websites. In addition to it,{" "}
              <a href="https://www.credcesta.com.br" target="_blank">
                I managed to insert a CMS into their preexistent institutional
              </a>
              , static website, using Django, moving all the code base
              previously written with the Pug template engine and Gulp to the
              python framework, integrating with some AWS services and making a
              REST API available to fetch data about stores affiliated to
              Credcesta. The static website is Cubos' first Django product
              released. I also wrote the push notifications API and an API to
              manage the staff, as well as contributed to the API consumed by
              the main application - the one for users to manage their payroll
              loans - clients (iOS, Android and Web). I used Kubernetes to
              deploy the push notifications API, the admin API, the
              institucional website, the admin website and the main platform
              website. The team grew steadily from the beginning, and I was the
              only frontend developer from September/2019 to April/2020. Right
              now we are a team of twelve and still growing: three Android
              developers, two iOS developers, one designer, one QA analyst,
              three backend developers and two frontend developers, with myself
              having an active role on the backend.
            </P>
            <P>
              I also participated/contributed to projects such as BBNK - which
              is a white-label "bank generator" -,{" "}
              <a href={"https://amigoedu.com.br"} target={"_blank"}>
                Amigo Edu
              </a>{" "}
              - an application that gathers graduation courses information and
              offers discounts through the platform - and{" "}
              <a href={"https://cubos.io"} target={"_blank"}>
                Cubos' institutional website
              </a>
              . I created some internal tools such as an email signature
              generator and a code generator (sdkgen) playground (
              <a
                href={"https://github.com/marcelovicentegc/sdkgen-playground"}
                target={"_blank"}
              >
                which is available on Github by the way
              </a>
              ). Besides that, I contributed to the creation of a
              quality-oriented web development culture, made awesome connections
              I'll carry with me forever, learned a lot from my colleagues and
              shared as much as I could with them.
            </P>
          </Section>
          <Section>
            <SectionTitle>Open source projects</SectionTitle>
            <Row>
              <Text>
                <a
                  href={
                    "https://underworld-industries.github.io/react-github-heatmap/"
                  }
                >
                  {"react-github-heatmap"}{" "}
                  {`- A plugable general purpose Github-like contribution graph.`}
                </a>
              </Text>
            </Row>
            {data.github.viewer.repositories.nodes.map(project => {
              return (
                <Row>
                  <Text>
                    <a href={project.url}>
                      {project.name}{" "}
                      {project.description && `- ${project.description}`}
                    </a>
                  </Text>
                </Row>
              )
            })}
          </Section>
          <Section>
            <SectionTitle>Resume</SectionTitle>
            <Text>
              <a href="https://stackoverflow.com/users/story/pdf/9317004?View=Pdf">
                Download as PDF
              </a>
            </Text>
          </Section>
        </Inner>
      </main>
    </Site>
  )
}

export default ProfilePage
