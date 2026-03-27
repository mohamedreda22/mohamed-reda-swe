import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const CaseStudyModal = ({ project, isOpen, onClose }) => {
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
        background: "rgba(10, 11, 14, 0.95)",
        zIndex: 1000,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
        overflowY: "auto",
        backdropFilter: "blur(10px)",
      }}
    >
      <motion.div
        className="modal-content"
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        onClick={(e) => e.stopPropagation()}
        style={{
          background: "#16181d",
          width: "100%",
          maxWidth: "1000px",
          borderRadius: "20px",
          padding: "40px",
          maxHeight: "90vh",
          overflowY: "auto",
          boxShadow: "0 20px 50px rgba(0,0,0,0.5)",
          border: "1px solid rgba(255,255,255,0.05)",
          position: "relative",
        }}
      >
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: "20px",
            right: "20px",
            background: "transparent",
            border: "none",
            color: "white",
            fontSize: "24px",
            cursor: "pointer",
            opacity: 0.5,
          }}
        >
          ✕
        </button>

        <div className="modal-header" style={{ marginBottom: "30px" }}>
          <div className="section-eyebrow">Case Study</div>
          <h2 style={{ fontSize: "2.5rem", marginBottom: "10px" }}>{project.name}</h2>
          <div className="project-stack" style={{ marginTop: "15px" }}>
            {project.stack.map((t) => (
              <span className="stack-tag" key={t}>
                {t}
              </span>
            ))}
          </div>
        </div>

        <div className="modal-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "40px" }}>
          <div className="modal-info">
            <section style={{ marginBottom: "30px" }}>
              <h4 style={{ color: "var(--accent)", marginBottom: "10px", fontSize: "1.1rem" }}>The Problem</h4>
              <p style={{ color: "var(--text-secondary)", lineHeight: "1.6" }}>{project.caseStudy.problem}</p>
            </section>
            <section style={{ marginBottom: "30px" }}>
              <h4 style={{ color: "var(--accent)", marginBottom: "10px", fontSize: "1.1rem" }}>The Solution</h4>
              <p style={{ color: "var(--text-secondary)", lineHeight: "1.6" }}>{project.caseStudy.solution}</p>
            </section>
            <section style={{ marginBottom: "30px" }}>
              <h4 style={{ color: "var(--accent)", marginBottom: "10px", fontSize: "1.1rem" }}>Architecture</h4>
              <p style={{ color: "var(--text-secondary)", lineHeight: "1.6" }}>{project.caseStudy.architecture}</p>
            </section>
          </div>
          <div className="modal-visuals">
             <section style={{ marginBottom: "30px" }}>
              <h4 style={{ color: "var(--accent)", marginBottom: "10px", fontSize: "1.1rem" }}>Impact & Results</h4>
              <p style={{ color: "var(--text-secondary)", lineHeight: "1.6" }}>{project.caseStudy.impact}</p>
            </section>
             <section style={{ marginBottom: "30px" }}>
              <h4 style={{ color: "var(--accent)", marginBottom: "10px", fontSize: "1.1rem" }}>Future Roadmap</h4>
              <p style={{ color: "var(--text-secondary)", lineHeight: "1.6" }}>{project.caseStudy.future}</p>
            </section>
            <div className="modal-actions" style={{ marginTop: "40px", display: "flex", gap: "15px" }}>
              {project.live && (
                <a href={project.live} target="_blank" rel="noreferrer" className="btn-primary" style={{ padding: "12px 24px" }}>
                  Launch Project ↗
                </a>
              )}
              {project.github && (
                <a href={project.github} target="_blank" rel="noreferrer" className="btn-ghost" style={{ padding: "12px 24px" }}>
                  Codebase
                </a>
              )}
            </div>
          </div>
        </div>

        <div className="modal-gallery" style={{ marginTop: "50px" }}>
          <h4 style={{ marginBottom: "20px" }}>Gallery</h4>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: "15px" }}>
             {project.images.slice(0, 8).map((img, i) => (
               <img
                 key={i}
                 src={`${process.env.PUBLIC_URL}/${img}`}
                 alt={`${project.name} screen ${i}`}
                 style={{ width: "100%", borderRadius: "10px", border: "1px solid rgba(255,255,255,0.05)" }}
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
      3500
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
            {project.stack.length > 4 && <span className="stack-tag">+{project.stack.length - 4} More</span>}
          </div>
          <div className="project-actions">
            {!project.caseStudy && project.live && (
              <a
                href={project.live}
                className="proj-link live"
                target="_blank"
                rel="noopener noreferrer"
              >
                ↗ Live
              </a>
            )}
            {!project.caseStudy && project.github && (
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
        <h2 className="section-heading">Featured Case Studies</h2>
        <p style={{ color: "var(--text-secondary)", maxWidth: "600px", marginBottom: "40px" }}>
          Selected projects from my engineering career. These case studies explore the architectural challenges, technical solutions, and high-stakes impact of my work.
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
