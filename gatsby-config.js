/**
 * @type {import('gatsby').GatsbyConfig}
 */
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

const contentfulConfig = {
  spaceId: process.env.CONTENTFUL_SPACE_ID,
  accessToken:
    process.env.CONTENTFUL_ACCESS_TOKEN ||
    process.env.CONTENTFUL_DELIVERY_TOKEN,
};

if (process.env.CONTENTFUL_HOST) {
  contentfulConfig.host = process.env.CONTENTFUL_HOST;
  contentfulConfig.accessToken = process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN;
}

const { spaceId, accessToken } = contentfulConfig;

if (!spaceId || !accessToken) {
  throw new Error(
    "Contentful spaceId and the access token need to be provided."
  );
}

module.exports = {
  siteMetadata: {
    title: `portfolio_v2`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [{
    resolve: 'gatsby-source-contentful',
    options: contentfulConfig
  },
  {
    resolve: "gatsby-plugin-manifest",
    options: {
      icon: `src/images/cartoon_portrait_new.png`
    }
  }, 
  "gatsby-plugin-image", 
  "gatsby-plugin-sharp", 
  "gatsby-transformer-sharp", 
  "gatsby-plugin-material-ui", 
  "gatsby-transformer-remark",
  "gatsby-plugin-react-helmet",
  "gatsby-plugin-anchor-links",
  "gatsby-plugin-scroll-reveal"
]
};