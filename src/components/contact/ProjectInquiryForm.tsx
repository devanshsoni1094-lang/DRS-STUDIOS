import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Send, Check, AlertCircle, Sparkles } from 'lucide-react';
import { InquiryFormData } from '../../types';
import { SubmissionReceiptModal } from './SubmissionReceiptModal';

interface ProjectInquiryFormProps {
  initialServices?: string[];
  initialContext?: string;
}

export const ProjectInquiryForm: React.FC<ProjectInquiryFormProps> = ({
  initialServices = [],
  initialContext = '',
}) => {
  const [formData, setFormData] = useState<InquiryFormData>({
    name: '',
    businessName: '',
    email: '',
    whatsapp: '',
    businessType: 'E-commerce & D2C',
    services: initialServices.length > 0 ? initialServices : ['Website Development'],
    estimatedBudget: '₹50,000 – ₹1,00,000 (Standard Retainer)',
    description: initialContext || '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof InquiryFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState<InquiryFormData | null>(null);
  const [ticketId, setTicketId] = useState('');

  // Update services when prop changes from other components
  useEffect(() => {
    if (initialServices.length > 0) {
      setFormData((prev) => ({
        ...prev,
        services: Array.from(new Set([...prev.services, ...initialServices])),
      }));
    }
  }, [initialServices]);

  // Update description when prop changes
  useEffect(() => {
    if (initialContext) {
      setFormData((prev) => ({
        ...prev,
        description: prev.description
          ? `${prev.description}\n\n[Context: ${initialContext}]`
          : `Inquiry regarding: ${initialContext}`,
      }));
    }
  }, [initialContext]);

  const availableServices = [
    'YouTube Management',
    'Instagram Management',
    'Website Development',
    'Creative Production Studio',
    'Complete Digital Management',
    'Brand Identity Design',
    'AI Image & Video Generation',
  ];

  const businessTypes = [
    'E-commerce & D2C Brand',
    'Fashion & Jewellery Maison',
    'Tech Startup / SaaS',
    'Content Creator / Personal Brand',
    'Professional Service Firm',
    'Local / Growing Business',
    'Other Specialized Industry',
  ];

  const budgetTiers = [
    'Under ₹25,000 (Starter / Fast Sprint)',
    '₹25,000 – ₹50,000 (Growth Setup / Essential Build)',
    '₹50,000 – ₹1,00,000 (Standard Retainer / Flagship Build)',
    '₹1,00,000 – ₹2,50,000 (Comprehensive Multi-Division Ecosystem)',
    '₹2,50,000+ (Full Enterprise / Super Package Retainer)',
    'Flexible / Scope To Be Discussed',
  ];

  const toggleService = (service: string) => {
    setFormData((prev) => {
      const exists = prev.services.includes(service);
      if (exists) {
        if (prev.services.length === 1) return prev; // Keep at least one
        return { ...prev, services: prev.services.filter((s) => s !== service) };
      } else {
        return { ...prev, services: [...prev.services, service] };
      }
    });
  };

  const validate = (): boolean => {
    const errs: Partial<Record<keyof InquiryFormData, string>> = {};
    if (!formData.name.trim()) errs.name = 'Please provide your full name.';
    if (!formData.businessName.trim()) errs.businessName = 'Please provide your business or brand name.';
    if (!formData.email.trim() || !formData.email.includes('@')) {
      errs.email = 'Please provide a valid business email address.';
    }
    if (!formData.whatsapp.trim() || formData.whatsapp.length < 8) {
      errs.whatsapp = 'Please provide a valid WhatsApp number with country code.';
    }
    if (formData.services.length === 0) {
      errs.services = 'Please select at least one interested service.';
    }
    if (!formData.description.trim() || formData.description.length < 10) {
      errs.description = 'Please provide a brief outline of your goals and requirements.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    const generatedId = `DRS-2026-${Math.floor(1000 + Math.random() * 9000)}`;

    setTimeout(() => {
      try {
        const history = JSON.parse(localStorage.getItem('drs_inquiries') || '[]');
        history.push({ id: generatedId, timestamp: new Date().toISOString(), ...formData });
        localStorage.setItem('drs_inquiries', JSON.stringify(history));
      } catch (err) {
        // Fallback silently if storage unavailable
      }

      setIsSubmitting(false);
      setTicketId(generatedId);
      setSubmittedData({ ...formData });
    }, 700);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-7" noValidate>
        {/* Name & Business Name */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className="block text-xs font-mono uppercase tracking-wider text-[#A1A1A1] mb-2">
              Your Name *
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="e.g. Vikramaditya Sharma"
              className={`w-full px-4 py-3.5 rounded-2xl bg-white/[0.04] border text-white text-sm focus:outline-none transition-colors backdrop-blur-md ${
                errors.name ? 'border-red-500/80 focus:border-red-500' : 'border-white/10 focus:border-[#D98B3A]'
              }`}
            />
            {errors.name && (
              <p className="mt-1.5 text-[11px] text-red-400 flex items-center gap-1 font-mono">
                <AlertCircle className="w-3 h-3" />
                {errors.name}
              </p>
            )}
          </div>

          <div>
            <label className="block text-xs font-mono uppercase tracking-wider text-[#A1A1A1] mb-2">
              Business / Brand Name *
            </label>
            <input
              type="text"
              value={formData.businessName}
              onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
              placeholder="e.g. Aurelia Fine Goods"
              className={`w-full px-4 py-3.5 rounded-2xl bg-white/[0.04] border text-white text-sm focus:outline-none transition-colors backdrop-blur-md ${
                errors.businessName ? 'border-red-500/80 focus:border-red-500' : 'border-white/10 focus:border-[#D98B3A]'
              }`}
            />
            {errors.businessName && (
              <p className="mt-1.5 text-[11px] text-red-400 flex items-center gap-1 font-mono">
                <AlertCircle className="w-3 h-3" />
                {errors.businessName}
              </p>
            )}
          </div>
        </div>

        {/* Email & WhatsApp */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className="block text-xs font-mono uppercase tracking-wider text-[#A1A1A1] mb-2">
              Email Address *
            </label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="founder@company.com"
              className={`w-full px-4 py-3.5 rounded-2xl bg-white/[0.04] border text-white text-sm focus:outline-none transition-colors backdrop-blur-md ${
                errors.email ? 'border-red-500/80 focus:border-red-500' : 'border-white/10 focus:border-[#D98B3A]'
              }`}
            />
            {errors.email && (
              <p className="mt-1.5 text-[11px] text-red-400 flex items-center gap-1 font-mono">
                <AlertCircle className="w-3 h-3" />
                {errors.email}
              </p>
            )}
          </div>

          <div>
            <label className="block text-xs font-mono uppercase tracking-wider text-[#A1A1A1] mb-2">
              WhatsApp Number (with country code) *
            </label>
            <input
              type="tel"
              value={formData.whatsapp}
              onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
              placeholder="+91 98765 43210"
              className={`w-full px-4 py-3.5 rounded-2xl bg-white/[0.04] border text-white text-sm focus:outline-none transition-colors backdrop-blur-md ${
                errors.whatsapp ? 'border-red-500/80 focus:border-red-500' : 'border-white/10 focus:border-[#D98B3A]'
              }`}
            />
            {errors.whatsapp && (
              <p className="mt-1.5 text-[11px] text-red-400 flex items-center gap-1 font-mono">
                <AlertCircle className="w-3 h-3" />
                {errors.whatsapp}
              </p>
            )}
          </div>
        </div>

        {/* Business Type */}
        <div>
          <label className="block text-xs font-mono uppercase tracking-wider text-[#A1A1A1] mb-2">
            Business Classification / Sector
          </label>
          <select
            value={formData.businessType}
            onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
            className="w-full px-4 py-3.5 rounded-2xl bg-[#0A0A0E] border border-white/10 text-white text-sm focus:outline-none focus:border-[#D98B3A] backdrop-blur-md"
          >
            {businessTypes.map((type) => (
              <option key={type} value={type} className="bg-[#0A0A0E] text-white">
                {type}
              </option>
            ))}
          </select>
        </div>

        {/* Interested Services Multi-Select */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <label className="block text-xs font-mono uppercase tracking-wider text-[#A1A1A1]">
              Interested Divisions (Select All Applicable) *
            </label>
            <span className="text-[11px] font-mono text-[#D98B3A]">
              {formData.services.length} Selected
            </span>
          </div>

          <div className="flex flex-wrap gap-2 pt-1">
            {availableServices.map((svc) => {
              const isSelected = formData.services.includes(svc);
              return (
                <button
                  type="button"
                  key={svc}
                  onClick={() => toggleService(svc)}
                  className={`px-4 py-2 rounded-full text-xs font-mono transition-all duration-200 flex items-center gap-2 cursor-pointer ${
                    isSelected
                      ? 'spatial-pill spatial-pill-amber text-black font-semibold'
                      : 'spatial-pill text-[#A1A1A1] hover:text-white'
                  }`}
                >
                  {isSelected && <Check className="w-3.5 h-3.5 text-black stroke-[3]" />}
                  <span>{svc}</span>
                </button>
              );
            })}
          </div>
          {errors.services && (
            <p className="mt-1.5 text-[11px] text-red-400 flex items-center gap-1 font-mono">
              <AlertCircle className="w-3 h-3" />
              {errors.services}
            </p>
          )}
        </div>

        {/* Estimated Budget in INR */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <label className="block text-xs font-mono uppercase tracking-wider text-[#A1A1A1]">
              Estimated Investment (in INR ₹)
            </label>
            <span className="text-[10px] font-mono text-[#C6A96C]">Indian Rupees (₹)</span>
          </div>
          <select
            value={formData.estimatedBudget}
            onChange={(e) => setFormData({ ...formData, estimatedBudget: e.target.value })}
            className="w-full px-4 py-3.5 rounded-2xl bg-[#0A0A0E] border border-white/10 text-white text-sm focus:outline-none focus:border-[#D98B3A] backdrop-blur-md"
          >
            {budgetTiers.map((tier) => (
              <option key={tier} value={tier} className="bg-[#0A0A0E] text-white">
                {tier}
              </option>
            ))}
          </select>
        </div>

        {/* Project Description */}
        <div>
          <label className="block text-xs font-mono uppercase tracking-wider text-[#A1A1A1] mb-2">
            Project Overview & Goals *
          </label>
          <textarea
            rows={4}
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            placeholder="Tell us about your brand, key targets, existing challenges, timeline, or links to your current website/social profiles..."
            className={`w-full px-4 py-3.5 rounded-2xl bg-white/[0.04] border text-white text-sm focus:outline-none transition-colors backdrop-blur-md ${
              errors.description ? 'border-red-500/80 focus:border-red-500' : 'border-white/10 focus:border-[#D98B3A]'
            }`}
          />
          {errors.description && (
            <p className="mt-1.5 text-[11px] text-red-400 flex items-center gap-1 font-mono">
              <AlertCircle className="w-3 h-3" />
              {errors.description}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[11px] text-[#A1A1A1] flex items-center gap-1.5 font-mono">
            <Sparkles className="w-3.5 h-3.5 text-[#D98B3A]" />
            <span>Strict privacy. Direct review by executive leadership.</span>
          </p>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full sm:w-auto spatial-pill spatial-pill-amber py-4 px-10 text-xs font-bold text-black tracking-wider uppercase"
          >
            {isSubmitting ? (
              <span>TRANSMITTING BRIEF...</span>
            ) : (
              <>
                <span>SEND PROJECT INQUIRY</span>
                <Send className="w-4 h-4 ml-1" />
              </>
            )}
          </button>
        </div>
      </form>

      {/* Confirmation Modal */}
      <SubmissionReceiptModal
        formData={submittedData}
        ticketId={ticketId}
        onClose={() => setSubmittedData(null)}
      />
    </>
  );
};
