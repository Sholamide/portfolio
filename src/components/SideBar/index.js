import React from "react";
import {
  CloseIcon,
  Icon,
  SideBarContainer,
  SidebarLink,
  SidebarMenu,
  SidebarRoute,
  SidebarWrapper,
  SideBtnWrap,
} from "./SideBarElements";

const SideBar = ({ isOpen, toggle }) => {
  return (
    <SideBarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="about">About Me</SidebarLink>{" "}
          {/* <SidebarLink to="blog">Blog</SidebarLink> */}
          <SidebarLink to="portfolio">Portfolio</SidebarLink>
          <SidebarLink to="skill">Skills</SidebarLink>
          <SideBtnWrap>
            <SidebarRoute to="/">Contact Me</SidebarRoute>
          </SideBtnWrap>
        </SidebarMenu>
      </SidebarWrapper>
    </SideBarContainer>
  );
};

export default SideBar;
