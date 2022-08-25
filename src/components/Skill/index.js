import React from "react";
import {
  SkillContainer,
  SkillContent,
  SKillDjango,
  SKillFirebase,
  SkillHeader,
  SKillJavascript,
  SKillMongoDB,
  SKillNextJS,
  SKillNodeJS,
  SkillParagraph,
  SKillPython,
  SKillReact,
  SKillSolidity,
  SKillStyledComponents,
  SKillTailwindCSS,
  SkillTitle,
  SKillTypescript,
  SkillWrapper,
} from "./SKillSectionElements";
import Marquee from "react-fast-marquee";

const SkillSection = () => {
  return (
    <SkillContainer id="skills">
      <SkillWrapper>
        <SkillHeader>Skills</SkillHeader>
        <Marquee pauseOnHover gradient={false}>
          <SkillContent>
            <SKillReact />
            <SkillTitle>React</SkillTitle>
          </SkillContent>
          <SkillContent>
            <SKillNextJS />
            <SkillTitle>NextJS</SkillTitle>
          </SkillContent>
          <SkillContent>
            <SKillTypescript />
            <SkillTitle>TypeScript</SkillTitle>
          </SkillContent>
          <SkillContent>
            <SKillPython />
            <SkillTitle>Python</SkillTitle>
          </SkillContent>
          <SkillContent>
            <SKillTailwindCSS />
            <SkillTitle>Tailwind CSS</SkillTitle>
          </SkillContent>
          <SkillContent>
            <SKillJavascript />
            <SkillTitle>Javascript</SkillTitle>
          </SkillContent>
          <SkillContent>
            <SKillNodeJS />
            <SkillTitle>NodeJS</SkillTitle>
          </SkillContent>
          <SkillContent>
            <SKillStyledComponents />
            <SkillTitle>Styled Components</SkillTitle>
          </SkillContent>
          <SkillContent>
            <SKillMongoDB />
            <SkillTitle>MongoDB</SkillTitle>
          </SkillContent>
          <SkillContent>
            <SKillFirebase />
            <SkillTitle>Firebase</SkillTitle>
          </SkillContent>
          <SkillContent>
            <SKillDjango />
            <SkillTitle>Django</SkillTitle>
          </SkillContent>
          <SkillContent>
            <SKillSolidity />
            <SkillTitle>Solidity</SkillTitle>
          </SkillContent>
        </Marquee>
      </SkillWrapper>
    </SkillContainer>
  );
};

export default SkillSection;
