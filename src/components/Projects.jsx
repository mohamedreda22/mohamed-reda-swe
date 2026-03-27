import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const CaseStudyModal = ({ project, isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <motion.div
      className="modal-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "rgba(10, 25, 47, 0.95)",
        zIndex: 1000,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
        overflowY: "auto",
        backdropFilter: "blur(12px)",
      }}
    >
      <motion.div
        className="modal-content"
        initial={{ scale: 0.9, opacity: 0, y: 30 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 30 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        onClick={(e) => e.stopPropagation()}
        style={{
          background: "var(--bg-card)",
          width: "100%",
          maxWidth: "1000px",
          borderRadius: "var(--radius-lg)",
          padding: "48px",
          maxHeight: "90vh",
          overflowY: "auto",
          boxShadow: "0 25px 60px rgba(0,0,0,0.5)",
          border: "1px solid var(--border-card)",
          position: "relative",
        }}
      >
        <motion.button
          onClick={onClose}
          whileHover={{ scale: 1.1, rotate: 90 }}
          transition={{ duration: 0.2 }}
          style={{
            position: "absolute",
            top: "24px",
            right: "24px",
            background: "transparent",
            border: "none",
            color: "var(--text-muted)",
            fontSize: "28px",
            cursor: "pointer",
            width: "40px",
            height: "40px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "var(--radius-sm)",
          }}
        >
          &times;
        </motion.button>

        <div className="modal-header" style={{ marginBottom: "36px" }}>
          <div className="section-eyebrow" style={{ marginBottom: "8px" }}>Case Study</div>
          <h2 style={{ 
            fontSize: "2.25rem", 
            marginBottom: "16px",
            fontFamily: "var(--font-display)",
            fontWeight: 700,
            color: "var(--text-primary)",
          }}>
            {project.name}
          </h2>
          <div className="project-stack" style={{ marginTop: "16px" }}>
            {project.stack.map((t) => (
              <span className="stack-tag" key={t}>
                {t}
              </span>
            ))}
          </div>
        </div>

        <div className="modal-grid" style={{ 
          display: "grid", 
          gridTemplateColumns: "1fr 1fr", 
          gap: "48px" 
        }}>
          <div className="modal-info">
            <section style={{ marginBottom: "32px" }}>
              <h4 style={{ 
                color: "var(--accent)", 
                marginBottom: "12px", 
                fontSize: "1rem",
                fontFamily: "var(--font-mono)",
                fontWeight: 500,
              }}>
                The Problem
              </h4>
              <p style={{ color: "var(--text-secondary)", lineHeight: "1.75" }}>
                {project.caseStudy.problem}
              </p>
            </section>
            <section style={{ marginBottom: "32px" }}>
              <h4 style={{ 
                color: "var(--accent)", 
                marginBottom: "12px", 
                fontSize: "1rem",
                fontFamily: "var(--font-mono)",
                fontWeight: 500,
              }}>
                The Solution
              </h4>
              <p style={{ color: "var(--text-secondary)", lineHeight: "1.75" }}>
                {project.caseStudy.solution}
              </p>
            </section>
            <section style={{ marginBottom: "32px" }}>
              <h4 style={{ 
                color: "var(--accent)", 
                marginBottom: "12px", 
                fontSize: "1rem",
                fontFamily: "var(--font-mono)",
                fontWeight: 500,
              }}>
                Architecture
              </h4>
              <p style={{ color: "var(--text-secondary)", lineHeight: "1.75" }}>
                {project.caseStudy.architecture}
              </p>
            </section>
          </div>
          <div className="modal-visuals">
            <section style={{ marginBottom: "32px" }}>
              <h4 style={{ 
                color: "var(--accent)", 
                marginBottom: "12px", 
                fontSize: "1rem",
                fontFamily: "var(--font-mono)",
                fontWeight: 500,
              }}>
                Impact & Results
              </h4>
              <p style={{ color: "var(--text-secondary)", lineHeight: "1.75" }}>
                {project.caseStudy.impact}
              </p>
            </section>
            <section style={{ marginBottom: "32px" }}>
              <h4 style={{ 
                color: "var(--accent)", 
                marginBottom: "12px", 
                fontSize: "1rem",
                fontFamily: "var(--font-mono)",
                fontWeight: 500,
              }}>
                Future Roadmap
              </h4>
              <p style={{ color: "var(--text-secondary)", lineHeight: "1.75" }}>
                {project.caseStudy.future}
              </p>
            </section>
            <div className="modal-actions" style={{ marginTop: "40px", display: "flex", gap: "16px" }}>
              {project.live && (
                <motion.a 
                  href={project.live} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="btn-primary" 
                  style={{ padding: "14px 28px" }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Launch Project
                </motion.a>
              )}
              {project.github && (
                <motion.a 
                  href={project.github} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="btn-ghost" 
                  style={{ padding: "14px 28px" }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  View Code
                </motion.a>
              )}
            </div>
          </div>
        </div>

        <div className="modal-gallery" style={{ marginTop: "56px" }}>
          <h4 style={{ 
            marginBottom: "24px",
            fontFamily: "var(--font-mono)",
            color: "var(--accent)",
            fontSize: "1rem",
            fontWeight: 500,
          }}>
            Project Gallery
          </h4>
          <div style={{ 
            display: "grid", 
            gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", 
            gap: "16px" 
          }}>
            {project.images.slice(0, 8).map((img, i) => (
              <motion.img
                key={i}
                src={`${process.env.PUBLIC_URL}/${img}`}
                alt={`${project.name} screen ${i + 1}`}
                style={{ 
                  width: "100%", 
                  borderRadius: "var(--radius-sm)", 
                  border: "1px solid var(--border-card)",
                  cursor: "pointer",
                }}
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.2 }}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const ProjectCard = ({ project, index }) => {
  const [imgIdx, setImgIdx] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (project.images.length < 2) return;
    const t = setInterval(
      () => setImgIdx((i) => (i + 1) % project.images.length),
      4000
    );
    return () => clearInterval(t);
  }, [project.images.length]);

  return (
    <>
      <motion.div
        className={`project-card${project.caseStudy ? " case-study-card" : ""}${project.featured ? " featured-card" : ""}`}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        onClick={() => project.caseStudy && setIsModalOpen(true)}
        style={{ cursor: project.caseStudy ? "pointer" : "default" }}
      >
        <div className="project-img">
          <img
            src={`${process.env.PUBLIC_URL}/${project.images[imgIdx]}`}
            alt={project.name}
            loading="lazy"
          />
          <div className="project-img-shade" />
          {project.caseStudy && (
            <div className="case-study-badge">Read Case Study</div>
          )}
        </div>
        <div className="project-body">
          <div className="project-date">{project.date}</div>
          <h3 className="project-title">{project.name}</h3>
          <p className="project-desc">{project.desc}</p>
          <div className="project-stack">
            {project.stack.slice(0, 4).map((t) => (
              <span className="stack-tag" key={t}>
                {t}
              </span>
            ))}
            {project.stack.length > 4 && (
              <span className="stack-tag">+{project.stack.length - 4}</span>
            )}
          </div>
          <div className="project-actions">
            {!project.caseStudy && project.live && (
              <motion.a
                href={project.live}
                className="proj-link live"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -2 }}
                onClick={(e) => e.stopPropagation()}
              >
                Live Demo
              </motion.a>
            )}
            {!project.caseStudy && project.github && (
              <motion.a
                href={project.github}
                className="proj-link"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -2 }}
                onClick={(e) => e.stopPropagation()}
              >
                Source Code
              </motion.a>
            )}
          </div>
        </div>
      </motion.div>

      <AnimatePresence>
        {isModalOpen && (
          <CaseStudyModal
            project={project}
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
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
        <div className="section-eyebrow">Portfolio</div>
        <h2 className="section-heading">Featured Projects</h2>
        <p style={{ 
          color: "var(--text-secondary)", 
          maxWidth: "600px", 
          marginBottom: "48px",
          fontSize: "16px",
          lineHeight: "1.75",
        }}>
          A selection of projects that showcase my skills in building scalable, 
          user-focused applications. Click on any project to explore the full case study.
        </p>
      </motion.div>
      <div className="projects-grid">
        {projects.map((p, index) => (
          <ProjectCard key={p.id || p.name} project={p} index={index} />
        ))}
      </div>
    </div>
  </div>
);

export default Projects;
