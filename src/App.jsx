import React, { useState, useEffect } from "react";
import "./App.css";
import { useTranslation } from "react-i18next";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import ITCapabilities from "./components/ITCapabilities";
import Footer from "./components/Footer";

import skillGroups, { itSkillGroups } from "./data/skills";
import projects from "./data/projects";
import experiences from "./data/experience";
import certifications from "./data/certifications";
import education from "./data/education";

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [profile, setProfile] = useState("engineering");
  const { t, i18n } = useTranslation();

  useEffect(() => {
    document.documentElement.dir = i18n.dir();
    document.documentElement.lang = i18n.language;
  }, [i18n, i18n.language]);

  const downloadCV = () => {
    const link = document.createElement("a");
    const cvFile = profile === "engineering"
      ? "Mohamed_Reda_Ismail_FullStack_Developer.pdf"
      : "Mohamed_Reda_IT_Support_Engineer_CV.pdf";
    link.href = cvFile;
    link.download = cvFile;
    link.click();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(t("contact.alert_success", "Thank you! I'll get back to you soon."));
    e.target.reset();
  };

  const navLinks = [
    { key: "About", label: t("nav.about") },
    { key: "Skills", label: t("nav.skills") },
    { key: "Education", label: t("nav.education") },
    { key: "Projects", label: t("nav.projects") },
    { key: "Experience", label: t("nav.experience") },
    { key: "Certifications", label: t("nav.certifications") },
    { key: "Contact", label: t("nav.contact") },
  ];

  const toggleProfile = () => {
    setProfile((prev) => (prev === "engineering" ? "it" : "engineering"));
  };

  return (
    <div>
      <Navbar
        navLinks={navLinks}
        setMenuOpen={setMenuOpen}
        profile={profile}
        toggleProfile={toggleProfile}
      />

      {/* MOBILE MENU */}
      <div className={`mobile-menu${menuOpen ? " open" : ""}`}>
        <button className="mobile-close" onClick={() => setMenuOpen(false)}>
          ✕
        </button>
        {navLinks.map((l) => (
          <a
            key={l.key}
            href={`#${l.key.toLowerCase()}`}
            onClick={() => setMenuOpen(false)}
          >
            {l.label}
          </a>
        ))}
        <button
          onClick={() => {
            toggleProfile();
            setMenuOpen(false);
          }}
          className="profile-toggle mobile-only"
        >
          {profile === "engineering" ? t("hero.switch_to_it", "Switch to IT Support") : t("hero.switch_to_eng", "Switch to Software Engineer")}
        </button>
      </div>

      <Hero downloadCV={downloadCV} profile={profile} />
      <About profile={profile} />
      <Skills
        skillGroups={profile === "engineering" ? skillGroups : itSkillGroups}
      />
      <Education education={education} />
      <Projects projects={projects} profile={profile} />
      <Experience experiences={experiences} profile={profile} />
      {profile === "it" && <ITCapabilities />}
      <Certifications certifications={certifications} />
      <Contact handleSubmit={handleSubmit} />
      <Footer />
    </div>
  );
};

export default App;
