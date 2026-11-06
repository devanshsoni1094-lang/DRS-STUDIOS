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
        className="fixed inset-0 bg-black/85 backdrop-blur-2xl"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative z-10 w-full max-w-5xl max-h-[92vh] overflow-y-auto touch-scroll spatial-glass rounded-3xl p-5 sm:p-10 lg:p-12 text-white shadow-[0_0_90px_rgba(0,0,0,0.95)]">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full spatial-nav-capsule text-[#A1A1A1] hover:text-white transition-colors cursor-pointer"
          aria-label="Close case study modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Metadata */}
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <span className="font-mono text-xs uppercase tracking-widest text-[#D98B3A] font-semibold">
            {project.category}
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
          <span className="text-xs font-mono text-[#A1A1A1]">
            CLIENT: {project.client}
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
          <span className="text-xs font-mono text-[#A1A1A1]">
            YEAR: {project.year}
          </span>
        </div>

        <h3 className="font-headline text-2xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight uppercase mb-6">
          {project.title}
        </h3>

        <p className="text-sm sm:text-base text-[#D4D4D8] font-light leading-relaxed mb-8 max-w-3xl">
          {project.summary}
        </p>

        {/* Hero Visual */}
        <div className="domain-thumbnail-frame relative aspect-[16/9] w-full rounded-2xl overflow-hidden mb-10 border border-white/15 shadow-[0_20px_50px_rgba(0,0,0,0.8)] bg-[#0A0A0E] flex items-center justify-center p-1 sm:p-2">
          <img
            src={project.heroImage}
            alt={project.title}
            className="w-full h-full object-contain"
          />
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 rounded-2xl bg-white/[0.03] border border-white/10 mb-12">
          {project.results.map((res, idx) => (
            <div key={idx} className="space-y-1">
              <span className="text-[10px] uppercase font-mono tracking-wider text-[#A1A1A1] block">
                {res.label}
              </span>
              <span className="font-headline text-2xl sm:text-3xl font-bold text-[#D98B3A] tracking-tight">
                {res.value}
              </span>
            </div>
          ))}
          <div className="space-y-1">
            <span className="text-[10px] uppercase font-mono tracking-wider text-[#A1A1A1] block">
              Execution Format
            </span>
            <span className="font-headline text-base sm:text-lg font-medium text-white">
              Dedicated Studio Sprint
            </span>
          </div>
          <div className="space-y-1">
            <span className="text-[10px] uppercase font-mono tracking-wider text-[#A1A1A1] block">
              Quality Assurance
            </span>
            <span className="font-headline text-base sm:text-lg font-medium text-[#C6A96C]">
              100% Validated
            </span>
          </div>
        </div>

        {/* Challenge & Solution Architecture */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mb-12">
          <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 space-y-3">
            <div className="text-xs font-mono uppercase tracking-widest text-[#D98B3A] flex items-center gap-2">
              <BarChart3 className="w-4 h-4 text-[#D98B3A]" />
              The Challenge
            </div>
            <p className="text-xs sm:text-sm text-[#A1A1A1] leading-relaxed">
              {project.challenge}
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 space-y-3">
            <div className="text-xs font-mono uppercase tracking-widest text-[#C6A96C] flex items-center gap-2">
              <Award className="w-4 h-4 text-[#C6A96C]" />
              The DRS Solution
            </div>
            <p className="text-xs sm:text-sm text-[#D4D4D8] leading-relaxed">
              {project.solution}
            </p>
          </div>
        </div>

        {/* Deliverables List */}
        <div className="mb-12">
          <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-[#C6A96C] mb-4">
            Deliverable Suite
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {project.deliverables.map((item, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 text-xs text-[#D4D4D8] flex items-center gap-2"
              >
                <Check className="w-3.5 h-3.5 text-[#D98B3A] shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Client Testimonial if present */}
        {project.testimonial && (
          <div className="p-8 rounded-2xl bg-white/[0.04] border-l-2 border-[#D98B3A] border-y border-r border-white/10 mb-12 relative">
            <Quote className="w-8 h-8 text-[#D98B3A]/20 absolute top-6 right-6" />
            <p className="text-base sm:text-lg text-white font-light italic mb-4 leading-relaxed">
              "{project.testimonial.quote}"
            </p>
            <div className="text-xs">
              <span className="font-semibold text-white block">
                {project.testimonial.author}
              </span>
              <span className="text-[#A1A1A1]">
                {project.testimonial.role}, {project.testimonial.company}
              </span>
            </div>
          </div>
        )}

        {/* Action Footnote */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-xs text-[#A1A1A1]">
            Interested in deploying similar high-impact architecture for your brand?
          </p>
          <div className="flex items-center gap-4 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="w-full sm:w-auto px-6 py-3 rounded-full border border-white/15 text-xs text-[#A1A1A1] hover:text-white transition-colors cursor-pointer"
            >
              Back to Gallery
            </button>
            <button
              onClick={() => {
                onClose();
                onInquire(`Case Study Inquiry: ${project.title}`);
              }}
              className="w-full sm:w-auto spatial-pill spatial-pill-amber py-3.5 px-7"
            >
              <span>DISCUSS THIS PROJECT</span>
              <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
