import { graphql, Link, StaticQuery } from "gatsby"
import React from "react"
import Helmet from "react-helmet"
import styled from "styled-components"
import { Main } from "../../components/Main"
import { PageHeader } from "../../components/PageHeader"
import { Section } from "../../components/Section"
import { Site } from "../../components/Site"
import { Box, Inner } from "../../components/System"
import { Text } from "../../typography"

const PostDate = styled(Text)`
  font-size: 0.8em;
  display: block;
`

interface Post {
  node: {
    frontmatter: {
      title: string
    }
    excerpt: string
    fields: {
      slug: string
      date: string
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
  allMarkdownRemark: {
    edges: Post[]
  }
}

interface Props {
  data: SiteData
}

function JournalPage({ data }: Props) {
  const meta = data.site.siteMetadata
  const { edges: posts } = data.allMarkdownRemark

  return (
    <Site>
      <Main>
        <Helmet title={`${meta.defaultTitle}'s journal`}>
          <meta
            name="twitter:title"
            content={`${meta.defaultTitle}'s journal`}
          />
          <meta
            name="twitter:description"
            content={`Journal - ${meta.defaultDescription}`}
          />
        </Helmet>
        <PageHeader title="Journal" />
        <Inner>
          <Section>
            {posts
              .filter(post => post.node.frontmatter.title.length > 0)
              .map(({ node: post }) => (
                <Box mb={3} key={post.frontmatter.title}>
                  <Text fontWeight="500">
                    <Link
                      to={post.fields.slug}
                      style={{ textDecoration: "none" }}
                    >
                      {post.frontmatter.title}
                      <PostDate is="time" dateTime={post.fields.date}>
                        {post.fields.date}
                      </PostDate>
                      <Text is="span" fontSize={1}>
                        {post.excerpt}
                      </Text>
                    </Link>
                  </Text>
                </Box>
              ))}
          </Section>
        </Inner>
      </Main>
    </Site>
  )
}

export default () => (
  <StaticQuery
    query={graphql`
      query JournalQuery {
        site {
          siteMetadata {
            defaultTitle
            defaultDescription
          }
        }
        allMarkdownRemark(sort: { fields: [fields___date], order: DESC }) {
          edges {
            node {
              excerpt(pruneLength: 100)
              id
              fields {
                date(formatString: "MMMM DD, YYYY")
                slug
              }
              frontmatter {
                title
              }
            }
          }
        }
      }
    `}
    render={data => <JournalPage data={data} />}
  />
)
