import styled from "styled-components"
import { Box } from "../System"

export const StyledAlert = styled(Box)`
  width: 100%;
  background-color: ${props => props.theme.colors.secondary};
  font-size: 14px;
  line-height: 1.6em;
  color: ${props => props.theme.colors.primary};
`
