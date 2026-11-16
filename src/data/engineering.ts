export interface StackGroup {
  label: string;
  items: string[];
}

export const engineeringStack: StackGroup[] = [
  {
    label: 'Backend',
    items: ['.NET', 'C#', 'Java', 'Spring Boot'],
  },
  {
    label: 'Frontend',
    items: ['Angular', 'React', 'TypeScript'],
  },
  {
    label: 'Distributed Systems',
    items: ['RabbitMQ', 'gRPC', 'Microservices', 'API Gateways'],
  },
  {
    label: 'Infrastructure',
    items: ['Docker', 'Kubernetes', 'NGINX', 'Linux', 'VPS', 'CI/CD'],
  },
  {
    label: 'Observability',
    items: ['Prometheus', 'Grafana', 'Elastic / Kibana'],
  },
  {
    label: 'Data',
    items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis'],
  },
  {
    label: 'AI',
    items: ['LLM applications', 'LLaMA', 'AI-powered systems'],
  },
];

export interface ExperienceItem {
  role: string;
  context: string;
  period: string;
  description: string;
}

export const experience: ExperienceItem[] = [
  {
    role: 'Software Engineering — Backend / Open Banking',
    context: 'STB Bank — PFE Internship',
    period: '2024',
    description:
      'Designed and built microservices for a Banking-as-a-Service platform — accounts, cards, authentication, notifications — with .NET, RabbitMQ, gRPC, and full observability.',
  },
  {
    role: 'Freelance & Product Development',
    context: 'Various',
    period: '2022 — Present',
    description:
      'Built and shipped production platforms across education, events, enterprise management, and AI — covering backend, frontend, infrastructure, and deployment.',
  },
];

export interface EducationItem {
  institution: string;
  field: string;
}

export const education: EducationItem[] = [
  { institution: 'ESPRIT', field: 'Software Engineering' },
  { institution: 'ISET Mahdia', field: 'Electrical / Automation Engineering' },
];
