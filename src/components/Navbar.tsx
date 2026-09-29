import React, { useState } from 'react';
import { ArrowDownToLine, Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onOpenContact: () => void;
  onOpenResume: () => void;
  onNavigate?: (anchor: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenContact,
  onOpenResume,
  onNavigate,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, anchor: string) => {
    if (onNavigate) {
      e.preventDefault();
      onNavigate(anchor);
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-5 left-0 right-0 z-50 px-4 sm:px-6 pointer-events-none transition-all">
      <div className="mx-auto max-w-5xl w-full rounded-full border border-white/10 bg-[#0A0E18]/85 backdrop-blur-2xl px-5 sm:px-7 py-2.5 sm:py-3 shadow-[0_16px_40px_rgba(0,0,0,0.6),inset_0_1px_0_rgba(255,255,255,0.08)] flex items-center justify-between pointer-events-auto">
        
        {/* Left: Brand with Stylized 3D "V" Logo + "Varunpeela" */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, '#home')}
          className="flex items-center gap-2.5 group cursor-pointer"
        >
          {/* Stylized 3D Monogram Logo */}
          <div className="relative flex items-center justify-center">
            <img
              src="/brand/v-logo.png"
              alt="Varun Peela Logo"
              className="h-7 w-7 sm:h-8 sm:w-8 object-contain drop-shadow-[0_0_14px_rgba(255,255,255,0.25)] group-hover:scale-105 transition-transform"
            />
          </div>

          <span className="text-sm sm:text-base font-medium tracking-tight text-white group-hover:text-cyan-300 transition-colors">
            Varunpeela
          </span>
        </a>

        {/* Center: Clean Nav Links for desktop */}
        <nav className="hidden md:flex items-center gap-7 text-xs font-medium text-slate-300">
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="hover:text-white transition-colors"
          >
            Home
          </a>
          <a
            href="#work"
            onClick={(e) => handleNavClick(e, '#work')}
            className="hover:text-white transition-colors"
          >
            Work
          </a>
          <a
            href="#about"
            onClick={(e) => handleNavClick(e, '#about')}
            className="hover:text-white transition-colors"
          >
            About
          </a>
          <a
            href="#hobbies"
            onClick={(e) => handleNavClick(e, '#hobbies')}
            className="hover:text-white transition-colors"
          >
            Hobbies
          </a>
          <a
            href="/Varun_Peela_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-300 transition-colors flex items-center gap-1"
          >
            <span>Resume</span>
            <ArrowUpRight className="h-3 w-3" />
          </a>
        </nav>

        {/* Right: "Contact us" pill button */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={onOpenContact}
            className="px-5 sm:px-6 py-2 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-medium text-xs sm:text-sm shadow-[0_0_20px_rgba(37,99,235,0.45)] hover:shadow-[0_0_28px_rgba(37,99,235,0.65)] active:scale-95 transition-all cursor-pointer"
          >
            Contact us
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden flex h-8 w-8 items-center justify-center rounded-full bg-white/[0.05] border border-white/10 text-slate-300 hover:text-white transition-colors"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>

      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden pointer-events-auto max-w-sm mx-auto mt-3 rounded-2xl border border-white/10 bg-[#0A0E18]/95 backdrop-blur-2xl p-5 shadow-2xl space-y-3 text-center">
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="block text-sm font-medium text-slate-200 hover:text-cyan-400 py-1"
          >
            Home
          </a>
          <a
            href="#work"
            onClick={(e) => handleNavClick(e, '#work')}
            className="block text-sm font-medium text-slate-200 hover:text-cyan-400 py-1"
          >
            Work
          </a>
          <a
            href="#about"
            onClick={(e) => handleNavClick(e, '#about')}
            className="block text-sm font-medium text-slate-200 hover:text-cyan-400 py-1"
          >
            About
          </a>
          <a
            href="#hobbies"
            onClick={(e) => handleNavClick(e, '#hobbies')}
            className="block text-sm font-medium text-slate-200 hover:text-cyan-400 py-1"
          >
            Hobbies
          </a>
          <a
            href="/Varun_Peela_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileMenuOpen(false)}
            className="flex justify-center items-center gap-1 text-sm font-medium text-cyan-300 py-1 border-t border-white/[0.08] pt-2"
          >
            View Resume <ArrowUpRight className="h-3 w-3" />
          </a>
        </div>
      )}
    </header>
  );
};
