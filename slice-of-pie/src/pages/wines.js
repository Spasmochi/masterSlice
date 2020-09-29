import { graphql } from "gatsby";
import React from "react";
import { Pagination, WineGrid } from "../components/index";

const wines = ({ data, pageContext }) => {
  const wines = data.wines.nodes;

  return (
    <>
      <Pagination
        pageSize={pageContext.pageSize}
        totalCount={data.wines.totalCount}
        currentPage={pageContext.currentPage || 1}
        base="wines"
      ></Pagination>
      <WineGrid Wine={wines} />
    </>
  );
};

export default wines;

export const query = graphql`
  query {
    wines: allWine {
      totalCount
      nodes {
        name
        price
        id
        image
        avgRating
        rating {
          average
          reviews
        }
      }
    }
  }
`;
