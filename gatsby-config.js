module.exports = {
  siteMetadata: {
    title: `blog4`,
    description: `Let's learn gatsby for (probably) the 4th time...`,
    author: `evanmoncuso`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-mdx`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
      __key: `pages`,
    },
  ],
};
