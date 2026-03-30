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
  faTerminal,
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

export const itSkillGroups = [
  {
    label: {
      en: "Networking",
      ar: "الشبكات",
    },
    skills: [
      { name: "TCP/IP", icon: faProjectDiagram },
      { name: "DNS / DHCP", icon: faServer },
      { name: "Subnetting", icon: faCogs },
      { name: "Routing & Switching", icon: faExchangeAlt },
      { name: "Network Troubleshooting", icon: faVial },
    ],
  },
  {
    label: {
      en: "Operating Systems",
      ar: "أنظمة التشغيل",
    },
    skills: [
      { name: "Windows Support", icon: faDesktop },
      { name: "Linux (Ubuntu/Bash)", icon: faTerminal },
      { name: "System Administration", icon: faCogs },
      { name: "Remote Desktop", icon: faLaptopCode },
    ],
  },
  {
    label: {
      en: "Hardware & Support",
      ar: "الأجهزة والدعم",
    },
    skills: [
      { name: "PC/Laptop Assembly", icon: faMicrochip },
      { name: "Hardware Maintenance", icon: faCogs },
      { name: "System Diagnostics", icon: faVial },
      { name: "End-User Support", icon: faTasks },
    ],
  },
  {
    label: {
      en: "Tools & Software",
      ar: "الأدوات والبرامج",
    },
    skills: [
      { name: "Microsoft 365", icon: faEnvelope },
      { name: "Autodesk Systems", icon: faCubes },
      { name: "Git / Version Control", icon: faGitAlt },
      { name: "Remote Support Tools", icon: faLaptopCode },
      { name: "CMD / Bash / PowerShell", icon: faTerminal },
    ],
  },
];

export default skillGroups;
