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

        {/* Central Spatial Visual Area with 4 Orbiting Floating Glass Panels */}
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
              4 FLOATING SPATIAL GLASS PANELS ORBITING THE HERO
              (Inspired by Reference Images 1, 2, 4 with rich liquid glass)
             ======================================================== */}

          {/* Floating Glass Panel 1: YOUTUBE MANAGEMENT (Top-Left) */}
          <div className="hidden lg:block absolute left-4 xl:left-8 top-4 z-20 animate-float-slow">
            <div className="floating-glass-card p-5 max-w-[240px]">
              <div className="flex items-center justify-between mb-3">
                <div className="w-8 h-8 rounded-full bg-red-500/10 border border-red-500/30 flex items-center justify-center">
                  <Youtube className="w-4 h-4 text-red-400" />
                </div>
                <span className="text-[10px] font-mono uppercase text-[#D98B3A] tracking-wider">
                  01 // YOUTUBE
                </span>
              </div>
              <h4 className="font-headline font-semibold text-white text-sm mb-1">
                YouTube Growth
              </h4>
              <p className="text-[11px] text-[#A1A1A1] leading-relaxed">
                Strategic channel curation, high-CTR packaging & SEO.
              </p>
              <div className="mt-3 pt-2.5 border-t border-white/10 flex items-center justify-between text-[10px] font-mono">
                <span className="text-[#A1A1A1]">Reach Growth:</span>
                <span className="text-[#C6A96C] font-bold">+210%</span>
              </div>
            </div>
          </div>

          {/* Floating Glass Panel 2: INSTAGRAM MANAGEMENT (Bottom-Left) */}
          <div className="hidden lg:block absolute left-8 xl:left-16 bottom-6 z-20 animate-float-delayed">
            <div className="floating-glass-card p-5 max-w-[250px]">
              <div className="flex items-center justify-between mb-3">
                <div className="w-8 h-8 rounded-full bg-pink-500/10 border border-pink-500/30 flex items-center justify-center">
                  <Instagram className="w-4 h-4 text-pink-400" />
                </div>
                <span className="text-[10px] font-mono uppercase text-[#D98B3A] tracking-wider">
                  02 // INSTAGRAM
                </span>
              </div>
              <h4 className="font-headline font-semibold text-white text-sm mb-1">
                Visual Grid Cohesion
              </h4>
              <p className="text-[11px] text-[#A1A1A1] leading-relaxed">
                Editorial grids, high-retention Reels & story sales funnels.
              </p>
              <div className="mt-3 pt-2.5 border-t border-white/10 flex items-center justify-between text-[10px] font-mono">
                <span className="text-[#A1A1A1]">Engagement:</span>
                <span className="text-[#C6A96C] font-bold">3.4x Organic</span>
              </div>
            </div>
          </div>

          {/* Floating Glass Panel 3: WEBSITE DEVELOPMENT (Top-Right) */}
          <div className="hidden lg:block absolute right-4 xl:right-8 top-8 z-20 animate-float-reverse">
            <div className="floating-glass-card p-5 max-w-[250px]">
              <div className="flex items-center justify-between mb-3">
                <div className="w-8 h-8 rounded-full bg-blue-500/10 border border-blue-500/30 flex items-center justify-center">
                  <Globe className="w-4 h-4 text-blue-400" />
                </div>
                <span className="text-[10px] font-mono uppercase text-[#D98B3A] tracking-wider">
                  03 // WEB DEV
                </span>
              </div>
              <h4 className="font-headline font-semibold text-white text-sm mb-1">
                Digital Flagships
              </h4>
              <p className="text-[11px] text-[#A1A1A1] leading-relaxed">
                Sub-second latency, React architectures & conversion UX.
              </p>
              <div className="mt-3 pt-2.5 border-t border-white/10 flex items-center justify-between text-[10px] font-mono">
                <span className="text-[#A1A1A1]">Lighthouse:</span>
                <span className="text-[#C6A96C] font-bold">99/100 Score</span>
              </div>
            </div>
          </div>

          {/* Floating Glass Panel 4: CREATIVE PRODUCTION (Bottom-Right) */}
          <div className="hidden lg:block absolute right-8 xl:right-14 bottom-4 z-20 animate-float-slow">
            <div className="floating-glass-card p-5 max-w-[260px]">
              <div className="flex items-center justify-between mb-3">
                <div className="w-8 h-8 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center">
                  <Film className="w-4 h-4 text-amber-400" />
                </div>
                <span className="text-[10px] font-mono uppercase text-[#D98B3A] tracking-wider">
                  04 // PRODUCTION
                </span>
              </div>
              <h4 className="font-headline font-semibold text-white text-sm mb-1">
                AI & Cinematic Video
              </h4>
              <p className="text-[11px] text-[#A1A1A1] leading-relaxed">
                Color grading, 12K generative concept visuals & performance ads.
              </p>
              <div className="mt-3 pt-2.5 border-t border-white/10 flex items-center justify-between text-[10px] font-mono">
                <span className="text-[#A1A1A1]">Pipeline:</span>
                <span className="text-[#C6A96C] font-bold">5x Faster Sprints</span>
              </div>
            </div>
          </div>

        </div>

      </div>

      {/* Bottom Subtle Scroll Indicator */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full pt-6 border-t border-white/5 flex items-center justify-between text-[11px] font-mono uppercase text-[#A1A1A1] tracking-widest">
        <div className="hidden sm:flex items-center gap-6">
          <span>140+ RELEASES</span>
          <span className="text-white/20">•</span>
          <span>4.8X AVERAGE GROWTH</span>
          <span className="text-white/20">•</span>
          <span>UNIFIED ECOSYSTEM</span>
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
