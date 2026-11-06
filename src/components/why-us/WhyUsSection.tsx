import React from 'react';
import { whyUsPillars } from '../../data/company';
import { Check, X, Sparkles, Layers, Shield, Zap } from 'lucide-react';

export const WhyUsSection: React.FC = () => {
  return (
    <section id="why-us" data-section-name="WHY DRS STUDIOS" className="py-28 sm:py-36 bg-[#050505] relative overflow-hidden border-b border-white/10">
      {/* Background warm amber glow */}
      <div className="absolute right-1/3 top-1/2 w-[550px] h-[550px] bg-[#D98B3A]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-6">
          <span className="section-kicker-bar" />
          <span className="text-xs font-mono tracking-[0.2em] uppercase text-[#D98B3A]">
            09 // VALUE MATRIX
          </span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <h2 className="font-headline font-bold text-white text-3xl sm:text-5xl lg:text-6xl leading-[1.08] uppercase">
              Simplify Digital. <br />
              <span className="gold-gradient-text">Elevate Your Brand.</span>
            </h2>
          </div>
          <p className="max-w-md text-xs sm:text-sm text-[#A1A1A1] leading-relaxed">
            Built from the ground up to solve the real operational headaches businesses face when trying to manage web development, social media, and content creation separately.
          </p>
        </div>

        {/* 6 Core Pillars Grid with Floating Glass Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 sm:mb-20">
          {whyUsPillars.map((pillar) => (
            <div
              key={pillar.number}
              className="spatial-glass rounded-3xl p-6 sm:p-8 hover:border-[#D98B3A]/60 transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4 sm:mb-6">
                  <span className="font-mono text-xs text-[#D98B3A] font-semibold">
                    0{pillar.number}
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-[#D98B3A] transition-colors" />
                </div>

                <h3 className="font-headline text-base sm:text-xl font-bold text-white mb-2 sm:mb-3 tracking-wide uppercase">
                  {pillar.title}
                </h3>

                <p className="text-xs sm:text-sm text-white/90 font-medium mb-2 sm:mb-3 leading-relaxed">
                  {pillar.description}
                </p>

                <p className="text-xs text-[#A1A1A1] leading-relaxed font-light">
                  {pillar.detail}
                </p>
              </div>

              <div className="pt-5 sm:pt-6 mt-5 sm:mt-6 border-t border-white/10 flex items-center gap-2 text-[10px] font-mono uppercase text-[#A1A1A1] tracking-wider group-hover:text-[#C6A96C] transition-colors">
                <Sparkles className="w-3.5 h-3.5 text-[#D98B3A]" />
                <span>Executive Guarantee</span>
              </div>
            </div>
          ))}
        </div>

        {/* Comparison Matrix: DRS Studios vs Fragmented Agencies vs Freelancers */}
        <div className="spatial-glass rounded-3xl p-5 sm:p-10 lg:p-12 overflow-x-auto touch-scroll">
          <div className="min-w-[620px]">
            <div className="pb-5 sm:pb-6 mb-6 border-b border-white/10 flex items-center justify-between">
              <div>
                <div className="sm:hidden flex items-center gap-1.5 text-[10px] font-mono text-[#D98B3A] mb-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D98B3A] animate-pulse" />
                  <span>Swipe horizontally to compare columns</span>
                </div>
                <h4 className="font-headline text-lg sm:text-2xl font-bold text-white uppercase tracking-tight">
                  The DRS Model vs Traditional Fragmented Workflows
                </h4>
                <p className="text-xs text-[#A1A1A1] mt-1">
                  Why modern founders and established companies consolidate their digital stack with us.
                </p>
              </div>
            </div>

            <table className="w-full text-left text-xs">
              <thead>
                <tr className="border-b border-white/10 text-[11px] font-mono uppercase tracking-wider text-[#A1A1A1]">
                  <th className="py-4 font-normal">Operating Dimension</th>
                  <th className="py-4 font-bold text-[#D98B3A] bg-white/[0.04] px-4 rounded-t-xl">
                    DRS STUDIOS
                  </th>
                  <th className="py-4 font-normal px-4">Traditional Agencies</th>
                  <th className="py-4 font-normal px-4">Fragmented Freelancers</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                <tr>
                  <td className="py-4 text-white font-medium">Single Point of Ownership</td>
                  <td className="py-4 bg-white/[0.04] px-4 text-[#D98B3A] font-semibold flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#D98B3A]" /> Dedicated Lead Director
                  </td>
                  <td className="py-4 px-4 text-[#A1A1A1]">Account managers & red tape</td>
                  <td className="py-4 px-4 text-[#777] flex items-center gap-2">
                    <X className="w-4 h-4 text-red-500/60" /> Disconnected individuals
                  </td>
                </tr>
                <tr>
                  <td className="py-4 text-white font-medium">Cross-Platform Visual Cohesion</td>
                  <td className="py-4 bg-white/[0.04] px-4 text-[#D98B3A] font-semibold flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#D98B3A]" /> Unified aesthetic tokens
                  </td>
                  <td className="py-4 px-4 text-[#A1A1A1]">Siloed departments</td>
                  <td className="py-4 px-4 text-[#777] flex items-center gap-2">
                    <X className="w-4 h-4 text-red-500/60" /> Inconsistent styling
                  </td>
                </tr>
                <tr>
                  <td className="py-4 text-white font-medium">Modern AI Integration & Speed</td>
                  <td className="py-4 bg-white/[0.04] px-4 text-[#D98B3A] font-semibold flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#D98B3A]" /> Integrated AI pipelines
                  </td>
                  <td className="py-4 px-4 text-[#A1A1A1]">Slow legacy workflows</td>
                  <td className="py-4 px-4 text-[#A1A1A1]">Unvetted tools</td>
                </tr>
                <tr>
                  <td className="py-4 text-white font-medium">Pricing Transparency & Scaling</td>
                  <td className="py-4 bg-white/[0.04] px-4 text-[#D98B3A] font-semibold flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#D98B3A]" /> Modular & predictable
                  </td>
                  <td className="py-4 px-4 text-[#777] flex items-center gap-2">
                    <X className="w-4 h-4 text-red-500/60" /> Bloated annual lock-ins
                  </td>
                  <td className="py-4 px-4 text-[#A1A1A1]">Hourly scope creep</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
};
