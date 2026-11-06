import React from 'react';
import { ArrowDown, ArrowUpRight, Youtube, Instagram, Globe, Sparkles, Film, Compass } from 'lucide-react';
import { AmbientMesh } from './AmbientMesh';

interface HeroSectionProps {
  onExploreServices: () => void;
  onStartProject: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreServices,
  onStartProject,
}) => {
  return (
    <section className="relative min-h-[105svh] flex flex-col justify-between pt-28 sm:pt-36 pb-12 overflow-hidden bg-[#050505] border-b border-white/10">
      {/* Interactive atmospheric canvas mesh with warm amber lighting */}
      <AmbientMesh />

      {/* Warm amber bloom center glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[850px] h-[500px] bg-[#D98B3A]/15 rounded-full blur-[160px] pointer-events-none" />

      {/* Main Spatial Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full flex-1 flex flex-col justify-between py-6">
        
        {/* Top Kicker Capsule */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full spatial-nav-capsule text-xs font-mono tracking-widest uppercase text-[#C6A96C]">
            <span className="w-2 h-2 rounded-full bg-[#D98B3A] animate-ping" />
            <span>Creative Intelligence. Digital Excellence.</span>
          </div>
        </div>

        {/* Master Editorial Headline */}
        <div className="text-center max-w-5xl mx-auto mb-6">
          <h1 className="font-headline font-bold text-white tracking-tight text-4xl sm:text-6xl md:text-7xl lg:text-8xl leading-[1.05] uppercase">
            Your Entire{' '}
            <span className="gold-gradient-text font-extrabold">
              Digital World.
            </span>
            <br />
            One Creative Partner.
          </h1>

          <p className="max-w-2xl mx-auto mt-6 text-sm sm:text-base md:text-lg text-[#A1A1A1] font-light leading-relaxed">
            We help businesses build, manage, and elevate their digital presence through creative production, social media management, and digital experiences.
          </p>

          {/* Glass Action Pills */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onStartProject}
              className="w-full sm:w-auto spatial-pill spatial-pill-amber py-3.5 px-8 text-xs font-semibold tracking-wider text-black rounded-full"
            >
              <span>START A PROJECT</span>
              <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
            </button>

            <button
              onClick={onExploreServices}
              className="w-full sm:w-auto spatial-pill py-3.5 px-8 text-xs font-medium tracking-wider text-white rounded-full"
            >
              <Compass className="w-4 h-4 text-[#C6A96C]" />
              <span>EXPLORE SERVICES</span>
            </button>
          </div>
        </div>

        {/* Central Spatial Visual Area with 4 Orbiting Floating Glass Panels (with Real Thumbnails!) */}
        <div className="relative my-8 sm:my-12 flex items-center justify-center perspective-container">
          
          {/* Central 3D Visual with warm amber rim lighting */}
          <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto z-10">
            <div className="relative rounded-3xl overflow-hidden border border-white/20 shadow-[0_30px_70px_rgba(0,0,0,0.9),0_0_50px_rgba(217,139,58,0.25)] bg-[#0A0A0E]">
              <img
                src="/hero-astronaut.png"
                alt="DRS STUDIOS Spatial Visual"
                className="w-full h-auto object-cover max-h-[380px] sm:max-h-[440px] filter contrast-125"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-85" />
            </div>

            {/* Central Floating DRS STUDIOS Brandmark Crest */}
            <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 z-20">
              <div className="px-5 py-2.5 rounded-full spatial-nav-capsule flex items-center gap-3">
                <img
                  src="/drs-logo.png"
                  alt="DRS"
                  className="h-7 w-auto object-contain filter drop-shadow-[0_0_10px_rgba(217,139,58,0.4)]"
                />
                <span className="text-[10px] font-mono tracking-widest text-[#C6A96C] uppercase">
                  SPATIAL FLAGSHIP
                </span>
              </div>
            </div>
          </div>

          {/* ========================================================
              4 FLOATING SPATIAL GLASS PANELS WITH BESPOKE THUMBNAILS
             ======================================================== */}

          {/* Floating Glass Panel 1: YOUTUBE MANAGEMENT (Top-Left) */}
          <div className="hidden lg:block absolute left-2 xl:left-6 top-2 z-20 animate-float-slow">
            <div className="floating-glass-card p-3.5 max-w-[260px] overflow-hidden">
              <div className="relative h-28 w-full rounded-xl overflow-hidden mb-3 border border-white/10">
                <img
                  src="/services/youtube-management.jpg"
                  alt="YouTube Management"
                  className="w-full h-full object-cover filter contrast-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0C0C10] via-transparent to-transparent opacity-80" />
                <div className="absolute top-2 left-2">
                  <span className="px-2 py-0.5 rounded-full spatial-nav-capsule text-[8px] font-mono text-[#D98B3A]">
                    DIV 01
                  </span>
                </div>
                <div className="absolute bottom-2 right-2">
                  <span className="text-[10px] font-mono font-bold text-white px-2 py-0.5 rounded-full bg-red-600/80">
                    +248% Growth
                  </span>
                </div>
              </div>
              <h4 className="font-headline font-bold text-white text-xs mb-0.5">
                YouTube Management
              </h4>
              <p className="text-[10px] text-[#A1A1A1] leading-relaxed">
                Grow • Manage • Monetize
              </p>
            </div>
          </div>

          {/* Floating Glass Panel 2: INSTAGRAM MANAGEMENT (Bottom-Left) */}
          <div className="hidden lg:block absolute left-6 xl:left-12 bottom-4 z-20 animate-float-delayed">
            <div className="floating-glass-card p-3.5 max-w-[260px] overflow-hidden">
              <div className="relative h-28 w-full rounded-xl overflow-hidden mb-3 border border-white/10">
                <img
                  src="/services/instagram-management.jpg"
                  alt="Instagram Management"
                  className="w-full h-full object-cover filter contrast-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0C0C10] via-transparent to-transparent opacity-80" />
                <div className="absolute top-2 left-2">
                  <span className="px-2 py-0.5 rounded-full spatial-nav-capsule text-[8px] font-mono text-[#D98B3A]">
                    DIV 02
                  </span>
                </div>
                <div className="absolute bottom-2 right-2">
                  <span className="text-[10px] font-mono font-bold text-white px-2 py-0.5 rounded-full bg-pink-600/80">
                    +312% Reach
                  </span>
                </div>
              </div>
              <h4 className="font-headline font-bold text-white text-xs mb-0.5">
                Instagram Management
              </h4>
              <p className="text-[10px] text-[#A1A1A1] leading-relaxed">
                Grow • Engage • Convert
              </p>
            </div>
          </div>

          {/* Floating Glass Panel 3: WEBSITE DEVELOPMENT (Top-Right) */}
          <div className="hidden lg:block absolute right-2 xl:right-6 top-4 z-20 animate-float-reverse">
            <div className="floating-glass-card p-3.5 max-w-[260px] overflow-hidden">
              <div className="relative h-28 w-full rounded-xl overflow-hidden mb-3 border border-white/10">
                <img
                  src="/services/website-development.jpg"
                  alt="Website Development"
                  className="w-full h-full object-cover filter contrast-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0C0C10] via-transparent to-transparent opacity-80" />
                <div className="absolute top-2 left-2">
                  <span className="px-2 py-0.5 rounded-full spatial-nav-capsule text-[8px] font-mono text-[#D98B3A]">
                    DIV 03
                  </span>
                </div>
                <div className="absolute bottom-2 right-2">
                  <span className="text-[10px] font-mono font-bold text-white px-2 py-0.5 rounded-full bg-blue-600/80">
                    99/100 Speed
                  </span>
                </div>
              </div>
              <h4 className="font-headline font-bold text-white text-xs mb-0.5">
                Website Development
              </h4>
              <p className="text-[10px] text-[#A1A1A1] leading-relaxed">
                Build • Design • Launch • Scale
              </p>
            </div>
          </div>

          {/* Floating Glass Panel 4: CREATIVE PRODUCTION (Bottom-Right) */}
          <div className="hidden lg:block absolute right-6 xl:right-12 bottom-2 z-20 animate-float-slow">
            <div className="floating-glass-card p-3.5 max-w-[260px] overflow-hidden">
              <div className="relative h-28 w-full rounded-xl overflow-hidden mb-3 border border-white/10">
                <img
                  src="/services/creative-production.jpg"
                  alt="Creative Production Studio"
                  className="w-full h-full object-cover filter contrast-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0C0C10] via-transparent to-transparent opacity-80" />
                <div className="absolute top-2 left-2">
                  <span className="px-2 py-0.5 rounded-full spatial-nav-capsule text-[8px] font-mono text-[#D98B3A]">
                    DIV 04
                  </span>
                </div>
                <div className="absolute bottom-2 right-2">
                  <span className="text-[10px] font-mono font-bold text-white px-2 py-0.5 rounded-full bg-amber-600/80">
                    5x Velocity
                  </span>
                </div>
              </div>
              <h4 className="font-headline font-bold text-white text-xs mb-0.5">
                Creative Production Studio
              </h4>
              <p className="text-[10px] text-[#A1A1A1] leading-relaxed">
                Cinematic & AI Workflows
              </p>
            </div>
          </div>

        </div>

      </div>

      {/* Bottom Subtle Scroll Indicator */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full pt-6 border-t border-white/5 flex items-center justify-between text-[11px] font-mono uppercase text-[#A1A1A1] tracking-widest">
        <div className="hidden sm:flex items-center gap-6">
          <span>140+ ENTERPRISE RELEASES</span>
          <span className="text-white/20">•</span>
          <span>4.8X AVERAGE GROWTH</span>
          <span className="text-white/20">•</span>
          <span>INDIAN & GLOBAL CLIENTELE</span>
        </div>

        <button
          onClick={onExploreServices}
          className="mx-auto sm:mx-0 flex items-center gap-2 text-[#A1A1A1] hover:text-[#D98B3A] transition-colors cursor-pointer"
        >
          <span>EXPLORE SPATIAL ECOSYSTEM</span>
          <ArrowDown className="w-3.5 h-3.5 text-[#D98B3A] animate-bounce" />
        </button>
      </div>
    </section>
  );
};
