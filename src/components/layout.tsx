/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import Octicon, { Heart } from "@primer/octicons-react"
import styled from "styled-components"

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  max-width: 1140px;
`

const Footer = styled.footer`
  display: flex;
  flex-direction: row;
  position: absolute;
  bottom: 0px;
  padding-bottom: 20px;
`

interface Props {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <AppWrapper>
      <Header siteTitleAnimation={data.site.siteMetadata.title} />
      <main>{children}</main>
      <Footer>
        <span>
          Made with
          {` `}
          <Octicon icon={Heart} size="small" ariaLabel="Love" />
        </span>
      </Footer>
    </AppWrapper>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
