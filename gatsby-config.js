module.exports = {
  siteMetadata: {
    title: `Granada Labs`,
    description: `A digital software company in Atlanta, GA.`,
    author: `@nanderson815`,
    keywords: [
      "software development",
      "web design",
      "software",
      "engineering",
      "app development",
    ],
    siteUrl: "https://granadalabs.io/",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Granada Labs`,
        short_name: `Granada`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
    `gatsby-transformer-yaml`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./content/data/`,
      },
    },
  ],
}
