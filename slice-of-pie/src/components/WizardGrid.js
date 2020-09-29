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
  .gatsby-image-wrapper {
    height: 400px;
  }
`;

const WizardCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 0.5rem;
  align-items: center;
  img {
    object-fit: contain;
  }
`;

const WizardProfile = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: -10rem;
  z-index: 2;
  padding: 0 1rem;
  background-color: hsla(47, 80%, 50%, 0.8);
`;

const SingleWizard = ({ Wizard }) => (
  <WizardCard>
    <Img fixed={Wizard.image.asset.fixed} alt={Wizard.name} />
    <WizardProfile>
      <span>{Wizard.name}</span>
      <p>{Wizard.description}</p>
    </WizardProfile>
  </WizardCard>
);

export const WizardGrid = ({ Wizards }) => (
  <WizardsGrid>
    {Wizards.map((Wizard) => (
      <SingleWizard key={Wizard.id} Wizard={Wizard} />
    ))}
  </WizardsGrid>
);
