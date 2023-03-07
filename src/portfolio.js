/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to true if you want to use the splash screen.
  useCustomCursor: true, // Change this to false if you want the good'ol cursor
  googleTrackingID: "UA-174238252-2",
};

//Home Page
const greeting = {
  title: "Hello 👋",
  title2: "Nathan Bouic",
  logo_name: "nathan.b()",
  nickname: "Nate",
  full_name: "Nathan Bouic",
  subTitle:
    "Engineering school student, Entrepreneur 🔥 Thirst for knowledge 💻",
  resumeLink:
    "https://docs.google.com/document/d/1MgSd9lwfSVDdAx3DXHm4LSH8QZzKqOZ9NwERYz7Q2cA/edit?usp=sharing",
  mail: "nathan.bouic@viacesi.fr",
};
const greetingFr = {
  title: "Bonjour 👋",
  title2: "Nathan Bouic",
  logo_name: "nathan.b()",
  nickname: "Nate",
  full_name: "Nathan Bouic",
  subTitle:
    "Étudiant ingénieur informatique, Entrepreneur 🔥 Toujours en train d'apprendre 💻",
  resumeLink:
    "https://docs.google.com/document/d/1m7dlZ_YdvL-hCf4OSaIP4Zw0K-1l1vQ6YjMAJsBvinI/edit?usp=sharing",
  mail: "nathan.bouic@viacesi.fr",
};

const socialMediaLinks = {
  /* Your Social Media Link */
  github: "https://github.com/nathanbo51",
  linkedin: "https://www.linkedin.com/in/nathan-bouic-942196230/",
  gmail: "nathan.bouic@viacesi.fr",
  gitlab: "https://gitlab.com/nathanbo51",
};

const skills = {
  data: [
    {
      title: "Managing and developing projects",
      titleFr: "Gestion et développement de projets",
      fileName: "FullStackImg",
      skills: [
        "⚡ Develop highly interactive web applications",
        "⚡ Can adapt to any technologies and programming languages",
        "⚡ Can adapt quickly to any type of work environment",
        "⚡ Can work effectively, both autonomously and in a team",
      ],
      skillsFr: [
        "⚡ Développe tous types d'applications Web hautements interactives",
        "⚡ Peux m'adapter à toutes technologies et langages de programmation",
        "⚡ Capable de m'adapter rapidement à tous types d'environnement de travail",
        "⚡ Travaille efficacement, autant en autonomie qu'en équipe",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#FFFFFF",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "PHP",
          fontAwesomeClassname: "simple-icons:php",
          style: {
            color: "#7377AD",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "simple-icons:python",
          style: {
            color: "#3776AB",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#439743",
          },
        },
        {
          skillName: "Talend",
          fontAwesomeClassname: "simple-icons:talend",
          style: {
            color: "#02569B",
          },
        },
        {
          skillName: "Symfony",
          fontAwesomeClassname: "simple-icons:symfony",
        },
        {
          skillName: "Express.js",
          fontAwesomeClassname: "simple-icons:express",
          style: {
            color: "#F2DE1D",
          },
        },
        {
          skillName: "phpMyAdmin",
          fontAwesomeClassname: "simple-icons:phpmyadmin",
          style: {
            color: "#F89C0E",
          },
        },
        {
          skillName: "MariaDB",
          fontAwesomeClassname: "simple-icons:mariadb",
          style: {
            color: "#29B0EE",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#4479A1",
          },
        },
        {
          skillName: "jQuery",
          fontAwesomeClassname: "simple-icons:jquery",
          style: {
            color: "#0865A6",
          },
        },
        {
          skillName: "Wordpress",
          fontAwesomeClassname: "simple-icons:wordpress",
          style: {
            color: "#207297",
          },
        },
        {
          skillName: "Apache",
          fontAwesomeClassname: "simple-icons:apache",
          style: {
            color: "#CA1A22",
          },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#E94E32",
          },
        },
        {
          skillName: "C",
          fontAwesomeClassname: "simple-icons:c",
          style: {
            color: "#E94E32",
          },
        },
        {
          skillName: "C++",
          fontAwesomeClassname: "simple-icons:cplusplus",
          style: {
            color: "#E94E32",
          },
        },
      ],
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "CESI Engineering School",
      titleFr: "CESI École d'ingénieurs",
      subtitle: "CTI-certified IT engineering degree",
      subtitleFr: "Diplôme d'ingénieur en informatique certifié CTI",
      logo_path: "cesi.png",
      alt_name: "CESI",
      duration: "2019 - Present",
      durationFr: "2019 - Présent",
      descriptions: [
        "⚡ I have implemented several projects based on what I've learnt under my Computer Engineering course. ",
        "⚡ I have studied core subjects like Data Structures, DBMS, Networking, Security, etc.",
        "⚡ I have also completed various online courses for Backend , Web , Mobile App Development, etc.",
      ],
      descriptionsFr: [
        "⚡ J'ai réalisé plusieurs projets basés sur ce que j'ai appris dans le cadre de ma formation d'ingénieur informatique.",
        "⚡ J'ai étudié des matières fondamentales comme les structures de données, les bases de données, le réseau, la sécurité, etc.",
        "⚡ J'ai également complété divers cours en ligne pour le développement Backend, Web, Mobile, etc.",
      ],
      website_link: "https://ecole-ingenieurs.cesi.fr",
    },
    {
      title: "Franklin Roosevelt high school",
      titleFr: "Lycée Franklin Roosevelt",
      subtitle:
        "Scientific baccalaureate degree in engineering sciences (SSI) with computer science and digital sciences option (ISN)",
      subtitleFr:
        "Baccalauréat scientifique spécialité sciences de l'ingénieur (SSI) option informatique et sciences du numérique (ISN)",
      logo_path: "roosevelt.jpg",
      alt_name: "Roosevelt",
      duration: "2016 - 2019",
      durationFr: "2016 - 2019",
      descriptions: [
        "⚡ I took general courses that allowed me to consolidate the idea that I wanted to live by working in computer science.",
        "⚡ I have studied general courses in different subjects like maths, physics, mecanic, etc.",
        "⚡ I obtained a general and scientific diploma.",
      ],
      descriptionsFr: [
        "⚡ J'ai suivi des cours généraux qui m'ont permis de consolider l'idée que je voulais vivre en travaillant dans l'informatique.",
        "⚡ J'ai étudié des cours généraux dans différents domaines comme les maths, la physique, la mécanique, etc.",
        "⚡ J'ai obtenu un diplôme général et scientifique.",
      ],
      website_link: "https://lycee-roosevelt-reims.fr",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Multiple online training",
      titleFr: "Multiples formations en ligne",
      subtitle: "OpenClassrooms & École du Web",
      logo_path: "ocr_edw.png",
      certificate_link: "",
      alt_name: "OpenClassrooms & École du Web",
      color_code: "#7D47F4",
    },
    {
      title: "CCNA 200-301 (ITN)",
      titleFr: "CCNA 200-301 (ITN)",
      subtitle: "Cisco Networking Academy",
      logo_path: "cisco.png",
      certificate_link:
        "https://www.credly.com/badges/7e0078e4-965c-4adf-ada2-8fa60c53fc2b/public_url",
      alt_name: "Cisco Networking Academy",
      color_code: "#00A0DA",
    },
    {
      title: "Test of English for International Communication",
      titleFr: "Test of English for International Communication",
      subtitle: "ETS Global",
      logo_path: "toeic_logo.png",
      certificate_link:
        "https://www.etsglobal.org/fr/en/digital-score-report/9CF1003DD15524E2C5FE320171DDE08F2C1DF602F3A67171DF952E3A57A1E6FCQUUrcDFNMXg2WVhXQVpQNUhiY25ndHhWZ2RETXptdUZlMms3dlFlTjZoM3N1WFVJ",
      alt_name: "ETS Global",
      color_code: "#FFF",
    },
    // color_code: "#8C151599",
    // color_code: "#7A7A7A",
    // color_code: "#0C9D5899",
    // color_code: "#C5E2EE",
    // color_code: "#ffc475",
    // color_code: "#g",
    // color_code: "#ffbfae",
    // color_code: "#fffbf3",
    // color_code: "#b190b0",
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  titleFr: "Expériences",
  subtitle: "Work, Internship and Entrepreneurship",
  subtitleFr: "Travail, Stage et Entrepreneuriat",
  description:
    "I've completed three internships and created my self-employed company. I've mostly done projects with school and internships, and I am actively looking for new subjects to work on. I love to share knowledge as well as I love to recieve from others.",
  descriptionFr:
    "J'ai effectué trois stages et créé mon auto-entreprise. J'ai principalement réalisé des projets dans le cadre de mes études et de mes stages, et je suis à la recherche active de nouveaux sujets sur lesquels travailler. J'aime partager mes connaissances autant que j'aime recevoir des autres.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Internships",
      titleFr: "Stages",
      experiences: [
        {
          title: "Web Developer (Intern)",
          titleFr: "Développeur Web (Stage)",
          company: "DAVID Systems GmbH",
          company_url: "https://www.davidsystems.com",
          logo_path: "david.png",
          duration: "Oct 2022 - Feb 2023",
          durationFr: "Oct 2022 - Fév 2023",
          location: "Munich, Germany",
          locationFr: "Munich, Allemagne",
          description: `I worked in a team of 5 font-end and back-end developers on a new web application for broadcasters, goaling to be a scalable distributed audio processing system.`,
          descriptionFr: `J'ai travaillé dans une équipe de 5 développeurs front-end et back-end sur le développement d'une nouvelle application web pour les radiodiffuseurs, visant à être un système de traitement audio distribué et évolutif.`,
          // "I worked on the Dashboard project which helps users track their activities while using Walo Application. I also worked on Ocean Inventory Application and it's Admin panel Backend as well as on Ocean Inventory Admin Front-end using React and also worked on Walo Admin Backend.",
          color: "#0071C5",
        },
        {
          title: "Full Stack Developer (Intern)",
          titleFr: "Développeur Full Stack (Stage)",
          company: "A2A l'Alternative de l'ascenseur",
          company_url: "https://www.a2a-ascenseurs.fr",
          logo_path: "a2a.jpg",
          duration: "Jan 2022 - Apr 2022",
          durationFr: "Jan 2022 - Avr 2022",
          location: "Bezannes, France",
          locationFr: "Bezannes, France",
          description: `I created an application allowing all employees to complete forms to assure their superiors that their work has been done, or that loaned equipment has been returned in good condition.`,
          descriptionFr: `J'ai créé une application permettant à tous les employés de remplir des formulaires pour assurer à leurs supérieurs que leur travail a été effectué, ou que l'équipement prêté a été retourné en bon état.`,
          // "I worked on the Dashboard project which helps users track their activities while using Walo Application. I also worked on Ocean Inventory Application and it's Admin panel Backend as well as on Ocean Inventory Admin Front-end using React and also worked on Walo Admin Backend.",
          color: "#0071C5",
        },
        {
          title: "Full Stack Developer (Intern)",
          titleFr: "Développeur Full Stack (Stage)",
          company: "Enedis",
          company_url: "https://www.enedis.fr",
          logo_path: "enedis.jpg",
          duration: "Apr 2021 - Jul 2021",
          durationFr: "Avr 2021 - Juil 2021",
          location: "Reims, France",
          locationFr: "Reims, France",
          description: `I created an application allowing executive employees to distribute the workforce according to the amount of work to be done in the different departments in which the company is present.`,
          descriptionFr: `J'ai créé une application permettant aux employés exécutifs de répartir le personnel en fonction de la quantité de travail à effectuer dans les différents départements dans lesquels la société est présente.`,
          // "Created Front end of Yearn Financial Mutual Funds website. also degined simple web application for better user experience, designed DB Schemas as well.",
          color: "#92C80E",
        },
      ],
    },
    {
      title: "Entrepreneurship",
      titleFr: "Entrepreneuriat",
      experiences: [
        {
          title: "Self entrepreneurship",
          titleFr: "Auto-entreprise",
          company: "METACODE",
          company_url: "https://www.linkedin.com/company/80505381",
          logo_path: "METACODE.png",
          duration: "Mar 2022 - Present",
          durationFr: "Mar 2022 - Présent",
          location: "Work From Home",
          locationFr: "Travail durant mon temps libre",
          description:
            "I created a self-employed company in order to gain skills in addition to my training in engineering school by being a service provider for large companies, thus allowing me to work more in different fields",
          descriptionFr: `J'ai créé une auto-entreprise afin de développer des compétences en plus de ma formation en école d'ingénieur, en tant que prestataire de services pour de grandes entreprises, ce qui me permet d'execer davantage dans différents domaines`,
          color: "#4285F4",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  titleFr: "Projets",
  description:
    "My projects make use of a vast variety of technology tools in many different fields. My best experience is to create Web Applications in Javascript with Express.js as back-end and React.js as front-end, but I really like to diversify to discover new subjects. Below are some of my projects.",
  descriptionFr: `Mes projets utilisent une grande variété d'outils technologiques dans de nombreux domaines différents. Mon plus haut niveau d'expertise est de créer des applications Web en Javascript avec Express.js en back-end et React.js en front-end, mais j'aime beaucoup me diversifier pour découvrir de nouveaux sujets. Ci-dessous figurent quelques-uns de mes projets.`,
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    titleFr: "Contactez-moi",
    profile_image_path: "nathanbouic.png",
    description:
      "You can contact me at the places mentioned below. I will try to get back to you as fast as I can. ",
    descriptionFr: `Vous pouvez me contacter aux endroits mentionnés ci-dessous. Je ferai de mon mieux pour revenir vers vous le plus rapidement possible.`,
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I don't blog frequently but when I do something awesome, I do try to document it so it can be helpful to others. I write on LinkedIn.",
    subtitleFr:
      "Je ne blogue pas fréquemment, mais lorsque je fais quelque chose, j'essaie de le documenter afin qu'il puisse être utile aux autres. J'écris sur LinkedIn.",
    link: "https://www.linkedin.com/in/nathan-bouic-942196230/",
    avatar_image_path: "blogs_image.svg",
  },
};

const projects = {
  data: [
    {
      id: "0",
      name: "GeoBo",
      nameFr: "GeoBo",
      img: "geobo.png",
      alt_name: "GeoBo screenshots",
      url: "",
      description:
        "This Web Application allowed users to distribute the technicians in different centers according to the hours of work to be done there.",
      descriptionFr: `Cette application Web permettait aux utilisateurs de répartir les techniciens dans différents centres en fonction des heures de travail à y effectuer.`,
      languages: [
        {
          name: "Symfony",
          iconifyClass: "logos-symfony",
        },
        {
          name: "CSS",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "Twig",
          iconifyClass: "vscode-icons:file-type-twig",
        },
        {
          name: "JQuery",
          iconifyClass: "logos-jquery",
        },
      ],
    },
    {
      id: "1",
      name: "AUDITOPS",
      nameFr: "AUDITOPS",
      img: "auditops.png",
      alt_name: "AuditOps screenshots",
      description:
        "A Mobile Fisrt Web Application that allows the employees to perform inspections and assessments to replace the paper format.",
      descriptionFr: `Une application Web Mobile First qui permet aux employés d'effectuer des inspections et des évaluations pour remplacer le format papier.`,
      languages: [
        {
          name: "PHP",
          iconifyClass: "vscode-icons:file-type-php",
        },
        {
          name: "JavaScript",
          iconifyClass: "vscode-icons:file-type-js",
        },
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
      ],
    },
    {
      id: "2",
      name: "CAD Projects",
      nameFr: "Projets CAO",
      img: "cad.png",
      alt_name: "CAD projects examples",
      description:
        "I used to work with CAD softwares like Fusion 360 to create a bunch of 3D printable objects and Revit in a school construction industry project.",
      descriptionFr: `J'ai travaillé avec des logiciels de CAO comme Fusion 360 pour créer une série d'objets imprimables en 3D et Revit dans un projet d'industrie de la construction scolaire.`,
      languages: [
        {
          name: "AutoCAD",
          color: "#D2302E",
          iconifyClass: "simple-icons:autodesk",
        },
        {
          name: "Fusion 360",
          color: "#FF9B43",
          iconifyClass: "fa6-solid:f",
        },
        {
          name: "Revit",
          color: "#326EBA",
          iconifyClass: "fa6-solid:r",
        },
        {
          name: "Computer-Aide Design",
          color: "#4F8E3C",
          iconifyClass: "carbon:cad",
        },
      ],
    },
    {
      id: "3",
      name: "Assembly of a 3D printer",
      nameFr: "Montage d'une imprimante 3D",
      img: "3dprinter.png",
      alt_name: "3D printer photo",
      description:
        "I was lucky enough to be able to afford a 3D printer and to be able to assemble it myself with the aim of being able to carry out many projects.",
      descriptionFr: `J'ai eu la chance d'être en mesure d'acheter une imprimante 3D et de pouvoir la monter moi-même dans le but de pouvoir mener de nombreux projets.`,
      languages: [
        {
          name: "Prusa",
          color: "#FFF",
          iconifyClass: "mdi:printer-3d-nozzle",
        },
        {
          name: "PrusaSlicer",
          color: "#EC6C21",
          iconifyClass: "iconoir:3d-select-face",
        },
      ],
    },
    {
      id: "4",
      name: "Packet tracer project",
      nameFr: "Projet Packet tracer",
      img: "packettracer.png",
      alt_name: "network illustration",
      description:
        "I carried out a network project on packet tracer as part of my engineering training. The objective was to configure the merger of two business networks.",
      descriptionFr: `J'ai réalisé un projet réseau sur packet tracer dans le cadre de ma formation d'ingénieur. L'objectif était de configurer la fusion de deux réseaux d'entreprise.`,
      languages: [
        {
          name: "Cisco",
          color: "#C41130",
          iconifyClass: "simple-icons:cisco",
        },
        {
          name: "Packet Tracer",
          color: "#c2d1d6",
          iconifyClass: "clarity:network-switch-line",
        },
        {
          name: "CCNA 1 Introduction to Network (ITN)",
          color: "#005568",
          iconifyClass: "clarity:network-globe-line",
        },
      ],
    },
    {
      id: "5",
      name: "Big Data Project",
      nameFr: "Projet Big Data",
      img: "bigdata.png",
      alt_name: "network illustration",
      description:
        "As part of my engineering training, I had to set up an ETL in order to make the data provided by a university hospital usable and studyable.",
      descriptionFr: `Dans le cadre de ma formation d'ingénieur, j'ai dû mettre en place un ETL afin de rendre les données fournies par un hôpital universitaire utilisables et étudiables.`,
      languages: [
        {
          name: "Talend",
          color: "#02569B",
          iconifyClass: "simple-icons:talend",
        },
        {
          name: "Power BI",
          iconifyClass: "logos:microsoft-power-bi",
        },
        {
          name: "Hive",
          color: "#FBED20",
          iconifyClass: "ic:twotone-hive",
        },
        {
          name: "Cloudera",
          color: "#02569B",
          iconifyClass: "simple-icons:cloudera",
        },
        {
          name: "Hadoop",
          iconifyClass: "logos:hadoop",
        },
      ],
    },
    {
      id: "6",
      name: "StageHub",
      nameFr: "StageHub",
      img: "stageehub.png",
      alt_name: "stagehub illustartion",
      description:
        "The aim of this project was to make the search for an internship accessible to all students through available offers by listing them according to search criteria.",
      descriptionFr: `L'objectif de ce projet était de rendre la recherche d'un stage accessible à tous les étudiants à travers des offres disponibles en les listant selon des critères de recherche.`,
      languages: [
        {
          name: "PWA",
          color: "#5A0FC8",
          iconifyClass: "simple-icons:pwa",
        },
        {
          name: "Twig",
          iconifyClass: "vscode-icons:file-type-twig",
        },
        {
          name: "PHP",
          iconifyClass: "vscode-icons:file-type-php",
        },
        {
          name: "JavaScript",
          iconifyClass: "vscode-icons:file-type-js",
        },
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS",
          iconifyClass: "vscode-icons:file-type-css",
        },
      ],
    },
    {
      id: "7",
      name: "EasySave",
      nameFr: "EasySave",
      img: "easysave.png",
      alt_name: "easysave illustration",
      description:
        "I realized a desktop application allowing the user to make backups of folders and files, in a complete or differential way.",
      descriptionFr: `J'ai réalisé une application de bureau permettant à l'utilisateur de réaliser des sauvegardes de dossiers et de fichiers, de manière complète ou différentielle.`,
      languages: [
        {
          name: "C#",
          color: "#02569B",
          iconifyClass: "vscode-icons:file-type-csharp2",
        },
        {
          name: ".net",
          color: "#fff",
          iconifyClass: "cib:dot-net",
        },
      ],
    },
  ],
};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
  projects,
  greetingFr,
};
