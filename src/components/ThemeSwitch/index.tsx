import styled from "styled-components"
import iconThemeDark from "assets/icons/theme-dark.svg"
import iconThemeLight from "assets/icons/theme-light.svg"
import { Box } from "../System"

export const StyledSwitch = styled(Box)`
  width: 24px;
  height: 24px;
  background: url(${props =>
      props.value === "dark" ? iconThemeDark : iconThemeLight})
    no-repeat center center / cover;
  cursor: pointer;
`
