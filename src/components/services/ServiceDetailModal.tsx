import React from 'react';
import { X, Check, ArrowUpRight, Clock, Users, Sparkles } from 'lucide-react';
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
        className="fixed inset-0 bg-black/85 backdrop-blur-md"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative z-10 w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#0C0C0C] border border-[#262626] rounded-sm shadow-2xl p-6 sm:p-10 text-white">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-sm bg-[#161616] border border-[#262626] text-[#A1A1A1] hover:text-white hover:border-[#C6A96C]/50 transition-colors"
          aria-label="Close service modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-4">
          <span className="font-mono text-xs uppercase tracking-widest text-[#C6A96C]">
            SERVICE {service.number}
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#262626]"></span>
          <span className="text-xs uppercase tracking-wider text-[#A1A1A1]">
            {service.badge}
          </span>
        </div>

        <h3 className="font-headline text-2xl sm:text-4xl font-light tracking-tight text-white mb-4">
          {service.title}
        </h3>

        <p className="text-base text-[#DFCA94] font-light leading-relaxed mb-6">
          "{service.description}"
        </p>

        {/* Hero Visual Preview */}
        <div className="relative h-64 sm:h-80 w-full rounded-sm overflow-hidden mb-8 border border-[#262626]">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0C0C0C] via-transparent to-transparent opacity-80" />
          <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
            <div className="px-4 py-2 rounded-sm bg-[#050505]/90 border border-[#262626] backdrop-blur-md">
              <span className="block text-[10px] font-mono uppercase text-[#A1A1A1]">Key Impact</span>
              <span className="text-sm font-semibold text-white">{service.metric.label}: {service.metric.value}</span>
            </div>
          </div>
        </div>

        {/* Deliverables & Capabilities */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 pb-8 border-b border-[#262626]">
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C6A96C] mb-4 flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5" />
              Comprehensive Capabilities
            </h4>
            <div className="grid grid-cols-1 gap-2.5">
              {service.features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs text-[#CCCCCC]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C6A96C] mt-1.5 shrink-0" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C6A96C] mb-3 flex items-center gap-2">
                <Clock className="w-3.5 h-3.5" />
                Turnaround & Cadence
              </h4>
              <p className="text-xs text-[#A1A1A1] leading-relaxed">
                {service.details.turnaround}
              </p>
            </div>

            <div>
              <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C6A96C] mb-3 flex items-center gap-2">
                <Users className="w-3.5 h-3.5" />
                Ideal For
              </h4>
              <div className="flex flex-wrap gap-2">
                {service.details.idealFor.map((item, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded-sm bg-[#161616] border border-[#262626] text-[11px] text-[#A1A1A1]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C6A96C] mb-3">
                Key Deliverables
              </h4>
              <ul className="space-y-2 text-xs text-[#A1A1A1]">
                {service.details.deliverables.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-[#C6A96C] shrink-0 mt-0.5" />
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
              className="w-full sm:w-auto px-5 py-3 rounded-sm border border-[#262626] text-xs text-[#A1A1A1] hover:text-white transition-colors cursor-pointer"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onInquire(service.title);
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#C6A96C] text-black font-semibold text-xs uppercase tracking-wider rounded-sm hover:bg-[#DFCA94] transition-all cursor-pointer shadow-[0_0_20px_rgba(198,169,108,0.25)]"
            >
              <span>{service.ctaText}</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
