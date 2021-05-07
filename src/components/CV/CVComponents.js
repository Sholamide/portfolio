import styled from "styled-components";

export const CVBuilderContainer = stlyed.div`
color: #f3f3f3;
  background: #000; 
`;

export const CVBuilderWrapper = styled.div`
  height: 600px;
  width: 100%;
  max-width: 1100px;
  margin: auto;
  color: #000000;
  justify-content: center;
  align-items: center;
`;

export const CVBuilderHeader = styled.h1`
  font-size: 32px;
  align-items: center;
  text-align: center;
  margin: auto;
  text-transform: uppercase;
  color: black;
  @media screen and (max-width: 768px) {
    font-size: 24px;
  }

  @media screen and (max-width: 480px) {
    font-size: 16px;
  }
`;
