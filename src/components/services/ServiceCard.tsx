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
    <div className="py-16 sm:py-20 border-b border-[#1E1E24] last:border-b-0">
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
          <div className="relative h-80 sm:h-96 w-full rounded-2xl overflow-hidden border border-[#1E1E24] bg-[#070709] transition-all duration-500 group-hover:border-[#FF9E2C]/60 group-hover:shadow-[0_0_35px_rgba(255,158,44,0.25)]">
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-full object-cover grayscale contrast-125 transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-[#030303]/40 to-transparent" />

            {/* Corner Tech Brackets */}
            <div className="absolute top-3 left-3 text-[10px] font-mono text-[#FF9E2C]/70">
              [ 0{index + 1} // DIV ]
            </div>

            {/* Floating Metric Pill */}
            <div className="absolute bottom-5 left-5 right-5 p-3.5 rounded-xl bg-[#08080C]/90 backdrop-blur-md border border-[#1E1E24] flex items-center justify-between">
              <div>
                <span className="block text-[10px] font-mono uppercase text-[#71717A]">
                  {service.metric.label}
                </span>
                <span className="text-sm font-bold font-mono text-white tracking-wide">
                  {service.metric.value}
                </span>
              </div>
              <span className="text-xs text-[#FF9E2C] font-mono group-hover:translate-x-1 transition-transform">
                EXPLORE &rarr;
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
            <span className="font-mono text-xs tracking-widest text-[#FF9E2C] font-semibold">
              DIVISION {service.number}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#1E1E24]" />
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#71717A]">
              [ {service.badge} ]
            </span>
          </div>

          <h3 className="font-extended text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-wide uppercase">
            {service.title}
          </h3>

          <p className="text-sm sm:text-base text-[#D4D4D8] font-light leading-relaxed">
            "{service.description}"
          </p>

          {/* Capabilities Grid */}
          <div className="pt-2">
            <h4 className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#A1A1A6] mb-3 flex items-center gap-2">
              <span className="text-[#FF9E2C]">+ + +</span>
              Core System Capabilities
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2.5">
              {service.features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs font-mono text-[#A1A1AA]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FF9E2C] shrink-0" />
                  <span className="truncate">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Actions with Pill Styling */}
          <div className="pt-4 flex flex-wrap items-center gap-4">
            <button
              onClick={() => onInquire(service.title)}
              className="echo-pill py-3 px-6 text-xs text-white"
            >
              <span>{service.ctaText}</span>
              <span className="text-[#FF9E2C] font-bold">&gt;</span>
            </button>

            <button
              onClick={() => onSelect(service)}
              className="text-xs font-mono uppercase tracking-wider text-[#71717A] hover:text-[#FF9E2C] transition-colors py-2 px-3 cursor-pointer"
            >
              View Full Scope & Turnaround &rarr;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
