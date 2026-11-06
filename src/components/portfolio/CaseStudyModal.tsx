import React from 'react';
import { X, ArrowUpRight, Check, Award, BarChart3, Quote } from 'lucide-react';
import { ProjectItem } from '../../types';

interface CaseStudyModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onInquire: (context: string) => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({
  project,
  onClose,
  onInquire,
}) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 animate-in fade-in duration-200">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/90 backdrop-blur-xl"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative z-10 w-full max-w-5xl max-h-[92vh] overflow-y-auto bg-[#070709] border border-[#1E1E24] rounded-2xl shadow-[0_0_80px_rgba(0,0,0,0.95)] p-6 sm:p-10 lg:p-12 text-white">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full bg-[#121218] border border-[#1E1E24] text-[#A1A1A6] hover:text-white hover:border-[#FF9E2C]/50 transition-colors cursor-pointer"
          aria-label="Close case study modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Metadata */}
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <span className="font-mono text-xs uppercase tracking-widest text-[#FF9E2C] font-semibold">
            [ {project.category} ]
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#1E1E24]" />
          <span className="text-xs font-mono text-[#71717A]">
            CLIENT: {project.client}
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#1E1E24]" />
          <span className="text-xs font-mono text-[#71717A]">
            YEAR: {project.year}
          </span>
        </div>

        <h3 className="font-extended text-2xl sm:text-4xl lg:text-5xl font-bold text-white tracking-wide uppercase mb-6">
          {project.title}
        </h3>

        <p className="text-sm sm:text-base text-[#D4D4D8] font-mono leading-relaxed mb-8 max-w-3xl">
          {project.summary}
        </p>

        {/* Hero Visual */}
        <div className="w-full h-72 sm:h-96 lg:h-[460px] rounded-xl overflow-hidden mb-10 border border-[#1E1E24]">
          <img
            src={project.heroImage}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 rounded-xl bg-[#0B0B0F] border border-[#1E1E24] mb-12">
          {project.results.map((res, idx) => (
            <div key={idx} className="space-y-1">
              <span className="text-[10px] uppercase font-mono tracking-wider text-[#71717A] block">
                {res.label}
              </span>
              <span className="font-mono text-2xl sm:text-3xl font-bold text-[#FF9E2C] tracking-tight">
                {res.value}
              </span>
            </div>
          ))}
          <div className="space-y-1">
            <span className="text-[10px] uppercase font-mono tracking-wider text-[#71717A] block">
              Execution Cadence
            </span>
            <span className="font-mono text-base sm:text-lg font-semibold text-white">
              Sprint Velocity
            </span>
          </div>
          <div className="space-y-1">
            <span className="text-[10px] uppercase font-mono tracking-wider text-[#71717A] block">
              Architecture Score
            </span>
            <span className="font-mono text-base sm:text-lg font-semibold text-white">
              100% Validated
            </span>
          </div>
        </div>

        {/* Challenge & Solution */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mb-12">
          <div className="p-6 rounded-xl bg-[#0B0B0F] border border-[#1E1E24] space-y-3">
            <div className="text-xs font-mono uppercase tracking-widest text-[#71717A] flex items-center gap-2">
              <BarChart3 className="w-3.5 h-3.5 text-[#FF9E2C]" />
              The Challenge
            </div>
            <p className="text-xs sm:text-sm font-mono text-[#A1A1A6] leading-relaxed">
              {project.challenge}
            </p>
          </div>

          <div className="p-6 rounded-xl bg-[#0B0B0F] border border-[#1E1E24] space-y-3">
            <div className="text-xs font-mono uppercase tracking-widest text-[#FF9E2C] flex items-center gap-2">
              <Award className="w-3.5 h-3.5 text-[#FF9E2C]" />
              The DRS Architecture
            </div>
            <p className="text-xs sm:text-sm font-mono text-[#D4D4D8] leading-relaxed">
              {project.solution}
            </p>
          </div>
        </div>

        {/* Deliverables List */}
        <div className="mb-12">
          <h4 className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#FF9E2C] mb-4">
            // DELIVERABLES MATRIX
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {project.deliverables.map((item, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-lg bg-[#0B0B0F] border border-[#1E1E24] text-xs font-mono text-[#D4D4D8] flex items-center gap-2"
              >
                <Check className="w-3.5 h-3.5 text-[#FF9E2C] shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Client Testimonial if present */}
        {project.testimonial && (
          <div className="p-8 rounded-xl bg-[#0D0D12] border-l-2 border-[#FF9E2C] border-y border-r border-[#1E1E24] mb-12 relative">
            <Quote className="w-8 h-8 text-[#FF9E2C]/20 absolute top-6 right-6" />
            <p className="text-sm sm:text-base text-white font-mono italic mb-4 leading-relaxed">
              "{project.testimonial.quote}"
            </p>
            <div className="text-xs font-mono">
              <span className="font-bold text-white block">
                {project.testimonial.author}
              </span>
              <span className="text-[#71717A]">
                {project.testimonial.role}, {project.testimonial.company}
              </span>
            </div>
          </div>
        )}

        {/* Action Footnote */}
        <div className="pt-8 border-t border-[#1E1E24] flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-xs font-mono text-[#71717A]">
            Interested in deploying similar high-impact architecture for your brand?
          </p>
          <div className="flex items-center gap-4 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="w-full sm:w-auto px-6 py-3 rounded-full border border-[#1E1E24] text-xs font-mono text-[#A1A1A6] hover:text-white transition-colors cursor-pointer"
            >
              Back to Archive
            </button>
            <button
              onClick={() => {
                onClose();
                onInquire(`Case Study Inquiry: ${project.title}`);
              }}
              className="w-full sm:w-auto echo-pill echo-pill-primary py-3.5 px-6"
            >
              <span>DISCUSS THIS ARCHITECTURE</span>
              <span className="font-bold">&gt;</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
