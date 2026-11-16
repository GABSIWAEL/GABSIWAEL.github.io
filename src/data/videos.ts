interface VideoDetails {
  id: string;
  title: string;
  category: string;
}

export type Video = VideoDetails & (
  | {
      source: 'youtube';
      youtubeUrl: string;
      linkedinEmbedUrl?: never;
      duration: string;
      thumbnail: string;
    }
  | {
      source: 'linkedin';
      youtubeUrl?: never;
      linkedinEmbedUrl: string;
    }
);

export const videos: Video[] = [
  {
    id: 'deploy-secure-ovh-vps',
    source: 'linkedin',
    title: 'Deploy and Secure Your OVH VPS (Beginner-Friendly)',
    category: 'Infrastructure / VPS',
    linkedinEmbedUrl: 'https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7378151466617712640?compact=1',
  },
  {
    id: 'ovh-vps-cicd-jenkins-pipeline',
    source: 'linkedin',
    title: 'Deploy to an OVH VPS: CI/CD Setup, Pipeline Testing & GitHub + Jenkins — Parts 2–3',
    category: 'DevOps / CI/CD',
    linkedinEmbedUrl: 'https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7382722115596259329?compact=1',
  },
  {
    id: 'configure-vps-dns',
    source: 'linkedin',
    title: 'How to Configure Your DNS',
    category: 'Infrastructure / DNS',
    linkedinEmbedUrl: 'https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7470121177827397632?compact=1',
  },
  {
    id: 'purchase-connect-ovh-vps',
    source: 'linkedin',
    title: 'How to Purchase and Connect to an OVH VPS',
    category: 'Infrastructure / VPS',
    linkedinEmbedUrl: 'https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7461753353903996928?compact=1',
  },
  {
    id: 'install-jenkins-vps',
    source: 'linkedin',
    title: 'Install and Configure a Jenkins Environment on a VPS',
    category: 'DevOps / CI/CD',
    linkedinEmbedUrl: 'https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7461755551740518400?compact=1',
  },
  {
    id: 'portainer-vps-part-1',
    source: 'linkedin',
    title: 'How to Use Portainer on Your VPS — Part 1',
    category: 'DevOps / Containers',
    linkedinEmbedUrl: 'https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7395279767177953280?compact=1',
  },
  {
    id: 'portainer-vps-part-2',
    source: 'linkedin',
    title: 'How to Use Portainer on Your VPS — Part 2',
    category: 'DevOps / Containers',
    linkedinEmbedUrl: 'https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7395281426012631040?compact=1',
  },
  {
    id: 'portainer-vps-final-part',
    source: 'linkedin',
    title: 'How to Use Portainer on Your VPS — Final Part',
    category: 'DevOps / Containers',
    linkedinEmbedUrl: 'https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7395282089580838912?compact=1',
  },
  {
    id: 't9DFDJA5xdA',
    source: 'linkedin',
    title: 'Building a Real Time Notification System with RabbitMQ & .NET — Part 1',
    category: 'Backend / Distributed Systems',
    linkedinEmbedUrl: 'https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7396360950532083712?compact=1',
  },
  {
    id: 'rabbitmq-notifications-part-2',
    source: 'linkedin',
    title: 'Building a Real-Time Notification System with RabbitMQ — Part 2, Section 1',
    category: 'Backend / Distributed Systems',
    linkedinEmbedUrl: 'https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7399076782559272960?compact=1',
  },
  {
    id: 'rabbitmq-account-service',
    source: 'linkedin',
    title: 'Live Notification System with RabbitMQ: Creating the Account Service',
    category: 'Backend / Distributed Systems',
    linkedinEmbedUrl: 'https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7399179978526982144?compact=1',
  },
  {
    id: 'oUO9VUYzp24',
    source: 'linkedin',
    title: 'Monitor Your VPS Easily with Cockpit',
    category: 'Infrastructure / DevOps',
    linkedinEmbedUrl: 'https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7396022597873819649?compact=1',
  },
  {
    id: 'ACk8QZw1Zbs',
    source: 'linkedin',
    title: 'Build Your Own Private Git Server with Gitea!',
    category: 'DevOps / Infrastructure',
    linkedinEmbedUrl: 'https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7395665533846585344?compact=1',
  },
];
