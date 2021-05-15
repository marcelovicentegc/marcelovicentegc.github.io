import React from "react"
import Helmet from "react-helmet"
import { graphql } from "gatsby"
import { Site } from "../components/Site"
import { PageHeader } from "../components/PageHeader"
import { Inner } from "../components/System"
import { Alert } from "../components/Alert"
import { Markdown } from "../components/Markdown"

export default function Template({ data }) {
  const { markdownRemark: post } = data
  const meta = data.site.siteMetadata

  const dateToday = new Date()
  const datePost = new Date(post.fields.date)

  const isOldPost =
    (Number(dateToday) - Number(datePost)) / (1000 * 3600 * 24 * 365) > 1

  return (
    <Site>
      <main>
        <article>
          <Helmet title={`${post.frontmatter.title} - ${meta.defaultTitle}`}>
            <meta
              name="twitter:title"
              content={`${post.frontmatter.title} - ${meta.defaultTitle}`}
            />
            <meta name="twitter:description" content={post.excerpt} />
          </Helmet>
          <PageHeader
            title={post.frontmatter.title}
            subTitle={`By ${meta.author} on ${post.fields.date}`}
          />
          <Inner>
            {isOldPost ? (
              <Alert>
                This post is over a year old. Some of the content may be out of
                date.
              </Alert>
            ) : null}
            <Markdown
              dangerouslySetInnerHTML={{ __html: post.html }}
              id="top"
              className="content"
            />
          </Inner>
        </article>
      </main>
    </Site>
  )
}

export const pageQuery = graphql`
  query BlogPostByPath($slug: String!) {
    site {
      siteMetadata {
        author
        defaultTitle
        defaultDescription
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      excerpt
      fields {
        date(formatString: "MMMM DD, YYYY")
        slug
      }
      frontmatter {
        title
      }
    }
  }
`
