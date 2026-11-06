import React, { useState } from 'react';
import { servicesData } from '../../data/services';
import { ServiceCard } from './ServiceCard';
import { ServiceDetailModal } from './ServiceDetailModal';
import { ModularConfigurator } from './ModularConfigurator';
import { ServiceItem } from '../../types';
import { Sparkles } from 'lucide-react';

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
    <section id="services" data-section-name="DIGITAL SERVICES" className="py-28 sm:py-36 bg-[#050505] relative overflow-hidden border-b border-white/10">
      {/* Background ambient lighting */}
      <div className="absolute left-1/4 top-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-[#D98B3A]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-6">
          <span className="w-8 h-[2px] bg-gradient-to-r from-[#D98B3A] to-[#C6A96C]" />
          <span className="text-xs font-mono tracking-[0.2em] uppercase text-[#D98B3A]">
            07 // FLOATING GLASS ECOSYSTEM
          </span>
        </div>

        <div className="max-w-3xl mb-16">
          <h2 className="font-headline font-bold text-white text-3xl sm:text-5xl lg:text-6xl leading-[1.08] uppercase mb-6">
            Our Digital <br />
            <span className="gold-gradient-text">Ecosystem.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#A1A1A1] font-light leading-relaxed">
            Five synchronized divisions operating within a singular spatial framework: from high-authority YouTube channel curation to bespoke web flagships and generative AI production.
          </p>
        </div>

        {/* Services List with Floating Spatial Glass Cards */}
        <div className="space-y-6">
          {servicesData.map((service, idx) => (
            <React.Fragment key={service.id}>
              <ServiceCard
                service={service}
                index={idx}
                onSelect={(s) => setSelectedService(s)}
                onInquire={onInquireService}
              />
              {/* Flagship Section 10 Embedded right after Service 05 */}
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
