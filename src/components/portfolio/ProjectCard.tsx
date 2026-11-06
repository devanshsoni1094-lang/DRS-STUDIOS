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
      className="group relative cursor-pointer overflow-hidden rounded-2xl bg-[#070709] border border-[#1E1E24] transition-all duration-500 hover:border-[#FF9E2C]/60 hover:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.9),0_0_25px_rgba(255,158,44,0.2)] flex flex-col justify-between"
    >
      {/* Visual Frame */}
      <div className="relative aspect-[16/10] sm:aspect-[4/3] w-full overflow-hidden bg-[#0A0A0E]">
        <img
          src={project.heroImage}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 filter contrast-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#070709] via-transparent to-transparent opacity-70 group-hover:opacity-40 transition-opacity" />

        {/* Category Pill Over Image */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 rounded-full bg-[#030303]/85 backdrop-blur-md border border-[#1E1E24] text-[10px] font-mono uppercase tracking-widest text-[#FF9E2C]">
            {project.category}
          </span>
        </div>

        {/* Year Pill */}
        <div className="absolute top-4 right-4">
          <span className="px-2.5 py-1 rounded-full bg-[#030303]/85 backdrop-blur-md border border-[#1E1E24] text-[10px] font-mono text-[#71717A]">
            {project.year}
          </span>
        </div>
      </div>

      {/* Info Frame */}
      <div className="p-6 sm:p-7 space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-[10px] font-mono uppercase text-[#71717A] tracking-wider">
            [ CLIENT // {project.client} ]
          </span>
          <div className="w-8 h-8 rounded-full bg-[#121218] border border-[#1E1E24] flex items-center justify-center group-hover:border-[#FF9E2C]/60 group-hover:bg-[#FF9E2C] transition-all duration-300">
            <ArrowUpRight className="w-3.5 h-3.5 text-[#A1A1A6] group-hover:text-black transition-colors" />
          </div>
        </div>

        <h3 className="font-extended text-lg sm:text-xl font-bold text-white tracking-wide group-hover:text-[#FF9E2C] transition-colors uppercase">
          {project.title}
        </h3>

        <p className="text-xs text-[#A1A1A6] font-mono line-clamp-2 leading-relaxed">
          {project.summary}
        </p>

        {/* Primary Metric Pill */}
        <div className="pt-3 border-t border-[#141418] flex items-center justify-between text-[11px] font-mono">
          <span className="text-[#71717A]">{project.results[0]?.label}</span>
          <span className="text-[#FF9E2C] font-bold">{project.results[0]?.value}</span>
        </div>
      </div>
    </div>
  );
};
