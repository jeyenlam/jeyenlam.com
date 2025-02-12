import { faUser, faLaptopFile, faBriefcase, faDownload, faAddressBook } from '@fortawesome/free-solid-svg-icons'
import { faDev, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import {IIcon, IProject} from '@/lib/myInterface'
import vinylAppImage from '@/public/vinylapp.png'
import financeAppImage from '@/public/financeapp.png'
import athleteAppImage from '@/public/athleteapp.png'
import ecochicImage from '@/public/ecochic.png'
import portfolioImage from '@/public/portoflio.png'

export const navLinks: IIcon[] = [
  {
    name: "About",
    icon: faUser,
    url: "#about",
  },
  {
    name: "Projects",
    icon: faLaptopFile,
    url: "#projects",
  },
  {
    name: "Experience",
    icon: faBriefcase,
    url: "#experience",
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
    icon: faLinkedin,
    url: 'https://www.linkedin.com/in/jeyenlam/'
  },
  {
    name: 'Github',
    icon: faGithub,
    url: 'https://www.github.com/jeyenlam/'
  },
]

export const skills = [
  "React.js", "React Native", "Next.js", "Javascript", "Typescript", "Node.js", "MongoDB", "C#", "TailwindCSS"
]

export const experiences = [
  {
    title: 'Software Engineer Intern',
    company: {
      name: 'PromoterMotor',
      url: 'https://promotermotor.com'
    },
    duration: 'January 2024 - July 2024',
    roleDescription: [
      "Collaborated with peers utilizing Google Apps Script to maintain and debug the company’s system-level code, optimizing automation and task management workflows within Google Workspace.",
      "Researched and assisted in resolving Google Tag Manager and Google Analytics tracking configuration issues on client websites, ensuring precise tracking and proper tag functionality."
    ],
    skills: ['Google Apps Script', 'JavaScript', 'Wordpress']
  },
  {
    title: '3rd Place Winner of Black Wing Hacks 2024',
    company: {
      name: 'Rewriting The Code',
      url: 'https://devpost.com/software/ecochic-0denl7',
    },
    duration: 'Feb 2024',
    roleDescription: [
      "Developed a web app within 36 hours, using React.js, RapidAPI, JSON server and Figma.",
      "Worked closely with teammates to brainstorm, refine, and deliver key features, ensuring a polished, user-focused app within the competition timeframe.",
      "Created user flow designs, implemented dynamic components, and integrated routing and API calls using React libraries to provide a seamless user experience."
    ],
    skills: ['React.js', 'RapidAPI', 'Figma']
  }
];

export const projects: IProject[] = [
  {
    title: 'Vinyl Collection Tracker',
    status: 'complete',
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
      "Developed a web app to enhance Discogs' user experience by integrating features like random vinyl browsing and intuitive collection management.",
      "Leveraged the DiscogsAPI to access and update user collection data, implementing OAuth for secure authentication and safeguarding user privacy.",
      "Created use cases, a traceability matrix and applied Agile methodology to accommodate ongoing changes, ensuring the app's adaptability and smooth integration of new features throughout development."
    ],
    tech: ['Flask', 'Python', 'HTML5', 'CSS3', 'DiscogAPI', 'OAuth']
  },
  {
    title: 'Full-stack Intelligent Athlete Tracker',
    status: 'complete',
    media: athleteAppImage,
    urls: [
      {
        name: 'github',
        icon: faGithub,
        url: '/'
      },
    ],
    projectDescription: [
      "Developed a mobile app leveraging the built-in camera and ROC.ai technology to help coaches and parents monitor athlete performance and manage profiles efficiently, aiming for a low-cost alternative to existing products.",
      "Integrated Auth0 for secure authentication, used MongoDB for data storage, and implemented various React Native libraries to support core app functionalities.",
      "Employed Scrum methodology to manage development, ensuring timely delivery and adaptability to project needs."
    ],
    tech: ['Expo', 'Node.js', 'MongoDB', 'Auth0', 'Roc.aiAPI', 'TailwindCSS']
  },
  {
    title: 'Responsive Portfolio',
    status: 'complete',
    media: portfolioImage,
    urls: [
      {
        name: 'github',
        icon: faGithub,
        url: 'https://github.com/jeyenlam/jeyenlam.com'
      },
    ],
    projectDescription: [
      "Created a responsive personal website using Next.js, integrating various AWS services, and deployed it on AWS.",
    ],
    tech: ['Next.js', 'Typescript', 'TailwindCSS', 'Aamzon Web Services']
  },
  {
    title: 'EcoChic',
    status: 'complete',
    media: ecochicImage,
    urls: [
      {
        name: 'github',
        icon: faGithub,
        url: 'https://github.com/jeyenlam/EcoChic'
      },
    ],
    projectDescription: [
      "Developed a web app that features approved sustainable brands within 36 hours.",
    ],
    tech: ['React.js', 'Javascript', 'CSS', 'RapidAPI']
  },
  {
    title: 'Full Stack Financial Tracker',
    status: 'complete',
    media: financeAppImage,
    urls: [
      {
        name: 'github',
        icon: faGithub,
        url: 'https://github.com/jeyenlam/MERN-Expense-Tracker-Dashboard'
      },
    ],
    projectDescription: [
      "Developed an intuitive financial dashboard employing the MERN stack to facilitate efficient expense management.",
    ],
    tech: ['React.js', 'Node.js', 'MongoDB', 'Express.js', 'StyledComponents']
  }
];