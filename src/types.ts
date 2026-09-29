export interface Project {
  id: string;
  title: string;
  subtitle: string;
  client: string;
  role: string;
  timeline: string;
  category: 'saas' | 'mobile' | 'hardware' | 'founder';
  heroMetric: string;
  overview: string;
  tags: string[];
  resultPills?: string[];
  accentColor: string;
  caseStudy: CaseStudy;
}

export interface CaseStudy {
  challenge: string;
  coreInsight: string;
  solution: {
    title: string;
    description: string;
    keyPoints: string[];
  };
  metrics: {
    label: string;
    value: string;
    context: string;
  }[];
  testimonial?: {
    quote: string;
    author: string;
    role: string;
    company: string;
  };
  workflow: string[];
  techStack: string[];
  colorPalette?: { name: string; hex: string; role: string }[];
  typography?: { fontName: string; usage: string; sample: string }[];
}

export interface ExperienceItem {
  id: string;
  period: string;
  role: string;
  company: string;
  location: string;
  type: string;
  description: string;
  achievements: string[];
  skills: string[];
}

export interface SkillCategory {
  title: string;
  description: string;
  items: {
    name: string;
    level: string;
    highlight?: boolean;
  }[];
}
