import { spawn } from 'child_process';
import fs from 'fs';
import path from 'path';

const resumeHtml = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Varun Peela - Product Designer Resume</title>
  <style>
    @page {
      size: letter;
      margin: 18mm 16mm;
    }
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    }
    body {
      color: #111827;
      background: #ffffff;
      font-size: 10pt;
      line-height: 1.45;
    }
    header {
      border-bottom: 2px solid #0284c7;
      padding-bottom: 12px;
      margin-bottom: 14px;
    }
    .header-row {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
    }
    h1 {
      font-size: 22pt;
      font-weight: 700;
      color: #0f172a;
      letter-spacing: -0.5px;
    }
    .title {
      font-size: 11pt;
      font-weight: 600;
      color: #0284c7;
      margin-top: 2px;
    }
    .contact-info {
      font-size: 8.5pt;
      color: #475569;
      text-align: right;
      line-height: 1.5;
    }
    .contact-info a {
      color: #0284c7;
      text-decoration: none;
    }
    .summary {
      font-size: 9.5pt;
      color: #334155;
      margin-bottom: 14px;
      line-height: 1.5;
    }
    section {
      margin-bottom: 14px;
    }
    h2 {
      font-size: 10.5pt;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.8px;
      color: #0f172a;
      border-bottom: 1px solid #e2e8f0;
      padding-bottom: 3px;
      margin-bottom: 8px;
    }
    .exp-item {
      margin-bottom: 10px;
    }
    .exp-header {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      margin-bottom: 2px;
    }
    .role-title {
      font-size: 10pt;
      font-weight: 700;
      color: #0f172a;
    }
    .company {
      font-weight: 600;
      color: #475569;
    }
    .period {
      font-size: 8.5pt;
      font-weight: 600;
      color: #0284c7;
      font-family: monospace;
    }
    ul {
      margin-left: 18px;
      margin-top: 3px;
    }
    li {
      margin-bottom: 3px;
      font-size: 9pt;
      color: #334155;
      line-height: 1.4;
    }
    li strong {
      color: #0f172a;
    }
    .skills-grid {
      display: grid;
      grid-template-columns: 140px 1fr;
      gap: 5px 12px;
      font-size: 9pt;
    }
    .skill-cat {
      font-weight: 700;
      color: #0f172a;
    }
    .skill-items {
      color: #334155;
    }
    .metric-badge {
      display: inline-block;
      background: #f0f9ff;
      border: 1px solid #bae6fd;
      color: #0369a1;
      padding: 1px 6px;
      border-radius: 4px;
      font-size: 8pt;
      font-weight: 600;
      margin-right: 4px;
    }
  </style>
</head>
<body>
  <header>
    <div class="header-row">
      <div>
        <h1>Varun Peela</h1>
        <div class="title">Product Designer &amp; Project Manager</div>
      </div>
      <div class="contact-info">
        <div>Bengaluru, India · Available for Full-Time Roles</div>
        <div>Email: <a href="mailto:gana.peela@gmail.com">gana.peela@gmail.com</a></div>
        <div>Portfolio: varunpeela.design · LinkedIn: linkedin.com/in/varunpeela</div>
      </div>
    </div>
  </header>

  <div class="summary">
    <strong>Executive Summary:</strong> Product Designer specializing in scalable B2B SaaS platforms, intuitive mobile experiences, design token architectures, and rapid AI-assisted prototyping. Proven track record turning complex technical and operational requirements into frictionless user interfaces that accelerate team velocity and measurably improve business outcomes.
  </div>

  <section>
    <h2>Work Experience</h2>
    
    <div class="exp-item">
      <div class="exp-header">
        <div>
          <span class="role-title">Product Designer &amp; Project Manager</span> — <span class="company">SaralTech</span>
        </div>
        <span class="period">2023 — Present</span>
      </div>
      <ul>
        <li><strong>Fleet Logistics Redesign:</strong> Architected the HireDesk fleet dispatch system, cutting complex booking workflows by 50% and saving operators an audited 5.6 minutes per order across 1,200+ monthly dispatch runs.</li>
        <li><strong>Design Token Architecture:</strong> Built and deployed an enterprise multi-brand design token system across 4 core SaaS products, boosting frontend engineering sprint velocity by 40% and ensuring 100% WCAG AAA compliance.</li>
      </ul>
    </div>

    <div class="exp-item">
      <div class="exp-header">
        <div>
          <span class="role-title">Co-Founder &amp; Head of Product</span> — <span class="company">BYODH (Build Your Own Dream Home)</span>
        </div>
        <span class="period">2024 — Present</span>
      </div>
      <ul>
        <li><strong>0 to 1 Mobile OS:</strong> Designed and shipped an offline-first mobile operating system deployed across 24 active villa construction sites, accelerating on-site discrepancy resolution by 65%.</li>
        <li><strong>Milestone Escrow Workflows:</strong> Established photo-verified milestone escrow verification workflows that reduced contractor-homeowner billing disputes by 88%.</li>
      </ul>
    </div>

    <div class="exp-item">
      <div class="exp-header">
        <div>
          <span class="role-title">Product Designer &amp; Prototyping Partner</span> — <span class="company">Independent Consulting</span>
        </div>
        <span class="period">2021 — 2023</span>
      </div>
      <ul>
        <li><strong>Healthcare Care Pathways:</strong> Architected the Refill Health continuous care patient platform, resulting in a 41% increase in 90-day patient retention compared to industry telehealth baselines.</li>
        <li><strong>Rapid MVP Delivery:</strong> Delivered 8 zero-to-one production prototypes with functional React/Next.js code, helping early-stage founders validate product-market fit and secure seed/Series A funding.</li>
      </ul>
    </div>

    <div class="exp-item">
      <div class="exp-header">
        <div>
          <span class="role-title">Hardware &amp; IoT Prototyper</span> — <span class="company">Maker Lab Initiatives</span>
        </div>
        <span class="period">2022 — Present</span>
      </div>
      <ul>
        <li><strong>Tangible Computing:</strong> Designed and manufactured Desk Pet, an ambient desktop IoT companion with sub-40ms OLED responsiveness, custom PETG snap-fit enclosure, and 14 iterative CAD revisions.</li>
        <li><strong>Hardware-to-Web Telemetry:</strong> Engineered zero-configuration Web Bluetooth protocols to synchronize physical device sensor states directly with browser dashboard applications.</li>
      </ul>
    </div>
  </section>

  <section>
    <h2>Core Competencies &amp; Technical Skills</h2>
    <div class="skills-grid">
      <div class="skill-cat">Product &amp; UX:</div>
      <div class="skill-items">B2B SaaS Architecture, 0-to-1 Product Strategy, Complex Systems Design, User Research, Journey Mapping, WCAG AAA Accessibility, Information Architecture</div>

      <div class="skill-cat">Design Systems:</div>
      <div class="skill-items">Design Tokens (Tokens Studio), Multi-Brand Component Libraries, Figma Auto-Layout, Token Pipelines (Figma → GitHub), Storybook Documentation</div>

      <div class="skill-cat">Prototyping &amp; Code:</div>
      <div class="skill-items">AI-Assisted Prototyping (Cursor, Claude), React 19, TypeScript, Tailwind CSS v4, Next.js, React Native/Expo, Git / CI/CD Hand-off</div>

      <div class="skill-cat">Tools &amp; Methods:</div>
      <div class="skill-items">Figma, Protopie, Linear, Notion, Mixpanel, PostHog, Agile Sprint Project Management</div>
    </div>
  </section>

  <section>
    <h2>Key Audited Outcomes</h2>
    <div style="display: flex; gap: 12px; margin-top: 6px;">
      <div style="flex: 1; padding: 6px 10px; background: #f8fafc; border-left: 3px solid #0284c7; border-radius: 4px;">
        <div style="font-weight: 700; color: #0284c7; font-size: 11pt;">50% Fewer Steps</div>
        <div style="font-size: 8pt; color: #64748b;">Operator booking workflow on HireDesk</div>
      </div>
      <div style="flex: 1; padding: 6px 10px; background: #f8fafc; border-left: 3px solid #0284c7; border-radius: 4px;">
        <div style="font-weight: 700; color: #0284c7; font-size: 11pt;">40% Sprint Boost</div>
        <div style="font-size: 8pt; color: #64748b;">Frontend styling time via Token Engine</div>
      </div>
      <div style="flex: 1; padding: 6px 10px; background: #f8fafc; border-left: 3px solid #0284c7; border-radius: 4px;">
        <div style="font-weight: 700; color: #0284c7; font-size: 11pt;">65% Faster Fixes</div>
        <div style="font-size: 8pt; color: #64748b;">Site discrepancy resolution on BYODH</div>
      </div>
      <div style="flex: 1; padding: 6px 10px; background: #f8fafc; border-left: 3px solid #0284c7; border-radius: 4px;">
        <div style="font-weight: 700; color: #0284c7; font-size: 11pt;">+41% Retention</div>
        <div style="font-size: 8pt; color: #64748b;">90-day patient retention on Refill Health</div>
      </div>
    </div>
  </section>
</body>
</html>
`;

const tempHtmlPath = path.resolve('public', 'resume_temp.html');
fs.writeFileSync(tempHtmlPath, resumeHtml, 'utf8');

const chrome = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
const cp = spawn(chrome, [
  '--headless=new',
  '--remote-debugging-port=9997',
  '--disable-gpu',
  `file://${tempHtmlPath}`
]);

async function run() {
  for (let i = 0; i < 30; i++) {
    await new Promise(r => setTimeout(r, 400));
    try {
      const res = await fetch('http://127.0.0.1:9997/json/list');
      const data = await res.json();
      const tab = data[0];
      if (tab) {
        const { default: WebSocket } = await import('ws').catch(() => ({ default: globalThis.WebSocket }));
        const ws = new WebSocket(tab.webSocketDebuggerUrl);
        ws.on('open', async () => {
          await new Promise(r => setTimeout(r, 1200));
          ws.send(JSON.stringify({
            id: 1,
            method: 'Page.printToPDF',
            params: {
              printBackground: true,
              paperWidth: 8.5,
              paperHeight: 11,
              marginTop: 0.4,
              marginBottom: 0.4,
              marginLeft: 0.4,
              marginRight: 0.4
            }
          }));
        });
        ws.on('message', msg => {
          const resp = JSON.parse(msg);
          if (resp.id === 1 && resp.result?.data) {
            const pdfBuffer = Buffer.from(resp.result.data, 'base64');
            const targetPdf = path.resolve('public', 'Varun_Peela_Resume.pdf');
            fs.writeFileSync(targetPdf, pdfBuffer);
            console.log('PDF successfully generated:', targetPdf, 'Bytes:', pdfBuffer.length);
            fs.unlinkSync(tempHtmlPath);
            ws.close();
            cp.kill();
            process.exit(0);
          }
        });
        return;
      }
    } catch (e) {}
  }
}
run();
