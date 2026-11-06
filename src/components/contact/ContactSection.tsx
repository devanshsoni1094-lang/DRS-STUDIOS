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
    <section id="contact" className="py-28 sm:py-36 bg-[#050505] relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute right-10 bottom-10 w-96 h-96 bg-[#C6A96C]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Section Tag */}
        <div className="flex items-center gap-3 mb-6">
          <span className="w-6 h-[1px] bg-[#C6A96C]" />
          <span className="text-xs font-mono tracking-[0.2em] uppercase text-[#DFCA94]">
            10 — CONTACT & PROJECT INQUIRY
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Context, Direct Links & Authority (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <h2 className="font-headline font-light tracking-tight text-white text-3xl sm:text-5xl lg:text-6xl leading-[1.08] uppercase mb-6">
                Let's Build <br />
                Your Digital <br />
                <span className="gold-gradient-text font-normal">Presence.</span>
              </h2>

              <p className="text-base text-[#CCCCCC] font-light leading-relaxed">
                Tell us about your business, your vision, and what you want to achieve. Let's create something meaningful together.
              </p>
            </div>

            {/* Direct Instant Action Cards */}
            <div className="space-y-4 pt-4">
              {/* WhatsApp Concierge */}
              <a
                href={directWhatsAppUrl}
                target="_blank"
                rel="noreferrer"
                className="p-5 rounded-sm bg-[#101010] border border-[#262626] hover:border-[#25D366]/50 transition-all duration-300 flex items-center justify-between group cursor-pointer block"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-sm bg-[#1A1A1A] border border-[#262626] flex items-center justify-center group-hover:border-[#25D366]/50 transition-colors">
                    <MessageCircle className="w-5 h-5 text-[#25D366]" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase text-[#A1A1A1] block">Instant Chat</span>
                    <span className="text-sm font-medium text-white group-hover:text-[#25D366] transition-colors">
                      WhatsApp Studio Concierge
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#A1A1A1] group-hover:text-[#25D366] transition-colors" />
              </a>

              {/* Direct Email */}
              <a
                href={`mailto:${companyIdentity.contact.email}`}
                className="p-5 rounded-sm bg-[#101010] border border-[#262626] hover:border-[#C6A96C]/50 transition-all duration-300 flex items-center justify-between group cursor-pointer block"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-sm bg-[#1A1A1A] border border-[#262626] flex items-center justify-center group-hover:border-[#C6A96C]/50 transition-colors">
                    <Mail className="w-5 h-5 text-[#C6A96C]" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase text-[#A1A1A1] block">Direct Executive Inbox</span>
                    <span className="text-sm font-medium text-white group-hover:text-[#DFCA94] transition-colors">
                      {companyIdentity.contact.email}
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#A1A1A1] group-hover:text-[#C6A96C] transition-colors" />
              </a>
            </div>

            {/* Credibility & SLA Guarantee Box */}
            <div className="p-6 rounded-sm bg-[#101010] border border-[#262626] space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono uppercase text-[#DFCA94]">
                <Clock className="w-4 h-4 text-[#C6A96C]" />
                <span>Rapid Response SLA</span>
              </div>
              <p className="text-xs text-[#A1A1A1] leading-relaxed">
                Every project inquiry is personally evaluated by our technical and creative partners. You will receive an initial diagnostic and consultation schedule within 4 hours.
              </p>
              <div className="pt-2 border-t border-[#1C1C1C] flex items-center gap-2 text-[11px] text-[#A1A1A1]">
                <MapPin className="w-3.5 h-3.5 text-[#C6A96C]" />
                <span>{companyIdentity.contact.location}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Functional Inquiry Form (7 cols) */}
          <div className="lg:col-span-7 p-8 sm:p-10 lg:p-12 rounded-sm bg-[#0E0E0E] border border-[#262626] shadow-2xl">
            <div className="mb-8 pb-6 border-b border-[#262626]">
              <span className="text-xs font-mono uppercase tracking-widest text-[#C6A96C] block mb-1">
                Project Intake
              </span>
              <h3 className="font-headline text-2xl font-light text-white uppercase tracking-tight">
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
