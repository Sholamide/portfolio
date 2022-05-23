import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";

export const ProjectsContainer = styled.div`
  color: #f3f3f3;
  background: #000;
`;

export const ProjectsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  width: 100%;
  max-width: 1100px;
  margin: auto;
  color: #000000;
  align-items: center;
  padding-bottom: 30px;

  @media screen and (max-width: 768px) {
    padding: 8px 24px;
  }

  @media screen and (max-width: 460px) {
    padding: 8px 24px;
  }
`;

export const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 150px 150px;
  grid-gap: 20px;
  gap: 20px;
  padding: 1.5rem;

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
    flex-direction: column;
    grid-template-rows: 150px 150px;
    grid-gap: 1px;
    padding: 1rem;
  }
`;

export const ProjectsHeader = styled.h1`
  font-size: 32px;
  align-items: center;
  text-align: center;
  margin: auto;
  color: #fff;
  @media screen and (max-width: 768px) {
    font-size: 24px;
  }
  @media screen and (max-width: 480px) {
    font-size: 16px;
  }
`;

export const ProjectsSubLink = styled(LinkR)`
  font-size: 16px;
  margin-top: 10px;
  text-decoration: none;
  display: flex;
  font-weight: bold;
  justify-content: flex-start;
  color: #000;
  border: 1px solid #fff;
  border-radius: 8px;
  background: white;
  padding: 8px 8px;

  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
  @media screen and (max-width: 480px) {
    font-size: 16px;
  }
`;
