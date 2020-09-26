import { graphql } from "gatsby";
import React from "react";
import { PieGrid, SelectToppings } from "../components/index";

export default function PiePage({ data, pageContext }) {
  const pies = data.pies.nodes;
  return (
    <>
      <SelectToppings active={pageContext.topping} />
      <PieGrid pies={pies} />
    </>
  );
}

export const query = graphql`
  query PieGet($topping: [String]) {
    pies: allSanityPie(
      filter: { toppings: { elemMatch: { name: { in: $topping } } } }
    ) {
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
