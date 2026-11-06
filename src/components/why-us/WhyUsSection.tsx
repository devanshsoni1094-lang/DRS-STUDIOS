import React from 'react';
import { whyUsPillars } from '../../data/company';
import { Check, X, Sparkles, Layers, Shield, Zap } from 'lucide-react';

export const WhyUsSection: React.FC = () => {
  return (
    <section id="why-us" className="py-28 sm:py-36 bg-[#030303] relative overflow-hidden border-b border-[#1E1E24]">
      {/* Background glow */}
      <div className="absolute right-1/3 top-1/2 w-96 h-96 bg-[#FF9E2C]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-6">
          <span className="text-[#FF9E2C] font-mono text-xs font-bold">+ + +</span>
          <span className="text-xs font-mono tracking-[0.2em] uppercase text-[#FF9E2C]">
            09 // WHY DRS STUDIOS
          </span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <h2 className="font-extended text-3xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-wide text-white leading-tight">
              Simplify Digital. <br />
              <span className="text-[#FF9E2C]">Elevate Your Brand.</span>
            </h2>
          </div>
          <p className="max-w-md text-xs sm:text-sm text-[#A1A1A6] font-mono leading-relaxed">
            Engineered from the ground up to solve the operational headaches businesses face when trying to manage web development, social media, and visual production separately.
          </p>
        </div>

        {/* 6 Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {whyUsPillars.map((pillar) => (
            <div
              key={pillar.number}
              className="p-8 rounded-2xl bg-[#070709] border border-[#1E1E24] hover:border-[#FF9E2C]/50 transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-xs text-[#FF9E2C] font-semibold">
                    [ // {pillar.number} ]
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1E1E24] group-hover:bg-[#FF9E2C] transition-colors" />
                </div>

                <h3 className="font-extended text-base sm:text-lg font-bold text-white mb-3 tracking-wide uppercase">
                  {pillar.title}
                </h3>

                <p className="text-xs sm:text-sm text-white/90 font-medium mb-3 leading-relaxed">
                  {pillar.description}
                </p>

                <p className="text-xs text-[#A1A1A6] font-mono leading-relaxed">
                  {pillar.detail}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-[#141418] flex items-center gap-2 text-[10px] font-mono uppercase text-[#71717A] tracking-wider group-hover:text-[#FF9E2C] transition-colors">
                <span className="text-[#FF9E2C]">+</span>
                <span>Executive Quality Standard</span>
              </div>
            </div>
          ))}
        </div>

        {/* Comparison Matrix: DRS Studios vs Fragmented Agencies vs Freelancers */}
        <div className="p-8 sm:p-12 rounded-2xl bg-[#070709] border border-[#1E1E24] overflow-x-auto shadow-[0_0_50px_rgba(0,0,0,0.8)]">
          <div className="min-w-[640px]">
            <div className="pb-6 mb-6 border-b border-[#1E1E24] flex items-center justify-between">
              <div>
                <h4 className="font-extended text-lg sm:text-xl font-bold text-white uppercase tracking-wide">
                  The DRS Model vs Traditional Fragmented Workflows
                </h4>
                <p className="text-xs font-mono text-[#71717A] mt-1">
                  Why modern founders and high-growth brands consolidate their entire digital presence with us.
                </p>
              </div>
            </div>

            <table className="w-full text-left text-xs font-mono">
              <thead>
                <tr className="border-b border-[#1E1E24] text-[10px] uppercase tracking-wider text-[#71717A]">
                  <th className="py-4 font-normal">Operational Dimension</th>
                  <th className="py-4 font-bold text-[#FF9E2C] bg-[#0E0E14] px-4 rounded-t-xl">
                    DRS STUDIOS
                  </th>
                  <th className="py-4 font-normal px-4">Traditional Agencies</th>
                  <th className="py-4 font-normal px-4">Fragmented Freelancers</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#141418]">
                <tr>
                  <td className="py-4 text-white font-medium">Single Point of Ownership</td>
                  <td className="py-4 bg-[#0E0E14] px-4 text-[#FF9E2C] font-semibold flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#FF9E2C]" /> Dedicated Lead Director
                  </td>
                  <td className="py-4 px-4 text-[#A1A1A6]">Account managers & red tape</td>
                  <td className="py-4 px-4 text-[#71717A] flex items-center gap-2">
                    <X className="w-4 h-4 text-red-500/60" /> Disconnected individuals
                  </td>
                </tr>
                <tr>
                  <td className="py-4 text-white font-medium">Cross-Platform Cohesion</td>
                  <td className="py-4 bg-[#0E0E14] px-4 text-[#FF9E2C] font-semibold flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#FF9E2C]" /> Unified aesthetic tokens
                  </td>
                  <td className="py-4 px-4 text-[#A1A1A6]">Siloed departments</td>
                  <td className="py-4 px-4 text-[#71717A] flex items-center gap-2">
                    <X className="w-4 h-4 text-red-500/60" /> Inconsistent styling
                  </td>
                </tr>
                <tr>
                  <td className="py-4 text-white font-medium">Modern AI Integration & Speed</td>
                  <td className="py-4 bg-[#0E0E14] px-4 text-[#FF9E2C] font-semibold flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#FF9E2C]" /> Integrated AI pipelines
                  </td>
                  <td className="py-4 px-4 text-[#A1A1A6]">Slow legacy workflows</td>
                  <td className="py-4 px-4 text-[#A1A1A6]">Unvetted tools</td>
                </tr>
                <tr>
                  <td className="py-4 text-white font-medium">Pricing Transparency & Scaling</td>
                  <td className="py-4 bg-[#0E0E14] px-4 text-[#FF9E2C] font-semibold flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#FF9E2C]" /> Modular & predictable
                  </td>
                  <td className="py-4 px-4 text-[#71717A] flex items-center gap-2">
                    <X className="w-4 h-4 text-red-500/60" /> Bloated annual lock-ins
                  </td>
                  <td className="py-4 px-4 text-[#A1A1A6]">Hourly scope creep</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};
