import React from "react";
import {
  CloseIcon,
  Icon,
  MobileNavContainer,
  MobileNavLink,
  MobileNavLinkR,
  MobileNavMenu,
  MobileResumeRoute,
  MobileNavWrapper,
  NavBadge,
  SideBtnWrap,
} from "./MobileNavComponents";

const MobileNav = ({ navShow, toggle }) => {
  return (
    <MobileNavContainer navShow={navShow} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <MobileNavWrapper>
        <MobileNavMenu>
          <MobileNavLink
            to="about"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
          >
            About Me
          </MobileNavLink>
          <MobileNavLink
            to="portfolio"
            to="portfolio"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
          >
            Portfolio
          </MobileNavLink>
          <MobileNavLink
            to="skill"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
          >
            Skills
          </MobileNavLink>
          <MobileNavLinkR to="/signin">
            CV Builder<NavBadge>NEW</NavBadge>
          </MobileNavLinkR>
          <MobileNavLink
            to="contact"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
          >
            Contact Me
          </MobileNavLink>
          <SideBtnWrap>
            <form
              method="get"
              action="https://drive.google.com/file/d/16gIv6LTPQfbes9vRgBCwcz6jXNLFK8BL/view?usp=sharing"
            >
              <MobileResumeRoute>DOWNLOAD CV</MobileResumeRoute>
            </form>
          </SideBtnWrap>
        </MobileNavMenu>
      </MobileNavWrapper>
    </MobileNavContainer>
  );
};

export default MobileNav;
