import { Link } from "gatsby";
import React from "react";
import Img from "gatsby-image";
import styled from "styled-components";

const PiesGrid = styled.div`
  display: grid;
  margin-left: auto;
  margin-right: auto;
  margin-top: 5rem;
  margin-bottom: 5rem;
  gap: 4rem;
  grid-auto-rows: auto auto auto;
  padding-left: 5rem;
  padding-right: 5rem;
  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    max-width: none;
  }
`;

const PieCard = styled.div`
  display: grid;
  grid-template-rows: subgrid;
  grid-row: span 3;
  grid-gap: 1rem;
`;

const Toppings = styled.p`
  font-size: max(1.2rem, 1.2vw);
`;

const SinglePie = ({ pie }) => (
  <PieCard>
    <Link to={`/pies/${pie.Slug.current}`}>
      <h2>
        <span className="mark">{pie.name}</span>
      </h2>
    </Link>
    <Toppings>
      {pie.toppings.map((topping) => topping.name).join(", ")}
    </Toppings>
    <Img fixed={pie.image.asset.fixed} alt={pie.name} />
  </PieCard>
);

export const PieGrid = ({ pies }) => (
  <PiesGrid>
    {pies.map((pie) => (
      <SinglePie key={pie.id} pie={pie} />
    ))}
  </PiesGrid>
);
