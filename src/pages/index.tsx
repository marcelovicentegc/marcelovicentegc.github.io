import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { ThemeProvider, createGlobalStyle } from "styled-components"

const theme = {
  anchor: "#0275d8",
  background: "#fff",
  text: "#292b2c",
}

const GlobalStyle = createGlobalStyle`
  body {
    @import url('https://fonts.googleapis.com/css?family=Roboto+Mono&display=swap');
    font-family: "Roboto", monospace;
    margin: 0;
  }
`

const IndexPage = () => (
  <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO title="marcelovicentegc.github.io" />
        <p>Hi, I'm Marcelo Cardoso.</p>
      </Layout>
    </ThemeProvider>
  </>
)

export default IndexPage
