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
    estimatedBudget: '$2,500 - $5,000 / ₹2L - ₹4L',
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
    '< $2,500 / < ₹2 Lakhs (Targeted Sprint)',
    '$2,500 - $5,000 / ₹2L - ₹4L (Standard Build)',
    '$5,000 - $10,000 / ₹4L - ₹8L (Comprehensive Ecosystem)',
    '$10,000+ / ₹8L+ (Full Scale Agency Partnership)',
    'Flexible / Scope To Be Defined',
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

    // Generate reference ID e.g., DRS-2026-8742
    const generatedId = `DRS-2026-${Math.floor(1000 + Math.random() * 9000)}`;

    setTimeout(() => {
      // Persist in localStorage for real persistence
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
      <form onSubmit={handleSubmit} className="space-y-8" noValidate>
        {/* Name & Business Name */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label className="block text-xs font-mono uppercase tracking-wider text-[#A1A1A1] mb-2">
              Your Name *
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="e.g. Vikramaditya Sharma"
              className={`w-full px-4 py-3.5 rounded-sm bg-[#121212] border text-white text-sm focus:outline-none transition-colors ${
                errors.name ? 'border-red-500/80 focus:border-red-500' : 'border-[#262626] focus:border-[#C6A96C]'
              }`}
            />
            {errors.name && (
              <p className="mt-1.5 text-[11px] text-red-400 flex items-center gap-1">
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
              className={`w-full px-4 py-3.5 rounded-sm bg-[#121212] border text-white text-sm focus:outline-none transition-colors ${
                errors.businessName ? 'border-red-500/80 focus:border-red-500' : 'border-[#262626] focus:border-[#C6A96C]'
              }`}
            />
            {errors.businessName && (
              <p className="mt-1.5 text-[11px] text-red-400 flex items-center gap-1">
                <AlertCircle className="w-3 h-3" />
                {errors.businessName}
              </p>
            )}
          </div>
        </div>

        {/* Email & WhatsApp */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label className="block text-xs font-mono uppercase tracking-wider text-[#A1A1A1] mb-2">
              Email Address *
            </label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="founder@company.com"
              className={`w-full px-4 py-3.5 rounded-sm bg-[#121212] border text-white text-sm focus:outline-none transition-colors ${
                errors.email ? 'border-red-500/80 focus:border-red-500' : 'border-[#262626] focus:border-[#C6A96C]'
              }`}
            />
            {errors.email && (
              <p className="mt-1.5 text-[11px] text-red-400 flex items-center gap-1">
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
              className={`w-full px-4 py-3.5 rounded-sm bg-[#121212] border text-white text-sm focus:outline-none transition-colors ${
                errors.whatsapp ? 'border-red-500/80 focus:border-red-500' : 'border-[#262626] focus:border-[#C6A96C]'
              }`}
            />
            {errors.whatsapp && (
              <p className="mt-1.5 text-[11px] text-red-400 flex items-center gap-1">
                <AlertCircle className="w-3 h-3" />
                {errors.whatsapp}
              </p>
            )}
          </div>
        </div>

        {/* Business Type Selector */}
        <div>
          <label className="block text-xs font-mono uppercase tracking-wider text-[#A1A1A1] mb-2">
            Business Type / Industry
          </label>
          <select
            value={formData.businessType}
            onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
            className="w-full px-4 py-3.5 rounded-sm bg-[#121212] border border-[#262626] text-white text-sm focus:outline-none focus:border-[#C6A96C]"
          >
            {businessTypes.map((type) => (
              <option key={type} value={type} className="bg-[#121212] text-white">
                {type}
              </option>
            ))}
          </select>
        </div>

        {/* Interested Services Multi-Select Chips */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <label className="block text-xs font-mono uppercase tracking-wider text-[#A1A1A1]">
              Interested Services (Select All That Apply) *
            </label>
            <span className="text-[11px] font-mono text-[#DFCA94]">
              {formData.services.length} Selected
            </span>
          </div>

          <div className="flex flex-wrap gap-2.5 pt-1">
            {availableServices.map((svc) => {
              const isSelected = formData.services.includes(svc);
              return (
                <button
                  type="button"
                  key={svc}
                  onClick={() => toggleService(svc)}
                  className={`px-3.5 py-2 rounded-sm text-xs font-mono transition-all duration-200 flex items-center gap-2 cursor-pointer ${
                    isSelected
                      ? 'bg-[#C6A96C] text-black font-semibold shadow-[0_0_15px_rgba(198,169,108,0.25)]'
                      : 'bg-[#141414] text-[#A1A1A1] border border-[#262626] hover:text-white hover:border-[#3A3A3A]'
                  }`}
                >
                  {isSelected && <Check className="w-3 h-3 text-black" />}
                  <span>{svc}</span>
                </button>
              );
            })}
          </div>
          {errors.services && (
            <p className="mt-1.5 text-[11px] text-red-400 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" />
              {errors.services}
            </p>
          )}
        </div>

        {/* Estimated Budget */}
        <div>
          <label className="block text-xs font-mono uppercase tracking-wider text-[#A1A1A1] mb-2">
            Estimated Budget / Investment Range
          </label>
          <select
            value={formData.estimatedBudget}
            onChange={(e) => setFormData({ ...formData, estimatedBudget: e.target.value })}
            className="w-full px-4 py-3.5 rounded-sm bg-[#121212] border border-[#262626] text-white text-sm focus:outline-none focus:border-[#C6A96C]"
          >
            {budgetTiers.map((tier) => (
              <option key={tier} value={tier} className="bg-[#121212] text-white">
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
            className={`w-full px-4 py-3.5 rounded-sm bg-[#121212] border text-white text-sm focus:outline-none transition-colors ${
              errors.description ? 'border-red-500/80 focus:border-red-500' : 'border-[#262626] focus:border-[#C6A96C]'
            }`}
          />
          {errors.description && (
            <p className="mt-1.5 text-[11px] text-red-400 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" />
              {errors.description}
            </p>
          )}
        </div>

        {/* Submit Button & Assurance */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[11px] text-[#A1A1A1] flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-[#C6A96C]" />
            <span>Strict privacy. Direct review by leadership. No spam.</span>
          </p>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-10 py-4 bg-[#C6A96C] text-black font-semibold text-xs tracking-[0.18em] uppercase rounded-sm hover:bg-[#DFCA94] transition-all duration-300 disabled:opacity-50 cursor-pointer shadow-[0_0_30px_rgba(198,169,108,0.25)] hover:shadow-[0_0_40px_rgba(198,169,108,0.4)]"
          >
            {isSubmitting ? (
              <span>REGISTERING BRIEF...</span>
            ) : (
              <>
                <span>SEND PROJECT INQUIRY</span>
                <Send className="w-4 h-4" />
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
