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
        className="fixed inset-0 bg-black/90 backdrop-blur-md"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative z-10 w-full max-w-5xl max-h-[92vh] overflow-y-auto bg-[#0A0A0A] border border-[#262626] rounded-sm shadow-2xl p-6 sm:p-10 lg:p-12 text-white">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-sm bg-[#161616] border border-[#262626] text-[#A1A1A1] hover:text-white hover:border-[#C6A96C]/50 transition-colors cursor-pointer"
          aria-label="Close case study modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Metadata */}
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <span className="font-mono text-xs uppercase tracking-widest text-[#C6A96C]">
            {project.category}
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#262626]" />
          <span className="text-xs font-mono text-[#A1A1A1]">
            CLIENT: {project.client}
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#262626]" />
          <span className="text-xs font-mono text-[#A1A1A1]">
            YEAR: {project.year}
          </span>
        </div>

        <h3 className="font-headline text-3xl sm:text-5xl font-light text-white tracking-tight uppercase mb-6">
          {project.title}
        </h3>

        <p className="text-base sm:text-lg text-[#CCCCCC] font-light leading-relaxed mb-8 max-w-3xl">
          {project.summary}
        </p>

        {/* Hero Visual */}
        <div className="w-full h-72 sm:h-96 lg:h-[460px] rounded-sm overflow-hidden mb-10 border border-[#262626]">
          <img
            src={project.heroImage}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 rounded-sm bg-[#111111] border border-[#262626] mb-12">
          {project.results.map((res, idx) => (
            <div key={idx} className="space-y-1">
              <span className="text-xs uppercase font-mono tracking-wider text-[#A1A1A1] block">
                {res.label}
              </span>
              <span className="font-headline text-2xl sm:text-3xl font-light text-white tracking-tight">
                {res.value}
              </span>
            </div>
          ))}
          <div className="space-y-1">
            <span className="text-xs uppercase font-mono tracking-wider text-[#A1A1A1] block">
              Execution Model
            </span>
            <span className="font-headline text-lg sm:text-xl font-light text-[#DFCA94]">
              Dedicated Studio Sprint
            </span>
          </div>
          <div className="space-y-1">
            <span className="text-xs uppercase font-mono tracking-wider text-[#A1A1A1] block">
              Quality Rating
            </span>
            <span className="font-headline text-lg sm:text-xl font-light text-white">
              5.0 / 5.0 Precision
            </span>
          </div>
        </div>

        {/* Challenge & Solution Architecture */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mb-12">
          <div className="p-6 rounded-sm bg-[#111111] border border-[#262626] space-y-3">
            <div className="text-xs font-mono uppercase tracking-widest text-[#A1A1A1] flex items-center gap-2">
              <BarChart3 className="w-3.5 h-3.5 text-[#C6A96C]" />
              The Challenge
            </div>
            <p className="text-sm text-[#CCCCCC] leading-relaxed">
              {project.challenge}
            </p>
          </div>

          <div className="p-6 rounded-sm bg-[#111111] border border-[#262626] space-y-3">
            <div className="text-xs font-mono uppercase tracking-widest text-[#C6A96C] flex items-center gap-2">
              <Award className="w-3.5 h-3.5 text-[#C6A96C]" />
              The DRS Solution
            </div>
            <p className="text-sm text-[#CCCCCC] leading-relaxed">
              {project.solution}
            </p>
          </div>
        </div>

        {/* Deliverables List */}
        <div className="mb-12">
          <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C6A96C] mb-4">
            Scope & Deliverables
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {project.deliverables.map((item, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-sm bg-[#111111] border border-[#262626] text-xs text-[#CCCCCC] flex items-center gap-2"
              >
                <Check className="w-3.5 h-3.5 text-[#C6A96C] shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Client Testimonial if present */}
        {project.testimonial && (
          <div className="p-8 rounded-sm bg-[#141414] border-l-2 border-[#C6A96C] border-y border-r border-[#262626] mb-12 relative">
            <Quote className="w-8 h-8 text-[#C6A96C]/20 absolute top-6 right-6" />
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
        <div className="pt-8 border-t border-[#262626] flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-xs text-[#A1A1A1]">
            Interested in similar results for your business or brand?
          </p>
          <div className="flex items-center gap-4 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="w-full sm:w-auto px-6 py-3 rounded-sm border border-[#262626] text-xs text-[#A1A1A1] hover:text-white transition-colors cursor-pointer"
            >
              Back to Gallery
            </button>
            <button
              onClick={() => {
                onClose();
                onInquire(`Case Study Inquiry: ${project.title}`);
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 bg-[#C6A96C] text-black font-semibold text-xs uppercase tracking-wider rounded-sm hover:bg-[#DFCA94] transition-all cursor-pointer shadow-[0_0_20px_rgba(198,169,108,0.2)]"
            >
              <span>DISCUSS THIS PROJECT</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
