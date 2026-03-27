import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const ProjectCard = ({ project, index }) => {
  const [imgIdx, setImgIdx] = useState(0);

  useEffect(() => {
    if (project.images.length < 2) return;
    const t = setInterval(
      () => setImgIdx((i) => (i + 1) % project.images.length),
      2500
    );
    return () => clearInterval(t);
  }, [project.images.length]);

  return (
    <motion.div
      className={`project-card${project.featured ? " hero-card" : ""}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <div className="project-img">
        <img
          src={`${process.env.PUBLIC_URL}/${project.images[imgIdx]}`}
          alt={project.name}
          loading="lazy"
        />
        <div className="project-img-shade" />
      </div>
      <div className="project-body">
        <div className="project-date">{project.date}</div>
        <h3 className="project-title">{project.name}</h3>
        <p className="project-desc">{project.desc}</p>
        <div className="project-stack">
          {project.stack.map((t) => (
            <span className="stack-tag" key={t}>
              {t}
            </span>
          ))}
        </div>
        <div className="project-actions">
          {project.live && (
            <a
              href={project.live}
              className="proj-link live"
              target="_blank"
              rel="noopener noreferrer"
            >
              ↗ Live
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              className="proj-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const Projects = ({ projects }) => (
  <div className="projects-bg" id="projects">
    <div className="section-wrap">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="section-eyebrow">Work</div>
        <h2 className="section-heading">Featured Projects</h2>
      </motion.div>
      <div className="projects-grid">
        {projects.map((p, index) => (
          <ProjectCard key={p.name} project={p} index={index} />
        ))}
      </div>
    </div>
  </div>
);

export default Projects;
