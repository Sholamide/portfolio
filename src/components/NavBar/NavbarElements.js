import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

export const Nav = styled.nav`
  background: #000;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
`;

export const NavLogo = styled(LinkR)`
  color: #f3f3f3;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin: 24px;
  margin-left: 5px;
  font-weight: bold;
  text-decoration: none;
  background: -webkit-linear-gradient(#eee, #333);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #f3f3f3;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItems = styled.li`
  height: 80px;
`;

export const NavLinks = styled(LinkS)`
  color: #f3f3f3;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  cursor: pointer;
  height: 100%;

  &:active {
    border-bottom: 3px solid #800000;
  }

  &:hover {
    color: #800080;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  font-weight: bold;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

// export const NavBtnLink = styled(LinkS)`
//   border-radius: 5px;
//   background: #000;
//   white-space: nowrap;
//   padding: 5px 8px;
//   color: #f3f3f3;
//   font-size: 12px;
//   outline: none;
//   border: 2px solid #8b0000;
//   cursor: pointer;
//   transition: all 0.2s ease-in-out;
//   text-decoration: none;

//   &:hover {
//     transition: all 0.2s ease-in-out;
//     background: #f3f3f3;
//     color: #000;
//     font-weight: 700;
//   }
// `;

export const NavResumeLink = styled.button`
  border-radius: 5px;
  background: #000;
  white-space: nowrap;
  padding: 12px 8px;
  color: #f3f3f3;
  font-size: 12px;
  outline: none;
  border: 2px solid #8b0000;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  margin-right: 8px;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #f3f3f3;
    color: #000;
    font-weight: 700;
  }
`;
