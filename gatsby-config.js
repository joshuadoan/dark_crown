const path = require('path')
/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          "@utils": path.resolve(__dirname, 'src/utils'),
          "@components": path.resolve(__dirname, 'src/components')
        },
        extensions: []
      }
    }
  ],
}
