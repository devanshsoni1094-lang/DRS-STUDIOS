import React, { useState, useMemo } from 'react';
import { portfolioCategories, portfolioData } from '../../data/portfolio';
import { ProjectCard } from './ProjectCard';
import { CaseStudyModal } from './CaseStudyModal';
import { PortfolioCategory, ProjectItem } from '../../types';
import { Sparkles } from 'lucide-react';

interface PortfolioSectionProps {
  onInquireProject: (context: string) => void;
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({
  onInquireProject,
}) => {
  const [activeCategory, setActiveCategory] = useState<PortfolioCategory>('All');
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'All') return portfolioData;
    return portfolioData.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  return (
    <section id="work" className="py-28 sm:py-36 bg-[#050505] relative overflow-hidden border-b border-[#262626]">
      {/* Background glow */}
      <div className="absolute right-1/4 top-1/4 w-[500px] h-[500px] bg-[#C6A96C]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-6">
          <span className="w-6 h-[1px] bg-[#C6A96C]" />
          <span className="text-xs font-mono tracking-[0.2em] uppercase text-[#DFCA94]">
            07 — CREATIVE PORTFOLIO
          </span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <h2 className="font-headline font-light tracking-tight text-white text-3xl sm:text-5xl lg:text-6xl leading-[1.1] uppercase">
              Work That <br />
              <span className="gold-gradient-text font-normal">Speaks For Itself.</span>
            </h2>
          </div>
          <p className="max-w-md text-xs sm:text-sm text-[#A1A1A1] leading-relaxed">
            A curated selection of digital flagships, high-conversion campaigns, viral packaging, and AI visual productions engineered for forward-thinking brands.
          </p>
        </div>

        {/* Filter Categories Pill Row */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-12 no-scrollbar scroll-smooth">
          {portfolioCategories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-sm text-xs font-mono uppercase tracking-wider whitespace-nowrap transition-all duration-300 cursor-pointer ${
                  isActive
                    ? 'bg-[#C6A96C] text-black font-semibold shadow-[0_0_15px_rgba(198,169,108,0.25)]'
                    : 'bg-[#101010] text-[#A1A1A1] border border-[#262626] hover:text-white hover:border-[#404040]'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpenModal={(p) => setActiveProject(p)}
            />
          ))}
        </div>

        {/* Empty state if ever filtered */}
        {filteredProjects.length === 0 && (
          <div className="py-20 text-center border border-dashed border-[#262626] rounded-sm">
            <Sparkles className="w-8 h-8 text-[#C6A96C] mx-auto mb-3" />
            <p className="text-sm text-[#A1A1A1]">
              New case studies currently being documented for this category.
            </p>
          </div>
        )}
      </div>

      {/* Case Study Modal */}
      <CaseStudyModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
        onInquire={onInquireProject}
      />
    </section>
  );
};
