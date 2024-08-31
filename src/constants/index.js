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
  starzplay,
  mattressfirm,
  mostlypaws,
  nextjs
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
    title: "Next.js",
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
    name: "Next js",
    icon: nextjs
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
      "Excellent work Zeeshan! Thank you so much for solving my problem. I was scratching my head to resolve this issue. You saved me.",
    name: "Randy Windham",
    designation: "COO",
    company: "Mattress Firm",
    image: "https://randomuser.me/api/portraits/men/5.jpg"
  },
  {
    testimonial:
      "My company is very happy with your work, Big Thanks to you Zeeshan! and your work. You will be my first choice.",
    name: "Aleem Qureshi",
    designation: "CFO",
    company: "Connexus",
    image: "https://randomuser.me/api/portraits/women/4.jpg"
  },
  {
    testimonial:
      "Awesome...! It works like a charm. I am 100% satisfied with your work. I'll be more happy to work with you in near future.",
    name: "Faizan Sarfani",
    designation: "CTO",
    company: "Refinedeals",
    image: "https://randomuser.me/api/portraits/women/6.jpg"
  }
];

const projects = [
  {
    name: "STARZPLAY",
    description:
      "STARZPLAY is a subscription video on demand (SVOD) service that streams thousands of blockbuster Hollywood movies, TV shows, documentaries, kid's entertainment and same-day-as-the-US series – plus dedicated Arabic and Bollywood content – to 19 countries across the Middle East and North Africa.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient"
      },
      {
        name: "node js",
        color: "green-text-gradient"
      },
      {
        name: "styled-components",
        color: "pink-text-gradient"
      }
    ],
    image: starzplay,
    source_code_link: "https://starzon.com/"
  },
  {
    name: "MattressFirm",
    description:
      "MattressFirm.com is wholly owned and operated by Mattress Firm, Inc., 10201 S. Main St. Houston, TX. An E-commerce websites for House hold things like Mattresses, Bedding, Furniture & More.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient"
      },
      {
        name: "typescript",
        color: "green-text-gradient"
      },
      {
        name: "scss",
        color: "pink-text-gradient"
      }
    ],
    image: mattressfirm,
    source_code_link: "https://www.mattressfirm.com/"
  },
  {
    name: "Mostly Paws",
    description:
      "This is a single page static website for showing love with dogs and are committed to mission to raise funds for animals in need. Mainly for making new cool stuff for pet lovers. Also take pride in creating cool merchandise for dog lovers, Always wanted to do something in return for our furry friends.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient"
      },
      {
        name: "node js",
        color: "green-text-gradient"
      },
      {
        name: "css",
        color: "pink-text-gradient"
      }
    ],
    image: mostlypaws,
    source_code_link: "https://mostly-paws.netlify.app/"
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
