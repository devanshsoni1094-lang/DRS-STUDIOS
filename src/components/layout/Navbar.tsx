import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';

interface NavbarProps {
  onStartProject: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onStartProject }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#' },
    { label: 'Services', href: '#services' },
    { label: 'Work', href: '#work' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 pt-5 sm:pt-6 px-4 sm:px-6 pointer-events-none transition-all duration-500">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          
          {/* Floating Spatial Glass Navbar Capsule */}
          <div className="w-full pointer-events-auto spatial-nav-capsule rounded-full px-5 sm:px-8 py-3 sm:py-3.5 flex items-center justify-between transition-all duration-300">
            
            {/* DRS STUDIOS Logo */}
            <a
              href="#"
              onClick={(e) => handleNavClick(e, '#')}
              className="group flex items-center gap-3 focus:outline-none"
              aria-label="DRS STUDIOS Home"
            >
              <img
                src="/drs-logo.png"
                alt="DRS STUDIOS"
                className="h-8 sm:h-10 w-auto object-contain transition-all duration-300 filter drop-shadow-[0_0_12px_rgba(217,139,58,0.35)] group-hover:scale-105"
              />
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-7 lg:gap-9 text-xs tracking-wider font-medium text-[#A1A1A1]">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="hover:text-white transition-colors duration-200 relative py-1 text-xs tracking-widest uppercase group font-mono"
                >
                  <span>{link.label}</span>
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-gradient-to-r from-[#D98B3A] to-[#C6A96C] transition-all duration-300 group-hover:w-full rounded-full shadow-[0_0_8px_#D98B3A]"></span>
                </a>
              ))}
            </nav>

            {/* Right Action: Spatial Pill CTA */}
            <div className="hidden sm:flex items-center gap-4">
              <button
                onClick={onStartProject}
                className="spatial-pill spatial-pill-amber py-2.5 px-6 text-[11px] font-semibold tracking-wider text-black rounded-full"
              >
                <span>START A PROJECT</span>
                <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-full bg-white/5 border border-white/10 text-white hover:border-[#D98B3A]/60 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-[#D98B3A]" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Spatial Glass Navigation */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#050505]/95 backdrop-blur-3xl md:hidden pt-28 px-6 flex flex-col justify-between pb-10 animate-in fade-in duration-300">
          <div className="space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-white/10 text-[11px] font-mono text-[#A1A1A1] uppercase tracking-widest">
              <span className="flex items-center gap-2 text-[#D98B3A]">
                <span className="w-2 h-2 rounded-full bg-[#D98B3A] animate-pulse" />
                SPATIAL INTERFACE
              </span>
              <span>DRS STUDIOS</span>
            </div>

            <div className="flex flex-col space-y-3">
              {navLinks.map((link, idx) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="font-headline text-2xl font-light text-white/90 hover:text-[#D98B3A] transition-colors flex items-center justify-between py-3 border-b border-white/5"
                >
                  <span>{link.label}</span>
                  <span className="text-xs font-mono text-[#D98B3A]">0{idx + 1}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-4 pt-6 border-t border-white/10">
            <img
              src="/drs-logo.png"
              alt="DRS STUDIOS"
              className="h-10 w-auto object-contain mb-2 filter drop-shadow-[0_0_15px_rgba(217,139,58,0.3)]"
            />
            <p className="text-xs text-[#A1A1A1] leading-relaxed">
              "Your Entire Digital World. One Creative Partner."
            </p>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onStartProject();
              }}
              className="w-full spatial-pill spatial-pill-amber py-4 text-center justify-center font-bold text-xs"
            >
              <span>START A PROJECT</span>
              <ArrowUpRight className="w-4 h-4 ml-1 stroke-[2.5]" />
            </button>
          </div>
        </div>
      )}
    </>
  );
};
