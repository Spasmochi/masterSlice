import { graphql } from "gatsby";
import React from "react";
import { Pagination, WineGrid } from "../components/index";

const wines = ({ data, pageContext }) => {
  console.log(process.env.GATSBY_PAGE_SIZE);
  const wines = data.wines.nodes;
  console.log(pageContext);
  return (
    <>
      <Pagination
        pageSize={pageContext.pageSize}
        totalCount={data.wines.totalCount}
        currentPage={pageContext.currentPage || 1}
        base="wines"
        skip={pageContext.skip}
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
