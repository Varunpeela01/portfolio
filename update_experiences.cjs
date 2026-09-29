const fs = require('fs');
let text = fs.readFileSync('src/data/portfolioData.ts', 'utf8');

const start = text.indexOf('export const EXPERIENCES: ExperienceItem[] = [');
const end = text.indexOf('];', start);

if (start !== -1 && end !== -1) {
    const pre = text.substring(0, start);
    // Find the end of the SKILL_CATEGORIES block so we don't mess up later. Wait, the next is export const SKILL_CATEGORIES.
    const post = text.substring(end + 2);

    const newExperiences = `export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'byodh',
    period: 'Jan 2026 – Present',
    role: 'Co-Founder & Lead Designer',
    company: 'BYODH',
    location: 'India',
    type: 'Venture',
    description: 'Spearheading product strategy and mobile design for a zero-to-one construction tech startup, building a multi-sided marketplace connecting consumers, materials, and professionals.',
    achievements: [
      'Architected an end-to-end Super App consolidating real estate, e-commerce, and service bookings into a single, unified consumer journey.',
      'Designed dedicated partner dashboards with dynamic role-switching to empower service providers with scalable CRM functionality.'
    ],
    skills: ['Zero-to-One Product', 'Founder Leadership', 'Multi-Sided Marketplace', 'Mobile App Architecture', 'Business Strategy'],
  },
  {
    id: 'freelance',
    period: 'Dec 2025 – Present',
    role: 'Freelance Product Designer',
    company: 'Independent',
    location: 'Remote',
    type: 'Contract',
    description: 'Partnering with startups to translate complex business logic into premium, high-density interfaces.\\n• HireDesk (Dec 2025 – Present): Architected a high-density, real-time B2B dashboard for enterprise fleet and asset management.\\n• Refill Health (Dec 2025 – Jun 2026): Designed a premium, multi-platform healthcare SaaS ecosystem bridging employee mobile onboarding with clinical administration.',
    achievements: [
      'Delivered fully functional frontend components alongside high-fidelity prototypes to accelerate engineering handoff.',
      'Designed highly specialized SaaS platforms with optimized cognitive load for complex B2B operations.'
    ],
    skills: ['B2B SaaS', 'Rapid Prototyping', 'Healthcare Tech', 'Enterprise Fleet UI', 'Product Strategy'],
  },
  {
    id: 'saraltech-pm',
    period: 'Jun 2024 – Nov 2025',
    role: 'Product Designer & Project Manager',
    company: 'SaralTech',
    location: 'Bengaluru, India',
    type: 'Full-time',
    description: 'Led end-to-end UX architecture and design systems across enterprise logistics and heavy equipment platforms, significantly improving operational workflows.',
    achievements: [
      'Architected the enterprise assets & fleet dispatch platform, reducing complex machinery booking steps by 50% and saving operators 5.6 minutes per order.',
      'Established an enterprise multi-brand design token system adopted across 4 SaaS products, accelerating frontend sprint velocity by 40%.'
    ],
    skills: ['Enterprise SaaS', 'Design Systems', 'Project Management', 'Complex Data Viz', 'React/Tailwind'],
  },
  {
    id: 'saraltech-intern',
    period: 'Jan 2024 – May 2024',
    role: 'UI/UX Design Intern',
    company: 'SaralTech',
    location: 'Bengaluru, India',
    type: 'Internship',
    description: 'Collaborated on rapid prototyping and user research, helping translate complex business requirements into high-fidelity web applications.',
    achievements: [
      'Assisted in the discovery and wireframing phases for early-stage logistics tools.',
      'Contributed to the development and documentation of the core design system components.'
    ],
    skills: ['User Research', 'Wireframing', 'Figma', 'Prototyping'],
  }
];`;

    fs.writeFileSync('src/data/portfolioData.ts', pre + newExperiences + post, 'utf8');
    console.log('Success');
} else {
    console.log('Could not find EXPERIENCES array');
}
