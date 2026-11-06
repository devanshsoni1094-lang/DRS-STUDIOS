import React from 'react';
import { ProjectInquiryForm } from './ProjectInquiryForm';
import { companyIdentity } from '../../data/company';
import { Mail, MessageCircle, MapPin, Clock, ArrowUpRight, Sparkles } from 'lucide-react';

interface ContactSectionProps {
  initialServices?: string[];
  initialContext?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  initialServices,
  initialContext,
}) => {
  const directWhatsAppUrl = `https://wa.me/${companyIdentity.contact.whatsapp.replace('+', '')}?text=${encodeURIComponent(
    'Hello DRS STUDIOS, I would like to explore an extraordinary digital collaboration for my brand.'
  )}`;

  return (
    <section id="contact" data-section-name="CONTACT & INQUIRY" className="py-28 sm:py-36 bg-[#050505] relative overflow-hidden">
      {/* Background warm amber blooms */}
      <div className="absolute right-10 bottom-10 w-[550px] h-[550px] bg-[#D98B3A]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Tag */}
        <div className="flex items-center gap-3 mb-6">
          <span className="w-8 h-[2px] bg-gradient-to-r from-[#D98B3A] to-[#C6A96C]" />
          <span className="text-xs font-mono tracking-[0.2em] uppercase text-[#D98B3A]">
            11 // SPATIAL GLASS CONTACT
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <h2 className="font-headline font-bold text-white text-3xl sm:text-5xl lg:text-6xl leading-[1.08] uppercase mb-6">
                Let's Create <br />
                Something <br />
                <span className="gold-gradient-text">Extraordinary.</span>
              </h2>

              <p className="text-base text-[#A1A1A1] font-light leading-relaxed">
                Tell us about your brand, your objectives, and what you want to achieve. Let's design and engineer an unforgettable digital presence together.
              </p>
            </div>

            {/* Direct Instant Action Glass Cards */}
            <div className="space-y-4 pt-2">
              {/* WhatsApp Concierge */}
              <a
                href={directWhatsAppUrl}
                target="_blank"
                rel="noreferrer"
                className="spatial-glass rounded-2xl p-5 flex items-center justify-between group cursor-pointer block hover:border-[#25D366]/50"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-[#25D366]/50 transition-colors">
                    <MessageCircle className="w-5 h-5 text-[#25D366]" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase text-[#A1A1A1] block">Instant Chat Protocol</span>
                    <span className="text-sm font-semibold text-white group-hover:text-[#25D366] transition-colors">
                      WhatsApp Studio Concierge
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#A1A1A1] group-hover:text-[#25D366] transition-colors" />
              </a>

              {/* Direct Email */}
              <a
                href={`mailto:${companyIdentity.contact.email}`}
                className="spatial-glass rounded-2xl p-5 flex items-center justify-between group cursor-pointer block hover:border-[#D98B3A]/50"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-[#D98B3A]/50 transition-colors">
                    <Mail className="w-5 h-5 text-[#D98B3A]" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase text-[#A1A1A1] block">Direct Executive Inbox</span>
                    <span className="text-sm font-semibold text-white group-hover:text-[#C6A96C] transition-colors">
                      {companyIdentity.contact.email}
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#A1A1A1] group-hover:text-[#D98B3A] transition-colors" />
              </a>
            </div>

            {/* Credibility & SLA Guarantee Box */}
            <div className="spatial-glass rounded-2xl p-6 space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono uppercase text-[#D98B3A]">
                <Clock className="w-4 h-4" />
                <span>Response SLA: Under 4 Hours</span>
              </div>
              <p className="text-xs text-[#A1A1A1] leading-relaxed">
                Every brief is personally evaluated by our technical partners and creative director. You will receive an initial diagnostic and consultation schedule within 4 hours.
              </p>
              <div className="pt-2 border-t border-white/10 flex items-center gap-2 text-[11px] text-[#A1A1A1]">
                <MapPin className="w-3.5 h-3.5 text-[#D98B3A]" />
                <span>{companyIdentity.contact.location}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Spatial Glass Form Container (7 cols) */}
          <div className="lg:col-span-7 spatial-glass rounded-3xl p-8 sm:p-10 lg:p-12">
            <div className="mb-8 pb-6 border-b border-white/10">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#D98B3A] block mb-1">
                PROJECT INTAKE
              </span>
              <h3 className="font-headline text-2xl font-bold text-white uppercase tracking-tight">
                Submit Your Project Brief
              </h3>
            </div>

            <ProjectInquiryForm
              initialServices={initialServices}
              initialContext={initialContext}
            />
          </div>

        </div>
      </div>
    </section>
  );
};
