import { graphql } from "gatsby";
import React from "react";
import { WineGrid } from "../components/index";

const wines = ({ data, pageContext }) => {
  const wines = data.wines.nodes;
  return <WineGrid Wine={wines} />;
};

export default wines;

export const query = graphql`
  query {
    wines: allWine {
      nodes {
        name
        price
        id
        image
      }
    }
  }
`;
