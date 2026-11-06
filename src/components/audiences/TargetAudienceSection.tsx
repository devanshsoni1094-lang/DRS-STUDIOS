import React from 'react';
import { targetAudiences } from '../../data/company';
import { ArrowUpRight, AlertCircle, CheckCircle } from 'lucide-react';

interface TargetAudienceSectionProps {
  onSelectAudienceServices: (services: string[]) => void;
}

export const TargetAudienceSection: React.FC<TargetAudienceSectionProps> = ({
  onSelectAudienceServices,
}) => {
  return (
    <section id="audiences" data-section-name="CLIENT INDUSTRIES" className="py-24 sm:py-32 bg-[#050505] relative overflow-hidden border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        <div className="flex items-center gap-3 mb-6">
          <span className="section-kicker-bar" />
          <span className="text-xs font-mono tracking-[0.2em] uppercase text-[#D98B3A]">
            TAILORED INDUSTRY ARCHITECTURE
          </span>
        </div>

        <div className="max-w-3xl mb-16">
          <h2 className="font-headline font-bold text-white text-3xl sm:text-5xl lg:text-6xl leading-[1.08] uppercase mb-4">
            Built For Brands Ready To <br />
            <span className="gold-gradient-text">Command Their Market.</span>
          </h2>
          <p className="text-sm sm:text-base text-[#A1A1A1] font-light leading-relaxed">
            Whether you are a luxury fashion maison, high-growth startup, prominent creator, or established company, our architectures map directly to your commercial stage.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {targetAudiences.map((audience) => (
            <div
              key={audience.id}
              className="spatial-glass rounded-3xl p-6 sm:p-8 hover:border-[#D98B3A]/60 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#D98B3A] px-3.5 py-1.5 rounded-full spatial-nav-capsule">
                    {audience.badge}
                  </span>
                </div>

                <h3 className="font-headline text-xl sm:text-2xl font-bold text-white uppercase tracking-tight mb-4">
                  {audience.title}
                </h3>

                <div className="space-y-4 mb-6">
                  <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 space-y-1">
                    <div className="text-[11px] font-mono uppercase text-[#A1A1A1] flex items-center gap-1.5">
                      <AlertCircle className="w-3.5 h-3.5 text-amber-500/80" />
                      The Friction
                    </div>
                    <p className="text-xs text-[#A1A1A1] leading-relaxed">
                      {audience.problem}
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 space-y-1">
                    <div className="text-[11px] font-mono uppercase text-[#D98B3A] flex items-center gap-1.5">
                      <CheckCircle className="w-3.5 h-3.5 text-[#D98B3A]" />
                      The DRS Solution
                    </div>
                    <p className="text-xs text-[#E5E5E5] leading-relaxed">
                      {audience.solution}
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex flex-wrap gap-1.5">
                  {audience.recommendedServices.map((svc, i) => (
                    <span
                      key={i}
                      className="text-[10px] font-mono text-[#A1A1A1] px-2.5 py-1 rounded-full bg-white/5"
                    >
                      {svc}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => onSelectAudienceServices(audience.recommendedServices)}
                  className="spatial-pill py-2.5 px-5 text-xs text-[#C6A96C] hover:text-white shrink-0"
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
