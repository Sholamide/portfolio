import styled from "styled-components";

export const SkillContainer = styled.div`
  color: #f3f3f3;
  background: #000;

  @media screen and (max-width: 768px) {
    padding: 8px 24px;
  }
`;

export const SkillWrapper = styled.div`
  height: 800px;
  width: 100%;
  max-width: 1100px;
  margin: auto;
  justify-content: center;
  align-items: center;
`;

export const SkillParagraph = styled.p`
  font-size: 18px;
  color: #f3f3f3;
  text-align: center;
  padding: 20px;
  margin-top: 15px;
`;
export const SkillGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 150px 150px;
  grid-gap: 10px;
  padding: 2.5rem;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 100px 100px;
    flex-direction: column;
    grid-gap: 1px;
    padding: 1.5rem;
  }
`;

export const SkillContent = styled.div`
  justify-content: center;
  align-items: center;
  padding: 1.5rem;
  /* background: linear-gradient(45deg, #f3f3f3, #283747); */
  border-top-left-radius: 50px;
  border-bottom-right-radius: 50px;
  display: flex;
  filter: drop-shadow(0 0 1.75rem #800080);

  /* @media screen and (max-width: 768px) {
    padding: 50px 50px;
  } */
`;

export const SkillImage = styled.img`
  width: 50px;
  height: 50px;
  align-self: center;
  border-radius: 20px;
`;

export const SkillTitle = styled.h3`
  font-size: 18px;
  text-align: center;
  color: #f3f3f3;
  margin-left: 10px;
  font-weight: bold;
`;

export const SkillHeader = styled.h1`
  font-size: 32px;
  align-items: center;
  text-align: center;
  margin: auto;
  text-transform: uppercase;
  background: -webkit-linear-gradient(#eee, #333);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media screen and (max-width: 768px) {
    font-size: 24px;
  }

  @media screen and (max-width: 480px) {
    font-size: 16px;
  }
`;
