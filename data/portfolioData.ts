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
      email: "bouaouda.amine@ensam-casa.ma",
      github: "https://github.com/aminebouaouda02",
      linkedin: "https://www.linkedin.com/in/amine-bouaouda-071503278/",
      bio: "Master's student in Big Data & Internet of Things (BDIoT) at ENSAM Casablanca, focused on Data Engineering and applied AI. I build end-to-end systems: real-time Big Data pipelines (Kafka, Spark, Hadoop), machine-learning models (Transformers, anomaly detection), and LLM applications such as a modular RAG assistant — always tested, documented, and shipped in small verified steps.",
      resumeUrl: "/cv-amine-bouaouda.pdf",
      taglineGreeting: "Salam! I'm",
      avatar: "/avatar.jpg",
      statusActivity: "Final-year Master's student in Big Data & IoT — open to PFE internships from February 2027",
      motto: "Simplicity in design, resilience at distributed scale.",
    },

    now: {
      badge: "Life & Momentum",
      title: "What I'm Doing",
      titleAccent: "Right Now",
      subtitle: "A living snapshot of what I'm learning, building, and exploring beyond deadlines.",
      focusTitle: "PFE Internship Search & Applied AI",
      focusDesc: "Final year of the Big Data & IoT Master's at ENSAM Casablanca. I am looking for a 6-month end-of-studies (PFE) internship in Data & AI starting February 2027, while building portfolio-grade projects: a modular RAG assistant and a connected-vehicle Big Data platform.",
      exploringTitle: "Curiosity Radar",
      exploringItems: [
        { name: "Vision Language Models", tag: "OpenCV University — certified Nov 2026" },
        { name: "LLM Agents & Text-to-SQL", tag: "Applied AI" },
        { name: "Spark Structured Streaming", tag: "FleetSense" },
        { name: "RAG Evaluation", tag: "Retrieval Quality" },
      ],
      readingTitle: "On My Desk",
      readingBook: "Vision Language Models Bootcamp — OpenCV University (completed November 2026, grade 100%)",
      beyondTitle: "Beyond The Screen",
      beyondItems: [
        "Building open-source projects on GitHub, one slice at a time",
        "Family time between Casablanca and Beni Mellal",
        "Following AI research and product news",
      ],
      coffeeTeaNote: "Usually coding, tuning Kafka streams, or reviewing model results",
    },

    stats: [
      { value: "ENSAM", label: "Master BDIoT", sub: "Top engineering school in Morocco" },
      { value: "63,257", label: "Arabic Reviews Classified", sub: "LABR — AraBERT vs MARBERTv2" },
      { value: "PFE", label: "Enterprise Software", sub: "Flutter & Laravel shipped for GM-Soft" },
      { value: "10,080", label: "IoT Telemetry Readings", sub: "Anomaly detection — Isolation Forest, F1 0.277" },
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
        title: "AI & Machine Learning",
        iconName: "Terminal",
        skills: [
          { name: "Python (Data Analysis & ML)", level: 92 },
          { name: "RAG & LLM Applications (Groq, Pinecone)", level: 85 },
          { name: "Transformers & NLP (Hugging Face)", level: 82 },
          { name: "scikit-learn & Model Evaluation", level: 84 },
          { name: "Model Integration & APIs", level: 85 },
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
          { name: "MQTT & IoT Data Pipelines", level: 82 },
          { name: "Git & GitHub CI/CD", level: 92 },
          { name: "AWS Cloud Fundamentals", level: 78 },
        ],
      },
    ],

    projects: [
      {
        id: "modular-rag-assistant",
        title: "Modular RAG Assistant",
        category: "data",
        featured: true,
        summary: "Retrieval-Augmented Generation assistant over PDF documents: grounded answers with page-level citations, an evaluation harness, and 40 automated tests.",
        description:
          "A modular RAG system that answers questions over PDF documents and cites its sources. PyMuPDF extracts text page by page, a chunker keeps source and page metadata, Google embeddings are indexed in Pinecone, and the top-matching chunks ground a Groq LLM answer returned with [file, p. N] citations. FastAPI backend with a chat web app (PDF upload, conversation history), offline fallback providers so the whole pipeline is testable, an 8-question evaluation set, a 40-test pytest suite, CI and Docker.",
        tags: ["Python", "FastAPI", "RAG", "LLM (Groq)", "Pinecone", "Embeddings", "PyMuPDF", "pytest", "Docker"],
        githubUrl: "https://github.com/aminebouaouda02/modular-rag-assistant",
        image: "/projects/modular-rag-assistant.svg",
        highlights: [
          "Answers grounded in retrieved chunks only, with [file, p. N] citations",
          "Chunking with source/page metadata and overlap; per-page PDF extraction",
          "Evaluation harness: hit@3, answer accuracy, citation rate, abstention",
          "40 pytest tests, GitHub Actions CI, Docker image",
        ],
        challenge:
          "Keeping the model honest: it only ever sees the retrieved chunks, and the evaluation set showed exactly where retrieval misses — measuring that openly mattered more than a demo that always looks right.",
      },
      {
        id: "sellsight-big-data-platform",
        title: "SellSight — Big Data Selling Platform (Team Project)",
        category: "data",
        featured: true,
        summary: "Team-built selling platform with a full Big Data pipeline: Kafka events, Spark analytics, dashboards and recommendations.",
        description:
          "SellSight is a team project that pairs a classic e-commerce platform with a real Big Data architecture. Sales events stream through Apache Kafka into PostgreSQL, are ingested to HDFS with Sqoop, modelled in Hive, and processed with Apache Spark batch jobs that feed dashboards and product recommendations. The application itself runs on a Spring Boot backend and a Next.js frontend.",
        tags: ["Apache Kafka", "Apache Spark", "Hadoop", "HDFS", "Hive", "Sqoop", "Spring Boot", "Next.js", "PostgreSQL"],
        githubUrl: "https://github.com/MohammedElMO/SellSight",
        image: "/projects/sellsight.png",
        highlights: [
          "Real-time sales events streamed with Apache Kafka",
          "Batch analytics in Apache Spark over HDFS and Hive tables",
          "Data ingestion from PostgreSQL to HDFS automated with Sqoop",
          "Dashboards and product recommendations built on the aggregated data",
        ],
        challenge:
          "Connecting the streaming, storage and batch layers so the analytics stay consistent with the transactional data — events, warehouse tables and Spark outputs have to agree.",
      },
      {
        id: "labr-arabic-reviews",
        title: "LABR — Arabic Book Review Classification",
        category: "data",
        featured: true,
        summary: "Fine-tuned Arabic Transformers (AraBERT vs MARBERTv2) predicting 1–5 star ratings for 63,257 Arabic book reviews, scored with ordinal-aware metrics.",
        description:
          "Two-person university project (ENSAM Casablanca) on the LABR dataset: 63,257 Arabic book reviews to classify into their 1–5 star rating — an ordinal problem, where confusing 4 stars with 5 is a smaller error than confusing 1 with 5. Two pre-trained Arabic Transformers are fine-tuned and compared head-to-head: AraBERT, trained on Modern Standard Arabic, and MARBERTv2, trained on dialectal Arabic and social media. Evaluation uses Macro-F1 and Mean Absolute Error to respect the ordering of the classes.",
        tags: ["PyTorch", "Hugging Face", "Transformers", "AraBERT", "MARBERTv2", "NLP", "Arabic"],
        githubUrl: "https://github.com/aminebouaouda02/arabic-book-reviews-labr",
        image: "/projects/labr-arabic-reviews.svg",
        highlights: [
          "63,257 real Arabic book reviews (LABR dataset)",
          "AraBERT vs MARBERTv2 fine-tuning, compared head-to-head",
          "Ordinal-aware evaluation: Macro-F1 and Mean Absolute Error",
          "Built as a two-person team project at ENSAM Casablanca",
        ],
        challenge:
          "Arabic's morphology and dialect mix: a model trained on Modern Standard Arabic reads formal text well, but book reviews slip into dialect — exactly why the dialect-trained MARBERTv2 belongs in the comparison.",
      },
      {
        id: "iot-anomaly-detection",
        title: "IoT Anomaly Detection",
        category: "data",
        featured: true,
        summary: "Machine-learning anomaly detection on sensor telemetry: 10,080 readings, a statistical baseline vs Isolation Forest, served by a FastAPI API and a dashboard.",
        description:
          "End-to-end data science project on synthetic industrial telemetry (temperature, humidity, vibration) with 404 labelled anomalies. After cleaning and feature engineering, a rolling z-score baseline (F1 0.154) is compared with an Isolation Forest model (F1 0.277) on a chronological split. Results are served through a FastAPI API, a Streamlit dashboard and a live MQTT scoring path, with tests and CI.",
        tags: ["Python", "scikit-learn", "Isolation Forest", "FastAPI", "Streamlit", "MQTT", "pandas"],
        githubUrl: "https://github.com/aminebouaouda02/iot-anomaly-detection",
        image: "/projects/iot-anomaly-detection.png",
        highlights: [
          "10,080 telemetry readings with 404 labelled anomalies (spikes, drops, drifts, stuck sensors)",
          "Rolling z-score baseline (F1 0.154) vs Isolation Forest (F1 0.277), chronological train/test split",
          "FastAPI scoring API, Streamlit dashboard and live MQTT path",
          "Tested with pytest and shipped with GitHub Actions CI",
        ],
        challenge:
          "Detecting slow sensor drifts and stuck sensors — the anomaly types a simple threshold misses — without drowning the operator in false positives on the obvious spikes.",
      },
      {
        id: "fleetsense",
        title: "FleetSense — Connected Vehicle Rental Platform",
        category: "data",
        featured: false,
        summary: "Big Data platform for connected vehicle rental, built by a team of three — I own the ingestion and storage layer. In progress.",
        description:
          "A three-person Big Data platform for a connected vehicle rental service: vehicles stream position, speed, fuel level and mileage. My responsibility is the ingestion and storage layer — Kafka for the live telemetry streams, Flume and Sqoop for collection and reference data, HDFS for raw storage, Hive for historical analytics, and HBase for fast per-vehicle lookups such as the last known position. My teammates build the Spark Streaming processing with an ML price-recommendation model, and the Spring Boot API with the React screens. The whole stack runs in Docker.",
        tags: ["Kafka", "Flume", "Sqoop", "HDFS", "Hive", "HBase", "Spark", "Docker"],
        image: "/projects/fleetsense.svg",
        highlights: [
          "Ingestion & storage layer: Kafka, Flume, Sqoop, HDFS, Hive, HBase",
          "HBase key-based lookups for the last position of each vehicle",
          "Hive analytics over the full telemetry history",
          "Team of three, fully containerised with Docker",
        ],
        challenge:
          "Splitting storage by access pattern: history belongs in HDFS/Hive, but 'where is this vehicle right now?' needs HBase's fast key reads — one store for both jobs would be slow at one of them.",
      },
      {
        id: "shop-analytics-platform",
        title: "Shop Analytics Platform",
        category: "fullstack",
        featured: true,
        summary: "Finished e-commerce platform with JWT auth, product and order management, Spark sales analytics, and a demo flow.",
        description:
          "A small online shop built end to end: a Spring Boot REST API with JWT authentication and validated DTOs, PostgreSQL storage, a Next.js frontend with a product catalogue, order management and a statistics dashboard, and a PySpark job that computes revenue per category from the sales data. The full stack also runs under Docker Compose with an optional Hadoop HDFS profile, with backend tests, GitHub Actions CI, and a seed-data demo flow so the app can be tried with a demo login.",
        tags: ["Spring Boot", "Next.js", "TypeScript", "PostgreSQL", "Apache Spark", "HDFS", "JWT", "Tailwind CSS", "Docker", "GitHub Actions"],
        githubUrl: "https://github.com/aminebouaouda02/shop-analytics-platform",
        image: "/projects/shop-analytics.png",
        highlights: [
          "JWT register and login with protected routes in Spring Security and Next.js",
          "Full product and order CRUD with server-side validation and computed totals",
          "Dashboard KPIs computed live: products, orders, revenue and low-stock alerts",
          "PySpark batch job computing total revenue per category",
          "Docker Compose with an optional Hadoop HDFS + Spark profile",
          "Seed data and demo login, with CI running backend tests and the frontend build",
        ],
        challenge:
          "Tailwind CSS was in the dependencies from day one but never actually configured, so the first UI rendered unstyled. I traced it to the missing tailwind.config.js and postcss.config.js, then rebuilt the whole interface.",
      },
      {
        id: "pfe-internship-manager",
        title: "PFE Internship Manager",
        category: "fullstack",
        featured: true,
        summary: "Finished platform to manage PFE internship offers and student applications, with Spark statistics and a demo flow.",
        description:
          "A web platform that manages final-year (PFE) internships end to end: companies publish offers, students apply online, supervisors review applications and change their status, and Apache Spark computes statistics such as the most requested skills from the application data. Spring Boot API with JWT security and a Next.js frontend. It also runs under Docker Compose with an optional Hadoop HDFS profile, with backend tests, GitHub Actions CI, and a seed-data demo flow with demo student and supervisor logins.",
        tags: ["Spring Boot", "Next.js", "TypeScript", "PostgreSQL", "Apache Spark", "HDFS", "JWT", "Tailwind CSS", "Docker", "GitHub Actions"],
        githubUrl: "https://github.com/aminebouaouda02/pfe-internship-manager",
        image: "/projects/pfe-internship-manager.png",
        highlights: [
          "Internship offers with search, skills filtering and full create, edit and delete",
          "Online applications with a status workflow: PENDING, ACCEPTED, REJECTED",
          "JWT authentication with protected pages for students and supervisors",
          "Spark job computing application statistics, for example most requested skills",
          "Docker Compose with an optional Hadoop HDFS + Spark profile",
          "Seed data and demo logins, with CI running backend tests and the frontend build",
        ],
        challenge:
          "Modelling the application status workflow so a status change is one validated server-side transition — the API updates it via PUT /api/applications/{id}/status and the interface reflects it immediately.",
      },
      {
        id: "hr-mobile-app",
        title: "HR Mobile Management Platform (PFE)",
        category: "fullstack",
        featured: false,
        summary: "Cross-platform HR management application built at GM-Soft: leave requests with a manager-to-HR validation circuit, leave balances, and role-based access.",
        description:
          "End-of-studies (PFE) project engineered for GM-Soft IT Solutions. A comprehensive human-resources management application: employee records, leave and absence requests that follow a validation circuit (employee, then manager, then HR), leave balances tracked per employee, and role-based access for HR admins, managers and employees. Cross-platform Flutter application backed by a Laravel REST API and a relational database.",
        tags: ["Flutter", "Dart", "Laravel", "PHP", "MySQL", "REST API"],
        image: "/projects/hr-mobile-app.svg",
        highlights: [
          "Leave requests with an employee → manager → HR validation circuit",
          "Leave balances tracked per employee",
          "Three roles with distinct permissions: HR admin, manager, employee",
          "Flutter mobile app over a Laravel REST API",
        ],
        challenge:
          "Modelling the leave rules — balances, validation steps, roles — so a request can never skip a step or exceed a balance, consistently across the mobile app and the API.",
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
        id: "cert-datacamp-pandas",
        title: "Data Manipulation with pandas",
        issuer: "DataCamp",
        date: "September 2026",
        skills: ["Python", "pandas", "Data Manipulation"],
      },
      {
        id: "cert-ai-career-readiness",
        title: "AI Career Readiness",
        issuer: "ASEAN Digital Academy",
        date: "October 2026",
        skills: ["AI Fundamentals", "Career Readiness"],
      },
      {
        id: "cert-efset-english",
        title: "EF SET English Certificate — B1 Intermediate",
        issuer: "EF SET",
        date: "October 2026",
        skills: ["English Reading C2", "English Writing B2"],
      },
      {
        id: "cert-opencv-vlm",
        title: "Vision Language Models (VLM) Bootcamp — Certificate of Excellence (100%)",
        issuer: "OpenCV University",
        date: "November 2026",
        skills: ["Vision Language Models", "Multimodal AI", "Computer Vision"],
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
        cmdHadoop: "Where I use Hadoop & Spark in my projects",
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
      email: "bouaouda.amine@ensam-casa.ma",
      github: "https://github.com/aminebouaouda02",
      linkedin: "https://www.linkedin.com/in/amine-bouaouda-071503278/",
      bio: "Étudiant en Master Big Data & Internet of Things (BDIoT) à l'ENSAM Casablanca, spécialisé en ingénierie des données et IA appliquée. Je construis des systèmes complets : pipelines Big Data temps réel (Kafka, Spark, Hadoop), modèles de machine learning (Transformers, détection d'anomalies) et applications LLM comme un assistant RAG modulaire — toujours testés, documentés et livrés par petites étapes vérifiées.",
      resumeUrl: "/cv-amine-bouaouda.pdf",
      taglineGreeting: "Salut ! Moi c'est",
      avatar: "/avatar.jpg",
      statusActivity: "Étudiant en dernière année de Master Big Data & IoT — ouvert aux stages PFE dès février 2027",
      motto: "Simplicité dans la conception, résilience à l'échelle distribuée.",
    },

    now: {
      badge: "Vie & Élan",
      title: "Ce que je fais",
      titleAccent: "En ce moment",
      subtitle: "Un instantané vivant de ce que j'apprends, construis et explore au-delà des délais.",
      focusTitle: "Recherche de stage PFE & IA appliquée",
      focusDesc: "Dernière année du Master Big Data & IoT à l'ENSAM Casablanca. Je cherche un stage de fin d'études (PFE) de 6 mois en Data & IA à partir de février 2027, tout en construisant des projets de niveau portfolio : un assistant RAG modulaire et une plateforme Big Data pour véhicules connectés.",
      exploringTitle: "Radar de curiosité",
      exploringItems: [
        { name: "Modèles vision-langage (VLM)", tag: "OpenCV University — certifié en nov. 2026" },
        { name: "Agents LLM & Text-to-SQL", tag: "IA appliquée" },
        { name: "Spark Structured Streaming", tag: "FleetSense" },
        { name: "Évaluation RAG", tag: "Qualité de recherche" },
      ],
      readingTitle: "Sur mon bureau",
      readingBook: "Bootcamp Vision Language Models — OpenCV University (terminé en novembre 2026, note 100 %)",
      beyondTitle: "Au-delà de l'écran",
      beyondItems: [
        "Construire des projets open source sur GitHub, tranche par tranche",
        "Du temps en famille entre Casablanca et Béni Mellal",
        "Suivre l'actualité de la recherche et des produits IA",
      ],
      coffeeTeaNote: "Souvent en train de coder, de régler des flux Kafka ou d'analyser des résultats de modèles",
    },

    stats: [
      { value: "ENSAM", label: "Master BDIoT", sub: "Grande école d'ingénieurs à Casablanca" },
      { value: "63 257", label: "Avis en arabe classifiés", sub: "LABR — AraBERT contre MARBERTv2" },
      { value: "PFE", label: "Logiciel Entreprise", sub: "Solution Flutter & Laravel livrée à GM-Soft" },
      { value: "10 080", label: "Mesures de télémétrie IoT", sub: "Détection d'anomalies — Isolation Forest, F1 0,277" },
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
          { name: "Applications RAG & LLM (Groq, Pinecone)", level: 85 },
          { name: "Transformers & NLP (Hugging Face)", level: 82 },
          { name: "scikit-learn & Évaluation de Modèles", level: 84 },
          { name: "Déploiement de Modèles & APIs", level: 85 },
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
          { name: "MQTT & Pipelines de Données IoT", level: 82 },
          { name: "Git & CI/CD GitHub Actions", level: 92 },
          { name: "Fondamentaux Cloud AWS", level: 78 },
        ],
      },
    ],

    projects: [
      {
        id: "modular-rag-assistant",
        title: "Assistant RAG Modulaire",
        category: "data",
        featured: true,
        summary: "Assistant de Retrieval-Augmented Generation sur documents PDF : réponses ancrées avec citations par page, harnais d'évaluation et 40 tests automatisés.",
        description:
          "Un système RAG modulaire qui répond aux questions sur des documents PDF en citant ses sources. PyMuPDF extrait le texte page par page, un découpeur conserve les métadonnées source et page, les embeddings Google sont indexés dans Pinecone, et les passages les plus proches ancrent une réponse du LLM Groq rendue avec des citations [fichier, p. N]. Backend FastAPI avec une application web de chat (dépôt de PDF, historique de conversation), fournisseurs hors-ligne de repli pour tout tester, un jeu d'évaluation de 8 questions, une suite de 40 tests pytest, CI et Docker.",
        tags: ["Python", "FastAPI", "RAG", "LLM (Groq)", "Pinecone", "Embeddings", "PyMuPDF", "pytest", "Docker"],
        githubUrl: "https://github.com/aminebouaouda02/modular-rag-assistant",
        image: "/projects/modular-rag-assistant.svg",
        highlights: [
          "Réponses ancrées dans les seuls passages retrouvés, avec citations [fichier, p. N]",
          "Découpage avec métadonnées source/page et chevauchement ; extraction PDF par page",
          "Harnais d'évaluation : hit@3, exactitude, taux de citations, abstention",
          "40 tests pytest, CI GitHub Actions, image Docker",
        ],
        challenge:
          "Garder le modèle honnête : il ne voit jamais que les passages retrouvés, et le jeu d'évaluation a montré exactement où la recherche passe à côté — mesurer cela ouvertement comptait plus qu'une démo toujours flatteuse.",
      },
      {
        id: "sellsight-big-data-platform",
        title: "SellSight — Plateforme de Vente Big Data (Projet d'Équipe)",
        category: "data",
        featured: true,
        summary: "Plateforme de vente réalisée en équipe avec un pipeline Big Data complet : événements Kafka, analytique Spark, tableaux de bord et recommandations.",
        description:
          "SellSight est un projet d'équipe qui associe une plateforme e-commerce classique à une vraie architecture Big Data. Les événements de vente transitent par Apache Kafka vers PostgreSQL, sont ingérés dans HDFS avec Sqoop, modélisés dans Hive, puis traités par des jobs batch Apache Spark qui alimentent des tableaux de bord et des recommandations de produits. L'application repose sur un backend Spring Boot et un frontend Next.js.",
        tags: ["Apache Kafka", "Apache Spark", "Hadoop", "HDFS", "Hive", "Sqoop", "Spring Boot", "Next.js", "PostgreSQL"],
        githubUrl: "https://github.com/MohammedElMO/SellSight",
        image: "/projects/sellsight.png",
        highlights: [
          "Événements de vente en temps réel diffusés avec Apache Kafka",
          "Analytique batch avec Apache Spark sur HDFS et les tables Hive",
          "Ingestion des données de PostgreSQL vers HDFS automatisée avec Sqoop",
          "Tableaux de bord et recommandations de produits construits sur les données agrégées",
        ],
        challenge:
          "Relier les couches streaming, stockage et batch pour que l'analytique reste cohérente avec les données transactionnelles — événements, tables d'entrepôt et résultats Spark doivent concorder.",
      },
      {
        id: "labr-arabic-reviews",
        title: "LABR — Classification d'Avis de Livres en Arabe",
        category: "data",
        featured: true,
        summary: "Transformers arabes affinés (AraBERT contre MARBERTv2) prédisant la note de 1 à 5 étoiles de 63 257 avis de livres en arabe, avec des métriques ordinales.",
        description:
          "Projet universitaire en binôme (ENSAM Casablanca) sur le jeu de données LABR : 63 257 avis de livres en arabe à classer selon leur note de 1 à 5 étoiles — un problème ordinal, où confondre 4 et 5 étoiles est une erreur plus petite que confondre 1 et 5. Deux Transformers arabes pré-entraînés sont affinés et comparés directement : AraBERT, entraîné sur l'arabe standard moderne, et MARBERTv2, entraîné sur l'arabe dialectal et les réseaux sociaux. L'évaluation utilise le Macro-F1 et l'erreur absolue moyenne (MAE) pour respecter l'ordre des classes.",
        tags: ["PyTorch", "Hugging Face", "Transformers", "AraBERT", "MARBERTv2", "NLP", "Arabe"],
        githubUrl: "https://github.com/aminebouaouda02/arabic-book-reviews-labr",
        image: "/projects/labr-arabic-reviews.svg",
        highlights: [
          "63 257 avis réels de livres en arabe (jeu de données LABR)",
          "Affinage d'AraBERT et de MARBERTv2, comparés directement",
          "Évaluation ordinale : Macro-F1 et erreur absolue moyenne (MAE)",
          "Projet réalisé en binôme à l'ENSAM Casablanca",
        ],
        challenge:
          "La morphologie de l'arabe et le mélange des dialectes : un modèle entraîné sur l'arabe standard lit bien les textes formels, mais les avis de livres glissent vers le dialecte — exactement la raison d'être de la comparaison avec MARBERTv2.",
      },
      {
        id: "iot-anomaly-detection",
        title: "Détection d'Anomalies IoT",
        category: "data",
        featured: true,
        summary: "Détection d'anomalies par machine learning sur télémétrie de capteurs : 10 080 mesures, baseline statistique contre Isolation Forest, API FastAPI et tableau de bord.",
        description:
          "Projet data science complet sur télémétrie industrielle synthétique (température, humidité, vibration) avec 404 anomalies étiquetées. Après nettoyage et ingénierie de variables, une baseline statistique (z-score glissant, F1 0,154) est comparée à un modèle Isolation Forest (F1 0,277) sur un découpage chronologique. Les résultats sont exposés via une API FastAPI, un tableau de bord Streamlit et un scoring MQTT en direct, avec tests et CI.",
        tags: ["Python", "scikit-learn", "Isolation Forest", "FastAPI", "Streamlit", "MQTT", "pandas"],
        githubUrl: "https://github.com/aminebouaouda02/iot-anomaly-detection",
        image: "/projects/iot-anomaly-detection.png",
        highlights: [
          "10 080 mesures de télémétrie et 404 anomalies étiquetées (pics, chutes, dérives, capteurs bloqués)",
          "Baseline z-score glissant (F1 0,154) contre Isolation Forest (F1 0,277), découpage chronologique",
          "API de scoring FastAPI, tableau de bord Streamlit et flux MQTT en direct",
          "Tests pytest et CI GitHub Actions",
        ],
        challenge:
          "Détecter les dérives lentes et les capteurs bloqués — les anomalies qu'un simple seuil ne voit pas — sans noyer l'opérateur sous les faux positifs sur les pics évidents.",
      },
      {
        id: "fleetsense",
        title: "FleetSense — Plateforme de Location de Véhicules Connectés",
        category: "data",
        featured: false,
        summary: "Plateforme Big Data pour la location de véhicules connectés, réalisée en équipe de trois — je suis responsable de la couche ingestion et stockage. En cours.",
        description:
          "Une plateforme Big Data réalisée en équipe de trois pour un service de location de véhicules connectés : les véhicules envoient en continu position, vitesse, niveau de carburant et kilométrage. Ma responsabilité : la couche d'ingestion et de stockage — Kafka pour les flux de télémétrie en direct, Flume et Sqoop pour la collecte et les données de référence, HDFS pour le stockage brut, Hive pour l'analyse de l'historique, et HBase pour les lectures rapides par véhicule, comme la dernière position connue. Mes coéquipiers construisent le traitement Spark Streaming avec un modèle ML de recommandation de prix, ainsi que l'API Spring Boot et les écrans React. Toute la plateforme tourne sous Docker.",
        tags: ["Kafka", "Flume", "Sqoop", "HDFS", "Hive", "HBase", "Spark", "Docker"],
        image: "/projects/fleetsense.svg",
        highlights: [
          "Couche ingestion et stockage : Kafka, Flume, Sqoop, HDFS, Hive, HBase",
          "Lectures par clé HBase pour la dernière position de chaque véhicule",
          "Analyses Hive sur tout l'historique de télémétrie",
          "Équipe de trois, plateforme entièrement conteneurisée avec Docker",
        ],
        challenge:
          "Séparer le stockage selon le type d'accès : l'historique va dans HDFS/Hive, mais « où est ce véhicule maintenant ? » exige les lectures rapides par clé de HBase — un seul stockage pour les deux serait lent sur l'un des deux.",
      },
      {
        id: "shop-analytics-platform",
        title: "Shop Analytics Platform",
        category: "fullstack",
        featured: true,
        summary: "Plateforme e-commerce terminée avec authentification JWT, gestion des produits et des commandes, analytique des ventes avec Spark et flux de démonstration.",
        description:
          "Une petite boutique en ligne construite de bout en bout : une API REST Spring Boot avec authentification JWT et DTO validés, un stockage PostgreSQL, un frontend Next.js avec catalogue produits, gestion des commandes et tableau de bord statistique, et un job PySpark qui calcule le chiffre d'affaires par catégorie à partir des ventes. L'ensemble tourne aussi sous Docker Compose avec un profil Hadoop HDFS optionnel, avec des tests backend, une CI GitHub Actions et un flux de données de démonstration avec une connexion démo.",
        tags: ["Spring Boot", "Next.js", "TypeScript", "PostgreSQL", "Apache Spark", "HDFS", "JWT", "Tailwind CSS", "Docker", "GitHub Actions"],
        githubUrl: "https://github.com/aminebouaouda02/shop-analytics-platform",
        image: "/projects/shop-analytics.png",
        highlights: [
          "Inscription et connexion JWT avec routes protégées dans Spring Security et Next.js",
          "CRUD complet des produits et des commandes avec validation côté serveur et totaux calculés",
          "Indicateurs du tableau de bord calculés en direct : produits, commandes, revenus et alertes de stock faible",
          "Job batch PySpark calculant le chiffre d'affaires total par catégorie",
          "Docker Compose avec un profil Hadoop HDFS + Spark optionnel",
          "Données de démonstration et connexion démo, avec une CI qui lance les tests backend et le build frontend",
        ],
        challenge:
          "Tailwind CSS était dans les dépendances dès le premier jour mais n'a jamais été réellement configuré, donc la première interface s'affichait sans styles. J'ai remonté le problème jusqu'aux fichiers tailwind.config.js et postcss.config.js manquants, puis reconstruit toute l'interface.",
      },
      {
        id: "pfe-internship-manager",
        title: "PFE Internship Manager",
        category: "fullstack",
        featured: true,
        summary: "Plateforme terminée pour gérer les offres de stage PFE et les candidatures des étudiants, avec des statistiques Spark et un flux de démonstration.",
        description:
          "Une plateforme web qui gère les stages de fin d'études (PFE) de bout en bout : les entreprises publient des offres, les étudiants candidatent en ligne, les encadrants examinent les candidatures et modifient leur statut, et Apache Spark calcule des statistiques comme les compétences les plus demandées à partir des candidatures. API Spring Boot avec sécurité JWT et frontend Next.js. Elle tourne aussi sous Docker Compose avec un profil Hadoop HDFS optionnel, avec des tests backend, une CI GitHub Actions et un flux de données de démonstration avec des connexions démo étudiant et encadrant.",
        tags: ["Spring Boot", "Next.js", "TypeScript", "PostgreSQL", "Apache Spark", "HDFS", "JWT", "Tailwind CSS", "Docker", "GitHub Actions"],
        githubUrl: "https://github.com/aminebouaouda02/pfe-internship-manager",
        image: "/projects/pfe-internship-manager.png",
        highlights: [
          "Offres de stage avec recherche, filtrage par compétences et création, modification et suppression complètes",
          "Candidatures en ligne avec un workflow de statuts : PENDING, ACCEPTED, REJECTED",
          "Authentification JWT avec pages protégées pour les étudiants et les encadrants",
          "Job Spark calculant les statistiques des candidatures, par exemple les compétences les plus demandées",
          "Docker Compose avec un profil Hadoop HDFS + Spark optionnel",
          "Données de démonstration et connexions démo, avec une CI qui lance les tests backend et le build frontend",
        ],
        challenge:
          "Modéliser le workflow des statuts de candidature pour qu'un changement de statut soit une transition unique et validée côté serveur — l'API le met à jour via PUT /api/applications/{id}/status et l'interface le reflète immédiatement.",
      },
      {
        id: "hr-mobile-app",
        title: "Plateforme Mobile de Gestion RH (PFE)",
        category: "fullstack",
        featured: false,
        summary: "Application de gestion RH réalisée chez GM-Soft : demandes de congés avec circuit de validation responsable puis RH, soldes de congés et accès par rôles.",
        description:
          "Projet de fin d'études (PFE) réalisé pour GM-Soft IT Solutions. Une application complète de gestion des ressources humaines : dossiers des employés, demandes de congés et d'absences suivant un circuit de validation (employé, puis responsable, puis RH), soldes de congés suivis par employé, et accès par rôles pour les administrateurs RH, les responsables et les employés. Application mobile Flutter multiplateforme adossée à une API REST Laravel et une base de données relationnelle.",
        tags: ["Flutter", "Dart", "Laravel", "PHP", "MySQL", "API REST"],
        image: "/projects/hr-mobile-app.svg",
        highlights: [
          "Demandes de congés avec circuit de validation employé → responsable → RH",
          "Soldes de congés suivis par employé",
          "Trois rôles aux permissions distinctes : admin RH, responsable, employé",
          "Application mobile Flutter sur une API REST Laravel",
        ],
        challenge:
          "Modéliser les règles de congés — soldes, étapes de validation, rôles — pour qu'une demande ne puisse jamais sauter une étape ni dépasser un solde, de façon cohérente entre l'application mobile et l'API.",
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
        id: "cert-datacamp-pandas",
        title: "Manipulation de données avec pandas",
        issuer: "DataCamp",
        date: "septembre 2026",
        skills: ["Python", "pandas", "Manipulation de données"],
      },
      {
        id: "cert-ai-career-readiness",
        title: "AI Career Readiness",
        issuer: "ASEAN Digital Academy",
        date: "octobre 2026",
        skills: ["Fondamentaux de l'IA", "Préparation professionnelle"],
      },
      {
        id: "cert-efset-english",
        title: "Certificat d'anglais EF SET — B1 Intermédiaire",
        issuer: "EF SET",
        date: "octobre 2026",
        skills: ["Lecture anglaise C2", "Rédaction anglaise B2"],
      },
      {
        id: "cert-opencv-vlm",
        title: "Bootcamp Vision Language Models (VLM) — Certificat d'Excellence (100 %)",
        issuer: "OpenCV University",
        date: "novembre 2026",
        skills: ["Modèles vision-langage", "IA multimodale", "Vision par ordinateur"],
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
        cmdHadoop: "Où j'utilise Hadoop & Spark dans mes projets",
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
