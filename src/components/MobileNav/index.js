import React from "react";
import {
  CloseIcon,
  Icon,
  MobileNavContainer,
  MobileNavLink,
  MobileNavMenu,
  MobileResumeRoute,
  MobileNavWrapper,
  SideBtnWrap,
} from "./MobileNavElements";

const MobileNav = ({ navShow, toggle }) => {
  return (
    <MobileNavContainer navShow={navShow} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <MobileNavWrapper>
        <MobileNavMenu>
          <MobileNavLink to="about">About Me</MobileNavLink>
          <MobileNavLink to="portfolio">Portfolio</MobileNavLink>
          <MobileNavLink to="skill">Skills</MobileNavLink>
          <MobileNavLink to="skill">CV Builder</MobileNavLink>
          <MobileNavLink to="skill">Skills</MobileNavLink>
          <MobileNavLink to="contact">Contact Me</MobileNavLink>
          <SideBtnWrap>
            <MobileResumeRoute to="/">DOWNLOAD CV</MobileResumeRoute>
          </SideBtnWrap>
        </MobileNavMenu>
      </MobileNavWrapper>
    </MobileNavContainer>
  );
};

export default MobileNav;
