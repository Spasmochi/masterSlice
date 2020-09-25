import React from "react";
import styled from "styled-components";

const FooterWrapper = styled.footer`
  border-top: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export function Footer() {
  return (
    <FooterWrapper>
      <p>
        What a footer!{" "}
        <span role="img" aria-label="feet">
          👣
        </span>
      </p>
    </FooterWrapper>
  );
}
