const path = require(`path`);
const fetch = require("isomorphic-fetch");

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

const getWines = async ({ actions, createNodeId, createContentDigest }) => {
  const res = await fetch("https://sampleapis.com/wines/api/whites");
  const wines = await res.json();
  for (const wine of wines) {
    const nodeMeta = {
      id: createNodeId(`wine-${wine.wine}`),
      parent: null,
      children: null,
      avgRating: Math.floor(Math.random() * 5) + 1,
      name: wine.wine,
      slug: wine.wine.replace(/[_ ]/g, "-").replace(/[()]/g, ""),
      price: Math.floor(Math.random() * (10000 - 100) + 100) / 100,
      internal: {
        type: "Wine",
        mediaType: "application/json",
        contentDigest: createContentDigest(wine),
      },
    };
    actions.createNode({ ...wine, ...nodeMeta });
  }
};

const eachWinePage = async ({ graphql, actions }) => {
  const { data } = await graphql(`
    query {
      wines: allWine {
        totalCount
        nodes {
          name
          id
          slug
        }
      }
    }
  `);
  const pageSize = 16;
  const pageCount = Math.ceil(data.wines.totalCount / pageSize);
  Array.from({ length: pageCount }).forEach((_, i) => {
    actions.createPage({
      path: `/wines/${i + 1}`,
      component: path.resolve("./src/pages/wines.js"),
      context: {
        skip: i * pageSize,
        currentPage: i + 1,
        pageSize,
      },
    });
  });
};

exports.sourceNodes = async (params) => {
  await Promise.all([getWines(params)]);
};

exports.createPages = async ({ graphql, actions }) => {
  await Promise.all([
    createPiePages({ graphql, actions }),
    createToppingPages({ graphql, actions }),
    eachWinePage({ graphql, actions }),
  ]);
};
