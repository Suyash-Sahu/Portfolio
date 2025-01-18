import {
  mobile,
  backend,
  web,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
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

export const services = [
  {
    title: "Web Developer",
    icon: web,
    description: "Creating responsive web applications using modern frameworks like React and Next.js."
  },
  {
    title: "Android Developer",
    icon: mobile,
    description: "Developing native and hybrid Android applications using Java and Kotlin frameworks."
  },
  {
    title: "Backend Developer",
    icon: backend,
    description: "Developing robust server-side applications with Node.js, Express, and MongoDB."
  },
];

export const technologies = [
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  }
];

export const experiences = [
  {
    title: "StayFit App Developer",
    company_name: "Major Academic Project",
    icon: mobile,
    iconBg: "#E6DEDD",
    date: "Dec 2024 - Present",
    points: [
      "Developed a comprehensive fitness tracking application using Java and Android Studio",
      "Implemented features like workout tracking, nutrition planning, and progress monitoring",
      "Led the UI/UX design process ensuring intuitive user experience",
      "Integrated SQLite database for efficient data management and real-time tracking"
    ],
  },
  {
    title: "3D Portfolio Developer",
    company_name: "Personal Project",
    icon: web,
    iconBg: "#383E56",
    date: "2025",
    points: [
      "Created an interactive 3D portfolio using React.js, Three.js, and Tailwind CSS",
      "Implemented responsive design ensuring cross-platform compatibility",
      "Developed engaging 3D animations and interactive elements",
      "Utilized modern web development practices and version control"
    ],
  },
  {
    title: "Software Development",
    company_name: "Academic Learning",
    icon: backend,
    iconBg: "#383E56",
    date: "2023 - Present",
    points: [
      "Completed NPTEL certification in programming fundamentals",
      "Developed Android applications using Kotlin including a Tip Calculator app",
      "Mastered programming languages: JavaScript, and Kotlin",
      "Actively learning web technologies: HTML, CSS, React.js, Node.js"
    ],
  }
];

export const projects = [
  {
    name: "StayFit - Fitness Tracking App",
    description:
      "A comprehensive Android fitness application built with Java that helps users track their workouts, plan nutrition, and monitor their fitness progress. Features include workout tracking, nutrition planning, and progress monitoring.",
    tags: [
      {
        name: "android",
        color: "green-text-gradient",
      },
      {
        name: "java",
        color: "blue-text-gradient",
      },
      {
        name: "sqlite",
        color: "pink-text-gradient",
      },
    ],
    image: mobile,
    source_code_link: "https://github.com/",
  },
  {
    name: "3D Portfolio",
    description:
      "An interactive and modern portfolio website built using React.js and Three.js. Features 3D animations, responsive design, and dynamic content rendering. Showcases projects and skills in an engaging way.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "threejs",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: web,
    source_code_link: "https://github.com/",
  },
  {
    name: "Kotlin Android Project",
    description:
      "Android application developed using Kotlin, demonstrating modern Android development practices. Includes features like material design, data persistence, and responsive UI components.",
    tags: [
      {
        name: "kotlin",
        color: "blue-text-gradient",
      },
      {
        name: "android",
        color: "green-text-gradient",
      },
      {
        name: "jetpack",
        color: "pink-text-gradient",
      },
    ],
    image: mobile,
    source_code_link: "https://github.com/",
  },
]