require("dotenv").config()

module.exports = {
  pathPrefix: `/`,
  siteMetadata: {
    author: "Marcelo Cardoso",
    title: "Marcelo Cardoso",
    siteUrl: "https://marcelo.page",
    defaultTitle: "Marcelo Cardoso",
    description:
      "Marcelo Cardoso is a brazilian Software Engineer working remotely, and currently building things @ VTEX.",
    defaultDescription:
      "Marcelo Cardoso is a brazilian Software Engineer working remotely, and currently building things @ VTEX.",
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
    // {
    // This plugin must be placed last in your list of plugins to ensure that it can query all the GraphQL data
    // Useful for when https://github.com/algolia/gatsby-plugin-algolia/pull/135 moves forward.
    // Right now this is being set on the gatsby-node.js file.
    // resolve: `gatsby-plugin-algolia`,
    // options: {
    //   appId: process.env.GATSBY_ALGOLIA_APP_ID,
    //   // Use Admin API key without GATSBY_ prefix, so that the key isn't exposed in the application
    //   // Tip: use Search API key with GATSBY_ prefix to access the service from within components
    //   apiKey: process.env.ALGOLIA_ADMIN_KEY,
    //   indexName: process.env.ALGOLIA_INDEX_NAME, // for all queries
    //   queries: require("./src/utils/algolia"),
    //   chunkSize: 1000, // default: 1000,
    //   settings: {
    //     // Optional, any index settings
    //     // Note: by supplying settings, you will overwrite all existing settings on the index
    //   },
    //   // By default all records will be reindexed on every build.
    //   // Enable partial updates to only index the new, changed and deleted records
    //   enablePartialUpdates: true, // Default: false
    //   matchFields: ["slug", "modified"], // Array<String> default: ['modified']
    //   concurrentQueries: false, // Default: true
    //   skipIndexing: false, // Default: false, useful for e.g. preview deploys or local development
    //   continueOnFailure: false, // Default: false, don't fail the build if algolia indexing fails
    // },
    // },
  ],
}
