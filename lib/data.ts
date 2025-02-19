import { faUser, faAddressBook, faBriefcase, faLocationDot, faLaptopCode } from '@fortawesome/free-solid-svg-icons'
import { faDev, faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import {IBio, IIcon, IProject} from '@/lib/myInterface'
import vinylAppImage from '@/public/vinylapp.png'
import financeAppImage from '@/public/financeapp.png'
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
    text: 'Full-stack Developer, open to work'
  },
  {
    type: "location",
    icon: 
      {
        name: 'location',
        icon: faLocationDot,
        url: ''
      },
    text: 'Based in Grand Rapids, MI, Eastern Time (ET)'
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
    title: 'Full-stack Financial Tracker',
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