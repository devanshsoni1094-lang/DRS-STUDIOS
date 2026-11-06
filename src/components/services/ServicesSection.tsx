import React, { useState } from 'react';
import { servicesData } from '../../data/services';
import { ServiceCard } from './ServiceCard';
import { ServiceDetailModal } from './ServiceDetailModal';
import { ModularConfigurator } from './ModularConfigurator';
import { ServiceItem } from '../../types';

interface ServicesSectionProps {
  onInquireService: (serviceTitle: string) => void;
  onModularScopeBuild: (selectedServices: string[]) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onInquireService,
  onModularScopeBuild,
}) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  return (
    <section id="services" className="py-28 sm:py-36 bg-[#050505] relative overflow-hidden border-b border-[#262626]">
      {/* Subtle background ambient glow */}
      <div className="absolute left-1/4 top-1/2 -translate-y-1/2 w-96 h-96 bg-[#C6A96C]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-6">
          <span className="w-6 h-[1px] bg-[#C6A96C]" />
          <span className="text-xs font-mono tracking-[0.2em] uppercase text-[#DFCA94]">
            06 — COMPLETE DIGITAL ECOSYSTEM
          </span>
        </div>

        <div className="max-w-3xl mb-16">
          <h2 className="font-headline font-light tracking-tight text-white text-3xl sm:text-5xl lg:text-6xl leading-[1.1] uppercase mb-6">
            Five Focused Divisions. <br />
            <span className="gold-gradient-text font-normal">Infinite Creative Scale.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#A1A1A1] font-light leading-relaxed">
            From strategic YouTube growth and high-fashion Instagram curation to bespoke web development and AI-accelerated creative production.
          </p>
        </div>

        {/* Services List */}
        <div className="space-y-4">
          {servicesData.map((service, idx) => (
            <React.Fragment key={service.id}>
              <ServiceCard
                service={service}
                index={idx}
                onSelect={(s) => setSelectedService(s)}
                onInquire={onInquireService}
              />
              {/* Insert the interactive custom configurator right after Service 05 */}
              {service.id === 'complete-digital-management' && (
                <ModularConfigurator onBuildPresence={onModularScopeBuild} />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Service Detail Modal */}
      <ServiceDetailModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onInquire={onInquireService}
      />
    </section>
  );
};
