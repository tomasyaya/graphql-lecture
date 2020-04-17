import styled, { keyframes } from "styled-components";

const circular = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const CircularLoader = styled.div`
  display: inline-block;
  width: 64px;
  height: 64px;
  position: absolute;
  left: 48%;
  top: 20%;
  :after {
    content: " ";
    display: block;
    width: 46px;
    height: 46px;
    margin: 1px;
    border-radius: 50%;
    border: 5px solid rgb(0, 216, 144);
    border-color: rgb(0, 216, 144) transparent rgb(0, 216, 144) transparent;
    animation: ${circular} 1.2s linear infinite;
  }
`;
