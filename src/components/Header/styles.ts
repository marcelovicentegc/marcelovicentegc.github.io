import styled from "styled-components"
import { Flex, Box } from "../System"

export const StyledNav = styled(Flex)`
  width: 100%;
  padding: 32px 0 24px;
  background-color: ${props => props.theme.colors.primary};
  z-index: 10;
`

export const Nav = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-shrink: 0;

  ul {
    list-style: none;
    margin: 0;
    padding: 0;

    li {
      display: inline-block;
      padding: 0 8px;

      &:first-of-type {
        padding-left: 0;
      }
    }
  }

  a {
    color: ${props => props.theme.colors.text};
    border-bottom: 0;
    text-decoration: none;

    &:hover {
      color: ${props => props.theme.colors.link};
    }
  }
`
