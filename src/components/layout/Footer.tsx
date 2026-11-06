import React from 'react';
import { ArrowUpRight, ArrowUp, Mail, MessageCircle, MapPin, Sparkles, Terminal } from 'lucide-react';
import { companyIdentity } from '../../data/company';

interface FooterProps {
  onStartProject: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onStartProject }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#020203] border-t border-[#1E1E24] relative overflow-hidden pt-20 pb-12">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-[#FF9E2C]/5 blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Top Sci-Fi Callout Banner */}
        <div className="p-8 sm:p-12 rounded-2xl bg-[#08080C] border border-[#1E1E24] shadow-[0_0_40px_rgba(0,0,0,0.8)] mb-16 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#FF9E2C]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-2xl space-y-3 relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#121218] border border-[#262626] text-[10px] font-mono uppercase tracking-widest text-[#FF9E2C]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF9E2C] animate-pulse"></span>
              {companyIdentity.contact.status}
            </div>
            <h3 className="font-extended text-2xl sm:text-3xl lg:text-4xl font-bold uppercase tracking-wide text-white">
              Ready to elevate your digital presence?
            </h3>
            <p className="text-xs sm:text-sm text-[#A1A1A6] font-mono leading-relaxed">
              Consolidate your web engineering, social media growth, and generative AI production under one creative partner.
            </p>
          </div>

          <button
            onClick={onStartProject}
            className="echo-pill echo-pill-primary py-4 px-8 self-start lg:self-auto shrink-0 shadow-[0_0_30px_rgba(255,158,44,0.4)]"
          >
            <span>START A PROJECT</span>
            <span className="font-bold">&gt;</span>
          </button>
        </div>

        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-[#1E1E24]">
          {/* Col 1: Identity & Official Logo (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-3">
              <img
                src="/drs-logo.png"
                alt="DRS STUDIOS"
                className="h-12 sm:h-14 w-auto object-contain filter drop-shadow-[0_0_15px_rgba(255,158,44,0.35)]"
              />
            </div>
            <p className="text-xs text-[#A1A1A6] font-mono leading-relaxed pr-6">
              {companyIdentity.positioning}
            </p>
            <div className="space-y-2 pt-2 text-xs font-mono text-[#71717A]">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#FF9E2C]" />
                <span>{companyIdentity.contact.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#FF9E2C]" />
                <a href={`mailto:${companyIdentity.contact.email}`} className="text-[#A1A1A6] hover:text-white transition-colors">
                  {companyIdentity.contact.email}
                </a>
              </div>
            </div>
          </div>

          {/* Col 2: Services (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#FF9E2C] font-semibold">
              // DIVISIONS
            </h4>
            <ul className="space-y-2.5 text-xs font-mono text-[#A1A1A6]">
              <li>
                <a href="#services" className="hover:text-white transition-colors flex items-center gap-2">
                  <span className="text-[#FF9E2C]/50 text-[10px]">01</span> YouTube Management
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors flex items-center gap-2">
                  <span className="text-[#FF9E2C]/50 text-[10px]">02</span> Instagram Management
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors flex items-center gap-2">
                  <span className="text-[#FF9E2C]/50 text-[10px]">03</span> Website Development
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors flex items-center gap-2">
                  <span className="text-[#FF9E2C]/50 text-[10px]">04</span> Creative Production Studio
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors flex items-center gap-2">
                  <span className="text-[#FF9E2C]/50 text-[10px]">05</span> Complete Digital Management
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Navigation (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#FF9E2C] font-semibold">
              // ARCHITECTURE
            </h4>
            <ul className="space-y-2.5 text-xs font-mono text-[#A1A1A6]">
              <li>
                <a href="#about" className="hover:text-white transition-colors">About Studio</a>
              </li>
              <li>
                <a href="#work" className="hover:text-white transition-colors">Our Work</a>
              </li>
              <li>
                <a href="#process" className="hover:text-white transition-colors">Process Flow</a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-white transition-colors">Why DRS</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">Brief Inquiry</a>
              </li>
            </ul>
          </div>

          {/* Col 4: Channels & Social (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#FF9E2C] font-semibold">
              // CONNECT
            </h4>
            <div className="space-y-2 text-xs font-mono">
              <a
                href={companyIdentity.contact.instagram}
                target="_blank"
                rel="noreferrer"
                className="block p-2.5 rounded-sm bg-[#0A0A0D] border border-[#1E1E24] hover:border-[#FF9E2C]/40 text-[#A1A1A6] hover:text-white transition-colors"
              >
                Instagram &rarr;
              </a>
              <a
                href={companyIdentity.contact.youtube}
                target="_blank"
                rel="noreferrer"
                className="block p-2.5 rounded-sm bg-[#0A0A0D] border border-[#1E1E24] hover:border-[#FF9E2C]/40 text-[#A1A1A6] hover:text-white transition-colors"
              >
                YouTube &rarr;
              </a>
              <a
                href={`https://wa.me/${companyIdentity.contact.whatsapp.replace('+', '')}`}
                target="_blank"
                rel="noreferrer"
                className="block p-2.5 rounded-sm bg-[#0A0A0D] border border-[#1E1E24] hover:border-[#25D366]/40 text-[#A1A1A6] hover:text-white transition-colors"
              >
                WhatsApp &rarr;
              </a>
            </div>
          </div>
        </div>

        {/* Footer Statement and Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-[11px] font-mono text-[#71717A]">
          <div className="flex items-center gap-2">
            <span className="text-[#FF9E2C] font-bold">+ + +</span>
            <p className="uppercase tracking-wider">
              DRS STUDIOS — YOUR ENTIRE DIGITAL WORLD. ONE CREATIVE PARTNER.
            </p>
          </div>
          <div className="flex items-center gap-6">
            <span>© {new Date().getFullYear()} DRS STUDIOS. ALL RIGHTS RESERVED.</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-full bg-[#0D0D12] border border-[#1E1E24] hover:border-[#FF9E2C]/50 text-white transition-colors cursor-pointer"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4 text-[#FF9E2C]" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
