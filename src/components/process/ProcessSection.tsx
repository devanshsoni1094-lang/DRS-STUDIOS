import React, { useState } from 'react';
import { processSteps } from '../../data/company';
import { Check, ArrowRight, Sparkles, Clock } from 'lucide-react';

export const ProcessSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  return (
    <section id="process" className="py-28 sm:py-36 bg-[#050505] relative overflow-hidden border-b border-[#262626]">
      {/* Background glow */}
      <div className="absolute left-1/2 top-1/3 -translate-x-1/2 w-96 h-96 bg-[#C6A96C]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-6">
          <span className="w-6 h-[1px] bg-[#C6A96C]" />
          <span className="text-xs font-mono tracking-[0.2em] uppercase text-[#DFCA94]">
            08 — OUR PROCESS
          </span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <h2 className="font-headline font-light tracking-tight text-white text-3xl sm:text-5xl lg:text-6xl leading-[1.1] uppercase">
              From Idea <br />
              <span className="gold-gradient-text font-normal">To Execution.</span>
            </h2>
          </div>
          <p className="max-w-md text-xs sm:text-sm text-[#A1A1A1] leading-relaxed">
            A battle-tested 4-step creative pipeline designed to remove ambiguity, eliminate guesswork, and guarantee predictable, high-caliber delivery.
          </p>
        </div>

        {/* Step Indicator Tabs for Mobile & Desktop */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-12">
          {processSteps.map((step, idx) => {
            const isActive = activeStep === idx;
            return (
              <button
                key={step.step}
                onClick={() => setActiveStep(idx)}
                className={`p-4 sm:p-5 rounded-sm border text-left transition-all duration-300 cursor-pointer ${
                  isActive
                    ? 'bg-[#121212] border-[#C6A96C] shadow-[0_0_20px_rgba(198,169,108,0.15)]'
                    : 'bg-[#0E0E0E] border-[#262626] opacity-70 hover:opacity-100 hover:border-[#383838]'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-xs text-[#C6A96C]">
                    STEP {step.step}
                  </span>
                  <span className="text-[10px] font-mono text-[#A1A1A1]">
                    {step.duration}
                  </span>
                </div>
                <h4 className="font-headline text-base sm:text-lg font-medium text-white uppercase tracking-wide">
                  {step.name}
                </h4>
              </button>
            );
          })}
        </div>

        {/* Active Step Detailed Showcase Panel */}
        <div className="p-8 sm:p-12 lg:p-16 rounded-sm bg-[#0E0E0E] border border-[#262626] relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
            {/* Step Left Info (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-sm bg-[#181818] border border-[#262626] text-xs font-mono text-[#C6A96C]">
                  PHASE {processSteps[activeStep].step}
                </span>
                <span className="text-xs uppercase tracking-wider text-[#A1A1A1]">
                  {processSteps[activeStep].tagline}
                </span>
              </div>

              <h3 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-light text-white uppercase tracking-tight">
                {processSteps[activeStep].step} — {processSteps[activeStep].name}
              </h3>

              <p className="text-sm sm:text-base text-[#CCCCCC] font-light leading-relaxed">
                {processSteps[activeStep].description}
              </p>

              <div className="pt-4">
                <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C6A96C] mb-4 flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5" />
                  Key Milestone Deliverables
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {processSteps[activeStep].deliverables.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-sm bg-[#141414] border border-[#262626] flex items-center gap-2.5 text-xs text-white"
                    >
                      <Check className="w-3.5 h-3.5 text-[#C6A96C] shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Step Right Visual / Timeline Graphic (5 cols) */}
            <div className="lg:col-span-5 p-8 rounded-sm bg-[#121212] border border-[#262626] space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-[#262626]">
                <span className="text-xs font-mono uppercase text-[#A1A1A1]">Project Flow Status</span>
                <div className="flex items-center gap-1.5 text-xs font-mono text-[#C6A96C]">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{processSteps[activeStep].duration}</span>
                </div>
              </div>

              <div className="space-y-4">
                {processSteps.map((s, idx) => (
                  <div
                    key={s.step}
                    onClick={() => setActiveStep(idx)}
                    className={`flex items-center justify-between p-3 rounded-sm cursor-pointer transition-all ${
                      idx === activeStep
                        ? 'bg-[#181818] border border-[#C6A96C]/60 text-white'
                        : 'opacity-40 hover:opacity-80 text-[#A1A1A1]'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs">{s.step}</span>
                      <span className="font-headline text-sm uppercase">{s.name}</span>
                    </div>
                    {idx === activeStep ? (
                      <span className="w-2 h-2 rounded-full bg-[#C6A96C] animate-pulse" />
                    ) : (
                      <ArrowRight className="w-3 h-3 text-[#A1A1A1]" />
                    )}
                  </div>
                ))}
              </div>

              <p className="text-[11px] text-[#A1A1A1] leading-relaxed pt-2">
                Clients receive continuous access to dedicated sprint boards and bi-weekly asynchronous video review digests.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
