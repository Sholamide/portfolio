import React from "react";
import {
  HeroBg,
  HeroContainer,
  HeroContent,
  HeroBlock2,
  HeroP,
  VideoBg,
  HeroIntro,
  HeroImage,
} from "./HeroComponents";
import Olamide from "../../../src/images/image.jpeg";
const HeroSection = () => {
  return (
    <HeroContainer id="about">
      <HeroContent>
        <HeroBlock2>
          <HeroImage src={Olamide} />
          <HeroIntro>Sholuade Olamide</HeroIntro>
          <HeroP>
            Software Developer
            {/* I am a self-driven software developer with solid experience in
            software development. I always strive to outperform the task that
            I've been assigned to and I like challenges that question by
            abilities. In my free time, i play video and mobile games. I also
            like studying codes, and best-practice documentations to make me
            better at software development. */}
          </HeroP>
        </HeroBlock2>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
