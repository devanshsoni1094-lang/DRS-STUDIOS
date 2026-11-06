import React from 'react';
import { ArrowUpRight, CheckCircle2, Layers, Cpu, Compass } from 'lucide-react';
import { companyIdentity } from '../../data/company';

interface AboutSectionProps {
  onStartProject: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onStartProject }) => {
  const pillars = [
    {
      icon: <Compass className="w-5 h-5 text-[#C6A96C]" />,
      step: '01',
      title: 'Understand The Business',
      desc: 'We do not push cookie-cutter packages. We dissect your market, unit economics, audience psychology, and growth friction before opening a design file.',
    },
    {
      icon: <Layers className="w-5 h-5 text-[#C6A96C]" />,
      step: '02',
      title: 'Create With Purpose',
      desc: 'Every layout, video cut, thumbnail, and line of code exists to evoke desire, establish indisputable authority, and drive measurable client actions.',
    },
    {
      icon: <Cpu className="w-5 h-5 text-[#C6A96C]" />,
      step: '03',
      title: 'Deliver With Precision',
      desc: 'From sub-second web latency to relentless publishing consistency, our multi-disciplinary team executes without handoff delays or quality decay.',
    },
  ];

  return (
    <section id="about" className="py-28 sm:py-36 bg-[#050505] relative overflow-hidden border-b border-[#262626]">
      {/* Editorial background accent */}
      <div className="absolute right-0 top-1/3 w-96 h-96 bg-[#C6A96C]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Section Tag */}
        <div className="flex items-center gap-3 mb-6">
          <span className="w-6 h-[1px] bg-[#C6A96C]" />
          <span className="text-xs font-mono tracking-[0.2em] uppercase text-[#DFCA94]">
            05 — ABOUT DRS STUDIOS
          </span>
        </div>

        {/* Large Editorial Headline */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-20">
          <div className="lg:col-span-7">
            <h2 className="font-headline font-light tracking-tight text-white text-3xl sm:text-5xl lg:text-6xl leading-[1.1] uppercase">
              We Make Digital <br />
              <span className="gold-gradient-text font-normal">Work Better.</span>
            </h2>
          </div>

          <div className="lg:col-span-5 space-y-6 pt-2">
            <p className="text-base sm:text-lg text-[#FFFFFF] font-normal leading-relaxed">
              {companyIdentity.aboutContent[0]}
            </p>
            <p className="text-sm sm:text-base text-[#A1A1A1] font-light leading-relaxed">
              {companyIdentity.aboutContent[1]}
            </p>
            <div className="p-4 rounded-sm bg-[#101010] border-l-2 border-[#C6A96C] text-sm text-[#DFCA94] italic font-serif">
              "{companyIdentity.aboutContent[2]}"
            </div>
          </div>
        </div>

        {/* Editorial Visual & Value Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-20">
          {pillars.map((pillar) => (
            <div
              key={pillar.step}
              className="p-8 rounded-sm bg-[#101010] border border-[#262626] hover:border-[#C6A96C]/40 transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-8">
                  <div className="p-2.5 rounded-sm bg-[#161616] border border-[#262626] group-hover:border-[#C6A96C]/40 transition-colors">
                    {pillar.icon}
                  </div>
                  <span className="font-mono text-xs text-[#A1A1A1] group-hover:text-[#C6A96C] transition-colors">
                    {pillar.step}
                  </span>
                </div>
                <h3 className="font-headline text-lg sm:text-xl font-medium text-white mb-3 tracking-wide">
                  {pillar.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#A1A1A1] leading-relaxed">
                  {pillar.desc}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-[#1C1C1C] flex items-center gap-2 text-[11px] font-mono text-[#A1A1A1] uppercase tracking-wider group-hover:text-white transition-colors">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#C6A96C]" />
                <span>Engineered for Reliability</span>
              </div>
            </div>
          ))}
        </div>

        {/* Studio Metrics Row */}
        <div className="p-8 sm:p-12 rounded-sm bg-[#101010] border border-[#262626] grid grid-cols-2 md:grid-cols-4 gap-8">
          {companyIdentity.stats.map((stat, idx) => (
            <div key={idx} className="space-y-2">
              <span className="block font-headline text-3xl sm:text-4xl lg:text-5xl font-light text-white tracking-tight">
                {stat.value}
              </span>
              <span className="block text-xs uppercase tracking-wider text-[#A1A1A1]">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
