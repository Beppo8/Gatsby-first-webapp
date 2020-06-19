const path = require('path');

module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: path.join(__dirname,'src','images'),
        name: 'images'
      }
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-plugin-create-client-paths`,
      options: {
        prefixes: [`/app/*`]
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Mi primer sitio con Gatsby`,
        short_name: `MPSG`,
        start_url: `/`,
        background_color: `#262B34`,
        theme_color: `#EC6ECE`,
        display: `standalone`,
        icon: `src/images/icons/icon-512x512.png`
      }
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: ['/about']
      }
    }
  ],
}
