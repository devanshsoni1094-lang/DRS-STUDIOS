import React from 'react';
import { ProjectInquiryForm } from './ProjectInquiryForm';
import { companyIdentity } from '../../data/company';
import { Mail, MessageCircle, MapPin, Clock, ArrowUpRight, ShieldCheck } from 'lucide-react';

interface ContactSectionProps {
  initialServices?: string[];
  initialContext?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  initialServices,
  initialContext,
}) => {
  const directWhatsAppUrl = `https://wa.me/${companyIdentity.contact.whatsapp.replace('+', '')}?text=${encodeURIComponent(
    'Hello DRS STUDIOS, I would like to explore a project collaboration for my brand.'
  )}`;

  return (
    <section id="contact" className="py-28 sm:py-36 bg-[#030303] relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute right-10 bottom-10 w-96 h-96 bg-[#FF9E2C]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Section Tag */}
        <div className="flex items-center gap-3 mb-6">
          <span className="text-[#FF9E2C] font-mono text-xs font-bold">+ + +</span>
          <span className="text-xs font-mono tracking-[0.2em] uppercase text-[#FF9E2C]">
            10 // CONTACT & PROJECT INTAKE
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <h2 className="font-extended text-3xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-wide text-white leading-tight mb-6">
                Let's Build <br />
                Your Digital <br />
                <span className="text-[#FF9E2C]">Presence.</span>
              </h2>

              <p className="text-sm sm:text-base text-[#A1A1A6] font-mono leading-relaxed">
                Tell us about your brand, your targets, and what you aim to achieve. Let's create an unforgettable digital footprint together.
              </p>
            </div>

            {/* Direct Instant Action Cards */}
            <div className="space-y-4 pt-2">
              {/* WhatsApp Concierge */}
              <a
                href={directWhatsAppUrl}
                target="_blank"
                rel="noreferrer"
                className="p-5 rounded-2xl bg-[#070709] border border-[#1E1E24] hover:border-[#25D366]/50 transition-all duration-300 flex items-center justify-between group cursor-pointer block shadow-[0_0_20px_rgba(0,0,0,0.6)]"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#101016] border border-[#1E1E24] flex items-center justify-center group-hover:border-[#25D366]/50 transition-colors">
                    <MessageCircle className="w-5 h-5 text-[#25D366]" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase text-[#71717A] block">Instant Chat Protocol</span>
                    <span className="text-sm font-mono font-semibold text-white group-hover:text-[#25D366] transition-colors">
                      WhatsApp Studio Concierge
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#71717A] group-hover:text-[#25D366] transition-colors" />
              </a>

              {/* Direct Email */}
              <a
                href={`mailto:${companyIdentity.contact.email}`}
                className="p-5 rounded-2xl bg-[#070709] border border-[#1E1E24] hover:border-[#FF9E2C]/50 transition-all duration-300 flex items-center justify-between group cursor-pointer block shadow-[0_0_20px_rgba(0,0,0,0.6)]"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#101016] border border-[#1E1E24] flex items-center justify-center group-hover:border-[#FF9E2C]/50 transition-colors">
                    <Mail className="w-5 h-5 text-[#FF9E2C]" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase text-[#71717A] block">Direct Executive Inbox</span>
                    <span className="text-sm font-mono font-semibold text-white group-hover:text-[#FF9E2C] transition-colors">
                      {companyIdentity.contact.email}
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#71717A] group-hover:text-[#FF9E2C] transition-colors" />
              </a>
            </div>

            {/* Credibility & SLA Guarantee Box */}
            <div className="p-6 rounded-2xl bg-[#070709] border border-[#1E1E24] space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono uppercase text-[#FF9E2C]">
                <Clock className="w-4 h-4" />
                <span>Response SLA: Under 4 Hours</span>
              </div>
              <p className="text-xs font-mono text-[#71717A] leading-relaxed">
                Every brief is personally evaluated by our technical partners and creative director. You will receive an initial diagnostic and consultation schedule within 4 hours.
              </p>
              <div className="pt-2 border-t border-[#141418] flex items-center gap-2 text-[11px] font-mono text-[#71717A]">
                <MapPin className="w-3.5 h-3.5 text-[#FF9E2C]" />
                <span>{companyIdentity.contact.location}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Project Inquiry Form (7 cols) */}
          <div className="lg:col-span-7 p-8 sm:p-10 lg:p-12 rounded-2xl bg-[#070709] border border-[#1E1E24] shadow-[0_0_60px_rgba(0,0,0,0.9)]">
            <div className="mb-8 pb-6 border-b border-[#1E1E24]">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#FF9E2C] block mb-1">
                [ PROTOCOL // PROJECT INTAKE ]
              </span>
              <h3 className="font-extended text-xl sm:text-2xl font-bold text-white uppercase tracking-wide">
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
