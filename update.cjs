const fs = require('fs');
let text = fs.readFileSync('src/data/portfolioData.ts', 'utf8');

const start = text.indexOf("id: 'mental-health-platform',");
const end = text.indexOf("id: 'fitness-mobile-app',");

if (start !== -1 && end !== -1) {
    const pre = text.substring(0, text.lastIndexOf('{', start));
    const post = text.substring(text.lastIndexOf('    {', end));

    const newEntry = `{
      id: 'mental-health-platform',
      title: 'Refill Health',
      subtitle: 'Intelligent B2B Mental Healthcare',
      client: 'Refill Health',
      role: 'Lead UI/UX Designer (Freelance)',
      timeline: 'December 2025 – June 2026',
      category: 'saas',
      heroMetric: 'Proactive Crisis Management',
      overview: 'Architected a premium, multi-sided clinical ecosystem bridging employees, care navigators, and therapists through high-density desktop dashboards and a guided mobile experience.',
      tags: ['B2B SaaS', 'UI/UX Design', 'Web & Mobile'],
      resultPills: ['Proactive Care', 'Frictionless Mobile', 'Unified B2B Platform'],
      accentColor: '#F97316',
      caseStudy: {
        challenge: 'Traditional Employee Assistance Programs (EAPs) are highly fragmented. Employees face severe friction when seeking help, while care navigators and HR leaders lack the real-time visibility needed to prevent crises or track outcomes. The objective was to design a unified, proactive clinical platform that seamlessly connects three distinct user groups: the employee, the care navigator, and the therapist.',
        coreInsight: 'Mental healthcare software often feels clinical and sterile, or overly playful. For Refill Health, the interface required a premium, classy aesthetic that instilled immediate trust. Built on a sophisticated dark-mode foundation, utilizing subtle 1px structural borders and soft lighting rather than harsh contrasting blocks.',
        solution: {
          title: 'Core Architecture & Workflows',
          description: 'Designed a rigid, two-column cockpit architecture for care navigators, a focused clinical portal for therapists, and a completely confidential mobile onboarding flow for members.',
          keyPoints: [
            'Care Navigator Dashboard: Fixed left panel surfaces critical context and live "Crisis Flags", keeping vital scores visible.',
            'Clinician Portal (Refill Notes™): Seamlessly transforms session capture into structured clinical documentation in dark-mode.',
            'Member Experience (Field-to-Desk Sync): Routes employees from clinical screening to matched care pathways with zero friction.',
            'Rapid AI Prototyping: Utilized FigJam and AI tools like Claude and ChatGPT to rapidly iterate on complex data structures.'
          ],
        },
        metrics: [
          { label: 'Proactive Crisis Mgmt', value: 'Instant', context: 'high-density dashboard allows navigators to spot deteriorating scores' },
          { label: 'Frictionless Onboarding', value: 'High', context: 'guided mobile experience increased initial member engagement' },
          { label: 'Unified Ecosystem', value: '100%', context: 'synchronized mobile inputs with desktop administrative oversight' },
        ],
        testimonial: {
          quote: 'The architectural model of the platform changed the way our clinical team thinks about digital therapeutic touchpoints.',
          author: 'Dr. A. Roy',
          role: 'Chief Medical Officer',
          company: 'Refill Health',
        },
        workflow: [
          'Rigorous logic mapping using FigJam for initial multi-user journey mapping',
          'AI-assisted prototyping with Claude and ChatGPT to iterate on complex data structures',
          'High-density precision UI optimizing layouts for enterprise B2B use',
          'Dark-themed sophistication with Geist and Inter typography for maximum legibility',
        ],
        techStack: ['Figma', 'FigJam', 'Claude', 'ChatGPT'],
        colorPalette: [
          { name: 'Refill Orange', hex: '#F97316', role: 'Primary Accents & Logos' },
          { name: 'Cockpit Slate', hex: '#1C1614', role: 'Warm Dark Canvas' },
          { name: 'Therapeutic Green', hex: '#10B981', role: 'Stable Recovery Affirmation' },
          { name: 'Muted Slate', hex: '#94A3B8', role: 'Calm Secondary Body Text' },
        ],
        typography: [
          { fontName: 'Geist', usage: 'Clean typography establishing strict, elegant hierarchy', sample: 'Aa Bb 123' },
          { fontName: 'Inter', usage: 'Maximum legibility across complex data tables', sample: 'Aa Bb 123' },
        ],
      },
    },\n`;
    fs.writeFileSync('src/data/portfolioData.ts', pre + newEntry + post, 'utf8');
    console.log('Success');
} else {
    console.log('Could not find bounds');
}
