import React from "react"
import { StyledSpine, Logo, Mo, Flair } from "./styles"

export const Spine = () => (
  <StyledSpine>
    <a href="/">
      <Logo fontSize={1} fontWeight="500" mr={3} href="/">
        marcelovicentegc
      </Logo>
    </a>
    <Mo fontSize={1}>
      Salvador based Full Stack Engineer currently working at Cubos
    </Mo>
    <Flair>
      <span role="img" aria-label="rocket">
        🚀
      </span>
    </Flair>
  </StyledSpine>
)
