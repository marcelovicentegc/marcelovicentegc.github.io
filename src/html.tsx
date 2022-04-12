import React from "react"
import favicon from "./assets/favicon.ico"

interface HTMLProps {
  headComponents: React.ReactNode
  body: string
  postBodyComponents: React.ReactNode
}

const HTML: React.SFC<HTMLProps> = ({
  headComponents,
  body,
  postBodyComponents,
}) => {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="shortcut icon" href={favicon} />
        {/* Primary Meta Tags */}
        <meta name="theme-color" content="#121212" />
        <meta
          name="description"
          content="Marcelo Cardoso is a Brazilian Software Engineer working remotely, and
          currently building things @ VTEX."
        />
        <meta name="title" content="Marcelo Cardoso" />
        <title>Marcelo Cardoso</title>
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://marcelo.page/" />
        <meta
          property="og:title"
          content="Marcelo Cardoso is a Brazilian Software Engineer working remotely, and
          currently building things @ VTEX."
        />
        <meta property="og:image" content="images/og.jpeg" />
        {headComponents}
      </head>
      <body>
        <div id="___gatsby" dangerouslySetInnerHTML={{ __html: body }} />
        {postBodyComponents}
        <script
          dangerouslySetInnerHTML={{
            __html: `console.log('Built at ${new Date().getTime()}')`,
          }}
        />
      </body>
    </html>
  )
}

export default HTML
