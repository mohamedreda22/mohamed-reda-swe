import React from "react";
import { motion } from "framer-motion";

const AnimatedProjects = ({ projects }) => {
  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0 },
    hover: { scale: 1.03, boxShadow: "0px 10px 30px rgba(255,0,153,0.3)" },
  };

  return (
    <section className="projects" id="projects">
      <h1>My Projects</h1>

      <motion.div
        className="projects-container"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {projects.map((project, index) => (
          <motion.div
            className="project-item"
            key={index}
            variants={itemVariants}
            whileHover="hover"
          >
            <div className="slideshow-container">
              <img
                className="slideshow-image"
                src={`${process.env.PUBLIC_URL}/${project.currentImage}`}
                alt={`${project.name} Image`}
              />
            </div>
            <div className="project-info">
              <h2>{project.name}</h2>
              <p dangerouslySetInnerHTML={{ __html: project.description }} />
              <p>
                <strong>Date:</strong> {project.date}
              </p>
              <a href={project.link} target="_blank" rel="noreferrer">
                View Project
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default AnimatedProjects;
