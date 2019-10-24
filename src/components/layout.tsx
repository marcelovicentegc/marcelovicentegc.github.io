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
  height: 100vh;
`

const Main = styled.main`
  width: 100%;
  height: calc(100vh - 113px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Footer = styled.footer`
  display: flex;
  flex-direction: row;
  position: absolute;
  bottom: 0px;
  padding: 20px 0;
  width: 100%;
  display: flex;
  justify-content: center;
`

const FadeBottom = styled.div`
  position: relative;
  top: -21px;
  width: 100%;
  height: 27px;
  background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0), #ffffff);
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
      <Main>{children}</Main>
      <FadeBottom />
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
