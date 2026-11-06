import React, { useState } from 'react';
import { processSteps } from '../../data/company';
import { Check, ArrowRight, Sparkles, Clock } from 'lucide-react';

export const ProcessSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  return (
    <section id="process" className="py-28 sm:py-36 bg-[#030303] relative overflow-hidden border-b border-[#1E1E24]">
      {/* Background glow */}
      <div className="absolute left-1/2 top-1/3 -translate-x-1/2 w-96 h-96 bg-[#FF9E2C]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-6">
          <span className="text-[#FF9E2C] font-mono text-xs font-bold">+ + +</span>
          <span className="text-xs font-mono tracking-[0.2em] uppercase text-[#FF9E2C]">
            08 // SYSTEM PROCESS
          </span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <h2 className="font-extended text-3xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-wide text-white leading-tight">
              From Idea <br />
              <span className="text-[#FF9E2C]">To Execution.</span>
            </h2>
          </div>
          <p className="max-w-md text-xs sm:text-sm text-[#A1A1A6] font-mono leading-relaxed">
            A battle-tested 4-step creative pipeline engineered to remove ambiguity, eliminate guesswork, and guarantee predictable, high-caliber delivery.
          </p>
        </div>

        {/* Step Indicator Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-12">
          {processSteps.map((step, idx) => {
            const isActive = activeStep === idx;
            return (
              <button
                key={step.step}
                onClick={() => setActiveStep(idx)}
                className={`p-4 sm:p-5 rounded-xl border text-left transition-all duration-300 cursor-pointer ${
                  isActive
                    ? 'bg-[#0E0E14] border-[#FF9E2C] shadow-[0_0_25px_rgba(255,158,44,0.2)]'
                    : 'bg-[#070709] border-[#1E1E24] opacity-70 hover:opacity-100 hover:border-[#383844]'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-xs text-[#FF9E2C] font-semibold">
                    [ // {step.step} ]
                  </span>
                  <span className="text-[10px] font-mono text-[#71717A]">
                    {step.duration}
                  </span>
                </div>
                <h4 className="font-extended text-sm sm:text-base font-bold text-white uppercase tracking-wide">
                  {step.name}
                </h4>
              </button>
            );
          })}
        </div>

        {/* Active Step Panel */}
        <div className="p-8 sm:p-12 lg:p-16 rounded-2xl bg-[#070709] border border-[#1E1E24] relative overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.8)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
            {/* Step Left Info (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-full bg-[#121218] border border-[#1E1E24] text-xs font-mono text-[#FF9E2C]">
                  PHASE {processSteps[activeStep].step}
                </span>
                <span className="text-xs uppercase font-mono tracking-wider text-[#71717A]">
                  [ {processSteps[activeStep].tagline} ]
                </span>
              </div>

              <h3 className="font-extended text-2xl sm:text-4xl lg:text-5xl font-bold text-white uppercase tracking-wide">
                {processSteps[activeStep].step} — {processSteps[activeStep].name}
              </h3>

              <p className="text-sm sm:text-base text-[#D4D4D8] font-mono leading-relaxed">
                {processSteps[activeStep].description}
              </p>

              <div className="pt-4">
                <h4 className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#FF9E2C] mb-4 flex items-center gap-2">
                  <span>+ + +</span>
                  Key Milestone Deliverables
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {processSteps[activeStep].deliverables.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-lg bg-[#0B0B0F] border border-[#1E1E24] flex items-center gap-2.5 text-xs font-mono text-white"
                    >
                      <Check className="w-3.5 h-3.5 text-[#FF9E2C] shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Step Right Flow Graphic (5 cols) */}
            <div className="lg:col-span-5 p-8 rounded-xl bg-[#09090C] border border-[#1E1E24] space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-[#1E1E24]">
                <span className="text-xs font-mono uppercase text-[#71717A]">Sprint Architecture</span>
                <div className="flex items-center gap-1.5 text-xs font-mono text-[#FF9E2C]">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{processSteps[activeStep].duration}</span>
                </div>
              </div>

              <div className="space-y-3">
                {processSteps.map((s, idx) => (
                  <div
                    key={s.step}
                    onClick={() => setActiveStep(idx)}
                    className={`flex items-center justify-between p-3 rounded-lg cursor-pointer transition-all ${
                      idx === activeStep
                        ? 'bg-[#121218] border border-[#FF9E2C]/70 text-white shadow-[0_0_15px_rgba(255,158,44,0.15)]'
                        : 'opacity-40 hover:opacity-80 text-[#A1A1A6]'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs">{s.step}</span>
                      <span className="font-extended text-xs uppercase font-bold">{s.name}</span>
                    </div>
                    {idx === activeStep ? (
                      <span className="w-2 h-2 rounded-full bg-[#FF9E2C] animate-pulse" />
                    ) : (
                      <ArrowRight className="w-3 h-3 text-[#71717A]" />
                    )}
                  </div>
                ))}
              </div>

              <p className="text-[11px] font-mono text-[#71717A] leading-relaxed pt-2">
                Clients receive 24/7 access to synchronized sprint boards and bi-weekly asynchronous video review digests.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
