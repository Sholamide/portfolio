import { FormspreeProvider } from "@formspree/react";
import React, { useState, useEffect } from "react";
import ContactSection from "../components/Contact";
import FooterSection from "../components/Footer";
import HeroSection from "../components/Hero";
import NavBar from "../components/NavBar";
import ProjectsSection from "../components/Projects";
import MobileNav from "../components/MobileNav";
import SkillSection from "../components/Skill";
import { ThemeProvider } from "styled-components";
import { Themes } from "../components/Themes";
import { GlobalStyles } from "../components/globalStyles";

const Home = () => {
  const [navShow, setNavShow] = useState(false);
  const [theme, setTheme] = useState("light");

  const onToggleNav = () => {
    setNavShow(!navShow);
  };

  // const toggleTheme = () => {
  //   theme === "light" ? setTheme("dark") : setTheme("light");
  // };

  useEffect(() => {
    if (localStorage.getItem("theme")) {
      if (localStorage.getItem("theme") === "light") {
        setTheme("light");
      } else if (localStorage.getItem("theme") === "dark") {
        setTheme("dark");
      }
    }
  }, []);

  return (
    <>
      <ThemeProvider theme={Themes[theme]}>
        <FormspreeProvider project={"1625156458033184489"}>
          <MobileNav navShow={navShow} toggle={onToggleNav} />
          <NavBar toggle={onToggleNav} setTheme={setTheme} />
          <HeroSection />
          <ProjectsSection />
          <SkillSection />
          <ContactSection />
          <FooterSection />
        </FormspreeProvider>
        <GlobalStyles />
      </ThemeProvider>
    </>
  );
};

export default Home;
