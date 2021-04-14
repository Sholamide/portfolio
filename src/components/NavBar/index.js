import React, { useEffect, useState } from "react";
import { DiSwift } from "react-icons/di";
import { FaBars } from "react-icons/fa";

import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItems,
  NavLinks,
  NavBtn,
  NavResumeLink,
  NavBtnLink,
} from "./NavbarElements";

import MobileNav from "../MobileNav";
import { animateScroll as scroll } from "react-scroll";

const NavBar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    window.scrollY >= 80 ? setScrollNav(true) : setScrollNav(false);
  };

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  return (
    <>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <NavLogo to="/" onClick={toggleHome}>
            <span style={{ marginRight: 5 }}>
              <DiSwift />
            </span>
            Lordie
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItems>
              <NavLinks
                to="about"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                About Me
              </NavLinks>
            </NavItems>
            <NavItems>
              <NavLinks
                to="portfolio"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                Portfolio
              </NavLinks>
            </NavItems>
            <NavItems>
              <NavLinks
                to="skills"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                Skills
              </NavLinks>
            </NavItems>
            <NavItems>
              <NavLinks
                to=""
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                CV Builder
              </NavLinks>
            </NavItems>
            <NavItems>
              <NavLinks
                to="contact"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                Contact Me
              </NavLinks>
            </NavItems>
          </NavMenu>
          <NavBtn>
            <form
              method="get"
              action="https://drive.google.com/file/d/16gIv6LTPQfbes9vRgBCwcz6jXNLFK8BL/view?usp=sharing"
            >
              <NavResumeLink
                type="submit"
                to="contact"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                DOWNLOAD CV
              </NavResumeLink>
            </form>
            {/* <NavBtnLink
              to="contact"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-80}
            >
              Contact Me
            </NavBtnLink> */}
          </NavBtn>
          {/* <MobileNav /> */}
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default NavBar;
