import React from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import styled from "styled-components";

const ToppingCard = styled.div`
  h2 {
    background: var(--yellow);
    width: fit-content;
    margin-top: 2rem;
    margin-bottom: 2rem;
  }
  ul {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
    li {
      background: var(--grey);
      border-radius: 2px;
      background: var(--yellow);
      width: fit-content;
    }
  }
`;

export default function PiePage({ data: { pie } }) {
  return (
    <ToppingCard>
      <Img fluid={pie.image.asset.fluid} />
      <div>
        <h2 className="pieName">{pie.name}</h2>
        <ul>
          {pie.toppings.map((topping) => (
            <li key={topping.id}>{topping.name}</li>
          ))}
        </ul>
      </div>
    </ToppingCard>
  );
}

export const query = graphql`
  query($slug: String!) {
    pie: sanityPie(slug: { current: { eq: $slug } }) {
      name
      id
      image {
        asset {
          fluid(maxWidth: 800) {
            ...GatsbySanityImageFluid
          }
        }
      }
      toppings {
        name
        id
        vegetarian
      }
    }
  }
`;
