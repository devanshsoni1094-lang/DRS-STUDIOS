import React, { useState } from 'react';
import { Check, CheckSquare, Square, ArrowUpRight, Sparkles, Layers, Sliders, Youtube, Instagram, Globe, Film } from 'lucide-react';

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
      icon: <Youtube className="w-5 h-5 text-red-400" />,
      tag: 'Authority & Scale',
      highlight: 'Scripting, Packaging, SEO & Bi-weekly Sprints',
    },
    {
      id: 'instagram',
      name: 'Instagram Management',
      icon: <Instagram className="w-5 h-5 text-pink-400" />,
      tag: 'Visual Cohesion',
      highlight: 'Curated 30-day Grid, High-Retention Reels & Stories',
    },
    {
      id: 'website',
      name: 'Website Development',
      icon: <Globe className="w-5 h-5 text-blue-400" />,
      tag: 'Digital Flagship',
      highlight: 'Custom React Web Experience, Sub-Second Latency & SEO',
    },
    {
      id: 'production',
      name: 'Creative Production Studio',
      icon: <Film className="w-5 h-5 text-amber-400" />,
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
    <div className="spatial-glass rounded-3xl p-8 sm:p-12 lg:p-16 my-16 relative overflow-hidden">
      {/* Background Amber Blooms */}
      <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-[#D98B3A]/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute -left-20 -top-20 w-80 h-80 bg-[#C6A96C]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10">
        
        {/* Section 10 Flagship Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full spatial-nav-capsule text-xs font-mono tracking-widest text-[#D98B3A] uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Integrated Digital Ecosystem</span>
          </div>

          <h3 className="font-headline text-3xl sm:text-5xl font-bold uppercase tracking-tight text-white mb-4">
            One Partner. <br />
            <span className="gold-gradient-text">Every Digital Possibility.</span>
          </h3>

          <p className="text-sm sm:text-base text-[#A1A1A1] leading-relaxed">
            Bring your digital operations together through one coordinated creative partner.
            Configure your custom combination below.
          </p>
        </div>

        {/* Central Interconnected Spatial Map */}
        <div className="relative mb-16 max-w-4xl mx-auto">
          
          {/* Central DRS STUDIOS Monogram Crest */}
          <div className="hidden md:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 items-center justify-center">
            <div className="w-28 h-28 rounded-full spatial-nav-capsule flex flex-col items-center justify-center p-3 shadow-[0_0_40px_rgba(217,139,58,0.35)] border border-white/30 animate-pulse-slow">
              <img
                src="/drs-logo.png"
                alt="DRS"
                className="h-9 w-auto object-contain"
              />
              <span className="text-[9px] font-mono text-[#D98B3A] uppercase tracking-widest mt-1">
                CORE HUB
              </span>
            </div>
          </div>

          {/* 4 Floating Interconnected Glass Panels */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
            {serviceOptions.map((opt) => {
              const isSelected = selectedServices.includes(opt.name);
              return (
                <div
                  key={opt.id}
                  onClick={() => toggleService(opt.name)}
                  className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 flex flex-col justify-between ${
                    isSelected
                      ? 'spatial-glass border-[#D98B3A]/70 shadow-[0_15px_40px_rgba(217,139,58,0.2)]'
                      : 'bg-white/[0.02] border border-white/5 opacity-50 hover:opacity-90'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
                          {opt.icon}
                        </div>
                        <span className="text-[10px] font-mono uppercase tracking-wider text-[#A1A1A1]">
                          [ {opt.tag} ]
                        </span>
                      </div>
                      {isSelected ? (
                        <CheckSquare className="w-5 h-5 text-[#D98B3A]" />
                      ) : (
                        <Square className="w-5 h-5 text-[#555]" />
                      )}
                    </div>

                    <h5 className="font-headline text-lg font-semibold text-white mb-2">
                      {opt.name}
                    </h5>
                    <p className="text-xs text-[#A1A1A1] leading-relaxed">
                      {opt.highlight}
                    </p>
                  </div>

                  <div className="mt-5 pt-3 border-t border-white/10 flex items-center gap-1.5 text-xs font-mono text-[#D98B3A]">
                    {isSelected ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-[#D98B3A]" />
                        <span>Included In Scope</span>
                      </>
                    ) : (
                      <span className="text-[#777]">+ Click to add</span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Dynamic Summary Bar & Pill CTA */}
        <div className="p-6 sm:p-8 rounded-2xl spatial-glass flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-sm font-semibold text-white">
              <span className="w-2 h-2 rounded-full bg-[#D98B3A] animate-pulse" />
              <span>Unified Account Leadership & Coordinated Sprints</span>
            </div>
            <p className="text-xs text-[#A1A1A1]">
              {selectedServices.length} active service modules selected. Scaled precisely around your business objectives.
            </p>
          </div>

          <button
            onClick={() => onBuildPresence(selectedServices)}
            className="w-full lg:w-auto spatial-pill spatial-pill-amber py-4 px-8 text-xs font-semibold text-black tracking-wider whitespace-nowrap"
          >
            <span>BUILD YOUR DIGITAL PRESENCE</span>
            <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
          </button>
        </div>

      </div>
    </div>
  );
};
