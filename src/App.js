import React, { useState, useEffect } from "react";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faJsSquare,
  faReact,
  faAngular,
  faHtml5,
  faCss3Alt,
  faNodeJs,
  faGitAlt,
  faPython,
  faJira,
  faSlack,
} from "@fortawesome/free-brands-svg-icons";
import {
  faDatabase,
  faTasks,
  faCodeBranch,
  faServer,
  faCode,
  faEnvelope,
  faLayerGroup,
  faCubes,
  faRobot,
  faLaptopCode,
  faDesktop,
  faExchangeAlt,
  faVial,
} from "@fortawesome/free-solid-svg-icons";

/* ── DATA ─────────────────────────────────────── */
const skillGroups = [
  {
    label: "Frontend",
    skills: [
      { name: "React.js", icon: faReact },
      { name: "Angular", icon: faAngular },
      { name: "TypeScript", icon: faJsSquare },
      { name: "JavaScript", icon: faJsSquare },
      { name: "HTML5", icon: faHtml5 },
      { name: "CSS3 / Sass", icon: faCss3Alt },
      { name: "Redux Toolkit", icon: faExchangeAlt },
    ],
  },
  {
    label: "Backend & Data",
    skills: [
      { name: "Node.js", icon: faNodeJs },
      { name: "Express.js", icon: faServer },
      { name: "MongoDB", icon: faDatabase },
      { name: "SQL", icon: faDatabase },
      { name: "Python", icon: faPython },
      { name: "REST API", icon: faServer },
    ],
  },
  {
    label: "Tools & Practices",
    skills: [
      { name: "Git", icon: faGitAlt },
      { name: "Docker", icon: faCode },
      { name: "CI/CD", icon: faCodeBranch },
      { name: "Jest", icon: faVial },
      { name: "Postman", icon: faEnvelope },
      { name: "Jira", icon: faJira },
      { name: "Slack", icon: faSlack },
      { name: "Linux", icon: faCode },
    ],
  },
  {
    label: "Stacks & Concepts",
    skills: [
      { name: "MERN Stack", icon: faLayerGroup },
      { name: "MEAN Stack", icon: faCubes },
      { name: "Generative AI", icon: faRobot },
      { name: "Agile / Scrum", icon: faTasks },
      { name: "Web Development", icon: faLaptopCode },
      { name: "Front-end Dev", icon: faDesktop },
    ],
  },
];

const projects = [
  {
    name: "Casual Bazaar – E-Commerce Platform",
    date: "Jan 2025",
    featured: true,
    desc: "Full-stack e-commerce platform with secure auth, Redux state management, and RESTful APIs.",
    stack: ["React.js", "TypeScript", "Node.js", "MongoDB", "Redux Toolkit"],
    github: "https://github.com/mohamedreda22/casual-bazaar",
    live: null,
    images: [
      "casual1.png",
      "casual2.png",
      "casual3.png",
      "casual4.png",
      "casual5.png",
      "casual6.png",
      "casual7.png",
      "casual8.png",
      "casual9.png",
    ],
  },
  {
    name: "University Newsline System",
    date: "Jan–Jun 2024",
    featured: false,
    desc: "Graduation project — university-wide communication platform with news feeds, reactions, and admin controls.",
    stack: ["React.js", "Spring Boot", "MySQL", "JWT"],
    github: null,
    live: "https://drive.google.com/drive/folders/1kRsG0GzwtebfZLC5btn9DQtLFRv82gD7",
    images: [
      "newsline1.jpg",
      "newsline2.png",
      "newsline3.png",
      "newsline4.png",
    ],
  },
  {
    name: "Bistro Bliss Restaurant",
    date: "Sep 2024",
    featured: false,
    desc: "Full-stack restaurant app with Angular frontend and Node/MongoDB backend with full CRUD operations.",
    stack: ["Angular", "Node.js", "MongoDB", "TypeScript"],
    github: "https://github.com/mohamedreda22/ODC-Final-project-Demo",
    live: null,
    images: ["odc1.png", "odc2.png", "odc3.png"],
  },
  {
    name: "Tree Artvision",
    date: "Sep 2024",
    featured: false,
    desc: "Angular art portfolio with workshops, testimonials, and smooth navigation UX.",
    stack: ["Angular", "TypeScript", "CSS"],
    github: "https://github.com/mohamedreda22/Tree-Artvision",
    live: "https://mohamedreda22.github.io/Tree-Artvision/",
    images: ["tree1.png", "tree2.png", "tree3.png"],
  },
  {
    name: "Jungle House",
    date: "Jun 2023",
    featured: false,
    desc: "React plant e-commerce store with dynamic cart, real-time updates, and responsive design.",
    stack: ["React.js", "JavaScript", "CSS"],
    github: "https://github.com/mohamedreda22/jungle-house",
    live: "https://mohamedreda22.github.io/jungle-house/",
    images: ["jungle1.png", "jungle2.png", "jungle3.png"],
  },
  {
    name: "Weather App",
    date: "Sep 2023",
    featured: false,
    desc: "React weather app using OpenWeatherMap API with dynamic backgrounds and responsive design.",
    stack: ["React.js", "OpenWeatherMap API", "Bootstrap"],
    github: "https://github.com/mohamedreda22/weather-app",
    live: "https://mohamedreda22.github.io/weather-app/",
    images: ["weather1.jpeg", "weather2.jpeg"],
  },
  {
    name: "Rocket vs. Chickens",
    date: "Sep 2024",
    featured: false,
    desc: "Browser-based shooting game with keyboard controls, collision detection, and dynamic enemy spawning.",
    stack: ["JavaScript", "HTML5", "CSS3"],
    github: "https://github.com/mohamedreda22/chicken-game",
    live: "https://mohamedreda22.github.io/chicken-game/",
    images: ["chicken.png"],
  },
  {
    name: "Learn2Earn Auth System",
    date: "Jun 2024",
    featured: false,
    desc: "Secure user authentication system for an ed-tech platform with session management.",
    stack: ["JavaScript", "HTML", "CSS"],
    github:
      "https://github.com/mohamedreda22/l2e-internship-authentication-task",
    live: null,
    images: ["learntoearn1.png", "learntoearn2.png"],
  },
];

const experiences = [
  {
    title: "Soldier",
    company: "Egyptian Border Guard",
    type: "military",
    duration: "Feb 2025 – Mar 2026",
    desc: "Served with discipline in border operations, applying leadership and organisational skills to support battalion objectives.",
  },
  {
    title: "MEAN-Stack Training Program",
    company: "National Telecommunication Institute (NTI)",
    type: "internship",
    duration: "Dec 2024 – Feb 2025",
    desc: "Intensive MEAN-stack training covering advanced JavaScript, web security, SEO, and freelancing modules.",
    skills: ["MongoDB", "Angular", "Node.js", "Express.js"],
  },
  {
    title: "AI Model Reviewer",
    company: "Outlier",
    type: "freelance",
    duration: "Nov 2024",
    desc: "Reviewed and assessed AI model performance and quality on a freelance project basis.",
  },
  {
    title: "MEAN Stack Developer Intern",
    company: "Orange Digital Center Egypt",
    type: "internship",
    duration: "Sep 2024",
    desc: "MEAN stack development collaboration between Orange Digital Center and AMIT Learning.",
    skills: ["MongoDB", "AngularJS", "TypeScript", "Express.js", "Node.js"],
  },
  {
    title: "React Developer Intern",
    company: "Learn2Earn Education",
    type: "internship",
    duration: "May 2024 – Jul 2024",
    desc: "Long-term internship honing React.js and front-end development skills on real projects.",
    skills: ["React.js", "Front-End Development"],
  },
  {
    title: "React Developer Intern",
    company: "SYNC INTERN'S",
    type: "internship",
    duration: "Oct 2023",
    desc: "First React.js internship, working on real-world projects to sharpen front-end skills.",
    skills: ["React.js"],
  },
  {
    title: "Web Development & Design Intern",
    company: "Code Casa",
    type: "internship",
    duration: "Sep 2023",
    desc: "Developed capstone projects including Tic-Tac-Toe and To-Do List applications.",
    skills: ["React.js", "Web Development"],
  },
  {
    title: "Web Development Intern",
    company: "CodSoft",
    type: "internship",
    duration: "Aug 2023",
    desc: "Built and tested web applications using HTML, CSS, JS and React.js. Contributed to code reviews.",
    skills: ["React.js", "HTML", "CSS", "JavaScript"],
  },
];

const certifications = [
  {
    title: "Generative AI & AI Fundamentals",
    issuer: "Microsoft · LinkedIn · PMI",
    date: "Oct – Dec 2024",
    skills: ["Generative AI", "Responsible AI", "AI for Business"],
    includes: [
      "Career Essentials in Generative AI",
      "What Is Generative AI?",
      "Ethics in the Age of Generative AI",
    ],
  },
  {
    title: "Microsoft Copilot & AI Productivity",
    issuer: "LinkedIn",
    date: "Oct 2024",
    skills: ["Microsoft Copilot", "Microsoft 365", "AI Productivity"],
    includes: [
      "Learning Microsoft 365 Copilot",
      "Streamlining Your Work with Microsoft Copilot",
    ],
  },
  {
    title: "Frontend Development: React & JavaScript",
    issuer: "LinkedIn · Meta · OpenClassrooms",
    date: "Jun 2023 – Dec 2024",
    skills: ["React.js", "JavaScript", "Redux Toolkit"],
    includes: [
      "Hands-On Introduction: React",
      "Advanced React",
      "Coding Exercises: React.js",
    ],
  },
  {
    title: "Databases, APIs & Dev Tools",
    issuer: "IBM · LinkedIn · MaharaTech",
    date: "May 2023 – Sep 2024",
    skills: ["MongoDB", "Docker", "Git", "Postman"],
    includes: ["MongoDB", "Git & GitHub", "Docker", "Postman"],
  },
];

/* ── PROJECT IMAGE SLIDESHOW ─────────────────── */
const ProjectCard = ({ project }) => {
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
    <div className={`project-card${project.featured ? " hero-card" : ""}`}>
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
    </div>
  );
};

/* ── ANIMATED TIMELINE ───────────────────────── */
const Timeline = ({ experiences: exps }) => {
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");
  const [visible, setVisible] = useState([]);

  const filtered = exps.filter((e) => {
    const matchF = filter === "all" || e.type.toLowerCase().includes(filter);
    const matchS =
      !search ||
      e.title.toLowerCase().includes(search.toLowerCase()) ||
      e.company.toLowerCase().includes(search.toLowerCase()) ||
      (e.skills &&
        e.skills.some((s) => s.toLowerCase().includes(search.toLowerCase())));
    return matchF && matchS;
  });

  useEffect(() => {
    const handle = () => {
      const els = document.querySelectorAll(".tl-entry");
      const bottom = window.scrollY + window.innerHeight - 80;
      const vis = [];
      els.forEach((el, i) => {
        if (el.offsetTop < bottom) vis.push(i);
      });
      setVisible(vis);
    };
    window.addEventListener("scroll", handle, { passive: true });
    handle();
    return () => window.removeEventListener("scroll", handle);
  }, [filtered]);

  const filterLabels = [
    "all",
    "tech",
    "military",
    "career break",
    "freelance",
    "internship",
  ];

  return (
    <div>
      <div className="timeline-controls">
        <input
          className="timeline-search"
          type="text"
          placeholder="Search by skill, title or company…"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className="filter-pills">
          {filterLabels.map((f) => (
            <button
              key={f}
              className={`pill${filter === f ? " active" : ""}`}
              onClick={() => setFilter(f)}
            >
              {f.charAt(0).toUpperCase() + f.slice(1)}
            </button>
          ))}
        </div>
      </div>

      <div className="tl-list">
        {filtered.map((exp, i) => (
          <div
            key={i}
            className={`tl-entry${visible.includes(i) ? " visible" : ""}`}
          >
            <div
              className={`tl-dot ${exp.type.toLowerCase().replace(" ", "-")}`}
            />
            <div className="tl-card">
              <div className="tl-head">
                <span className="tl-title">{exp.title}</span>
                <span className="tl-dur">{exp.duration}</span>
              </div>
              <div className="tl-company">{exp.company}</div>
              {exp.desc && <p className="tl-desc">{exp.desc}</p>}
              {exp.skills && (
                <div className="tl-skills">
                  {exp.skills.map((s, j) => (
                    <span className="skill-badge" key={j}>
                      {s}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

/* ── APP ─────────────────────────────────────── */
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
      {/* NAV */}
      <nav>
        <a href="#hero" className="nav-logo">
          Mohamed<span>.</span>Reda
        </a>
        <div className="nav-links">
          {navLinks.map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`}>
              {l}
            </a>
          ))}
        </div>
        <button
          className="hamburger"
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      {/* MOBILE MENU */}
      <div className={`mobile-menu${menuOpen ? " open" : ""}`}  >
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

      {/* HERO */}
      <section className="hero" id="hero">
        <div className="hero-grid" />
        <div className="hero-glow" />
        <div className="hero-inner">
          <div className="hero-text">
            <div className="hero-badge anim d1">
              <span className="badge-dot" />
              Available Now
            </div>
            <h1 className="hero-name anim d2">
              Mohamed
              <br />
              <span className="accent">Reda</span>
            </h1>
            <p className="hero-role anim d3">
              Software Engineer & Full-Stack Developer
            </p>
            <p className="hero-bio anim d3">
              Building scalable web applications with React, Angular, and
              Node.js. Experienced in MERN &amp; MEAN stacks, passionate about
              clean code and great UX.
            </p>
            <div className="hero-cta anim d4">
              <button className="btn-primary" onClick={downloadCV}>
                ⬇ Download CV
              </button>
              <a href="#projects" className="btn-ghost">
                View Projects →
              </a>
            </div>
            <div className="hero-stats anim d4">
              <div>
                <div className="stat-num">
                  8<span>+</span>
                </div>
                <div className="stat-label">Projects</div>
              </div>
              <div>
                <div className="stat-num">
                  5<span>+</span>
                </div>
                <div className="stat-label">Internships</div>
              </div>
              <div>
                <div className="stat-num">
                  30<span>+</span>
                </div>
                <div className="stat-label">Skills</div>
              </div>
            </div>
          </div>
          <div className="hero-visual">
            <div className="photo-ring anim d2">
              <img
                src={`${process.env.PUBLIC_URL}/gp_photo.jpg`}
                alt="Mohamed Reda"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <div className="about-bg" id="about">
        <div className="section-wrap">
          <div className="section-eyebrow">About Me</div>
          <h2 className="section-heading">Who I Am</h2>
          <div className="about-grid">
            <div className="about-text">
              <p>
                I'm a Software Engineer specialising in Front-End and Full-Stack
                Web Development, with strong expertise in React.js and modern
                JavaScript ecosystems.
              </p>

              <p>
                I've developed real-world applications — including e-commerce
                platforms, restaurant management systems, and university
                communication tools — using MERN and MEAN stacks with a strong
                focus on scalability and performance.
              </p>

              <p>
                I'm currently open to new opportunities where I can contribute
                to building modern, scalable web applications and deliver
                exceptional user experiences through clean architecture and
                high-quality code.
              </p>
            </div>
            <div className="about-cards">
              {[
                {
                  icon: "⚡",
                  title: "Fast Learner",
                  desc: "Rapidly adapts to new technologies and frameworks",
                },
                {
                  icon: "🏗️",
                  title: "Full-Stack",
                  desc: "MERN & MEAN stack with REST APIs and databases",
                },
                {
                  icon: "🎯",
                  title: "Detail-Oriented",
                  desc: "Clean code, performance, and great UX",
                },
                {
                  icon: "🤝",
                  title: "Team Player",
                  desc: "Led graduation project, multiple internships",
                },
              ].map((c) => (
                <div className="about-card" key={c.title}>
                  <div className="about-card-icon">{c.icon}</div>
                  <h4>{c.title}</h4>
                  <p>{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* SKILLS */}
      <div className="skills-bg" id="skills">
        <div className="section-wrap">
          <div className="section-eyebrow">Expertise</div>
          <h2 className="section-heading">Skills & Technologies</h2>
          {skillGroups.map((group) => (
            <div className="skill-group" key={group.label}>
              <div className="skill-group-title">{group.label}</div>
              <div className="skills-chips">
                {group.skills.map((skill) => (
                  <div className="chip" key={skill.name}>
                    <FontAwesomeIcon icon={skill.icon} className="chip-icon" />
                    {skill.name}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* EDUCATION */}
      <div className="edu-bg" id="education">
        <div className="section-wrap">
          <div className="section-eyebrow">Background</div>
          <h2 className="section-heading">Education</h2>
          <div className="edu-card">
            <img
              src={`${process.env.PUBLIC_URL}/hu.png`}
              alt="Helwan University"
              className="edu-logo"
            />
            <div>
              <div className="edu-title">Helwan University, Cairo</div>
              <div className="edu-degree">
                Bachelor's Degree in Information Systems
              </div>
              <div className="edu-facts">
                <span className="edu-fact">📍 Cairo, Egypt</span>
                <span className="edu-fact">🗓 Oct 2020 – Jul 2024</span>
                <span className="edu-fact">Major: Information Systems</span>
                <span className="edu-fact">Minor: Computer Science</span>
              </div>
              <div className="edu-gpa">Very Good — GPA 2.84</div>
            </div>
          </div>
        </div>
      </div>

      {/* PROJECTS */}
      <div className="projects-bg" id="projects">
        <div className="section-wrap">
          <div className="section-eyebrow">Work</div>
          <h2 className="section-heading">Featured Projects</h2>
          <div className="projects-grid">
            {projects.map((p) => (
              <ProjectCard key={p.name} project={p} />
            ))}
          </div>
        </div>
      </div>

      {/* EXPERIENCE */}
      <div className="exp-bg" id="experience">
        <div className="section-wrap">
          <div className="section-eyebrow">Career</div>
          <h2 className="section-heading">Experience & Journey</h2>
          <Timeline experiences={experiences} />
        </div>
      </div>

      {/* CERTIFICATIONS */}
      <div className="certs-bg" id="certifications">
        <div className="section-wrap">
          <div className="section-eyebrow">Learning</div>
          <h2 className="section-heading">
            Certifications
            <a
              href="https://drive.google.com/drive/folders/1AY5E9a4IXnIOR3lwJLI-uMeMGmSGdiwP?usp=drive_link"
              style={{ textDecoration: "none", target: "_blank" }}
            >
              🔗
            </a>
          </h2>{" "}
          <div className="certs-grid">
            {certifications.map((c) => (
              <div className="cert-card" key={c.title}>
                <div className="cert-title">{c.title}</div>
                <div className="cert-meta">
                  <span>{c.issuer}</span> · {c.date}
                </div>
                <div className="cert-chips">
                  {c.skills.map((s) => (
                    <span className="cert-chip" key={s}>
                      {s}
                    </span>
                  ))}
                </div>
                <ul className="cert-includes">
                  {c.includes.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CONTACT */}
      <div className="contact-bg" id="contact">
        <div className="section-wrap">
          <div className="section-eyebrow">Get in Touch</div>
          <h2 className="section-heading">Let's Talk</h2>
          <div className="contact-grid">
            <div className="contact-left">
              <p>
                I'm actively seeking full-time software engineering roles.
                <br />
                Whether you have an opportunity, a project idea, or just want to
                connect, my inbox is always open.
              </p>
              <div className="contact-links">
                <a
                  href="mailto:mohamedreda.dev@gmail.com"
                  className="contact-item"
                >
                  <div className="contact-icon">✉️</div>
                  mohamedreda.dev@gmail.com
                </a>
                <a
                  href="https://www.linkedin.com/in/swe-mohamed-reda/"
                  target="_blank"
                  rel="noreferrer"
                  className="contact-item"
                >
                  <div className="contact-icon">💼</div>
                  linkedin.com/in/swe-mohamed-reda
                </a>
                <a
                  href="https://github.com/mohamedreda22"
                  target="_blank"
                  rel="noreferrer"
                  className="contact-item"
                >
                  <div className="contact-icon">🐙</div>
                  github.com/mohamedreda22
                </a>
                <a
                  href="https://wa.me/201013201998"
                  target="_blank"
                  rel="noreferrer"
                  className="contact-item"
                >
                  <div className="contact-icon">📱</div>
                  WhatsApp: +20 101 320 1998
                </a>
              </div>
            </div>
            <form className="contact-form" onSubmit={handleSubmit}>
              <input type="text" name="name" placeholder="Your Name" required />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
              />
              <textarea name="message" placeholder="Your Message" required />
              <button
                type="submit"
                className="btn-primary"
                style={{ alignSelf: "flex-start" }}
              >
                Send Message →
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <footer>
        <div className="footer-logo">
          Mohamed<span>.</span>Reda
        </div>
        <div className="footer-copy">
          © 2026 Mohamed Reda. All rights reserved.
        </div>
        <div className="socials">
          <a
            href="https://github.com/mohamedreda22"
            target="_blank"
            rel="noreferrer"
            className="social-btn"
            aria-label="GitHub"
          >
            <img src={`${process.env.PUBLIC_URL}/github.png`} alt="GitHub" />
          </a>
          <a
            href="https://www.linkedin.com/in/swe-mohamed-reda/"
            target="_blank"
            rel="noreferrer"
            className="social-btn"
            aria-label="LinkedIn"
          >
            <img
              src={`${process.env.PUBLIC_URL}/linkedin.png`}
              alt="LinkedIn"
            />
          </a>
          <a
            href="mailto:mohamedreda.dev@gmail.com"
            className="social-btn"
            aria-label="Email"
          >
            <img src={`${process.env.PUBLIC_URL}/gmail.jpg`} alt="Email" />
          </a>
          <a
            href="https://wa.me/201013201998"
            target="_blank"
            rel="noreferrer"
            className="social-btn"
            aria-label="WhatsApp"
          >
            <img
              src={`${process.env.PUBLIC_URL}/whatsapp.png`}
              alt="WhatsApp"
            />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default App;
