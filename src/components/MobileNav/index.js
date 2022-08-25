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
          {/* <MobileNavLink
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
            to="projects"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
          >
            Projects
          </MobileNavLink>
          <MobileNavLink
            to="skills"
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
          </MobileNavLink> */}
          <SideBtnWrap>
            <a
              target="_blank"
              href="https://drive.google.com/file/d/1YlFyhsg5Re-5AQxlvlaaYCBEZi5DLU4f/view?usp=sharing"
            >
              <MobileResumeRoute>Download Resume</MobileResumeRoute>
            </a>
          </SideBtnWrap>
        </MobileNavMenu>
      </MobileNavWrapper>
    </MobileNavContainer>
  );
};

export default MobileNav;
