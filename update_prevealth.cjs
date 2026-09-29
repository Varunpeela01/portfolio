const fs = require('fs');
let text = fs.readFileSync('src/data/portfolioData.ts', 'utf8');

const start = text.indexOf("id: 'fitness-mobile-app',");
const end = text.indexOf("id: 'saraltech',");

if (start !== -1 && end !== -1) {
    const pre = text.substring(0, text.lastIndexOf('{', start));
    const post = text.substring(text.lastIndexOf('  {', end));

    const newEntry = `{
      id: 'fitness-mobile-app',
      title: 'Prevealth',
      subtitle: 'Holistic Preventive Health Ecosystem',
      client: 'Prevealth',
      role: 'Lead UI/UX Designer',
      timeline: 'Aug 2024 - Feb 2025',
      category: 'mobile',
      heroMetric: 'End-to-End Platform',
      overview: 'Architected an end-to-end personalized healthcare platform, bridging a feature-rich patient mobile app with a high-density administrative dashboard for care team management.',
      tags: ['HealthTech', 'B2B2C Platform', 'UI/UX Design'],
      resultPills: ['Unified Profile', 'Proactive Monitoring', 'Operational Scalability'],
      accentColor: '#10B981',
      caseStudy: {
        challenge: 'The preventive-health sector is notoriously disjointed. Users are often forced to manage their wellness across multiple disconnected applications. Concurrently, healthcare providers, coaches, and nutritionists lack a centralized platform for real-time monitoring of patient adherence. The objective for Prevealth was to architect a unified ecosystem: a personalized mobile app for patients synchronized directly to a powerful operational hub for the care team.',
        coreInsight: 'The core logical challenge was to map static biometric data (DNA/blood reports) onto highly variable daily user behaviors. I prioritized synchronous data flow, ensuring daily mobile check-ins and symptom logging are instantly pushed to the care cockpit, reducing operational lag.',
        solution: {
          title: 'Core Solutions & Visual Execution',
          description: 'A comprehensive dual-platform system serving both vulnerable patients and data-hungry clinicians.',
          keyPoints: [
            'Patient Personalization Hub (Mobile App): An intelligent features grid allowing patients to instantly access Nutrition, Training, and Expert scheduling.',
            'Nutritional Adherence: Meal plans display specific biological benefits for individual ingredients (e.g., "Probiotics for gut health").',
            'The Care Cockpit (Admin Panel): High-performance dashboard consolidating entire patient journeys above the fold using structured data tables and streak visualizations.',
            'Cohesive Visual Language: Minimal glassmorphism and soft 1px borders ensuring colorful biometric visualizations are highly legible against light-mode foundations.'
          ],
        },
        metrics: [
          { label: 'Unified Profile', value: '100%', context: 'unified macro, biometric, and symptoms data' },
          { label: 'Expert Insight', value: 'Proactive', context: 'enabled real-time monitoring of habit streaks' },
          { label: 'Scalability', value: 'Modular', context: 'multi-sided platform capable of adding future verticals' },
        ],
        testimonial: {
          quote: 'Prevealth successfully synchronized our biometric-based guidance to daily habits and clinical oversight into a single holistic journey.',
          author: 'Care Team',
          role: 'Prevealth',
          company: 'Prevealth',
        },
        workflow: [
          'Field-to-Desk Equivalent logic mapped for synchronous data flow',
          'AI-Accelerated Multi-User Logic for complex permissions and notification matrix',
          'Enterprise B2B density optimized for admin side',
          'Accessible and encouraging visuals for consumer mobile experience',
        ],
        techStack: ['Figma', 'Claude', 'ChatGPT'],
        colorPalette: [
          { name: 'Prevealth Green', hex: '#10B981', role: 'Primary Healthcare Accent' },
          { name: 'Clean White', hex: '#FFFFFF', role: 'Light Mode Foundation' },
          { name: 'Data Slate', hex: '#64748B', role: 'Admin Data Tables' },
          { name: 'Alert Coral', hex: '#F43F5E', role: 'Biometric Alert State' },
        ],
        typography: [
          { fontName: 'Inter', usage: 'High legibility across complex B2B tables', sample: 'Aa Bb 123' },
          { fontName: 'Plus Jakarta Sans', usage: 'Friendly consumer mobile app headers', sample: 'Aa Bb 123' },
        ],
      },
    },\n`;
    fs.writeFileSync('src/data/portfolioData.ts', pre + newEntry + post, 'utf8');
    console.log('Success');
} else {
    console.log('Could not find bounds');
}
