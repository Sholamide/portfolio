import React from "react";
import {
  FooterContainer,
  FooterWrapper,
  SocialMedia,
  SocialMediaWrap,
  WebsiteRights,
  SocialIcons,
  SocialIconsLink,
} from "./FooterComponents";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaGithub,
} from "react-icons/fa";

const FooterSection = () => {
  return (
    <FooterContainer>
      <FooterWrapper>
        <SocialMedia>
          <SocialMediaWrap>
            <WebsiteRights>
              Lordie © {new Date().getFullYear()} All rights reserved. Crafted
              with ❤️ using React ⚛️
            </WebsiteRights>
            <SocialIcons>
              <SocialIconsLink
                href="https://github.com/Sholamide"
                target="_blank"
                aria-label="Github"
              >
                <FaGithub />
              </SocialIconsLink>
              <SocialIconsLink
                href="https://www.linkedin.com/in/sholuade-olamide-148159174/"
                target="_blank"
                aria-label="Linkedin"
              >
                <FaLinkedin />
              </SocialIconsLink>
              <SocialIconsLink
                href="https://twitter.com/lordolamider"
                target="_blank"
                aria-label="Twitter"
              >
                <FaTwitter />
              </SocialIconsLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrapper>
    </FooterContainer>
  );
};
export default FooterSection;
