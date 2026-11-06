import React, { useState, useMemo } from 'react';
import { portfolioCategories, portfolioData } from '../../data/portfolio';
import { ProjectCard } from './ProjectCard';
import { CaseStudyModal } from './CaseStudyModal';
import { PortfolioCategory, ProjectItem } from '../../types';
import { Sparkles, ChevronLeft, ChevronRight, ArrowUpRight, Play, Maximize2 } from 'lucide-react';

interface PortfolioSectionProps {
  onInquireProject: (context: string) => void;
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({
  onInquireProject,
}) => {
  const [activeCategory, setActiveCategory] = useState<PortfolioCategory>('All');
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);
  const [coverflowIndex, setCoverflowIndex] = useState(2); // Center active card
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [isMobileScreen, setIsMobileScreen] = useState(false);

  React.useEffect(() => {
    const checkWidth = () => {
      setIsMobileScreen(window.innerWidth < 640);
    };
    checkWidth();
    window.addEventListener('resize', checkWidth);
    return () => window.removeEventListener('resize', checkWidth);
  }, []);

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'All') return portfolioData;
    return portfolioData.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  const nextCoverflow = () => {
    setCoverflowIndex((prev) => (prev + 1) % portfolioData.length);
  };

  const prevCoverflow = () => {
    setCoverflowIndex((prev) => (prev - 1 + portfolioData.length) % portfolioData.length);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    const diff = e.changedTouches[0].clientX - touchStartX;
    if (diff > 40) {
      prevCoverflow();
    } else if (diff < -40) {
      nextCoverflow();
    }
    setTouchStartX(null);
  };

  return (
    <section id="work" data-section-name="CREATIVE WORK" className="py-28 sm:py-36 bg-[#050505] relative overflow-hidden border-b border-white/10">
      {/* Background warm amber blooms */}
      <div className="absolute right-1/4 top-1/4 w-[600px] h-[600px] bg-[#D98B3A]/10 rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-6">
          <span className="section-kicker-bar" />
          <span className="text-xs font-mono tracking-[0.2em] uppercase text-[#D98B3A]">
            08 // IMMERSIVE 3D SHOWCASE
          </span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <h2 className="font-headline font-bold text-white text-3xl sm:text-5xl lg:text-6xl leading-[1.08] uppercase">
              Creativity, <br />
              <span className="gold-gradient-text">Made Visible.</span>
            </h2>
          </div>
          <p className="max-w-md text-xs sm:text-sm text-[#A1A1A1] leading-relaxed">
            Floating artwork, spatial glass-framed projects, and quantifiable commercial results engineered across international luxury, tech, and creator industries.
          </p>
        </div>

        {/* ========================================================
            3D SPATIAL COVERFLOW CAROUSEL (Inspired by Reference Images 2 & 3)
           ======================================================== */}
        <div className="mb-20 spatial-glass rounded-3xl p-6 sm:p-10 lg:p-12 relative overflow-hidden">
          <div className="flex items-center justify-between pb-6 mb-6 border-b border-white/10 text-xs font-mono text-[#A1A1A1]">
            <span className="flex items-center gap-2 text-[#D98B3A]">
              <span className="w-2 h-2 rounded-full bg-[#D98B3A] animate-pulse" />
              SPATIAL PERSPECTIVE COVERFLOW
            </span>
            <span>CARD 0{coverflowIndex + 1} OF 0{portfolioData.length}</span>
          </div>

          {/* 3D Perspective Stage with Touch Swiping */}
          <div
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            className="relative h-[320px] sm:h-[380px] md:h-[420px] flex items-center justify-center perspective-container overflow-hidden py-4 select-none touch-pan-y"
          >
            {portfolioData.map((project, idx) => {
              // Calculate spatial distance from center active card
              const offset = idx - coverflowIndex;
              const isCenter = offset === 0;
              const isAdjacent = Math.abs(offset) === 1;

              if (Math.abs(offset) > (isMobileScreen ? 1 : 2)) return null; // Show only adjacent cards on mobile for zero clipping

              const translateX = offset * (isMobileScreen ? 130 : 210); // horizontal separation
              const translateZ = -Math.abs(offset) * (isMobileScreen ? 70 : 140); // spatial depth
              const rotateY = offset * (isMobileScreen ? -20 : -28); // 3D rotation angle
              const scale = isCenter ? 1.05 : isAdjacent ? (isMobileScreen ? 0.85 : 0.88) : 0.72;
              const opacity = isCenter ? 1 : isAdjacent ? (isMobileScreen ? 0.5 : 0.65) : 0.3;

              return (
                <div
                  key={project.id}
                  onClick={() => {
                    if (isCenter) setActiveProject(project);
                    else setCoverflowIndex(idx);
                  }}
                  style={{
                    transform: `translateX(${translateX}px) translateZ(${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`,
                    zIndex: 20 - Math.abs(offset) * 5,
                    opacity: opacity,
                  }}
                  className="absolute w-[210px] sm:w-[260px] md:w-[290px] h-[280px] sm:h-[330px] md:h-[360px] rounded-2xl overflow-hidden cursor-pointer transition-all duration-700 ease-out border border-white/20 bg-[#0C0C10] shadow-[0_25px_60px_rgba(0,0,0,0.85)] group select-none"
                >
                  <img
                    src={project.heroImage}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent" />

                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-full spatial-nav-capsule text-[9px] font-mono text-[#D98B3A]">
                      {project.category}
                    </span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="text-[10px] font-mono uppercase text-[#A1A1A1] block">
                      {project.client}
                    </span>
                    <h4 className="font-headline font-semibold text-white text-sm truncate">
                      {project.title}
                    </h4>
                    {isCenter && (
                      <span className="inline-flex items-center gap-1 text-[11px] font-mono text-[#D98B3A] mt-1.5">
                        <Maximize2 className="w-3 h-3" />
                        Click to inspect case study
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Floating Liquid Glass Controls (Reference Image 2 style) */}
          <div className="flex items-center justify-between pt-6 border-t border-white/10 max-w-md mx-auto">
            <button
              onClick={prevCoverflow}
              className="p-3 rounded-full spatial-pill text-white hover:text-[#D98B3A] transition-colors"
              aria-label="Previous project"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-2">
              {portfolioData.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCoverflowIndex(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === coverflowIndex ? 'w-8 bg-[#D98B3A]' : 'w-2 bg-white/20'
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextCoverflow}
              className="p-3 rounded-full spatial-pill text-white hover:text-[#D98B3A] transition-colors"
              aria-label="Next project"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Filter Categories Pill Row */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-12 no-scrollbar touch-scroll scroll-smooth px-1">
          {portfolioCategories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider whitespace-nowrap transition-all duration-300 cursor-pointer ${
                  isActive
                    ? 'spatial-pill spatial-pill-amber text-black font-semibold'
                    : 'spatial-pill text-[#A1A1A1] hover:text-white'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Spatial Glass Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpenModal={(p) => setActiveProject(p)}
            />
          ))}
        </div>

        {/* Empty state */}
        {filteredProjects.length === 0 && (
          <div className="py-20 text-center spatial-glass rounded-3xl">
            <Sparkles className="w-8 h-8 text-[#D98B3A] mx-auto mb-3" />
            <p className="text-sm text-[#A1A1A1]">
              New spatial archives currently being documented for this category.
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
