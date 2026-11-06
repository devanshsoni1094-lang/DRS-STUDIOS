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
      className="group relative cursor-pointer overflow-hidden rounded-sm bg-[#0E0E0E] border border-[#262626] transition-all duration-500 hover:border-[#C6A96C]/60 hover:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.8),0_0_25px_rgba(198,169,108,0.15)] flex flex-col justify-between"
    >
      {/* Visual Frame */}
      <div className="relative aspect-[16/10] sm:aspect-[4/3] w-full overflow-hidden bg-[#141414]">
        <img
          src={project.heroImage}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0E0E0E] via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />

        {/* Category Pill Over Image */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 rounded-sm bg-[#050505]/80 backdrop-blur-md border border-[#262626] text-[10px] font-mono uppercase tracking-widest text-[#DFCA94]">
            {project.category}
          </span>
        </div>

        {/* Year Pill */}
        <div className="absolute top-4 right-4">
          <span className="px-2.5 py-1 rounded-sm bg-[#050505]/80 backdrop-blur-md border border-[#262626] text-[10px] font-mono text-[#A1A1A1]">
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
          <div className="w-7 h-7 rounded-full bg-[#161616] border border-[#262626] flex items-center justify-center group-hover:border-[#C6A96C]/60 group-hover:bg-[#C6A96C] transition-all duration-300">
            <ArrowUpRight className="w-3.5 h-3.5 text-[#A1A1A1] group-hover:text-black transition-colors" />
          </div>
        </div>

        <h3 className="font-headline text-xl sm:text-2xl font-light text-white tracking-tight group-hover:text-[#DFCA94] transition-colors uppercase">
          {project.title}
        </h3>

        <p className="text-xs text-[#A1A1A1] line-clamp-2 leading-relaxed">
          {project.summary}
        </p>

        {/* Primary Metric Pill */}
        <div className="pt-3 border-t border-[#1F1F1F] flex items-center justify-between text-[11px] font-mono">
          <span className="text-[#A1A1A1]">{project.results[0]?.label}</span>
          <span className="text-[#C6A96C] font-semibold">{project.results[0]?.value}</span>
        </div>
      </div>
    </div>
  );
};
