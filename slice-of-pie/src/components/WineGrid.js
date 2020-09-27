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
  justify-content: flex-end;
  padding: 2rem;
  img {
    object-fit: contain;
  }
  div {
    margin-top: 2rem;
    display: flex;
    flex-direction: col;
    flex-wrap: wrap;
    justify-content: space-between;
  }
`;

const SingleWine = ({ Wine }) => (
  <WineCard>
    <img src={Wine.image} alt={Wine.name} />
    <span>{Wine.name}</span>

    <p>Price: ${Wine.price}</p>
    <p>
      {Wine.rating.reviews}: {`🍷`.repeat(Wine.avgRating)}
      <span style={{ filter: "grayscale(100%)" }}>
        {`🍷`.repeat(5 - Wine.avgRating)}
      </span>
    </p>
  </WineCard>
);

export const WineGrid = ({ Wine }) => (
  <WinesGrid>
    {Wine.map((Wine) => (
      <SingleWine key={Wine.id} Wine={Wine} />
    ))}
  </WinesGrid>
);
