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

export default skillGroups;
