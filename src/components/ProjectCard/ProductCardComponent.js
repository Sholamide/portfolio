import styled from "styled-components";

export const ProjectCardContainer = styled.div`
  background-color: #000;
`;

export const ProjectCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  border: 1px solid #fff;
`;
export const ProjectCardTitle = styled.h1`
  color: #fff;
  font-size: 16px;
`;

export const ProjectCardDescription = styled.p`
  color: #fff;
  font-size: 12px;
  padding: 10px;
`;

export const ProjectCardLinkWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 15px;
  padding: 5px;
  font-weight: bold;
`;

export const ProjectCardGithub = styled.a`
  display: flex;
  color: #000;
  text-decoration: none;
  background-color: #fff;
  padding: 8px;
  border-radius: 5px;
  font-size: 8px;
  font-weight: bold;
`;

export const ProjectCardURL = styled.a`
  display: flex;
  color: #000;
  text-decoration: none;
  background-color: #fff;
  padding: 8px;
  font-size: 8px;
  border-radius: 5px;
`;

export const ProjectCardImage = styled.img`
  padding: 5px;
  width: 200px;
  height: 150px;
`;
