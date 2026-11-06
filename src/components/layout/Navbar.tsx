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
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'Our Work', href: '#work' },
    { label: 'About', href: '#about' },
    { label: 'Process', href: '#process' },
    { label: 'Why DRS', href: '#why-us' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-[#050505]/85 backdrop-blur-md border-b border-[#262626]/70 py-4 shadow-2xl'
            : 'bg-transparent py-6 border-b border-white/5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="group flex items-center gap-3 focus:outline-none"
            aria-label="DRS STUDIOS Home"
          >
            <div className="w-10 h-10 rounded-sm bg-[#101010] border border-[#262626] flex items-center justify-center transition-all duration-300 group-hover:border-[#C6A96C]/60 group-hover:shadow-[0_0_15px_rgba(198,169,108,0.2)]">
              <span className="font-headline font-bold text-white text-sm tracking-wider">
                DRS
              </span>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-headline font-bold tracking-[0.2em] text-white text-base sm:text-lg group-hover:text-[#DFCA94] transition-colors">
                  DRS STUDIOS
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#C6A96C] inline-block animate-pulse"></span>
              </div>
              <span className="text-[10px] tracking-[0.25em] text-[#A1A1A1] uppercase hidden sm:block">
                Digital & Creative Production
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-sm tracking-wide">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-[#A1A1A1] hover:text-white transition-colors duration-200 relative py-1 text-xs uppercase tracking-[0.15em] font-medium group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#C6A96C] transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Right Action */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={onStartProject}
              className="relative inline-flex items-center gap-2 px-5 py-2.5 rounded-sm bg-[#101010] border border-[#C6A96C]/40 text-white text-xs font-semibold uppercase tracking-[0.16em] hover:bg-[#C6A96C] hover:text-black transition-all duration-300 hover:shadow-[0_0_25px_rgba(198,169,108,0.3)] group cursor-pointer"
            >
              <span>START A PROJECT</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-sm bg-[#101010] border border-[#262626] text-white hover:border-[#C6A96C]/50 transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#050505]/95 backdrop-blur-xl md:hidden pt-28 px-6 flex flex-col justify-between pb-12 animate-in fade-in duration-300">
          <div className="space-y-6">
            <div className="flex items-center gap-2 pb-4 border-b border-[#262626] text-xs text-[#A1A1A1] tracking-wider uppercase">
              <Sparkles className="w-3.5 h-3.5 text-[#C6A96C]" />
              <span>Navigation</span>
            </div>
            <div className="flex flex-col space-y-4">
              {navLinks.map((link, idx) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="font-headline text-2xl font-light text-white/90 hover:text-[#C6A96C] transition-colors flex items-center justify-between py-2 border-b border-[#1A1A1A]"
                >
                  <span>{link.label}</span>
                  <span className="text-xs font-mono text-[#A1A1A1]">0{idx + 1}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-4 pt-6 border-t border-[#262626]">
            <p className="text-xs text-[#A1A1A1] leading-relaxed">
              "Your Entire Digital World. One Creative Partner."
            </p>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onStartProject();
              }}
              className="w-full flex items-center justify-center gap-2 py-3.5 bg-[#C6A96C] text-black font-semibold text-xs tracking-wider uppercase rounded-sm hover:bg-[#DFCA94] transition-all"
            >
              <span>START A PROJECT</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </>
  );
};
