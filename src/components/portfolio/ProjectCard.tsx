import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { ProjectItem } from '../../types';

interface ProjectCardProps {
  project: ProjectItem;
  onOpenModal: (project: ProjectItem) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  onOpenModal,
}) => {
  return (
    <div
      onClick={() => onOpenModal(project)}
      className="group relative cursor-pointer overflow-hidden rounded-3xl spatial-glass transition-all duration-500 hover:border-[#D98B3A]/60 hover:shadow-[0_25px_60px_rgba(0,0,0,0.85),0_0_40px_rgba(217,139,58,0.2)] flex flex-col justify-between"
    >
      {/* Visual Frame */}
      <div className="domain-thumbnail-frame relative aspect-[16/10] w-full overflow-hidden bg-[#0A0A0E] flex items-center justify-center">
        <img
          src={project.heroImage}
          alt={project.title}
          className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105 filter brightness-95 contrast-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-75 group-hover:opacity-40 transition-opacity" />

        {/* Category Pill Over Image */}
        <div className="absolute top-4 left-4">
          <span className="px-3.5 py-1.5 rounded-full spatial-nav-capsule text-[10px] font-mono uppercase tracking-widest text-[#D98B3A]">
            {project.category}
          </span>
        </div>

        {/* Year Pill */}
        <div className="absolute top-4 right-4">
          <span className="px-3 py-1 rounded-full spatial-nav-capsule text-[10px] font-mono text-[#A1A1A1]">
            {project.year}
          </span>
        </div>
      </div>

      {/* Info Frame */}
      <div className="p-6 sm:p-7 space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-[11px] font-mono uppercase text-[#A1A1A1] tracking-wider">
            {project.client}
          </span>
          <div className="w-8 h-8 rounded-full spatial-nav-capsule flex items-center justify-center group-hover:border-[#D98B3A]/60 group-hover:bg-[#D98B3A] transition-all duration-300">
            <ArrowUpRight className="w-4 h-4 text-white group-hover:text-black transition-colors" />
          </div>
        </div>

        <h3 className="font-headline text-lg sm:text-xl font-bold text-white tracking-wide group-hover:text-[#D98B3A] transition-colors uppercase">
          {project.title}
        </h3>

        <p className="text-xs text-[#A1A1A1] line-clamp-2 leading-relaxed">
          {project.summary}
        </p>

        {/* Primary Metric Pill */}
        <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-mono">
          <span className="text-[#A1A1A1]">{project.results[0]?.label}</span>
          <span className="text-[#C6A96C] font-bold">{project.results[0]?.value}</span>
        </div>
      </div>
    </div>
  );
};
