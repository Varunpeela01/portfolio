/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { GlowingRibbonCanvas } from './components/GlowingRibbonCanvas';
import { Navbar } from './components/Navbar';
import { SocialDock } from './components/SocialDock';
import { Hero } from './components/Hero';
import { WorksSection } from './components/WorksSection';
import { AboutSection } from './components/AboutSection';
import { OutsideWorkspaceSection } from './components/OutsideWorkspaceSection';
// import { TestimonialsSection } from './components/TestimonialsSection';
import { ContactSection } from './components/ContactSection';
import { ResumeModal } from './components/ResumeModal';
import { CaseStudyModal } from './components/CaseStudyModal';
import { HireDeskCaseStudyPage } from './components/HireDeskCaseStudyPage';
import { RefillCaseStudyPage } from './components/RefillCaseStudyPage';
import { ByodhCaseStudyPage } from './components/ByodhCaseStudyPage';
import { PrevealthCaseStudyPage } from './components/PrevealthCaseStudyPage';
import { Project } from './types';
import { PERSONAL_INFO, PROJECTS } from './data/portfolioData';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isResumeOpen, setIsResumeOpen] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string>('');
  const [showToast, setShowToast] = useState<boolean>(false);

  const triggerToast = (msg: string) => {
    setToastMessage(msg);
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 2400);
  };

  const handleCopyEmail = () => {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(PERSONAL_INFO.email);
    }
    setCopied(true);
    triggerToast(`Email copied: ${PERSONAL_INFO.email}`);
    setTimeout(() => setCopied(false), 2200);
  };

  // Dynamic URL hash routing for case studies
  React.useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === '#project/hiredesk' || hash === '#hiredesk' || hash === '#case-study-fleet-platform') {
        const found = PROJECTS.find((p) => p.id === 'fleet-platform');
        if (found) {
          setSelectedProject(found);
        }
      } else if (hash.startsWith('#case-study-')) {
        const projectId = hash.replace('#case-study-', '');
        const found = PROJECTS.find((p) => p.id === projectId);
        if (found) {
          setSelectedProject(found);
        }
      } else if (hash.startsWith('#project/')) {
        const projectId = hash.replace('#project/', '');
        const found = PROJECTS.find((p) => p.id === projectId);
        if (found) {
          setSelectedProject(found);
        }
      } else if (!hash || hash === '#home' || hash === '#work' || hash === '#about' || hash === '#hobbies' || hash === '#experience' || hash === '#contact') {
        setSelectedProject(null);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleSelectProject = (project: Project) => {
    setSelectedProject(project);
    if (project.id === 'fleet-platform') {
      window.history.pushState(null, '', '#project/hiredesk');
    } else {
      window.history.pushState(null, '', `#case-study-${project.id}`);
    }
  };

  const handleCloseProject = () => {
    setSelectedProject(null);
    window.history.pushState(null, '', '#work');
  };

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/Varun_Peela_Resume.pdf';
    link.download = 'Varun_Peela_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const scrollToContact = () => {
    if (selectedProject) {
      setSelectedProject(null);
      window.history.pushState(null, '', '#contact');
      setTimeout(() => {
        const contactEl = document.getElementById('contact');
        if (contactEl) {
          contactEl.scrollIntoView({ behavior: 'smooth' });
        }
      }, 50);
    } else {
      const contactEl = document.getElementById('contact');
      if (contactEl) {
        contactEl.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleNavClick = (anchor: string) => {
    if (selectedProject) {
      setSelectedProject(null);
      window.history.pushState(null, '', anchor);
      setTimeout(() => {
        if (anchor === '#home') {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
          const el = document.querySelector(anchor);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }, 50);
    } else {
      if (anchor === '#home') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        const el = document.querySelector(anchor);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  // Render dedicated standalone case study pages with the consistent global Navbar
  if (selectedProject) {
    return (
      <div className="min-h-screen bg-[#090D16] text-[#F8FAFC] relative selection:bg-[#2563EB] selection:text-white overflow-x-hidden">
        {/* Global Consistent Top Navigation Bar */}
        <Navbar
          onOpenContact={scrollToContact}
          onOpenResume={handleDownloadResume}
          onNavigate={handleNavClick}
        />

        {selectedProject.id === 'fleet-platform' && (
          <HireDeskCaseStudyPage onBack={handleCloseProject} onSelectProject={handleSelectProject} />
        )}
        {selectedProject.id === 'mental-health-platform' && (
          <RefillCaseStudyPage onBack={handleCloseProject} onSelectProject={handleSelectProject} />
        )}
        {selectedProject.id === 'construction-materials' && (
          <ByodhCaseStudyPage onBack={handleCloseProject} onSelectProject={handleSelectProject} />
        )}
        {selectedProject.id === 'fitness-mobile-app' && (
          <PrevealthCaseStudyPage onBack={handleCloseProject} onSelectProject={handleSelectProject} />
        )}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#090D16] text-[#F8FAFC] relative selection:bg-[#2563EB] selection:text-white overflow-x-hidden">
      {/* 1. Unique, Ultra-Smooth Electric Blue Aurora & Stardust Canvas (Follows Cursor Anywhere) */}
      <GlowingRibbonCanvas />

      {/* 2. Top Navigation Bar */}
      <Navbar
        onOpenContact={scrollToContact}
        onOpenResume={handleDownloadResume}
        onNavigate={handleNavClick}
      />

      {/* 2.1 Floating Left-Side Social Dock (Facebook, Instagram, Dribbble, Behance, LinkedIn) */}
      <SocialDock />

      {/* 3. Hero Section */}
      <Hero
        onOpenContact={scrollToContact}
        onOpenResume={handleDownloadResume}
        onCopyEmail={handleCopyEmail}
        copied={copied}
      />

      {/* 4. Selected Work (◦ 01 ◦ SELECTED WORKS + The Method) */}
      <WorksSection onSelectProject={handleSelectProject} />

      {/* 5. About (◦ 02 ◦ ABOUT) */}
      <AboutSection onOpenResume={handleDownloadResume} />
      {/* 7. Outside the Workspace Bento (◦ 04 ◦ OUTSIDE THE WORKSPACE) */}
      <OutsideWorkspaceSection />

      {/* 8. Testimonials Dual Marquee (Temporarily hidden until client testimonials are collected) */}
      {/* <TestimonialsSection /> */}

      {/* 9. Contact & Footer (◦ 06 ◦ LET'S MAKE SOMETHING) */}
      <ContactSection onCopyEmail={handleCopyEmail} copied={copied} />

      {/* 7. Resume Modal (Available as fallback) */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
        onOpenContact={scrollToContact}
      />

      {/* 8. Deep-Dive Case Study Modal for Other Projects */}
      {selectedProject && selectedProject.id !== 'fleet-platform' && (
        <CaseStudyModal
          project={selectedProject}
          onClose={handleCloseProject}
          onOpenContact={scrollToContact}
        />
      )}
    </div>
  );
}
