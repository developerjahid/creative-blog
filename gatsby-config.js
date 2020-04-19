//dot env to hide keys
require("dotenv").config({
  path: `.env`,
})


//module
module.exports = {
  siteMetadata: {
    title: `Creative Blog`,
    description: `A websites by Developer Jahid`,
    author: `@developerjahid`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,

    //netlify-cms
    `gatsby-plugin-netlify-cms`,

    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Roboto\:400,500`,
           // `source sans pro\:300,400,400i,700`
        ],
        display: 'swap'
      }
    },

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },

    `gatsby-transformer-sharp`,

    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/blog`,
        name: `blog`,
      },
    },

    `gatsby-plugin-sharp`,

    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `developerjahid-starter`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/developerjahid-icon.webp`,
      },
    },

  ],
}
