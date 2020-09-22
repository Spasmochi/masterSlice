import React from "react";
import styled from "styled-components";
import stripes from "../assets/images/stripes.svg";

const LogoStyles = styled.div`
  /* This value controls the entire size of the logo*/
  font-size: 6px;
  font-size: clamp(1px, 0.4vw, 8px);
  width: 40em;
  height: 40em;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
  margin: 0;
  --borderSize: 1em;
  background: white url(${stripes});
  background-size: 150em;
  border: var(--borderSize) solid white;
  display: flex;
  .inner {
    margin: var(--borderSize);
    flex: 1;
    background: white;
    display: grid;
    grid-template-rows: 20% 1fr 1fr;
    align-content: center;
  }
  h1 {
    display: grid;
    grid-template-rows: 8fr 2fr;
    align-items: center;
    margin: 0;
    grid-row: 2 / span 2;
    grid-gap: 2em;
    transform: translateY(-0.7em);
  }
  .column {
    transform: scale(1.4);
    display: flex;
    text-shadow: 0.18em 0.18em 0 rgba(0, 0, 0, 0.05);
    perspective: 100px;
    align-items: center;
    flex-direction: column;
    align-content: center;
  }
  .row {
    display: flex;
    flex-direction: row;
  }
  .letter {
    font-size: 5em;
    color: var(--red);
    --scale: 1;
    --rotate: -10deg;
    --translateX: 0;
    --translateY: 0;
    --rotateX: 0deg;
    transform: scale(var(--scale)) rotate(var(--rotate))
      translateX(var(--translateX)) translateY(var(--translateY))
      rotateX(var(--rotateX));
    display: inline-block;
    line-height: 1;
    transition: transform 0.3s;
    &.f {
      --translateX: -0.05;
    }
    &.l {
      --rotate: 2deg;
      --scale: 1.4;
      --translateX: 0.05em;
      --translateY: -0.05em;
    }
    &.i {
      --scale: 0.9;
      --translateY: -0.1em;
      --translateX: 0.1em;
    }
    &.p {
      --rotate: -12deg;
      --scale: 1.2;
      --translateX: 0.06em;
    }
    &.o {
      --translateX: 0.1em;
    }
    &.e {
      --rotate: 12deg;
      --scale: 0.9;
      --translateY: -0.14em;
    }
  }
`;

export function Logo() {
  return (
    <LogoStyles className="logo">
      <div className="inner">
        <h1>
          <span className="column">
            <div>
              <span className="letter l">L</span>
              <span className="letter i">i</span>
              <span className="letter f">f</span>
              <span className="letter e">e</span>
            </div>
            <div className="row">
              <span className="letter o">o</span>
              <span className="letter f">f</span>
            </div>

            <div>
              <span className="letter p">P</span>
              <span className="letter i">i</span>
              <span className="letter e">e</span>
            </div>
          </span>
        </h1>
      </div>
    </LogoStyles>
  );
}
