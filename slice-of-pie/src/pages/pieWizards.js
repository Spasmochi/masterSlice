import { graphql } from "gatsby";
import React from "react";
import { WizardGrid } from "../components/index";

const pieWizards = ({ data }) => {
  const wizards = data.wizards.nodes;
  return (
    <>
      <WizardGrid Wizards={wizards} />
    </>
  );
};

export default pieWizards;

// This is a comment
export const query = graphql`
  query {
    wizards: allSanityWizard {
      totalCount
      nodes {
        id
        name
        image {
          asset {
            fixed(width: 300, height: 400) {
              ...GatsbySanityImageFixed
            }
          }
        }
        slug {
          current
        }
        description
      }
    }
  }
`;
