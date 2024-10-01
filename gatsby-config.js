/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `portfolio_v2`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [{
    resolve: 'gatsby-source-contentful',
    options: {
      "accessToken": "iKs3NzYr2DesLk6Qqk1uWyUOsNycjThJ7PEmpv2-SbM",
      "spaceId": "zjedcgsivffj"
    }
  }, 
  "gatsby-plugin-image", 
  "gatsby-plugin-sharp", 
  "gatsby-transformer-sharp", 
  "gatsby-plugin-material-ui", 
  "gatsby-transformer-remark"
]
};