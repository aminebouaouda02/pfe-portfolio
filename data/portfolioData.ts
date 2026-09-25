export type Locale = "en" | "fr";

export interface Project {
  id: string;
  title: string;
  category: "all" | "fullstack" | "systems" | "data" | "iot";
  summary: string;
  description: string;
  tags: string[];
  featured: boolean;
  demoUrl?: string;
  githubUrl?: string;
  image?: string;
  highlights: string[];
  challenge?: string;
}

export interface SkillCategory {
  title: string;
  iconName: string;
  skills: { name: string; level: number; icon?: string }[];
}

export interface TimelineItem {
  id: string;
  year: string;
  role: string;
  organization: string;
  location: string;
  description: string;
  skills: string[];
  type: "work" | "education";
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  skills: string[];
}

export interface NowItem {
  name: string;
  tag: string;
}

export interface NowData {
  badge: string;
  title: string;
  titleAccent: string;
  subtitle: string;
  focusTitle: string;
  focusDesc: string;
  exploringTitle: string;
  exploringItems: NowItem[];
  readingTitle: string;
  readingBook: string;
  beyondTitle: string;
  beyondItems: string[];
  coffeeTeaNote: string;
}

export interface PortfolioData {
  personal: {
    name: string;
    handle: string;
    role: string;
    statusBadge: string;
    location: string;
    email: string;
    github: string;
    linkedin: string;
    bio: string;
    resumeUrl: string;
    taglineGreeting: string;
    avatar: string;
    statusActivity: string;
    motto: string;
  };
  now: NowData;
  stats: { label: string; value: string; sub?: string }[];
  skillCategories: SkillCategory[];
  projects: Project[];
  timeline: TimelineItem[];
  certifications: Certification[];
  ui: {
    nav: {
      about: string;
      now: string;
      projects: string;
      skills: string;
      certifications: string;
      timeline: string;
      contact: string;
      connect: string;
    };
    hero: {
      greeting: string;
      exploreProjects: string;
      downloadCv: string;
      getInTouch: string;
      followMe: string;
      codeFocus: string;
      codeMission: string;
      headlinePrefix: string;
      headlineAccent: string;
      badgeDistributed: string;
      badgeML: string;
      badgeIoT: string;
      badgeFullstack: string;
      runCliBtn: string;
      liveClockCity: string;
      viewNowBtn: string;
    };
    projects: {
      tag: string;
      title: string;
      titleAccent: string;
      subtitle: string;
      filterAll: string;
      filterData: string;
      filterIot: string;
      filterSystems: string;
      filterFullstack: string;
      featuredBadge: string;
      caseStudyBtn: string;
      liveDemoBtn: string;
      sourceCodeBtn: string;
      keyHighlights: string;
      techArchitecture: string;
      challengeTitle: string;
    };
    skills: {
      tag: string;
      title: string;
      titleAccent: string;
      subtitle: string;
      coreCount: string;
    };
    certifications: {
      tag: string;
      title: string;
      titleAccent: string;
      subtitle: string;
    };
    timeline: {
      tag: string;
      title: string;
      titleAccent: string;
      subtitle: string;
    };
    contact: {
      tag: string;
      title: string;
      titleAccent: string;
      subtitle: string;
      directContactTitle: string;
      directContactDesc: string;
      viewRepos: string;
      connectLinkedin: string;
      copyBtn: string;
      copiedBtn: string;
      sendMessageTitle: string;
      sendMessageDesc: string;
      nameLabel: string;
      emailLabel: string;
      messageLabel: string;
      namePlaceholder: string;
      emailPlaceholder: string;
      messagePlaceholder: string;
      submitBtn: string;
      submittingBtn: string;
      submittedBtn: string;
    };
    terminal: {
      welcomeTitle: string;
      welcomeSubtitle: string;
      commandsTitle: string;
      cmdAbout: string;
      cmdEnsam: string;
      cmdSkills: string;
      cmdProjects: string;
      cmdHadoop: string;
      cmdContact: string;
      cmdClear: string;
      cmdExit: string;
      matrixTitle: string;
      featuredTitle: string;
      cmdNotFound: string;
      inputPlaceholder: string;
      ensamSpecialization: string;
    };
    footer: {
      rights: string;
      tagline: string;
      backToTop: string;
    };
  };
}

export const portfolioData: Record<Locale, PortfolioData> = {
  en: {
    personal: {
      name: "Amine Bouaouda",
      handle: "@aminebouaouda02",
      role: "Aspiring AI Engineer | Master's in Big Data & IoT @ ENSAM Casablanca",
      statusBadge: "Master's @ ENSAM Casablanca • Open to AI & Big Data Roles",
      location: "Casablanca, Morocco",
      email: "amine.bouaouda02@gmail.com",
      github: "https://github.com/aminebouaouda02",
      linkedin: "https://www.linkedin.com/in/amine-bouaouda-071503278/",
      bio: "Master's student in Big Data & Internet of Things (BDIoT) at ENSAM Casablanca and aspiring AI Engineer. My engineering journey started with tinkering on microcontrollers and grew into architecting distributed multi-node Big Data clusters (Hadoop, Spark, Kafka), machine learning pipelines, and embedded IoT systems.",
      resumeUrl: "/cv-amine-bouaouda.pdf",
      taglineGreeting: "Salam! I'm",
      avatar: "/avatar.jpg",
      statusActivity: "Usually coding, tuning Kafka streams, or brewing Moroccan mint tea",
      motto: "Simplicity in design, resilience at distributed scale.",
    },

    now: {
      badge: "Life & Momentum",
      title: "What I'm Doing",
      titleAccent: "Right Now",
      subtitle: "A living snapshot of what I'm learning, building, and exploring beyond deadlines.",
      focusTitle: "Master's Thesis & Distributed Stream Processing",
      focusDesc: "Deep diving into Spark Structured Streaming, Kafka partitioning, and distributed storage redundancy at ENSAM Casablanca.",
      exploringTitle: "Curiosity Radar",
      exploringItems: [
        { name: "Apache Iceberg", tag: "Data Lakehouse" },
        { name: "Rust for Systems", tag: "Memory Safety & Speed" },
        { name: "Autonomous LLM Agents", tag: "Applied AI" },
        { name: "ClickHouse", tag: "Real-time OLAP" },
      ],
      readingTitle: "On My Desk",
      readingBook: "Designing Data-Intensive Applications by Martin Kleppmann",
      beyondTitle: "Beyond The Screen",
      beyondItems: [
        "Hardware tinkering with ESP32 & Arduino sensors",
        "Chess tactics & strategic puzzles",
        "Moroccan mint tea rituals & late-night brainstorming",
        "Exploring open-source distributed frameworks",
      ],
      coffeeTeaNote: "Currently based in Casablanca, Morocco (UTC+1). Always happy to talk tech over tea.",
    },

    stats: [
      { value: "ENSAM", label: "Master BDIoT", sub: "Top engineering school in Morocco" },
      { value: "4-Node", label: "Hadoop Cluster", sub: "Orchestrated with Docker & HDFS" },
      { value: "PFE", label: "Enterprise Software", sub: "Flutter & Laravel shipped for GM-Soft" },
      { value: "100%", label: "Curiosity & Drive", sub: "Fueled by late-night tea & debugging" },
    ],

    skillCategories: [
      {
        title: "Big Data & Data Engineering",
        iconName: "Database",
        skills: [
          { name: "Hadoop (HDFS, YARN)", level: 90 },
          { name: "Apache Spark & Kafka", level: 85 },
          { name: "NoSQL & PostgreSQL / MySQL", level: 88 },
          { name: "Data Ingestion & Pipelines", level: 86 },
          { name: "Distributed Storage & Analytics", level: 88 },
        ],
      },
      {
        title: "AI, Machine Learning & Scripts",
        iconName: "Terminal",
        skills: [
          { name: "Python (Data Analysis & ML)", level: 92 },
          { name: "MLOps & Pipeline Automation", level: 82 },
          { name: "n8n Workflow Automation", level: 88 },
          { name: "Model Integration & APIs", level: 85 },
          { name: "Algorithms & Data Structures", level: 90 },
        ],
      },
      {
        title: "Core Languages & Frameworks",
        iconName: "Layout",
        skills: [
          { name: "Java & Spring Boot", level: 88 },
          { name: "Flutter & Dart", level: 90 },
          { name: "PHP & Laravel", level: 88 },
          { name: "C & C++", level: 85 },
          { name: "JavaScript & HTML/CSS", level: 86 },
        ],
      },
      {
        title: "Infrastructure, IoT & Cloud",
        iconName: "Server",
        skills: [
          { name: "Docker Containerization", level: 90 },
          { name: "Linux & Shell Scripting", level: 92 },
          { name: "Arduino Uno & IoT Sensors", level: 88 },
          { name: "Git & GitHub CI/CD", level: 92 },
          { name: "AWS Cloud Fundamentals", level: 78 },
        ],
      },
    ],

    projects: [
      {
        id: "hadoop-distributed-cluster",
        title: "Big Data Distributed Architecture",
        category: "data",
        featured: true,
        summary: "Virtualized multi-node Hadoop ecosystem utilizing HDFS, YARN, and Docker containers.",
        description:
          "Designed and deployed a virtualized distributed Hadoop cluster within multi-container Docker environments at ENSAM Casablanca. Implemented HDFS distributed file system redundancy, configured YARN for distributed compute orchestration, and optimized big data job scheduling.",
        tags: ["Hadoop", "HDFS", "YARN", "Docker", "Linux", "Big Data", "Distributed Systems"],
        demoUrl: "https://github.com/aminebouaouda02",
        githubUrl: "https://github.com/aminebouaouda02",
        highlights: [
          "Multi-node virtualized Hadoop cluster orchestrating HDFS & YARN",
          "Configured master/worker node topology with Docker containers",
          "Optimized resource scheduling and distributed data partition processing",
          "Robust containerized infrastructure managed via automated scripts",
        ],
        challenge:
          "Configuring reliable inter-container bridge networking so that HDFS NameNode and YARN ResourceManager maintained persistent heartbeats with worker DataNodes without IP collisions or split-brain states.",
      },
      {
        id: "greenhouse-irrigation-iot",
        title: "Automated Greenhouse Irrigation System",
        category: "iot",
        featured: true,
        summary: "Solar-ready, autonomous regulated greenhouse irrigation system powered by Arduino and IoT sensors.",
        description:
          "Built a complete intelligent, solar-ready greenhouse irrigation and monitoring system. Leveraged an Arduino Uno microcontroller, soil moisture sensors, and PIR motion detectors to automatically regulate water distribution based on soil needs and secure the perimeter.",
        tags: ["IoT", "Arduino Uno", "Embedded C++", "Sensors", "Solar Power", "Hardware Automation"],
        demoUrl: "https://github.com/aminebouaouda02",
        githubUrl: "https://github.com/aminebouaouda02",
        highlights: [
          "Real-time soil moisture monitoring with autonomous relay pump triggers",
          "PIR motion surveillance integration for intruder/wildlife detection",
          "Designed for solar-energy harvesting and low-power operation",
          "Tested in agricultural greenhouse conditions for optimal water conservation",
        ],
        challenge:
          "Calibrating analog soil moisture readings under extreme daytime heat variations in a real greenhouse, while architecting an ultra-low power sleep/wake relay cycle to prevent draining the solar battery bank.",
      },
      {
        id: "hr-mobile-app",
        title: "HR Mobile Management Platform (PFE)",
        category: "fullstack",
        featured: true,
        summary: "Cross-platform enterprise HR management mobile application with Flutter and Laravel REST API.",
        description:
          "End-of-Studies (PFE) project engineered for GM-Soft IT Solutions. Designed and developed a comprehensive mobile application for human resources management, featuring role-based permission control, leave request workflows, attendance tracking, and JWT-authenticated Laravel backend.",
        tags: ["Flutter", "Dart", "Laravel", "PHP", "MySQL", "REST API", "JWT Auth"],
        demoUrl: "https://github.com/aminebouaouda02",
        githubUrl: "https://github.com/aminebouaouda02",
        highlights: [
          "Cross-platform mobile UI built with Flutter & Dart for iOS and Android",
          "Secure REST API backend built with Laravel, MySQL, and JWT authentication",
          "Role-based access control (Admin, Manager, Employee)",
          "Comprehensive database modeling and relational integrity",
        ],
        challenge:
          "Translating complex multi-tier Moroccan labor leave calculation rules into clean reactive state in Flutter, backed by atomic database transactions on Laravel to eliminate race conditions.",
      },
      {
        id: "industrial-simulation",
        title: "Simulation Ligne Industrielle",
        category: "systems",
        featured: true,
        summary: "Interactive real-time industrial production line simulator with state machines, physics, and audio cues.",
        description:
          "Comprehensive browser-based simulation of an automated industrial production line. Features real-time state machines, sensor triggers, conveyor logic, error diagnostics, and synthesized audio feedback for industrial monitoring.",
        tags: ["JavaScript ES6+", "HTML5 Canvas", "State Machines", "Audio API", "Industrial Automation"],
        demoUrl: "/simulation-ligne-industrielle/index.html",
        githubUrl: "https://github.com/aminebouaouda02",
        highlights: [
          "Real-time event loop & conveyor physics simulation",
          "Configurable sensor trigger points & station diagnostics",
          "Synthesized industrial audio notifications & voice cues",
          "Lightweight zero-dependency architecture for instantaneous response",
        ],
        challenge:
          "Building a deterministic 60 FPS conveyor physics engine from scratch in pure vanilla JavaScript and Web Audio API without heavy game libraries, ensuring flawless sensor sync.",
      },
      {
        id: "n8n-automation-hub",
        title: "Intelligent Workflow Automation Hub",
        category: "data",
        featured: false,
        summary: "Automated event-driven data pipelines and webhook orchestration using n8n and Python.",
        description:
          "Engineered automated workflows connecting disparate services, database syncing, and alert notifications through n8n visual automation and custom Python scripting.",
        tags: ["n8n", "Python", "Webhooks", "API Integration", "Automation", "Data Pipelines"],
        demoUrl: "https://github.com/aminebouaouda02",
        githubUrl: "https://github.com/aminebouaouda02",
        highlights: [
          "Event-driven webhook listeners for automated trigger execution",
          "Custom Python script nodes for structured data manipulation",
          "Automated notification pipelines to chat and email endpoints",
        ],
        challenge:
          "Designing idempotent webhook listeners and graceful retry backoffs to prevent duplicate database writes whenever external third-party services experienced network hiccups.",
      },
    ],

    timeline: [
      {
        id: "edu-ensam",
        year: "Sept 2025 — Present (Exp. 2027)",
        role: "Master's Degree in Big Data & Internet of Things (BDIoT)",
        organization: "ENSAM Casablanca",
        location: "Casablanca, Morocco",
        description:
          "Advanced graduate curriculum focusing on distributed computing architectures, Big Data ecosystems (Hadoop, Spark, Kafka), Machine Learning, Cloud architectures, and embedded IoT systems.",
        skills: ["Big Data", "Hadoop", "Spark", "IoT", "Machine Learning", "Docker", "Cloud"],
        type: "education",
      },
      {
        id: "edu-licence",
        year: "2024 — 2025",
        role: "Licence Professionnelle in Big Data, Infrastructure et Analyse",
        organization: "EST Fquih Ben Salah",
        location: "Fquih Ben Salah, Morocco",
        description:
          "Specialized in big data storage infrastructure, distributed databases, NoSQL, data analytics pipelines, and server virtualization.",
        skills: ["Big Data", "NoSQL", "Python", "Data Analysis", "Linux", "Virtualization"],
        type: "education",
      },
      {
        id: "exp-gmsoft",
        year: "Apr 2024 — June 2024",
        role: "Stage PFE (End-of-Studies Internship)",
        organization: "GM-Soft IT Solutions Consulting",
        location: "Beni Mellal, Morocco",
        description:
          "Developed a complete mobile HR management application using Flutter (frontend) and Laravel (REST API backend), handling user authentication, role management, and database design.",
        skills: ["Flutter", "Dart", "Laravel", "PHP", "MySQL", "REST API", "Git"],
        type: "work",
      },
      {
        id: "edu-dut",
        year: "2022 — 2024",
        role: "DUT in Génie Informatique",
        organization: "EST Beni Mellal",
        location: "Beni Mellal, Morocco",
        description:
          "Comprehensive foundations in computer science, software engineering, algorithms, object-oriented programming (Java, C, C++), database systems, and networking.",
        skills: ["Java", "C/C++", "SQL", "Software Engineering", "Algorithms", "Web Dev"],
        type: "education",
      },
      {
        id: "exp-us2i",
        year: "Aug 2023 — Sept 2023",
        role: "Stage Technique (Technical Internship)",
        organization: "US2I",
        location: "Beni Mellal, Morocco",
        description:
          "Provided user assistance, first-level technical support, hardware/software troubleshooting, and network setup.",
        skills: ["Technical Support", "Networking", "System Maintenance", "Troubleshooting"],
        type: "work",
      },
      {
        id: "edu-bac",
        year: "2021",
        role: "Baccalauréat in Sciences Physiques",
        organization: "Lycée Bir Anzarane",
        location: "Fquih Ben Salah, Morocco",
        description:
          "Scientific baccalaureate with specialization in Physics and Mathematics, building strong analytical and problem-solving fundamentals.",
        skills: ["Mathematics", "Physics", "Scientific Methodology", "Problem Solving"],
        type: "education",
      },
    ],

    certifications: [
      {
        id: "cert-ensam-bigdata",
        title: "Master's Specialization: Big Data Computing & Architectures",
        issuer: "ENSAM Casablanca",
        date: "2025 — 2026",
        skills: ["Hadoop Cluster", "Apache Spark", "HDFS", "YARN", "Docker"],
      },
      {
        id: "cert-ml-pipelines",
        title: "Machine Learning & End-to-End Data Pipelines",
        issuer: "Data Engineering Curriculum",
        date: "2024 — 2025",
        skills: ["Python", "Scikit-Learn", "ETL", "NoSQL", "Data Pipelines"],
      },
      {
        id: "cert-pfe-flutter",
        title: "Enterprise Mobile Architecture (PFE)",
        issuer: "GM-Soft IT Solutions Consulting",
        date: "2024",
        skills: ["Flutter", "Dart", "Laravel API", "Database Design", "JWT"],
      },
      {
        id: "cert-iot-systems",
        title: "Embedded Hardware & Sensor Systems Design",
        issuer: "Automation & Microcontroller Lab",
        date: "2024 — 2025",
        skills: ["Arduino Uno", "Embedded C++", "Relay Actuation", "PIR Sensors"],
      },
    ],

    ui: {
      nav: {
        about: "About",
        now: "Now",
        projects: "Projects",
        skills: "Skills",
        certifications: "Certifications",
        timeline: "Timeline",
        contact: "Contact",
        connect: "Let's Connect",
      },
      hero: {
        greeting: "Hi, I'm",
        exploreProjects: "Explore Projects",
        downloadCv: "Download CV",
        getInTouch: "Get In Touch",
        followMe: "Follow me:",
        codeFocus: "AI & ML, Big Data & IoT",
        codeMission: "Scalable distributed intelligence",
        headlinePrefix: "Engineering Big Data, AI &",
        headlineAccent: "Intelligent IoT Systems",
        badgeDistributed: "Distributed Systems",
        badgeML: "Machine Learning",
        badgeIoT: "IoT Automation",
        badgeFullstack: "Full-Stack Architecture",
        runCliBtn: "Run CLI >_",
        liveClockCity: "Casablanca, Morocco 🇲🇦",
        viewNowBtn: "What I'm Doing Now",
      },
      projects: {
        tag: "Featured Portfolio",
        title: "Engineering",
        titleAccent: "Showcase",
        subtitle:
          "A selection of production systems, real-time digital simulations, and distributed architecture projects.",
        filterAll: "All Projects",
        filterData: "Big Data & ML",
        filterIot: "IoT & Embedded",
        filterSystems: "Systems & Simulation",
        filterFullstack: "Full-Stack Web",
        featuredBadge: "Featured",
        caseStudyBtn: "Case Study",
        liveDemoBtn: "Live Demo",
        sourceCodeBtn: "Source Code",
        keyHighlights: "Key Technical Highlights",
        techArchitecture: "Technologies & Architecture",
        challengeTitle: "Behind the Build: Key Engineering Challenge",
      },
      skills: {
        tag: "Technical Competencies",
        title: "Skills &",
        titleAccent: "Technologies",
        subtitle:
          "A comprehensive overview of my toolchain across Big Data ecosystems, AI & Machine Learning, and embedded IoT architectures.",
        coreCount: "core competencies",
      },
      certifications: {
        tag: "Accreditations & Honors",
        title: "Certifications &",
        titleAccent: "Specializations",
        subtitle:
          "Formal engineering credentials and verified competencies in distributed Big Data, machine learning pipelines, and IoT systems.",
      },
      timeline: {
        tag: "Career Journey",
        title: "Experience &",
        titleAccent: "Education",
        subtitle:
          "A chronological timeline of professional experience, engineering roles, and academic foundation.",
      },
      contact: {
        tag: "Let's Connect",
        title: "Get In",
        titleAccent: "Touch",
        subtitle:
          "Whether you want to discuss distributed architectures, explore an AI or Big Data opportunity, or just grab a warm Moroccan mint tea in Casablanca — my inbox is always open.",
        directContactTitle: "Direct Contact",
        directContactDesc:
          "Feel free to email me directly or copy my email address with one click.",
        viewRepos: "View Repositories →",
        connectLinkedin: "Connect →",
        copyBtn: "Copy",
        copiedBtn: "Copied!",
        sendMessageTitle: "Send a Message",
        sendMessageDesc:
          "Leave a note below and I will respond to your inquiry as soon as possible.",
        nameLabel: "Your Name",
        emailLabel: "Your Email",
        messageLabel: "Message",
        namePlaceholder: "Jane Smith",
        emailPlaceholder: "jane@example.com",
        messagePlaceholder: "Hello! I would love to discuss a project...",
        submitBtn: "Send Message",
        submittingBtn: "Sending...",
        submittedBtn: "Message Sent Successfully! ✓",
      },
      terminal: {
        welcomeTitle: "AmineOS Shell v2.4 (ENSAM Casablanca BDIoT Edition)",
        welcomeSubtitle: "Welcome! Type",
        commandsTitle: "AVAILABLE COMMANDS:",
        cmdAbout: "Personal bio & current focus",
        cmdEnsam: "Master's studies in Big Data & IoT details",
        cmdSkills: "Technical stack and engineering competencies",
        cmdProjects: "Showcase of production and research projects",
        cmdHadoop: "Query virtualized Hadoop/Spark cluster telemetry",
        cmdContact: "Get direct contact links (Email, LinkedIn, GitHub)",
        cmdClear: "Clear the terminal screen",
        cmdExit: "Close terminal",
        matrixTitle: "CORE COMPETENCY MATRIX:",
        featuredTitle: "FEATURED REPOSITORIES:",
        cmdNotFound: "Command not recognized",
        inputPlaceholder: "type 'help'...",
        ensamSpecialization: "Specialization: Distributed Computing, Hadoop ecosystems, Spark, Kafka, MLOps, and Embedded IoT.",
      },
      footer: {
        rights: "All rights reserved. Built with Next.js & TypeScript.",
        tagline: "Engineered for high performance & distributed scale",
        backToTop: "Back to Top",
      },
    },
  },

  fr: {
    personal: {
      name: "Amine Bouaouda",
      handle: "@aminebouaouda02",
      role: "Élève-Ingénieur IA & Big Data | Master BDIoT @ ENSAM Casablanca",
      statusBadge: "Master BDIoT @ ENSAM Casablanca • À l'écoute d'opportunités IA & Big Data",
      location: "Casablanca, Maroc",
      email: "amine.bouaouda02@gmail.com",
      github: "https://github.com/aminebouaouda02",
      linkedin: "https://www.linkedin.com/in/amine-bouaouda-071503278/",
      bio: "Étudiant en Master Big Data & Internet of Things (BDIoT) à l'ENSAM Casablanca et futur ingénieur IA. Mon parcours d'ingénieur a débuté en bidouillant des microcontrôleurs pour évoluer vers l'architecture de clusters Big Data distribués multi-nœuds (Hadoop, Spark, Kafka), les pipelines de Machine Learning et les systèmes IoT embarqués.",
      resumeUrl: "/cv-amine-bouaouda.pdf",
      taglineGreeting: "Salut ! Moi c'est",
      avatar: "/avatar.jpg",
      statusActivity: "En train de coder, optimiser des flux Kafka ou savourer un thé à la menthe",
      motto: "Simplicité dans la conception, résilience à l'échelle distribuée.",
    },

    now: {
      badge: "Momentum & Actualité",
      title: "Ce que je fais",
      titleAccent: "En ce Moment",
      subtitle: "Un aperçu vivant de ce que j'apprends, conçois et explore en dehors des cours.",
      focusTitle: "Thèse de Master & Traitement de Flux Distribués",
      focusDesc: "Immersion dans le traitement de flux Spark Structured Streaming, le partitionnement Kafka et la redondance de stockage à l'ENSAM Casablanca.",
      exploringTitle: "Radar de Curiosité",
      exploringItems: [
        { name: "Apache Iceberg", tag: "Data Lakehouse" },
        { name: "Rust pour Systèmes", tag: "Performance & Sécurité" },
        { name: "Agents IA Autonomes", tag: "IA Appliquée" },
        { name: "ClickHouse", tag: "OLAP Temps Réel" },
      ],
      readingTitle: "Sur mon bureau",
      readingBook: "Designing Data-Intensive Applications par Martin Kleppmann",
      beyondTitle: "En dehors du code",
      beyondItems: [
        "Bricolage matériel avec capteurs ESP32 & Arduino",
        "Tactiques d'échecs & casse-têtes stratégiques",
        "Rituels de thé marocain & réflexions nocturnes",
        "Veille active sur les frameworks distribués open-source",
      ],
      coffeeTeaNote: "Basé à Casablanca, Maroc (UTC+1). Toujours ravi d'échanger autour d'un bon thé.",
    },

    stats: [
      { value: "ENSAM", label: "Master BDIoT", sub: "Grande école d'ingénieurs à Casablanca" },
      { value: "4 Nœuds", label: "Cluster Hadoop", sub: "Orchestré sous Docker & HDFS" },
      { value: "PFE", label: "Logiciel Entreprise", sub: "Solution Flutter & Laravel livrée à GM-Soft" },
      { value: "100%", label: "Curiosité & Rigueur", sub: "Nourri de thé à la menthe & persévérance" },
    ],

    skillCategories: [
      {
        title: "Big Data & Ingénierie des Données",
        iconName: "Database",
        skills: [
          { name: "Hadoop (HDFS, YARN)", level: 90 },
          { name: "Apache Spark & Kafka", level: 85 },
          { name: "NoSQL & PostgreSQL / MySQL", level: 88 },
          { name: "Ingestion & Pipelines de Données", level: 86 },
          { name: "Stockage Distribué & Analytics", level: 88 },
        ],
      },
      {
        title: "Intelligence Artificielle & Machine Learning",
        iconName: "Terminal",
        skills: [
          { name: "Python (Data Science & ML)", level: 92 },
          { name: "MLOps & Automatisation de Pipelines", level: 82 },
          { name: "Automatisation de Workflows n8n", level: 88 },
          { name: "Déploiement de Modèles & APIs", level: 85 },
          { name: "Algorithmes & Structures de Données", level: 90 },
        ],
      },
      {
        title: "Langages & Frameworks Principaux",
        iconName: "Layout",
        skills: [
          { name: "Java & Spring Boot", level: 88 },
          { name: "Flutter & Dart", level: 90 },
          { name: "PHP & Laravel", level: 88 },
          { name: "C & C++", level: 85 },
          { name: "JavaScript & HTML/CSS", level: 86 },
        ],
      },
      {
        title: "Infrastructure, IoT & Cloud",
        iconName: "Server",
        skills: [
          { name: "Conteneurisation Docker", level: 90 },
          { name: "Linux & Scripting Shell", level: 92 },
          { name: "Arduino Uno & Capteurs IoT", level: 88 },
          { name: "Git & CI/CD GitHub Actions", level: 92 },
          { name: "Fondamentaux Cloud AWS", level: 78 },
        ],
      },
    ],

    projects: [
      {
        id: "hadoop-distributed-cluster",
        title: "Architecture Distribuée Big Data",
        category: "data",
        featured: true,
        summary: "Écosystème Hadoop multi-nœuds virtualisé utilisant HDFS, YARN et des conteneurs Docker.",
        description:
          "Conception et déploiement d'un cluster Hadoop distribué et virtualisé au sein d'environnements Docker multi-conteneurs à l'ENSAM Casablanca. Mise en œuvre de la redondance HDFS, allocation des ressources avec YARN et ordonnancement de jobs Big Data.",
        tags: ["Hadoop", "HDFS", "YARN", "Docker", "Linux", "Big Data", "Systèmes Distribués"],
        demoUrl: "https://github.com/aminebouaouda02",
        githubUrl: "https://github.com/aminebouaouda02",
        highlights: [
          "Cluster Hadoop multi-nœuds orchestrant HDFS et YARN",
          "Topologie master/worker optimisée avec Docker Compose",
          "Ordonnancement performant et traitement distribué des partitions de données",
          "Infrastructure reproductible gérée par scripts automatisés",
        ],
        challenge:
          "Configurer le routage réseau et le DNS inter-conteneurs Docker pour assurer que le NameNode HDFS et le ResourceManager YARN maintiennent des heartbeats stables avec les DataNodes sans dérive d'adresses IP.",
      },
      {
        id: "greenhouse-irrigation-iot",
        title: "Système d'Irrigation Intelligent pour Serre",
        category: "iot",
        featured: true,
        summary: "Système autonome d'irrigation régulée pour serre agricole, alimenté par énergie solaire et capteurs IoT.",
        description:
          "Conception d'un système intelligent et autonome de régulation climatique et d'arrosage pour serres agricoles. Piloté par un microcontrôleur Arduino Uno, des capteurs d'humidité du sol et des détecteurs de mouvement PIR pour la sécurité du périmètre.",
        tags: ["IoT", "Arduino Uno", "C++ Embarqué", "Capteurs", "Énergie Solaire", "Automatisation"],
        demoUrl: "https://github.com/aminebouaouda02",
        githubUrl: "https://github.com/aminebouaouda02",
        highlights: [
          "Surveillance en temps réel de l'humidité du sol et déclenchement automatique des relais",
          "Détection d'intrusion et surveillance périmétrique par capteurs PIR",
          "Conception basse consommation prête pour l'alimentation par panneau solaire",
          "Testé en conditions agricoles pour une préservation optimale de la ressource en eau",
        ],
        challenge:
          "Calibrer la lecture analogique de l'humidité du sol face aux fortes amplitudes thermiques en serre réelle, tout en concevant un cycle de veille/réveil ultra-basse consommation pour préserver la batterie solaire.",
      },
      {
        id: "hr-mobile-app",
        title: "Plateforme Mobile de Gestion RH (PFE)",
        category: "fullstack",
        featured: true,
        summary: "Application mobile d'entreprise pour la gestion des ressources humaines développée avec Flutter et API Laravel.",
        description:
          "Projet de Fin d'Études (PFE) réalisé pour GM-Soft IT Solutions. Solution mobile complète comprenant l'authentification par tokens JWT, la gestion des permissions basée sur les rôles, les demandes de congé et le suivi des présences.",
        tags: ["Flutter", "Dart", "Laravel", "PHP", "MySQL", "API REST", "Auth JWT"],
        demoUrl: "https://github.com/aminebouaouda02",
        githubUrl: "https://github.com/aminebouaouda02",
        highlights: [
          "Interface mobile cross-platform fluide conçue avec Flutter & Dart pour iOS et Android",
          "Backend API REST robuste sous Laravel, MySQL et authentification JWT",
          "Contrôle d'accès basé sur les rôles (Admin, Manager, Salarié)",
          "Modélisation de base de données relationnelle complète et intégrité référentielle",
        ],
        challenge:
          "Traduire les règles complexes du code du travail marocain pour le calcul des congés en un état réactif fluide sous Flutter, adossé à des transactions atomiques côté Laravel.",
      },
      {
        id: "industrial-simulation",
        title: "Simulation de Ligne Industrielle",
        category: "systems",
        featured: true,
        summary: "Simulateur interactif en temps réel d'une ligne de production automatisée avec machines à états et retour audio.",
        description:
          "Simulation complète sur navigateur d'une ligne d'assemblage industrielle. Intègre des machines à états finis en temps réel, des capteurs de présence, une physique de convoyeur, un diagnostic d'erreurs et des alertes audio synthétisées.",
        tags: ["JavaScript ES6+", "HTML5 Canvas", "Machines à États", "Web Audio API", "Automatisation"],
        demoUrl: "/simulation-ligne-industrielle/index.html",
        githubUrl: "https://github.com/aminebouaouda02",
        highlights: [
          "Boucle événementielle temps réel et simulation physique du convoyeur",
          "Déclencheurs optiques paramétrables et diagnostics par poste",
          "Synthèse sonore industrielle pour alertes et consignes vocales",
          "Architecture ultra-légère sans dépendances pour une réactivité instantanée",
        ],
        challenge:
          "Créer une boucle événementielle déterministe à 60 FPS en pur JavaScript Canvas et Web Audio API sans framework lourd de jeu, garantissant une synchronisation parfaite des capteurs optiques.",
      },
      {
        id: "n8n-automation-hub",
        title: "Hub d'Automatisation de Workflows n8n",
        category: "data",
        featured: false,
        summary: "Pipelines événementiels et orchestration de webhooks automatisés avec n8n et Python.",
        description:
          "Développement de flux de données automatisés reliant des services distants, la synchronisation de bases de données et l'envoi d'alertes en temps réel via n8n et scripts Python.",
        tags: ["n8n", "Python", "Webhooks", "Intégration d'APIs", "Automatisation", "Pipelines"],
        demoUrl: "https://github.com/aminebouaouda02",
        githubUrl: "https://github.com/aminebouaouda02",
        highlights: [
          "Écouteurs de webhooks événementiels pour déclenchement automatique",
          "Scripts Python personnalisés pour la manipulation de structures complexes",
          "Acheminement automatique des notifications vers les canaux de messagerie",
        ],
        challenge:
          "Concevoir des écouteurs de webhooks idempotents et des reprises sur erreur progressives (retry backoffs) pour éviter toute duplication en base lors de micro-coupures de services tiers.",
      },
    ],

    timeline: [
      {
        id: "edu-ensam",
        year: "Sept 2025 — Présent (Diplôme 2027)",
        role: "Master en Big Data & Internet of Things (BDIoT)",
        organization: "ENSAM Casablanca",
        location: "Casablanca, Maroc",
        description:
          "Cursus d'excellence axé sur les architectures distribuées, les écosystèmes Big Data (Hadoop, Spark, Kafka), le Machine Learning, le Cloud Computing et les systèmes IoT embarqués.",
        skills: ["Big Data", "Hadoop", "Spark", "IoT", "Machine Learning", "Docker", "Cloud"],
        type: "education",
      },
      {
        id: "edu-licence",
        year: "2024 — 2025",
        role: "Licence Professionnelle en Big Data, Infrastructure et Analyse",
        organization: "EST Fquih Ben Salah",
        location: "Fquih Ben Salah, Maroc",
        description:
          "Spécialisation approfondie en stockage massif de données, bases de données distribuées et NoSQL, pipelines d'analyse et virtualisation de serveurs.",
        skills: ["Big Data", "NoSQL", "Python", "Analyse de Données", "Linux", "Virtualisation"],
        type: "education",
      },
      {
        id: "exp-gmsoft",
        year: "Avr 2024 — Juin 2024",
        role: "Stage PFE (Projet de Fin d'Études)",
        organization: "GM-Soft IT Solutions Consulting",
        location: "Beni Mellal, Maroc",
        description:
          "Développement complet d'une application mobile de gestion RH en Flutter (frontend) et Laravel (API REST backend), gestion de l'authentification et conception de la base de données.",
        skills: ["Flutter", "Dart", "Laravel", "PHP", "MySQL", "API REST", "Git"],
        type: "work",
      },
      {
        id: "edu-dut",
        year: "2022 — 2024",
        role: "DUT en Génie Informatique",
        organization: "EST Beni Mellal",
        location: "Beni Mellal, Maroc",
        description:
          "Formation fondamentale en informatique, génie logiciel, algorithmique avancée, programmation orientée objet (Java, C, C++), bases de données et réseaux.",
        skills: ["Java", "C/C++", "SQL", "Génie Logiciel", "Algorithmique", "Dév Web"],
        type: "education",
      },
      {
        id: "exp-us2i",
        year: "Août 2023 — Sept 2023",
        role: "Stage Technique",
        organization: "US2I",
        location: "Beni Mellal, Maroc",
        description:
          "Assistance aux utilisateurs, support technique de premier niveau, diagnostic matériel/logiciel et configuration réseau.",
        skills: ["Support Technique", "Réseaux", "Maintenance Système", "Dépannage"],
        type: "work",
      },
      {
        id: "edu-bac",
        year: "2021",
        role: "Baccalauréat en Sciences Physiques",
        organization: "Lycée Bir Anzarane",
        location: "Fquih Ben Salah, Maroc",
        description:
          "Baccalauréat scientifique avec orientation en Physique et Mathématiques, développant une rigueur analytique solide.",
        skills: ["Mathématiques", "Physique", "Méthodologie Scientifique", "Analyse"],
        type: "education",
      },
    ],

    certifications: [
      {
        id: "cert-ensam-bigdata",
        title: "Spécialisation Master : Architectures & Calcul Big Data",
        issuer: "ENSAM Casablanca",
        date: "2025 — 2026",
        skills: ["Cluster Hadoop", "Apache Spark", "HDFS", "YARN", "Docker"],
      },
      {
        id: "cert-ml-pipelines",
        title: "Machine Learning & Pipelines de Données de Bout-en-Bout",
        issuer: "Programme Ingénierie des Données",
        date: "2024 — 2025",
        skills: ["Python", "Scikit-Learn", "ETL", "NoSQL", "Pipelines de Données"],
      },
      {
        id: "cert-pfe-flutter",
        title: "Architecture Mobile d'Entreprise (PFE)",
        issuer: "GM-Soft IT Solutions Consulting",
        date: "2024",
        skills: ["Flutter", "Dart", "API Laravel", "Conception de BD", "JWT"],
      },
      {
        id: "cert-iot-systems",
        title: "Conception de Systèmes Matériels Embarqués & Capteurs",
        issuer: "Laboratoire d'Automatismes & Microcontrôleurs",
        date: "2024 — 2025",
        skills: ["Arduino Uno", "C++ Embarqué", "Pilotage Relais", "Capteurs PIR"],
      },
    ],

    ui: {
      nav: {
        about: "À propos",
        now: "En ce moment",
        projects: "Projets",
        skills: "Compétences",
        certifications: "Certifications",
        timeline: "Parcours",
        contact: "Contact",
        connect: "Me Contacter",
      },
      hero: {
        greeting: "Bonjour, je suis",
        exploreProjects: "Explorer les Projets",
        downloadCv: "Télécharger CV",
        getInTouch: "Prendre Contact",
        followMe: "Me suivre :",
        codeFocus: "IA & ML, Big Data & IoT",
        codeMission: "Intelligence distribuée et passage à l'échelle",
        headlinePrefix: "Ingénierie Big Data, IA &",
        headlineAccent: "Systèmes IoT Intelligents",
        badgeDistributed: "Systèmes Distribués",
        badgeML: "Machine Learning & IA",
        badgeIoT: "Automatisation IoT",
        badgeFullstack: "Architecture Full-Stack",
        runCliBtn: "Lancer CLI >_",
        liveClockCity: "Casablanca, Maroc 🇲🇦",
        viewNowBtn: "Ce que je fais en ce moment",
      },
      projects: {
        tag: "Projets à la Une",
        title: "Réalisations",
        titleAccent: "Ingénierie",
        subtitle:
          "Sélection de systèmes en production, simulations interactives temps réel et architectures distribuées.",
        filterAll: "Tous les Projets",
        filterData: "Big Data & IA",
        filterIot: "IoT & Embarqué",
        filterSystems: "Systèmes & Simulation",
        filterFullstack: "Full-Stack Web",
        featuredBadge: "À la Une",
        caseStudyBtn: "Étude de cas",
        liveDemoBtn: "Démo en direct",
        sourceCodeBtn: "Code Source",
        keyHighlights: "Points Techniques Clés",
        techArchitecture: "Technologies & Architecture",
        challengeTitle: "Dans les coulisses : Le Défi Technique",
      },
      skills: {
        tag: "Compétences Techniques",
        title: "Compétences &",
        titleAccent: "Technologies",
        subtitle:
          "Aperçu détaillé de mes outils à travers les écosystèmes Big Data, l'IA / Machine Learning et les systèmes IoT.",
        coreCount: "compétences clés",
      },
      certifications: {
        tag: "Accréditations & Titres",
        title: "Certifications &",
        titleAccent: "Spécialisations",
        subtitle:
          "Titres académiques et compétences validées en systèmes Big Data distribués, pipelines de Machine Learning et IoT.",
      },
      timeline: {
        tag: "Parcours Professionnel",
        title: "Expériences &",
        titleAccent: "Formations",
        subtitle:
          "Chronologie de mon parcours professionnel, de mes stages techniques et de ma formation académique.",
      },
      contact: {
        tag: "Contactez-Moi",
        title: "Entrons en",
        titleAccent: "Contact",
        subtitle:
          "Que ce soit pour échanger sur les architectures distribuées, explorer une opportunité IA ou Big Data, ou simplement partager un bon thé à la menthe à Casablanca — ma boîte mail est grande ouverte.",
        directContactTitle: "Coordonnées Directes",
        directContactDesc:
          "Écrivez-moi directement par email ou copiez mon adresse en un clic.",
        viewRepos: "Voir les Dépôts →",
        connectLinkedin: "Se Connecter →",
        copyBtn: "Copier",
        copiedBtn: "Copié !",
        sendMessageTitle: "Laisser un Message",
        sendMessageDesc:
          "Remplissez le formulaire ci-dessous et je vous répondrai dans les plus brefs délais.",
        nameLabel: "Votre Nom",
        emailLabel: "Votre Adresse Email",
        messageLabel: "Votre Message",
        namePlaceholder: "Votre Nom complet",
        emailPlaceholder: "nom@exemple.com",
        messagePlaceholder: "Bonjour Amine, je souhaiterais échanger avec toi sur...",
        submitBtn: "Envoyer le Message",
        submittingBtn: "Envoi en cours...",
        submittedBtn: "Message Envoyé avec Succès ! ✓",
      },
      terminal: {
        welcomeTitle: "AmineOS Shell v2.4 (Édition ENSAM Casablanca BDIoT)",
        welcomeSubtitle: "Bienvenue ! Tapez",
        commandsTitle: "COMMANDES DISPONIBLES :",
        cmdAbout: "Biographie personnelle & vision d'ingénierie",
        cmdEnsam: "Détails du Master en Big Data & IoT à l'ENSAM",
        cmdSkills: "Stack technique & compétences clés",
        cmdProjects: "Présentation des réalisations & projets",
        cmdHadoop: "Télémétrie du cluster distribué Hadoop/Spark",
        cmdContact: "Coordonnées directes (Email, LinkedIn, GitHub)",
        cmdClear: "Effacer l'écran du terminal",
        cmdExit: "Fermer le terminal",
        matrixTitle: "MATRICE DES COMPÉTENCES CLÉS :",
        featuredTitle: "RÉALISATIONS À LA UNE :",
        cmdNotFound: "Commande non reconnue",
        inputPlaceholder: "tapez 'help'...",
        ensamSpecialization: "Spécialisation : Calcul Distribué, écosystèmes Hadoop, Spark, Kafka, MLOps et IoT Embarqué.",
      },
      footer: {
        rights: "Tous droits réservés. Conçu avec Next.js & TypeScript.",
        tagline: "Ingénierie haute performance & échelle distribuée",
        backToTop: "Haut de page",
      },
    },
  },
};
