import { graphql } from "gatsby";
import React from "react";
import { PieGrid, SelectToppings } from "../components/index";

export default function PiePage({ data }) {
  const pies = data.pies.nodes;
  return (
    <>
      <SelectToppings />
      <PieGrid pies={pies} />
    </>
  );
}

export const query = graphql`
  query PieGet {
    pies: allSanityPie {
      nodes {
        name
        price
        id
        slug {
          current
        }
        toppings {
          name
        }
        image {
          asset {
            fixed(width: 300, height: 400) {
              ...GatsbySanityImageFixed
            }
            fluid(maxWidth: 400) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
`;
