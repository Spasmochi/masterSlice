import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { Logo } from "../index";

const NAV = styled.nav`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-bottom: 5rem;
`;

const NavWrapper = styled.ul`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: space-around;
  list-style-type: none;
  margin-inline-start: none;
  margin-bottom:8rem;
  margin-block-start: 0;
  margin-block-end: 0;
  padding-inline-start: 0;
  li {
    --rotate: 2deg;
    transform: rotate(var(--rotate));
    order: 1;
    & a {
      font-size: clamp(0.5rem, 5vw, 3rem);
      text-decoration-line: none;
      &:hover {
        color: red;
      }
    }
    &:nth-child(1) {
      --rotate: 2deg;
    }
    &:nth-child(2) {
      --rotate: 1deg;
    }
    &:nth-child(3) {
      --rotate: -3deg;
    }
    &:nth-child(4) {
      --rotate: -2deg;
    }
    &:hover {
      --rotate: 0deg;
    }
  }
`;

// const navItems = [
//   { name: "Home", slug: "/" },
//   { name: "Pizza", slug: "/pizza" },
//   { name: "Menu", slug: "/menu" },
//   { name: "Wizards", slug: "/pieWizards" },
//   { name: "Order", slug: "/order" },
// ];

export function Nav() {
  return (
    <NAV>
      <NavWrapper>
        <li>
          <Link to="/pies">Pies</Link>
        </li>
        <li>
          <Link to="/menu">Menu</Link>
        </li>
        <li>
          <Link to="/">
            <Logo />
          </Link>
        </li>
        <li>
          <Link to="/pieWizards">Wizards</Link>
        </li>
        <li>
          <Link to="/order">Order</Link>
        </li>
      </NavWrapper>
    </NAV>
  );
}
