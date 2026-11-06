import React from 'react';
import { ArrowUpRight, CheckCircle2, Layers, Cpu, Compass } from 'lucide-react';
import { companyIdentity } from '../../data/company';

interface AboutSectionProps {
  onStartProject: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onStartProject }) => {
  const pillars = [
    {
      icon: <Compass className="w-5 h-5 text-[#FF9E2C]" />,
      step: '01',
      title: 'Understand The Business',
      desc: 'We dissect your market, unit economics, audience psychology, and growth friction before initializing any design or production pipelines.',
    },
    {
      icon: <Layers className="w-5 h-5 text-[#FF9E2C]" />,
      step: '02',
      title: 'Create With Purpose',
      desc: 'Every layout, video frame, thumbnail, and line of code exists to command authority, evoke desire, and drive quantifiable commercial actions.',
    },
    {
      icon: <Cpu className="w-5 h-5 text-[#FF9E2C]" />,
      step: '03',
      title: 'Deliver With Precision',
      desc: 'From sub-second web latency to relentless publishing velocity, our multidisciplinary team executes without handoff friction or quality decay.',
    },
  ];

  return (
    <section id="about" className="py-28 sm:py-36 bg-[#030303] relative overflow-hidden border-b border-[#1E1E24]">
      {/* Background ambient accent */}
      <div className="absolute right-0 top-1/3 w-96 h-96 bg-[#FF9E2C]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Section Tag */}
        <div className="flex items-center gap-3 mb-6">
          <span className="text-[#FF9E2C] font-mono text-xs font-bold">+ + +</span>
          <span className="text-xs font-mono tracking-[0.2em] uppercase text-[#FF9E2C]">
            05 // ABOUT DRS STUDIOS
          </span>
        </div>

        {/* Large Editorial Headline */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-20">
          <div className="lg:col-span-7">
            <h2 className="font-extended text-3xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-wide text-white leading-tight">
              We Make Digital <br />
              <span className="text-[#FF9E2C]">Work Better.</span>
            </h2>
          </div>

          <div className="lg:col-span-5 space-y-6 pt-2">
            <p className="text-base sm:text-lg text-[#FFFFFF] font-light leading-relaxed">
              {companyIdentity.aboutContent[0]}
            </p>
            <p className="text-sm sm:text-base text-[#A1A1A6] font-mono leading-relaxed">
              {companyIdentity.aboutContent[1]}
            </p>
            <div className="p-4 rounded-xl bg-[#08080C] border-l-2 border-[#FF9E2C] border-y border-r border-[#1E1E24] text-xs sm:text-sm text-[#FF9E2C] font-mono">
              "{companyIdentity.aboutContent[2]}"
            </div>
          </div>
        </div>

        {/* 3 Value Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-20">
          {pillars.map((pillar) => (
            <div
              key={pillar.step}
              className="p-8 rounded-2xl bg-[#070709] border border-[#1E1E24] hover:border-[#FF9E2C]/50 transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-8">
                  <div className="p-3 rounded-xl bg-[#0F0F14] border border-[#1E1E24] group-hover:border-[#FF9E2C]/50 transition-colors">
                    {pillar.icon}
                  </div>
                  <span className="font-mono text-xs text-[#71717A] group-hover:text-[#FF9E2C] transition-colors">
                    [ // {pillar.step} ]
                  </span>
                </div>
                <h3 className="font-extended text-base sm:text-lg font-bold text-white mb-3 tracking-wide uppercase">
                  {pillar.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#A1A1A6] font-mono leading-relaxed">
                  {pillar.desc}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-[#141418] flex items-center gap-2 text-[10px] font-mono text-[#71717A] uppercase tracking-wider group-hover:text-white transition-colors">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#FF9E2C]" />
                <span>Engineered for Maximum Reliability</span>
              </div>
            </div>
          ))}
        </div>

        {/* Studio Metrics Row */}
        <div className="p-8 sm:p-12 rounded-2xl bg-[#070709] border border-[#1E1E24] grid grid-cols-2 md:grid-cols-4 gap-8">
          {companyIdentity.stats.map((stat, idx) => (
            <div key={idx} className="space-y-2">
              <span className="block font-mono text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
                {stat.value}
              </span>
              <span className="block text-[11px] font-mono uppercase tracking-wider text-[#71717A]">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
