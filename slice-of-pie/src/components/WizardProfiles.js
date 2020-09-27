import React from "react";
import styled from "styled-components";
import Img from "gatsby-image";

const WizardsGrid = styled.div`
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

const WizardCard = styled.div`
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

const SingleWizard = ({ Wizard }) => (
  <WizardCard>
    <Img fixed={Wizard.image.asset.fixed} alt={Wizard.name} />
    <span>{Wizard.name}</span>
    <p>{Wizard.description}</p>
  </WizardCard>
);

export const WizardGrid = ({ Wizards }) => (
  <WizardsGrid>
    {Wizards.map((Wizard) => (
      <SingleWizard key={Wizard.id} Wizard={Wizard} />
    ))}
  </WizardsGrid>
);
