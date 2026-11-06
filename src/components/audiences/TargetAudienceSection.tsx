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
    <section className="py-24 sm:py-32 bg-[#030303] relative overflow-hidden border-b border-[#1E1E24]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="flex items-center gap-3 mb-6">
          <span className="text-[#FF9E2C] font-mono text-xs font-bold">+ + +</span>
          <span className="text-xs font-mono tracking-[0.2em] uppercase text-[#FF9E2C]">
            TAILORED INDUSTRY SOLUTIONS
          </span>
        </div>

        <div className="max-w-3xl mb-16">
          <h2 className="font-extended text-3xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-wide text-white leading-tight mb-4">
            Built For Brands Ready To <br />
            <span className="text-[#FF9E2C]">Command Their Market.</span>
          </h2>
          <p className="text-xs sm:text-sm text-[#A1A1A6] font-mono leading-relaxed">
            Whether you are a luxury fashion maison, high-growth startup, prominent creator, or established company, our architectures map directly to your commercial stage.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {targetAudiences.map((audience) => (
            <div
              key={audience.id}
              className="p-8 rounded-2xl bg-[#070709] border border-[#1E1E24] hover:border-[#FF9E2C]/50 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#FF9E2C] px-3 py-1 rounded-full bg-[#121218] border border-[#1E1E24]">
                    [ {audience.badge} ]
                  </span>
                </div>

                <h3 className="font-extended text-lg sm:text-xl font-bold text-white uppercase tracking-wide mb-4">
                  {audience.title}
                </h3>

                <div className="space-y-4 mb-6">
                  <div className="p-4 rounded-xl bg-[#0B0B0F] border border-[#1E1E24] space-y-1">
                    <div className="text-[10px] font-mono uppercase text-[#71717A] flex items-center gap-1.5">
                      <AlertCircle className="w-3.5 h-3.5 text-amber-500/80" />
                      The Growth Friction
                    </div>
                    <p className="text-xs font-mono text-[#A1A1A6] leading-relaxed">
                      {audience.problem}
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-[#0B0B0F] border border-[#1E1E24] space-y-1">
                    <div className="text-[10px] font-mono uppercase text-[#FF9E2C] flex items-center gap-1.5">
                      <CheckCircle className="w-3.5 h-3.5 text-[#FF9E2C]" />
                      The DRS Architecture
                    </div>
                    <p className="text-xs font-mono text-[#D4D4D8] leading-relaxed">
                      {audience.solution}
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-[#141418] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex flex-wrap gap-1.5">
                  {audience.recommendedServices.map((svc, i) => (
                    <span
                      key={i}
                      className="text-[10px] font-mono text-[#71717A] px-2.5 py-1 rounded-sm bg-[#121218]"
                    >
                      {svc}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => onSelectAudienceServices(audience.recommendedServices)}
                  className="echo-pill py-2.5 px-4 text-[11px] self-end sm:self-auto"
                >
                  <span>Select Scope</span>
                  <span className="text-[#FF9E2C] font-bold">&gt;</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
