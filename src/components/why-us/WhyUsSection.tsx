import React from 'react';
import { whyUsPillars } from '../../data/company';
import { Check, X, Sparkles, Layers, Shield, Zap } from 'lucide-react';

export const WhyUsSection: React.FC = () => {
  return (
    <section id="why-us" className="py-28 sm:py-36 bg-[#050505] relative overflow-hidden border-b border-[#262626]">
      {/* Background glow */}
      <div className="absolute right-1/3 top-1/2 w-96 h-96 bg-[#C6A96C]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-6">
          <span className="w-6 h-[1px] bg-[#C6A96C]" />
          <span className="text-xs font-mono tracking-[0.2em] uppercase text-[#DFCA94]">
            09 — WHY DRS STUDIOS
          </span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <h2 className="font-headline font-light tracking-tight text-white text-3xl sm:text-5xl lg:text-6xl leading-[1.1] uppercase">
              Simplify Digital. <br />
              <span className="gold-gradient-text font-normal">Elevate Your Brand.</span>
            </h2>
          </div>
          <p className="max-w-md text-xs sm:text-sm text-[#A1A1A1] leading-relaxed">
            Built from the ground up to solve the real operational headaches businesses face when trying to manage web development, social media, and content creation separately.
          </p>
        </div>

        {/* 6 Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {whyUsPillars.map((pillar) => (
            <div
              key={pillar.number}
              className="p-8 rounded-sm bg-[#0E0E0E] border border-[#262626] hover:border-[#C6A96C]/40 transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-xs text-[#C6A96C] font-semibold">
                    {pillar.number}
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#262626] group-hover:bg-[#C6A96C] transition-colors" />
                </div>

                <h3 className="font-headline text-lg sm:text-xl font-medium text-white mb-3 tracking-wide uppercase">
                  {pillar.title}
                </h3>

                <p className="text-xs sm:text-sm text-white/90 font-normal mb-3 leading-relaxed">
                  {pillar.description}
                </p>

                <p className="text-xs text-[#A1A1A1] leading-relaxed font-light">
                  {pillar.detail}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-[#1F1F1F] flex items-center gap-2 text-[10px] font-mono uppercase text-[#A1A1A1] tracking-wider group-hover:text-[#DFCA94] transition-colors">
                <Sparkles className="w-3 h-3 text-[#C6A96C]" />
                <span>Executive Guarantee</span>
              </div>
            </div>
          ))}
        </div>

        {/* Comparison Matrix: DRS Studios vs Fragmented Agencies vs Freelancers */}
        <div className="p-8 sm:p-12 rounded-sm bg-[#0E0E0E] border border-[#262626] overflow-x-auto">
          <div className="min-w-[640px]">
            <div className="pb-6 mb-6 border-b border-[#262626] flex items-center justify-between">
              <div>
                <h4 className="font-headline text-xl sm:text-2xl font-light text-white uppercase tracking-tight">
                  The DRS Advantage vs Traditional Models
                </h4>
                <p className="text-xs text-[#A1A1A1] mt-1">
                  Why modern founders and established companies consolidate their digital stack with us.
                </p>
              </div>
            </div>

            <table className="w-full text-left text-xs">
              <thead>
                <tr className="border-b border-[#262626] text-[11px] font-mono uppercase tracking-wider text-[#A1A1A1]">
                  <th className="py-4 font-normal">Operating Dimension</th>
                  <th className="py-4 font-semibold text-[#DFCA94] bg-[#161616]/60 px-4 rounded-t-sm">
                    DRS STUDIOS
                  </th>
                  <th className="py-4 font-normal px-4">Traditional Agencies</th>
                  <th className="py-4 font-normal px-4">Fragmented Freelancers</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#1F1F1F]">
                <tr>
                  <td className="py-4 text-white font-medium">Single Point of Ownership</td>
                  <td className="py-4 bg-[#161616]/60 px-4 text-[#DFCA94] font-medium flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#C6A96C]" /> One dedicated lead
                  </td>
                  <td className="py-4 px-4 text-[#A1A1A1]">Account managers & red tape</td>
                  <td className="py-4 px-4 text-[#737373] flex items-center gap-2">
                    <X className="w-4 h-4 text-red-500/60" /> Disconnected individuals
                  </td>
                </tr>
                <tr>
                  <td className="py-4 text-white font-medium">Multi-Platform Brand Consistency</td>
                  <td className="py-4 bg-[#161616]/60 px-4 text-[#DFCA94] font-medium flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#C6A96C]" /> Unified aesthetic tokens
                  </td>
                  <td className="py-4 px-4 text-[#A1A1A1]">Siloed departments</td>
                  <td className="py-4 px-4 text-[#737373] flex items-center gap-2">
                    <X className="w-4 h-4 text-red-500/60" /> Inconsistent styling
                  </td>
                </tr>
                <tr>
                  <td className="py-4 text-white font-medium">Modern AI & High-Tech Speed</td>
                  <td className="py-4 bg-[#161616]/60 px-4 text-[#DFCA94] font-medium flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#C6A96C]" /> Integrated AI pipelines
                  </td>
                  <td className="py-4 px-4 text-[#A1A1A1]">Slow legacy workflows</td>
                  <td className="py-4 px-4 text-[#A1A1A1]">Variable tools</td>
                </tr>
                <tr>
                  <td className="py-4 text-white font-medium">Pricing & Contract Flexibility</td>
                  <td className="py-4 bg-[#161616]/60 px-4 text-[#DFCA94] font-medium flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#C6A96C]" /> Modular & transparent
                  </td>
                  <td className="py-4 px-4 text-[#737373] flex items-center gap-2">
                    <X className="w-4 h-4 text-red-500/60" /> Bloated 12-month lockins
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
