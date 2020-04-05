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
        href="https://www.linkedin.com/in/marcelo-cardoso-b77261144/"
        itemProp="sameAs"
      >
        Linkedin
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer me"
        href="http://medium.com/marcelovicentegc"
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
        href="http://github.com/marcelovicentegc"
        itemProp="sameAs"
      >
        GitHub
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer me"
        href="http://sourcerer.io/marcelovicentegc"
        itemProp="sameAs"
      >
        Sourcerer
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="http://github.com/marcelovicentegc/marcelovicentegc.github.io"
      >
        View source code
      </a>
    </span>
  </StyledFooter>
)
