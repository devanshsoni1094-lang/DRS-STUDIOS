import React, { useState } from 'react';
import { Check, CheckSquare, Square, ArrowUpRight, Sparkles, Layers, Sliders } from 'lucide-react';

interface ModularConfiguratorProps {
  onBuildPresence: (selectedServices: string[]) => void;
}

export const ModularConfigurator: React.FC<ModularConfiguratorProps> = ({
  onBuildPresence,
}) => {
  const [selectedServices, setSelectedServices] = useState<string[]>([
    'Website Development',
    'Instagram Management',
    'Creative Production Studio',
  ]);

  const serviceOptions = [
    {
      id: 'youtube',
      name: 'YouTube Management',
      tag: 'Authority & Search',
      highlight: 'Scripting, Packaging, SEO & Bi-weekly Strategy',
    },
    {
      id: 'instagram',
      name: 'Instagram Management',
      tag: 'Visual Brand Cohesion',
      highlight: 'Editorial Grid, High-Retention Reels & Daily Stories',
    },
    {
      id: 'website',
      name: 'Website Development',
      tag: 'Digital Flagship',
      highlight: 'Custom React Web Experience, Conversion & SEO',
    },
    {
      id: 'production',
      name: 'Creative Production Studio',
      tag: 'Cinematic & AI Media',
      highlight: 'Commercial Video Cuts, AI Visuals & Ad Variants',
    },
  ];

  const toggleService = (name: string) => {
    if (selectedServices.includes(name)) {
      if (selectedServices.length === 1) return; // Keep at least one
      setSelectedServices(selectedServices.filter((s) => s !== name));
    } else {
      setSelectedServices([...selectedServices, name]);
    }
  };

  return (
    <div className="p-8 sm:p-12 rounded-sm bg-[#0E0E0E] border border-[#262626] relative overflow-hidden my-12">
      {/* Background glow */}
      <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-[#C6A96C]/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-6 border-b border-[#262626]">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#C6A96C] mb-2">
              <Sliders className="w-3.5 h-3.5" />
              <span>Interactive Ecosystem Architect</span>
            </div>
            <h4 className="font-headline text-2xl sm:text-3xl font-light text-white tracking-tight">
              Design Your Custom Partnership Scope
            </h4>
            <p className="text-xs sm:text-sm text-[#A1A1A1] mt-1">
              Select only the capabilities your business requires today. Scale up or adjust anytime.
            </p>
          </div>

          <div className="px-4 py-2 rounded-sm bg-[#161616] border border-[#262626] self-start md:self-auto">
            <span className="text-[11px] font-mono uppercase text-[#A1A1A1] block">Selected Capabilities</span>
            <span className="font-headline font-semibold text-white text-base">
              {selectedServices.length} of {serviceOptions.length} Active Modules
            </span>
          </div>
        </div>

        {/* Modular Service Toggles */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {serviceOptions.map((opt) => {
            const isSelected = selectedServices.includes(opt.name);
            return (
              <div
                key={opt.id}
                onClick={() => toggleService(opt.name)}
                className={`p-5 rounded-sm border cursor-pointer transition-all duration-300 flex flex-col justify-between ${
                  isSelected
                    ? 'bg-[#141414] border-[#C6A96C] shadow-[0_0_20px_rgba(198,169,108,0.1)]'
                    : 'bg-[#101010]/60 border-[#262626] opacity-60 hover:opacity-100 hover:border-[#383838]'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#A1A1A1]">
                      {opt.tag}
                    </span>
                    {isSelected ? (
                      <CheckSquare className="w-4 h-4 text-[#C6A96C]" />
                    ) : (
                      <Square className="w-4 h-4 text-[#737373]" />
                    )}
                  </div>
                  <h5 className="font-headline text-base font-medium text-white mb-2">
                    {opt.name}
                  </h5>
                  <p className="text-xs text-[#A1A1A1] leading-relaxed">
                    {opt.highlight}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-[#262626]/60 flex items-center gap-1.5 text-[10px] font-mono text-[#DFCA94]">
                  {isSelected ? (
                    <>
                      <Check className="w-3 h-3 text-[#C6A96C]" />
                      <span>Included in Unified Scope</span>
                    </>
                  ) : (
                    <span className="text-[#737373]">+ Click to add</span>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Summary Row & Call to Action */}
        <div className="p-6 rounded-sm bg-[#141414] border border-[#262626] flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-xs text-white">
              <Sparkles className="w-3.5 h-3.5 text-[#C6A96C]" />
              <span className="font-medium">Unified Account Lead & Single Point of Accountability</span>
            </div>
            <p className="text-xs text-[#A1A1A1]">
              Zero agency overhead bloat. Coordinated weekly delivery sprints customized strictly to your objectives.
            </p>
          </div>

          <button
            onClick={() => onBuildPresence(selectedServices)}
            className="w-full lg:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[#C6A96C] text-black font-semibold text-xs uppercase tracking-[0.18em] rounded-sm hover:bg-[#DFCA94] transition-all cursor-pointer shadow-[0_0_25px_rgba(198,169,108,0.25)] whitespace-nowrap"
          >
            <span>BUILD YOUR DIGITAL PRESENCE</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
