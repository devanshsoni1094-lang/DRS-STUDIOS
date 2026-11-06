import React from 'react';
import { ArrowUpRight, ArrowUp, Mail, MessageCircle, MapPin, Sparkles } from 'lucide-react';
import { companyIdentity } from '../../data/company';

interface FooterProps {
  onStartProject: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onStartProject }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="footer" data-section-name="GLOBAL FOOTER" className="bg-[#050505] border-t border-white/10 relative overflow-hidden pt-20 pb-12">
      {/* Background warm amber glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-[#D98B3A]/10 blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Top Spatial Glass Callout Banner */}
        <div className="spatial-glass rounded-3xl p-8 sm:p-12 mb-16 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 relative overflow-hidden">
          <div className="max-w-2xl space-y-3 relative z-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full spatial-nav-capsule text-[11px] font-mono uppercase tracking-widest text-[#D98B3A]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D98B3A] animate-pulse"></span>
              {companyIdentity.contact.status}
            </div>
            <h3 className="font-headline text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white">
              Ready to elevate your digital presence?
            </h3>
            <p className="text-sm text-[#A1A1A1] leading-relaxed">
              Partner with DRS STUDIOS for comprehensive strategy, high-end web development, social management, and creative production.
            </p>
          </div>

          <button
            onClick={onStartProject}
            className="spatial-pill spatial-pill-amber py-4 px-8 text-xs font-bold text-black uppercase tracking-wider self-start lg:self-auto shrink-0 shadow-[0_0_30px_rgba(217,139,58,0.35)]"
          >
            <span>START A PROJECT</span>
            <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
          </button>
        </div>

        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          
          {/* Col 1: Identity & Official Logo (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-3">
              <img
                src="/drs-logo.png"
                alt="DRS STUDIOS"
                className="h-12 sm:h-14 w-auto object-contain filter drop-shadow-[0_0_15px_rgba(217,139,58,0.35)]"
              />
            </div>
            <p className="text-xs text-[#A1A1A1] leading-relaxed pr-6">
              {companyIdentity.positioning}
            </p>
            <div className="space-y-2 pt-2 text-xs text-[#A1A1A1]">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#D98B3A]" />
                <span>{companyIdentity.contact.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#D98B3A]" />
                <a href={`mailto:${companyIdentity.contact.email}`} className="hover:text-white transition-colors">
                  {companyIdentity.contact.email}
                </a>
              </div>
            </div>
          </div>

          {/* Col 2: Services (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-mono font-semibold uppercase tracking-[0.2em] text-[#C6A96C]">
              Services
            </h4>
            <ul className="space-y-2.5 text-xs text-[#A1A1A1]">
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  01. YouTube Management
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  02. Instagram Management
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  03. Website Development
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  04. Creative Production Studio
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  05. Complete Digital Management
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Navigation (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-mono font-semibold uppercase tracking-[0.2em] text-[#C6A96C]">
              Explore
            </h4>
            <ul className="space-y-2.5 text-xs text-[#A1A1A1]">
              <li>
                <a href="#about" className="hover:text-white transition-colors">About Us</a>
              </li>
              <li>
                <a href="#work" className="hover:text-white transition-colors">Our Work</a>
              </li>
              <li>
                <a href="#process" className="hover:text-white transition-colors">Process</a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-white transition-colors">Why DRS Studios</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">Contact</a>
              </li>
            </ul>
          </div>

          {/* Col 4: Channels & Social (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-mono font-semibold uppercase tracking-[0.2em] text-[#C6A96C]">
              Connect
            </h4>
            <div className="space-y-2.5 text-xs">
              <a
                href={companyIdentity.contact.instagram}
                target="_blank"
                rel="noreferrer"
                className="block p-3 rounded-xl spatial-glass hover:border-[#D98B3A]/50 text-[#A1A1A1] hover:text-white transition-colors"
              >
                Instagram &rarr;
              </a>
              <a
                href={companyIdentity.contact.youtube}
                target="_blank"
                rel="noreferrer"
                className="block p-3 rounded-xl spatial-glass hover:border-[#D98B3A]/50 text-[#A1A1A1] hover:text-white transition-colors"
              >
                YouTube &rarr;
              </a>
              <a
                href={`https://wa.me/${companyIdentity.contact.whatsapp.replace('+', '')}`}
                target="_blank"
                rel="noreferrer"
                className="block p-3 rounded-xl spatial-glass hover:border-[#25D366]/50 text-[#A1A1A1] hover:text-white transition-colors"
              >
                WhatsApp &rarr;
              </a>
            </div>
          </div>
        </div>

        {/* Footer Statement and Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-[#A1A1A1]">
          <div className="flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-[#D98B3A]" />
            <p className="font-headline tracking-wide uppercase text-white/90">
              DRS STUDIOS — YOUR ENTIRE DIGITAL WORLD. ONE CREATIVE PARTNER.
            </p>
          </div>
          <div className="flex items-center gap-6">
            <span>© {new Date().getFullYear()} DRS STUDIOS. All rights reserved.</span>
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-full spatial-nav-capsule hover:border-[#D98B3A]/60 text-white transition-colors cursor-pointer"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4 text-[#D98B3A]" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
