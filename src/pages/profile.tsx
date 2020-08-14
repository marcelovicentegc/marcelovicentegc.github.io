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
              I'm Marcelo, a Full Stack Engineer based in Salvador currently at{" "}
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
              <a
                href="https://github.com/sdkgen/sdkgen"
                target="_blank"
                rel={"noopener norefereer"}
              >
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
              <a
                href="https://fitdance.com"
                target="_blank"
                rel={"noopener norefereer"}
              >
                e-commerce
              </a>{" "}
              and a CMS to manage both the e-commerce and the dancing platform
              itself. The CMS' frontend relies on the Material UI design lib,
              while the E-commerce design system was built in house. They were
              moving from a third party CMS to their own CMS, and from one
              payment gateway to another. We were assigned to make that
              transition happen: a team of eight people - a project manager, a
              QA analyst, four backend developers and two frontend developers.
              The e-commerce welcomes 100k monthly users.
            </P>
            <P>
              Credcesta is a payroll loan platform implemented in the state of
              Bahia, Brazil, for clients and the business owners. Credcesta was
              moving its credit card from a private label to Visa. That move
              required big changes. I maintained the website for users to manage
              their payroll loans while working on its redesign and expansion.
              Besides that, I built the website for the Credcesta staff to
              manage themselves, visualize data related to the main platform
              usage, and send push notifications to their clients. I used a UI
              library I built and made available on a private NPM registry based
              on the design system developed at Cubos on both websites. In
              addition to it,{" "}
              <a
                href="https://www.credcesta.com.br"
                target="_blank"
                rel={"noopener norefereer"}
              >
                I managed to insert a CMS into their preexistent institutional
              </a>
              , static website, using Django, moving all the code base
              previously written with the Pug template engine and Gulp to the
              python framework, integrating with some AWS services (S3 and
              SecretsManager) and making a REST API available to fetch data
              about stores affiliated to Credcesta. The static website is Cubos'
              first Django product ever released. I also wrote several
              micro-services: a push notifications API, an authentication API,
              an audit API, and an API to manage the staff, not speaking of the
              API consumed by the main application - the one for users to manage
              their payroll loans - clients (iOS, Android and Web) and its 40k
              monthly users. We used Kubernetes to deploy every micro service,
              the institucional website, the admin website and the main platform
              website, as well as Firebase to deploy the admin website on a
              development and a Q.A. environment. The team grew steadily from
              the beginning, and I was the only frontend developer from
              September/2019 to April/2020. The team peaked at August/2020 when
              we were a team of twelve: three Android developers, two iOS
              developers, one designer, one QA analyst, three backend developers
              and two frontend developers, with myself having a full stack role,
              and being the lead developer of my stacks and a squad leader. I
              had a crucial role on key product decisions, development, delivery
              and team management.
            </P>
            <P>
              I also participated/contributed to projects such as BBNK - which
              is a white-label "bank generator" -,{" "}
              <a
                href={"https://amigoedu.com.br"}
                target={"_blank"}
                rel={"noopener norefereer"}
              >
                Amigo Edu
              </a>{" "}
              - an application that gathers graduation courses information and
              offers discounts through the platform - and{" "}
              <a
                href={"https://cubos.io"}
                target={"_blank"}
                rel={"noopener norefereer"}
              >
                Cubos' institutional website
              </a>
              . I created some internal tools such as an email signature
              generator and a code generator (sdkgen) playground (
              <a
                href={"https://github.com/marcelovicentegc/sdkgen-playground"}
                target={"_blank"}
                rel={"noopener norefereer"}
              >
                which is available on Github by the way
              </a>
              ). Besides that, I contributed to the creation of a
              quality-oriented web development culture, made awesome connections
              I'll carry with me forever, learned a lot from my colleagues and
              shared as much as I could with them.
            </P>
            <P fontWeight={500}>Eduardo Sampaio (2020)</P>
            <P>
              Eduardo needed to build a website for his political campaign as a
              city councilor, and he needed it to be done fast. He wanted an
              editable, high performing website, with open communication
              channels with his visitors, as well as to receive live updates on
              who was volunteering for his campaign or who had subscribed to his
              newsletter. I built his website using Django, React, Typescript
              and PostgreSQL. You can{" "}
              <a
                href={"https://eduardosampaionovo.com"}
                target={"_blank"}
                rel={"noopener norefereer"}
              >
                visit it here
              </a>
              .
            </P>
            <P>
              It uses Memcached to cache the static content - served gzipped by
              Nginx - and has a REST API (Django Rest Framework) which binds
              React to Django's ORM and was deployed on Digital Ocean. It counts
              on Cloudinary as its CDN.
            </P>
            <P>
              I built CI/CD pipelines with Github Actions to ease the deployment
              process and stripped down the code to make a React-Django
              boilerplate{" "}
              <a
                href={
                  "https://github.com/marcelovicentegc/django-react-typescript"
                }
                target={"_blank"}
                rel={"noopener norefereer"}
              >
                available on Github
              </a>
              .
            </P>
            <P>
              It was possible to capture several volunteers for his campaign, as
              well as keep hundreds of followers updated through his newsletter
              and increase overall lead.
            </P>
            <P>
              It was a really fun project, Eduardo was really satisfied and I
              still am its maintainer.
            </P>
            <P fontWeight={500}>Binder (2020)</P>
            <P>
              Binder is a prototype of a project running for the 2020{" "}
              <a
                href={"https://www.institutotomieohtake.org.br/"}
                rel={"noopener norefereer"}
                target={"_blank"}
              >
                Tomie Ohtake Leroy Merlin Institue
              </a>{" "}
              Design Award, in São Paulo. Two open source projects were brought
              to life from it, a{" "}
              <a
                href={"https://github.com/marcelovicentegc/binder-ui"}
                rel={"noopener norefereer"}
                target={"_blank"}
              >
                UI library
              </a>
              , and a{" "}
              <a
                href={"https://github.com/marcelovicentegc/binder-editor"}
                rel={"noopener norefereer"}
                target={"_blank"}
              >
                white board tool
              </a>
              , the latter being a custom fork from the awesome{" "}
              <a href={"https://excalidraw.com/"}>Excalidraw</a> project. Binder
              is about taking notes from classes. High schoolers from 9th to
              11th grade are it's targeted audience. The prototype's mocked
              functionalities lets you create, customize and manage boards and
              binders. It relies on Gatsby to build the static content, and on
              Mobx to manage the global state. Binder was designed to be ran on
              top of browsers under tablets. You can visit the prototype{" "}
              <a
                href={"https://binder-prototype.netlify.com/"}
                rel={"noopener norefereer"}
                target={"_blank"}
              >
                here
              </a>
              .
            </P>
          </Section>
          <Section>
            <SectionTitle>Open source projects</SectionTitle>
            {data.github.viewer.repositories.nodes.map(project => {
              return (
                <Row>
                  <Text>
                    <a
                      href={project.url}
                      rel={"noopener norefereer"}
                      target={"_blank"}
                    >
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
              <a
                href="https://stackoverflow.com/users/story/pdf/9317004?View=Pdf"
                rel={"noopener norefereer"}
              >
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
