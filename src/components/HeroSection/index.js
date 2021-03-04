import React from "react";
import Video from "../../video/pattern.mp4";
import Typical from "react-typical";
import Image from "../../images/image.jpg";
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
      {/* <HeroBlock> */}
      <HeroContent>
        {/* <HeroBlock1>
          <HeroImage src={Image} />
        </HeroBlock1> */}
        <HeroBlock2>
          <HeroIntro>Hey, I'm Sholuade Olamide.</HeroIntro>
          {/*punchlines
           I always strive to outperform the task that I've been assigned to and I like challenges that question by abilities. */}
          <HeroP>
            {" "}
            I am a developer who currently interns at EHA Clinics as a Software
            engineer. I always strive to outperform the task that I've been
            assigned to and I like challenges that question by abilities. In my
            free time, i play candy crush, surf instagram for funny content that
            can distract my mind from too much tech stuff. I like partying and
            having fun too. Sometimes you can just catch me studying libraries,
            and other stuffs to make me better at software development.
            {/* <Typical
              loop={Infinity}
              wrapper="p"
              steps={[
                "Developer 👨🏻‍💻 💻 ⚙️",
                1000,
                "BSc.Software Engr. graduate 🎓👨‍🇧🇾🚀",
                1000,
                "Designer 💣🗝️ ⛓️",
                1000,
                "Writer 📜🖊️📝",
                1000,
                "Video Gamer 🎮 🥳 👀",
                1000,
                "Hustler🦍",
                1000,
                " Scorpio 🦂",
                1000,
                "Perfectionist 💥",
                1000,
              ]}
            /> */}
          </HeroP>
        </HeroBlock2>
      </HeroContent>
      {/* </HeroBlock> */}
    </HeroContainer>
  );
};

export default HeroSection;
