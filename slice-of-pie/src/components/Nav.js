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
  }
`;

export function Nav() {
  return (
    <NAV>
      <NavWrapper>
        <NavItem>
          <Link to="/">Home</Link>
        </NavItem>
        <NavItem>
          <Link to="/pizza">Pizza</Link>
        </NavItem>
        <NavItem>
          <Link to="/menu">menu</Link>
        </NavItem>
        <NavItem>
          <Link to="/pieWizards">pie wizards</Link>
        </NavItem>
        <NavItem>
          <Link to="/order">order</Link>
        </NavItem>
      </NavWrapper>
    </NAV>
  );
}
