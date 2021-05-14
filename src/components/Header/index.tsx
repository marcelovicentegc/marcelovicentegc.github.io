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
}) => {
  const [currentMenuItem, setCurrentMenuItem] = React.useState<
    "home" | "profile" | "journal" | null
  >(null)
  React.useEffect(() => {
    if (typeof window !== "undefined") {
      const { pathname } = window.location

      if (pathname === "/") {
        setCurrentMenuItem("home")
      } else if (pathname === "/profile" || pathname === "/profile/") {
        setCurrentMenuItem("profile")
      } else if (
        pathname === "/journal" ||
        pathname === "/journal" ||
        pathname.includes("journal")
      ) {
        setCurrentMenuItem("journal")
      } else {
        setCurrentMenuItem(null)
      }
    }
  }, [])

  return (
    <StyledNav as="header" justify="space-between">
      <Inner>
        <Nav as="nav">
          <ul>
            <li>
              <Text
                fontSize={[1, 2]}
                style={{
                  lineHeight: "1em",
                  fontWeight: currentMenuItem === "home" ? "bold" : "regular",
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
                    currentMenuItem === "profile" ? "bold" : "regular",
                }}
              >
                <Link to="/profile/">Profile</Link>
              </Text>
            </li>
            <li>
              <Text
                fontSize={[1, 2]}
                style={{
                  lineHeight: "1em",
                  fontWeight:
                    currentMenuItem === "journal" ? "bold" : "regular",
                }}
              >
                <Link to="/journal/">Journal</Link>
              </Text>
            </li>
          </ul>
          <StyledSwitch value={selectedTheme} onClick={onThemeChange} />
        </Nav>
      </Inner>
    </StyledNav>
  )
}
