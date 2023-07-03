import React from "react"
import { StyledFooter } from "./styles"
import { LinkedinIcon } from "../../assets/icons/linkedin"
import { GithubIcon } from "../../assets/icons/github"
import { StackOverflowIcon } from "../../assets/icons/stackOverflow"
import { CodeIcon } from "../../assets/icons/branch"

const CURRENT_YEAR = new Date().getFullYear()

const iconProps: React.CSSProperties = {
  width: 15,
  height: 15,
}

export const Footer = () => (
  <StyledFooter as="footer">
    <span itemScope itemType="http://schema.org/Organization">
      <link itemProp="url" href="https://marcelo.page" />
      &copy; {CURRENT_YEAR} -
      <a
        target="_blank"
        rel="noopener noreferrer me"
        href="https://www.linkedin.com/in/marcelovicentegc/"
        itemProp="sameAs"
        title="Linkedin profile"
      >
        <LinkedinIcon style={iconProps} />
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer me"
        href="https://github.com/marcelovicentegc"
        itemProp="sameAs"
        title="Github profile"
      >
        <GithubIcon style={iconProps} />
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/marcelovicentegc/marcelovicentegc.github.io"
        itemProp="sameAs"
        title="This site's source code"
      >
        <CodeIcon
          style={{
            height: 15,
          }}
        />
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://stackoverflow.com/users/9317004/marcelo-cardoso?tab=profile"
        itemProp="sameAs"
        title="StackOverflow profile"
      >
        <StackOverflowIcon style={iconProps} />
      </a>
    </span>
  </StyledFooter>
)
