import React from "react";
import { Nav, Footer } from "../index";
import styled from "styled-components";
import GlobalStyles from "../../styles/Global";
import Typography from "../../styles/Typography";
import stripes from "../../assets/images/stripes.svg";

const Wrapper = styled.div`
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  background: white;
  padding-left: 5rem;
  padding-right: 5rem;
`;

const Border = styled.div`
  max-width: 1000px;
  margin: 12rem auto 4rem auto;
  margin-top: clamp(2rem, 10vw, 12rem);
  background: white url(${stripes});
  padding: 5px;
  padding: clamp(5px, 1vw, 25px);
  border: 5px solid white;
  box-shadow: 0 0 5px 3px rgba(0, 0, 0, 0.044);
  @media (max-width: 1100px) {
    margin-left: 1.5rem;
    margin-right: 1.5rem;
  }
`;

export function Layout(props) {
  return (
    <>
      <GlobalStyles />
      <Typography />
      <Wrapper>
        <Border>
          <Content>
            <Nav />
            {props.children}
            <Footer />
          </Content>
        </Border>
      </Wrapper>
    </>
  );
}
