import React from 'react';
import { X, Check, ArrowUpRight, Clock, Users, Sparkles, Maximize2 } from 'lucide-react';
import { ServiceItem } from '../../types';

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onInquire: (serviceTitle: string) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
  onInquire,
}) => {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 animate-in fade-in duration-200">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/85 backdrop-blur-2xl"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative z-10 w-full max-w-4xl max-h-[92vh] overflow-y-auto spatial-glass rounded-3xl p-6 sm:p-10 text-white shadow-[0_0_90px_rgba(0,0,0,0.95)]">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full spatial-nav-capsule text-[#A1A1A1] hover:text-white transition-colors cursor-pointer"
          aria-label="Close service modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-4">
          <span className="font-mono text-xs uppercase tracking-widest text-[#D98B3A] font-semibold">
            DIVISION {service.number}
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-white/20"></span>
          <span className="text-xs uppercase font-mono tracking-wider text-[#A1A1A1]">
            {service.badge}
          </span>
        </div>

        <h3 className="font-headline text-2xl sm:text-4xl font-bold tracking-tight text-white mb-3 uppercase">
          {service.title}
        </h3>

        <p className="text-base text-[#D4D4D8] font-light leading-relaxed mb-6">
          "{service.description}"
        </p>

        {/* Full 16:9 Unclipped Domain Thumbnail Display (100% visible, no cropped badges) */}
        <div className="mb-8">
          <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden border border-white/15 bg-[#08080C] shadow-[0_20px_50px_rgba(0,0,0,0.85)]">
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-full object-contain sm:object-cover filter brightness-100 contrast-105"
            />
          </div>

          <div className="mt-3 flex items-center justify-between text-xs font-mono text-[#A1A1A1] px-1">
            <span className="text-[#D98B3A] flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D98B3A]" />
              {service.badge}
            </span>
            <span>
              {service.metric.label}: <strong className="text-white">{service.metric.value}</strong>
            </span>
          </div>
        </div>

        {/* Deliverables & Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 pb-8 border-b border-white/10">
          <div>
            <h4 className="text-xs font-mono font-semibold uppercase tracking-[0.2em] text-[#D98B3A] mb-4 flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5" />
              Capabilities Matrix
            </h4>
            <div className="grid grid-cols-1 gap-2.5">
              {service.features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs text-[#CCCCCC]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D98B3A] mt-1.5 shrink-0" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h4 className="text-xs font-mono font-semibold uppercase tracking-[0.2em] text-[#D98B3A] mb-3 flex items-center gap-2">
                <Clock className="w-3.5 h-3.5" />
                Turnaround & Cadence
              </h4>
              <p className="text-xs text-[#A1A1A1] leading-relaxed">
                {service.details.turnaround}
              </p>
            </div>

            <div>
              <h4 className="text-xs font-mono font-semibold uppercase tracking-[0.2em] text-[#D98B3A] mb-3 flex items-center gap-2">
                <Users className="w-3.5 h-3.5" />
                Target Audience Fit
              </h4>
              <div className="flex flex-wrap gap-2">
                {service.details.idealFor.map((item, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] text-[#A1A1A1]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-xs font-mono font-semibold uppercase tracking-[0.2em] text-[#D98B3A] mb-3">
                Milestone Deliverables
              </h4>
              <ul className="space-y-2 text-xs text-[#A1A1A1]">
                {service.details.deliverables.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-[#D98B3A] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Modal Action CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#A1A1A1]">
            Customizable scope available based on your timeline and growth stage.
          </p>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="w-full sm:w-auto px-6 py-3 rounded-full border border-white/15 text-xs text-[#A1A1A1] hover:text-white transition-colors cursor-pointer"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onInquire(service.title);
              }}
              className="w-full sm:w-auto spatial-pill spatial-pill-amber py-3.5 px-7"
            >
              <span>{service.ctaText}</span>
              <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
