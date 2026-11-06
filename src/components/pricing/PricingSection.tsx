import React, { useState } from 'react';
import {
  Sparkles,
  Youtube,
  Instagram,
  Linkedin,
  Globe,
  Zap,
  Code,
  Check,
  ChevronDown,
  ArrowUpRight,
} from 'lucide-react';
import { PricingCategory, PricingPackageItem } from '../../types';
import { growthBrandingPackages, webDevPackages } from '../../data/pricing';

interface PricingSectionProps {
  onSelectPackage: (packageTitle: string, priceSummary: string) => void;
  onCustomBudget: () => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({
  onSelectPackage,
  onCustomBudget,
}) => {
  const [activeCategory, setActiveCategory] = useState<PricingCategory>('growth-branding');
  const [expandedCards, setExpandedCards] = useState<Record<string, boolean>>({});

  const toggleExpand = (id: string) => {
    setExpandedCards((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const currentPackages = activeCategory === 'growth-branding' ? growthBrandingPackages : webDevPackages;

  const renderIcon = (type: PricingPackageItem['iconType']) => {
    switch (type) {
      case 'sparkles':
        return (
          <div className="w-9 h-9 rounded-xl bg-[#D98B3A]/15 border border-[#D98B3A]/40 flex items-center justify-center text-[#D98B3A] shadow-[0_0_12px_rgba(217,139,58,0.2)]">
            <Sparkles className="w-4 h-4" />
          </div>
        );
      case 'youtube':
        return (
          <div className="w-9 h-9 rounded-xl bg-red-500/15 border border-red-500/30 flex items-center justify-center text-red-400">
            <Youtube className="w-4 h-4" />
          </div>
        );
      case 'instagram':
        return (
          <div className="w-9 h-9 rounded-xl bg-pink-500/15 border border-pink-500/30 flex items-center justify-center text-pink-400">
            <Instagram className="w-4 h-4" />
          </div>
        );
      case 'linkedin':
        return (
          <div className="w-9 h-9 rounded-xl bg-blue-500/15 border border-blue-500/30 flex items-center justify-center text-blue-400">
            <Linkedin className="w-4 h-4" />
          </div>
        );
      case 'globe':
        return (
          <div className="w-9 h-9 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
            <Globe className="w-4 h-4" />
          </div>
        );
      case 'zap':
        return (
          <div className="w-9 h-9 rounded-xl bg-[#D98B3A]/20 border border-[#D98B3A]/40 flex items-center justify-center text-[#D98B3A] shadow-[0_0_12px_rgba(217,139,58,0.25)]">
            <Zap className="w-4 h-4" />
          </div>
        );
      case 'code':
        return (
          <div className="w-9 h-9 rounded-xl bg-purple-500/15 border border-purple-500/30 flex items-center justify-center text-purple-400">
            <Code className="w-4 h-4" />
          </div>
        );
      default:
        return (
          <div className="w-9 h-9 rounded-xl bg-[#D98B3A]/15 border border-[#D98B3A]/40 flex items-center justify-center text-[#D98B3A]">
            <Sparkles className="w-4 h-4" />
          </div>
        );
    }
  };

  return (
    <section
      id="pricing"
      data-section-name="PRICING PACKAGES"
      className="py-28 sm:py-36 bg-[#050505] relative overflow-hidden border-b border-white/10"
    >
      {/* Background warm amber glow blooms */}
      <div className="absolute left-1/2 top-1/4 -translate-x-1/2 w-[700px] h-[500px] bg-[#D98B3A]/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        
        {/* Centered Pricing Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="section-kicker-bar" />
            <span className="text-xs font-mono tracking-[0.2em] uppercase text-[#D98B3A]">
              08 // TRANSPARENT SCALING PACKAGES
            </span>
            <span className="section-kicker-bar" />
          </div>

          <h2 className="font-headline font-bold text-white text-3xl sm:text-5xl lg:text-6xl leading-[1.08] uppercase tracking-tight">
            Pricing <span className="gold-gradient-text">Packages</span>
          </h2>

          <p className="mt-4 text-xs sm:text-base text-[#A1A1A1] font-light leading-relaxed max-w-2xl mx-auto px-2">
            Transparent scaling packages built for serious content creators, personal brands, and high-growth businesses.
          </p>
        </div>

        {/* Horizontal Segmented Category Selector */}
        <div className="flex justify-center mb-12 sm:mb-16">
          <div className="inline-flex items-center p-1.5 rounded-full spatial-nav-capsule border border-white/15 bg-white/[0.03] shadow-[0_10px_30px_rgba(0,0,0,0.8)]">
            <button
              onClick={() => setActiveCategory('growth-branding')}
              className={`py-2.5 sm:py-3 px-5 sm:px-8 rounded-full text-xs sm:text-sm font-mono tracking-wider uppercase transition-all duration-300 cursor-pointer ${
                activeCategory === 'growth-branding'
                  ? 'spatial-pill spatial-pill-amber text-black font-bold shadow-[0_0_20px_rgba(217,139,58,0.4)]'
                  : 'text-[#A1A1A1] hover:text-white'
              }`}
            >
              GROWTH & BRANDING
            </button>

            <button
              onClick={() => setActiveCategory('web-dev')}
              className={`py-2.5 sm:py-3 px-5 sm:px-8 rounded-full text-xs sm:text-sm font-mono tracking-wider uppercase transition-all duration-300 cursor-pointer ${
                activeCategory === 'web-dev'
                  ? 'spatial-pill spatial-pill-amber text-black font-bold shadow-[0_0_20px_rgba(217,139,58,0.4)]'
                  : 'text-[#A1A1A1] hover:text-white'
              }`}
            >
              WEB DESIGN & DEV
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div
          className={`grid gap-6 sm:gap-8 items-stretch ${
            activeCategory === 'growth-branding'
              ? 'grid-cols-1 md:grid-cols-2 xl:grid-cols-4'
              : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto'
          }`}
        >
          {currentPackages.map((pkg) => {
            const isExpanded = !!expandedCards[pkg.id];
            const isPopular = !!pkg.isPopular;

            return (
              <div
                key={pkg.id}
                className={`spatial-glass relative rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-500 group ${
                  isPopular
                    ? 'border-[#D98B3A]/70 shadow-[0_25px_60px_rgba(0,0,0,0.85),0_0_35px_rgba(217,139,58,0.22)]'
                    : 'hover:border-white/25'
                }`}
              >
                {/* Floating "MOST POPULAR" Badge */}
                {isPopular && (
                  <>
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-20">
                      <div className="px-3.5 py-1 rounded-full bg-gradient-to-r from-[#D98B3A] to-[#C6A96C] text-black font-mono text-[10px] font-bold tracking-widest uppercase shadow-[0_0_15px_rgba(217,139,58,0.5)]">
                        MOST POPULAR
                      </div>
                    </div>

                    {/* Corner Accent Brackets */}
                    <div className="absolute -top-1.5 -left-1.5 w-3.5 h-3.5 border-t-2 border-l-2 border-[#D98B3A] rounded-tl pointer-events-none opacity-90" />
                    <div className="absolute -top-1.5 -right-1.5 w-3.5 h-3.5 border-t-2 border-r-2 border-[#D98B3A] rounded-tr pointer-events-none opacity-90" />
                    <div className="absolute -bottom-1.5 -left-1.5 w-3.5 h-3.5 border-b-2 border-l-2 border-[#D98B3A] rounded-bl pointer-events-none opacity-90" />
                    <div className="absolute -bottom-1.5 -right-1.5 w-3.5 h-3.5 border-b-2 border-r-2 border-[#D98B3A] rounded-br pointer-events-none opacity-90" />
                  </>
                )}

                <div>
                  {/* Top Identifier & Icon Row */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-mono tracking-widest text-[#A1A1A1] uppercase font-semibold">
                      {pkg.packageNumber}
                    </span>

                    <div className="transition-transform duration-300 group-hover:scale-105">
                      {renderIcon(pkg.iconType)}
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="font-headline font-bold text-xl sm:text-2xl text-white tracking-tight uppercase mb-1">
                    {pkg.title}
                  </h3>

                  <p className="text-xs text-[#A1A1A1] font-light mb-6">
                    {pkg.subtitle}
                  </p>

                  {/* Prominent Pricing Block */}
                  <div className="flex items-baseline mb-6">
                    <span className="font-headline font-bold text-3xl sm:text-4xl text-white tracking-tight">
                      {pkg.price}
                    </span>
                    <span className="font-mono text-xs text-[#A1A1A1] ml-2 font-normal">
                      {pkg.period}
                    </span>
                  </div>

                  <div className="border-t border-white/10 my-5" />

                  {/* Deliverables with Checkmarks */}
                  <div className="space-y-3">
                    {pkg.deliverables.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-[#E5E5E5] leading-relaxed">
                        <span className="w-4 h-4 rounded-full bg-[#D98B3A]/15 border border-[#D98B3A]/40 flex items-center justify-center shrink-0 mt-0.5 shadow-[0_0_8px_rgba(217,139,58,0.25)]">
                          <Check className="w-2.5 h-2.5 text-[#D98B3A] stroke-[3]" />
                        </span>
                        <span className="font-light">{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Expandable Scope & Workflow Section */}
                  <div className="pt-4 mt-4 border-t border-white/10">
                    <button
                      type="button"
                      onClick={() => toggleExpand(pkg.id)}
                      className="w-full flex items-center justify-between text-[11px] font-mono uppercase tracking-wider text-[#C6A96C] hover:text-[#D98B3A] transition-colors cursor-pointer"
                    >
                      <span>{pkg.workflowTitle || 'WORKFLOW & DELIVERABLES'}</span>
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-300 ${
                          isExpanded ? 'rotate-180 text-[#D98B3A]' : ''
                        }`}
                      />
                    </button>

                    {isExpanded && (
                      <div className="mt-3.5 pt-2.5 border-t border-white/5 space-y-2 animate-in fade-in duration-200">
                        {pkg.workflowDetails.map((detail, idx) => (
                          <div key={idx} className="flex items-start gap-2 text-[11px] text-[#A1A1A1] font-light leading-relaxed">
                            <span className="text-[#D98B3A] text-xs font-mono">•</span>
                            <span>{detail}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Bottom Action Button */}
                <div className="pt-6">
                  <button
                    onClick={() => onSelectPackage(pkg.title, `${pkg.price} ${pkg.period}`)}
                    className={`w-full py-3.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer ${
                      isPopular
                        ? 'spatial-pill spatial-pill-amber text-black shadow-[0_0_20px_rgba(217,139,58,0.4)]'
                        : 'spatial-pill text-white hover:text-[#D98B3A] hover:border-[#D98B3A]/60 bg-white/[0.03] border border-white/15'
                    }`}
                  >
                    <span>{pkg.ctaText || 'SELECT PACKAGE'}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Custom Budget Inquiry Panel (Present in both references) */}
        <div className="spatial-glass rounded-3xl p-6 sm:p-8 lg:p-10 mt-14 max-w-5xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative overflow-hidden">
          {/* Subtle Ambient Glow */}
          <div className="absolute right-0 top-0 w-80 h-80 bg-[#D98B3A]/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative z-10 max-w-2xl space-y-2">
            <div className="flex items-center gap-2 text-white">
              <Sparkles className="w-4 h-4 text-[#D98B3A]" />
              <h4 className="font-headline text-lg sm:text-xl font-bold uppercase tracking-tight">
                Need a Custom Plan or Budget?
              </h4>
            </div>

            <p className="text-xs sm:text-sm text-[#A1A1A1] font-light leading-relaxed">
              Every channel is unique. Whether you need a different video volume, have a specific budget, or want a custom service blend, we will craft a tailor-made plan for you.
            </p>
          </div>

          <div className="relative z-10 w-full md:w-auto">
            <button
              onClick={onCustomBudget}
              className="w-full md:w-auto spatial-pill spatial-pill-amber py-3.5 px-8 font-bold text-xs text-black uppercase tracking-wider whitespace-nowrap shrink-0 shadow-[0_0_25px_rgba(217,139,58,0.35)] justify-center cursor-pointer"
            >
              <span>LET'S WORK OUT A BUDGET</span>
              <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
