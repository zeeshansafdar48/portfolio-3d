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
  gsoft,
  systems,
  starzon,
  carrent,
  jobit,
  tripguide,
  threejs
} from "../assets";
import {
  BsGithub,
  BsLinkedin,
  BsFillTelephoneFill,
  BsGoogle,
  BsPencilSquare
} from "react-icons/bs";

export const navLinks = [
  {
    id: "about",
    title: "About"
  },
  {
    id: "work",
    title: "Work"
  },
  {
    id: "projects",
    title: "Projects"
  },
  {
    id: "contact",
    title: "Contact"
  }
];

const services = [
  {
    title: "JavaScript",
    icon: web
  },
  {
    title: "React.js",
    icon: mobile
  },
  {
    title: "Node.js",
    icon: backend
  },
  {
    title: "Frontend Developer",
    icon: creator
  }
];

const technologies = [
  {
    name: "HTML 5",
    icon: html
  },
  {
    name: "CSS 3",
    icon: css
  },
  {
    name: "JavaScript",
    icon: javascript
  },
  {
    name: "TypeScript",
    icon: typescript
  },
  {
    name: "React JS",
    icon: reactjs
  },
  {
    name: "Redux Toolkit",
    icon: redux
  },
  {
    name: "Tailwind CSS",
    icon: tailwind
  },
  {
    name: "Node JS",
    icon: nodejs
  },
  {
    name: "MongoDB",
    icon: mongodb
  },
  {
    name: "Three JS",
    icon: threejs
  },
  {
    name: "git",
    icon: git
  },
  {
    name: "figma",
    icon: figma
  },
  {
    name: "docker",
    icon: docker
  }
];

const experiences = [
  {
    title: "Software Engineer (React.js | Node.js)",
    company_name: "Global Software Consulting",
    icon: gsoft,
    iconBg: "#E6DEDD",
    date: "Nov 2018 - Feb 2021",
    points: [
      "Full-Stack Development: Proficient in full-stack software development using React JS and Node JS, with involvement in various projects to meet client requirements.",
      "Agile Methodology: Experienced in working within a Scrum/Agile environment, including planning, estimating, and managing work at different levels (story, sprint, release).",
      "Team Leadership and Training: Engaged in team leadership activities such as conducting monthly performance reviews, setting objectives, and training interns on JavaScript and React JS."
    ]
  },
  {
    title: "Software Engineer (React.js | Node.js)",
    company_name: "Systems Limited",
    icon: systems,
    iconBg: "#E6DEDD",
    date: "Feb 2021 - Apr 2022",
    points: [
      "Worked as a React JS developer on an Ecommerce Product using Microsoft Dynamics 365 Commerce",
      "Mainly worked on JS Heap Snapshot, debugging code, solving problems using JavaScript",
      "Successfully built software products for the company using Agile methodologies",
      "Ensured code quality of the team and introduced best practices in the team",
      "Communicating with QAs to ensure clients' requirements before going to Production",
      "Unit Testing of the Product in live environments",
      "Take part in Sprint Plannings, Sprint Reviews",
      "Use Azure Dev Ops for Project management",
      "Carried out tasks and produced required results with minimal supervision"
    ]
  },
  {
    title: "Senior Software Engineer",
    company_name: "Starzplay",
    icon: starzon,
    iconBg: "#383E56",
    date: "May 2022 - Present",
    points: [
      "Collaborated with the UI/UX design teams to improve and rebrand the website and application, increasing conversion rates by 25%",
      "Participate in meetings, brainstorming sessions, and sprint planning to contribute ideas and insights",
      "Created payment flows on TV and embedded the information in a QR code by scanning the code user was redirected to the respective payment page"
    ]
  }
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg"
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg"
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg"
  }
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient"
      },
      {
        name: "mongodb",
        color: "green-text-gradient"
      },
      {
        name: "tailwind",
        color: "pink-text-gradient"
      }
    ],
    image: carrent,
    source_code_link: "https://github.com/"
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient"
      },
      {
        name: "restapi",
        color: "green-text-gradient"
      },
      {
        name: "scss",
        color: "pink-text-gradient"
      }
    ],
    image: jobit,
    source_code_link: "https://github.com/"
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient"
      },
      {
        name: "supabase",
        color: "green-text-gradient"
      },
      {
        name: "css",
        color: "pink-text-gradient"
      }
    ],
    image: tripguide,
    source_code_link: "https://github.com/"
  }
];

const socialLinks = [
  {
    icon: BsGoogle,
    type: "email",
    info: "zeeshan7826@gmail.com"
  },
  {
    icon: BsLinkedin,
    type: "link",
    link: "https://www.linkedin.com/in/zeeshan-safdar-dev/"
  },
  {
    icon: BsFillTelephoneFill,
    type: "phone",
    info: "+923041479340"
  },
  {
    icon: BsGithub,
    type: "link",
    link: "https://github.com/zeeshansafdar48"
  },
  {
    icon: BsPencilSquare,
    type: "link",
    link: "https://zeeshansafdar.hashnode.dev/"
  }
];

export { services, technologies, experiences, testimonials, projects, socialLinks };
