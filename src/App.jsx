import "./App.css";
import { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import skillsData from "./data/skills";
import projectsData from "./data/projects";
import experiencesData from "./data/experience";
import certificationsData from "./data/certifications";

const App = () => {
  const [projects, setProjects] = useState(
    projectsData.map((project) => ({
      ...project,
      currentImageIndex: 0,
    }))
  );

 useEffect(() => {
  console.log("Projects component:", Projects);
   const interval = setInterval(() => {
     setProjects((prev) =>
       prev.map((project) => ({
         ...project,
         currentImageIndex:
           (project.currentImageIndex + 1) % project.images.length,
       }))
     );
   }, 2500);

   return () => clearInterval(interval);
 }, []);

  const downloadCV = () => {
    try {
      const link = document.createElement("a");
      link.href = "Mohamed Reda Ismail_swe.pdf";
      link.download = "Mohamed Reda Ismail_swe.pdf";
      link.click();
    } catch (error) {
      console.error("Download failed", error);
      alert("Download failed. Please try again later.");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    console.log("Form Submitted:", data);
    alert("Thank you for your message! We will get back to you soon.");
    event.target.reset();
  };

  return (
    <>
      <Navbar />
      <Hero downloadCV={downloadCV} />
      <Skills skills={skillsData} />
      <Projects projects={projectsData} />
      <Experience experiences={experiencesData} />
      <Certifications certifications={certificationsData} />
      <Contact handleSubmit={handleSubmit} />
      <Footer />
    </>
  );
};

export default App;
