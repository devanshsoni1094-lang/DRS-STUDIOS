import React from 'react';
import { ArrowDown, ArrowUpRight, Compass, ShieldCheck, Zap } from 'lucide-react';
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
    <section className="relative min-h-screen flex flex-col justify-between pt-32 pb-12 overflow-hidden bg-[#050505] border-b border-[#262626]">
      {/* Interactive atmospheric canvas mesh */}
      <AmbientMesh />

      {/* Subtle top ambient radial highlight */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#C6A96C]/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full my-auto py-12 flex flex-col items-center text-center">
        {/* Brand Kicker / Status Pill */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#101010]/80 border border-[#262626] backdrop-blur-md mb-8 animate-in fade-in slide-in-from-bottom-3 duration-700">
          <span className="w-2 h-2 rounded-full bg-[#C6A96C] animate-ping" />
          <span className="text-[11px] font-mono tracking-[0.2em] uppercase text-[#DFCA94]">
            Creative Intelligence. Digital Excellence.
          </span>
        </div>

        {/* Master Headline */}
        <h1 className="font-headline font-light tracking-tight text-white text-4xl sm:text-6xl md:text-7xl lg:text-8xl leading-[1.05] max-w-5xl mb-8 uppercase">
          Your Entire{' '}
          <span className="font-normal gold-gradient-text">
            Digital World.
          </span>
          <br />
          One Creative Partner.
        </h1>

        {/* Supporting Statement */}
        <p className="max-w-2xl text-base sm:text-lg md:text-xl text-[#A1A1A1] font-light leading-relaxed mb-12">
          From powerful digital experiences to exceptional creative content, we help brands build, manage, and elevate their presence online.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-16">
          <button
            onClick={onStartProject}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-[#C6A96C] text-black font-semibold text-xs tracking-[0.18em] uppercase rounded-sm hover:bg-[#DFCA94] transition-all duration-300 hover:shadow-[0_0_35px_rgba(198,169,108,0.35)] group cursor-pointer"
          >
            <span>START A PROJECT</span>
            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>

          <button
            onClick={onExploreServices}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#101010]/80 border border-[#262626] text-white hover:text-white font-medium text-xs tracking-[0.18em] uppercase rounded-sm hover:border-[#C6A96C]/50 hover:bg-[#161616] transition-all duration-300 cursor-pointer"
          >
            <span>EXPLORE OUR SERVICES</span>
            <Compass className="w-4 h-4 text-[#C6A96C]" />
          </button>
        </div>

        {/* Core Value Micro-Pills */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 pt-4 max-w-3xl w-full border-t border-[#262626]/60">
          <div className="flex items-center justify-center gap-2.5 text-xs text-[#A1A1A1]">
            <Zap className="w-3.5 h-3.5 text-[#C6A96C]" />
            <span className="tracking-wide">AI-Powered Precision</span>
          </div>
          <div className="flex items-center justify-center gap-2.5 text-xs text-[#A1A1A1]">
            <ShieldCheck className="w-3.5 h-3.5 text-[#C6A96C]" />
            <span className="tracking-wide">End-to-End Ownership</span>
          </div>
          <div className="col-span-2 md:col-span-1 flex items-center justify-center gap-2.5 text-xs text-[#A1A1A1]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C6A96C]" />
            <span className="tracking-wide">Global Quality Standard</span>
          </div>
        </div>
      </div>

      {/* Bottom Scroll Indicator & Credibility Bar */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full pt-8 flex items-center justify-between border-t border-[#262626]/40">
        <div className="hidden md:flex items-center gap-8 text-[11px] font-mono uppercase text-[#A1A1A1] tracking-widest">
          <div>
            <span className="text-white font-semibold">140+</span> PROJECTS DELIVERED
          </div>
          <div className="w-1 h-1 rounded-full bg-[#262626]" />
          <div>
            <span className="text-white font-semibold">4.8X</span> AVG REACH GROWTH
          </div>
          <div className="w-1 h-1 rounded-full bg-[#262626]" />
          <div>
            <span className="text-white font-semibold">100%</span> IN-HOUSE EXECUTION
          </div>
        </div>

        <button
          onClick={onExploreServices}
          className="mx-auto md:mx-0 flex items-center gap-2 text-xs font-mono tracking-widest text-[#A1A1A1] hover:text-[#C6A96C] transition-colors cursor-pointer group"
          aria-label="Scroll to discover more"
        >
          <span className="text-[10px] tracking-[0.2em] uppercase">SCROLL TO DISCOVER</span>
          <ArrowDown className="w-3.5 h-3.5 animate-bounce text-[#C6A96C]" />
        </button>
      </div>
    </section>
  );
};
