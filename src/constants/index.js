import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    
    title: "B Tech in CSE",
    subtitle: "VVIT",
    subtitle1: "Guntur",
    subtitle2: "2021 - 2025"
  },
  {
    title: " Intermediate ",
    subtitle: "Narayana Junior College",
    subtitle1: "Guntur",
    subtitle2: "2019 - 2021"
  },
  {
    title: " SSC ",
    subtitle: "Narayana High School",
    subtitle1:"Guntur",
    subtitle2: "2019"
  },
  
];

const certi = [
  {
    
    title1: "Microsoft Azure 900",
    link: "https://drive.google.com/file/d/1i8MUy5AI-eUe7yOHm6zfEVNDsUyg5hTM/view?usp=sharing"
  },
  {
    title1: "Associate Data Scientist",
    link: "https://drive.google.com/file/d/1XnJkQ6ypatTRMlOndpcr-bC_vUXocupW/view?usp=sharing"
  },
  {
    title1: "Salesforce AI Associate",
    link: "https://drive.google.com/file/d/1Ew8FAMBAXtJtOcDCqtWnY4OGwpiFj-Nb/view?usp=sharing"
  },
  {
    
    title1: "OCI Foundations Associate",
    link: "https://drive.google.com/file/d/19m130vfdMNd5ZGbiyz78TNTk-yCr18Yt/view?usp=sharing"
  }
  
  
  
  
  
  
];
const  intern= [
  {
    
    title2: "Salesforce Developer",
    link: "https://drive.google.com/file/d/1NAnPuIZ1U1Ki_P1hpKKm86ckxMqmkivA/view?usp=sharing"
  },
  
  
];




const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
 
  {
    title: "TECHNICAL SKILLS",
    icon: tesla,
    iconBg: "#E6DEDD",
    points: [
      "Programming Languages -  C, Python, Java.",
      " Web Technologies - HTML,CSS, JavaScript.",
      " Database Management  -  MySQL, MongoDB.",
      "  Tools and Technologies -  Salesforce, VS Code, GitHub.",
      
    ],

  },
  
  {
    title: "SOFT SKILLS",
    icon: meta,
    iconBg: "#E6DEDD",
    points: [
      " Effective Communication  .",
      " Creative Thinking .",
      "Adaptability.",
      " Empathy.",
      " Team Work and Collaboration.",
      "Optimistic.",
      "Loyalty.",
      
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Likhit proved me wrong.",
    name: "Dr.Sanjay Gandhi",
    designation: "Professor",
    company: "VVIT",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Likhit does.",
    name: "Bhrama Naidu",
    designation: "Professor",
    company: "VVIT",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Likhit optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Dr.T K Rao",
    designation: "Professor",
    company: "VVIT",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "FullStack Agentic AI(RAG)",
    description:
      "Built a multi-modal AI system capable of autonomously handling real-time chat, natural language SQL queries.",
    tags: [
      {
        name: "LLM",
        color: "blue-text-gradient",
      },
      {
        name: "RAG",
        color: "green-text-gradient",
      },
      {
        name: "FastAPI",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/SunkaraLIKHITbabu",
  },
  {
    name: "Fake Profile Detection",
    description:
      "Tuned multiple models (Logistic Regression, Random Forest, XGBoost) via grid search and cross-validation.",
    tags: [
      {
        name: "Random Forest",
        color: "blue-text-gradient",
      },
      {
        name: "XGBoost",
        color: "green-text-gradient",
      },
      {
        name: "ml",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/SunkaraLIKHITbabu",
  },
  {
    name: " T A R U N ' s  Know ME",
    description:
      "A comprehensive Portfolio Website that allows users to know Tarun and My best works and accomplishments.",
    tags: [
      {
        name: "ThreeJS",
        color: "blue-text-gradient",
      },
      {
        name: "TailwindCSS",
        color: "green-text-gradient",
      },
     
    ],
    image: tripguide,
    source_code_link: "https://github.com/SunkaraLIKHITbabu",
  },
];

export { services, certi, technologies, experiences, testimonials, projects,intern };
