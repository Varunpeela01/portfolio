const fs = require('fs');

const path = 'src/components/ExperienceSection.tsx';
let text = fs.readFileSync(path, 'utf8');

const newData = `const EXPERIENCES_DATA: ExperienceEntry[] = [
  {
    period: '01/2026 – NOW',
    company: 'BYODH',
    role: 'Co-Founder & Lead Designer',
    industry: 'Construction Tech',
    isCurrent: true,
    narrative:
      'Spearheading product strategy and mobile design for a zero-to-one construction tech startup, building a multi-sided marketplace connecting consumers, materials, and professionals.',
  },
  {
    period: '12/2025 – NOW',
    company: 'Independent',
    role: 'Freelance Product Designer',
    industry: 'Startups & Ventures',
    isCurrent: true,
    narrative:
      'HireDesk (Dec 2025 – Present): Architected a high-density, real-time B2B dashboard for enterprise fleet and asset management.\\n\\nRefill Health (Dec 2025 – Jun 2026): Designed a premium, multi-platform healthcare SaaS ecosystem bridging employee mobile onboarding with clinical administration.',
  },
  {
    period: '06/2024 – 11/2025',
    company: 'SaralTech',
    role: 'Product Designer & Project Manager',
    industry: 'Logistics & Fleet SaaS',
    isCurrent: false,
    narrative:
      'Led end-to-end UX architecture and design systems across enterprise logistics and heavy equipment platforms, significantly improving operational workflows.',
  },
  {
    period: '01/2024 – 05/2024',
    company: 'SaralTech',
    role: 'UI/UX Design Intern',
    industry: 'Enterprise Software',
    isCurrent: false,
    narrative:
      'Collaborated on rapid prototyping and user research, helping translate complex business requirements into high-fidelity web applications.',
  },
];`;

const startPattern = 'const EXPERIENCES_DATA: ExperienceEntry[] = [';
const startIndex = text.indexOf(startPattern);
const endPattern = '];';
const endIndex = text.indexOf(endPattern, startIndex);

if (startIndex !== -1 && endIndex !== -1) {
    const pre = text.substring(0, startIndex);
    const post = text.substring(endIndex + 2);
    fs.writeFileSync(path, pre + newData + post, 'utf8');
    console.log('Successfully updated ExperienceSection.tsx');
} else {
    console.log('Failed to find EXPERIENCES_DATA in ExperienceSection.tsx');
}
