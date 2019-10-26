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
  height: 52px;
`

const Header = () => (
  <HeaderTag>
    <ExternalLinks>
      <a href="https://github.com/marcelovicentegc" target="_blank">
        <Octicon icon={MarkGithub} size="medium" ariaLabel="Github" />
      </a>
    </ExternalLinks>
  </HeaderTag>
)

export default Header
