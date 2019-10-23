import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { ThemeProvider, createGlobalStyle } from "styled-components"

const theme = {
  anchor: "#0275d8",
  background: "#fff",
  text: "#292b2c",
}

const GlobalStyle = createGlobalStyle``

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
