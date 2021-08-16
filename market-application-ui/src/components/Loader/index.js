import React from "react";
import styled, { keyframes } from "styled-components";

const KeyFrames = keyframes`
0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const OpaqueBox = styled.div`
  background-color: white;
  opacity: 0.5;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index-998;
`;

const LoaderBox = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: -50px;
  margin-top: -50px;
  z-index: 999;

  div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 64px;
    height: 64px;
    margin: 8px;
    border: 8px solid ${(props) => props.theme.main};
    border-radius: 50%;
    animation: ${KeyFrames} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: ${(props) => props.theme.main} transparent transparent
      transparent;
  }
  div:nth-child(1) {
    animation-delay: -0.45s;
  }
  div:nth-child(2) {
    animation-delay: -0.3s;
  }
  div:nth-child(3) {
    animation-delay: -0.15s;
  }
`;

function Loader() {
  return (
    <>
      <OpaqueBox />
      <LoaderBox>
        <div></div>
        <div></div>
        <div></div>
      </LoaderBox>
    </>
  );
}

export default Loader;
