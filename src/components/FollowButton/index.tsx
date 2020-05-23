import React from "react"
import { StyledButton } from "./styles"

export const FollowButton = props => (
  <StyledButton
    as="a"
    href="https://twitter.com/macelovcardoso"
    target="_blank"
    rel={"noopener norefereer"}
    {...props}
  >
    @marcelovicentegc on Twitter
  </StyledButton>
)
