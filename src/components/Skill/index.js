import React from "react";
import {
  SkillCarousel,
  SkillContainer,
  SkillContent,
  SkillGrid,
  SkillHeader,
  SkillImage,
  SkillParagraph,
  SkillTitle,
  SkillWrapper,
} from "./SKillSectionElements";
import Java from "../../images/java.png";
import Javascript from "../../images/js-1.jpeg";
import mongoDB from "../../images/mongodb.png";
import Firebase from "../../images/firebase.png";
import Python from "../../images/python.jpeg";
import nodeJS from "../../images/node.jpeg";
import react from "../../images/react.png";
import Django from "../../images/django.png";
import Android from "../../images/android.png";

const SkillSection = () => {
  return (
    <SkillContainer id="skills">
      <SkillWrapper>
        <SkillHeader>Skills</SkillHeader>
        <SkillParagraph>
          You will find below, the stakcs i have practiced with so far.
        </SkillParagraph>
        <SkillGrid>
          <SkillContent>
            <SkillImage src={Python} />
            <SkillTitle>Python</SkillTitle>
          </SkillContent>
          <SkillContent>
            <SkillImage src={Javascript} />
            <SkillTitle>Javascript</SkillTitle>
          </SkillContent>
          <SkillContent>
            <SkillImage src={Java} />
            <SkillTitle>Java</SkillTitle>
          </SkillContent>
          <SkillContent>
            <SkillImage src={mongoDB} />
            <SkillTitle>MongoDB</SkillTitle>
          </SkillContent>
          <SkillContent>
            <SkillImage src={Firebase} />
            <SkillTitle>Firebase</SkillTitle>
          </SkillContent>
          <SkillContent>
            <SkillImage src={nodeJS} />
            <SkillTitle>NodeJS</SkillTitle>
          </SkillContent>
          <SkillContent>
            <SkillImage src={react} />
            <SkillTitle>React</SkillTitle>
          </SkillContent>
          <SkillContent>
            <SkillImage src={Android} />
            <SkillTitle>Android</SkillTitle>
          </SkillContent>
          <SkillContent>
            <SkillImage src={Django} />
            <SkillTitle>Django</SkillTitle>
          </SkillContent>
        </SkillGrid>
      </SkillWrapper>
    </SkillContainer>
  );
};

export default SkillSection;
