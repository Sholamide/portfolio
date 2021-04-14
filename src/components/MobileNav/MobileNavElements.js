import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import { Link as LinkS } from "react-scroll";
import { Link as LinkR } from "react-router-dom";

export const MobileNavContainer = styled.div`
  background: #000;
  position: fixed;
  z-index: 900;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  /* top: 24;
  left: 0; */
  transform: none;
  transition: 0.3s ease-in-out;
  opacity: ${({ navShow }) => (navShow ? "100%" : "0")};
  top: ${({ navShow }) => (navShow ? "0" : "-100%")};

  /* @media screen and (max-width: 468px) {
    padding: 0px;
  } */
`;

export const CloseIcon = styled(FaTimes)`
  color: #fff;
`;

export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.2rem;
  cursor: pointer;
  background: transparent;
  font-size: 2rem;
  outline: none;
`;

export const MobileNavWrapper = styled.div`
  color: #fff;
`;

export const MobileNavMenu = styled.ul`
  grid-template-columns: 1fr;
  display: grid;
  grid-template-rows: repeat(10, 50px);
  text-align: center;

  @media screen and (max-width: 480px) {
    grid-grid-template-rows: repeat(6, 60px);
  }
`;

export const MobileNavLink = styled(LinkS)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  transition: 0.2s ease-in-out;
  list-style: none;
  color: #fff;
  cursor: pointer;

  &:hover {
    color: #800080;
    transition: 0.2s ease-in-out;
  }
`;

export const SideBtnWrap = styled.div`
  display: flex;
  justify-content: center;
`;

export const MobileResumeRoute = styled.button`
  border-radius: 5px;
  white-space: nowrap;
  padding: 12px 8px;
  text-decoration: none;
  cursor: pointer;
  background: #000;
  color: #f3f3f3;
  font-size: 16px;
  outline: none;
  font-weight: bold;
  border: 2px solid #8b0000;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #800080;
    font-weight: bold;
  }
`;
