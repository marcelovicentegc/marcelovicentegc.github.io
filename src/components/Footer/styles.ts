import styled from "styled-components"
import { Flex } from "../System"

export const StyledFooter = styled(Flex)`
  width: 100%;
  padding: 16px 0 32px;
  margin-top: 40px;
  border-top: 1px solid ${props => props.theme.colors.secondary};
  font-size: 14px;
  color: ${props => props.theme.colors.secondary};

  span {
    word-break: word;
  }

  a {
    margin: 0 8px;
    color: ${props => props.theme.colors.secondary};
    text-decoration: none;
    border-bottom: 0;
  }
`
