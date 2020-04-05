import React from "react"
import favicon from "./assets/favicon.png"

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
        <meta name="theme-color" content="#121212" />
        <meta name="author" content="Marcelo Cardoso" />
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
