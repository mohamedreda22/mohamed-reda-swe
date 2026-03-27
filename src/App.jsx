import React, { useState } from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import skillGroups from "./data/skills";
import projects from "./data/projects";
import experiences from "./data/experience";
import certifications from "./data/certifications";
import education from "./data/education";

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const downloadCV = () => {
    const link = document.createElement("a");
    link.href = "Mohamed_Reda_Ismail_FullStack_Developer.pdf";
    link.download = "Mohamed_Reda_Ismail_FullStack_Developer.pdf";
    link.click();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you! I'll get back to you soon.");
    e.target.reset();
  };

  const navLinks = [
    "About",
    "Skills",
    "Education",
    "Projects",
    "Experience",
    "Certifications",
    "Contact",
  ];

  return (
    <div>
      <Navbar navLinks={navLinks} setMenuOpen={setMenuOpen} />

      {/* MOBILE MENU */}
      <div className={`mobile-menu${menuOpen ? " open" : ""}`}>
        <button className="mobile-close" onClick={() => setMenuOpen(false)}>
          ✕
        </button>
        {navLinks.map((l) => (
          <a
            key={l}
            href={`#${l.toLowerCase()}`}
            onClick={() => setMenuOpen(false)}
          >
            {l}
          </a>
        ))}
      </div>

      <Hero downloadCV={downloadCV} />
      <About />
      <Skills skillGroups={skillGroups} />
      <Education education={education} />
      <Projects projects={projects} />
      <Experience experiences={experiences} />
      <Certifications certifications={certifications} />
      <Contact handleSubmit={handleSubmit} />
      <Footer />
    </div>
  );
};

export default App;
