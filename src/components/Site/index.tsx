import React from "react"
import { ThemeProvider } from "styled-components"
import { ThemeMode, theme } from "../../styles/theme"
import { GlobalStyle } from "../../styles/globalStyles"
import { Page } from "../Page"
import Header from "../Header"
import { Inner } from "../System"
import { Spine } from "../Spine"
import { Footer } from "../Footer"

interface SiteProps {}

interface SiteState {
  selectedTheme: ThemeMode
}

export class Site extends React.Component<SiteProps, SiteState> {
  public constructor(props: SiteProps) {
    super(props)

    this.state = {
      selectedTheme: "light",
    }

    if (typeof window !== "undefined") {
      if (window.localStorage?.getItem("theme")) {
        this.state = {
          selectedTheme: JSON.parse(window!.localStorage!.getItem("theme")!),
        }
      } else {
        this.state = {
          selectedTheme: "light",
        }
      }

      if (process.env.GATSBY_NODE_ENV === "production") {
        if (window.location.hostname !== "marcelo.page") {
          window.location.href = `https://marcelo.page${window.location.pathname}`
        }
      }
    }

    this.onThemeChange = this.onThemeChange.bind(this)
  }

  private onThemeChange() {
    this.setState(
      prevState => ({
        selectedTheme: prevState.selectedTheme === "dark" ? "light" : "dark",
      }),
      () => {
        if (window && window.localStorage) {
          window.localStorage.setItem(
            "theme",
            JSON.stringify(this.state.selectedTheme)
          )
        }
      }
    )
  }

  public render() {
    const { children } = this.props

    return (
      <ThemeProvider theme={theme[this.state.selectedTheme]}>
        <Page>
          <Spine />
          <GlobalStyle />
          <Header
            onThemeChange={this.onThemeChange}
            selectedTheme={this.state.selectedTheme}
          />
          {children}
          <Inner>
            <Footer />
          </Inner>
        </Page>
      </ThemeProvider>
    )
  }
}
