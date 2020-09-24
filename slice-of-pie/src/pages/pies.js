import { graphql } from "gatsby";
import React from "react";
import { PieGrid } from "../components/index";

export default function PiePage({ data }) {
  const pies = data.pies.nodes;
  return (
    <>
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
        Slug {
          current
        }
        toppings {
          name
        }
        image {
          asset {
            fixed(width: 200, height: 200) {
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
