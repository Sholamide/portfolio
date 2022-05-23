import { FormspreeProvider } from "@formspree/react";
import React, { useState } from "react";
import ContactSection from "../components/Contact";
import FooterSection from "../components/Footer";
import HeroSection from "../components/Hero";
import NavBar from "../components/NavBar";
import ProjectsSection from "../components/Projects";
import MobileNav from "../components/MobileNav";
import SkillSection from "../components/Skill";

const Home = () => {
  const [navShow, setNavShow] = useState(false);

  const onToggeNav = () => {
    setNavShow(!navShow);
  };
  return (
    <>
      <FormspreeProvider project={"1625156458033184489"}>
        <MobileNav navShow={navShow} toggle={onToggeNav} />
        <NavBar toggle={onToggeNav} />
        <HeroSection />
        <ProjectsSection />
        <SkillSection />
        <ContactSection />
        <FooterSection />
      </FormspreeProvider>
    </>
  );
};

export default Home;
