import React from 'react';
import { ArrowUpRight, Check, Sparkles, Maximize2 } from 'lucide-react';
import { ServiceItem } from '../../types';

interface ServiceCardProps {
  service: ServiceItem;
  index: number;
  onSelect: (service: ServiceItem) => void;
  onInquire: (serviceTitle: string) => void;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  service,
  index,
  onSelect,
  onInquire,
}) => {
  const isEven = index % 2 === 1;

  return (
    <div className="py-8 sm:py-12">
      {/* Spatial Glass Container Panel with Refined Editorial Spacing */}
      <div className="spatial-glass rounded-3xl p-6 sm:p-10 lg:p-12 relative overflow-hidden">
        
        {/* Subtle Ambient Light Bloom */}
        <div
          className={`absolute top-0 w-96 h-96 bg-[#D98B3A]/10 rounded-full blur-[130px] pointer-events-none ${
            isEven ? 'right-0' : 'left-0'
          }`}
        />

        <div
          className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10 ${
            isEven ? 'lg:flex-row-reverse' : ''
          }`}
        >
          {/* Visual Column (6 cols for generous width and 100% unclipped visibility) */}
          <div
            className={`lg:col-span-6 relative group cursor-pointer ${
              isEven ? 'lg:order-2' : 'lg:order-1'
            }`}
            onClick={() => onSelect(service)}
          >
            {/* Pure 16:9 Aspect Ratio Frame — Matches 1024x576 exactly so 0% of the graphic is cut */}
            <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden border border-white/15 bg-[#08080C] shadow-[0_20px_50px_rgba(0,0,0,0.85)] transition-all duration-500 group-hover:border-[#D98B3A]/70 group-hover:shadow-[0_20px_60px_rgba(217,139,58,0.3)]">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-contain sm:object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02] filter brightness-100 contrast-105"
                loading="lazy"
              />

              {/* Click to Expand Hover Indicator */}
              <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="px-3 py-1.5 rounded-full spatial-nav-capsule flex items-center gap-1.5 text-[10px] font-mono text-[#D98B3A]">
                  <Maximize2 className="w-3 h-3" />
                  <span>View Full Graphic</span>
                </div>
              </div>
            </div>

            {/* Below Image Metadata Strip */}
            <div className="mt-3.5 flex items-center justify-between text-[11px] font-mono px-1">
              <div className="flex items-center gap-2 text-[#D98B3A]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D98B3A] animate-pulse" />
                <span>{service.badge}</span>
              </div>
              <span className="text-[#A1A1A1]">
                {service.metric.label}: <strong className="text-white">{service.metric.value}</strong>
              </span>
            </div>
          </div>

          {/* Content Column (6 cols) with Generous Breathing Room */}
          <div
            className={`lg:col-span-6 space-y-6 ${
              isEven ? 'lg:order-1' : 'lg:order-2'
            }`}
          >
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono tracking-widest text-[#D98B3A] font-semibold">
                DIVISION {service.number}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
              <span className="text-xs font-mono text-[#A1A1A1]">
                [ 0{index + 1} // 05 ]
              </span>
            </div>

            <h3 className="font-headline text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight uppercase">
              {service.title}
            </h3>

            <p className="text-sm sm:text-base text-[#D4D4D8] font-light leading-relaxed">
              "{service.description}"
            </p>

            {/* Capabilities Matrix with Balanced Rhythm */}
            <div className="pt-2">
              <h4 className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#C6A96C] mb-3.5 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#D98B3A]" />
                Deliverable Framework
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-2.5">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-xs text-[#A1A1A1]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D98B3A] shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Glass CTA Actions with Balanced Spacing */}
            <div className="pt-3 flex flex-wrap items-center gap-4">
              <button
                onClick={() => onInquire(service.title)}
                className="spatial-pill spatial-pill-amber py-3 px-7 text-xs font-semibold text-black"
              >
                <span>{service.ctaText}</span>
                <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
              </button>

              <button
                onClick={() => onSelect(service)}
                className="spatial-pill py-3 px-6 text-xs text-white"
              >
                <span>View Full Scope</span>
                <span className="text-[#C6A96C]">&rarr;</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
