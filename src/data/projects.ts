export interface ProjectLink {
  label: string;
  href: string;
  type: 'github' | 'external' | 'demo';
  private?: boolean;
}

export interface TechItem {
  name: string;
  description?: string;
}

export interface TechGroup {
  label: string;
  items: TechItem[];
}

export interface Feature {
  title: string;
  description: string;
  image?: string;
}

export interface EngineeringDecision {
  challenge: string;
  decision: string;
  why: string;
}

export interface GalleryImage {
  src: string;
  caption?: string;
}

export interface FlowStep {
  label: string;
  detail?: string;
}

export interface Responsibility {
  area: string;
  detail: string;
}

export interface ResultItem {
  label: string;
  value: string;
  description?: string;
}

export interface ProjectSection {
  heading: string;
  body: string;
}

export interface Project {
  slug: string;
  title: string;
  shortTitle: string;
  tagline: string;
  description: string;
  categories: string[];
  projectType: string;
  year: string;
  image: string;
  imageAspect?: string;
  heroImage?: string;
  heroImageAspect?: string;
  architectureImage?: string;
  featured: boolean;
  featuredLayout?: 'full' | 'large-left' | 'large-right';
  technologies: string[];
  techGroups?: TechGroup[];
  links: ProjectLink[];
  overview: string;
  whatIBuilt: string[];
  role: string;
  responsibilities?: Responsibility[];
  architectureNotes?: string;
  sections?: ProjectSection[];
  flowSteps?: FlowStep[];
  features?: Feature[];
  engineeringDecisions?: EngineeringDecision[];
  gallery?: GalleryImage[];
  results?: ResultItem[];
  duration?: string;
  team?: string;
  status?: string;
  youtubeVideoIds?: string[];
  relatedProjectSlugs?: string[];
}

export const projects: Project[] = [
  {
    slug: 'stb-baas',
    title: 'STB — Banking as a Service',
    shortTitle: 'STB BaaS',
    tagline: 'An Open Banking platform that exposes STB banking services to FinTechs through secure, modular APIs.',
    description:
      'A Banking-as-a-Service platform developed during a PFE internship at STB Bank. .NET 8 microservices expose account, card, ATM, authentication, and notification capabilities to FinTech consumers through a Kong API gateway, with a companion Angular 16 portal for registration, API keys, service offers, and documentation.',
    categories: ['Backend', 'Architecture', 'DevOps'],
    projectType: 'Banking / Fintech',
    year: '2025',
    image: '/images/projects/stb-baas/cover.png',
    heroImage: '/images/projects/stb-baas/cover.png',
    heroImageAspect: 'aspect-[1061/661]',
    featured: true,
    featuredLayout: 'large-left',
    technologies: [
      '.NET 8', 'Angular 16', 'RabbitMQ', 'gRPC', 'Kong / Konga',
      'PostgreSQL', 'MySQL', 'MongoDB', 'Redis',
      'Docker', 'Kubernetes', 'NGINX', 'OVH VPS',
      'JWT / OAuth', 'UFW', 'Fail2ban', 'Let’s Encrypt', 'Cloudflare',
      'Swagger', 'Elastic / Kibana', 'Prometheus / Grafana',
    ],
    techGroups: [
      {
        label: 'Backend',
        items: [
          { name: '.NET 8', description: 'Core service framework' },
          { name: 'C#', description: 'Primary language' },
        ],
      },
      {
        label: 'Frontend',
        items: [
          { name: 'Angular 16', description: 'FinTech onboarding and API consumer portal' },
          { name: 'TypeScript', description: 'Frontend application development' },
        ],
      },
      {
        label: 'Messaging',
        items: [
          { name: 'RabbitMQ', description: 'Event-driven async communication' },
          { name: 'gRPC', description: 'High-performance inter-service calls' },
        ],
      },
      {
        label: 'API Gateway & Security',
        items: [
          { name: 'Kong / Konga', description: 'API routing, consumer access, and gateway management' },
          { name: 'JWT / OAuth', description: 'Authentication and authorization flows' },
          { name: 'TLS / SSL', description: 'HTTPS certificate configuration' },
        ],
      },
      {
        label: 'Data',
        items: [
          { name: 'PostgreSQL', description: 'Accounts & transactional data' },
          { name: 'MySQL', description: 'Branches & ATM data' },
          { name: 'MongoDB', description: 'Notifications & document data' },
          { name: 'Redis', description: 'Caching & session state' },
        ],
      },
      {
        label: 'Deployment & VPS Security',
        items: [
          { name: 'Docker / Kubernetes', description: 'Containerization and orchestration' },
          { name: 'OVH VPS', description: 'Remote deployment environment' },
          { name: 'UFW / fail2ban', description: 'Firewall and intrusion protection' },
          { name: 'Cloudflare / Let’s Encrypt', description: 'DNS and HTTPS setup' },
          { name: 'NGINX', description: 'Web server and ingress' },
        ],
      },
      {
        label: 'Observability',
        items: [
          { name: 'Prometheus', description: 'Metrics collection' },
          { name: 'Grafana', description: 'Dashboards & alerting' },
          { name: 'Elastic / Kibana', description: 'Log aggregation & search' },
        ],
      },
    ],
    links: [
      {
        label: 'Project report (PDF)',
        href: 'https://drive.google.com/file/d/1Ei4k9As4IXJCbTK3siqspKTGOIH3NxgJ/view?usp=sharing',
        type: 'external',
      },
      {
        label: 'GitHub repository',
        href: 'https://github.com/GABSIWAEL/open-banking-baas-platform',
        type: 'github',
      },
    ],
    overview:
      'Completed as a PFE internship at STB Bank, this project makes selected banking capabilities available to FinTech consumers through an Open Banking API platform. .NET 8 services cover accounts, branches, cards, ATMs, authentication, and notifications. FinTech users can register, log in, manage API keys, explore service offers, and download API documentation from an Angular 16 portal. Kong provides the API entry point, while RabbitMQ and gRPC support asynchronous events and synchronous service-to-service communication.',
    whatIBuilt: [
      'Developed .NET 8 microservices for accounts, branches, cards, ATMs, authentication, and notifications',
      'Built an Angular 16 FinTech portal with account registration, login, API-key management, service offers, and documentation downloads',
      'Provided API documentation and a reusable helper for integrating FinTech applications',
      'Integrated the services with Kong/Konga, configuring routes, consumer access, authentication, and rate limiting',
      'Connected services with RabbitMQ for asynchronous events and gRPC for synchronous calls',
      'Used PostgreSQL, MySQL, MongoDB, and Redis to support service-specific data needs',
      'Added observability with Prometheus, Grafana, Elasticsearch, and Kibana',
      'Containerized and deployed the platform using Docker and Kubernetes on an OVH VPS',
      'Configured VPS protections and public access, including UFW, fail2ban, DNS, Cloudflare, and Let’s Encrypt SSL',
    ],
    role: 'Software Engineering — Backend / Open Banking (PFE Internship at STB Bank)',
    status: 'Internship / PFE',
    responsibilities: [
      { area: 'Microservices', detail: 'Developed .NET 8 services for accounts, branches, cards, ATMs, authentication, and notifications' },
      { area: 'FinTech Portal', detail: 'Built Angular 16 user flows for registration, login, API-key management, service discovery, and API documentation' },
      { area: 'Inter-service Communication', detail: 'Implemented asynchronous RabbitMQ event flows and synchronous gRPC communication' },
      { area: 'API Gateway & Security', detail: 'Integrated services with Kong/Konga and configured routing, consumer access, authentication, and rate limiting' },
      { area: 'Data & Observability', detail: 'Worked with PostgreSQL, MySQL, MongoDB, Redis, Prometheus, Grafana, Elasticsearch, and Kibana' },
      { area: 'Deployment & VPS Security', detail: 'Containerized and deployed on OVH using Docker/Kubernetes, with UFW, fail2ban, DNS, and SSL configuration' },
    ],
    architectureNotes:
      'The platform separates banking capabilities into .NET 8 microservices and uses PostgreSQL, MySQL, MongoDB, and Redis for service-specific data. Kong is the external API gateway, RabbitMQ carries asynchronous events, and gRPC supports synchronous inter-service calls. Angular 16 provides the FinTech consumer portal. Docker and Kubernetes support deployment, while Prometheus/Grafana and Elasticsearch/Kibana provide monitoring and log search.',
    sections: [
      {
        heading: 'Open Banking and FinTech access',
        body: 'The platform exposes account, card, ATM, and related services to external FinTech consumers through a managed API layer. A companion Angular portal supports FinTech registration, login, API-key management, service discovery, and API documentation downloads.',
      },
      {
        heading: 'Microservices and communication',
        body: 'Banking capabilities are split into .NET 8 services for accounts, branches, cards, ATMs, authentication, and notifications. Services communicate synchronously through gRPC and asynchronously through RabbitMQ.',
      },
      {
        heading: 'Gateway, security, and operations',
        body: 'Kong/Konga provides API routing, consumer access, authentication, and rate limiting. The application was containerized and deployed on an OVH VPS, with UFW, fail2ban, DNS, Cloudflare, and Let’s Encrypt SSL configuration. Prometheus/Grafana and Elasticsearch/Kibana support monitoring and log analysis.',
      },
      {
        heading: 'Incremental delivery',
        body: 'The project followed Scrum, with an initial analysis and specification phase followed by eight implementation sprints covering the services, integration, gateway, authentication, deployment, and monitoring.',
      },
    ],
    flowSteps: [
      { label: 'FinTech portal', detail: 'Register, sign in, and manage API keys' },
      { label: 'Discover', detail: 'Browse banking service offers and API documentation' },
      { label: 'Kong gateway', detail: 'Route requests and enforce access policies' },
      { label: '.NET services', detail: 'Accounts, branches, cards, ATMs, auth, notifications' },
      { label: 'Service communication', detail: 'RabbitMQ events and gRPC calls' },
      { label: 'Operate', detail: 'Docker/Kubernetes, OVH VPS, and monitoring' },
    ],
    features: [
      { title: 'Open Banking Services', description: 'Microservices expose account, branch, card, ATM, authentication, and notification capabilities.' },
      { title: 'FinTech Consumer Portal', description: 'Angular 16 flows for FinTech registration, login, API-key management, service offers, and documentation.' },
      { title: 'Kong API Gateway', description: 'Centralized routes and consumer access with authentication and rate limiting managed through Kong/Konga.' },
      { title: 'Service Communication', description: 'RabbitMQ supports asynchronous events, while gRPC handles synchronous inter-service calls.' },
      { title: 'Service-Specific Data Stores', description: 'PostgreSQL, MySQL, MongoDB, and Redis support the platform’s data requirements.' },
      { title: 'Monitoring & Logs', description: 'Prometheus and Grafana provide metrics and dashboards; Elasticsearch and Kibana support log search.' },
      { title: 'VPS Deployment & Security', description: 'Docker/Kubernetes deployment on OVH with UFW, fail2ban, DNS, Cloudflare, and Let’s Encrypt SSL.' },
    ],
    engineeringDecisions: [
      {
        challenge: 'Services needed to communicate without creating tight coupling.',
        decision: 'Use asynchronous messaging with RabbitMQ for event-driven flows.',
        why: 'This allows services to communicate through events and reduces direct dependencies — a service can publish an event without knowing which consumers will handle it.',
      },
      {
        challenge: 'Some inter-service calls required low latency and strong typing.',
        decision: 'Use gRPC for synchronous inter-service communication.',
        why: 'gRPC provides binary serialization, contract-first design, and significantly lower latency than REST for internal calls.',
      },
      {
        challenge: 'Each service had different data access patterns.',
        decision: 'Give each service its own database, selected by access pattern.',
        why: 'PostgreSQL for transactional consistency (accounts), MySQL for branch/ATM data, MongoDB for notification documents. This avoids a single bottleneck and lets each service optimize independently.',
      },
      {
        challenge: 'The platform needed a single entry point with consistent security policies.',
        decision: 'Place Kong as the API gateway in front of all services.',
        why: 'Kong centralizes routing, authentication, rate limiting, and monitoring — services stay focused on business logic rather than cross-cutting concerns.',
      },
    ],
    gallery: [
      { src: '/images/projects/stb-baas/screenshot-01.png', caption: 'RabbitMQ management dashboard' },
      { src: '/images/projects/stb-baas/screenshot-02.png', caption: 'Notification service running on the VPS' },
      { src: '/images/projects/stb-baas/screenshot-03.png', caption: 'Docker containers deployed on the VPS' },
      { src: '/images/projects/stb-baas/screenshot-04.png', caption: 'Elasticsearch and Kibana log monitoring' },
    ],
    results: [
      { label: 'Services', value: '6', description: 'Independent microservices deployed' },
      { label: 'Databases', value: '4', description: 'Per-service data stores' },
      { label: 'Technologies', value: '17+', description: 'Across backend, infra, and observability' },
    ],
    youtubeVideoIds: ['_amPrTVHUaY', 't9DFDJA5xdA', 'n7eY6gRtGdc'],
    relatedProjectSlugs: ['ai-customer-support', 'saas-erp'],
  },
  {
    slug: 'ai-customer-support',
    title: 'AI Customer Support Platform',
    shortTitle: 'AI Support',
    tagline: 'An AI-powered customer support platform providing contextual assistance using client-specific data.',
    description:
      'A customer support platform that uses LLaMA 3.1 with client-specific context to provide accurate, contextual responses — backed by .NET APIs and full observability.',
    categories: ['AI', 'Backend', 'DevOps'],
    projectType: 'AI / SaaS',
    year: '2024',
    image: '/images/projects/ai-customer-support.jpg',
    heroImage: '/images/projects/ai-customer-support/hero.jpg',
    featured: true,
    featuredLayout: 'large-left',
    technologies: [
      'LLaMA 3.1', '.NET', 'Angular', 'Docker', 'NGINX',
      'RabbitMQ', 'Prometheus', 'Grafana', 'Elastic',
    ],
    techGroups: [
      {
        label: 'AI',
        items: [
          { name: 'LLaMA 3.1', description: 'Core LLM for contextual responses' },
        ],
      },
      {
        label: 'Backend',
        items: [
          { name: '.NET', description: 'API layer & service logic' },
          { name: 'C#', description: 'Primary language' },
        ],
      },
      {
        label: 'Frontend',
        items: [
          { name: 'Angular', description: 'Agent & user interface' },
          { name: 'TypeScript', description: 'Frontend type safety' },
        ],
      },
      {
        label: 'Messaging',
        items: [
          { name: 'RabbitMQ', description: 'Async processing for model calls' },
        ],
      },
      {
        label: 'Infrastructure',
        items: [
          { name: 'Docker', description: 'Containerization' },
          { name: 'NGINX', description: 'Reverse proxy' },
        ],
      },
      {
        label: 'Observability',
        items: [
          { name: 'Prometheus', description: 'System & model metrics' },
          { name: 'Grafana', description: 'Dashboards & alerting' },
          { name: 'Elastic', description: 'Log aggregation & search' },
        ],
      },
    ],
    links: [],
    overview:
      'An AI-powered support platform that leverages LLaMA 3.1 to deliver contextual, client-specific responses. The system ingests client data, builds a context layer, and routes queries through an API layer to the model — with full monitoring and observability.',
    whatIBuilt: [
      'Integrated LLaMA 3.1 as the core LLM with client-specific context injection',
      'Built the .NET API layer handling query routing and context management',
      'Designed the Angular frontend for support agents and end users',
      'Set up Docker-based deployment with NGINX reverse proxy',
      'Implemented monitoring with Prometheus, Grafana, and Elastic',
      'Used RabbitMQ for async processing of longer-running model calls',
    ],
    role: 'Full-stack Engineering — AI / Backend',
    duration: '[Add project duration]',
    team: '[Add team size]',
    status: '[Add project status]',
    responsibilities: [
      { area: 'AI Integration', detail: 'Integrated LLaMA 3.1 with client-specific context injection' },
      { area: 'API Architecture', detail: 'Built .NET API layer for query routing and context management' },
      { area: 'Context Retrieval', detail: 'Designed the context layer from client data' },
      { area: 'Frontend', detail: 'Built Angular interface for support agents and end users' },
      { area: 'Async Processing', detail: 'Used RabbitMQ workers for long-running model calls' },
      { area: 'Monitoring', detail: 'Set up Prometheus, Grafana, and Elastic for system and model observability' },
      { area: 'Deployment', detail: 'Docker-based deployment with NGINX reverse proxy' },
    ],
    sections: [
      {
        heading: 'Context layer',
        body: 'Client-specific data is processed and structured into a context layer that feeds the model. This ensures responses are grounded in the client\'s domain rather than generic.',
      },
      {
        heading: 'API layer',
        body: '.NET APIs handle authentication, query routing, context assembly, and model invocation. Long-running calls are offloaded to RabbitMQ workers.',
      },
      {
        heading: 'Observability',
        body: 'Prometheus and Grafana track system health and model performance. Elastic provides log aggregation and search across all API calls and model interactions.',
      },
    ],
    flowSteps: [
      { label: 'User', detail: 'Submits a support query' },
      { label: 'API', detail: '.NET — auth & routing' },
      { label: 'Context', detail: 'Client-specific context assembly' },
      { label: 'Model', detail: 'LLaMA 3.1 inference' },
      { label: 'Response', detail: 'Contextual answer returned' },
      { label: 'Monitor', detail: 'Prometheus + Elastic' },
    ],
    features: [
      { title: 'Contextual AI Responses', description: 'LLaMA 3.1 grounded in client-specific data for domain-accurate answers.' },
      { title: 'Async Model Processing', description: 'RabbitMQ workers handle long-running model calls without blocking the API.' },
      { title: 'Client Context Layer', description: 'Structured context from client data ensures responses are relevant, not generic.' },
      { title: 'Full Observability', description: 'Prometheus, Grafana, and Elastic track system health and model performance.' },
      { title: 'Containerized Deployment', description: 'Docker and NGINX for consistent deployment and traffic management.' },
    ],
    engineeringDecisions: [
      {
        challenge: 'Model inference can take several seconds, blocking API responses.',
        decision: 'Offload long-running model calls to RabbitMQ workers.',
        why: 'This keeps the API responsive — the client gets an acknowledgment immediately, and results are delivered when the model finishes processing.',
      },
      {
        challenge: 'Generic LLM responses were not useful for client-specific support.',
        decision: 'Build a context layer from client data before model invocation.',
        why: 'Grounding the model in client-specific context ensures answers are accurate and relevant to the client\'s domain.',
      },
    ],
    gallery: [
      { src: '/images/projects/ai-customer-support/interface.jpg', caption: 'Support agent interface' },
      { src: '/images/projects/ai-customer-support/architecture.jpg', caption: 'AI architecture diagram' },
      { src: '/images/projects/ai-customer-support/monitoring.jpg', caption: 'Model monitoring dashboard' },
    ],
    youtubeVideoIds: [],
    relatedProjectSlugs: ['stb-baas', 'saas-erp'],
  },
  {
    slug: 'permis-maroc',
    title: 'PermisMaroc',
    shortTitle: 'PermisMaroc',
    tagline: 'A digital learning platform for driving education and road regulations.',
    description:
      'A shipped product — a learning platform for driving education and road regulations, supporting both learners and administration.',
    categories: ['Frontend', 'Backend', 'Education'],
    projectType: 'Web Platform / Education',
    year: '2023',
    image: '/images/projects/permis-maroc.jpg',
    heroImage: '/images/projects/permis-maroc/hero.jpg',
    featured: true,
    featuredLayout: 'large-right',
    technologies: ['Spring Boot', 'Angular', 'PHP', 'Jenkins', 'Cloudflare'],
    techGroups: [
      {
        label: 'Backend',
        items: [
          { name: 'Spring Boot', description: 'Core backend framework' },
          { name: 'PHP', description: 'Legacy system compatibility' },
        ],
      },
      {
        label: 'Frontend',
        items: [
          { name: 'Angular', description: 'Learner & admin interface' },
          { name: 'TypeScript', description: 'Frontend type safety' },
        ],
      },
      {
        label: 'CI/CD',
        items: [
          { name: 'Jenkins', description: 'Automated build & deployment pipeline' },
        ],
      },
      {
        label: 'Infrastructure',
        items: [
          { name: 'Cloudflare', description: 'CDN, WAF, and DDoS protection' },
        ],
      },
    ],
    links: [
      { label: 'Live', href: 'https://permismaroc.com', type: 'external' },
    ],
    overview:
      'PermisMaroc is a live, production platform for driving education in Morocco. Learners can study road regulations, take practice tests, and track their progress. The administration side manages content and user data.',
    whatIBuilt: [
      'Built the learning platform with Spring Boot backend and Angular frontend',
      'Implemented practice test engine and progress tracking',
      'Set up CI/CD with Jenkins for automated deployments',
      'Configured Cloudflare for CDN, security, and performance',
      'Integrated PHP components for legacy system compatibility',
    ],
    role: 'Full-stack Development',
    duration: '[Add project duration]',
    team: '[Add team size]',
    status: 'Live / Production',
    responsibilities: [
      { area: 'Backend Development', detail: 'Built the Spring Boot backend for the learning platform' },
      { area: 'Frontend Development', detail: 'Created the Angular interface for learners and administration' },
      { area: 'Test Engine', detail: 'Implemented the practice test engine and progress tracking system' },
      { area: 'CI/CD', detail: 'Set up Jenkins pipeline for automated builds and deployments' },
      { area: 'Infrastructure', detail: 'Configured Cloudflare for CDN, security, and performance' },
      { area: 'Legacy Integration', detail: 'Integrated PHP components for legacy system compatibility' },
    ],
    sections: [
      {
        heading: 'Product',
        body: 'A live platform serving real learners. The focus was on reliability, content accuracy, and a clean learning experience.',
      },
      {
        heading: 'Delivery',
        body: 'Jenkins pipeline handles builds and deployments. Cloudflare sits in front for caching, WAF, and DDoS protection.',
      },
    ],
    flowSteps: [
      { label: 'Learner', detail: 'Accesses the platform' },
      { label: 'Study', detail: 'Road regulations content' },
      { label: 'Practice Test', detail: 'Test engine & scoring' },
      { label: 'Progress', detail: 'Tracking & analytics' },
      { label: 'Admin', detail: 'Content management' },
    ],
    features: [
      { title: 'Practice Test Engine', description: 'Interactive tests with scoring, feedback, and progress tracking for learners.' },
      { title: 'Content Management', description: 'Admin interface for managing educational content and road regulations.' },
      { title: 'Automated CI/CD', description: 'Jenkins pipeline for consistent builds and deployments.' },
      { title: 'CDN & Security', description: 'Cloudflare provides caching, WAF, and DDoS protection at the edge.' },
    ],
    gallery: [
      { src: '/images/projects/permis-maroc/learner.jpg', caption: 'Learner interface' },
      { src: '/images/projects/permis-maroc/tests.jpg', caption: 'Practice test engine' },
      { src: '/images/projects/permis-maroc/admin.jpg', caption: 'Admin content management' },
    ],
    youtubeVideoIds: ['n7eY6gRtGdc', 'W-X32NvRFs4'],
    relatedProjectSlugs: ['stb-baas', 'campusone'],
  },
  {
    slug: 'saas-erp',
    title: 'SaaS ERP',
    shortTitle: 'SaaS ERP',
    tagline: 'A modular ERP platform for managing employee lifecycles and everyday HR operations.',
    description:
      'An HR and business management system covering employees, departments, attendance, leave, payroll, recruitment, assets, performance, and organizational workflows.',
    categories: ['HR', 'Backend', 'Enterprise'],
    projectType: 'Enterprise / HR Management',
    year: '2024',
    image: '/images/projects/saas-erp/cover.jpg',
    heroImage: '/images/projects/saas-erp/cover.jpg',
    featured: true,
    featuredLayout: 'large-left',
    technologies: ['Java 17', 'Spring Boot 3.2', 'Spring Security', 'JWT', 'PostgreSQL', 'Spring Data JPA', 'Hibernate', 'Maven', 'Docker Compose'],
    techGroups: [
      {
        label: 'Backend',
        items: [
          { name: 'Java 17', description: 'Backend programming language' },
          { name: 'Spring Boot 3.2', description: 'Modular REST API' },
          { name: 'Maven', description: 'Build and dependency management' },
        ],
      },
      {
        label: 'Security',
        items: [
          { name: 'Spring Security', description: 'API authentication and authorization' },
          { name: 'JWT', description: 'Stateless authentication' },
          { name: 'Role-based access', description: 'Permissions for administrator, HR, manager, and employee roles' },
        ],
      },
      {
        label: 'Data & Deployment',
        items: [
          { name: 'PostgreSQL', description: 'Relational database' },
          { name: 'Spring Data JPA / Hibernate', description: 'Persistence and ORM' },
          { name: 'Docker Compose', description: 'Local application and database services' },
        ],
      },
    ],
    links: [
      {
        label: 'GitHub repository',
        href: 'https://github.com/GABSIWAEL/erp-management-platform',
        type: 'github',
      },
    ],
    overview:
      'A modular HR and business management platform that centralizes employee records and organizational processes. It supports the employee lifecycle from recruitment and onboarding through attendance, leave, payroll, performance, asset management, and offboarding. The backend is a Java 17 and Spring Boot 3.2 REST API backed by PostgreSQL, with JWT authentication and role-based authorization. Docker Compose can start the backend, frontend, and database together.',
    whatIBuilt: [
      'Structured the backend into modules for employees, departments, attendance, leave, payroll, recruitment, performance, assets, remote work, warnings, employee exits, holidays, events, and security',
      'Implemented JWT authentication and role-based authorization for administrator, HR, manager, and employee access',
      'Built HR workflows and business rules for leave balances, overlapping requests, holiday-aware calculations, payroll, and attendance-related warnings',
      'Connected recruitment decisions to employee onboarding, including converting accepted candidates into employee records',
      'Implemented asset assignment and return flows, including their connection to employee offboarding',
      'Added audit tracking for important system actions',
      'Configured the application and PostgreSQL for local startup with Docker Compose',
    ],
    role: 'ERP Platform Development',
    status: 'Educational / Portfolio Project',
    responsibilities: [
      { area: 'Domain Modules', detail: 'Organized the platform around HR and business domains, from employee and department management to events and audit' },
      { area: 'Business Workflows', detail: 'Implemented recruitment, leave, attendance, payroll, asset, remote-work, and employee-exit workflows' },
      { area: 'Security', detail: 'Protected REST endpoints with Spring Security, JWT authentication, and role-based authorization' },
      { area: 'Persistence', detail: 'Used PostgreSQL with Spring Data JPA and Hibernate' },
      { area: 'Application Setup', detail: 'Prepared Docker and Docker Compose configurations for the application and database' },
    ],
    sections: [
      {
        heading: 'Modular HR management',
        body: 'The application separates employee, department, attendance, leave, payroll, recruitment, performance, asset, remote-work, warning, exit, holiday, event, security, and audit concerns into distinct backend modules.',
      },
      {
        heading: 'Connected employee lifecycle',
        body: 'Recruitment can lead to employee creation after a candidate is accepted. Employee records then connect to attendance, leave, performance, payroll, and asset assignment. Offboarding provides a structured exit checklist that can include asset returns, leave settlement, final payroll, account deactivation, and data archiving.',
      },
      {
        heading: 'Business rules',
        body: 'Workflows include leave-balance validation, overlapping-request checks, holiday-aware leave calculations, payroll calculations involving salary and adjustments, attendance-based rules, and warning records.',
      },
      {
        heading: 'Security and architecture',
        body: 'A Java 17 and Spring Boot 3.2 REST API uses Spring Security, JWT, and role-based authorization. PostgreSQL persistence is handled with Spring Data JPA and Hibernate. The backend is modular and Docker Compose supports running the application and database locally.',
      },
    ],
    features: [
      { title: 'Employee & Department Management', description: 'Manage employee profiles, employment details, documents, status, history, departments, and organizational structure.' },
      { title: 'Attendance & Leave', description: 'Track check-in/out, working hours, late arrivals, leave requests, balances, approvals, and holiday-aware rules.' },
      { title: 'Payroll', description: 'Calculate payroll using base salary, bonuses, overtime, unpaid leave, taxes, social insurance, and deductions.' },
      { title: 'Recruitment', description: 'Track candidates through application, evaluation, interview, and decision; accepted candidates can become employee records.' },
      { title: 'Performance & Warnings', description: 'Record performance evaluations and history, and manage warnings and disciplinary actions.' },
      { title: 'Assets & Employee Exit', description: 'Track asset assignment and return, and guide offboarding through approvals, settlement, account deactivation, and archiving.' },
      { title: 'Remote Work & Organization Events', description: 'Manage remote-work requests and approvals, company events, public holidays, and holiday calendars.' },
      { title: 'Access Control & Audit', description: 'Use JWT authentication, role-based permissions, protected endpoints, and audit records for important system actions.' },
    ],
    engineeringDecisions: [
      {
        challenge: 'HR processes span multiple domains and often depend on one another.',
        decision: 'Separate backend capabilities into business modules and connect them through explicit workflows.',
        why: 'This keeps concerns organized while supporting lifecycle flows such as recruitment to onboarding, attendance to payroll, and employee exit with asset return.',
      },
      {
        challenge: 'Sensitive employee and payroll data requires controlled access.',
        decision: 'Protect the REST API with JWT authentication and role-based authorization.',
        why: 'Administrator, HR, manager, and employee roles can be assigned distinct permissions instead of exposing every operation to every user.',
      },
      {
        challenge: 'HR rules affect outcomes across leave, attendance, warnings, and payroll.',
        decision: 'Apply business rules within the relevant workflows, including leave validation, holiday handling, payroll calculations, and attendance-based warnings.',
        why: 'Keeping these rules in the application workflows helps maintain consistent outcomes across connected HR modules.',
      },
    ],
    gallery: [
      { src: '/images/projects/saas-erp/screen-1.jpg', caption: 'Recruitment pipeline' },
      { src: '/images/projects/saas-erp/screen-2.jpg', caption: 'Recruitment management' },
      { src: '/images/projects/saas-erp/screen-3.jpg', caption: 'ERP dashboard' },
      { src: '/images/projects/saas-erp/screen-4.jpg', caption: 'Employee management' },
    ],
    youtubeVideoIds: [],
    relatedProjectSlugs: ['stb-baas', 'ai-customer-support'],
  },
  {
    slug: 'event-map',
    title: 'Event Map',
    shortTitle: 'Event Map',
    tagline: 'A location-based social platform for discovering, creating, and joining events on an interactive map.',
    description:
      'A social platform where users create events, discover them on an interactive map, join, and participate in discussions — built around location and community.',
    categories: ['Mobile', 'Frontend', 'Social'],
    projectType: 'Mobile / Social',
    year: '2023',
    image: '/pictures/one.jpeg',
    heroImage: '/pictures/one.jpeg',
    featured: false,
    technologies: ['React', 'Maps API'],
    techGroups: [
      {
        label: 'Frontend',
        items: [
          { name: 'React', description: 'Core framework' },
          { name: 'Maps API', description: 'Interactive map & geolocation' },
        ],
      },
    ],
    links: [],
    overview:
      'Event Map is a location-based social platform. Users create events, discover them on an interactive map, join events, and participate in discussions. The map-first interface makes event discovery spatial and intuitive.',
    whatIBuilt: [
      'Built the map-based event discovery interface',
      'Implemented event creation, joining, and discussion features',
      'Designed the social interaction layer around events',
    ],
    role: 'Frontend / Product Development',
    duration: '[Add project duration]',
    team: '[Add team size]',
    status: '[Add project status]',
    responsibilities: [
      { area: 'Map Interface', detail: 'Built the interactive map-based event discovery interface' },
      { area: 'Event System', detail: 'Implemented event creation, joining, and management' },
      { area: 'Social Features', detail: 'Designed discussions and social interaction around events' },
      { area: 'Product Development', detail: 'Defined the map-first user experience and interaction patterns' },
    ],
    sections: [
      {
        heading: 'Map-first',
        body: 'The core interaction is a map. Events are placed geographically, and users discover them by exploring the map — making the experience inherently spatial.',
      },
    ],
    flowSteps: [
      { label: 'User', detail: 'Opens the map' },
      { label: 'Discover', detail: 'Events shown by location' },
      { label: 'Event', detail: 'View details & join' },
      { label: 'Discussion', detail: 'Participate in event chat' },
    ],
    features: [
      { title: 'Interactive Map Discovery', description: 'Events placed geographically — users explore by panning and zooming the map.' },
      { title: 'Event Creation', description: 'Users create events with location, details, and timing directly from the map.' },
      { title: 'Join & Participate', description: 'One-tap event joining with discussion threads for each event.' },
      { title: 'Social Interaction', description: 'Discussions and community engagement built around shared event experiences.' },
    ],
    gallery: [
      { src: '/pictures/one.jpeg', caption: 'Interactive event map' },
      { src: '/pictures/two.jpeg', caption: 'Event discovery view' },
      { src: '/pictures/chat.jpeg', caption: 'Event discussion' },
    ],
    youtubeVideoIds: [],
    relatedProjectSlugs: ['campusone', 'permis-maroc'],
  },
  {
    slug: 'campusone',
    title: 'CampusOne',
    shortTitle: 'CampusOne',
    tagline: 'A university-focused platform for student learning, opportunities, services, and campus life.',
    description:
      'CampusOne brings university-specific course materials, student opportunities, campus services, commerce, transport, events, and administration into one responsive platform.',
    categories: ['Education', 'SaaS', 'Marketplace', 'Web'],
    projectType: 'Product / Student Platform',
    year: '2024',
    image: '/images/projects/campusone/cover.png',
    heroImage: '/images/projects/campusone/cover.png',
    featured: true,
    featuredLayout: 'full',
    technologies: ['React', 'Vite', 'Spring Boot', 'PostgreSQL', 'Docker Compose', 'PWA'],
    techGroups: [
      {
        label: 'Frontend & Experience',
        items: [
          { name: 'React + Vite', description: 'Responsive web application and clean browser routes' },
          { name: 'Installable PWA', description: 'App-like installation with optional browser push notifications' },
          { name: 'Google Maps links', description: 'Map links for campus carpool rides' },
        ],
      },
      {
        label: 'Backend & Data',
        items: [
          { name: 'Spring Boot', description: 'Backend services for platform features and workflows' },
          { name: 'PostgreSQL', description: 'Relational application database' },
          { name: 'Persistent file storage', description: 'Durable storage for uploaded platform files' },
        ],
      },
      {
        label: 'Deployment',
        items: [
          { name: 'Docker Compose', description: 'Runs the frontend, backend, and database services together' },
        ],
      },
    ],
    links: [],
    overview:
      'CampusOne is a university-focused platform that gives students one place to access university-specific course materials, share resources, rate professors, build portfolios, and find internships, jobs, tutoring, freelance work, and small jobs. It also brings together campus commerce, services, transport, events, and community tools. Students can submit structured service requests and follow progress through completion, while business and service owners manage their offerings through dedicated dashboards. Administrators oversee users, universities, verifications, content, payments, advertising, and promotions.',
    whatIBuilt: [
      'Created university-focused learning and profile tools for course materials, resource sharing, professor ratings, portfolios, and personalized timetables',
      'Brought internships, jobs, tutoring, freelance work, and small jobs together for students',
      'Unified the student marketplace, housing, home services, cafes and restaurants, events, sports activities, and lost-and-found listings',
      'Added campus issue reports, petitions, and carpool rides with Google Maps links',
      'Designed structured service requests with a location, preferred time, and budget, plus accept/decline decisions and progress updates without chat',
      'Provided business and service owners with dashboards for profiles, listings, menus, programs, events, requests, university areas, ads, promotions, subscriptions, and payment approvals',
      'Added administration tools for users, universities, verifications, content, payments, advertising, and promotions',
      'Delivered a responsive, installable PWA with optional browser push notifications and a Docker Compose deployment',
    ],
    role: 'Product Development',
    responsibilities: [
      { area: 'Student Experience', detail: 'Brought learning resources, portfolios, schedules, opportunities, and campus life into a university-focused experience' },
      { area: 'Service Workflows', detail: 'Structured service requests around location, preferred time, budget, decisions, and progress updates without requiring chat' },
      { area: 'Owner Operations', detail: 'Provided business and service owners with tools to manage profiles, listings, requests, promotions, subscriptions, and approvals' },
      { area: 'Platform Administration', detail: 'Organized administrator workflows for universities, verification, content, payments, advertising, and promotions' },
      { area: 'Application Delivery', detail: 'Built a responsive React/Vite frontend with a Spring Boot backend, PostgreSQL, persistent file storage, and Docker Compose deployment' },
    ],
    sections: [
      {
        heading: 'One university platform',
        body: 'Students can access university-specific materials, share resources, rate professors, build portfolios, and manage personalized timetables alongside opportunities such as internships, jobs, tutoring, freelance work, and small jobs.',
      },
      {
        heading: 'Campus services and community',
        body: 'The platform brings together a marketplace, housing, home services, cafes and restaurants, events, sports activities, carpool rides with Google Maps links, lost-and-found listings, campus issue reports, and petitions.',
      },
      {
        heading: 'Structured service requests',
        body: 'Students submit requests with their location, preferred time, and budget. Recipients can accept or decline, track work through completion, and send status updates without relying on chat. Optional browser push notifications help keep users informed.',
      },
      {
        heading: 'Tools for owners and administrators',
        body: 'Business and service owners manage their profiles, listings, menus, programs, events, requests, university areas, advertisements, promotions, subscriptions, and payment approvals. Earnings pages track manually recorded gross receipts. Administrators manage users, universities, verifications, content, payments, advertising, and promotions.',
      },
      {
        heading: 'Deployment and access',
        body: 'The responsive website supports installable PWA features and clean browser routes. Docker Compose runs the React/Vite frontend, Spring Boot backend, and PostgreSQL database, with persistent file storage for uploaded content.',
      },
    ],
    flowSteps: [
      { label: 'Submit', detail: 'Student provides location, preferred time, and budget' },
      { label: 'Respond', detail: 'Request recipient accepts or declines' },
      { label: 'Track', detail: 'Work progresses through status updates, without chat' },
      { label: 'Complete', detail: 'Request reaches completion; gross receipts can be recorded manually' },
    ],
    features: [
      { title: 'University Learning', description: 'Access university-specific course materials, share resources, and rate professors.' },
      { title: 'Student Profiles & Timetables', description: 'Create a portfolio and manage a personalized timetable.' },
      { title: 'Work & Opportunities', description: 'Find internships, jobs, tutoring, freelance work, and small jobs.' },
      { title: 'Campus Marketplace & Housing', description: 'Discover student listings and housing in a university-focused marketplace.' },
      { title: 'Local Services & Places', description: 'Find home services, cafes, and restaurants serving the campus community.' },
      { title: 'Events & Sports', description: 'Discover campus events and sports activities.' },
      { title: 'Carpooling', description: 'Coordinate campus rides with Google Maps links.' },
      { title: 'Campus Community', description: 'Browse lost-and-found listings, report campus issues, and create or support petitions.' },
      { title: 'Structured Service Requests', description: 'Include location, preferred time, and budget; recipients can accept or decline and share progress updates without chat.' },
      { title: 'Owner Dashboards', description: 'Manage business and service profiles, listings, menus, programs, events, requests, university areas, ads, promotions, subscriptions, and payment approvals.' },
      { title: 'Administration & Earnings', description: 'Manage users, universities, verifications, content, payments, ads, and promotions; track manually recorded gross receipts.' },
      { title: 'Responsive PWA', description: 'Use the responsive website as an installable PWA, follow clean browser routes, and optionally receive browser push notifications.' },
    ],
    engineeringDecisions: [
      {
        challenge: 'Students need to move between learning, work opportunities, local services, and campus community features.',
        decision: 'Bring university-focused resources and a broad range of campus services into one responsive platform.',
        why: 'A shared destination makes the platform useful across day-to-day student needs rather than limiting it to a single campus module.',
      },
      {
        challenge: 'Service requests need enough context and a clear lifecycle without depending on chat.',
        decision: 'Capture location, preferred time, and budget up front, then support accept/decline decisions and progress updates through completion.',
        why: 'The structured workflow gives both sides a clear request and status trail; optional browser notifications can surface updates.',
      },
      {
        challenge: 'Student-facing listings and services require distinct operational tools for owners and administrators.',
        decision: 'Provide dedicated owner dashboards and separate platform administration workflows.',
        why: 'Owners can manage their own offerings and requests, while administrators handle university-wide accounts, verification, content, payments, and promotion controls.',
      },
      {
        challenge: 'Earnings records and payment approvals should reflect the platform’s actual workflows.',
        decision: 'Track manually recorded gross receipts and expose payment approvals without presenting earnings as automatically reconciled.',
        why: 'The interface reflects the described manual recording process and keeps approval operations visible to the responsible roles.',
      },
    ],
    gallery: [
      { src: '/images/projects/campusone/screen-01.png', caption: 'CampusOne screenshot 1' },
      { src: '/images/projects/campusone/screen-02.png', caption: 'CampusOne screenshot 2' },
      { src: '/images/projects/campusone/screen-03.png', caption: 'CampusOne screenshot 3' },
      { src: '/images/projects/campusone/screen-04.png', caption: 'CampusOne screenshot 4' },
      { src: '/images/projects/campusone/screen-05.png', caption: 'CampusOne screenshot 5' },
      { src: '/images/projects/campusone/screen-06.png', caption: 'CampusOne screenshot 6' },
      { src: '/images/projects/campusone/screen-07.png', caption: 'CampusOne screenshot 7' },
      { src: '/images/projects/campusone/screen-08.png', caption: 'CampusOne screenshot 8' },
      { src: '/images/projects/campusone/screen-09.png', caption: 'CampusOne screenshot 9' },
      { src: '/images/projects/campusone/screen-10.png', caption: 'CampusOne screenshot 10' },
      { src: '/images/projects/campusone/screen-11.png', caption: 'CampusOne screenshot 11' },
      { src: '/images/projects/campusone/screen-12.png', caption: 'CampusOne screenshot 12' },
      { src: '/images/projects/campusone/screen-13.png', caption: 'CampusOne screenshot 13' },
      { src: '/images/projects/campusone/screen-14.png', caption: 'CampusOne screenshot 14' },
      { src: '/images/projects/campusone/screen-15.png', caption: 'CampusOne screenshot 15' },
      { src: '/images/projects/campusone/screen-16.png', caption: 'CampusOne screenshot 16' },
      { src: '/images/projects/campusone/screen-17.png', caption: 'CampusOne screenshot 17' },
    ],
    youtubeVideoIds: [],
    relatedProjectSlugs: ['event-map', 'permis-maroc'],
  },
];

export const additionalProjects: Project[] = [
  {
    slug: 'vendayx-business-management',
    title: 'VendayX — Business Management Platform',
    shortTitle: 'VendayX',
    tagline: 'An all-in-one workspace for managing clients, projects, tasks, and business finances.',
    description:
      'A business management application built with React and Python. Its dashboard brings together client and lead management, projects, tasks, time tracking, invoices, payments, expenses, wallet activity, and income streams.',
    categories: ['Frontend', 'Backend', 'SaaS'],
    projectType: 'Business Management / SaaS',
    year: '',
    image: '/images/projects/vendayx/dashboard.png',
    imageAspect: 'aspect-[1328/768]',
    heroImage: '/images/projects/vendayx/dashboard.png',
    heroImageAspect: 'aspect-[1328/768]',
    featured: false,
    technologies: ['React', 'Python'],
    techGroups: [
      {
        label: 'Application',
        items: [
          { name: 'React', description: 'Web interface for the business management workspace' },
          { name: 'Python', description: 'Application and backend technology' },
        ],
      },
    ],
    links: [],
    overview:
      'VendayX is a business management workspace built with React and Python. The dashboard summarizes revenue, expenses, profit, outstanding invoices, active clients and projects, tasks, and tracked hours. The application also provides dedicated areas for clients, leads, projects, tasks, time tracking, invoices, payments, expenses, wallet activity, income streams, calendar, knowledge base, training, and settings.',
    whatIBuilt: [
      'Built a business dashboard with revenue, expense, profit, invoice, project, client, task, and time summaries',
      'Created project and task management views with status, priority, progress, and due-date information',
      'Added workspace areas for client and lead tracking',
      'Developed invoice, payment, expense, wallet, and income-stream views',
      'Included calendar, knowledge base, and training sections',
    ],
    role: 'React & Python Business Management Application',
    responsibilities: [
      { area: 'Dashboard', detail: 'Present business summaries, activity indicators, and revenue and expense charts' },
      { area: 'Work Management', detail: 'Organize clients, leads, projects, tasks, and tracked time' },
      { area: 'Financial Workspace', detail: 'Provide views for invoices, payments, expenses, wallet activity, and income streams' },
      { area: 'Team Resources', detail: 'Include calendar, knowledge base, training, and application settings' },
    ],
    sections: [
      {
        heading: 'Business overview',
        body: 'The dashboard brings key business indicators together, including revenue, expenses, profit, outstanding invoices, active clients and projects, tasks due, and tracked hours. Charts show revenue versus expenses over time and an expense breakdown by category.',
      },
      {
        heading: 'Clients and project delivery',
        body: 'Dedicated pages organize clients, leads, projects, tasks, and time tracking. The project list presents status, priority, progress, budget, and timing information, while the task board groups work by status.',
      },
      {
        heading: 'Invoices and finances',
        body: 'Financial areas cover invoices, payments, expenses, wallet transactions, and income streams. The supplied screenshots use demo figures.',
      },
      {
        heading: 'Workspace tools',
        body: 'The navigation also includes a calendar, knowledge base, training, and settings alongside the main management and finance modules.',
      },
    ],
    features: [
      { title: 'Business Dashboard', description: 'Summaries and charts for revenue, expenses, profit, outstanding invoices, projects, clients, and tasks.' },
      { title: 'Client & Lead Tracking', description: 'Dedicated sections for managing client and lead information.' },
      { title: 'Projects & Tasks', description: 'Project progress and a task board organized by status.' },
      { title: 'Time Tracking', description: 'Track work time alongside active projects and tasks.' },
      { title: 'Finance Workspace', description: 'Manage invoices, payments, expenses, wallet activity, and income streams.' },
      { title: 'Knowledge & Calendar', description: 'Access calendar, knowledge base, and training tools from the same workspace.' },
    ],
    gallery: [
      { src: '/images/projects/vendayx/dashboard.png', caption: 'Business dashboard with financial and activity summaries' },
      { src: '/images/projects/vendayx/projects.png', caption: 'Project list with status, progress, budget, and timing information' },
      { src: '/images/projects/vendayx/tasks.png', caption: 'Task board organized by workflow status' },
      { src: '/images/projects/vendayx/invoices.png', caption: 'Invoice list with issue dates, totals, and payment status' },
      { src: '/images/projects/vendayx/wallet.png', caption: 'Wallet view with income and expense summaries and transactions' },
    ],
  },
  {
    slug: 'hometown-bookstore',
    title: 'Hometown Book Store',
    shortTitle: 'Hometown Book Store',
    tagline: 'An Arabic-first online bookstore for school supplies, books, and learning packages.',
    description:
      'A right-to-left e-commerce storefront with a product catalog, shopping cart, school packages, educational series, and an admin dashboard. Built with React, an Express.js backend, and PostgreSQL.',
    categories: ['Frontend', 'Backend', 'SaaS'],
    projectType: 'E-commerce / Education',
    year: '',
    image: '/images/projects/hometown-bookstore/cover.png',
    imageAspect: 'aspect-[1544/768]',
    heroImage: '/images/projects/hometown-bookstore/cover.png',
    heroImageAspect: 'aspect-[1544/768]',
    featured: false,
    technologies: ['React', 'Express.js', 'PostgreSQL'],
    techGroups: [
      {
        label: 'Frontend',
        items: [{ name: 'React', description: 'Arabic, right-to-left online store and administration interface' }],
      },
      {
        label: 'Backend & Data',
        items: [
          { name: 'Express.js', description: 'Store and administration backend' },
          { name: 'PostgreSQL', description: 'Product, category, package, and order data' },
        ],
      },
    ],
    links: [],
    overview:
      'Hometown Book Store is an Arabic, right-to-left online bookstore and school-supplies shop. Customers can browse products by category, explore educational series and school-level packages, filter and search the catalog, and manage items in a shopping cart. An administration area provides product, category, series, package, and order management alongside store statistics.',
    whatIBuilt: [
      'Built an Arabic RTL storefront with navigation for products, categories, school years, educational series, packages, about, and contact pages',
      'Created a searchable product catalog with category and price filters, product availability, pricing, and featured items',
      'Implemented school-level packages and educational series for browsing related learning materials',
      'Added a shopping cart with quantity controls, item removal, and an order total',
      'Developed an administration area for products, categories, educational series, packages, and orders',
      'Connected the React storefront to an Express.js backend and PostgreSQL database',
    ],
    role: 'Full-Stack E-commerce Project',
    responsibilities: [
      { area: 'Customer Storefront', detail: 'Built Arabic RTL pages for products, categories, school years, educational series, and packages' },
      { area: 'Catalog & Cart', detail: 'Added product discovery and filtering, availability and pricing displays, and cart quantity and total controls' },
      { area: 'Store Administration', detail: 'Created dashboard views for catalog, category, series, package, and order management' },
      { area: 'Application Stack', detail: 'Implemented the React storefront with an Express.js backend and PostgreSQL database' },
    ],
    sections: [
      {
        heading: 'Arabic storefront and catalog',
        body: 'The customer-facing site uses an Arabic right-to-left layout. Navigation organizes products, stationery, school supplies, academic years, educational series, and school packages. Product pages support search, category selection, price filtering, availability, and featured items.',
      },
      {
        heading: 'Educational packages and series',
        body: 'Shoppers can browse prepared school packages by academic level and explore educational book series. Package and series pages group related items to help customers find supplies for a school year or curriculum.',
      },
      {
        heading: 'Shopping cart and orders',
        body: 'The cart drawer shows selected products, quantities, line totals, and the order subtotal, with controls to adjust or remove items and continue toward order placement. The administration interface includes an order list for store operations.',
      },
      {
        heading: 'Administration and application stack',
        body: 'The admin interface includes a sign-in screen and dashboard views for store statistics, products, categories, educational series, school packages, and orders. The application uses React, an Express.js backend, and PostgreSQL.',
      },
    ],
    flowSteps: [
      { label: 'Browse', detail: 'Explore the catalog by product category, school level, or educational series' },
      { label: 'Find items', detail: 'Search or filter products and review availability and price' },
      { label: 'Build cart', detail: 'Add products, adjust quantities, and review the subtotal' },
      { label: 'Place order', detail: 'Continue from the cart to submit an order' },
      { label: 'Manage store', detail: 'Use the admin area to maintain products, packages, and orders' },
    ],
    features: [
      { title: 'Arabic RTL Storefront', description: 'Right-to-left customer experience for an Arabic-language bookstore and school-supplies shop.' },
      { title: 'Product Catalog', description: 'Search and filter products by category and price, with availability and featured item displays.' },
      { title: 'School Packages', description: 'Browse prepared sets of supplies by academic level.' },
      { title: 'Educational Series', description: 'Explore related books and materials grouped into learning series.' },
      { title: 'Shopping Cart', description: 'Adjust quantities, remove items, and review line totals and subtotal.' },
      { title: 'Admin Dashboard', description: 'Manage products, categories, series, packages, and orders through the store administration area.' },
    ],
    gallery: [
      { src: '/images/projects/hometown-bookstore/screenshot-01.png', caption: 'Storefront category navigation and featured sections' },
      { src: '/images/projects/hometown-bookstore/screenshot-02.png', caption: 'School packages displayed by academic level' },
      { src: '/images/projects/hometown-bookstore/screenshot-03.png', caption: 'Browse by school year and educational series' },
      { src: '/images/projects/hometown-bookstore/screenshot-04.png', caption: 'Educational series and book listings' },
      { src: '/images/projects/hometown-bookstore/screenshot-05.png', caption: 'Store contact call to action and footer' },
      { src: '/images/projects/hometown-bookstore/screenshot-06.png', caption: 'Product catalog with search and category/price filters' },
      { src: '/images/projects/hometown-bookstore/screenshot-07.png', caption: 'Shopping cart with quantity controls and subtotal' },
      { src: '/images/projects/hometown-bookstore/screenshot-08.png', caption: 'About the bookstore page' },
      { src: '/images/projects/hometown-bookstore/screenshot-09.png', caption: 'Administration sign-in screen' },
      { src: '/images/projects/hometown-bookstore/screenshot-10.png', caption: 'Store administration dashboard' },
      { src: '/images/projects/hometown-bookstore/screenshot-11.png', caption: 'Product inventory management' },
      { src: '/images/projects/hometown-bookstore/screenshot-12.png', caption: 'Product category management' },
      { src: '/images/projects/hometown-bookstore/screenshot-13.png', caption: 'Educational series management' },
      { src: '/images/projects/hometown-bookstore/screenshot-14.png', caption: 'School package setup and product selection' },
      { src: '/images/projects/hometown-bookstore/screenshot-15.png', caption: 'Customer order management' },
    ],
  },
  {
    slug: 'personal-secretary-agent',
    title: 'Personal Secretary Agent',
    shortTitle: 'Personal Secretary',
    tagline: 'An AI assistant for email briefings, calendar checks, and user-approved actions.',
    description:
      'A 19-node n8n personal assistant workflow that combines Claude with Gmail, Outlook, Google Calendar, Google Drive, and Telegram for briefings, scheduling assistance, and alerts.',
    categories: ['Automation', 'AI', 'Productivity'],
    projectType: 'Personal Productivity / AI Automation',
    year: '',
    image: '/images/projects/personal-secretary-agent/workflow-overview.png',
    imageAspect: 'aspect-[1599/768]',
    heroImage: '/images/projects/personal-secretary-agent/workflow-overview.png',
    heroImageAspect: 'aspect-[1599/768]',
    featured: false,
    technologies: ['n8n', 'Claude', 'Gmail', 'Microsoft Outlook', 'Google Calendar', 'Google Drive', 'Telegram', 'Webhooks'],
    techGroups: [
      {
        label: 'Workflow & AI',
        items: [
          { name: 'n8n', description: 'Webhook-driven requests and a 30-minute scheduled check' },
          { name: 'Claude', description: 'Secretary agent for briefings and requested actions' },
          { name: 'Window Memory', description: 'Short conversational context for the agent' },
        ],
      },
      {
        label: 'Productivity Integrations',
        items: [
          { name: 'Gmail & Outlook', description: 'Read mail and prepare user-approved email actions' },
          { name: 'Google & Outlook Calendar', description: 'Review schedules and handle requested event actions' },
          { name: 'Google Drive', description: 'Create project/client folders and standard subfolders' },
          { name: 'Telegram', description: 'Send alerts when a scheduled check needs attention' },
        ],
      },
    ],
    links: [],
    overview:
      'A 19-node n8n workflow that connects a Claude-powered secretary agent to Gmail, Outlook, Google Calendar, Google Drive, and Telegram. It accepts POST requests through a webhook and also checks every 30 minutes. The agent can prepare mail and calendar briefings, identify upcoming conflicts and urgent messages, create or move calendar events, and organize new client or project folders. Email sending is guarded: the agent drafts replies and only sends a draft after an explicit [APPROVED] instruction.',
    whatIBuilt: [
      'Created a webhook-based n8n assistant with an additional 30-minute scheduled trigger',
      'Connected a Claude agent to short-window memory and Gmail, Outlook, calendar, Drive, and Telegram tools',
      'Added briefing behavior for unread email and events across Google and Outlook calendars',
      'Configured scheduled checks for urgent mail, upcoming events, calendar conflicts, and meeting preparation',
      'Added user-controlled email drafting and explicit approval before sending',
      'Automated calendar event creation/movement and standard client or project Drive folder setup',
    ],
    role: 'n8n Personal Assistant Workflow Design',
    responsibilities: [
      { area: 'Briefings', detail: 'Summarize important unread mail and today’s events across Gmail, Outlook, and connected calendars' },
      { area: 'Scheduled Alerts', detail: 'Check the next 90 minutes for urgent messages, preparation needs, or calendar conflicts and alert through Telegram when required' },
      { area: 'Approved Actions', detail: 'Draft email replies for review and send only after an explicit approval command' },
      { area: 'Calendar & Drive', detail: 'Handle requested calendar updates and create organized folders for new clients or projects' },
    ],
    sections: [
      {
        heading: 'Webhook and scheduled entry points',
        body: 'A POST webhook accepts requests from an application and returns the secretary response. A separate trigger runs every 30 minutes for scheduled checks. The workflow normalizes the incoming request before passing it to the agent.',
      },
      {
        heading: 'Cross-service briefings',
        body: 'For a briefing request, the agent reads unread Gmail and Outlook messages since the last check (or the previous 12 hours when no checkpoint is available) and reviews the day’s Google and Outlook calendar events. It reports important messages, the day’s schedule, free gaps, calendar conflicts, and a small set of suggestions.',
      },
      {
        heading: 'Upcoming-event monitoring',
        body: 'The scheduled check focuses on the next 90 minutes, looking for urgent new mail, event conflicts, and meeting-preparation needs. If something needs attention it can return a short alert with related email or file context; otherwise it returns NOTHING. The alert branch can notify through Telegram.',
      },
      {
        heading: 'User-controlled email and calendar actions',
        body: 'The agent creates email drafts and shows the draft text rather than sending autonomously. Gmail Send is used only when the user explicitly marks the message [APPROVED]; rejected drafts are dropped. The workflow is instructed never to delete anything and to ask before moving calendar events that include other attendees.',
      },
      {
        heading: 'Calendar, Drive, and localization',
        body: 'On request, the agent can create or move calendar events and create a Drive folder structure for a new client or project, including Contracts, Invoices, and Meetings. The prompt uses the Africa/Tunis timezone and replies in the language of the incoming message.',
      },
    ],
    flowSteps: [
      { label: 'Receive request', detail: 'Accept a POST webhook or start the 30-minute scheduled check' },
      { label: 'Normalize', detail: 'Prepare the incoming message and determine the check type' },
      { label: 'Consult tools', detail: 'Use Claude with connected mail, calendar, memory, and Drive tools' },
      { label: 'Apply safeguards', detail: 'Draft email for approval and require confirmation for sensitive calendar changes' },
      { label: 'Respond or alert', detail: 'Return the answer to the app or send a Telegram alert when needed' },
    ],
    features: [
      { title: 'Email & Calendar Briefings', description: 'Summarize important unread messages and daily events across Gmail, Outlook, and connected calendars.' },
      { title: '30-Minute Monitoring', description: 'Check near-term events, urgent mail, meeting preparation, and schedule conflicts.' },
      { title: 'Email Approval Gate', description: 'Create drafts and send only after the user explicitly approves the exact draft.' },
      { title: 'Calendar Assistance', description: 'Create or move events on request, with an extra confirmation safeguard for events involving other attendees.' },
      { title: 'Project Folder Setup', description: 'Create a Drive folder with Contracts, Invoices, and Meetings subfolders for new clients or projects.' },
      { title: 'Contextual Alerts', description: 'Return webhook responses or send Telegram alerts when a scheduled check finds something that needs attention.' },
    ],
    gallery: [
      { src: '/images/projects/personal-secretary-agent/workflow-overview.png', caption: 'Personal Secretary Agent n8n workflow overview' },
    ],
  },
  {
    slug: 'romance-book-factory',
    title: 'Romance Book Factory',
    shortTitle: 'Romance Book Factory',
    tagline: 'A scheduled n8n pipeline for turning a local book-planning workbook into finished ebook assets.',
    description:
      'A 33-node n8n workflow that selects pending book plans from local files, generates chapters with Ollama, creates cover art with Cloudflare AI, packages the book, and delivers its files through Telegram.',
    categories: ['Automation', 'AI', 'Content'],
    projectType: 'AI Automation / Digital Publishing',
    year: '',
    image: '/images/projects/romance-book-factory/workflow-overview.png',
    imageAspect: 'aspect-[1652/768]',
    heroImage: '/images/projects/romance-book-factory/workflow-overview.png',
    heroImageAspect: 'aspect-[1652/768]',
    featured: false,
    technologies: ['n8n', 'Ollama', 'Cloudflare AI', 'Telegram', 'XLSX', 'PDF', 'EPUB'],
    techGroups: [
      {
        label: 'Workflow & Generation',
        items: [
          { name: 'n8n', description: 'Daily scheduled orchestration, book selection, and status tracking' },
          { name: 'Ollama', description: 'Generate the book chapter by chapter' },
          { name: 'Cloudflare AI', description: 'Generate cover artwork for the book' },
        ],
      },
      {
        label: 'Book Packaging & Delivery',
        items: [
          { name: 'Local XLSX files', description: 'Provide book plans and track generation status' },
          { name: 'PDF & EPUB', description: 'Build the interior, print cover, and ebook files' },
          { name: 'Telegram', description: 'Deliver the summary and generated book assets' },
        ],
      },
    ],
    links: [],
    overview:
      'A 33-node n8n workflow scheduled to run daily at 6:00 AM. It reads a local book-planning workbook and a separate status file, selects a title that is not already generated or in progress, and marks it as generating. The workflow expands the plan into chapters, generates them iteratively with Ollama, creates cover art with Cloudflare AI, and packages an interior PDF, print-cover PDF, EPUB, and ebook-cover JPG. It sends a summary and the files through Telegram, updates the status when generation finishes, and has a Telegram failure-alert path.',
    whatIBuilt: [
      'Designed a 33-node n8n workflow with a daily 6:00 AM schedule',
      'Read book plans and generation status from local files and selected pending titles',
      'Generated book chapters in a loop using Ollama',
      'Created cover artwork with Cloudflare AI and assembled book assets',
      'Rendered an interior PDF, print-cover PDF, EPUB, and ebook-cover JPG',
      'Delivered the summary and files through Telegram and updated the book status',
      'Added a Telegram notification path for workflow failures',
    ],
    role: 'n8n Workflow Design & Automation',
    responsibilities: [
      { area: 'Book Queue', detail: 'Select pending titles from the local planning workbook while avoiding titles already marked generating or generated' },
      { area: 'Content Generation', detail: 'Expand each book plan into chapters and generate them iteratively with Ollama' },
      { area: 'Asset Production', detail: 'Generate cover art and render ebook and print-ready deliverables' },
      { area: 'Delivery & Tracking', detail: 'Send generated files and a summary through Telegram, update status, and alert on failures' },
    ],
    sections: [
      {
        heading: 'Scheduled book queue',
        body: 'A daily 6:00 AM trigger reads the local book-plan workbook and a status file. It skips titles marked generated or generating, then records the selected title as in progress before starting generation.',
      },
      {
        heading: 'Chapter generation and packaging',
        body: 'The workflow expands a selected plan into chapters, generates each chapter through Ollama, and assembles the book. Cloudflare AI generates cover artwork; subsequent steps render an interior PDF, a print-cover PDF, an EPUB, and an ebook-cover JPG.',
      },
      {
        heading: 'Telegram delivery and status handling',
        body: 'After packaging, the workflow sends a summary and each deliverable to Telegram, then marks the title generated. A separate error-trigger path sends a Telegram failure alert.',
      },
      {
        heading: 'Supplied output evidence',
        body: 'The screenshots show a Telegram delivery message, ebook title and interior pages, a paperback cover wrap, and an Amazon listing. The exported workflow automates book generation and Telegram delivery; it does not contain an Amazon publishing step.',
      },
    ],
    flowSteps: [
      { label: 'Check the queue', detail: 'Read the local workbook and status file, then choose a pending title' },
      { label: 'Generate chapters', detail: 'Build the book plan and generate chapters one at a time with Ollama' },
      { label: 'Create book assets', detail: 'Generate cover art and render PDF and EPUB deliverables' },
      { label: 'Deliver files', detail: 'Send a summary, interior PDF, cover PDF, EPUB, and ebook-cover JPG through Telegram' },
      { label: 'Update status', detail: 'Mark successful generation and send a Telegram alert when the workflow fails' },
    ],
    features: [
      { title: 'Scheduled Generation', description: 'Run the book-production workflow daily and select a title that is still pending.' },
      { title: 'Chapter-by-Chapter Writing', description: 'Generate and assemble book chapters through an Ollama API workflow.' },
      { title: 'Multi-format Packaging', description: 'Produce an interior PDF, print-cover PDF, EPUB, and ebook-cover JPG.' },
      { title: 'Telegram Delivery', description: 'Send a summary and generated files to Telegram, with a separate failure alert.' },
    ],
    gallery: [
      { src: '/images/projects/romance-book-factory/workflow-overview.png', caption: 'Romance Book Factory n8n workflow overview' },
      { src: '/images/projects/romance-book-factory/amazon-listing.png', caption: 'Amazon listing screenshot provided as finished-book evidence; publishing is not part of the exported workflow' },
      { src: '/images/projects/romance-book-factory/telegram-book-ready.png', caption: 'Telegram message with the generated book ready' },
      { src: '/images/projects/romance-book-factory/ebook-title-page.png', caption: 'Generated ebook title page' },
      { src: '/images/projects/romance-book-factory/ebook-interior.png', caption: 'Generated ebook interior page' },
      { src: '/images/projects/romance-book-factory/paperback-cover-wrap.png', caption: 'Generated paperback cover wrap' },
    ],
  },
  {
    slug: 'kids-picture-book-factory',
    title: 'Kids Picture Book Factory v7',
    shortTitle: 'Kids Book Factory',
    tagline: 'An n8n pipeline for developing illustrated picture books and preparing print-ready PDFs.',
    description:
      'A 34-node n8n workflow that coordinates AI agents to ideate, write, and review a story, generates consistent character and page illustrations, and builds HTML and print-ready PDF outputs for Telegram delivery.',
    categories: ['Automation', 'AI', 'Content'],
    projectType: 'AI Automation / Digital Publishing',
    year: '',
    image: '/images/projects/kids-picture-book-factory/workflow-overview.png',
    imageAspect: 'aspect-[1621/768]',
    heroImage: '/images/projects/kids-picture-book-factory/workflow-overview.png',
    heroImageAspect: 'aspect-[1621/768]',
    featured: false,
    technologies: ['n8n', 'Ollama Cloud', 'Cloudflare FLUX', 'Vision AI', 'Gotenberg', 'Telegram'],
    techGroups: [
      {
        label: 'Story Development',
        items: [
          { name: 'n8n', description: 'Daily scheduled or manual workflow orchestration' },
          { name: 'Ollama Cloud', description: 'AI agents for story ideation, writing, and review' },
        ],
      },
      {
        label: 'Illustration & Publishing',
        items: [
          { name: 'Cloudflare FLUX', description: 'Generate character-sheet and page illustrations' },
          { name: 'Vision quality checks', description: 'Review character sheets and page images against the prompts' },
          { name: 'Gotenberg & Telegram', description: 'Render the print layout as PDF and deliver book files' },
        ],
      },
    ],
    links: [],
    overview:
      'A 34-node n8n workflow that starts on a daily 9:00 AM schedule or through a manual trigger. AI agents develop a story idea, write the story, and review it, with a bounded revision path. The workflow generates candidate character sheets and uses a vision model to select one, then creates page illustrations using the selected character reference. Image quality checks can route illustrations through configured retry rounds. Finally, it builds HTML and print HTML, renders a PDF through Gotenberg, and sends the HTML and PDF through Telegram.',
    whatIBuilt: [
      'Created a 34-node n8n workflow with daily and manual triggers',
      'Coordinated AI agents for story ideation, writing, and reviewer feedback',
      'Added a bounded story revision path before illustration generation',
      'Generated character-sheet candidates and selected a reference using vision review',
      'Generated page illustrations and added vision-based quality checks with configurable retries',
      'Built HTML and print layouts, rendered a PDF through Gotenberg, and delivered outputs through Telegram',
    ],
    role: 'n8n AI Content Generation Workflow Design',
    responsibilities: [
      { area: 'Story Pipeline', detail: 'Coordinate idea generation, story writing, and review with a bounded revision loop' },
      { area: 'Character Consistency', detail: 'Create a character reference sheet and reuse it while generating page illustrations' },
      { area: 'Image Quality', detail: 'Review illustrations with a vision model and retry within the configured limit when needed' },
      { area: 'Book Delivery', detail: 'Assemble HTML and print layouts, render a PDF, and send the outputs through Telegram' },
    ],
    sections: [
      {
        heading: 'Story ideation, writing, and review',
        body: 'A scheduled trigger runs daily at 9:00 AM, and a manual trigger is also available. The workflow passes the idea through AI ideation, writing, and reviewer agents. Reviewer feedback can route the story back through the writer until it is approved or the configured retry limit is reached.',
      },
      {
        heading: 'Character sheet and page illustrations',
        body: 'The workflow generates multiple character-sheet candidates and uses a vision model to pick the best reference. It then generates page illustrations using that reference and checks each image against the expected characters, action, place, and visual quality. Failed checks can loop through configured retry rounds.',
      },
      {
        heading: 'Book rendering and delivery',
        body: 'After collecting the illustrations, the workflow builds an HTML book and a print layout. Gotenberg converts the print HTML to PDF, and both the HTML book and PDF are sent through Telegram.',
      },
      {
        heading: 'Supplied evidence',
        body: 'The supplied evidence includes the n8n workflow graph, a rendered cover page, and an illustrated interior page from a French-language picture book.',
      },
    ],
    flowSteps: [
      { label: 'Start workflow', detail: 'Run from the daily 9:00 AM schedule or start manually' },
      { label: 'Develop the story', detail: 'Generate an idea, write the story, and revise it through reviewer feedback' },
      { label: 'Create character reference', detail: 'Generate character-sheet candidates and select one with vision review' },
      { label: 'Illustrate and check pages', detail: 'Generate page images using the character reference and retry images that fail quality checks' },
      { label: 'Build and deliver book', detail: 'Create HTML and print layouts, render a PDF, and send both through Telegram' },
    ],
    features: [
      { title: 'AI Story Team', description: 'Separate agents handle ideation, writing, and reviewer feedback.' },
      { title: 'Character Reference Sheet', description: 'Select a character sheet to guide visual consistency across page illustrations.' },
      { title: 'Image Quality Loop', description: 'Use vision checks and configured retry rounds to refine generated illustrations.' },
      { title: 'HTML & Print PDF', description: 'Build a digital HTML book and render a print-layout PDF through Gotenberg.' },
      { title: 'Telegram Delivery', description: 'Send the generated HTML book and PDF through Telegram.' },
    ],
    gallery: [
      { src: '/images/projects/kids-picture-book-factory/workflow-overview.png', caption: 'Kids Picture Book Factory n8n workflow overview' },
      { src: '/images/projects/kids-picture-book-factory/generated-cover-page.png', caption: 'Generated cover page for a French-language picture book' },
      { src: '/images/projects/kids-picture-book-factory/generated-interior-page.png', caption: 'Illustrated interior page showing the book characters in a scene' },
    ],
  },
  {
    slug: 'ai-github-multi-agent-framework',
    title: 'AI GitHub Multi-agent Universal Framework',
    shortTitle: 'AI GitHub Framework',
    tagline: 'Turn a project brief into a generated, reviewed, and CI-checked GitHub repository.',
    description:
      'A 73-node n8n automation that converts a structured project brief into a GitHub repository, coordinates AI agents for planning and implementation, and uses CI feedback to drive revisions before merging.',
    categories: ['Automation', 'AI', 'Developer Tools'],
    projectType: 'AI Automation / Software Delivery',
    year: '',
    image: '/images/projects/ai-github-multi-agent-framework/workflow-thumbnail.png',
    imageAspect: 'aspect-[1663/768]',
    heroImage: '/images/projects/ai-github-multi-agent-framework/workflow-thumbnail.png',
    heroImageAspect: 'aspect-[1663/768]',
    featured: false,
    technologies: ['n8n', 'GitHub REST API', 'GitHub Actions', 'LLM APIs', 'Docker', 'Telegram'],
    techGroups: [
      {
        label: 'Orchestration & AI',
        items: [
          { name: 'n8n', description: 'Form, manual, and scheduled workflow orchestration' },
          { name: 'LLM HTTP APIs', description: 'AI agent requests for planning, code generation, review, and repair' },
        ],
      },
      {
        label: 'Code Delivery',
        items: [
          { name: 'GitHub REST API', description: 'Repository, branch, file, commit, and pull request operations' },
          { name: 'GitHub Actions', description: 'CI runs and job logs used in the review loop' },
          { name: 'Docker / Compose', description: 'Generated project container and compose configuration' },
          { name: 'Telegram', description: 'Workflow success, failure, and timeout notifications' },
        ],
      },
    ],
    links: [],
    overview:
      'A 73-node n8n workflow that turns a structured project brief into an AI-assisted software delivery pipeline. A form collects the project description, category, delivery target, language/framework, requirements, complexity, sprint count, repository visibility, and README language. Product Owner and Architect agents shape the specification; implementation agents generate repository files, while a Tech Lead reviews issues and a Reviser can update the code. The workflow adds documentation and Docker/CI configuration, creates a GitHub pull request, monitors GitHub Actions, attempts fixes from failed job logs, and merges when CI passes. A sprint loop can continue after a successful merge, with Telegram notifications for workflow outcomes.',
    whatIBuilt: [
      'Designed a 73-node n8n workflow with project-form, manual, and daily scheduled triggers',
      'Connected a structured project intake to Product Owner and Architect planning agents',
      'Automated GitHub repository and branch creation, file generation, grouped commits, and pull request creation',
      'Added static checks and Tech Lead review with a code revision loop',
      'Generated documentation and Docker/Compose and CI/CD configuration through dedicated agents',
      'Monitored GitHub Actions runs, inspected failed job logs, attempted fixes, and merged pull requests after passing CI',
      'Added configurable sprint continuation and Telegram status notifications',
    ],
    role: 'n8n AI Agent Workflow Design',
    responsibilities: [
      { area: 'Project Intake', detail: 'Collect project scope, stack, features, complexity, delivery preferences, and sprint settings through an n8n form' },
      { area: 'AI Planning & Build', detail: 'Coordinate product-owner, architecture, implementation, review, documentation, and infrastructure agents' },
      { area: 'GitHub Delivery', detail: 'Create repositories, branches, commits, and pull requests using GitHub API operations' },
      { area: 'CI Feedback Loop', detail: 'Poll GitHub Actions, inspect job failures, attempt code fixes, and merge after successful checks' },
    ],
    sections: [
      {
        heading: 'Structured project intake',
        body: 'The workflow can start from an n8n form, a manual trigger, or a daily schedule configured for 09:00. The form captures a project description, category, delivery type, language and framework, optional users and feature requirements, complexity, sprint count, repository visibility, and README language.',
      },
      {
        heading: 'Planning and repository generation',
        body: 'Product Owner and Architect agents turn the brief into a specification. The workflow creates a GitHub repository and branch, generates project files in groups, and runs a scaffold/static-check step before review.',
      },
      {
        heading: 'Review, documentation, and infrastructure',
        body: 'A Tech Lead agent identifies implementation issues and can route work through a revision loop. Dedicated agents generate documentation and Docker/Compose and CI/CD files, followed by a CI/CD review before the changes are assembled into commits and a pull request.',
      },
      {
        heading: 'CI-driven repair and delivery',
        body: 'The workflow polls GitHub Actions for the pull request, evaluates CI status, and retrieves failed job logs when available. A Fixer agent can prepare a retry; when checks pass, the pull request is merged and Telegram can notify success. Failure and timeout paths also notify through Telegram.',
      },
      {
        heading: 'Current evidence',
        body: 'The supplied screenshots show four private repositories in a GitHub list, a Clinic Appointment System repository with a passing CI badge, its generated README, and a SalesForceLite CRM pull request showing six commits and 34 changed files. That pull request is marked as able to merge; the screenshot does not show that it was actually merged. These are output screenshots rather than n8n execution logs.',
      },
    ],
    flowSteps: [
      { label: 'Submit brief', detail: 'Provide project scope and delivery settings through the form' },
      { label: 'Plan', detail: 'Product Owner and Architect agents produce a specification' },
      { label: 'Generate', detail: 'Create a GitHub repository and generate files in groups' },
      { label: 'Review', detail: 'Run static checks and resolve Tech Lead feedback' },
      { label: 'Prepare delivery', detail: 'Add documentation, Docker/Compose, and CI/CD files; open a pull request' },
      { label: 'Verify & merge', detail: 'Monitor CI, attempt fixes from failed logs, and merge after successful checks' },
    ],
    features: [
      { title: 'Brief-to-Repository', description: 'Capture project requirements through a form and create a GitHub repository and branch.' },
      { title: 'Specialist AI Agents', description: 'Delegate planning, architecture, implementation, review, documentation, infrastructure, and repair tasks.' },
      { title: 'Review & Revision Loop', description: 'Run static checks, collect Tech Lead findings, and route issues to a Reviser.' },
      { title: 'CI-Aware Delivery', description: 'Poll GitHub Actions, inspect failed job logs, and attempt repairs before merge.' },
      { title: 'Sprint Continuation', description: 'Optionally plan and execute another sprint after successful delivery.' },
      { title: 'Status Notifications', description: 'Send success, failure, or timeout notifications through Telegram.' },
    ],
    results: [
      {
        label: 'Repositories shown',
        value: '4',
        description: 'Private repositories visible in the supplied GitHub list screenshot.',
      },
      {
        label: 'Files changed in PR',
        value: '34',
        description: 'SalesForceLite CRM pull request snapshot; it also shows six commits.',
      },
      {
        label: 'CI status shown',
        value: 'Passing',
        description: 'Status displayed on the Clinic Appointment System repository screenshot.',
      },
    ],
    gallery: [
      { src: '/images/projects/ai-github-multi-agent-framework/generated-repositories.png', caption: 'GitHub list showing generated repositories' },
      { src: '/images/projects/ai-github-multi-agent-framework/generated-clinic-repository.png', caption: 'Clinic Appointment System repository with a passing CI badge' },
      { src: '/images/projects/ai-github-multi-agent-framework/generated-project-readme.png', caption: 'Generated project README and documented features' },
      { src: '/images/projects/ai-github-multi-agent-framework/generated-pull-request.png', caption: 'SalesForceLite CRM pull request showing six commits and 34 changed files; marked able to merge' },
    ],
  },
  {
    slug: 'autonomous-blogger-ai-team',
    title: 'Autonomous Blogger AI Team + Community Manager',
    shortTitle: 'AI Blogger Automation',
    tagline: 'An n8n automation for AI-assisted blog publishing and comment moderation.',
    description:
      'A 28-node n8n workflow that gathers Blogger performance data, coordinates an Ollama Cloud Llama editorial team, applies a review gate before publishing, and automates comment moderation.',
    categories: ['Automation', 'AI', 'Content'],
    projectType: 'AI Automation / Content Operations',
    year: '',
    image: '/images/projects/autonomous-blogger-ai-team/workflow-overview.png',
    imageAspect: 'aspect-[1678/768]',
    heroImage: '/images/projects/autonomous-blogger-ai-team/workflow-overview.png',
    heroImageAspect: 'aspect-[1678/768]',
    featured: false,
    technologies: ['n8n', 'Ollama Cloud', 'Llama', 'Google Blogger API', 'Telegram', 'Docker'],
    techGroups: [
      {
        label: 'Workflow & AI',
        items: [
          { name: 'n8n', description: 'Scheduled and manually triggered workflow orchestration' },
          { name: 'Ollama Cloud / Llama', description: 'AI agents for strategy, ideation, writing, editing, and design' },
        ],
      },
      {
        label: 'Integrations',
        items: [
          { name: 'Google Blogger API', description: 'Read blog metrics, posts, and comments; create posts and moderate comments' },
          { name: 'Telegram', description: 'Optional delivery of comment reply drafts' },
          { name: 'Docker environment', description: 'Runtime configuration for the Ollama endpoint, model, and API keys' },
        ],
      },
    ],
    links: [],
    overview:
      'A 28-node n8n workflow with two scheduled branches: an AI-assisted editorial pipeline and a Blogger community manager. The content branch reads Blogger pageviews and recent posts, then coordinates strategist, idea, writer, editor, and designer agents using Ollama Cloud Llama. It allows up to two revisions and publishes automatically when the review score reaches the configured threshold of 8; otherwise, it saves a draft. The community branch checks comments every three hours, classifies spam, approves pending comments, and can send reply drafts to Telegram when enabled.',
    whatIBuilt: [
      'Created a scheduled and manually testable n8n workflow with 28 connected nodes',
      'Connected Blogger metrics and post history to an AI editorial strategy and content-generation pipeline',
      'Orchestrated specialist agents for growth strategy, topic ideation, writing, editing, and article design',
      'Added a quality-score gate with a two-revision limit and automatic publish-or-draft behavior',
      'Built a separate comment-management branch for spam classification, comment approval, and optional Telegram reply drafts',
      'Added workflow memory for published-post history and reader insights, with environment-based Ollama configuration and API-key rotation',
    ],
    role: 'n8n Workflow Design & Automation',
    responsibilities: [
      { area: 'Content Pipeline', detail: 'Gather Blogger performance context and coordinate AI agents from strategy through article design' },
      { area: 'Publishing Controls', detail: 'Apply the configured quality threshold and revision limit before publishing or saving a draft' },
      { area: 'Community Management', detail: 'Check new Blogger comments, classify spam, approve pending comments, and optionally send reply drafts to Telegram' },
      { area: 'Workflow Reliability', detail: 'Support manual testing, persist workflow memory, and rotate configured Ollama API keys on retryable failures' },
    ],
    sections: [
      {
        heading: 'Performance-aware editorial planning',
        body: 'The workflow reads Blogger pageview totals for recent and all-time ranges and fetches recent posts before asking the Growth Strategist and Idea Agent to plan content. This context helps guide topic selection toward the configured audience-growth objective.',
      },
      {
        heading: 'Multi-agent writing and review',
        body: 'The Writer Agent drafts an article, the Editor Agent evaluates it, and the workflow routes it either to publishing or back for revision. The configured maximum is two revisions. The Designer Agent creates an article visual from the selected image query.',
      },
      {
        heading: 'Quality-gated publishing',
        body: 'Automatic publishing is enabled in the workflow configuration. A post is published through the Blogger API when the review score meets the configured minimum of 8; otherwise, it is saved as a draft. The workflow then records the post title, score, revision count, status, and URL in its memory.',
      },
      {
        heading: 'Comment moderation',
        body: 'A separate schedule checks Blogger comments every three hours. The Community Manager Agent identifies spam, approves pending comments when appropriate, and can send reply drafts to Telegram. Telegram replies are optional and disabled by default in the provided workflow notes.',
      },
      {
        heading: 'Configuration',
        body: 'Ollama URL, model, and API keys are read from the Docker environment; Blogger requests use configured OAuth2 credentials. The workflow sets a goal of 10,000 monthly pageviews; this is a configured target, not a reported outcome.',
      },
      {
        heading: 'Observed Blogger evidence',
        body: 'The supplied Blogger dashboard screenshot shows 88 articles, 2 comments, and 218 all-time pageviews. The other captures show the published article list, an article preview, and article content. These are blog-level snapshots and demonstrate published content, but do not attribute every article or pageview to this workflow; no n8n execution logs were supplied.',
      },
    ],
    flowSteps: [
      { label: 'Trigger', detail: 'Start on schedule or run a manual test' },
      { label: 'Gather context', detail: 'Read Blogger pageviews, posts, and workflow memory' },
      { label: 'Create & review', detail: 'Run strategy, idea, writing, editing, and revision agents' },
      { label: 'Publish or draft', detail: 'Generate an article visual and apply the review-score gate' },
      { label: 'Manage community', detail: 'On a separate schedule, moderate comments and optionally send Telegram reply drafts' },
    ],
    features: [
      { title: 'AI Editorial Team', description: 'Coordinate strategist, idea, writer, editor, and designer agents through n8n.' },
      { title: 'Blogger Context', description: 'Use pageview ranges and recent posts to inform the configured content strategy.' },
      { title: 'Quality Gate', description: 'Publish when the review score reaches 8; otherwise save a draft, with up to two revisions.' },
      { title: 'Comment Moderation', description: 'Check new comments every three hours, classify spam, and approve pending comments.' },
      { title: 'Optional Telegram Drafts', description: 'Send suggested comment replies through Telegram when configured.' },
      { title: 'Persistent Workflow Memory', description: 'Record recent publishing history and reader insights between runs.' },
    ],
    results: [
      {
        label: 'Articles shown in snapshot',
        value: '88',
        description: 'Count visible in the supplied Blogger dashboard; not all are attributed to this workflow.',
      },
      {
        label: 'All-time pageviews shown',
        value: '218',
        description: 'Blog-level snapshot value, not a per-workflow analytics result.',
      },
      {
        label: 'Comments shown in snapshot',
        value: '2',
        description: 'Count visible in the supplied Blogger dashboard screenshot.',
      },
    ],
    gallery: [
      { src: '/images/projects/autonomous-blogger-ai-team/workflow-overview.png', caption: 'n8n editorial publishing and community management workflow' },
      { src: '/images/projects/autonomous-blogger-ai-team/blogger-posts-dashboard.png', caption: 'Blogger dashboard listing published articles' },
      { src: '/images/projects/autonomous-blogger-ai-team/published-article-preview.png', caption: 'Preview of a published article with its generated visual' },
      { src: '/images/projects/autonomous-blogger-ai-team/article-content-and-stack.png', caption: 'Published article content and automation stack explanation' },
      { src: '/images/projects/autonomous-blogger-ai-team/blog-analytics-dashboard.png', caption: 'Blogger dashboard snapshot showing article, comment, and pageview counts' },
      { src: '/images/projects/autonomous-blogger-ai-team/published-articles-list.png', caption: 'Additional published articles on the Blogger site' },
    ],
  },
  {
    slug: 'autoloc',
    title: 'AutoLoc Tunisia',
    shortTitle: 'AutoLoc',
    tagline: 'A complete car-rental experience, from browsing the fleet to managing reservations.',
    description:
      'A car-rental platform for Tunisia with a React customer website, a Spring Boot backend, and a PostgreSQL database. Customers can browse vehicles, search by pickup and return locations and dates, and submit rental requests; administrators manage the fleet and day-to-day operations.',
    categories: ['Frontend', 'Backend', 'SaaS'],
    projectType: 'Car Rental / Booking',
    year: '',
    image: '/images/projects/autoloc/cover.png',
    imageAspect: 'aspect-[1902/945]',
    heroImage: '/images/projects/autoloc/cover.png',
    heroImageAspect: 'aspect-[1902/945]',
    featured: false,
    technologies: ['React', 'Spring Boot', 'PostgreSQL'],
    techGroups: [
      {
        label: 'Frontend',
        items: [{ name: 'React', description: 'Customer rental website and booking experience' }],
      },
      {
        label: 'Backend & Data',
        items: [
          { name: 'Spring Boot', description: 'Application backend' },
          { name: 'PostgreSQL', description: 'Relational database' },
        ],
      },
    ],
    links: [],
    overview:
      'AutoLoc is a car-rental platform for Tunisia. The public website presents the fleet, rental services, agencies, and customer reviews, and lets customers search vehicles by pickup and return locations and dates. A Spring Boot backend and PostgreSQL database support a management dashboard for vehicles, reservations, customers, availability, pricing, agencies, services, and reviews.',
    whatIBuilt: [
      'Built a React website for discovering vehicles, rental services, agencies, and customer reviews',
      'Created fleet search and vehicle detail views with pickup/return locations, rental dates, availability, and estimated pricing',
      'Implemented a Spring Boot backend connected to PostgreSQL',
      'Developed administrative views for the vehicle fleet, reservations, and customers',
      'Added management tools for availability calendars, pricing, agencies, additional services, and customer reviews',
    ],
    role: 'Full-Stack Development',
    responsibilities: [
      { area: 'Customer Website', detail: 'Built public pages for the rental fleet, service options, agency locations, and contact information' },
      { area: 'Rental Search & Requests', detail: 'Implemented vehicle browsing and rental date/location selection with an estimated price and reservation request flow' },
      { area: 'Administration', detail: 'Created dashboard views to manage vehicles, reservations, customers, availability, prices, agencies, services, and reviews' },
      { area: 'Backend & Database', detail: 'Connected the React application to a Spring Boot backend and PostgreSQL database' },
    ],
    sections: [
      {
        heading: 'Browse and book a vehicle',
        body: 'Customers can browse a searchable and filterable vehicle fleet, open vehicle details, choose pickup and return locations, and select rental dates. The booking view presents availability and an estimated rental total before the customer submits a request.',
      },
      {
        heading: 'Rental operations dashboard',
        body: 'Administrators can review reservation requests and statuses, manage customer records and vehicle information, and view rental revenue and booking activity. A calendar provides a vehicle availability view, while pricing can be configured at daily, weekly, and monthly rates.',
      },
      {
        heading: 'Agencies and services',
        body: 'The application includes agency records for locations across Tunisia and configurable rental add-ons such as airport pickup, hotel delivery, an additional driver, child seats, GPS navigation, and premium insurance.',
      },
      {
        heading: 'Application stack',
        body: 'The customer-facing application is built with React and uses a Spring Boot backend with PostgreSQL for application data.',
      },
    ],
    flowSteps: [
      { label: 'Browse', detail: 'Explore and filter the available vehicle fleet' },
      { label: 'Choose', detail: 'Open vehicle details and select pickup/return locations and rental dates' },
      { label: 'Review', detail: 'Check vehicle availability and the estimated rental price' },
      { label: 'Request', detail: 'Submit a reservation request for administration' },
      { label: 'Manage', detail: 'Administrators manage reservations, vehicles, customers, and availability' },
    ],
    features: [
      { title: 'Vehicle Fleet', description: 'Browse and filter rental cars by category, transmission, fuel, seats, and maximum daily price.' },
      { title: 'Rental Search', description: 'Choose pickup and return locations and dates to view vehicle availability and estimated costs.' },
      { title: 'Reservation Management', description: 'Review customer bookings and manage reservation status from the admin dashboard.' },
      { title: 'Fleet Administration', description: 'Manage vehicle details, availability, featured listings, and daily, weekly, and monthly prices.' },
      { title: 'Agencies & Add-ons', description: 'Maintain rental locations and additional services such as airport pickup, hotel delivery, and GPS.' },
      { title: 'Customer Reviews', description: 'Review and moderate customer feedback from the administration area.' },
    ],
    gallery: [
      { src: '/images/projects/autoloc/featured-vehicles.png', caption: 'Featured vehicles on the homepage' },
      { src: '/images/projects/autoloc/trust-and-reviews.png', caption: 'Rental commitments and customer reviews' },
      { src: '/images/projects/autoloc/footer-cta.png', caption: 'Vehicle reservation call to action and site footer' },
      { src: '/images/projects/autoloc/fleet-listing.png', caption: 'Fleet search, filters, and vehicle cards' },
      { src: '/images/projects/autoloc/fleet-listing-more.png', caption: 'Additional vehicles in the fleet listing' },
      { src: '/images/projects/autoloc/fleet-footer.png', caption: 'Fleet listing and site footer' },
      { src: '/images/projects/autoloc/vehicle-detail.png', caption: 'Vehicle details, rental dates, and estimated price' },
      { src: '/images/projects/autoloc/services.png', caption: 'Customer-facing rental services' },
      { src: '/images/projects/autoloc/contact.png', caption: 'Contact information and customer message form' },
      { src: '/images/projects/autoloc/admin-dashboard.png', caption: 'Rental operations dashboard' },
      { src: '/images/projects/autoloc/admin-vehicles.png', caption: 'Vehicle fleet administration' },
      { src: '/images/projects/autoloc/admin-reservations.png', caption: 'Reservation management and booking statuses' },
      { src: '/images/projects/autoloc/admin-customers.png', caption: 'Customer records' },
      { src: '/images/projects/autoloc/admin-availability.png', caption: 'Vehicle availability calendar' },
      { src: '/images/projects/autoloc/admin-pricing.png', caption: 'Daily, weekly, and monthly rental rates' },
      { src: '/images/projects/autoloc/admin-agencies.png', caption: 'Agency locations and contact details' },
      { src: '/images/projects/autoloc/admin-services.png', caption: 'Rental add-on services and prices' },
      { src: '/images/projects/autoloc/admin-reviews.png', caption: 'Customer review moderation' },
    ],
  },
  {
    slug: 'hr-management-platform',
    title: 'HR Management Platform',
    shortTitle: 'HR Platform',
    tagline: '',
    description: 'A human resources management platform. Details to be added.',
    categories: ['Backend', 'SaaS'],
    projectType: 'Enterprise / HR',
    year: '',
    image: '/images/projects/hr-management.jpg',
    featured: false,
    technologies: [],
    links: [],
    overview: '',
    whatIBuilt: [],
    role: '',
  },
  {
    slug: 'event-capture',
    title: 'Event Capture',
    shortTitle: 'Event Capture',
    tagline: '',
    description: 'A system for capturing and processing events. Details to be added.',
    categories: ['Backend', 'Architecture'],
    projectType: 'Backend / Event System',
    year: '',
    image: '/images/projects/event-capture.jpg',
    featured: false,
    technologies: [],
    links: [],
    overview: '',
    whatIBuilt: [],
    role: '',
  },
  {
    slug: 'mobile-recommender',
    title: 'Mobile Recommender',
    shortTitle: 'Recommender',
    tagline: '',
    description: 'A mobile recommender application. Details to be added.',
    categories: ['Mobile', 'AI'],
    projectType: 'Mobile / AI',
    year: '',
    image: '/images/projects/mobile-recommender.jpg',
    featured: false,
    technologies: [],
    links: [],
    overview: '',
    whatIBuilt: [],
    role: '',
  },
  {
    slug: 'euro-route-flow',
    title: 'EURO-ROUTE-FLOW',
    shortTitle: 'Euro Route Flow',
    tagline: 'A delivery-management platform spanning customer requests, drivers, and operations.',
    description:
      'A delivery-management system with a React and TypeScript web application, Java 17 and Spring Boot REST API, PostgreSQL database, and Flutter mobile app, run together with Docker Compose.',
    categories: ['Backend', 'Frontend', 'Mobile', 'DevOps'],
    projectType: 'Delivery Management / Logistics',
    year: '',
    image: '/images/projects/euro-route-flow/cover.png',
    imageAspect: 'aspect-[1900/944]',
    heroImage: '/images/projects/euro-route-flow/cover.png',
    heroImageAspect: 'aspect-[1900/944]',
    featured: false,
    technologies: ['React', 'TypeScript', 'Java 17', 'Spring Boot', 'REST API', 'PostgreSQL', 'Flutter', 'Docker Compose', 'JWT'],
    techGroups: [
      {
        label: 'Web',
        items: [
          { name: 'React', description: 'Delivery website and operations interface' },
          { name: 'TypeScript', description: 'Typed web application' },
        ],
      },
      {
        label: 'Backend & Data',
        items: [
          { name: 'Java 17 / Spring Boot', description: 'REST API' },
          { name: 'PostgreSQL', description: 'Application database' },
          { name: 'JWT', description: 'Authentication' },
        ],
      },
      {
        label: 'Mobile & Deployment',
        items: [
          { name: 'Flutter', description: 'Mobile application' },
          { name: 'Docker Compose', description: 'Local multi-service startup' },
        ],
      },
    ],
    links: [
      {
        label: 'GitHub repository',
        href: 'https://github.com/GABSIWAEL/euro-route-flow',
        type: 'github',
      },
    ],
    overview:
      'Euro Route Flow is a delivery-management platform composed of a React/TypeScript web app, a Java 17/Spring Boot REST API, PostgreSQL, and a Flutter mobile app. The screenshots show customer delivery request forms and operational tools for managing requests, drivers, performance, visitors, messages, and statistics. The repository provides Docker Compose for starting the web app, API, and database together.',
    whatIBuilt: [
      'Created a customer-facing delivery website with service information and a structured shipment request flow',
      'Built a delivery operations dashboard for monitoring requests, statuses, driver assignments, and activity',
      'Added driver management and driver performance views',
      'Implemented a Java 17 and Spring Boot REST API backed by PostgreSQL',
      'Included a Flutter mobile application as a separate platform component',
      'Configured Docker Compose to run the web app, API, and database together',
    ],
    role: 'Delivery Platform Development',
    responsibilities: [
      { area: 'Customer Web Experience', detail: 'Built the delivery service pages and request form for contact details, pickup and delivery addresses, parcel details, and preferred schedule' },
      { area: 'Operations Dashboard', detail: 'Provided delivery request management, status tracking, driver views, performance, visitor monitoring, messages, statistics, and user management' },
      { area: 'Backend & Data', detail: 'Implemented the Java 17/Spring Boot REST API with PostgreSQL' },
      { area: 'Mobile & Deployment', detail: 'Included a Flutter mobile app and Docker Compose configuration for the main services' },
    ],
    sections: [
      {
        heading: 'Customer delivery requests',
        body: 'Customers can request a delivery through a structured form that collects contact information, pickup and delivery addresses, parcel type, optional dimensions and weight, a requested pickup date, an optional time window, and special instructions.',
      },
      {
        heading: 'Delivery operations',
        body: 'The web dashboard provides an operational view of delivery requests, including statuses, driver assignment, request details, date filtering, search, and report/export actions. Additional dashboard areas cover driver management and performance, visitor activity, contact messages, statistics, and user administration.',
      },
      {
        heading: 'Application architecture',
        body: 'The project is split into a React/TypeScript web application, a Java 17 and Spring Boot REST API, a PostgreSQL database, and a Flutter mobile application. Docker Compose provides a unified local startup for the web app, API, and database.',
      },
      {
        heading: 'Security configuration',
        body: 'The README documents JWT-based security and environment-based configuration for local credentials and the signing secret. Secrets belong in a local .env file and should not be committed.',
      },
    ],
    flowSteps: [
      { label: 'Request', detail: 'Customer enters contact, address, parcel, and schedule details' },
      { label: 'API', detail: 'React web app communicates with the Spring Boot REST API' },
      { label: 'Manage', detail: 'Operations staff review requests, statuses, and driver assignments' },
      { label: 'Deliver', detail: 'Delivery work is supported by the mobile application' },
      { label: 'Monitor', detail: 'Dashboard views provide operational and driver activity information' },
    ],
    features: [
      { title: 'Delivery Request Form', description: 'Capture customer contact details, pickup and delivery addresses, parcel information, requested date, and optional instructions.' },
      { title: 'Delivery Operations Dashboard', description: 'Search and filter requests, review statuses and assignments, inspect details, and export reports.' },
      { title: 'Driver Management', description: 'Manage driver records and review delivery performance.' },
      { title: 'Operational Views', description: 'Access visitor activity, messages, delivery statistics, and user administration.' },
      { title: 'Web, API & Mobile', description: 'Separate React/TypeScript web, Spring Boot REST API, PostgreSQL, and Flutter components.' },
      { title: 'Docker Compose', description: 'Start the web app, API, and database together for local development.' },
    ],
    gallery: [
      { src: '/images/projects/euro-route-flow/screenshot-01.png', caption: 'Company information and delivery services' },
      { src: '/images/projects/euro-route-flow/screenshot-02.png', caption: 'Delivery service catalogue' },
      { src: '/images/projects/euro-route-flow/screenshot-03.png', caption: 'Customer call to action and site footer' },
      { src: '/images/projects/euro-route-flow/screenshot-04.png', caption: 'Customer delivery request form' },
      { src: '/images/projects/euro-route-flow/screenshot-05.png', caption: 'Parcel details and requested delivery schedule' },
      { src: '/images/projects/euro-route-flow/screenshot-06.png', caption: 'Delivery requests dashboard' },
      { src: '/images/projects/euro-route-flow/screenshot-07.png', caption: 'Driver management' },
      { src: '/images/projects/euro-route-flow/screenshot-08.png', caption: 'Live visitor monitoring' },
      { src: '/images/projects/euro-route-flow/screenshot-09.png', caption: 'Contact messages' },
      { src: '/images/projects/euro-route-flow/screenshot-10.png', caption: 'Delivery statistics and charts' },
      { src: '/images/projects/euro-route-flow/screenshot-11.png', caption: 'User administration' },
      { src: '/images/projects/euro-route-flow/screenshot-12.png', caption: 'Delivery request details and status' },
      { src: '/images/projects/euro-route-flow/screenshot-13.png', caption: 'Exported delivery report in Excel' },
      { src: '/images/projects/euro-route-flow/screenshot-14.png', caption: 'Driver performance dashboard' },
    ],
  },
  {
    slug: 'target-suijet',
    title: 'Target-Suijet',
    shortTitle: 'Target-Suijet',
    tagline: '',
    description: 'A targeting and automation project. Details to be added.',
    categories: ['Backend'],
    projectType: 'Software / Automation',
    year: '',
    image: '/images/projects/target-suijet.jpg',
    featured: false,
    technologies: [],
    links: [],
    overview: '',
    whatIBuilt: [],
    role: '',
  },
  {
    slug: 'wine-quality-prediction-machine-learning-model',
    title: 'Wine Quality Prediction',
    shortTitle: 'Wine Quality',
    tagline: 'Predict red wine quality from 11 laboratory measurements, one sample or a batch at a time.',
    description:
      'A red wine quality prediction project with a dataset, model-development notebook, saved RandomForestClassifier, and a Streamlit application for individual and batch CSV predictions.',
    categories: ['Machine Learning', 'AI'],
    projectType: 'Machine Learning / Classification',
    year: '',
    image: '/images/projects/wine-quality-prediction/streamlit-app.png',
    heroImage: '/images/projects/wine-quality-prediction/streamlit-app.png',
    heroImageAspect: 'aspect-[949/768]',
    featured: false,
    technologies: ['Python 3.10+', 'Scikit-learn 1.6.1', 'RandomForestClassifier', 'Streamlit', 'Jupyter Notebook', 'Pandas'],
    links: [
      {
        label: 'GitHub repository',
        href: 'https://github.com/GABSIWAEL/wine_quality_prediction_machine_learning_model',
        type: 'github',
      },
    ],
    overview:
      'This project predicts a red wine quality label from 11 physicochemical measurements. The repository includes the red-wine dataset, a Jupyter notebook for analysis and model development, a saved RandomForestClassifier, and a Streamlit app. The app supports single-sample predictions and batch CSV uploads, displays predicted-class probabilities, and lets users download batch results. Predictions are estimates based on the training data and are not a substitute for professional sensory evaluation.',
    whatIBuilt: [
      'Explored the dataset and feature relationships, including a correlation matrix',
      'Developed a RandomForestClassifier using the wine laboratory measurements',
      'Saved and loaded the trained model artifact so the app does not retrain the model on startup',
      'Built a Streamlit interface for entering measurements and viewing predicted quality and class probabilities',
      'Added batch CSV prediction and downloadable results',
    ],
    role: 'Machine Learning Project',
    sections: [
      {
        heading: 'Data exploration and model',
        body: 'The notebook explores the red wine dataset and its feature relationships before developing a RandomForestClassifier. The model uses 11 physicochemical measurements and predicts quality labels learned during training.',
      },
      {
        heading: 'Single and batch predictions',
        body: 'The Streamlit app accepts laboratory measurements for one wine or a CSV containing multiple samples. For a single prediction it displays the predicted quality score and probabilities by quality class; batch predictions can be downloaded as a CSV.',
      },
      {
        heading: 'Saved model and reproducibility',
        body: 'The application loads the saved Random Forest model rather than retraining on startup. The saved artifact was serialized with scikit-learn 1.6.1, and the project pins that version in its app requirements for compatibility.',
      },
      {
        heading: 'Interpreting results',
        body: 'The displayed confidence is the largest predicted class probability, not a guarantee of prediction accuracy. Results are estimates based on the training data and are not a substitute for professional sensory evaluation.',
      },
    ],
    flowSteps: [
      { label: 'Measurements', detail: 'Enter 11 laboratory values or upload a batch CSV' },
      { label: 'Model', detail: 'Load the saved RandomForestClassifier' },
      { label: 'Prediction', detail: 'Estimate a quality label and class probabilities' },
      { label: 'Results', detail: 'Review one sample or download batch predictions' },
    ],
    features: [
      { title: 'Single Wine Prediction', description: 'Enter the 11 physicochemical measurements and estimate a wine quality score.' },
      { title: 'Batch CSV Prediction', description: 'Upload a CSV of samples and download the resulting predictions.' },
      { title: 'Class Probabilities', description: 'Review the largest predicted class probability and, for a single sample, probabilities across quality scores.' },
      { title: 'Saved Model Artifact', description: 'Load the trained RandomForestClassifier at runtime without retraining the model on app startup.' },
    ],
    engineeringDecisions: [
      {
        challenge: 'The prediction interface should start quickly without retraining each time it launches.',
        decision: 'Serialize the trained classifier and load the saved model in the Streamlit app.',
        why: 'Separating model development from inference makes app startup use the existing trained artifact and keeps the runtime workflow straightforward.',
      },
      {
        challenge: 'Users need predictions for both individual samples and larger datasets.',
        decision: 'Support single-measurement input as well as batch CSV uploads with downloadable results.',
        why: 'The same saved model can serve interactive evaluation and batch workflows through the same application.',
      },
    ],
    gallery: [
      { src: '/images/projects/wine-quality-prediction/correlation-matrix.png', caption: 'Correlation matrix of wine measurements and quality' },
      { src: '/images/projects/wine-quality-prediction/streamlit-app.png', caption: 'Streamlit red wine quality prediction app' },
    ],
  },
  {
    slug: 'heart-disease-detection-machine-learning-model',
    title: 'Heart Disease Detection',
    shortTitle: 'Heart Disease',
    tagline: 'A Streamlit demo that applies a trained Logistic Regression model to 13 supplied measurements.',
    description:
      'An educational Streamlit application that loads a saved Logistic Regression model and classifies supplied measurements as containing or not containing a signal associated with heart disease.',
    categories: ['Machine Learning', 'AI'],
    projectType: 'Machine Learning / Classification',
    year: '',
    image: '/images/projects/heart-disease-detection/no-signal-example.png',
    heroImage: '/images/projects/heart-disease-detection/no-signal-example.png',
    heroImageAspect: 'aspect-[950/768]',
    featured: false,
    technologies: ['Python', 'Streamlit', 'Scikit-learn 1.6.1', 'Logistic Regression'],
    links: [
      {
        label: 'GitHub repository',
        href: 'https://github.com/GABSIWAEL/heart_disease_detection_machine_learning_model',
        type: 'github',
      },
    ],
    overview:
      'An educational Streamlit app that loads a saved Logistic Regression model and accepts 13 patient measurements in the order expected by the model. It returns class 1 when the measurements contain a signal associated with heart disease and class 0 when it does not detect that signal. A class 0 result does not rule out heart disease. This project is not a diagnosis and must not replace advice from a qualified healthcare professional.',
    whatIBuilt: [
      'Connected a saved Logistic Regression model to a Streamlit application without retraining it at startup',
      'Built an input form for the 13 model features, including numeric and encoded categorical values',
      'Displayed the model output as a signal detected or not detected',
      'Documented the required scikit-learn version for loading the saved model',
      'Added educational-purpose and non-diagnostic notices to the prediction experience',
    ],
    role: 'Machine Learning Project',
    sections: [
      {
        heading: 'Model inputs',
        body: 'The application passes 13 measurements to the model in a fixed order: age, sex, chest pain type, resting blood pressure, serum cholesterol, fasting blood sugar, resting ECG, maximum heart rate, exercise-induced angina, ST depression, slope, number of major vessels, and thalassemia. Categorical inputs use the numeric codes from the training dataset.',
      },
      {
        heading: 'Prediction and model loading',
        body: 'The app loads the saved Logistic Regression model from the repository and uses it to classify the submitted measurements. Class 1 indicates a signal associated with heart disease; class 0 means the model did not detect that signal. A class 0 result does not rule out heart disease.',
      },
      {
        heading: 'Educational use only',
        body: 'This project is for educational purposes. Its output is not a diagnosis and must not replace advice from a qualified healthcare professional.',
      },
    ],
    flowSteps: [
      { label: 'Enter inputs', detail: 'Provide the 13 measurements using the documented categorical codes' },
      { label: 'Load model', detail: 'Use the saved Logistic Regression model' },
      { label: 'Classify', detail: 'Return class 1 or class 0 for an associated signal' },
      { label: 'Interpret carefully', detail: 'A no-signal result is not a medical diagnosis or rule-out' },
    ],
    features: [
      { title: '13-Feature Input Form', description: 'Collects patient measurements in the exact order expected by the trained model.' },
      { title: 'Categorical Value Codes', description: 'Uses numeric codes for categories such as sex, chest pain type, ECG, and thalassemia.' },
      { title: 'Saved Logistic Regression Model', description: 'Loads the trained artifact rather than retraining the model when the app starts.' },
      { title: 'Careful Result Language', description: 'Reports whether a signal was detected and clarifies that no signal does not rule out heart disease.' },
    ],
    engineeringDecisions: [
      {
        challenge: 'The model expects input features in a specific order and categorical encoding.',
        decision: 'Document the 13 fields and submit them in the same order used by the trained model.',
        why: 'Keeping the application input aligned with the training feature order avoids passing measurements into the wrong model fields.',
      },
      {
        challenge: 'The app should use the existing trained model and be compatible with its serialization version.',
        decision: 'Load the saved model artifact and use scikit-learn 1.6.1 as documented.',
        why: 'Using the matching scikit-learn version avoids model compatibility warnings and prevents unnecessary retraining at startup.',
      },
      {
        challenge: 'A model result could be misunderstood as a clinical conclusion.',
        decision: 'Describe outputs only as detected or not detected signal and display an educational-use disclaimer.',
        why: 'The result is a model classification, not a diagnosis; a no-signal result must not be interpreted as ruling out heart disease.',
      },
    ],
    gallery: [
      { src: '/images/projects/heart-disease-detection/no-signal-example.png', caption: 'Example prediction: no signal detected (not a rule-out)' },
      { src: '/images/projects/heart-disease-detection/signal-example.png', caption: 'Example prediction: signal detected' },
    ],
  },
  {
    slug: 'twitter-sentiment-analysis-machine-learning-model',
    title: 'Twitter Sentiment Analysis',
    shortTitle: 'Twitter Sentiment',
    tagline: 'Classify tweet text as positive or negative using a saved model and vectorizer.',
    description:
      'A Python machine-learning project with a development notebook, saved text vectorizer and trained model, and a Streamlit app for classifying user-provided tweets.',
    categories: ['Machine Learning', 'AI'],
    projectType: 'Machine Learning / NLP',
    year: '',
    image: '/images/projects/twitter-sentiment-analysis/streamlit-app.png',
    heroImage: '/images/projects/twitter-sentiment-analysis/streamlit-app.png',
    heroImageAspect: 'aspect-[1038/768]',
    featured: false,
    technologies: ['Python 3.10+', 'Scikit-learn', 'Streamlit', 'Text Vectorization', 'Notebook'],
    links: [
      {
        label: 'GitHub repository',
        href: 'https://github.com/GABSIWAEL/twitter_sentiment_analysis_machine_learning_model',
        type: 'github',
      },
    ],
    overview:
      'This project trains and uses a machine-learning model to classify tweets as positive or negative. It includes a notebook for model development and experimentation, a saved trained model and vectorizer, and a Streamlit application that accepts tweet text and displays the predicted sentiment.',
    whatIBuilt: [
      'Developed and experimented with the sentiment model in a notebook',
      'Saved the trained model and text vectorizer for application use',
      'Built a Streamlit interface for submitting a tweet and viewing its positive or negative classification',
    ],
    role: 'Machine Learning Project',
    sections: [
      {
        heading: 'Model development',
        body: 'A notebook is used for model development and experimentation. The project keeps the trained model and its text vectorizer as separate saved artifacts for use by the application.',
      },
      {
        heading: 'Streamlit prediction app',
        body: 'Users enter tweet text in the web interface and request a sentiment prediction. The app loads the saved vectorizer and model, transforms the text, and classifies it as positive or negative.',
      },
      {
        heading: 'Project setup',
        body: 'The application uses Python 3.10 or later with scikit-learn and Streamlit. The README documents installing dependencies and launching the app with Streamlit.',
      },
    ],
    flowSteps: [
      { label: 'Enter tweet', detail: 'Submit text through the Streamlit interface' },
      { label: 'Vectorize', detail: 'Transform text with the saved vectorizer' },
      { label: 'Classify', detail: 'Run the saved trained model' },
      { label: 'View result', detail: 'Show positive or negative sentiment' },
    ],
    features: [
      { title: 'Interactive Text Input', description: 'Enter a tweet in the Streamlit application for classification.' },
      { title: 'Saved Vectorizer & Model', description: 'Load both trained artifacts from the repository for inference.' },
      { title: 'Binary Sentiment Result', description: 'Classify the submitted tweet as positive or negative.' },
      { title: 'Notebook Experiments', description: 'Develop and experiment with the model in the included notebook.' },
    ],
    engineeringDecisions: [
      {
        challenge: 'The application needs to apply the same text transformation used with the trained model.',
        decision: 'Save and load the vectorizer alongside the trained model.',
        why: 'Applying the saved vectorizer before prediction keeps inference aligned with the model’s expected text features.',
      },
      {
        challenge: 'The model should be accessible through a simple user-facing workflow.',
        decision: 'Provide a Streamlit interface for entering tweet text and displaying the predicted class.',
        why: 'This makes the classifier easy to try without requiring users to interact with the notebook or call the model directly.',
      },
    ],
    gallery: [
      { src: '/images/projects/twitter-sentiment-analysis/streamlit-app.png', caption: 'Streamlit Twitter sentiment prediction app' },
    ],
  },
  {
    slug: 'fruit-vegetable-image-classification-machine-learning-model',
    title: 'Fruit & Vegetable Image Classification',
    shortTitle: 'Fruit & Vegetable Classifier',
    tagline: 'Upload a fruit or vegetable photo and get a CNN prediction across 36 classes.',
    description:
      'A TensorFlow/Keras Convolutional Neural Network trained on 36 fruit and vegetable classes, with a Streamlit app for image uploads, confidence scores, and top-five predictions.',
    categories: ['Machine Learning', 'AI', 'Computer Vision'],
    projectType: 'Machine Learning / Computer Vision',
    year: '',
    image: '/images/projects/fruit-vegetable-classification/homepage.png',
    imageAspect: 'aspect-[937/463]',
    heroImage: '/images/projects/fruit-vegetable-classification/homepage.png',
    heroImageAspect: 'aspect-[937/463]',
    featured: false,
    technologies: ['Python', 'TensorFlow', 'Keras', 'NumPy', 'Pandas', 'Matplotlib', 'Streamlit', 'CNN'],
    links: [
      {
        label: 'GitHub repository',
        href: 'https://github.com/GABSIWAEL/Fruit-Vegetable-Image-Classification-Machine-Learning-Model',
        type: 'github',
      },
    ],
    overview:
      'A computer-vision project that trains a TensorFlow/Keras CNN to classify images into 36 fruit and vegetable classes. The dataset contains 3,115 training images, 351 validation images, and 359 test images. A Streamlit app lets users upload an image and view the predicted class, confidence, and top-five predictions. The README reports approximately 95.26% test accuracy after 25 training epochs.',
    whatIBuilt: [
      'Prepared and loaded image data for 36 fruit and vegetable classes, split into training, validation, and test sets',
      'Built a TensorFlow/Keras CNN with image rescaling, convolution and max-pooling blocks, dropout, and dense classification layers',
      'Trained the model for 25 epochs and evaluated it on the test dataset',
      'Saved the trained model as Image_classify.keras',
      'Created a Streamlit application for image upload, prediction confidence, and top-five class results',
    ],
    role: 'Machine Learning Project',
    sections: [
      {
        heading: 'Dataset and preprocessing',
        body: 'The dataset covers 36 fruit and vegetable classes, with 3,115 training images, 351 validation images, and 359 test images. Input images are resized to 180 × 180 pixels and normalized using a Rescaling layer.',
      },
      {
        heading: 'CNN architecture and training',
        body: 'The TensorFlow/Keras model uses convolutional layers with 16, 32, and 64 filters, max pooling, flattening, dropout, a 128-unit dense layer, and an output layer for 36 classes. It is trained for 25 epochs with the Adam optimizer and sparse categorical crossentropy.',
      },
      {
        heading: 'Streamlit inference app',
        body: 'Users upload a JPG or PNG image. The app displays the uploaded image, predicts a fruit or vegetable class, reports prediction confidence, and shows the top five predictions using the saved Image_classify.keras model.',
      },
      {
        heading: 'Evaluation',
        body: 'The repository README reports approximately 98.5% training accuracy, 95.2% validation accuracy, and 95.26% test accuracy, with test loss around 0.254. These are the project’s reported evaluation results.',
      },
    ],
    flowSteps: [
      { label: 'Image dataset', detail: 'Load 36 classes across train, validation, and test sets' },
      { label: 'Preprocess', detail: 'Resize to 180 × 180 and rescale pixel values' },
      { label: 'Train & evaluate', detail: 'Train the CNN for 25 epochs and evaluate on test data' },
      { label: 'Save model', detail: 'Export the trained model as Image_classify.keras' },
      { label: 'Predict', detail: 'Upload an image in Streamlit and inspect the top-five results' },
    ],
    features: [
      { title: '36 Image Classes', description: 'Recognizes the 36 fruit and vegetable categories listed in the project dataset.' },
      { title: 'Streamlit Image Upload', description: 'Upload a JPG or PNG, preview it, and request a model prediction.' },
      { title: 'Confidence & Top Five', description: 'View the prediction confidence and the five highest-ranked class predictions.' },
      { title: 'Saved Keras Model', description: 'Use the trained Image_classify.keras artifact for inference.' },
      { title: 'Training Evaluation', description: 'Separate training, validation, and test sets are used to evaluate the model.' },
    ],
    engineeringDecisions: [
      {
        challenge: 'The classifier needs to recognize many visual categories from input images.',
        decision: 'Use a CNN with stacked convolution and max-pooling layers, followed by dense classification layers for the 36 classes.',
        why: 'Convolutional layers learn image features while pooling reduces spatial dimensions before classification.',
      },
      {
        challenge: 'Uploaded images must use the same input scale as training data.',
        decision: 'Resize images to 180 × 180 pixels and normalize pixel values with a Rescaling layer.',
        why: 'Consistent dimensions and pixel scaling align uploaded inputs with the model’s training pipeline.',
      },
      {
        challenge: 'Users benefit from seeing alternatives when image classes are visually similar.',
        decision: 'Show the top five predictions along with the leading prediction confidence.',
        why: 'The ranked outputs provide more context than a single predicted label.',
      },
    ],
    results: [
      { label: 'Training accuracy', value: '~98.5%', description: 'Reported in the project README' },
      { label: 'Validation accuracy', value: '~95.2%', description: 'Reported in the project README' },
      { label: 'Test accuracy', value: '~95.26%', description: 'Reported in the project README' },
    ],
    gallery: [
      { src: '/images/projects/fruit-vegetable-classification/homepage.png', caption: 'Streamlit fruit and vegetable classifier homepage' },
      { src: '/images/projects/fruit-vegetable-classification/prediction.png', caption: 'Image upload and sweetcorn prediction example' },
      { src: '/images/projects/fruit-vegetable-classification/training-epochs.png', caption: 'Training accuracy and loss across epochs' },
    ],
  },
  {
    slug: 'loan-approval-prediction-machine-learning-model',
    title: 'Loan Approval Prediction',
    shortTitle: 'Loan Approval',
    tagline: 'Explore how applicant and financial features feed a binary loan prediction model.',
    description:
      'A Python and Streamlit machine-learning application that predicts loan approval or rejection using a Scikit-learn Logistic Regression model trained on applicant, credit, loan, and asset features.',
    categories: ['Machine Learning', 'AI'],
    projectType: 'Machine Learning / Classification',
    year: '',
    image: '/images/projects/loan-approval-prediction/interface.png',
    imageAspect: 'aspect-[768/813]',
    heroImage: '/images/projects/loan-approval-prediction/interface.png',
    heroImageAspect: 'aspect-[768/813]',
    featured: false,
    technologies: ['Python', 'Pandas', 'Scikit-learn', 'Logistic Regression', 'StandardScaler', 'Streamlit', 'Pickle'],
    links: [
      {
        label: 'GitHub repository',
        href: 'https://github.com/GABSIWAEL/Loan-Approval-Prediction-Machine-Learning-Model',
        type: 'github',
      },
    ],
    overview:
      'This project trains a Scikit-learn Logistic Regression model to classify a loan as approved or rejected. The workflow cleans and encodes the loan dataset, derives a total-assets feature from four asset categories, splits the data into training and testing sets, and standardizes the model inputs. A Streamlit app collects the same applicant and loan features, applies the saved scaler, and displays the saved model’s prediction. This is an educational demonstration, not a financial assessment or lending decision.',
    whatIBuilt: [
      'Prepared the loan dataset by removing the loan ID, trimming categorical values, and combining asset columns into a total-assets feature',
      'Encoded categorical inputs and split the dataset into training and testing sets using an 80/20 split',
      'Trained a Scikit-learn Logistic Regression classifier with standardized input features',
      'Saved the fitted model and StandardScaler with Pickle for use during inference',
      'Built a Streamlit interface for entering applicant details and viewing approval or rejection predictions',
    ],
    role: 'Machine Learning Project',
    sections: [
      {
        heading: 'Dataset preparation',
        body: 'The training workflow removes the loan_id column, trims extra whitespace in categorical values, encodes education and self-employment, and combines residential, commercial, luxury, and bank assets into a single total-assets feature.',
      },
      {
        heading: 'Model training',
        body: 'The project uses an 80/20 train-test split, StandardScaler for numerical feature scaling, and Scikit-learn LogisticRegression for binary classification. The trained estimator and fitted scaler are saved separately as model.pkl and scaler.pkl.',
      },
      {
        heading: 'Interactive prediction app',
        body: 'The Streamlit app accepts number of dependents, education, self-employment status, annual income, loan amount, loan duration, CIBIL score, and total assets. It applies the saved scaler and model, then displays an approved or rejected result.',
      },
      {
        heading: 'Responsible use',
        body: 'This is a learning project using a specific dataset and a simple classification model. Its output is not a creditworthiness assessment and should not be used to approve or reject real loan applications.',
      },
    ],
    flowSteps: [
      { label: 'Prepare data', detail: 'Clean categorical values and create a total-assets feature' },
      { label: 'Train', detail: 'Encode inputs, split the data 80/20, scale features, and fit Logistic Regression' },
      { label: 'Save artifacts', detail: 'Persist the fitted model and scaler with Pickle' },
      { label: 'Enter details', detail: 'Collect applicant and loan information in Streamlit' },
      { label: 'Predict', detail: 'Scale the inputs and display the model’s approval or rejection class' },
    ],
    features: [
      { title: 'Applicant Inputs', description: 'Collect dependents, education, self-employment, annual income, loan amount and duration, CIBIL score, and total assets.' },
      { title: 'Logistic Regression', description: 'Classify loan outcomes with a Scikit-learn binary classifier.' },
      { title: 'Consistent Scaling', description: 'Reuse the fitted StandardScaler for both training and Streamlit inference.' },
      { title: 'Saved Model Artifacts', description: 'Load the Pickle-serialized model and scaler in the application.' },
      { title: 'Streamlit Interface', description: 'Adjust applicant inputs and view the predicted class in a browser.' },
    ],
    gallery: [
      { src: '/images/projects/loan-approval-prediction/interface.png', caption: 'Loan approval prediction input interface' },
      { src: '/images/projects/loan-approval-prediction/loan-approved.png', caption: 'Example approved prediction' },
      { src: '/images/projects/loan-approval-prediction/loan-rejected.png', caption: 'Example rejected prediction' },
    ],
  },
  {
    slug: 'email-spam-detection-machine-learning-model',
    title: 'Email Spam Detection',
    shortTitle: 'Spam Detection',
    tagline: 'Classify text messages as spam or not spam with a Naive Bayes model.',
    description:
      'A Python and Streamlit text-classification app that uses CountVectorizer and Scikit-learn Multinomial Naive Bayes to identify spam messages.',
    categories: ['Machine Learning', 'AI'],
    projectType: 'Machine Learning / Text Classification',
    year: '',
    image: '/images/projects/email-spam-detection/interface.png',
    imageAspect: 'aspect-[952/637]',
    heroImage: '/images/projects/email-spam-detection/interface.png',
    heroImageAspect: 'aspect-[952/637]',
    featured: false,
    technologies: ['Python', 'Pandas', 'Scikit-learn', 'CountVectorizer', 'Multinomial Naive Bayes', 'Streamlit'],
    links: [
      {
        label: 'GitHub repository',
        href: 'https://github.com/GABSIWAEL/Email-Spam-Detection-Machine-Learning-Model',
        type: 'github',
      },
    ],
    overview:
      'This project trains a Multinomial Naive Bayes classifier to distinguish spam from non-spam messages. It removes duplicate records, splits the dataset into training and testing sets, and converts message text into numeric features with CountVectorizer. A Streamlit interface lets users submit a message and view the predicted class. Predictions are examples from a learning project and should not be treated as a complete email-security solution.',
    whatIBuilt: [
      'Prepared the message dataset by removing duplicate messages',
      'Split the dataset into training and testing sets using an 80/20 split',
      'Converted message text into numeric features with Scikit-learn CountVectorizer',
      'Trained a Multinomial Naive Bayes classifier for spam and not-spam labels',
      'Built a Streamlit interface for entering messages and displaying predictions',
    ],
    role: 'Machine Learning Project',
    sections: [
      {
        heading: 'Text data preparation',
        body: 'The training workflow loads the spam message dataset, removes duplicate messages, and divides the examples into training and testing sets using an 80/20 split.',
      },
      {
        heading: 'Vectorization and classification',
        body: 'CountVectorizer transforms text messages into numerical token-count features. A Scikit-learn Multinomial Naive Bayes classifier learns to distinguish the Spam and Not Spam classes from those features.',
      },
      {
        heading: 'Streamlit application',
        body: 'Users enter a message and request a prediction in the Streamlit interface. The application displays the predicted class, with example screenshots for both spam and non-spam messages.',
      },
      {
        heading: 'Responsible use',
        body: 'This classifier is a small educational project trained on a specific dataset. It can misclassify messages and should not be relied on as the only protection against spam or phishing.',
      },
    ],
    flowSteps: [
      { label: 'Load dataset', detail: 'Read the message examples and remove duplicates' },
      { label: 'Split data', detail: 'Create training and testing sets using an 80/20 split' },
      { label: 'Vectorize', detail: 'Convert text into token-count features with CountVectorizer' },
      { label: 'Train', detail: 'Fit a Multinomial Naive Bayes classifier' },
      { label: 'Predict', detail: 'Submit a message in Streamlit and view Spam or Not Spam' },
    ],
    features: [
      { title: 'Message Input', description: 'Enter a message in the Streamlit app to request a classification.' },
      { title: 'CountVectorizer', description: 'Transform text into numerical token-count features for the model.' },
      { title: 'Multinomial Naive Bayes', description: 'Classify a message as Spam or Not Spam.' },
      { title: 'Prediction Feedback', description: 'Display the predicted class directly beneath the submitted message.' },
      { title: 'Dataset Preparation', description: 'Remove duplicate examples and use an 80/20 train-test split.' },
    ],
    gallery: [
      { src: '/images/projects/email-spam-detection/interface.png', caption: 'Spam message detector interface' },
      { src: '/images/projects/email-spam-detection/spam-result.png', caption: 'Example message classified as spam' },
      { src: '/images/projects/email-spam-detection/not-spam-result.png', caption: 'Example message classified as not spam' },
    ],
  },
];

export const allProjects = [...projects, ...additionalProjects];
export const machineLearningProjects = allProjects.filter((project) =>
  project.categories.includes('Machine Learning')
);
export const n8nAutomationProjects = allProjects.filter((project) =>
  project.categories.includes('Automation')
);
export const projectLibraryProjects = allProjects.filter((project) =>
  !project.categories.includes('Machine Learning') &&
  !project.categories.includes('Automation')
);

export function getProject(slug: string): Project | undefined {
  return allProjects.find((p) => p.slug === slug);
}

export function getProjectIndex(slug: string): number {
  return projects.findIndex((p) => p.slug === slug);
}

export function getAdjacentProjects(slug: string): { prev: Project | undefined; next: Project | undefined } {
  const idx = getProjectIndex(slug);
  if (idx === -1) return { prev: undefined, next: undefined };
  const prev = idx > 0 ? projects[idx - 1] : projects[projects.length - 1];
  const next = idx < projects.length - 1 ? projects[idx + 1] : projects[0];
  return { prev, next };
}

export const projectFilters = [
  'All', 'Backend', '.NET', 'Java', 'AI', 'SaaS', 'Mobile', 'Frontend', 'DevOps', 'Architecture',
];
