import { IconBrandGithub, IconBrandInstagram, IconBrandLeetcode, IconBrandLinkedin, IconBrandYoutube } from "@tabler/icons-react";
const Info = {
    name: "Talha Abbas",
    stack: ["Software Engineer", "Full Stack Developer", "Competitive Programmer"],
    bio: "I'm a passionate software engineer specialized in crafting efficient and scalable solutions, deliver top-notch web applications, and provide freelance services that exceed client expectations. Let's connect and create something amazing together!"
}



const ProjectInfo = [
  {
    title: "Full Stack Social Media App",
    desc: "Build a dynamic full stack social media application using the MERN stack, enabling users to connect, share, and communicate in real-time. The application features robust functionalities, including the ability for users to create posts, view and like posts from others, and manage his profile. A key highlight is the real-time chat module,implemented with Socket.io, allowing users to chat instantly. The application ensures secure user authentication through JWT and leverages React Redux for efficient global state management.",
    image: "SM.png",
    live: false,
    technologies: ["React", "Socket.io", "Redux", "Tailwind", "MongoDB", "JWT"],
    link: "",
    github:
      "https://github.com/TalhaAbbas-code/Full-Stack-Social-Media-Application",
  },
  {
    title: "Cryptocurrency Application",
    desc: "In this cryptocurrency application, users can view market values, analyses, and trending coins, and add coins to their favorites list, with a dark mode option available; I implemented JWT for secure authentication, React Context API for state management, and Coin Gecko API for data fetching, storing data in MongoDB; React Router Dom v6 manages dynamic routes, while React hooks like useState and useEffect, along with Axios, ensure smooth API interactions",
    image: "Crypto.png",
    live: false,
    technologies: ["React", "Context API", "MongoDB", "Tailwind", "JWT"],
    link: "",
    github: "https://github.com/Code-Mars/Facebook-Clone",
  },
  {
    title: "Dan E-commerce Store",
    desc: "This is a dynamic platform where users can participate as suppliers or traders to buy and sell products. Suppliers list their products for sale, and other users can place bids, allowing them to compete for the items. Users can view detailed bid information, such as the highest bid, quantity requested, and more. Additionally, the application features a real-time chat module, enabling seamless communication between users, powered by Socketio,The platform utilizes Tailwind CSS for modern, responsive styling.The application is fully responsive ensuring a sleek and user-friendly interface. Axios handles efficient API calls for smooth data fetching, while React Hook Form is employed to manage and validate form data. React OTP Component is integrated to handle OTP for secure user verification. To enhance security and maintain authenticated sessions, interceptors are used to store and send authorization tokens with every request.",
    image: "Dan.png",
    live: true,
    technologies: [
      "React",
      "Axios",
      "Socket.io",
      "Tailwind",
      "Context API",
      "React Hooks",
    ],
    link: "https://dan-store-teal.vercel.app/",
    github: "https://github.com/TalhaAbbas-code/Dan-Store",
  },
  {
    title: "TrySwitch-Landing Page",
    desc: "TrySwitch is a modern and fully responsive landing page developed using Next.js and TypeScript. It is designed to provide a smooth and seamless user experience across all device types. The project features a clean and sleek user interface, enhanced with interactive elements and subtle animations that bring the design to life.It is built on a strong technology stack that includes Next.js and TypeScript, ensuring both performance and type safety throughout the development process. For UI components, the project uses ShadCN UI, which offers accessible and reusable building blocks. To enhance user interaction, GSAP (GreenSock Animation Platform) is integrated, enabling smooth scroll-based animations that contribute to an engaging experience.",
    image: "TrySwitch.png",
    live: true,
    technologies: [
      "Next.js",
      "TypeScript",
      "GSAP",
      "Shadcn UI",
      "Tailwind CSS",
    ],
    link: "https://try-switch-landing-page-topaz.vercel.app/",
    github: "https://github.com/TalhaAbbas-code/TrySwitch-Landing-Page",
  },
  {
    title: "E-Commerce",
    desc: "I developed a basic e-commerce UI using Tailwind CSS, featuring a product slider, category display, and a cart section. The project showcases a clean and modern design, focusing on usability and responsiveness. It includes basic routing functionality for simulating an online shopping experience. Static data is used to display products and categories, providing an interactive feel without the need for a backend. This project enhanced my ability to build functional and visually appealing e-commerce layouts with Tailwind CSS.",
    image: "Ecommerce.png",
    live: true,
    technologies: ["React", "Tailwind", "HTML", "MongoDB"],
    link: "https://e-commerce-six-xi-49.vercel.app/",
    github: "https://github.com/TalhaAbbas-code/E-Commerce",
  },
  {
    title: "NikeLandingPage",
    desc: "I built a fully responsive clone of the Nike landing page using Tailwind CSS. The project focused on creating a clean and modern layout with a mobile-first approach. I utilized Tailwind’s utility classes to ensure responsiveness across various screen sizes. This project helped me improve my skills in building reusable components and structuring code efficiently. It also reinforced best practices in styling and layout organization, enhancing my overall front-end development skills.",
    image: "Nike.png",
    live: true,
    technologies: ["React", "Tailwind", "HTML"],
    link: "https://nike-landing-page-coral-delta.vercel.app/",
    github: "https://github.com/TalhaAbbas-code/NikeLandingPage",
  },
  {
    title: "Zendesk Clone",
    desc: "As a React.js intern at Panacealogics, I developed a fully responsive website clone using React.js and Tailwind CSS. The project involved replicating the original design while ensuring a smooth user experience across all devices. I focused on building reusable components, enhancing the maintainability and scalability of the project. This experience allowed me to demonstrate my proficiency in modern front-end development, particularly in component-based architecture. The project reinforced my skills in creating responsive and dynamic web applications with React and Tailwind CSS.",
    image: "Zendesk.png",
    live: true,
    technologies: ["React", "Tailwind", "HTML", "MongoDB"],
    link: "https://panacea-logics-task02.vercel.app/",
    github: "https://github.com/TalhaAbbas-code/PanaceaLogics-Task02",
  },
  {
    title: "Word Guessing Game",
    desc: "A fun and interactive Word Guessing Game built with React.js and styled using Tailwind CSS. The game allows players to guess a secret 4-letter word within 6 attempts, providing feedback through color-coded input fields. It also features a theme switcher to toggle between light and dark modes using React's useContext. Various React hooks like useCallback, useRef, and useState are utilized for better performance and optimized user experience.",
    image: "Game.png",
    live: true,
    technologies: ["React", "Tailwind", "Context API", "React Hooks"],
    link: "https://panacea-logics-task03.vercel.app/",
    github:
      "https://github.com/TalhaAbbas-code/PanaceaLogics-Task03?tab=readme-ov-file",
  },
];


const SkillInfo = [
    {
        title: "Frontend",
        skills: ["HTML", "CSS", , "JavaScript", "React JS","Next JS" , "Redux", "Tailwind CSS",  "Material UI", "Bootstrap"
        ]
    },
    {
        title: "Backend",
        skills: [ "Node JS", "Express JS", "MySQL", "MongoDB", "Firebase"]
    },
    {
        title: "Languages",
        skills: [  "JavaScript","Java","C++","Dart", "TypeScript"]
    },
    {
        title: "Tools",
        skills: ["Git", "Github", "VS Code", "Postman", "MongoDB Compass"]
    }
]
const socialLinks = [
  { link: "https://github.com/TalhaAbbas-code", icon: IconBrandGithub },
  {
    link: "https://www.linkedin.com/in/talha-abbas/",
    icon: IconBrandLinkedin,
  },
  {
    link: "https://www.instagram.com/talha._.abas?igsh=d2Vkd3poeHhleWR1",
    icon: IconBrandInstagram,
  },
  
 
];


const ExperienceInfo = [
  {
    role: "React.js Developer",
    company: "Panacealogics",
    date: "Feb 2025 - Present",
    desc: "As a React.js Developer at PanaceaLogics, I worked on implementing features and fixing bugs under the guidance of senior developers. I actively participated in code reviews, both as a reviewer and a recipient of feedback, ensuring code quality and adherence to best practices. My responsibilities included writing and executing tests for code reliability, identifying and resolving issues in existing codebases, and using Git for version control. Additionally, I worked with databases, writing queries and managing data interactions when needed, while assisting in various development tasks to enhance project efficiency.",
    skills: ["React JS", "Node JS", "Tailwind CSS", "MySQL", "MongoDB"],
  },
  {
    role: "Team Lead",
    company: "BICON",
    date: "jan 2024 - Jun 2024",
    desc: " As the Team Lead of our Final Year Project, I managed the entire development process, ensuring smooth execution. Our team worked at BICON, NUML, under the guidance of our FYP Supervisor and BICON Incharge. I coordinated tasks, facilitated collaboration, and addressed technical challenges while keeping stakeholders updated. Additionally, I oversaw technical development, ensured high-quality implementation, and managed project documentation.",
    skills: [
      "Flutter",
      "MongoDB",
      "Firebase",
      
    ],
  },
];
const Slugs = [
    "typescript",
    "spring",
    "javascript",
    "dart",
    "java",
    "react",
    "angular",
    "flutter",
    "android",
    "html5",
    "css3",
    "springboot",
    "mongodb",
    "selenium",
    "nodedotjs",
    "express",
    "nextdotjs",
    "prisma",
    "mysql",
    "amazonaws",
    "postgresql",
    "firebase",
    "nginx",
    "vercel",
    "testinglibrary",
    "jest",
    "cypress",
    "docker",
    "git",
    "jira",
    "github",
    "gitlab",
    "visualstudiocode",
    "androidstudio",
    "sonarqube",
    "figma",
];
export { Info, ProjectInfo,socialLinks, SkillInfo, ExperienceInfo, Slugs };