export interface Certification {
  title: string;
  issuer: string;
  issued: string;
  expires?: string;
  credentialId?: string;
  credentialUrl?: string;
  note?: string;
}

export const certifications: Certification[] = [
  {
    title: 'Basic Proficiency in KNIME Analytics Platform',
    issuer: 'KNIME',
    issued: 'Nov 2026',
    credentialUrl: 'https://www.credly.com/badges/860236ee-4541-4cf9-8228-58dd1e1fac39/linked_in_profile',
  },
  {
    title: 'Python Data Associate',
    issuer: 'DataCamp',
    issued: 'Nov 2026',
    expires: 'Nov 2028',
    credentialId: 'PDA0016221021194',
    credentialUrl: 'https://www.datacamp.com/certificate/PDA0016221021194',
  },
  {
    title: 'SQL Associate',
    issuer: 'DataCamp',
    issued: 'Nov 2026',
    expires: 'Nov 2028',
    credentialId: 'SQA0016558264265',
    credentialUrl: 'https://www.datacamp.com/certificate/SQA0016558264265',
  },
  {
    title: 'AI Engineer for Developers Associate',
    issuer: 'DataCamp',
    issued: 'Nov 2026',
    expires: 'Nov 2028',
    credentialId: 'AIEDA0014311270953',
    credentialUrl: 'https://www.datacamp.com/certificate/AIEDA0014311270953',
  },
  {
    title: 'Introduction to Git',
    issuer: 'DataCamp',
    issued: 'Nov 2026',
    credentialId: '7b29fedab955c6ba4abdacf20e89b532e427c309',
    credentialUrl: 'https://www.datacamp.com/completed/statement-of-accomplishment/course/7b29fedab955c6ba4abdacf20e89b532e427c309',
  },
  {
    title: 'Intermediate Git',
    issuer: 'DataCamp',
    issued: 'Nov 2026',
    credentialId: 'f5e65a922270190663619850c1dd2bdc106558f5',
    credentialUrl: 'https://www.datacamp.com/completed/statement-of-accomplishment/course/f5e65a922270190663619850c1dd2bdc106558f5',
  },
  {
    title: 'Introduction to Docker',
    issuer: 'DataCamp',
    issued: 'Nov 2026',
    credentialId: '98322491d1838221ad88f8f1d1934e31a645dbba',
    credentialUrl: 'https://www.datacamp.com/completed/statement-of-accomplishment/course/98322491d1838221ad88f8f1d1934e31a645dbba',
  },
  {
    title: 'IELTS Academic',
    issuer: 'IELTS Official',
    issued: 'May 2026',
    expires: 'May 2028',
    credentialId: '26TN501006GABW001A',
    note: 'Band 6',
  },
  {
    title: 'Postman API Fundamentals Student Expert',
    issuer: 'Canvas Credentials (Badgr)',
    issued: 'Jul 2024',
    credentialId: '669863078542711cad25fa0a',
    credentialUrl: 'https://api.badgr.io/public/assertions/ZovsgsGnS-yEZBuZaOMumg',
  },
];
