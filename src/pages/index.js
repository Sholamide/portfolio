import { FormspreeProvider } from "@formspree/react";
import React, { useState } from "react";
import ContactSection from "../components/Contact";
import FooterSection from "../components/Footer";
import HeroSection from "../components/HeroSection";
import NavBar from "../components/NavBar";
import PortfolioSection from "../components/Portfolio";
import SideBar from "../components/SideBar";
import SkillSection from "../components/Skill";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <FormspreeProvider project={"1625156458033184489"}>
        <SideBar isOpen={isOpen} toggle={toggle} />
        <NavBar toggle={toggle} />
        <HeroSection />
        <PortfolioSection />
        <SkillSection />
        <ContactSection />
        <FooterSection />
      </FormspreeProvider>
    </>
  );
};

export default Home;
