import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Shield, Activity, Terminal } from 'lucide-react';

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
    { label: 'SERVICES', href: '#services', code: '01' },
    { label: 'OUR WORK', href: '#work', code: '02' },
    { label: 'ABOUT', href: '#about', code: '03' },
    { label: 'PROCESS', href: '#process', code: '04' },
    { label: 'WHY DRS', href: '#why-us', code: '05' },
    { label: 'CONTACT', href: '#contact', code: '06' },
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
            ? 'bg-[#030303]/90 backdrop-blur-xl border-b border-[#1E1E24] py-3 shadow-[0_10px_30px_rgba(0,0,0,0.8)]'
            : 'bg-transparent py-5 border-b border-white/5'
        }`}
      >
        {/* Top Technical Metadata Bar (Echoframe Reference Style) */}
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pb-2 mb-2 border-b border-white/[0.04] hidden md:flex items-center justify-between text-[10px] font-mono tracking-widest text-[#71717A]">
          <div className="flex items-center gap-3">
            <span className="text-[#FF9E2C] font-semibold tracking-widest">+ + +</span>
            <span className="flex items-center gap-1.5 text-white/80">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF9E2C] animate-ping" />
              SYSTEM: ONLINE
            </span>
            <span className="text-white/20">|</span>
            <span className="uppercase text-[#A1A1A6]">DRS // CREATIVE INTELLIGENCE</span>
          </div>

          <div className="flex items-center gap-4 text-[#A1A1A6]">
            <span>COORDINATE: 001 // 124</span>
            <span className="text-white/20">|</span>
            <span className="text-[#FF9E2C] font-mono">[STUDIO FLAGSHIP]</span>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
          {/* Logo with proper official brandmark */}
          <a
            href="#"
            className="group flex items-center gap-4 focus:outline-none"
            aria-label="DRS STUDIOS Home"
          >
            <div className="relative flex items-center">
              <img
                src="/drs-logo.png"
                alt="DRS STUDIOS"
                className="h-10 sm:h-12 md:h-14 w-auto object-contain transition-all duration-300 filter drop-shadow-[0_0_15px_rgba(255,158,44,0.35)] group-hover:drop-shadow-[0_0_25px_rgba(255,158,44,0.65)] group-hover:scale-[1.03]"
              />
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-7 text-xs font-mono tracking-[0.18em]">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-[#A1A1AA] hover:text-white transition-colors duration-200 relative py-1 uppercase flex items-center gap-1 group"
              >
                <span className="text-[#FF9E2C]/60 text-[9px] group-hover:text-[#FF9E2C] transition-colors">
                  {link.code}
                </span>
                <span>{link.label}</span>
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#FF9E2C] transition-all duration-300 group-hover:w-full shadow-[0_0_8px_#FF9E2C]"></span>
              </a>
            ))}
          </nav>

          {/* Right Action: Sci-Fi Pill CTA */}
          <div className="hidden sm:flex items-center gap-4">
            <button
              onClick={onStartProject}
              className="echo-pill hover:border-[#FF9E2C] text-white"
            >
              <span>START A PROJECT</span>
              <span className="text-[#FF9E2C] font-bold">&gt;</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2.5 rounded-full bg-[#0E0E12] border border-[#262626] text-white hover:border-[#FF9E2C]/70 transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-[#FF9E2C]" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#030303]/98 backdrop-blur-2xl lg:hidden pt-32 px-6 flex flex-col justify-between pb-10 animate-in fade-in duration-300">
          <div className="space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-[#1E1E24] text-[11px] font-mono text-[#71717A] tracking-wider uppercase">
              <span className="text-[#FF9E2C] flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#FF9E2C] animate-pulse" />
                NAVIGATION SYSTEM
              </span>
              <span>001 // 06</span>
            </div>
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="font-extended text-lg font-light text-white/90 hover:text-[#FF9E2C] transition-colors flex items-center justify-between py-3 border-b border-[#141418]"
                >
                  <span className="tracking-wider">{link.label}</span>
                  <span className="text-xs font-mono text-[#FF9E2C]">[ // {link.code} ]</span>
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-4 pt-6 border-t border-[#1E1E24]">
            <img
              src="/drs-logo.png"
              alt="DRS STUDIOS"
              className="h-10 w-auto object-contain mb-2 filter drop-shadow-[0_0_15px_rgba(255,158,44,0.3)]"
            />
            <p className="text-xs text-[#A1A1A6] font-mono">
              "Your Entire Digital World. One Creative Partner."
            </p>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onStartProject();
              }}
              className="w-full echo-pill echo-pill-primary py-4 text-center justify-center font-extended text-xs"
            >
              <span>INITIATE PROJECT</span>
              <span className="font-bold">&gt;</span>
            </button>
          </div>
        </div>
      )}
    </>
  );
};
