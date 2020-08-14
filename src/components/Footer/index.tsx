import React from "react"
import { StyledFooter } from "./styles"

const CURRENT_YEAR = new Date().getFullYear()

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
        Linkedin
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer me"
        href="https://medium.com/@marcelovicentegc"
        itemProp="sameAs"
      >
        Medium
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer me"
        href="https://www.strava.com/athletes/35289893"
        itemProp="sameAs"
      >
        Strava
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer me"
        href="https://github.com/marcelovicentegc"
        itemProp="sameAs"
      >
        GitHub
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer me"
        href="https://sourcerer.io/marcelovicentegc"
        itemProp="sameAs"
      >
        Sourcerer
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/marcelovicentegc/marcelovicentegc.github.io"
        itemProp="sameAs"
      >
        Source code
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://stackoverflow.com/users/9317004/marcelo-cardoso?tab=profile"
        itemProp="sameAs"
      >
        StackOverflow
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.npmjs.com/~marcelovicentegc"
        itemProp="sameAs"
      >
        NPM
      </a>
    </span>
  </StyledFooter>
)
