import React from "react";
import styled from "styled-components";

const WinesGrid = styled.div`
  display: grid;
  margin-left: auto;
  margin-right: auto;
  margin-top: 5rem;
  margin-bottom: 5rem;
  gap: 4rem;
  grid-auto-rows: auto auto auto;

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    max-width: none;
  }
`;

const WineCard = styled.div`
  display: flex;
  flex-direction: column;
  img {
    object-fit: contain;
  }
`;

const SingleWine = ({ Wine }) => (
  <WineCard>
    <span>{Wine.name}</span>
    <span>${Wine.price}</span>
    <img src={Wine.image} alt={Wine.name} />
  </WineCard>
);

export const WineGrid = ({ Wine }) => (
  <WinesGrid>
    {Wine.map((Wine) => (
      <SingleWine key={Wine.id} Wine={Wine} />
    ))}
  </WinesGrid>
);
