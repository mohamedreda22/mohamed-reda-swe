import React from "react";
import "./App.css";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AnimatedTimeline from "./AnimatedTimeline.js";
import {
  faJsSquare,
  faReact,
  faAngular,
  faHtml5,
  faCss3Alt,
  faNodeJs,
  faGitAlt,
} from "@fortawesome/free-brands-svg-icons"; // Icons from 'brands'
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
} from "@fortawesome/free-solid-svg-icons"; // Icons from 'solid'
import { faPython, faJira, faSlack } from "@fortawesome/free-brands-svg-icons";

const App = () => {
  const skills = [
    { name: "JavaScript", icon: faJsSquare },
    { name: "React.js", icon: faReact },
    { name: "Redux.js", icon: faExchangeAlt },
    { name: "Angular", icon: faAngular },
    { name: "TypeScript", icon: faJsSquare },
    { name: "HTML", icon: faHtml5 },
    { name: "CSS", icon: faCss3Alt },
    { name: "Node.js", icon: faNodeJs },
    { name: "Git", icon: faGitAlt },
    { name: "Python", icon: faPython },
    { name: "MongoDB", icon: faDatabase },
    { name: "SQL", icon: faDatabase },
    { name: "Bootstrap", icon: faCodeBranch },
    { name: "Sass", icon: faCss3Alt },
    { name: "Jest", icon: faVial },
    { name: "Agile", icon: faTasks },
    { name: "Scrum", icon: faTasks },
    { name: "CI/CD", icon: faCodeBranch },
    { name: "REST API", icon: faServer },
    { name: "Docker", icon: faCode },
    { name: "Linux", icon: faCode },
    { name: "VS Code", icon: faCode },
    { name: "Postman", icon: faEnvelope },
    { name: "Jira", icon: faJira },
    { name: "Slack", icon: faSlack },
    { name: "MERN Stack", icon: faLayerGroup },
    { name: "MEAN Stack", icon: faCubes },
    { name: "Generative AI", icon: faRobot },
    { name: "Web Development", icon: faLaptopCode },
    { name: "Front-end Development", icon: faDesktop },
  ];

  const [projects, setProjects] = useState([
    {
      name: "Casual Bazaar – E-Commerce Platform",
      description: `
    Casual Bazaar is a modern e-commerce web application built to demonstrate full-stack development capabilities.<br><br>
    <strong>Key Technologies:</strong>
    <ul>
      <li>Front-End: React.js, TypeScript, HTML, CSS</li>
      <li>Back-End: Node.js, Express, MongoDB</li>
      <li>State Management: Redux Toolkit</li>
    </ul>
    <strong>Features:</strong>
    <ul>
      <li>Product Catalog with search and filter functionality</li>
      <li>Shopping Cart with Add/Remove/Update items</li>
      <li>User Authentication and Authorization</li>
      <li>Responsive Design for desktop and mobile</li>
      <li>RESTful API integration for CRUD operations</li>
    </ul>
    <br>
    Check out the <a href="https://github.com/mohamedreda22/casual-bazaar" target="_blank">GitHub repository</a> for more details.
  `,
      link: "https://github.com/mohamedreda22/casual-bazaar",
      date: "JAN-2025",
      images: [
        "casual1.png",
        "casual2.png",
        "casual3.png",
        "casual4.png",
        "casual5.png",
        "casual6.png",
        "casual7.png",
        "casual8.png",
        "casual9.png"
      ],
      currentImage: "casual1.png",
    },

    {
      name: "Bistro Bliss Restaurant",
      description: `
      Introducing Bistro Bliss, a full-stack web application designed to showcase my skills in both front-end and back-end development.<br>
      <br><strong>Key Technologies:</strong>
        <ul>
          <li>Front-End: Angular,TypeScript, HTML, CSS   <br>
          <li>Back-End: Node.js, Express, MongoDB
        </ul>
        <strong>Features:</strong>
        <ul>
        <li>RESTful API for CRUD operations <br>
          <li>Responsive Design for compatibility across devices<br>
          <li>User Authentication and Authorization
        </ul>
  <br>
  Check out the <a href="https://mohamedreda22.github.io/ODC-Final-project-Demo/" target="_blank" >GitHub repository</a> for more details.
      `,
      link: "https://github.com/mohamedreda22/ODC-Final-project-Demo",
      date: "SEP-2024",
      images: [
        "odc1.png",
        "odc2.png",
        "odc3.png",
        "odc4.png",
        "odc5.png",
        "odc6.png",
        "odc7.png",
        "odc8.png",
        "odc10.png",
        "odc11.png",
      ],
      currentImage: "odc1.png",
    },
    {
      name: "Tree Artvision",
      description: `
        An artistic portfolio showcasing sketches, decorative pieces, and art workshops. Built with Angular, HTML, CSS, and TypeScript.
        <br>
        <br><strong>Key Technologies:</strong>
        <ul>
          <li>Front-End: Angular,TypeScript, HTML, CSS   <br>
        </ul>
        <strong>Features:</strong>
        <ul>
          <li>Art categories: sketches, decor, workshops</li>
          <li>Art-related articles and customer testimonials</li>
          <li>Smooth navigation with fixed navbar</li>
        </ul>
        Check out the <a href="https://mohamedreda22.github.io/Tree-Artvision/" target="_blank">GitHub repository</a> for more details.
      `,
      link: "https://github.com/mohamedreda22/Tree-Artvision",
      date: "SEP-2024",
      images: ["tree1.png", "tree2.png", "tree3.png", "tree4.png", "tree5.png"],
      currentImage: "tree1.png",
    },
    {
      name: "Rocket vs. Chickens",
      description: `
        An interactive game where a rocket shoots at moving chickens. Players control the rocket's movement using arrow keys and can fire bullets with the spacebar.
         <br>
        <br><strong>Key Technologies:</strong>
        <ul>
          <li>Front-End: JavaScript, HTML, CSS   <br>
        </ul>
        <strong>Features:</strong>
        <ul>
          <li>Dynamic chicken spawning in a grid layout</li>
          <li>Smooth rocket movement across the screen</li>
          <li>Bullet firing mechanics with collision detection</li>
          <li>Responsive design to fit various screen sizes</li>
        </ul>
        Check out the <a href="https://mohamedreda22.github.io/chicken-game/" target="_blank">GitHub repository</a> for more details.
      `,
      link: "https://github.com/mohamedreda22/chicken-game",
      date: "SEP-2024",
      images: ["chicken.png"],
      currentImage: "chicken.png",
    },
    {
      name: "University Newsline System (GP)",
      description: `
        A communication platform that streamlines information sharing within the university community. It enhances user engagement through features like news feeds, comments, and notifications.
        <br>
        <br><strong>Key Technologies:</strong>
        <ul>
          <li>Front-End: React, Axios, Express, Bootstrap, React Bootstrap   <br>
          <li>Back-End: Java, OOP, Spring Boot, Spring Hibernate JPA, MySQL, SOLID, Clean Code, Freemarker, JWT)
        </ul>
        <strong>Key Features:</strong>
        <ul>
          <li>User registration and login</li>
          <li>Profile management</li>
          <li>News feed updates</li>
          <li>Commenting and reactions</li>
          <li>Admin controls for posts and notifications</li>
        </ul>
      `,
      link: "https://drive.google.com/drive/folders/1kRsG0GzwtebfZLC5btn9DQtLFRv82gD7",
      date: "JAN:JUN-2024",
      images: [
        "newsline1.jpg",
        "newsline2.png",
        "newsline3.png",
        "newsline4.png",
        "newsline5.png",
        "newsline6.png",
        "newsline7.png",
        "newsline8.png",
        "newsline9.png",
        "newsline10.png",
        "newsline11.png",
        "newsline12.png",
        "newsline13.png",
        "newsline14.png",
        "newsline15.png",
      ],
      currentImage: "newsline1.jpg",
    },
    {
      name: "Learn2Earn Authentication System",
      description: `
        A user authentication system for the Learn2Earn education platform. This project allows users to register and log in securely, enabling access to educational resources.
        <br>      
        <br><strong>Key Technologies:</strong>
        <ul>
          <li>Front-End: JavaScript, HTML, CSS   <br>
        </ul>
        <strong>Key Features:</strong>
        <ul>
          <li>User registration with email and username</li>
          <li>Secure login functionality</li>
          <li>Password protection and user session management</li>
          <li>Responsive design for mobile and desktop use</li>
        </ul>
      `,
      link: "https://github.com/mohamedreda22/l2e-internship-authentication-task",
      date: "JUN-2024",
      images: ["learntoearn1.png", "learntoearn2.png"],
      currentImage: "learntoearn1.png",
    },
    {
      name: "Jungle House",
      description: `
        An e-commerce platform for plant enthusiasts, allowing users to browse and purchase a variety of plants. This project showcases my skills in building a responsive and user-friendly shopping experience using React.js.
        <br>
        <br><strong>Key Technologies:</strong>
        <ul>
          <li>Front-End: React.js, JavaScript, HTML, CSS</li>
        </ul>
        <strong>Key Features:</strong>
        <ul>
          <li>Dynamic display of plants with images and prices</li>
          <li>Add to Cart functionality for easy selection of items</li>
          <li>Responsive design for optimal viewing on mobile and desktop</li>
          <li>Real-time cart management notifications</li>
        </ul>
              Check out the <a href="https://mohamedreda22.github.io/jungle-house/" target="_blank">GitHub repository</a> for more details.
  
      `,
      link: "https://github.com/mohamedreda22/jungle-house",
      date: "JUN-2023",
      images: ["jungle1.png", "jungle2.png", "jungle3.png"],
      currentImage: "jungle1.png",
    },
    {
      name: "Weather App",
      description: `
        A simple web application that allows users to check the weather conditions for specific cities. Utilizing the OpenWeatherMap API, this app fetches and displays weather data in a user-friendly format.
        <br>
        <br><strong>Key Technologies:</strong>
        <ul>
          <li>Front-End: React.js, JavaScript, Bootstrap</li>
          <li>API: OpenWeatherMap API</li>
        </ul>
        <strong>Key Features:</strong>
        <ul>
          <li>Search by City: Users can enter a city name to get the current weather information.</li>
          <li>Responsive Design: Optimized for both desktop and mobile devices.</li>
          <li>Weather Icons: Displays appropriate icons for weather conditions.</li>
          <li>Dynamic Background Images: Changes background based on current weather conditions for enhanced user experience.</li>
        </ul>
              Check out the <a href="https://mohamedreda22.github.io/weather-app/" target="_blank">GitHub repository</a> for more details.
  
      `,
      link: "https://github.com/mohamedreda22/weather-app",
      date: "SEP-2023",
      images: ["weather1.jpeg", "weather2.jpeg"],
      currentImage: "weather1.jpeg",
    },
  ]);
  const experiences = [
    {
      title: "Soldier",
      company: "Egyptian Border Guard",
      type: "military service",
      duration: "Feb 2025 - March 2026",
      description:
        "Served with discipline and dedication in the Egyptian Army Border Guard, applying leadership and organizational skills to support and manage battalion operations, contributing to achieving mission objectives and maintaining unit readiness.",
    },
    {
      title: "MEAN-Stack Web Development Training Program",
      company: "National Telecommunication Institute (NTI)",
      type: "Internship",
      duration: "Dec 2024 - Feb 2025",
      description:
        "Built a solid foundation in (MongoDB, Express.js, Angular, and Node.js) through intensive training.\n Gained hands-on experience in (advanced JavaScript, web security, SEO optimization, and UI/UX design).\nDeveloped (real-world web applications) applying MEAN-Stack principles.\nStrengthened freelancing capabilities through modules on (project management, personal branding, client communication, and portfolio building).",
    },
    {
      title: "AI Model Reviewer ",
      company: "Outlier",
      type: "freelance",
      duration: "Nov 2024 - Nov 2024",
      description:
        "Contributed to the Outlier AI project, focusing on reviewing and assessing the performance and quality of AI models. Worked on a freelance, project-based basis, ensuring accuracy and compliance with model standards.",
    },
    {
      title: "Personal Goal Pursuit",
      company: "Career Break",
      type: "Career Break",
      duration: "Jul 2024 - Present",
      description:
        "I am currently focused on personal development to enhance my skills, acquire new certifications, and prepare for the next chapter of my life after graduation. My upcoming plan involves joining military service in April 2025 for one year, followed by deepening my involvement in the tech industry. Your support and good wishes are greatly appreciated! ❤️",
    },
    {
      title: "Mean Stack Developer Intern",
      company: "Orange Digital Center Egypt",
      type: "Internship",
      duration: "Sep 2024",
      description:
        "This training program focuses on MEAN stack development and is a collaboration between Orange Digital Center and AMIT learning.",
      skills: ["MongoDB", "AngularJS", "TypeScript", "Express.js", "Node.js"],
    },
    {
      title: "React Developer Intern",
      company: "Learn2Earn Education",
      type: "Internship",
      duration: "May 2024 - Jul 2024",
      description:
        "This is a long-term unpaid project, where I honed my skills in React.js and front-end development.",
      skills: ["React.js", "Front-End Development"],
    },
    {
      title: "React Developer Intern",
      company: "SYNC INTERN'S",
      type: "Internship",
      duration: "Oct 2023",
      description:
        "Embarked on my first React.js internship this year, where I worked on real-world projects to sharpen my skills. Your well-wishes are greatly appreciated! ❤️",
      skills: ["React.js", "Front-End Development"],
    },
    {
      title: "Web Development and Designing Intern",
      company: "Code Casa",
      type: "Internship",
      duration: "Sep 2023",
      description:
        "Worked on various tasks that helped me gain experience, including developing capstone projects like Tic-Tac-Toe and To-Do List.",
      skills: ["React.js", "Front-End Development", "Web Development"],
    },
    {
      title: "Web Development Intern",
      company: "CodSoft",
      type: "Internship",
      duration: "Aug 2023",
      description:
        "Developed and tested innovative software websites using HTML, CSS, JS, and React.js framework. Actively contributed to code reviews.",
      skills: ["React.js", "Front-End Development", "Web Development"],
    },
    {
      title: "Supervisor",
      company: "Koshary Ghobashy",
      type: "Full-time",
      duration: "Feb 2022 - Oct 2022",
      description:
        "Gained valuable knowledge about non-technical issues and life experiences while managing a team and ensuring customer satisfaction.",
      skills: [
        "Time Management",
        "Customer Satisfaction",
        "Communication Skills",
      ],
    },
    {
      title: "Intern",
      company: "Banque Misr",
      type: "Internship",
      duration: "Jun 2021 - Oct 2021",
      description:
        "Learned about ethical client interactions and developed skills in helping clients effectively.",
      skills: ["Client Relations", "Ethics"],
    },
  ];
  const education = [
    {
      institution: "Helwan University, Cairo",
      degree: "Bachelor's Degree in Information Systems",
      location: "Cairo, Egypt",
      date: "Oct 2020 - Jul 2024",
      grade: "Very Good (GPA: 2.84)",
      major: "Information Systems",
      minor: "Computer Science",
      logo: "hu.png",
    },
  ];
  const certifications = [
    {
      title: "Generative AI & Artificial Intelligence Fundamentals",
      issuer: "Microsoft, LinkedIn, PMI",
      issuedDate: "Oct 2024 – Dec 2024",
      skills: [
        "Generative AI",
        "Artificial Intelligence (AI)",
        "Responsible AI",
        "Computer Ethics",
        "AI for Business",
      ],
      includes: [
        "Career Essentials in Generative AI",
        "What Is Generative AI?",
        "Introduction to Artificial Intelligence",
        "Ethics in the Age of Generative AI",
      ],
    },
    {
      title: "Microsoft Copilot & AI Productivity",
      issuer: "LinkedIn",
      issuedDate: "Oct 2024",
      skills: ["Microsoft Copilot", "Microsoft 365", "AI Productivity"],
      includes: [
        "Learning Microsoft 365 Copilot",
        "Streamlining Your Work with Microsoft Copilot",
      ],
    },
    {
      title: "Frontend Development with React & JavaScript",
      issuer: "LinkedIn, Meta, OpenClassrooms",
      issuedDate: "Jun 2023 – Dec 2024",
      skills: [
        "React.js",
        "JavaScript",
        "Front-End Development",
        "Redux Toolkit",
      ],
      includes: [
        "Hands-On Introduction: JavaScript",
        "Hands-On Introduction: React",
        "Advanced React",
        "Coding Exercises: React.js",
      ],
    },
    {
      title: "Databases, APIs & Development Tools",
      issuer: "IBM, LinkedIn, MaharaTech",
      issuedDate: "May 2023 – Sep 2024",
      skills: [
        "MongoDB",
        "Databases",
        "NoSQL",
        "Docker",
        "Git",
        "GitHub",
        "Postman",
      ],
      includes: ["MongoDB", "Git & GitHub", "Docker", "Postman"],
    },
  ];
  // useEffect to handle the slideshow
  useEffect(() => {
    const intervals = projects.map((project, index) => {
      let currentIndex = 0;

      // Start a new interval for each project
      return setInterval(() => {
        currentIndex = (currentIndex + 1) % project.images.length;

        // Update the project's currentImage based on the interval
        setProjects((prevProjects) => {
          const newProjects = [...prevProjects];
          newProjects[index] = {
            ...newProjects[index],
            currentImage: project.images[currentIndex],
          };
          return newProjects;
        });
      }, 1500); // Change image every 1.5 seconds
    });

    // Cleanup function to clear intervals when component unmounts
    return () => {
      intervals.forEach((interval) => clearInterval(interval));
    };
  }, []);

  const downloadCV = () => {
    try {
      const link = document.createElement("a");
      link.href = "Mohamed Reda Ismail_TEST.pdf";
      link.download = "Mohamed Reda Ismail_TEST.pdf";
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
    <div className="App">
      <nav>
        <div className="logo">Mohamed Reda</div>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#education">Education</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#certifications">Certifications</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className="hero" id="hero">
        <div className="container hero-content">
          <div className="hero-info">
            <h1>Hello, I'm Mohamed Reda</h1>
            <p>Software Engineer & Web Developer</p>
            <button className="cv-button" onClick={downloadCV}>
              Download CV
            </button>
          </div>
          <div className="hero-image">
            <img
              src={`${process.env.PUBLIC_URL}/gp_photo.jpg`}
              alt="Mohamed Reda"
            />
          </div>
        </div>
      </section>

      <section className="about" id="about">
        <h1>About Me</h1>
        <p>
          Software Engineer specializing in Front-End and Full-Stack Web
          Development with strong expertise in React.js and modern JavaScript
          ecosystems. Experienced in building scalable web applications,
          including e-commerce platforms, dashboards, and secure authentication
          systems using MERN and MEAN stacks. Demonstrated leadership as a
          graduation project team leader with hands-on experience in real-world
          projects. Available for full-time roles starting March 2026 after
          completing military service.
        </p>
      </section>

      <section className="skills" id="skills">
        <h1>Skills</h1>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div className="skill-item" key={index}>
              <span>
                {skill.icon && <FontAwesomeIcon icon={skill.icon} />} &nbsp;{" "}
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </section>

      <section className="education-section" id="education">
        <h1 style={{ marginTop: "60px" }}>Education</h1>
        {education.map((edu, index) => {
          return (
            <div className="education-item" key={index}>
              <img
                src={`${process.env.PUBLIC_URL}/${edu.logo}`}
                alt="Helwan University Logo"
                className="university-logo"
              />
              <div className="education-details">
                <h3>{edu.institution}</h3>
                <p className="degree">{edu.degree}</p>
                <p className="location">{edu.location}</p>
                <p className="date">{edu.date}</p>
                <p className="grade">Grade: {edu.grade}</p>
                <p className="major">Major: {edu.major}</p>
                <p className="minor">Minor: {edu.minor}</p>
              </div>
            </div>
          );
        })}
      </section>

      <section className="projects" id="projects">
        <h1 style={{ marginTop: "-10px" }}>My Projects</h1>
        <div className="projects-container">
          {projects.map((project, index) => (
            <div className="project-item" key={index}>
              <div className="slideshow-container">
                <img
                  className="slideshow-image"
                  src={`${process.env.PUBLIC_URL}/${project.currentImage}`}
                  alt={`${project.name} Image`}
                />
              </div>
              <div className="project-info">
                <h2>{project.name}</h2>
                <p
                  dangerouslySetInnerHTML={{ __html: project.description }}
                ></p>
                <p>
                  <strong>Date:</strong> {project.date}
                </p>
                <a href={project.link} target="_blank" rel="noreferrer">
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <AnimatedTimeline experiences={experiences} />

      <section className="certifications-section" id="certifications">
        <h1>Certifications</h1>

        {certifications.map((cert, index) => (
          <div className="certification-item merged" key={index}>
            {/* Logo */}
            {cert.logo && (
              <img
                src={`${process.env.PUBLIC_URL}/${cert.logo}`}
                alt={`${cert.issuer} Logo`}
                className="certification-logo"
              />
            )}

            {/* Details */}
            <div className="certification-details">
              <h3 className="certification-title">{cert.title}</h3>

              <p className="certification-meta">
                <span className="certification-issuer">{cert.issuer}</span>
                {" • "}
                <span className="certification-issued-date">
                  {cert.issuedDate}
                </span>
              </p>

              {/* Skills */}
              {cert.skills && (
                <div className="certification-skills">
                  {cert.skills.map((skill, i) => (
                    <span className="skill-badge" key={i}>
                      {skill}
                    </span>
                  ))}
                </div>
              )}

              {/* Included Certificates (Merged view) */}
              {cert.includes && (
                <ul className="certification-includes">
                  {cert.includes.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </section>

      <section className="contact" id="contact">
        <h1>Contact Me</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" placeholder="Your Message" required />
          <button type="submit">Send Message</button>
        </form>
      </section>

      <footer>
        <div className="social-links">
          <a
            href="https://github.com/mohamedreda22"
            target="_blank"
            aria-label="GitHub Profile"
            rel="noreferrer"
          >
            <img
              src={`${process.env.PUBLIC_URL}/github.png`}
              className="icon"
              alt="GitHub"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/swe-mohamed-reda/"
            target="_blank"
            aria-label="LinkedIn Profile"
            rel="noreferrer"
          >
            <img
              src={`${process.env.PUBLIC_URL}/linkedin.png`}
              className="icon"
              alt="LinkedIn"
            />
          </a>
          <a
            href="mailto:mohamedreda.dev@gmail.com?subject=Contact%20from%20Website&body=Hello%20Mohamed%2C%0D%0A"
            rel="noreferrer"
          >
            <img
              src={`${process.env.PUBLIC_URL}/gmail.jpg`}
              className="icon"
              alt="Email Icon"
            />
          </a>
          <a
            href="https://wa.me/201155921429"
            target="_blank"
            aria-label="WhatsApp"
            rel="noreferrer"
          >
            <img
              src={`${process.env.PUBLIC_URL}/whatsapp.png`}
              className="icon"
              alt="WhatsApp Icon"
            />
          </a>
        </div>
        <p>&copy; 2026 Mohamed Reda. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
