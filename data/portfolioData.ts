export interface Project {
  id: string;
  title: string;
  category: "all" | "fullstack" | "systems" | "data";
  summary: string;
  description: string;
  tags: string[];
  featured: boolean;
  demoUrl?: string;
  githubUrl?: string;
  image?: string;
  highlights: string[];
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

export const portfolioData = {
  personal: {
    name: "Amine Bouaouda",
    handle: "@aminebouaouda02",
    role: "Aspiring AI Engineer | Master's in Big Data & IoT @ ENSAM Casablanca",
    statusBadge: "Master's @ ENSAM Casablanca • Open to AI & Big Data Roles",
    location: "Casablanca, Morocco",
    email: "amine.bouaouda02@gmail.com",
    github: "https://github.com/aminebouaouda02",
    linkedin: "https://www.linkedin.com/in/amine-bouaouda-071503278/",
    bio: "Master's student in Big Data & Internet of Things (BDIoT) at ENSAM Casablanca and aspiring AI Engineer. Passionate about architecting distributed Big Data platforms (Hadoop, Spark, Kafka), machine learning pipelines, IoT automation, and high-performance applications.",
    resumeUrl: "#contact",
  },

  stats: [
    { label: "LinkedIn Network", value: "500+" },
    { label: "Current Studies", value: "ENSAM" },
    { label: "Core Tech Stack", value: "15+" },
    { label: "Engineering Projects", value: "8+" },
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
  ] as SkillCategory[],

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
    },
    {
      id: "greenhouse-irrigation-iot",
      title: "Automated Greenhouse Irrigation System",
      category: "systems",
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
    },
  ] as Project[],

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
  ] as TimelineItem[],
};
