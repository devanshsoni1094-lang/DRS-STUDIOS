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
        className="fixed inset-0 bg-black/90 backdrop-blur-xl"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative z-10 w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#070709] border border-[#1E1E24] rounded-2xl shadow-[0_0_80px_rgba(0,0,0,0.95)] p-6 sm:p-10 text-white">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full bg-[#121218] border border-[#1E1E24] text-[#A1A1A6] hover:text-white hover:border-[#FF9E2C]/50 transition-colors"
          aria-label="Close service modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-4">
          <span className="font-mono text-xs uppercase tracking-widest text-[#FF9E2C] font-semibold">
            [ DIVISION {service.number} ]
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#1E1E24]"></span>
          <span className="text-xs uppercase font-mono tracking-wider text-[#71717A]">
            {service.badge}
          </span>
        </div>

        <h3 className="font-extended text-2xl sm:text-4xl font-bold tracking-wide text-white mb-4 uppercase">
          {service.title}
        </h3>

        <p className="text-sm sm:text-base text-[#D4D4D8] font-light leading-relaxed mb-6">
          "{service.description}"
        </p>

        {/* Hero Visual Preview */}
        <div className="relative h-64 sm:h-80 w-full rounded-xl overflow-hidden mb-8 border border-[#1E1E24]">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#070709] via-transparent to-transparent opacity-90" />
          <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
            <div className="px-4 py-2 rounded-lg bg-[#030303]/90 border border-[#1E1E24] backdrop-blur-md">
              <span className="block text-[10px] font-mono uppercase text-[#71717A]">Key Metric Impact</span>
              <span className="text-sm font-mono font-bold text-[#FF9E2C]">{service.metric.label}: {service.metric.value}</span>
            </div>
          </div>
        </div>

        {/* Deliverables & Capabilities */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 pb-8 border-b border-[#1E1E24]">
          <div>
            <h4 className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#FF9E2C] mb-4 flex items-center gap-2">
              <span>+ + +</span>
              Capabilities Matrix
            </h4>
            <div className="grid grid-cols-1 gap-2.5">
              {service.features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs font-mono text-[#D4D4D8]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FF9E2C] mt-1.5 shrink-0" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h4 className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#FF9E2C] mb-3 flex items-center gap-2">
                <Clock className="w-3.5 h-3.5" />
                Turnaround & Cadence
              </h4>
              <p className="text-xs font-mono text-[#A1A1A6] leading-relaxed">
                {service.details.turnaround}
              </p>
            </div>

            <div>
              <h4 className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#FF9E2C] mb-3 flex items-center gap-2">
                <Users className="w-3.5 h-3.5" />
                Target Audience Fit
              </h4>
              <div className="flex flex-wrap gap-2">
                {service.details.idealFor.map((item, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded-sm bg-[#121218] border border-[#1E1E24] text-[10px] font-mono text-[#A1A1A6]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#FF9E2C] mb-3">
                Milestone Deliverables
              </h4>
              <ul className="space-y-2 text-xs font-mono text-[#A1A1A6]">
                {service.details.deliverables.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-[#FF9E2C] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Modal Action CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs font-mono text-[#71717A]">
            Customizable scope available based on your timeline and growth stage.
          </p>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="w-full sm:w-auto px-5 py-3 rounded-full border border-[#1E1E24] text-xs font-mono text-[#A1A1A6] hover:text-white transition-colors cursor-pointer"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onInquire(service.title);
              }}
              className="w-full sm:w-auto echo-pill echo-pill-primary py-3.5 px-6"
            >
              <span>{service.ctaText}</span>
              <span className="font-bold">&gt;</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
