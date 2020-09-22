import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const NAV = styled.nav`
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid black;
  width: 100%;
`;

const NavWrapper = styled.ul`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: space-around;
  list-style-type: none;
`;

const NavItem = styled.li`
  & a {
    text-decoration-line: none;
    &:hover {
      color: red;
    }
  }
`;

const FunSpan = ({ children }) => <span role="image">{children}</span>;

const navItems = [
  { name: "Home", slug: "/" },
  { name: "Pizza", slug: "/pizza" },
  { name: "Menu", slug: "/menu" },
  { name: "Wizards", slug: "/pieWizards" },
  { name: "Order", slug: "/order" },
];

export function Nav() {
  return (
    <NAV>
      <NavWrapper>
        {navItems.map((item) => (
          <NavItem>
            <Link to={item.slug}>{item.name}</Link>
          </NavItem>
        ))}
      </NavWrapper>
    </NAV>
  );
}
