require("dotenv").config({
  path: `.env.local}`,
});

module.exports = {
  siteMetadata: {
    title: "Try a Slice of Pie!",
    description: "The hottest pie this side of the Nile!",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Gatsby + Node.js (TypeScript) API",
        short_name: "Gatsby + Node.js (TypeScript)",
        start_url: "/",
        icon: "src/images/gatsby-icon.png",
      },
    },
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-sanity`,
      options: {
        projectId: "tjzr6lpk",
        dataset: "production",
        watchMode: true,
        token: process.env.sanity_key,
      },
    },
  ],
};
