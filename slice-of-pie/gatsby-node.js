const path = require(`path`);

const createPiePages = async ({ graphql, actions }) => {
  const pieTemplate = path.resolve("./src/templates/Pie.js");
  const { data } = await graphql(`
    query {
      pies: allSanityPie {
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
  data.pies.nodes.forEach((pie) => {
    actions.createPage({
      path: `pies/${pie.slug.current}`,
      component: pieTemplate,
      context: {
        slug: pie.slug.current,
      },
    });
  });
};

const createToppingPages = async ({ graphql, actions }) => {
  const toppingTemplate = path.resolve("./src/pages/pies.js");
  const { data } = await graphql(`
    query {
      toppings: allSanityTopping {
        nodes {
          name
          id
        }
      }
    }
  `);
  data.toppings.nodes.forEach((topping) => {
    actions.createPage({
      path: `topping/${topping.name.replace(" ", "-")}`,
      component: toppingTemplate,
      context: {
        topping: topping.name,
      },
    });
  });
};

exports.createPages = async (params) => {
  await Promise.all([createPiePages(params), createToppingPages(params)]);
};
