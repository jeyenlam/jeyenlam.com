import React from "react";
import linkedin from '@/assets/linkedin.png'
import devpost from '@/assets/letter-d.png'
import github from '@/assets/github.png'
import youtube from '@/assets/youtube.png'
import codepen from '@/assets/codepen.png'


export const links = [
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
] as const;

export const skills = [
  {
    frontend: {
      languages: ["HTML", "CSS", "SCSS", "JavaScript", "TypeScript"],
      frameworks: ["React.js", "Tailwind", "Bootstrap"],
    },
  },
  {
    backend: {
      languages: ["Python", "Java", "C"],
      frameworks: ["Express.js", "Flask"],
    },
  },
  { database: ["MongoDB", "PostgreSQL"] },
  { other: ["Node.js", "Git", "Github", "Netlify", "VSCode", "Postman", "Bash"] },
];

export const experiences = [
  {
    title: 'Software Engineer Intern',
    company: 'PromoterMotor',
    url: 'https://promotermotor.com',
    duration: 'Jan 2024 - Present',
    desc: "Collaborated with peers to work on Google Apps Script projects that help automate the company's task management of Google Suite. Helped debug projects and troubleshoot Google Tag Manager related issues. Implemented the company's website using Wordpress.",
    skills: ['Google Apps Script', 'JavaScript', 'Wordpress']
  },
  {
    title: '3rd Place Hackathon Winner',
    company: 'Rewriting The Code',
    url: 'https://devpost.com/software/ecochic-0denl7',
    duration: 'Feb 2024 - Feb 2024',
    description: "Led the development of EcoChic, a web app featuring approved sustainable brands. Configured and rendered the web app components to create a seamless and intuitive user experience. Utilized various React libraries to configure routing, fetch API data, and troubleshoot issues during development.",
    skills: ['React.js', 'Node.js', 'RapidAPI', 'Figma']
  }
];

export const projects = [
  {
    title: 'EcoChic',
    urls: {
      github: 'https://github.com/jeyenlam/EcoChic',
      devpost: 'https://devpost.com/software/ecochic-0denl7'
    },
    desc: [
      'Developed a web app that features approved sustainable brands, won a 3rd place in the RTC Black Wings Hacks 2024, showcasing problem-solving and effective teamwork in a time constraints condition.',
      'Contributed to configuring and rendering the web app components to create a seamless and intuitive user experience.',
      'Utilized various React libraries to configure routing, fetch API data, and troubleshoot issues during development.'
    ],
    techStack: ['React.js', 'Node.js', 'HTML', 'CSS', 'RapidAPI', 'Figma']
  },
  {
    title: 'Full Stack Expense Tracker Dashboard',
    urls: {
      github: 'https://github.com/jeyenlam/MERN-Expense-Tracker-Dashboard',
    },
    desc: [
      'Crafted an intuitive Expense Tracker Dashboard employing the MERN stack, ensuring a seamless and efficient user experience in expense management.',
        'Implemented RESTful APIs using Node.js and Express.js, ensuring smooth and secured communication between the frontend and backend components of the application.',
        'Integrated data visualization tools with various React libraries, providing users with insightful visual representations of their spending, saving patterns.'
    ],
    techStack: ['React.js', 'Express.js', 'MongoDB', 'Node.js', 'StyledComponents']
  },
  {
    title: 'Next.js Responsive Portfolio',
    urls: {
      github: 'https://github.com/jeyenlam/Portfolio',
    },
    desc: [
      "Developed and deployed a responsive portfolio, implementing the Agile methodology for continuous maintenance and improvement.",
        "Implemented SEO best practices, including meta tags and structured data, to enhance the website's visibility on search engines.",
        "Utilized state management and various libraries in React to efficiently manage and update content without the need for full page reloads.",
    ],
    techStack: ['Next.js', 'TypeScript', 'TailwindCSS', 'Framer Motion']
  },
  {
    title: 'Vinyl Collection Tracker',
    urls: {
      github: 'https://github.com/jeyenlam/Vinyl-Collection-Tracker-App',
    },
    desc: [
      "A web app that was built to elevate Discogs' users experience by integrating features including browsing random vinyl, modifying collections with better UI designs ",
      'Utilized OAuth 2.0 authorization framework to grant granular permissions, ensuring secure access to user data while respecting privacy concerns.',
    ],
    techStack: ['HTML', 'CSS', 'Flask', 'Python', 'OAuth', 'DiscogsAPI']
  },
]

export const icons = [
  {
    name: 'linkedin',
    icon: 'faLinkedin',
    url: 'https://www.linkedin.com/in/jeyenlam/'
  },
  {
    name: 'github',
    icon: 'faGithub',
    url: 'https://github.com/jeyenlam'
  },
  {
    name: 'codepen',
    icon: 'faCodepen',
    url: 'https://codepen.io/jeyenlam'
  },
  {
    name: 'dev',
    icon: 'faDev',
    url: 'https://devpost.com/jeyenlam?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav'
  }
] as const