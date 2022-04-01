module.exports = {
  siteMetadata: {
    title: `SofiaRecipes`,
    description: `Sofia, the foodie`,
    author: `@sofia`,
  },
  plugins: [
    {
      resolve: `gatsby-source-drupal`,
      options: {
        baseUrl: `https://live-contentacms.pantheonsite.io/`,  // public api
        apiBase: `api`, // all the endpoints of Drupal: https://live-contentacms.pantheonsite.io/api
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-93349937-2`,
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `SofiaRecipes`,
        short_name: `Recipes`,
        start_url: `/`,
        background_color: `#FFF`,
        theme_color: `#000`,
        display: `standalone`,
        icon: `src/images/favicon.png`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-glamor`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
  ],
}
