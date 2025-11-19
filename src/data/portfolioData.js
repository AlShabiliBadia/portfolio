export const projectsData = [
  {
    title: "Kandidate: Event-Driven AI Analysis Engine",
    description: "Architected a distributed, self-hosted ATS backend designed for zero-cost infrastructure. Built an Event-Driven Microservices system using RabbitMQ to decouple high-latency AI processing. Implemented a custom Hybrid Threading Model to run API servers and Queue Consumers in single containers, optimizing RAM usage. Features Polyglot Persistence (syncing MongoDB to PostgreSQL) and Deterministic AI analysis using Gemini and Instructor.",
    tags: ["FastAPI", "RabbitMQ", "Microservices", "Docker", "Gemini AI", "MongoDB", "PostgreSQL"],
    repoUrl: "https://github.com/AlShabiliBadia/kandidate"
  },
  {
    title: "V2 Re-architecture: Keyword-Driven E2E Framework",
    description: "This project is a complete architectural overhaul of an existing Playwright/Pytest suite, transforming it into a highly scalable, maintainable system. All tests are now driven by Pydantic-validated JSON pipelines, eliminating code duplication and abstracting locators from non-technical test scenarios.",
    tags: ["Python", "Playwright", "Pytest", "Pydantic", "JSON Schema", "Keyword-Driven Testing"],
    repoUrl: "https://github.com/AlShabiliBadia/saucedemo-playwright-e2e-v2"
  },
  {
    title: "E2E Test Automation Framework",
    description: "A scalable E2E test framework built with Playwright for the SauceDemo e-commerce site. It features data-driven testing from external JSON files to validate comprehensive user flows like login, sorting, and full checkout. The entire pipeline is automated with GitHub Actions, which runs the Pytest suite and deploys a live Allure test report.",
    tags: ["Python", "Playwright", "Pytest", "Allure Reports", "GitHub Actions"],
    repoUrl: "https://github.com/AlShabiliBadia/saucedemo-playwright-e2e"
  },
  {
    title: "API Test Suite (URL Shortener)",
    description: "A dedicated Pytest suite for the URL Shortener API. It uses `httpx` to perform black-box testing, validating all API endpoints for correct response codes, JSON schemas, and business logic for all CRUD (Create, Read, Update, Delete) operations.",
    tags: ["Python", "Pytest", "HTTPX"],
    repoUrl: "https://github.com/AlShabiliBadia/Shorter-links/tree/main/tests"
  },
  {
    title: "AI-Powered Data Enrichment Pipeline",
    description: "An automated Python script that enriches spreadsheets with missing data using the Google Gemini AI. The tool reads an Excel file, identifies rows needing information, and processes them in batches. It uses Pydantic for strict JSON schema validation and advanced prompt engineering to force the AI to act as a data scientist, find nutritional data, and cite its sources.",
    tags: ["Python", "Google Gemini API", "Pydantic", "Openpyxl", "Docker"],
    repoUrl: null
  },
  {
    title: "Software Verification & Validation Project",
    description: "An academic project demonstrating the principles of software quality assurance. Applied various black-box and white-box testing techniques to a Python codebase to identify bugs, improve test coverage, and formally validate all software requirements.",
    tags: ["Python", "Pytest", "Software Testing Methodologies"],
    repoUrl: "https://github.com/AlShabiliBadia/SVV-Assignment"
  },
  {
    title: "SQL Practice & Data Validation",
    description: "A repository of SQL solutions for various data challenges. Demonstrates practical skills in querying, complex joins, subqueries, and data aggregation, which are essential for backend data validation in a QA role.",
    tags: ["SQL", "PostgreSQL", "MySQL"],
    repoUrl: "https://github.com/AlShabiliBadia/practice-sql"
  },
  {
    title: "URL Shortener",
    description: "A high-performance backend application built with FastAPI that generates, manages, and redirects short URLs. The service uses SQLAlchemy for database operations and is containerized with Docker for easy deployment.",
    tags: ["Python", "FastAPI", "SQLAlchemy", "Docker"],
    repoUrl: "https://github.com/AlShabiliBadia/Shorter-links"
  },
  {
    title: "(FYP) Calculating Paper: Android Math Notepad",
    description: "A native Android application built for my Final Year Project to merge mathematical calculations with note-taking. The app features a robust mathematical engine for in-note calculations, a custom math keyboard, and interactive graphing from expressions. It includes advanced note/folder management (pinning, archiving, nesting), local RoomDB persistence, JSON backup/restore, and real-time cloud synchronization using Google Sign-In and Firestore.",
    tags: ["Kotlin", "Jetpack Compose", "MVVM", "RoomDB", "Firebase"],
    repoUrl: "https://github.com/AlShabiliBadia/CalculatingPaper-fyp"
  }
];

export const experienceData = [
  {
    role: "QA Automation Intern",
    company: "12u12 Sdn Bhd - Selangor",
    date: "July 2025 – Present",
    points: [
      "Led the QA automation effort and mentored a junior interns, scaling the active suite to nearly 1,400 UI tests by debugging legacy code and delivering nearly 1,000 new cases.",
      "Re-architected the testing stack to replace the script-based suite with a modular Data-Driven engine, using Pydanticvalidated JSON pipelines to decouple data from logic and enable cross-platform support.",
      "Optimized test execution time from 3–4 minutes down to 4–6 seconds per case by implementing intelligent caching and modular data design.",
      "Developed an internal tool using Gemini AI to automatically extract and validate nutritional data, replacing manual data entry."
    ]
  },
  {
    role: "Web Development Intern",
    company: "ICT Center - Kajang, Selangor",
    date: "March 2022 – June 2022",
    points: [
      "Developed a full-stack IP management web application from scratch using the Laravel framework.",
      "Engineered the backend, implementing all CRUD functionalities."
    ]
  }
];
