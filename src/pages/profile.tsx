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
              to 80k lines mostly written in React, while also writing unit
              tests, building pipelines and documenting the front-end, back-end
              and the business logic.
            </P>
            <P>The projects I had a major role were Fitdance and Credcesta.</P>
            <P>
              Fitdance is a huge dancing platform, mainly online. At Fitdance, I
              built an e-commerce and a CMS to manage both the e-commerce and
              the dancing platform itself.
            </P>
            <P>
              Credcesta is a payroll loan platform implemented in the state of
              Bahia, Brazil, for clients and the business owners. There, I built
              the website for users to manage their payroll loans and the
              website for the Credcesta staff to manage themselves and send push
              notifications to their clients. I used a UI library I built and
              made available on a private NPM registry based on the design
              system developed at Cubos on both websites. I also managed to
              insert a CMS into their existent institutional, static website,
              using Django, moving all the code base previously written with the
              Pug template engine and Gulp, to the python framework, integrating
              with some AWS services.
            </P>
            <P>
              I also participated/contributed to projects such as BBNK - which
              is a white-label "bank generator" -, Lex - which is an
              institutional website for a tributary technology company -, Amigo
              Edu - an application that gathers graduation courses information
              and offers discounts trough the platform - and Cubos'
              institutional website. I created some internal tools such as an
              email signature generator and a code generator (sdkgen) playground
              (which is available on Github by the way). Besides that, I
              contributed to the creation of a quality-oriented web development
              culture, made awesome connections I'll carry with me forever,
              learned a lot from my colleagues and shared as much as I could
              with them.
            </P>
          </Section>
          <Section>
            <SectionTitle>Personal projects</SectionTitle>
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
              <a href="">Download as PDF</a>
            </Text>
          </Section>
        </Inner>
      </main>
    </Site>
  )
}

export default ProfilePage
