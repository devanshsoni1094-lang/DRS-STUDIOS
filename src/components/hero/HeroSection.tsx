import React from 'react';
import { ArrowDown, ArrowUpRight, Compass, Shield, Terminal, Zap } from 'lucide-react';
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
    <section className="relative min-h-[100svh] flex flex-col justify-between pt-24 sm:pt-28 pb-8 overflow-hidden bg-[#030303] border-b border-[#1E1E24]">
      {/* Interactive atmospheric canvas mesh with warm amber lighting */}
      <AmbientMesh />

      {/* Subtle radial glow behind the center visual */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] sm:w-[750px] h-[450px] bg-[#FF9E2C]/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Main Hero Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full flex-1 flex flex-col justify-between py-6">
        
        {/* Massive Extended Display Headline (Echoframe Reference Style) */}
        <div className="text-center pt-2 sm:pt-4">
          <div className="inline-flex items-center gap-2 mb-3 text-[10px] sm:text-xs font-mono uppercase tracking-[0.28em] text-[#A1A1A6]">
            <span className="text-[#FF9E2C] font-bold">+ + +</span>
            <span>CREATIVE INTELLIGENCE. DIGITAL EXCELLENCE.</span>
            <span className="text-[#FF9E2C] font-bold">+ + +</span>
          </div>

          <h1 className="font-extended font-black text-white tracking-[0.08em] sm:tracking-[0.16em] md:tracking-[0.22em] text-4xl sm:text-7xl md:text-8xl lg:text-[7.2rem] leading-none uppercase select-none drop-shadow-[0_10px_30px_rgba(0,0,0,0.9)]">
            DRS STUDIOS
          </h1>
        </div>

        {/* Central Visual Composition with Cinematic Character & Amber Rim Lighting */}
        <div className="relative my-auto py-4 sm:py-6 flex items-center justify-center">
          
          {/* Center 3D Astronaut / Cybernetic Digital Architect Visual */}
          <div className="relative w-full max-w-md sm:max-w-lg md:max-w-xl mx-auto flex items-center justify-center">
            {/* Ambient amber rim glow halo */}
            <div className="absolute -inset-4 rounded-full bg-gradient-to-t from-[#FF9E2C]/25 via-[#FFA737]/10 to-transparent blur-2xl pointer-events-none animate-pulse-glow" />

            <div className="relative rounded-2xl overflow-hidden border border-[#2D2D35]/40 shadow-[0_20px_60px_-15px_rgba(0,0,0,1),0_0_35px_rgba(255,158,44,0.2)] bg-[#070709]">
              <img
                src="/hero-astronaut.png"
                onError={(e) => {
                  // High-fidelity fallback if local file is still being written
                  (e.target as HTMLImageElement).src =
                    'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=85';
                }}
                alt="DRS STUDIOS Cybernetic Creative Intelligence"
                className="w-full h-auto object-cover max-h-[380px] sm:max-h-[460px] md:max-h-[500px] filter contrast-125 brightness-105"
              />
              {/* Cinematic Vignette Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-[#030303]/40 pointer-events-none" />
              <div className="absolute inset-0 bg-radial-gradient pointer-events-none" />
            </div>

            {/* Official DRS STUDIOS Metallic Crest Overlaid at Base of Visual */}
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 z-20">
              <div className="px-5 py-2 rounded-full bg-[#08080C]/90 border border-[#FF9E2C]/50 backdrop-blur-xl shadow-[0_0_25px_rgba(255,158,44,0.35)] flex items-center gap-3">
                <img
                  src="/drs-logo.png"
                  alt="DRS"
                  className="h-6 sm:h-7 w-auto object-contain"
                />
                <span className="text-[10px] font-mono tracking-widest text-white/90 uppercase hidden sm:inline-block">
                  FLAGSHIP STUDIO
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Lower Grid: Left Manifesto + Right Echoframe Pill CTAs */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end pt-8 sm:pt-12">
          
          {/* Left Column: Technical Manifesto (Echoframe Reference Style) */}
          <div className="lg:col-span-6 space-y-3 text-left">
            <div className="flex items-center gap-2 text-[11px] font-mono tracking-widest text-[#FF9E2C]">
              <span>[ // 001 ]</span>
              <span className="uppercase">YOUR ENTIRE DIGITAL WORLD. ONE CREATIVE PARTNER.</span>
            </div>

            <h2 className="font-extended text-xl sm:text-2xl md:text-3xl font-bold uppercase text-white tracking-wide leading-tight">
              CREATIVE INTELLIGENCE. <br />
              <span className="text-[#FF9E2C]">DIGITAL EXCELLENCE.</span>
            </h2>

            <p className="text-xs sm:text-sm text-[#A1A1A6] font-mono leading-relaxed max-w-lg">
              ARCHITECTURAL DIGITAL EXPERIENCES, YOUTUBE & INSTAGRAM CHANNEL MANAGEMENT, HIGH-CONVERSION WEB PLATFORMS, AND GENERATIVE AI PRODUCTION.
            </p>
          </div>

          {/* Right Column: Pill Buttons (Echoframe Reference Style) */}
          <div className="lg:col-span-6 flex flex-col sm:flex-row items-stretch sm:items-center justify-end gap-4 lg:pl-6">
            <button
              onClick={onExploreServices}
              className="echo-pill group text-center"
            >
              <span>SEE HOW IT WORKS</span>
              <span className="text-[#FF9E2C] font-bold transition-transform duration-300 group-hover:translate-x-1">&gt;</span>
            </button>

            <button
              onClick={onStartProject}
              className="echo-pill echo-pill-primary group text-center"
            >
              <span>START A PROJECT</span>
              <span className="font-bold transition-transform duration-300 group-hover:translate-x-1">&gt;</span>
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Technical Ticker Ribbon */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full pt-6 border-t border-[#1E1E24]/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] font-mono uppercase text-[#71717A] tracking-widest">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF9E2C]" />
            <span>140+ ENTERPRISE RELEASES</span>
          </div>
          <span className="hidden md:inline text-white/20">|</span>
          <div className="hidden md:flex items-center gap-2">
            <span>+210% RETENTION MULTIPLIER</span>
          </div>
          <span className="hidden lg:inline text-white/20">|</span>
          <div className="hidden lg:flex items-center gap-2">
            <span>99/100 LIGHTHOUSE ARCHITECTURE</span>
          </div>
        </div>

        <button
          onClick={onExploreServices}
          className="flex items-center gap-2 text-[#A1A1A6] hover:text-[#FF9E2C] transition-colors cursor-pointer"
        >
          <span>DISCOVER ECOSYSTEM</span>
          <ArrowDown className="w-3.5 h-3.5 text-[#FF9E2C] animate-bounce" />
        </button>
      </div>
    </section>
  );
};
