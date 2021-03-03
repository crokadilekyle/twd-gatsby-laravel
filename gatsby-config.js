/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: ['gatsby-plugin-postcss', require.resolve('./kmprojects-plugin')],
  siteMetadata: {
    title: 'Twin Web Development',
    description: 'Websites and Web Apps for Small Business and Non Profits',
    copyright: '2021 Twin Web Development'
  }
}
