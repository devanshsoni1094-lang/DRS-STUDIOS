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
    <div className="py-16 sm:py-20 border-b border-[#262626] last:border-b-0">
      <div
        className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center ${
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
          <div className="relative h-80 sm:h-96 w-full rounded-sm overflow-hidden border border-[#262626] bg-[#101010] transition-all duration-500 group-hover:border-[#C6A96C]/60 group-hover:shadow-[0_0_30px_rgba(198,169,108,0.15)]">
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-full object-cover grayscale contrast-125 transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/30 to-transparent" />

            {/* Floating Metric Pill */}
            <div className="absolute bottom-5 left-5 right-5 p-3 rounded-sm bg-[#0C0C0C]/90 backdrop-blur-md border border-[#262626] flex items-center justify-between">
              <div>
                <span className="block text-[10px] font-mono uppercase text-[#A1A1A1]">
                  {service.metric.label}
                </span>
                <span className="text-sm font-semibold text-white tracking-wide">
                  {service.metric.value}
                </span>
              </div>
              <span className="text-[11px] text-[#C6A96C] font-mono group-hover:translate-x-1 transition-transform">
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
            <span className="font-mono text-sm tracking-widest text-[#C6A96C] font-medium">
              SERVICE {service.number}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#262626]" />
            <span className="text-xs uppercase tracking-widest text-[#A1A1A1]">
              {service.badge}
            </span>
          </div>

          <h3 className="font-headline text-2xl sm:text-4xl lg:text-5xl font-light text-white tracking-tight uppercase">
            {service.title}
          </h3>

          <p className="text-sm sm:text-base text-[#CCCCCC] font-light leading-relaxed">
            "{service.description}"
          </p>

          {/* Capabilities Grid */}
          <div className="pt-2">
            <h4 className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#A1A1A1] mb-3 flex items-center gap-1.5">
              <Sparkles className="w-3 h-3 text-[#C6A96C]" />
              Core Capabilities
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-2 gap-x-4 gap-y-2">
              {service.features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs text-[#A1A1A1]">
                  <span className="w-1 h-1 rounded-full bg-[#C6A96C] shrink-0" />
                  <span className="truncate">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Actions */}
          <div className="pt-4 flex flex-wrap items-center gap-4">
            <button
              onClick={() => onInquire(service.title)}
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#101010] border border-[#C6A96C]/50 text-white hover:bg-[#C6A96C] hover:text-black font-semibold text-xs tracking-[0.16em] uppercase rounded-sm transition-all duration-300 group cursor-pointer shadow-[0_0_20px_rgba(198,169,108,0.15)]"
            >
              <span>{service.ctaText}</span>
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>

            <button
              onClick={() => onSelect(service)}
              className="text-xs font-mono uppercase tracking-wider text-[#A1A1A1] hover:text-[#C6A96C] transition-colors py-2 px-3 cursor-pointer"
            >
              View Full Scope & Turnaround &rarr;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
