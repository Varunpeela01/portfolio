import { Project, ExperienceItem, SkillCategory } from '../types';

export const PERSONAL_INFO = {
  name: 'Varun Peela',
  title: 'Product Designer & Founder',
  tagline: 'Designing at the speed of thought.',
  bio: 'Specializing in high-velocity SaaS, AI-assisted prototyping with Cursor & Claude, zero-to-one mobile products, and physical-digital IoT devices. Bridging the chasm between Figma frames and shippable production code.',
  email: 'varunpeela01@gmail.com',
  phone: '+91 7013534396',
  location: 'Anakapalli, India',
  availability: 'Available for Full-Time Roles',
  social: {
    github: 'https://github.com',
    linkedin: 'https://www.linkedin.com/in/varun-peela-41297b249',
    instagram: 'https://www.instagram.com/_varun_peela_?stkn=ZzBlbms3Ynduc2Ju&utm_source=qr',
    whatsapp: 'https://wa.me/917013534396',
    twitter: 'https://twitter.com',
    figma: 'https://figma.com/@varunpeela',
  },
  metrics: [
    { label: 'Workflow Efficiency', value: '50% fewer steps', detail: 'for enterprise fleet & heavy machinery operators' },
    { label: 'Prototyping Velocity', value: '4x faster', detail: 'from Figma tokens to working React in Cursor' },
    { label: 'Zero-to-One Products', value: '3 Platforms', detail: 'shipped from napkin sketch to active users' },
    { label: 'Hardware Prototypes', value: '12+ Iterations', detail: '3D printed functional IoT enclosures' },
  ],
};

export const PROJECTS: Project[] = [
  {
    id: 'fleet-platform',
    title: 'Assets & Fleet Management Platform',
    subtitle: 'Enterprise Machinery Dispatch & Real-Time Telematics Cockpit',
    client: 'Enterprise Logistics Platform',
    role: 'Lead Product Designer',
    timeline: '2023 — 2024',
    category: 'saas',
    heroMetric: '50% reduction in workflow steps',
    overview: 'Redesigning an enterprise machinery and equipment dispatch system. Replaced an 18-column legacy ERP table with an intuitive spatial operations cockpit, predictive maintenance tracking, and one-click dispatching.',
    tags: ['Enterprise SaaS', 'Fleet Management', 'Workflow Optimization', 'Data Visualization'],
    resultPills: ['50% Faster Workflows', 'Enterprise Platform', '4.2m Booking Time'],
    accentColor: '#38BDF8',
    caseStudy: {
      challenge: 'Dispatch operators spent an average of 9.8 minutes booking a single heavy machinery unit across multi-site jobs. The legacy system was a dense 18-column table with hidden modal windows, duplicate form inputs, and zero geographic situational awareness.',
      coreInsight: 'Operators think in terms of equipment proximity and job site urgency, not database primary keys. When visual telemetry was mapped onto spatial dispatch routes, cognitive load collapsed instantly.',
      solution: {
        title: 'The Unified Fleet Operations & Telematics Cockpit',
        description: 'Consolidated three disconnected workflows (Inventory Query, Site Booking, Carrier Haulage) into a single-screen responsive cockpit with real-time telematics, status swimlanes, and drag-and-drop machinery allocation.',
        keyPoints: [
          'Interactive split cockpit with telematics map and equipment availability cards side-by-side',
          'One-click smart auto-suggest pairing nearest certified operator with available equipment',
          'Predictive maintenance alerts signaling hydraulic and engine wear before site breakdown',
          'Keyboard-first command palette (`Cmd+K`) for rapid lookups and bulk multi-unit dispatches',
        ],
      },
      metrics: [
        { label: 'Dispatch Duration', value: '4.2 min (down from 9.8)', context: 'average time to confirm cross-state machine dispatch' },
        { label: 'Operator Steps per Booking', value: '50% fewer steps', context: 'audited user interaction sequences across 1,200 runs' },
        { label: 'Data Entry Error Rate', value: '-72%', context: 'eliminated manual equipment spec mismatches' },
      ],
      testimonial: {
        quote: 'Our dispatchers went from dreading software upgrades to asking if we could give the rest of our back-office operational tools to redesign.',
        author: 'S. Mehta',
        role: 'VP of Operations',
        company: 'Enterprise Fleet Logistics',
      },
      workflow: [
        'Time-and-motion study analyzing 48 hours of live operator dispatch recordings',
        'Component audit and design debt cataloging of the legacy ERP platform',
        'Wireframe explorations comparing split-view cockpit vs swimlane kanban models',
        'High-fidelity interactive prototype validated with 6 dispatch managers',
        'Direct pair-programming with frontend engineers using Cursor to ship production tokens',
      ],
      techStack: ['Figma', 'React', 'Tailwind CSS', 'TypeScript', 'Mapbox GL', 'Cursor AI'],
      colorPalette: [
        { name: 'Electric Sky', hex: '#38BDF8', role: 'Active Telemetry & Dispatch Nodes' },
        { name: 'Cockpit Void', hex: '#090D16', role: 'Background Canvas & Dense Grids' },
        { name: 'Hydraulic Amber', hex: '#F59E0B', role: 'Predictive Wear Warning State' },
        { name: 'Ready Emerald', hex: '#10B981', role: 'Certified Operator / Available' },
      ],
      typography: [
        { fontName: 'Plus Jakarta Sans', usage: 'High-density operational dashboard & telemetry labels', sample: 'Aa Bb 123' },
        { fontName: 'Geist Mono', usage: 'Equipment IDs, engine temperatures & GPS units', sample: 'EQ-804 · 88°C' },
      ],
    },
  },
  {
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
      accentColor: '#38BDF8',
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
    },
  {
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
      accentColor: '#38BDF8',
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
          { name: 'Healthcare Teal', hex: '#00665E', role: 'Primary Brand & Active Nav/CTAs' },
          { name: 'Mint Accent', hex: '#14B8A6', role: 'Interactive Focus & Dark Accents' },
          { name: 'Sage Tint', hex: '#E6F4F1', role: 'Self-Care Tags & Patient Surface' },
          { name: 'Refill Orange', hex: '#E06D38', role: 'Brand Monogram & Warm Highlights' },
          { name: 'SOS Red', hex: '#D92D20', role: 'Crisis Flag & Immediate Care' },
        ],
        typography: [
          { fontName: 'Geist', usage: 'Clean typography establishing strict, elegant hierarchy', sample: 'Aa Bb 123' },
          { fontName: 'Inter', usage: 'Maximum legibility across complex data tables', sample: 'Aa Bb 123' },
        ],
      },
    },
  {
      id: 'fitness-mobile-app',
      title: 'Prevealth',
      subtitle: 'A Dual-Sided Anti-Aging & Wellness Ecosystem',
      client: 'Prevealth',
      role: 'Lead UI/UX Designer',
      timeline: 'Aug 2024 - Feb 2025',
      category: 'mobile',
      heroMetric: 'Dual-Sided Ecosystem',
      overview: 'True anti-aging and preventative care require continuous data, not just episodic clinical visits. Prevealth bridges a sticky, engaging consumer mobile app with a robust B2B web portal for doctors and coaches.',
      tags: ['Anti-Aging & Longevity', 'Dual-Sided B2B2C', 'HealthTech'],
      resultPills: ['Dual-Sided Architecture', '16h Fasting Engine', 'Clinical Provider Portal'],
      accentColor: '#38BDF8',
      caseStudy: {
        challenge: 'True anti-aging and preventative care require continuous data, not just episodic clinical visits. The primary challenge was that clinical professionals (doctors, nutritionists) lacked visibility into a patient\'s daily habits, while patients lacked actionable, medically backed guidance in their day-to-day lives. Prevealth required a dual-sided architecture: a sticky, engaging mobile experience to motivate daily user logging, and a robust B2B web portal to allow cross-functional care teams to interpret that data and intervene.',
        coreInsight: 'Before laying out a single grid, we had to define the distinct cognitive models of our two user bases. The consumer needs motivation, reduced cognitive load, and frictionless habit tracking. The clinical professional needs high data density, rapid context switching, and role-based access controls.',
        solution: {
          title: 'Core Solutions & Visual Execution',
          description: 'A dual-sided ecosystem connecting daily consumer habit tracking with clinical provider oversight.',
          keyPoints: [
            'B2C Mobile App: Modular widget-based architecture with 16h fasting circular timer, daily longevity score, and anti-aging recipes.',
            'B2B Professional Portal: Clean tabular interface enabling cross-functional care teams to manage appointments, curate masterclasses, and upload recipes.',
            'Multi-Tenant Data Density: Solved workflows for Admins, Coaches, Nutritionists, and Doctors with auto-layout table structures.',
            'Scalable Visual System: Pristine foundation paired with consistent electric sky blue (#38BDF8) accents.'
          ],
        },
        metrics: [
          { label: 'Ecosystem Architecture', value: 'Dual-Sided', context: 'synchronous consumer mobile + B2B provider web portal' },
          { label: 'Fasting Adherence', value: '94.2%', context: 'real-time adherence tracking across active patient cohorts' },
          { label: 'Modal Reduction', value: 'Zero-Modal', context: 'auto-layout split-pane table drawer inspection' },
        ],
        testimonial: {
          quote: 'Prevealth successfully synchronized our biometric-based guidance to daily habits and clinical oversight into a single holistic journey.',
          author: 'Care Team',
          role: 'Prevealth',
          company: 'Prevealth',
        },
        workflow: [
          'FigJam Ecosystem Architecture mapping continuous closed-loop data cycle',
          'Auto-layout table wireframing to solve high-density multi-tenant requirements',
          'Modular widget-based mobile architecture for frictionless consumer logging',
          'Design token system balancing clinical authority with consumer lifestyle warmth',
        ],
        techStack: ['Figma', 'FigJam', 'Claude', 'ChatGPT'],
        colorPalette: [
          { name: 'Clean White', hex: '#FFFFFF', role: 'Clinical Foundation & Light Cleanliness' },
          { name: 'Warm Peach', hex: '#FF8A65', role: 'Primary Consumer Lifestyle Accent' },
          { name: 'Soft Orange', hex: '#F97316', role: '16h Fasting Zone & Alert State' },
          { name: 'Studio Slate', hex: '#0F172A', role: 'B2B Dark Studio Canvas' },
        ],
        typography: [
          { fontName: 'Inter', usage: 'High legibility across complex B2B tables', sample: 'Aa Bb 123' },
          { fontName: 'Plus Jakarta Sans', usage: 'Friendly consumer mobile app widgets', sample: 'Aa Bb 123' },
        ],
      },
    },
];

export const EXPERIENCES: ExperienceItem[] = [
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
    description: 'Partnering with startups to translate complex business logic into premium, high-density interfaces.\n• HireDesk (Dec 2025 – Present): Architected a high-density, real-time B2B dashboard for enterprise fleet and asset management.\n• Refill Health (Dec 2025 – Jun 2026): Designed a premium, multi-platform healthcare SaaS ecosystem bridging employee mobile onboarding with clinical administration.',
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
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Product Design & UX',
    description: 'Designing high-impact, human-centered systems for high cognitive load environments.',
    items: [
      { name: 'Zero-to-One Discovery', level: 'Expert', highlight: true },
      { name: 'SaaS Architecture', level: 'Expert', highlight: true },
      { name: 'Design Systems & Tokens', level: 'Expert', highlight: true },
      { name: 'Field & Rugged UX', level: 'Advanced' },
      { name: 'Information Hierarchy', level: 'Expert' },
      { name: 'User Journey State Machines', level: 'Advanced' },
      { name: 'Usability Testing & Telemetry', level: 'Advanced' },
      { name: 'WCAG AAA Accessibility', level: 'Advanced' },
    ],
  },
  {
    title: 'AI Prototyping & Code',
    description: 'Bridging the design-to-code gap using modern AI pairing and component frameworks.',
    items: [
      { name: 'Cursor & Claude Sonnet', level: 'Master', highlight: true },
      { name: 'React 19 & TypeScript', level: 'Advanced', highlight: true },
      { name: 'Tailwind CSS v4', level: 'Master', highlight: true },
      { name: 'Next.js & Vite', level: 'Advanced' },
      { name: 'Prompt Orchestration', level: 'Master', highlight: true },
      { name: 'React Native / Expo', level: 'Proficient' },
      { name: 'Component Token Sync', level: 'Advanced' },
      { name: 'Git & Deployment CI/CD', level: 'Proficient' },
    ],
  },
  {
    title: 'Physical & Hardware',
    description: 'Translating digital design sensitivity into tangible physical objects and IoT devices.',
    items: [
      { name: 'Bambu Lab 3D Printing', level: 'Advanced', highlight: true },
      { name: 'Fusion 360 CAD', level: 'Advanced' },
      { name: 'ESP32 Microcontrollers', level: 'Proficient', highlight: true },
      { name: 'MicroPython & C++', level: 'Intermediate' },
      { name: 'Web Bluetooth API', level: 'Proficient' },
      { name: 'Snap-Fit Enclosure Design', level: 'Advanced' },
      { name: 'OLED Pixel Art Display', level: 'Advanced' },
    ],
  },
  {
    title: 'Tooling & Craft',
    description: 'Daily instruments of precision for craft, collaboration, and high-velocity shipping.',
    items: [
      { name: 'Figma & Auto-Layout', level: 'Master', highlight: true },
      { name: 'Tokens Studio', level: 'Advanced' },
      { name: 'Protopie & Motion', level: 'Advanced' },
      { name: 'Linear & Notion', level: 'Master' },
      { name: 'Mixpanel & PostHog', level: 'Proficient' },
      { name: 'Storybook', level: 'Proficient' },
    ],
  },
];
