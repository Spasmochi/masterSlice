const path = require(`path`);

const createPiePages = async ({ graphql, actions }) => {
  const pieTemplate = path.resolve("./src/templates/Pie.js");
  const { data } = await graphql(`
    query {
      allSanityPie {
        nodes {
          name
          slug {
            current
          }
          id
          image {
            asset {
              fluid(maxWidth: 800) {
                ...GatsbySanityImageFluid
              }
            }
          }
        }
      }
    }
  `);
  console.log(data);
  data.allSanityPie.nodes.forEach((pie) => {
    actions.createPage({
      path: `pies/${pie.slug.current}`,
      component: pieTemplate,
      context: {
        slug: pie.slug.current,
      },
    });
  });
};

exports.createPages = async (params) => {
  createPiePages(params);
  console.log("making pages");
};
