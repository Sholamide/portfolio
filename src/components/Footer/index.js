import React from "react";
import {
  FooterContainer,
  FooterLinkitems,
  FooterLinksContainer,
  FooterLinksTitle,
  FooterLinksWrapper,
  FooterWrapper,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialMediaLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconsLink,
} from "./FooterElements";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaGithub,
} from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";

const FooterSection = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };
  return (
    <FooterContainer>
      <FooterWrapper>
        <FooterLinksContainer>
          {/* <FooterLinksWrapper>
            <FooterLinkitems>
              <FooterLinksTitle>Recents</FooterLinksTitle>
              <FooterLink to="/">
                <span>&#183;</span> Maximizing productivity
              </FooterLink>
              <FooterLink to="/">
                <span>&#183;</span> Is it okay to procrastinate?
              </FooterLink>
              <FooterLink to="/">
                <span>&#183;</span> Why it took so long to get here
              </FooterLink>
            </FooterLinkitems>
            <FooterLinkitems>
              <FooterLinksTitle>Interests</FooterLinksTitle>
              <FooterLink to="/">
                <span>&#183;</span> Surfing Instagram
              </FooterLink>
              <FooterLink to="/">
                <span>&#183;</span> Playing Video games
              </FooterLink>
              <FooterLink to="/">
                <span>&#183;</span> Brain-storming
              </FooterLink>
            </FooterLinkitems>
            <FooterLinkitems>
              <FooterLinksTitle>Socials</FooterLinksTitle>
              <FooterLink to="https://web.facebook.com/olarotz">
                Facebook
              </FooterLink>
              <FooterLink to="https://www.instagram.com/o_l_a_m_i_d_e/">
                Instagram
              </FooterLink>
              <FooterLink to="https://twitter.com/lordolamider">
                Twitter
              </FooterLink>
              <FooterLink to="https://github.com/Sholamide">Github</FooterLink>
              <FooterLink to="https://www.linkedin.com/in/sholuade-olamide-148159174/">
                Linkedin
              </FooterLink>
            </FooterLinkitems>
          </FooterLinksWrapper> */}
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialMediaLogo to="/" onClick={toggleHome}>
              Lordie
            </SocialMediaLogo>
            <WebsiteRights>
              Lordie © {new Date().getFullYear()} All rights reserved. Handfully
              crafted using React ⚛️ with ❤️
            </WebsiteRights>
            <SocialIcons>
              <SocialIconsLink
                href="https://web.facebook.com/olarotz"
                target="_blank"
                aria-label="Facebook"
              >
                <FaFacebook />
              </SocialIconsLink>
              <SocialIconsLink
                href="https://www.instagram.com/o_l_a_m_i_d_e/"
                target="_blank"
                aria-label="Instagram"
              >
                <FaInstagram />
              </SocialIconsLink>
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
