import React from 'react';
import { targetAudiences } from '../../data/company';
import { ArrowUpRight, Sparkles, AlertCircle, CheckCircle } from 'lucide-react';

interface TargetAudienceSectionProps {
  onSelectAudienceServices: (services: string[]) => void;
}

export const TargetAudienceSection: React.FC<TargetAudienceSectionProps> = ({
  onSelectAudienceServices,
}) => {
  return (
    <section className="py-24 sm:py-32 bg-[#050505] relative overflow-hidden border-b border-[#262626]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="flex items-center gap-3 mb-6">
          <span className="w-6 h-[1px] bg-[#C6A96C]" />
          <span className="text-xs font-mono tracking-[0.2em] uppercase text-[#DFCA94]">
            TAILORED INDUSTRY SOLUTIONS
          </span>
        </div>

        <div className="max-w-3xl mb-16">
          <h2 className="font-headline font-light tracking-tight text-white text-3xl sm:text-5xl lg:text-6xl leading-[1.1] uppercase mb-4">
            Built For Brands Ready To <br />
            <span className="gold-gradient-text font-normal">Command Their Market.</span>
          </h2>
          <p className="text-sm sm:text-base text-[#A1A1A1] font-light leading-relaxed">
            Whether you are a luxury fashion house, venture-backed tech startup, prominent creator, or growing business, our solutions map directly to your commercial stage.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {targetAudiences.map((audience) => (
            <div
              key={audience.id}
              className="p-8 rounded-sm bg-[#0E0E0E] border border-[#262626] hover:border-[#C6A96C]/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#C6A96C] px-2.5 py-1 rounded-sm bg-[#181818] border border-[#262626]">
                    {audience.badge}
                  </span>
                </div>

                <h3 className="font-headline text-xl sm:text-2xl font-light text-white uppercase tracking-tight mb-4">
                  {audience.title}
                </h3>

                <div className="space-y-4 mb-6">
                  <div className="p-3.5 rounded-sm bg-[#121212] border border-[#222] space-y-1">
                    <div className="text-[11px] font-mono uppercase text-[#A1A1A1] flex items-center gap-1.5">
                      <AlertCircle className="w-3.5 h-3.5 text-amber-500/80" />
                      The Friction
                    </div>
                    <p className="text-xs text-[#999999] leading-relaxed">
                      {audience.problem}
                    </p>
                  </div>

                  <div className="p-3.5 rounded-sm bg-[#121212] border border-[#222] space-y-1">
                    <div className="text-[11px] font-mono uppercase text-[#C6A96C] flex items-center gap-1.5">
                      <CheckCircle className="w-3.5 h-3.5 text-[#C6A96C]" />
                      The DRS Solution
                    </div>
                    <p className="text-xs text-[#E5E5E5] leading-relaxed">
                      {audience.solution}
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-[#1C1C1C] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex flex-wrap gap-1.5">
                  {audience.recommendedServices.map((svc, i) => (
                    <span
                      key={i}
                      className="text-[10px] font-mono text-[#A1A1A1] px-2 py-0.5 rounded-sm bg-[#161616]"
                    >
                      {svc}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => onSelectAudienceServices(audience.recommendedServices)}
                  className="inline-flex items-center gap-1.5 text-xs font-mono uppercase text-[#DFCA94] hover:text-white transition-colors cursor-pointer shrink-0"
                >
                  <span>Select Scope</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
