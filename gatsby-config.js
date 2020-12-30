require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

const gatsbySourceFilesystem = {
  resolve: `gatsby-source-filesystem`,
  options: {
    name: `images`,
    path: `${__dirname}/src/images`,
  },
}

const gatsbyPluginManifest = {
  resolve: `gatsby-plugin-manifest`,
  options: {
    name: `Weather App`,
    short_name: `Weather App`,
    start_url: `/`,
    background_color: `#663399`,
    theme_color: `#663399`,
    display: `minimal-ui`,
    icon: `src/images/gatsby-icon.png`,
    icon_options: {
      purpose: `any maskable`,
    },
  },
}

const gatsbyPluginSass = {
  resolve: `gatsby-plugin-sass`,
  options: {
    data: `
      @import "${__dirname}/src/styles/index";
    `,
  },
}

module.exports = {
  siteMetadata: {
    title: `Weather App`,
    description: `See the weather of your current location`,
  },
  plugins: [
    gatsbySourceFilesystem,
    gatsbyPluginManifest,
    gatsbyPluginSass,
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-layout`,
    `gatsby-transformer-sharp`,
  ],
}
