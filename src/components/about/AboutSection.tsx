import React from 'react';
import { ArrowUpRight, CheckCircle2, Layers, Cpu, Compass, Sparkles } from 'lucide-react';
import { companyIdentity } from '../../data/company';

interface AboutSectionProps {
  onStartProject: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onStartProject }) => {
  const pillars = [
    {
      icon: <Compass className="w-5 h-5 text-[#D98B3A]" />,
      step: '01',
      title: 'Understand The Business',
      desc: 'We dissect your market, unit economics, audience psychology, and growth friction before initializing any design or production pipelines.',
    },
    {
      icon: <Layers className="w-5 h-5 text-[#D98B3A]" />,
      step: '02',
      title: 'Create With Purpose',
      desc: 'Every layout, video frame, thumbnail, and line of code exists to command authority, evoke desire, and drive quantifiable commercial actions.',
    },
    {
      icon: <Cpu className="w-5 h-5 text-[#D98B3A]" />,
      step: '03',
      title: 'Deliver With Precision',
      desc: 'From sub-second web latency to relentless publishing velocity, our multidisciplinary team executes without handoff friction or quality decay.',
    },
  ];

  return (
    <section id="about" data-section-name="ABOUT DRS STUDIOS" className="py-28 sm:py-36 bg-[#050505] relative overflow-hidden border-b border-white/10">
      {/* Background warm ambient bloom */}
      <div className="absolute right-0 top-1/3 w-[500px] h-[500px] bg-[#D98B3A]/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Tag */}
        <div className="flex items-center gap-3 mb-6">
          <span className="w-8 h-[2px] bg-gradient-to-r from-[#D98B3A] to-[#C6A96C]" />
          <span className="text-xs font-mono tracking-[0.2em] uppercase text-[#D98B3A]">
            09 // ABOUT DRS STUDIOS
          </span>
        </div>

        {/* Large Translucent Glass Philosophy Surface (Prompt Section 09) */}
        <div className="spatial-glass rounded-3xl p-8 sm:p-12 lg:p-16 mb-20 relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            <div className="lg:col-span-7">
              <h2 className="font-headline font-bold text-white text-3xl sm:text-5xl lg:text-6xl leading-[1.08] uppercase">
                We Make Digital <br />
                <span className="gold-gradient-text">Work Better.</span>
              </h2>
            </div>

            <div className="lg:col-span-5 space-y-6">
              <p className="text-base sm:text-lg text-white font-light leading-relaxed">
                DRS STUDIOS brings creativity, technology, and execution together to help businesses establish a powerful digital presence.
              </p>
              
              <div className="p-5 rounded-2xl bg-white/[0.04] border-l-2 border-[#D98B3A] border-y border-r border-white/10 text-sm sm:text-base text-[#E5E5E5] leading-relaxed italic">
                "We believe exceptional digital experiences are built through thoughtful strategy, creative excellence, and attention to detail."
              </div>
            </div>
          </div>

        </div>

        {/* 3 Floating Glass Value Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-20">
          {pillars.map((pillar) => (
            <div
              key={pillar.step}
              className="spatial-glass rounded-3xl p-8 hover:border-[#D98B3A]/60 transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-8">
                  <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 group-hover:border-[#D98B3A]/50 transition-colors">
                    {pillar.icon}
                  </div>
                  <span className="font-mono text-xs text-[#A1A1A1] group-hover:text-[#D98B3A] transition-colors">
                    [ // {pillar.step} ]
                  </span>
                </div>
                <h3 className="font-headline text-lg sm:text-xl font-bold text-white mb-3 tracking-wide">
                  {pillar.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#A1A1A1] leading-relaxed">
                  {pillar.desc}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-white/10 flex items-center gap-2 text-[10px] font-mono text-[#A1A1A1] uppercase tracking-wider group-hover:text-white transition-colors">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#D98B3A]" />
                <span>Engineered For Reliability</span>
              </div>
            </div>
          ))}
        </div>

        {/* Quantified Metrics Glass Strip */}
        <div className="spatial-glass rounded-3xl p-8 sm:p-12 grid grid-cols-2 md:grid-cols-4 gap-8">
          {companyIdentity.stats.map((stat, idx) => (
            <div key={idx} className="space-y-2">
              <span className="block font-headline text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
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
