export const Email = "amine.beji001@gmail.com";
export const Links = {
  github: "https://github.com/aminebeji/portfolio",
  linkedIn: "https://www.linkedin.com/in/amine-beji-0542501b5/",
  instagram: "https://www.instagram.com/amine__beji__/"
};

export const Experience = [
  {
    company: "Prefe",
    date: "October 2024 - Present",
    location: "Remote - Italy",
    discription: [
      "Developing and maintaining web applications using modern JavaScript frameworks",
      "Implementing responsive and accessible user interfaces",
      "Collaborating with cross-functional teams to deliver high-quality solutions",
      "Optimizing application performance and user experience"
    ],
    technologies: ["React.js", "Ant Design", "Redux toolkit", "Git" , "leaflet maps" , "E-Charts"],
    link: "https://prefe.com/",
    tag: "prefe",
    post: "Frontend Developer",
  },
  {
    company: "Cookie Jar Tech",
    date: "August 2021 - October 2024",
    location: "Remote - Lithuania",
    discription: [
      "Lead development of web applications using React.js, Next.js, GoLang, and Node.js for enterprise clients",
      "Manage and mentor development teams of 5+ engineers to deliver scalable, performant solutions",
      "Implement CI/CD pipelines using Docker, GitLab, and Kubernetes for automated deployments",
      "Architect microservices and distributed systems for high-traffic applications handling 100k+ daily users",
      "Collaborate with stakeholders to define technical requirements and project roadmaps"
    ],
    technologies: ["React.js", "Next.js", "Vue.js", "Node.js", "Docker", "Kubernetes", "Git", "PostgreSQL", "MongoDB", ".NET"],
    link: "https://cookiejartech.lt/",
    tag: "cookie-jar-tech",
    post: "Full Stack Developer & Technical Team Leader",
  },
  {
    company: "Sastec Group",
    date: "August 2021 - August 2022",
    location: "On-site - Tunisia",
    discription: [
      "Developed full-stack applications using MERN stack and modern JavaScript frameworks",
      "Led a team of 5 developers in agile environment using Scrum methodology",
      "Designed and implemented RESTful APIs and GraphQL services for mobile and web applications",
      "Optimized application performance and reduced load times by 40% through code splitting and lazy loading",
      "Maintained production environments using Docker and Kubernetes with 99.9% uptime"
    ],
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "GraphQL", "Docker", "Kubernetes", "GoLang", "Redux"],
    link: "https://www.sastec-group.com/",
    tag: "sastec-group",
    post: "Full Stack Developer & Team Leader",
  },
  {
    company: "SastecSkills",
    date: "June 2022 - September 2022",
    location: "On-site - Tunisia",
    discription: [
      "Successfully launched and completed MERN stack bootcamp program with 30+ students",
      "Taught modern web development technologies and best practices including React, Node.js, Express, and MongoDB",
      "Developed comprehensive curriculum covering full-stack development from basics to advanced concepts",
      "Mentored students through real-world projects using Agile/Scrum methodology",
      "Achieved 95% student satisfaction rating and 85% job placement rate within 3 months of graduation"
    ],
    technologies: ["JavaScript", "React.js", "Node.js", "Express.js", "MongoDB", "Git"],
    link: "https://www.linkedin.com/company/sastecskills/",
    tag: "sastecskills",
    post: "JavaScript Instructor",
  },
  {
    company: "DOT-IT",
    date: "February 2021 - June 2021",
    location: "On-site - Tunisia",
    discription: [
      "Developed a comprehensive freelancing platform similar to Fiverr/Upwork using MERN stack",
      "Managed entire project lifecycle from conception, design, development to deployment",
      "Implemented real-time features using Socket.io for instant messaging and notifications",
      "Gained proficiency in Docker and Kubernetes for application containerization and orchestration",
      "Created responsive UI/UX designs using modern CSS frameworks and best practices"
    ],
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Socket.io", "Docker", "Kubernetes"],
    link: "http://www.dotit-corp.com/",
    tag: "dot-it",
    post: "Full Stack Developer (Internship)",
  },
  {
    company: "Digital Solution",
    date: "August 2020",
    location: "On-site - Tunisia",
    discription: [
      "Designed and developed responsive websites for clients using HTML5, CSS3, and JavaScript",
      "Implemented pixel-perfect designs for mobile and desktop platforms",
      "Collaborated with designers to translate mockups into functional web pages",
      "Optimized website performance and ensured cross-browser compatibility"
    ],
    technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "jQuery", "Responsive Design"],
    tag: "digital-solution",
    post: "Front-End Developer (Internship)",
  },
];

export const PROFESIONNAL_PROJECTS = [
  {
    id: 1,
    title: "DATA STATISTICS / LOOKER STUDIO REPORTS",
    description: `Developed a system to gather and refine information from various platforms used by our
    customers.
    Generated a Looker Studio dashboard to retrieve refined data from the database and
graphically display it for specific customer purposes.
`,

    techno: ["Node.js", "Looker Studio", "PostgresSQL", "Google Extensions"],

    assets: ["/projects/player/video_player.png"],
  },
  {
    id: 1,
    title: "PROJECT TESTING AND MAINTENANCE",
    description: `Implemented new features based on user feedback and project requirements to improve
    the overall system.
    Developed unit tests for the .NET and C# project to ensure code reliability and
performance.
Automated API testing using Postman to streamline the testing process and improve
efficiency`,

    techno: [".NET", "C#", "Q&A", "PostMan", "Automation"],

    assets: ["/projects/player/video_player.png"],
  },
  {
    id: 1,
    title: "Order automation system",
    description: `Developed a system that handles order transitions from the order management system to the delivery system.
    Developed a dashboard to display the history of order transitions and manage settings to organize orders.`,

    techno: [
      "Vue.js 3",
      "Vuex",
      "Node.js",
      "NaiveUI",
      "MongoDB",
      "Linnworks",
      "E-Commerce",
    ],

    assets: ["/projects/player/video_player.png"],
  },
  {
    id: 2,
    title: "Products Management & XML file generator",
    description: `Created cron jobs to synchronize product quantities and availability from an external system`,

    techno: [
      "Vue.js 2",
      "Vuex",
      "Node.js",
      "Veutify",
      "MongoDB",
      "Linnworks",
      "E-Commerce",
    ],

    assets: ["/projects/player/video_player.png"],
  },
  {
    id: 3,
    title: "QR Code Generator",
    description: `A web application for generating QR codes. Users will be able to create QR codes for various types of information such as V-card, links, Wi-Fi network information, and phone calls.`,

    techno: ["React.js", "chakra-ui", "QR-code"],
    link: "https://qr-code-generator-aminebeji.vercel.app/",
    github: "https://github.com/aminebeji/qr_code_generator",
    assets: ["/projects/player/video_player.png"],
  },
  {
    id: 4,
    title: "Video Player",
    description: `a web application that could play videos and lives using their links (hls , mp4 ,etc ). It has so many feature like adding slides and chapter during the videos , it could play a 360° video.`,

    techno: ["Next.js", "Redux", "Video.js", "Vime.js"],
    link: "https://player-fo-test.empreinte.tech/",
    assets: ["/projects/player/video_player.png"],
  },
  {
    id: 5,
    title: "JustOd",
    description: `I manage to maintain a booking system for my client and fix some bugs and add some cool feature to his application.`,
    techno: ["React.js", "Redux", "Node.js", "Graphql", "Mysql"],
    link: "https://justod.com/",
    assets: ["/projects/justod/justod.png"],
  },
  {
    id: 6,
    title: "PinParty",
    description: `A mobile application for party sharing, every user could create a post for his party and receive requests from other user to join his party.`,

    techno: ["React Native", "Redux", "Node.js", "MongoDB"],
    link: "",
    github: "",
    assets: [""],
  },
  {
    id: 7,
    title: "Github Search",
    description: `A web application could search for any github profile using githu APIs.the final result will show some statistics on the user and his last github repository.`,

    techno: ["Vue.js", "Vuex", "vue-chartjs", "bootstrap"],
    link: "https://github-search-aminebeji.vercel.app/",
    github: "https://github.com/aminebeji/github_search",
    assets: [""],
  },
];

export const PERSONAL_PROJECTS = [
  {
    id: 1,
    title: "",
    description: "",
    techno: [],
    link: "",
    github: "",
  },
];

export const EDUCATIONS = [
  {
    id: 1,
    school: "business English 4A * CEFR B1+",
    education: "THE AMIDEAST/TUNISIA ENGLISH LANGUAGE PROGRAM, SOUSSE ,TUNISIA",
    descriptions: [
      "Mastered business English and honed professional communication",
      "Shared expertise with peers from diverse fields, fostering collaborative learning",
      "Excelled in presentations and enhanced my communication abilities",
      "Achieved a commendable grade of 94%",
    ],
    direction: "ltr",
    date: "Mar 2023 - May 2023",
  },
  {
    id: 2,
    school: "Bachelor’s degree in multimedia and web",
    education:
      "HIGHER INSTITUTE OF COMPUTER SCIENCE AND COMMUNICATION TECHNOLOGY, SOUSSE, TUNISIA",
    descriptions: [
      "Demonstrated academic excellence in Multimedia and Web Development, English, and Mathematics",
      "Cultivated effective communication skills and business acumen, discovering my life's ambition",
      "Graduated with honors, acknowledging my dedication and achievements",
    ],
    direction: "rtl",
    date: "Sept 2018 - July 2021",
  },
  {
    id: 3,
    school: "baccalaureate / High School end of study",
    education: "HIGH SCHOOL ATEF CHEIB, HAMMAMET, TUNISIA",
    descriptions: [
      "Bachelor's degree in Computer Science",
      "Graduated with honors, achieving a GPA of 12.32 out of 20",
    ],
    direction: "ltr",
    date: "Sept 2017 -July 2018",
  },
];
