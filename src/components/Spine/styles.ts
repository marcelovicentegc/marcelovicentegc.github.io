import styled from "styled-components"
import { Text } from "../../typography"

export const StyledSpine = styled.div`
  width: 100vh;
  height: 4rem;
  position: fixed;
  top: -4rem;
  left: 0;
  z-index: 11;
  background-color: ${props => props.theme.colors.secondary};
  align-items: center;
  transform: rotateZ(90deg);
  transform-origin: bottom left;
  padding: 0 16px;
  display: none;

  @media screen and (min-width: 52em) {
    display: flex;
  }
`

export const Logo = styled(Text)`
  text-decoration: none;
  border-bottom: 0;
  color: ${props => props.theme.colors.primary};
`

export const Mo = styled(Text)`
  color: ${props => props.theme.colors.primary};
`

export const Flair = styled.span`
  margin-left: auto;
  transform: rotateZ(-90deg);
`
