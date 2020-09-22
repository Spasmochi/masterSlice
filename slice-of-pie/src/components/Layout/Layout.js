import React from "react";
import { Nav, Footer } from "../index";
import styled from "styled-components";

const OuterPage = styled.div`
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

export function Layout(props) {
  return (
    <OuterPage>
      <Nav />
      {props.children}
      <Footer />
    </OuterPage>
  );
}
