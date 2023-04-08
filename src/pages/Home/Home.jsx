import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./Home.css";
import About from "../../components/About/About";
import Skills from "../../components/Skills/Skills";
import Services from "../../components/Services/Services";
import Experience from "../../components/Experience/Experience";
import Portfolio from "../../components/Portfolio/Portfolio";

const Home = () => {
  const [darkMode, setDarkMode] = useState(true);

  function toggleDarkMode() {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  }

  useEffect(() => {
    // To make a scroll bar progress
    const scrollline = document.querySelector(".scroll-line");
    function fillscrollline() {
      const windowHeight = window.innerHeight;
      const fullHeight = document.body.clientHeight;
      const scrolled = window.scrollY;
      const percentScrolled = (scrolled / (fullHeight - windowHeight)) * 100;

      scrollline.style.width = percentScrolled + "%";
    }

    window.addEventListener("scroll", fillscrollline);
  }, []);

  return (
    <div className={`home-page ${darkMode && "dark"}`}>
      <div className="scroll-line"></div>
      <Sidebar toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
      <Header />
      <About />
      <Skills />
      <Services />
      <Experience />
      <Portfolio />
    </div>
  );
};

export default Home;
