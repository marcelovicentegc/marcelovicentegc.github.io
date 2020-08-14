import React from "react"
import { Link } from "gatsby"
import { StyledNav, Nav } from "./styles"
import { Text } from "../../typography"
import { Inner } from "../System"
import { StyledSwitch } from "../ThemeSwitch"
import { ThemeMode } from "../../styles/theme"

export default ({
  onThemeChange,
  selectedTheme,
}: {
  onThemeChange: () => void
  selectedTheme: ThemeMode
}) => (
  <StyledNav as="header" justify="space-between">
    <Inner>
      <Nav as="nav">
        <ul>
          <li>
            <Text
              fontSize={[1, 2]}
              style={{
                lineHeight: "1em",
                fontWeight:
                  window.location.pathname === "/" ? "bold" : "regular",
              }}
            >
              <Link to="/">Home</Link>
            </Text>
          </li>
          <li>
            <Text
              fontSize={[1, 2]}
              style={{
                lineHeight: "1em",
                fontWeight:
                  window.location.pathname === "/profile/" ? "bold" : "regular",
              }}
            >
              <Link to="/profile/">Profile</Link>
            </Text>
          </li>
        </ul>
        <StyledSwitch value={selectedTheme} onClick={onThemeChange} />
      </Nav>
    </Inner>
  </StyledNav>
)
