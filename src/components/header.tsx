import { Link } from "gatsby"
import React from "react"
import Octicon, { MarkGithub } from "@primer/octicons-react"
import styled from "styled-components"

const ExternalLinks = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding-right: 20px;
  padding-top: 20px;

  a {
    color: #000;
    transition: 0.2s;

    &:hover {
      color: #0275d8;
    }
  }
`

const HeaderTag = styled.header`
  width: 100%;
`

interface Props {
  siteTitleAnimation: React.ReactNode
}

const Header = ({ siteTitleAnimation }: Props) => (
  <HeaderTag>
    <ExternalLinks>
      <a href="https://github.com/marcelovicentegc" target="_blank">
        <Octicon icon={MarkGithub} size="medium" ariaLabel="Github" />
      </a>
    </ExternalLinks>
    <h1>
      <Link to="/">{siteTitleAnimation}</Link>
    </h1>
  </HeaderTag>
)

Header.defaultProps = {
  siteTitleAnimation: ``,
}

export default Header
