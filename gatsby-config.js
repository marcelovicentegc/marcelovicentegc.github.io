require("dotenv").config()

module.exports = {
  pathPrefix: `/`,
  siteMetadata: {
    author: "Marcelo Cardoso",
    title: `marcelovicentegc.github.io`,
    siteUrl: "https://marcelovicentegc.github.io",
    defaultTitle: "Marcelo Cardoso",
    defaultDescription:
      "Marcelo Cardoso is a frontend engineer in Salvador, building things at Cubos.",
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-catch-links",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/pages`,
        name: "pages",
      },
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-images",
            options: {
              linkImagesToOriginal: false,
              maxWidth: 740,
              withWebp: true,
            },
          },
          {
            resolve: "gatsby-remark-prismjs",
            options: {
              classPrefix: "language-",
            },
          },
          "gatsby-plugin-sharp",
        ],
      },
    },
    {
      resolve: "gatsby-plugin-sitemap",
    },
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-128443240-3",
      },
    },
    "gatsby-plugin-react-helmet",
    `gatsby-plugin-typescript`,
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "GitHub",
        fieldName: "github",
        url: "https://api.github.com/graphql",
        headers: {
          Authorization: `Bearer ${process.env.GH_TOKEN}`,
        },
      },
    },
  ],
}
