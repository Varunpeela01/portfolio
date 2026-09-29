const fs = require('fs');
let text = fs.readFileSync('src/data/portfolioData.ts', 'utf8');

const start = text.indexOf("id: 'construction-materials',");
const end = text.indexOf("id: 'mental-health-platform',");

if (start !== -1 && end !== -1) {
    const pre = text.substring(0, text.lastIndexOf('{', start));
    const post = text.substring(text.lastIndexOf('    {', end));

    const newEntry = `{
      id: 'construction-materials',
      title: 'BYODH',
      subtitle: 'The Construction & Real Estate Super App',
      client: 'BYODH',
      role: 'Lead UI/UX Designer',
      timeline: 'January 2026 – Present',
      category: 'mobile',
      heroMetric: 'Unified Consumer Journey',
      overview: 'Architected a multi-sided mobile marketplace connecting consumers with real estate, building materials, and industry professionals, paired with a dedicated business dashboard for service partners.',
      tags: ['Mobile App', 'Multi-Sided Marketplace', 'UI/UX Design'],
      resultPills: ['Unified App', 'Partner CRM', 'Scalable UI'],
      accentColor: '#F59E0B',
      caseStudy: {
        challenge: 'The construction and real estate sectors are notoriously fragmented. Consumers typically juggle multiple disjointed platforms to browse property listings, source building materials, and hire verified architects or labor. Concurrently, service providers and real estate agents struggle with scattered lead management and inconsistent booking tools. The objective was to consolidate these highly distinct verticals—Real Estate, Materials, and Professionals—into a single, cohesive "Super App" ecosystem.',
        coreInsight: 'Designing a single application that houses real estate discovery, material e-commerce, and professional service bookings requires rigorous structural logic. Standardized mental models and trust metrics like "RERA Verified" tags build immediate consumer confidence.',
        solution: {
          title: 'Core Ecosystem Workflows',
          description: 'A modular UI framework applying a consistent design language across vastly different categories.',
          keyPoints: [
            'Consumer Experience (User App): Intelligent hub utilizing horizontal navigation pills to let users instantly pivot between Real Estate, Materials, and Pros.',
            'Partner Dashboard (Business App): Active dashboard surfacing high-priority operational metrics like wallet balance, live listings, and unread inquiries.',
            'Dynamic Workspace Switching: Frictionless "Roles" switcher allows partners to toggle between distinct business profiles without losing unified wallet data.'
          ],
        },
        metrics: [
          { label: 'Unified Journey', value: '100%', context: 'merged three distinct industries into a single mobile interface' },
          { label: 'Empowered Providers', value: 'CRM', context: 'transformed raw inquiries into a structured CRM' },
          { label: 'Scalable UI', value: 'Modular', context: 'architected a modular system to easily scale future categories' },
        ],
        testimonial: {
          quote: 'The BYODH Super App is an unprecedented consolidation of the construction industry, turning a fragmented market into a seamless, trusted ecosystem.',
          author: 'Founding Team',
          role: 'BYODH',
          company: 'BYODH',
        },
        workflow: [
          'Information Architecture & Super App Logic',
          'Standardized Mental Models for e-commerce and real estate',
          'Integration of Trust & Verification markers',
          'Dynamic Workspace Switching for service partners',
        ],
        techStack: ['Figma', 'Claude', 'ChatGPT'],
        colorPalette: [
          { name: 'Byodh Amber', hex: '#F59E0B', role: 'Primary Accents' },
          { name: 'Deep Navy', hex: '#0F172A', role: 'Brand Core & Backgrounds' },
          { name: 'Trust Emerald', hex: '#10B981', role: 'Verification Tags' },
          { name: 'Slate Gray', hex: '#64748B', role: 'Secondary Text' },
        ],
        typography: [
          { fontName: 'Geist', usage: 'Clean typography for complex specifications', sample: 'Aa Bb 123' },
          { fontName: 'Inter', usage: 'Legibility across partner dashboards', sample: 'Aa Bb 123' },
        ],
      },
    },\n`;
    fs.writeFileSync('src/data/portfolioData.ts', pre + newEntry + post, 'utf8');
    console.log('Success');
} else {
    console.log('Could not find bounds');
}
