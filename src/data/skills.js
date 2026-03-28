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
  faMicrochip,
  faCogs,
  faProjectDiagram,
} from "@fortawesome/free-solid-svg-icons";

const skillGroups = [
  {
    label: {
      en: "Product Engineering",
      ar: "هندسة المنتجات",
    },
    skills: [
      { name: "React 19", icon: faReact },
      { name: "Angular", icon: faAngular },
      { name: "TypeScript", icon: faJsSquare },
      { name: "Redux Toolkit", icon: faExchangeAlt },
      { name: "Tailwind CSS", icon: faCss3Alt },
      { name: "Framer Motion", icon: faDesktop },
      { name: "UI/UX Design", icon: faLaptopCode },
    ],
  },
  {
    label: {
      en: "System Architecture",
      ar: "معمارية الأنظمة",
    },
    skills: [
      { name: "Node.js", icon: faNodeJs },
      { name: "Express.js", icon: faServer },
      { name: "MongoDB", icon: faDatabase },
      { name: "SQL / PostgreSQL", icon: faDatabase },
      { name: "RESTful APIs", icon: faProjectDiagram },
      { name: "MERN Stack", icon: faLayerGroup },
      { name: "MEAN Stack", icon: faCubes },
    ],
  },
  {
    label: {
      en: "Engineering Operations",
      ar: "العمليات الهندسية",
    },
    skills: [
      { name: "Git / Version Control", icon: faGitAlt },
      { name: "CI/CD Pipelines", icon: faCodeBranch },
      { name: "Jest / TDD", icon: faVial },
      { name: "Docker", icon: faCode },
      { name: "Linux Systems", icon: faCogs },
      { name: "Postman / API Test", icon: faEnvelope },
    ],
  },
  {
    label: {
      en: "Future & Methodology",
      ar: "المستقبل والمنهجيات",
    },
    skills: [
      { name: "Generative AI", icon: faRobot },
      { name: "Python / AI Ops", icon: faPython },
      { name: "Agile / Scrum", icon: faTasks },
      { name: "Large Scale Systems", icon: faMicrochip },
      { name: "Performance Optimization", icon: faCogs },
      { name: "Jira / Collaboration", icon: faJira },
    ],
  },
];

export default skillGroups;
