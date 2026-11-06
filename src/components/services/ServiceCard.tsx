import React from 'react';
import { ArrowUpRight, Check, Sparkles } from 'lucide-react';
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
    <div className="py-12 sm:py-16">
      {/* Spatial Glass Container Panel */}
      <div className="spatial-glass rounded-3xl p-8 sm:p-12 lg:p-14 relative overflow-hidden">
        
        {/* Ambient Warm Amber Light Bloom in Card Corner */}
        <div className={`absolute top-0 w-80 h-80 bg-[#D98B3A]/10 rounded-full blur-[100px] pointer-events-none ${
          isEven ? 'right-0' : 'left-0'
        }`} />

        <div
          className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center relative z-10 ${
            isEven ? 'lg:flex-row-reverse' : ''
          }`}
        >
          {/* Visual Column (5 cols) */}
          <div
            className={`lg:col-span-5 relative group cursor-pointer ${
              isEven ? 'lg:order-2' : 'lg:order-1'
            }`}
            onClick={() => onSelect(service)}
          >
            <div className="relative h-72 sm:h-96 w-full rounded-2xl overflow-hidden border border-white/15 bg-[#0A0A0E] shadow-[0_20px_50px_rgba(0,0,0,0.8)] transition-all duration-500 group-hover:border-[#D98B3A]/60 group-hover:shadow-[0_20px_60px_rgba(217,139,58,0.25)]">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 filter brightness-95 contrast-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/30 to-transparent" />

              {/* Floating Glass Pill Badge */}
              <div className="absolute top-4 left-4">
                <span className="px-3.5 py-1.5 rounded-full spatial-nav-capsule text-[10px] font-mono uppercase tracking-widest text-[#C6A96C]">
                  DIVISION {service.number}
                </span>
              </div>

              {/* Bottom Glass Metric Pill */}
              <div className="absolute bottom-5 left-5 right-5 p-3.5 rounded-xl spatial-nav-capsule flex items-center justify-between">
                <div>
                  <span className="block text-[10px] font-mono uppercase text-[#A1A1A1]">
                    {service.metric.label}
                  </span>
                  <span className="text-sm font-semibold text-white tracking-wide">
                    {service.metric.value}
                  </span>
                </div>
                <span className="text-xs text-[#D98B3A] font-medium group-hover:translate-x-1 transition-transform">
                  Explore &rarr;
                </span>
              </div>
            </div>
          </div>

          {/* Content Column (7 cols) */}
          <div
            className={`lg:col-span-7 space-y-6 ${
              isEven ? 'lg:order-1' : 'lg:order-2'
            }`}
          >
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono tracking-widest text-[#D98B3A] font-semibold">
                {service.badge}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
              <span className="text-xs font-mono text-[#A1A1A1]">
                [ 0{index + 1} // 05 ]
              </span>
            </div>

            <h3 className="font-headline text-2xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight uppercase">
              {service.title}
            </h3>

            <p className="text-sm sm:text-base text-[#D4D4D8] font-light leading-relaxed">
              "{service.description}"
            </p>

            {/* Capabilities Matrix */}
            <div className="pt-2">
              <h4 className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#C6A96C] mb-3 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#D98B3A]" />
                Deliverable Framework
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-xs text-[#A1A1A1]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D98B3A] shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Glass CTA Actions */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
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
                <span>View Full Specifications</span>
                <span className="text-[#C6A96C]">&rarr;</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
