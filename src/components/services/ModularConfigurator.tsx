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
      tag: 'Authority & Growth',
      highlight: 'Scripting, Viral Packaging, SEO & Bi-weekly Sprints',
    },
    {
      id: 'instagram',
      name: 'Instagram Management',
      tag: 'Visual Cohesion',
      highlight: 'Editorial Grid, High-Retention Reels & Interactive Stories',
    },
    {
      id: 'website',
      name: 'Website Development',
      tag: 'Digital Flagship',
      highlight: 'Custom React Web Experience, Sub-Second Latency & SEO',
    },
    {
      id: 'production',
      name: 'Creative Production Studio',
      tag: 'Cinematic & AI',
      highlight: 'Commercial Video Cuts, Neural 12K Visuals & Ad Variants',
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
    <div className="p-8 sm:p-12 rounded-2xl bg-[#070709] border border-[#1E1E24] relative overflow-hidden my-12 shadow-[0_0_50px_rgba(0,0,0,0.8)]">
      {/* Background ambient glow */}
      <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-[#FF9E2C]/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-6 border-b border-[#1E1E24]">
          <div>
            <div className="inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-[#FF9E2C] mb-2">
              <span>+ + +</span>
              <span>INTERACTIVE ECOSYSTEM ARCHITECT</span>
            </div>
            <h4 className="font-extended text-xl sm:text-2xl lg:text-3xl font-bold text-white tracking-wide uppercase">
              Design Your Custom Scope
            </h4>
            <p className="text-xs sm:text-sm text-[#A1A1A6] font-mono mt-1">
              Select only the capabilities your business requires today. Seamlessly scale anytime.
            </p>
          </div>

          <div className="px-4 py-2 rounded-full bg-[#121218] border border-[#262626] self-start md:self-auto">
            <span className="text-[10px] font-mono uppercase text-[#71717A] block">Active Modules</span>
            <span className="font-mono font-bold text-[#FF9E2C] text-sm">
              {selectedServices.length} of {serviceOptions.length} Selected
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
                className={`p-5 rounded-xl border cursor-pointer transition-all duration-300 flex flex-col justify-between ${
                  isSelected
                    ? 'bg-[#0E0E14] border-[#FF9E2C] shadow-[0_0_25px_rgba(255,158,44,0.15)]'
                    : 'bg-[#08080A] border-[#1E1E24] opacity-60 hover:opacity-100 hover:border-[#383844]'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#71717A]">
                      [ {opt.tag} ]
                    </span>
                    {isSelected ? (
                      <CheckSquare className="w-4 h-4 text-[#FF9E2C]" />
                    ) : (
                      <Square className="w-4 h-4 text-[#48484A]" />
                    )}
                  </div>
                  <h5 className="font-extended text-sm font-bold text-white mb-2 uppercase tracking-wide">
                    {opt.name}
                  </h5>
                  <p className="text-xs text-[#A1A1A6] font-mono leading-relaxed">
                    {opt.highlight}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-[#1E1E24] flex items-center gap-1.5 text-[10px] font-mono text-[#FF9E2C]">
                  {isSelected ? (
                    <>
                      <Check className="w-3 h-3 text-[#FF9E2C]" />
                      <span>Active in Unified Scope</span>
                    </>
                  ) : (
                    <span className="text-[#71717A]">+ Click to activate</span>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Summary Row & Pill CTA */}
        <div className="p-6 rounded-xl bg-[#0A0A0E] border border-[#1E1E24] flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-xs font-mono text-white">
              <span className="w-2 h-2 rounded-full bg-[#FF9E2C] animate-pulse" />
              <span className="font-semibold">Unified Creative Director & Dedicated Engineering Lead</span>
            </div>
            <p className="text-xs text-[#71717A] font-mono">
              Zero agency friction. Synchronized weekly sprints customized strictly to your milestones.
            </p>
          </div>

          <button
            onClick={() => onBuildPresence(selectedServices)}
            className="w-full lg:w-auto echo-pill echo-pill-primary py-4 px-8 text-center justify-center whitespace-nowrap shadow-[0_0_30px_rgba(255,158,44,0.35)]"
          >
            <span>BUILD YOUR DIGITAL PRESENCE</span>
            <span className="font-bold">&gt;</span>
          </button>
        </div>
      </div>
    </div>
  );
};
