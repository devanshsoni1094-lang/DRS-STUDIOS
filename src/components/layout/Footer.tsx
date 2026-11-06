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
    <footer className="bg-[#050505] border-t border-[#262626] relative overflow-hidden pt-20 pb-12">
      {/* Subtle background ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-[#C6A96C]/5 blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Top Callout Banner */}
        <div className="p-8 sm:p-12 rounded-sm bg-[#101010] border border-[#262626] mb-16 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1C1C1C] border border-[#262626] text-[11px] uppercase tracking-widest text-[#C6A96C]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C6A96C] animate-pulse"></span>
              {companyIdentity.contact.status}
            </div>
            <h3 className="font-headline text-2xl sm:text-3xl lg:text-4xl font-light tracking-tight text-white">
              Ready to elevate your digital presence?
            </h3>
            <p className="text-sm text-[#A1A1A1] leading-relaxed">
              Partner with DRS STUDIOS for comprehensive strategy, high-end web development, social management, and creative production.
            </p>
          </div>
          <button
            onClick={onStartProject}
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#C6A96C] text-black font-semibold text-xs uppercase tracking-[0.18em] hover:bg-[#DFCA94] transition-all duration-300 rounded-sm cursor-pointer whitespace-nowrap shadow-[0_0_30px_rgba(198,169,108,0.25)] hover:shadow-[0_0_40px_rgba(198,169,108,0.4)]"
          >
            <span>START A PROJECT</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-[#262626]">
          {/* Col 1: Identity & Description (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-sm bg-[#101010] border border-[#C6A96C]/40 flex items-center justify-center">
                <span className="font-headline font-bold text-white text-xs tracking-wider">DRS</span>
              </div>
              <span className="font-headline font-bold tracking-[0.2em] text-white text-lg">
                DRS STUDIOS
              </span>
            </div>
            <p className="text-xs text-[#A1A1A1] leading-relaxed pr-6">
              {companyIdentity.positioning}
            </p>
            <div className="space-y-2 pt-2">
              <div className="flex items-center gap-2 text-xs text-[#A1A1A1]">
                <MapPin className="w-3.5 h-3.5 text-[#C6A96C]" />
                <span>{companyIdentity.contact.location}</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-[#A1A1A1]">
                <Mail className="w-3.5 h-3.5 text-[#C6A96C]" />
                <a href={`mailto:${companyIdentity.contact.email}`} className="hover:text-white transition-colors">
                  {companyIdentity.contact.email}
                </a>
              </div>
            </div>
          </div>

          {/* Col 2: Services (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#DFCA94]">
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

          {/* Col 3: Navigation & Sections (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#DFCA94]">
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

          {/* Col 4: Channels & Social (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#DFCA94]">
              Connect
            </h4>
            <div className="space-y-3">
              <a
                href={companyIdentity.contact.instagram}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between p-3 rounded-sm bg-[#101010] border border-[#262626] hover:border-[#C6A96C]/40 text-xs text-white transition-colors group"
              >
                <span>Instagram / @drsstudios</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#A1A1A1] group-hover:text-[#C6A96C] transition-colors" />
              </a>
              <a
                href={companyIdentity.contact.youtube}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between p-3 rounded-sm bg-[#101010] border border-[#262626] hover:border-[#C6A96C]/40 text-xs text-white transition-colors group"
              >
                <span>YouTube / @drsstudios</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#A1A1A1] group-hover:text-[#C6A96C] transition-colors" />
              </a>
              <a
                href={`https://wa.me/${companyIdentity.contact.whatsapp.replace('+', '')}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between p-3 rounded-sm bg-[#101010] border border-[#262626] hover:border-[#C6A96C]/40 text-xs text-white transition-colors group"
              >
                <div className="flex items-center gap-2">
                  <MessageCircle className="w-3.5 h-3.5 text-[#C6A96C]" />
                  <span>WhatsApp Concierge</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#A1A1A1] group-hover:text-[#C6A96C] transition-colors" />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Statement and Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-[#A1A1A1]">
          <div className="flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-[#C6A96C]" />
            <p className="font-headline tracking-wide uppercase text-white/90">
              DRS STUDIOS — YOUR ENTIRE DIGITAL WORLD. ONE CREATIVE PARTNER.
            </p>
          </div>
          <div className="flex items-center gap-6">
            <span>© {new Date().getFullYear()} DRS STUDIOS. All rights reserved.</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-sm bg-[#101010] border border-[#262626] hover:border-[#C6A96C]/50 text-white transition-colors cursor-pointer"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
