export const Email = "amine.beji001@gmail.com";
export const Links = {
  github: "https://github.com/aminebeji/portfolio",
  linkedIn: "https://www.linkedin.com/in/amine-beji-0542501b5/",
  instagram: "https://www.instagram.com/amine.beji001/",
  facebook: "",
  stackoverFlow: "",
};

export const Experience = [
  {
    company: "Cookie Jar Tech",
    date: "August 2021 - Present",
    discription: [
      "Full Stack Web Developer proficient in React.js and Next.js for creative projects, with expertise in bringing them to life using GoLang and Node.js.",
      "Project Leader with a proven track record of managing teams to successfully deliver projects with highly scalable and performant code.",
      "Experienced in maintaining projects in production environments using Docker and GitLab, with the final goal of deployment on Kubernetes (K8S).",
    ],
    link: "https://cookiejartech.lt/",
    tag: "cookie-jar-tech",
    post: "Full Stack Developer and Technical Team Leader",
  },
  {
    company: "Sastec Group",
    date: "August 2021 - August  2022",
    discription: [
      "Full Stack Web Developer proficient in React.js and Next.js for creative projects, with expertise in bringing them to life using GoLang and Node.js.",
      "Project Leader with a proven track record of managing teams to successfully deliver projects with highly scalable and performant code.",
      "Experienced in maintaining projects in production environments using Docker and GitLab, with the final goal of deployment on Kubernetes (K8S).",
    ],
    link: "https://www.sastec-group.com/",
    tag: "sastec-group",
    post: "Full Stack Developer and Team Leader",
  },
  {
    company: "SastecSkills",
    date: "Juin 2022 - September 2022",
    discription: [
      "Successfully lunched and finished MERN stack BOOTCAMP with sastecSkills.",
      "Forward my skills to other students and help them creating a realtime project using Methodology Scrum.",
    ],
    link: "https://www.linkedin.com/company/sastecskills/",
    tag: "sastecskills",
    post: "JavaScript Instructor",
  },
  {
    company: "DOT-IT",
    date: "February 2021 - Juin 2021",
    discription: [
      "Developed a comprehensive web application using Node.js and React.js, akin to freelancing platforms such as Fiverr and Upwork. Managed the entire project lifecycle, from conception and design to task composition, testing, and release.",
      "Acquired proficiency in Docker and Kubernetes (K8s), effectively deploying and overseeing applications using Minikube for local development.",
    ],
    link: "http://www.dotit-corp.com/",
    tag: "dot-it",
    post: "Internship Full Stack Developer",
  },
  {
    company: "Digital Solution",
    date: "Augest 2020 - Augest 2020",
    discription: [
      "Summer Internship in Front-end developement .",
      "Designed and developed websites for clients using HTML5, CSS3, and JavaScript to enhance visual appeal and functionality.",
    ],
    tag: "digital-solution",
    post: "Internship Front-End Developer",
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
