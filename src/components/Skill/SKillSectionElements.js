import styled from "styled-components";
import {
  SiPython,
  SiDjango,
  SiTypescript,
  SiMongodb,
  SiSolidity,
  SiTailwindcss,
  SiNextdotjs,
  SiFirebase,
  SiReact,
  SiJavascript,
} from "react-icons/si";
import { SiStyledcomponents, SiNodedotjs } from "react-icons/si";
export const SkillContainer = styled.div`
  color: #f3f3f3;
  background: #191716;

  @media screen and (max-width: 768px) {
    padding: 8px 24px;
  }
`;

export const SkillWrapper = styled.div`
  height: auto;
  width: 100%;
  max-width: 1100px;
  margin: auto;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    padding: 0px 20px;
  }
`;

export const SkillParagraph = styled.p`
  font-size: 18px;
  color: #f3f3f3;
  text-align: center;
  padding: 10px;
  margin-top: 10px;
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

export const SKillTypescript = styled(SiTypescript)`
  width: 30px;
  height: 30px;
  color: #ffffff;
`;

export const SKillReact = styled(SiReact)`
  width: 30px;
  height: 30px;
  color: #ffffff;
`;

export const SKillPython = styled(SiPython)`
  width: 30px;
  height: 30px;
  color: #ffffff;
`;

export const SKillNodeJS = styled(SiNodedotjs)`
  width: 30px;
  height: 30px;
  color: #ffffff;
`;

export const SKillSolidity = styled(SiSolidity)`
  width: 30px;
  height: 30px;
  color: #ffffff;
`;

export const SKillNextJS = styled(SiNextdotjs)`
  width: 30px;
  height: 30px;
  color: #ffffff;
`;

export const SKillStyledComponents = styled(SiStyledcomponents)`
  width: 30px;
  height: 30px;
  color: #ffffff;
`;

export const SKillTailwindCSS = styled(SiTailwindcss)`
  width: 30px;
  height: 30px;
  color: #ffffff;
`;

export const SKillDjango = styled(SiDjango)`
  width: 30px;
  height: 30px;
  color: #ffffff;
`;
export const SKillJavascript = styled(SiJavascript)`
  width: 30px;
  height: 30px;
  color: #ffffff;
`;

export const SKillFirebase = styled(SiFirebase)`
  width: 30px;
  height: 30px;
  color: #ffffff;
`;
export const SKillMongoDB = styled(SiMongodb)`
  width: 30px;
  height: 30px;
  color: #ffffff;
`;

export const SkillContent = styled.div`
  justify-content: center;
  align-items: center;
  padding: 1.5rem;
  border-top-left-radius: 50px;
  border-bottom-right-radius: 50px;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 768px) {
    padding: 20px 20px;
  }
`;

export const SkillTitle = styled.h3`
  font-size: 14px;
  text-align: center;
  color: #f3f3f3;
  margin-left: 10px;
  font-weight: bold;

  @media screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

export const SkillHeader = styled.h1`
  font-size: 32px;
  align-items: center;
  text-align: center;
  margin-top: 20px;

  @media screen and (max-width: 768px) {
    font-size: 24px;
  }

  @media screen and (max-width: 480px) {
    font-size: 16px;
  }
`;
