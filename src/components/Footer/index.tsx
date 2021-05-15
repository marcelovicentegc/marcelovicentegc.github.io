import React from "react"
import { StyledFooter } from "./styles"
import { LinkedinIcon } from "../../assets/icons/linkedin"
import { GithubIcon } from "../../assets/icons/github"
import { StackOverflowIcon } from "../../assets/icons/stackOverflow"
import { MediumIcon } from "../../assets/icons/medium"
import { NpmIcon } from "../../assets/icons/npm"
import { StravaIcon } from "../../assets/icons/strava"
import { CodeIcon } from "../../assets/icons/branch"
import { DuolingoIcon } from "../../assets/icons/duolingo"

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
      >
        <LinkedinIcon style={iconProps} />
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer me"
        href="https://medium.com/@marcelovicentegc"
        itemProp="sameAs"
      >
        <MediumIcon style={iconProps} />
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer me"
        href="https://www.strava.com/athletes/35289893"
        itemProp="sameAs"
      >
        <StravaIcon style={iconProps} />
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer me"
        href="https://github.com/marcelovicentegc"
        itemProp="sameAs"
      >
        <GithubIcon style={iconProps} />
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/marcelovicentegc/marcelovicentegc.github.io"
        itemProp="sameAs"
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
      >
        <StackOverflowIcon style={iconProps} />
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.npmjs.com/~marcelovicentegc"
        itemProp="sameAs"
      >
        <NpmIcon
          style={{
            width: 20,
          }}
        />
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.duolingo.com/profile/marcelovicentegc"
        itemProp="sameAs"
      >
        <DuolingoIcon style={iconProps} />
      </a>
    </span>
  </StyledFooter>
)
