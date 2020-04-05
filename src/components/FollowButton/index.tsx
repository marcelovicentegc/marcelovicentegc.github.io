import React from "react"
import { StyledButton } from "./styles"

export const FollowButton = props => (
  <StyledButton
    as="a"
    href="https://github.com/marcelovicentegc"
    target="_blank"
    {...props}
  >
    @marcelovicentegc on Github
  </StyledButton>
)
