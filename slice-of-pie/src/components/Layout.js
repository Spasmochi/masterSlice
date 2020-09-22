import React from "react";
import { Nav, Footer } from "./index";
import styled from "styled-components";

const outerPage = styled.div`
  height: 100vh;
  overflow: hidden;
  display: flex;
`;

export function Layout(props) {
  return (
    <outerPage>
      <Nav />
      {props.children}
      <Footer />
    </outerPage>
  );
}
