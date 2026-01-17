const Projects = ({ projects }) => (
  <section className="projects" id="projects" aria-labelledby="projects-title">
    <h2 id="projects-title">Featured Projects</h2>

    {projects.map((project, index) => (
      <article className="project-item" key={project.name}>
        <img
          src={`${process.env.PUBLIC_URL}/${
            project.images[project.currentImageIndex]
          }`}
          alt={`${project.name} project screenshot`}
          loading="lazy"
          width="420"
          height="260"
        />

        <div className="project-info">
          <h3>{project.name}</h3>

          {/* ✅ SAFE JSX RENDER */}
          <ul>
            {project.features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>

          <p>
            <strong>Date:</strong> {project.date}
          </p>

          <div className="project-links">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.name} live demo`}
            >
              Live Demo
            </a>

            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${project.name} source code`}
              >
                GitHub
              </a>
            )}
          </div>
        </div>
      </article>
    ))}
  </section>
);

export default Projects;
