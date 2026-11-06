import React, { useState } from 'react';
import { processSteps } from '../../data/company';
import { Check, ArrowRight, Sparkles, Clock } from 'lucide-react';

export const ProcessSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  return (
    <section id="process" data-section-name="PROCESS ARCHITECTURE" className="py-28 sm:py-36 bg-[#050505] relative overflow-hidden border-b border-white/10">
      {/* Background warm amber glow */}
      <div className="absolute left-1/2 top-1/3 -translate-x-1/2 w-[500px] h-[500px] bg-[#D98B3A]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-6">
          <span className="w-8 h-[2px] bg-gradient-to-r from-[#D98B3A] to-[#C6A96C]" />
          <span className="text-xs font-mono tracking-[0.2em] uppercase text-[#D98B3A]">
            08 // OPERATING PROCESS
          </span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <h2 className="font-headline font-bold text-white text-3xl sm:text-5xl lg:text-6xl leading-[1.08] uppercase">
              From Idea <br />
              <span className="gold-gradient-text">To Execution.</span>
            </h2>
          </div>
          <p className="max-w-md text-xs sm:text-sm text-[#A1A1A1] leading-relaxed">
            A battle-tested 4-step creative pipeline designed to remove ambiguity, eliminate guesswork, and guarantee predictable, high-caliber delivery.
          </p>
        </div>

        {/* Step Indicator Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {processSteps.map((step, idx) => {
            const isActive = activeStep === idx;
            return (
              <button
                key={step.step}
                onClick={() => setActiveStep(idx)}
                className={`p-5 rounded-2xl text-left transition-all duration-300 cursor-pointer ${
                  isActive
                    ? 'spatial-glass border-[#D98B3A]/80 shadow-[0_15px_40px_rgba(217,139,58,0.25)]'
                    : 'bg-white/[0.03] border border-white/10 opacity-70 hover:opacity-100 hover:border-white/25'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-xs text-[#D98B3A] font-semibold">
                    STEP {step.step}
                  </span>
                  <span className="text-[10px] font-mono text-[#A1A1A1]">
                    {step.duration}
                  </span>
                </div>
                <h4 className="font-headline text-base sm:text-lg font-bold text-white uppercase tracking-wide">
                  {step.name}
                </h4>
              </button>
            );
          })}
        </div>

        {/* Active Step Spatial Glass Panel */}
        <div className="spatial-glass rounded-3xl p-8 sm:p-12 lg:p-16 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
            
            {/* Step Left Info (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3">
                <span className="px-3.5 py-1.5 rounded-full spatial-nav-capsule text-xs font-mono text-[#D98B3A]">
                  PHASE {processSteps[activeStep].step}
                </span>
                <span className="text-xs uppercase tracking-wider text-[#A1A1A1]">
                  {processSteps[activeStep].tagline}
                </span>
              </div>

              <h3 className="font-headline text-2xl sm:text-4xl lg:text-5xl font-bold text-white uppercase tracking-tight">
                {processSteps[activeStep].step} — {processSteps[activeStep].name}
              </h3>

              <p className="text-sm sm:text-base text-[#D4D4D8] font-light leading-relaxed">
                {processSteps[activeStep].description}
              </p>

              <div className="pt-4">
                <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-[#C6A96C] mb-4 flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-[#D98B3A]" />
                  Key Milestone Deliverables
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {processSteps[activeStep].deliverables.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl bg-white/[0.04] border border-white/10 flex items-center gap-2.5 text-xs text-white"
                    >
                      <Check className="w-3.5 h-3.5 text-[#D98B3A] shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Step Right Flow Graphic (5 cols) */}
            <div className="lg:col-span-5 p-8 rounded-2xl bg-white/[0.03] border border-white/10 space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <span className="text-xs font-mono uppercase text-[#A1A1A1]">Sprint Architecture</span>
                <div className="flex items-center gap-1.5 text-xs font-mono text-[#D98B3A]">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{processSteps[activeStep].duration}</span>
                </div>
              </div>

              <div className="space-y-3">
                {processSteps.map((s, idx) => (
                  <div
                    key={s.step}
                    onClick={() => setActiveStep(idx)}
                    className={`flex items-center justify-between p-3.5 rounded-xl cursor-pointer transition-all ${
                      idx === activeStep
                        ? 'spatial-glass border-[#D98B3A]/70 text-white shadow-[0_0_20px_rgba(217,139,58,0.2)]'
                        : 'opacity-40 hover:opacity-80 text-[#A1A1A1]'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs">{s.step}</span>
                      <span className="font-headline text-sm font-semibold uppercase">{s.name}</span>
                    </div>
                    {idx === activeStep ? (
                      <span className="w-2 h-2 rounded-full bg-[#D98B3A] animate-pulse" />
                    ) : (
                      <ArrowRight className="w-3.5 h-3.5 text-[#A1A1A1]" />
                    )}
                  </div>
                ))}
              </div>

              <p className="text-[11px] text-[#A1A1A1] leading-relaxed pt-2">
                Clients receive 24/7 access to synchronized sprint boards and bi-weekly asynchronous video review digests.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
