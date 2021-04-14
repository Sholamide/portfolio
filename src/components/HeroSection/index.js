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
} from "./HeroSectionElements";
const HeroSection = () => {
  return (
    <HeroContainer id="about">
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </HeroBg>
      <HeroContent>
        <HeroBlock2>
          <HeroIntro>Hey, I'm Sholuade Olamide.</HeroIntro>
          <HeroP>
            I am a developer who currently interns at EHA Clinics as a Software
            Engineer. I practice software development and enjoy building fun
            stuffs. I always strive to outperform the task that I've been
            assigned to and I like challenges that question by abilities. In my
            free time, i play video games, (Apex Legends still my favorite),
            candy crush, surf instagram for funny content that can distract my
            mind from too much tech stuff. I also like studying codes, and other
            stuffs to make me better at software development.
          </HeroP>
        </HeroBlock2>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
