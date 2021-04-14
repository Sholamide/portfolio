import { Link } from "react-router-dom";
import styled from "styled-components";

export const PortfolioContainer = styled.div`
  color: #f3f3f3;
  background: #000;
`;

export const PortfolioWrapper = styled.div`
  height: 600px;
  width: 100%;
  max-width: 1100px;
  margin: auto;
  color: #000000;
  justify-content: center;
  align-items: center;
  /* padding: 0 24px; */

  /*
  @media screen and (max-width: 768px) {
    padding: 8px 24px;
  }

  @media screen and (max-width: 460px) {
    padding: 8px 24px;
  } */
`;

export const ProjectContent = styled.div`
  height: auto;
  width: auto;
  background: #000;
  border-radius: 50px;
  justify-content: center;
  align-items: center;
  padding: 8px 8px;
  margin-top: 20px;
  @media screen and (max-width: 768px) {
    padding: 0px 100px;
  }
  @media screen and (max-width: 460px) {
    padding: 0px 100px;
  }
`;

export const PortfolioHeader = styled.h1`
  font-size: 32px;
  align-items: center;
  text-align: center;
  margin: auto;
  text-transform: uppercase;
  background: -webkit-linear-gradient(#eee, #333);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;

  @media screen and (max-width: 768px) {
    font-size: 24px;
  }

  @media screen and (max-width: 480px) {
    font-size: 16px;
  }
`;

export const ProjectHeaderImage = styled.img`
  width: 300px;
  height: 120px;
  background: #f3f3f3;
  border-radius: 10px;
  margin-bottom: 25px;

  @media screen and (max-width: 568px) {
    /* height: 90px;
    width: 200px; */
    margin: auto;
  }
`;

export const ProjectTitle = styled.h2`
  color: #f3f3f3;
  font-size: 24px;

  @media screen and (max-width: 768px) {
    font-size: 18px;
  }

  @media screen and (max-width: 480px) {
    font-size: 16px;
  }
`;

export const ProjectUrl = styled.a`
  color: #0198e1;
  font-size: 15px;
  font-weight: bold;
  width: auto;
  max-width: 100px;
  text-decoration: none;
  text-align: left;
  border-radius: 50px;
  padding: 5px;
  cursor: pointer;
  @media screen and (max-width: 768px) {
    font-size: 24px;
  }

  @media screen and (max-width: 480px) {
    font-size: 16px;
  }
`;

export const ProjectStatus = styled.h5`
  color: #f3f3f3;
  font-size: 12px;
  width: auto;
  max-width: 100px;
  text-transform: uppercase;
  text-align: left;
  border-radius: 50px;
  padding: 5px;
  background: #ffa500;

  @media screen and (max-width: 768px) {
    font-size: 14px;
    width: auto;
  }
`;

export const ProjectDescription = styled.p`
  color: #f3f3f3;
  font-size: 18px;
  max-width: 250px;
  text-align: left;
  @media screen and (max-width: 768px) {
    font-size: 16px;
  }

  @media screen and (max-width: 480px) {
    font-size: 14px;
  }
`;
