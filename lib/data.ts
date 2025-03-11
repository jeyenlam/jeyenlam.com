import { faUser, faAddressBook, faBriefcase, faLocationDot, faLaptopCode } from '@fortawesome/free-solid-svg-icons'
import { faDev, faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import {IBio, IIcon, IProject} from '@/lib/myInterface'
import vinylAppImage from '@/public/vinylapp.png'
import readsify from '@/public/readsify.png'
import athleteAppImage from '@/public/athleteapp.png'
import ecochicImage from '@/public/ecochic.png'
import portfolioImage from '@/public/portfolio.png'

export const bio: IBio[] = [
  {
    type: "name",
    text: 'Yen Lam',
    subText: 'she/her'
  },
  {
    type: "bio description",
    text: 'Aspiring Junior Full-stack Developer.'
  },
  {
    type: "position",
    icon: 
      {
        name: 'briefcase',
        icon: faBriefcase,
        url: ''
      },
    text: 'Full-stack Developer'
  },
  {
    type: "location",
    icon: 
      {
        name: 'location',
        icon: faLocationDot,
        url: ''
      },
    text: 'Based in Grand Rapids, Michigan'
  },
];

export const navLinks: IIcon[] = [
  {
    name: "About",
    icon: faUser,
    url: "#about",
  },
  {
    name: "Experience",
    icon: faBriefcase,
    url: "#experience",
  },
  {
    name: "Projects",
    icon: faLaptopCode,
    url: "#projects",
  },
  {
    name: "Contact",
    icon: faAddressBook,
    url: "#contact",
  },
];

export const contacts: IIcon[] = [
  {
    name: 'LinkedIn',
    icon: faLinkedinIn,
    url: 'https://www.linkedin.com/in/jeyenlam/'
  },
  {
    name: 'Github',
    icon: faGithub,
    url: 'https://www.github.com/jeyenlam/'
  },
]

export const skills = [
  "AWS", "React Native", "Next.js", "Typescript", "Node.js", "MongoDB", "C#", "TailwindCSS", "Python"
]

export const experiences = [
  {
    title: 'SpartaHack X | Best Artistic Expression Winner',
    company: {
      name: 'SpartaHack',
      url: 'https://www.spartahack.com/'
    },
    duration: 'February 2025',
    roleDescription: [
      "Developed a music-generating app in 24 hours that enables users to create music and play music generator games using hand movements, offering users an interactive and immersive experience."    ],
    skills: ['JavaScript', 'Mediapipe', 'GoDaddy']
  },
  {
    title: 'Software Engineer Intern',
    company: {
      name: 'PromoterMotor',
      url: 'https://promotermotor.com'
    },
    duration: 'January - July 2024',
    roleDescription: [
      "Collaborated with peers to maintain and debug system-level code using Google Apps Script, optimizing automation and task management within Google Workspace. Assisted in resolving Google Tag Manager and Google Analytics issues, ensuring accurate tracking and tag functionality on client websites."
    ],
    skills: ['Google Apps Script', 'JavaScript', 'Wordpress']
  },
  {
    title: 'RTC Black Wings Hacks 2024 | 3rd place Winner',
    company: {
      name: 'Rewriting The Code',
      url: 'https://devpost.com/software/ecochic-0denl7',
    },
    duration: 'February 2024',
    roleDescription: [
      "Developed a user-focused web app in 24 hours using React.js, RapidAPI, JSON server, and Figma. Collaborated with teammates to design user flows, implement dynamic components, and integrate API calls, ensuring a polished, seamless experience within the competition timeframe."
    ],
    skills: ['React.js', 'RapidAPI', 'Figma']
  }
];

export const projects: IProject[] = [
  {
    title: 'Responsive Portfolio',
    highlight: true,
    status: 'complete',
    duration: 'Mar 2024 - Now',
    media: portfolioImage,
    urls: [
      {
        name: 'github',
        icon: faGithub,
        url: 'https://github.com/jeyenlam/jeyenlam.com'
      },
    ],
    projectDescription: [
      "A responsive serverless personal website built with Next.js, various AWS services; deployed and hosted by AWS.",
    ],
    tech: ['Next.js', 'Typescript', 'TailwindCSS', 'Aamzon Web Services']
  },
  {
    title: 'Readsify',
    highlight: true,
    status: 'complete',
    duration: 'Feb 2025 - Now',
    media: readsify,
    urls: [
      {
        name: 'github',
        icon: faGithub,
        url: 'https://github.com/jeyenlam/readsify'
      },
    ],
    projectDescription: [
      "An AI-powered web app that features an multi-filters book recommender system, a chatbot to converse about book and a digital bookshelf.",
    ],
    tech: ['Next.js', 'Django', 'SQLite', 'Langchain', 'OpenAI', 'Vector-Search']
  },
  {
    title: 'Full-stack Intelligent Athlete Tracker',
    highlight: false,
    status: 'complete',
    duration: 'Aug - Dec 2025',
    media: athleteAppImage,
    urls: [
      {
        name: 'github',
        icon: faGithub,
        url: '/'
      },
    ],
    projectDescription: [
      "A mobile app to capture raw game footages of student atheletes then AI-processed to produce key highlights shorts.",
    ],
    tech: ['Expo', 'Node.js', 'MongoDB', 'Auth0', 'GridFS', 'TailwindCSS']
  },
  {
    title: 'Vinyl Collection Tracker',
    highlight: false,
    status: 'complete',
    duration: 'Feb - Apr 2024',
    media: vinylAppImage,
    urls: [
      {
        name: 'github',
        icon: faGithub,
        url: 'https://github.com/jeyenlam/Vinyl-Collection-Tracker-App'
      },
      {
        name: 'devpost',
        icon: faDev,
        url: '/'
      }
    ],
    projectDescription: [
      "A web app to simplfy Discogs' user experience with vinyl collection management by integrating simple and intuitive vinyl-collection-oriented management features.",
    ],
    tech: ['Flask', 'HTML', 'CSS', 'DiscogAPI', 'OAuth']
  },
  {
    title: 'EcoChic',
    highlight: false,
    status: 'complete',
    duration: 'Feb 2024',
    media: ecochicImage,
    urls: [
      {
        name: 'github',
        icon: faGithub,
        url: 'https://github.com/jeyenlam/EcoChic'
      },
    ],
    projectDescription: [
      "A web app within 24 hours that promote fashion sustainability, configuring a map that helps user easily search for local sustainable stores location.",
    ],
    tech: ['React.js', 'Javascript', 'RapidAPI', 'Figma']
  }
];