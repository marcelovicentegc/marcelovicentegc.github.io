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

const ProfilePage = () => {
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
        <Helmet title={`${meta.defaultTitle}'s profile`}>
          <meta
            name="twitter:title"
            content={`${meta.defaultTitle}'s profile`}
          />
          <meta name="twitter:description" content={meta.defaultDescription} />
        </Helmet>
        <PageHeader title="Profile" />
        <Inner>
          <Section>
            <P>
              I'm Marcelo, a Software Engineer working remotely, currently at{" "}
              <a
                href="https://vtex.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                VTEX
              </a>
              .
            </P>
          </Section>
          <Section>
            <SectionTitle>Experience</SectionTitle>
            <P fontWeight={500}>
              <b>VTEX (2021 - present)</b>
            </P>
            <P>
              VTEX is the only multi-tenant commerce platform that unifies
              customer experiences across all channels into a comprehensive
              enterprise solution. Trusted by Sony, Motorola, Walmart,
              Whirlpool, Coca-Cola, Stanley Black & Decker, Nestlé, and over
              3,000 online stores in 45 countries, the platform accelerates the
              commerce transformation of complex operations.{" "}
            </P>
            <P>
              While at VTEX, I was responsible for:
              <br />
              <b>
                <i>Shipping customer-facing features</i>
              </b>
              <li>
                Developing and maintaining the new Admin version, the main
                touchpoint with the merchants, where clients configure and
                manage everything related to their commerce operations - a key
                product for VTEX to penetrate the global market even further -
                as a <i>Software Engineer</i> and{" "}
                <i>Senior Software Engineer</i>.
              </li>
              <li>
                Developing key features for the new Admin such as a Global
                Search.
              </li>
              <b>
                <i>Shipping developer-facing features (DX)</i>
              </b>
              <li>
                Developing and maintaining several internal tools tailored to
                increase developers and product managers' performance, such as a
                CLI to automate boring tasks executed by both roles and another
                one that increased developer productivity by 5x.
              </li>
              <li>
                Developing several components for the new Admin's UI library and
                design system.
              </li>
              <b>
                <i>Shipping Observability</i>
              </b>
              <li>
                Instrumented several systems to collect data and generate
                insights and measure SLOs. Splunk, Grafana, Prometheus and
                Honeycomb are some of the used to achieve that. Created alarms
                and dashboards to monitor the health of the systems.
              </li>
              <li>
                Developing and maintaining a microservice to ingest
                observability data from frontend applications. This microservice
                allowed several teams to have a better understanding of their
                applications' performance and to make data-driven decisions to
                improve their products.
              </li>
              <b>
                <i>Discoveries</i>
              </b>
              <li>
                Researching micro-frontend architecture strategies and
                initiatives that generated insights into the future of the
                VTEX's Admin. A Github organization with POCs was created on one
                of those discovery iterations and is available at:
                https://github.com/micro-frontend-frameworks.
              </li>
              <li>
                <i>
                  "Marcelo built most of the MVP for the new Admin Shell outside
                  Render Framework. It's a complex project involving a
                  completely new framework, and finding solutions to auth
                  integration problems, among other things. For example, he
                  built a way to develop locally that hides a lot of
                  complexities on how auth is integrated. He also managed to
                  create, on his own, a CloudFront distribution to integrate
                  with VTEX's login system, which is very tricky to achieve. It
                  was great to come back from vacation and see all that already
                  working"
                </i>
                . - Maíra Belo, Staff Software Engineer
              </li>
              <li>
                Created a micro-service integrated with OpenAI that used
                Langchain integrated with VTEX's knowledge base content, to
                generate helpful instructions to users visiting the new Admin.
                This discovery explored the capabilites of the GPT-4 model into
                VTEX's Admin.
              </li>
              <b>
                <i>Being a player</i>
              </b>
              <li>
                Documented and tested large portions of the codebases I worked
                upon, reducing technical debt.
              </li>
              <li>
                Providing support for internal systems as well as helping
                external teams with products related to ours.
              </li>
            </P>

            <P fontWeight={500}>
              <b>Cubos (2019 - 2021)</b>
            </P>
            <P>
              Cubos is a software development consultancy company - a startup
              factory - offering DevOps, Outsourcing, MVP, and complex digital
              solutions.{" "}
              <a
                href="https://cubos.io/"
                target="_blank"
                rel={"noopener norefereer"}
              >
                If you want to learn more, visit cubos.io.
              </a>
            </P>
            <P>
              While at Cubos, I was responsible for:
              <li>
                Playing a critical role in the development of VTEX's new Admin
                version, the main touchpoint with the merchants, where clients
                configure and manage everything related to their commerce
                operations - a key product for VTEX to penetrate the global
                market even further -, along with mentoring other engineers and
                playing a key role in strengthening Cubos' frontend testing
                culture, as a <i>Software Engineer</i>
              </li>
              <li>
                Improving and maintaining several micro-services and frontend
                projects for{" "}
                <a
                  href="https://www.credcesta.com.br"
                  target="_blank"
                  rel={"noopener norefereer"}
                >
                  Credcesta
                </a>
                , a payroll loan platform, leading and managing a team of 6 to
                12 people - from designers to QA's and developers -, giving
                support on production deploys and for being on the frontline of
                architectural, product, development, delivery and scaling
                decisions, as well as priority orchestration as a{" "}
                <i>Tech Lead and Software Engineer</i>.
              </li>
              <li>
                Maintaining several micro-services for Credcesta (a Push
                notifications service, an Admin service, an Authentication
                service, an Audit service, and the User service consumed by all
                clients (Android, iOS, and Web), which handles 40k monthly
                users), its admin website and moving their pre-existent
                institutional, static website, for a dynamic, manageable
                website, using Django to insert a CMS, refactoring all the code
                base previously written with the Pug template engine and Gulp to
                the python framework, integrating with some AWS services (S3 and
                SecretsManager) and making a REST API available to fetch data
                about stores affiliated to Credcesta (the static website is
                Cubos' first Django product ever released), as a{" "}
                <i>Software Engineer</i>.
              </li>
              <li>
                Building{" "}
                <a
                  href="https://fitdance.com"
                  target="_blank"
                  rel={"noopener norefereer"}
                >
                  Fitdance's e-commerce
                </a>{" "}
                and CMS, a UI library for{" "}
                <a
                  href="https://www.credcesta.com.br"
                  target="_blank"
                  rel={"noopener norefereer"}
                >
                  Credcesta
                </a>
                , coding Credcesta's credit platform redesign, documenting
                Credcesta's product (from the business logic and API
                functionalities to UI components) and writing hundreds of unit
                tests, complex pipelines and contributing to other projects such
                as BBNK (Whitelabel internet banking system),{" "}
                <a
                  href={"https://amigoedu.com.br"}
                  target={"_blank"}
                  rel={"noopener norefereer"}
                >
                  Amigo Edu (a student benefit application)
                </a>{" "}
                and Cubos' institutional website, as a <i>Software Engineer</i>.
              </li>
            </P>
            <P fontWeight={500}>
              <b>Eduardo Sampaio (2020)</b>
            </P>
            <P>
              Eduardo needed to build a website for his political campaign as a
              city councilor, and he needed it to be done fast. He wanted an
              editable, high-performing website, with open communication
              channels with his visitors, as well as to receive live updates on
              who was volunteering for his campaign or who had subscribed to his
              newsletter. I built his website using Django, React, Typescript
              and PostgreSQL.
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
              and increase the overall lead.
            </P>
            <P>
              It was a really fun project, Eduardo was really satisfied and I
              still am its maintainer.
            </P>
            <P fontWeight={500}>
              <b>Binder (2020)</b>
            </P>
            <P>
              Binder is a prototype of a project that ran for (and won) the 2020{" "}
              <a
                href={"https://www.institutotomieohtake.org.br/"}
                rel={"noopener norefereer"}
                target={"_blank"}
              >
                Tomie Ohtake Leroy Merlin Institue
              </a>{" "}
              Design Award, in São Paulo. Two open-source projects were brought
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
                whiteboard tool
              </a>
              , the latter being a custom fork from the awesome{" "}
              <a
                href={"https://excalidraw.com/"}
                rel={"noopener norefereer"}
                target={"_blank"}
              >
                Excalidraw
              </a>{" "}
              project. Binder is about taking notes from classes. High schoolers
              from 9th to 11th grade are its targeted audience. The prototype's
              mocked functionalities let you create, customize and manage boards
              and binders. It relies on Gatsby to build the static content, and
              on Mobx to manage the global state. Binder was designed to run on
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
            <SectionTitle>Talks</SectionTitle>
            <P>
              <a
                href={"https://www.youtube.com/watch?v=17Qp30Zqevk"}
                rel={"noopener norefereer"}
                target={"_blank"}
              >
                VTEX Summer Internship for Software Engineers
              </a>
            </P>
          </Section>
          <Section>
            <SectionTitle>Open-source projects</SectionTitle>
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
                href="https://stackoverflow.com/cv/marcelovicentegc"
                rel={"noopener norefereer"}
                target={"_blank"}
              >
                Check out my curriculum
              </a>
            </Text>
          </Section>
        </Inner>
      </main>
    </Site>
  )
}

export default ProfilePage
