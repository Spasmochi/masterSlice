import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";

const NavRow = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 2rem 0;
  justify-items: center;
  justify-content: center;
  align-content: center;
  text-align: center;

  border: 1px solid gray;
  border-radius: 5px;
  & > * {
    padding: 1rem;
    text-decoration: none;
    flex: 1;
    &[aria-current],
    &.current {
      color: var(--red);
    }
    &:hover {
      color: darkred;
    }
    &[disabled] {
      pointer-events: none;
      color: var(--grey);
    }
  }
`;

export const Pagination = ({
  pageSize,
  totalCount,
  currentPage,
  skip,
  base,
}) => {
  const totalPages = Math.ceil(totalCount / pageSize);
  const prevPage = currentPage - 1;
  const nextPage = currentPage + 1;
  const hasNextPage = nextPage <= totalPages;
  const hasPrevPage = prevPage >= 1;
  return (
    <NavRow>
      <Link disabled={!hasPrevPage} to={`/${base}/${prevPage}`}>
        ⬅ Prev
      </Link>
      {Array.from({ length: totalPages }).map((_, i) => (
        <Link to={`${base}/${i + 1}`}>{i + 1}</Link>
      ))}
      <Link disabled={!hasNextPage} to={`/${base}/${nextPage}`}>
        Next ➡
      </Link>
    </NavRow>
  );
};
