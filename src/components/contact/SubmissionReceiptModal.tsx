import React, { useState } from 'react';
import { CheckCircle2, MessageCircle, Copy, Check, X, ArrowUpRight, Sparkles } from 'lucide-react';
import { InquiryFormData } from '../../types';
import { companyIdentity } from '../../data/company';

interface SubmissionReceiptModalProps {
  formData: InquiryFormData | null;
  ticketId: string;
  onClose: () => void;
}

export const SubmissionReceiptModal: React.FC<SubmissionReceiptModalProps> = ({
  formData,
  ticketId,
  onClose,
}) => {
  const [copied, setCopied] = useState(false);

  if (!formData) return null;

  const generateWhatsAppMessage = () => {
    const text = `Hello DRS STUDIOS team,\n\nI have submitted project inquiry *${ticketId}*.\n\n*Name:* ${formData.name}\n*Business:* ${formData.businessName}\n*Business Type:* ${formData.businessType}\n*Services:* ${formData.services.join(', ')}\n*Budget Range:* ${formData.estimatedBudget}\n\n*Brief:* ${formData.description}\n\nLooking forward to discussing our collaboration.`;
    return `https://wa.me/${companyIdentity.contact.whatsapp.replace('+', '')}?text=${encodeURIComponent(text)}`;
  };

  const copyBrief = () => {
    const summary = `DRS STUDIOS PROJECT INQUIRY (${ticketId})\nName: ${formData.name}\nBusiness: ${formData.businessName}\nEmail: ${formData.email}\nWhatsApp: ${formData.whatsapp}\nBusiness Type: ${formData.businessType}\nServices: ${formData.services.join(', ')}\nBudget: ${formData.estimatedBudget}\nBrief: ${formData.description}`;
    navigator.clipboard.writeText(summary);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 animate-in fade-in duration-200">
      <div className="fixed inset-0 bg-black/85 backdrop-blur-2xl" onClick={onClose} />

      <div className="relative z-10 w-full max-w-2xl spatial-glass rounded-3xl p-6 sm:p-10 text-white shadow-[0_0_90px_rgba(0,0,0,0.95)]">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full spatial-nav-capsule text-[#A1A1A1] hover:text-white transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2.5 text-xs font-mono uppercase tracking-widest text-[#D98B3A] mb-4">
          <CheckCircle2 className="w-4 h-4 text-[#D98B3A]" />
          <span>Inquiry Successfully Transmitted</span>
        </div>

        <h3 className="font-headline text-2xl sm:text-3xl font-bold tracking-tight text-white mb-2">
          Thank you, {formData.name}.
        </h3>
        <p className="text-xs sm:text-sm text-[#A1A1A1] leading-relaxed mb-6">
          Our senior technical director and creative lead have received your brief. We evaluate every submission individually and respond within 4 hours.
        </p>

        {/* Receipt Ticket Box */}
        <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 mb-6 space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-white/10">
            <div>
              <span className="text-[10px] font-mono uppercase text-[#A1A1A1] block">Reference Ticket</span>
              <span className="font-mono text-sm font-bold text-[#D98B3A]">{ticketId}</span>
            </div>
            <div className="text-right">
              <span className="text-[10px] font-mono uppercase text-[#A1A1A1] block">Response SLA</span>
              <span className="text-xs font-mono text-white">Under 4 Hours</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 text-xs">
            <div>
              <span className="text-[#A1A1A1] block text-[10px] font-mono">Brand:</span>
              <span className="text-white font-medium">{formData.businessName}</span>
            </div>
            <div>
              <span className="text-[#A1A1A1] block text-[10px] font-mono">Sector:</span>
              <span className="text-white font-medium">{formData.businessType}</span>
            </div>
            <div>
              <span className="text-[#A1A1A1] block text-[10px] font-mono">Email:</span>
              <span className="text-white font-medium">{formData.email}</span>
            </div>
            <div>
              <span className="text-[#A1A1A1] block text-[10px] font-mono">WhatsApp:</span>
              <span className="text-white font-medium">{formData.whatsapp}</span>
            </div>
          </div>

          <div className="pt-2">
            <span className="text-[#A1A1A1] block text-[10px] font-mono mb-1.5">Selected Divisions:</span>
            <div className="flex flex-wrap gap-1.5">
              {formData.services.map((svc, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono text-[#D98B3A]"
                >
                  {svc}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Immediate Next Step Buttons */}
        <div className="space-y-3 font-mono">
          <a
            href={generateWhatsAppMessage()}
            target="_blank"
            rel="noreferrer"
            className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-full bg-[#25D366] text-black font-bold text-xs uppercase tracking-wider hover:bg-[#20ba5a] transition-all cursor-pointer shadow-[0_0_25px_rgba(37,211,102,0.3)]"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Connect Immediately On WhatsApp</span>
            <ArrowUpRight className="w-3.5 h-3.5 ml-1 stroke-[2.5]" />
          </a>

          <div className="flex items-center gap-3">
            <button
              onClick={copyBrief}
              className="flex-1 py-3 px-4 rounded-full bg-white/5 border border-white/10 text-xs text-[#A1A1A1] hover:text-white flex items-center justify-center gap-2 transition-colors cursor-pointer"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-[#D98B3A]" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Summary Copied' : 'Copy Brief Summary'}</span>
            </button>

            <button
              onClick={onClose}
              className="px-6 py-3 rounded-full bg-white/5 border border-white/10 text-xs text-white hover:border-[#D98B3A]/40 transition-colors cursor-pointer"
            >
              Done
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
