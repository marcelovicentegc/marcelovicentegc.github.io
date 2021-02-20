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
      Remote-based Software Engineer currently working at{" "}
      <a href="https://vtex.com" rel={"noopener norefereer"} target={"_blank"}>
        VTEX
      </a>
      .
    </Mo>
    <Flair>
      <span role="img" aria-label="rocket">
        🚀
      </span>
    </Flair>
  </StyledSpine>
)
