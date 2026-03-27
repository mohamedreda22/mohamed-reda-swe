import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading for smooth entrance
    const timer = setTimeout(() => setIsLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Prevent scroll when mobile menu is open
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [menuOpen]);

  const downloadCV = () => {
    const link = document.createElement("a");
    link.href = "Mohamed_Reda_Ismail_FullStack_Developer.pdf";
    link.download = "Mohamed_Reda_Ismail_FullStack_Developer.pdf";
    link.click();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for reaching out! I'll get back to you soon.");
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

  if (isLoading) {
    return (
      <div
        style={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "var(--bg-void)",
        }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "18px",
            color: "var(--accent)",
          }}
        >
          Loading...
        </motion.div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Navbar navLinks={navLinks} setMenuOpen={setMenuOpen} />

      {/* MOBILE MENU */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="mobile-menu open"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.button
              className="mobile-close"
              onClick={() => setMenuOpen(false)}
              whileHover={{ rotate: 90 }}
              transition={{ duration: 0.2 }}
            >
              &times;
            </motion.button>
            {navLinks.map((l, i) => (
              <motion.a
                key={l}
                href={`#${l.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                {l}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <Hero downloadCV={downloadCV} />
      <About />
      <Skills skillGroups={skillGroups} />
      <Education education={education} />
      <Projects projects={projects} />
      <Experience experiences={experiences} />
      <Certifications certifications={certifications} />
      <Contact handleSubmit={handleSubmit} />
      <Footer />
    </motion.div>
  );
};

export default App;
