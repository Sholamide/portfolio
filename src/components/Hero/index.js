import React from "react";
import Video from "../../video/pattern.mp4";
import {
  HeroBg,
  HeroBlock,
  HeroContainer,
  HeroContent,
  HeroBlock1,
  HeroBlock2,
  HeroImage,
  HeroP,
  VideoBg,
  HeroIntro,
} from "./HeroComponents";
const HeroSection = () => {
  return (
    <HeroContainer id="about">
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </HeroBg>
      <HeroContent>
        <HeroBlock2>
          <HeroIntro>Hi, I'm Olamide.</HeroIntro>
          <HeroP>
            I am a self-driven software developer with solid experience in
            software development. I always strive to outperform the task that
            I've been assigned to and I like challenges that question by
            abilities. In my free time, i play video and mobile games. I also
            like studying codes, and best-practice documentations to make me
            better at software development.
          </HeroP>
        </HeroBlock2>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
