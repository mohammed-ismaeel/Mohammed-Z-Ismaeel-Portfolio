import React, { useState, useEffect } from "react";
import Contact from "../components/Contact/Contact";
import Discuss from "../components/Discuss/Discuss";
import Footer from "../components/Footer/Footer";
import Projects from "../components/ProjectsSection/Projects";
import Skills from "../components/Skills/Skills";
import Services from "../components/Srevices/Services";
import Header from "../components/header/Header";
import About from "../components/About/About";
import ScrollToTop from "../components/ScrollToTop";
import ScrollToHashElement from "../components/ScrollToHashElement";
import NavBar from "../components/NavBar/NavBar";
import Sidebar from "../components/Sidebar/Sidebar";
import { AnimatePresence } from "framer-motion";
const HomePage = ({ onClick }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("Home");
  const navLinks = [
    "Home",
    "About",
    "Services",
    "Skills",
    "Projects",
    "Contact",
  ];

  const toggleVisibility = () => {
    if (window.pageYOffset === 0) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  return (
    <div className="home-page dark:bg-darkybg">
      <NavBar
        onClick={onClick}
        onSidebar={() => setSidebarOpen(!sidebarOpen)}
        navLinks={navLinks}
      />
      <AnimatePresence>
        {sidebarOpen && (
          <Sidebar
            navLinks={navLinks}
            activeSection={activeSection}
            onClose={() => setSidebarOpen(false)}
          />
        )}
      </AnimatePresence>
      {isVisible && (
        <a
          href="#"
          className="go-top text-white fixed right-10 z-[1000] bg-blue px-3 py-2 rounded-md max-sm:right-5 bottom-4"
        >
          <i class="fa-solid fa-angles-up"></i>
        </a>
      )}
      <ScrollToHashElement />
      <ScrollToTop />
      <Header />
      <div className="gradient-divider w-full h-32 bg-gradient-to-b from-transparent via-blue/5 to-transparent relative">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue/10 to-transparent blur-3xl opacity-30"></div>
      </div>
      <About />
      <Services />
      <Skills />
      <Projects />
      <Discuss />
      <Contact />
      <Footer />
    </div>
  );
};

export default HomePage;
