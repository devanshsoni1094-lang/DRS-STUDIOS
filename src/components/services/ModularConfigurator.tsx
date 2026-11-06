import React, { useState } from 'react';
import { Check, CheckSquare, Square, ArrowUpRight, Sparkles, Youtube, Instagram, Globe, Film, BadgePercent } from 'lucide-react';

interface ModularConfiguratorProps {
  onBuildPresence: (selectedServices: string[]) => void;
}

export const ModularConfigurator: React.FC<ModularConfiguratorProps> = ({
  onBuildPresence,
}) => {
  const [selectedServices, setSelectedServices] = useState<string[]>([
    'Website Development',
    'Instagram Management',
    'Creative Production Studio',
  ]);

  const serviceOptions = [
    {
      id: 'youtube',
      name: 'YouTube Management',
      icon: <Youtube className="w-5 h-5 text-red-400" />,
      tag: 'Grow • Manage • Monetize',
      highlight: 'Scripting, Packaging, SEO & Bi-weekly Sprints',
      inrEstimate: '₹35,000/mo',
      thumbnail: '/services/youtube-management.jpg',
    },
    {
      id: 'instagram',
      name: 'Instagram Management',
      icon: <Instagram className="w-5 h-5 text-pink-400" />,
      tag: 'Grow • Engage • Convert',
      highlight: 'Curated 30-day Grid, High-Retention Reels & Stories',
      inrEstimate: '₹30,000/mo',
      thumbnail: '/services/instagram-management.jpg',
    },
    {
      id: 'website',
      name: 'Website Development',
      icon: <Globe className="w-5 h-5 text-blue-400" />,
      tag: 'Build • Design • Launch • Scale',
      highlight: 'Custom React Web Experience, Sub-Second Latency & SEO',
      inrEstimate: '₹45,000 one-time / retainer',
      thumbnail: '/services/website-development.jpg',
    },
    {
      id: 'production',
      name: 'Creative Production Studio',
      icon: <Film className="w-5 h-5 text-amber-400" />,
      tag: 'Cinematic & AI',
      highlight: 'Commercial Video Cuts, Neural 12K Visuals & Ad Variants',
      inrEstimate: '₹35,000/mo',
      thumbnail: '/services/creative-production.jpg',
    },
  ];

  const calculateInrTotal = () => {
    const count = selectedServices.length;
    if (count === 1) return { total: '₹35,000 / mo', save: '' };
    if (count === 2) return { total: '₹65,000 / mo', save: 'Save ₹5,000/mo bundle discount' };
    if (count === 3) return { total: '₹95,000 / mo', save: 'Save ₹15,000/mo bundle discount' };
    return { total: '₹1,25,000 / mo', save: 'Super Package Discount: Save ₹20,000/mo' };
  };

  const pricing = calculateInrTotal();

  const toggleService = (name: string) => {
    if (selectedServices.includes(name)) {
      if (selectedServices.length === 1) return; // Keep at least one
      setSelectedServices(selectedServices.filter((s) => s !== name));
    } else {
      setSelectedServices([...selectedServices, name]);
    }
  };

  return (
    <div className="spatial-glass rounded-3xl p-8 sm:p-12 lg:p-16 my-16 relative overflow-hidden">
      {/* Background Amber Blooms */}
      <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-[#D98B3A]/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute -left-20 -top-20 w-80 h-80 bg-[#C6A96C]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10">
        
        {/* Flagship Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full spatial-nav-caps text-xs font-mono tracking-widest text-[#D98B3A] uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Super Package • Custom Ecosystem</span>
          </div>

          <h3 className="font-headline text-3xl sm:text-5xl font-bold uppercase tracking-tight text-white mb-4">
            One Partner. <br />
            <span className="gold-gradient-text">Every Digital Possibility.</span>
          </h3>

          <p className="text-sm sm:text-base text-[#A1A1A1] leading-relaxed">
            Bring your digital operations together through one coordinated creative partner.
            Configure your custom combination below with transparent investment in INR (₹).
          </p>
        </div>

        {/* Super Package Banner Preview (Uploaded Image 4) */}
        <div className="mb-12 rounded-2xl overflow-hidden border border-white/15 shadow-[0_20px_50px_rgba(0,0,0,0.8)] relative group">
          <img
            src="/services/complete-digital-management.jpg"
            alt="DRS STUDIOS Super Package"
            className="w-full h-56 sm:h-72 md:h-84 object-cover object-center filter brightness-95 contrast-110 group-hover:scale-102 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0E] via-transparent to-transparent opacity-80" />
          
          <div className="absolute bottom-5 left-5 right-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="px-4 py-2 rounded-xl spatial-nav-capsule flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-[#D98B3A] animate-ping" />
              <span className="text-xs font-mono font-semibold text-white uppercase tracking-wider">
                DRS Super Package • All 4 Digital Domains Unified
              </span>
            </div>

            <div className="px-4 py-2 rounded-xl bg-[#D98B3A] text-black text-xs font-mono font-bold tracking-wider uppercase self-start sm:self-auto">
              Investment: {pricing.total}
            </div>
          </div>
        </div>

        {/* 4 Interactive Modular Glass Cards with Thumbnails */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8 mb-12">
          {serviceOptions.map((opt) => {
            const isSelected = selectedServices.includes(opt.name);
            return (
              <div
                key={opt.id}
                onClick={() => toggleService(opt.name)}
                className={`rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 flex flex-col justify-between ${
                  isSelected
                    ? 'spatial-glass border-[#D98B3A]/80 shadow-[0_15px_40px_rgba(217,139,58,0.25)]'
                    : 'bg-white/[0.02] border border-white/5 opacity-55 hover:opacity-90'
                }`}
              >
                {/* Domain Thumbnail Image Header */}
                <div className="relative h-36 sm:h-40 w-full overflow-hidden bg-[#0A0A0E]">
                  <img
                    src={opt.thumbnail}
                    alt={opt.name}
                    className="w-full h-full object-cover filter contrast-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0C0C10] via-transparent to-transparent opacity-85" />

                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-full spatial-nav-capsule text-[9px] font-mono text-[#D98B3A]">
                      [ {opt.tag} ]
                    </span>
                  </div>

                  <div className="absolute top-3 right-3">
                    {isSelected ? (
                      <div className="p-1 rounded-full bg-[#D98B3A] text-black">
                        <Check className="w-4 h-4 stroke-[3]" />
                      </div>
                    ) : (
                      <div className="p-1 rounded-full bg-black/60 border border-white/20 text-[#777]">
                        <Square className="w-4 h-4" />
                      </div>
                    )}
                  </div>

                  <div className="absolute bottom-2.5 right-3">
                    <span className="px-2.5 py-0.5 rounded-full spatial-nav-capsule text-[10px] font-mono text-[#C6A96C]">
                      From {opt.inrEstimate}
                    </span>
                  </div>
                </div>

                {/* Info Content */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h5 className="font-headline text-base sm:text-lg font-bold text-white mb-1.5">
                      {opt.name}
                    </h5>
                    <p className="text-xs text-[#A1A1A1] leading-relaxed">
                      {opt.highlight}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs font-mono">
                    <span className={isSelected ? 'text-[#D98B3A] flex items-center gap-1 font-semibold' : 'text-[#777]'}>
                      {isSelected ? '✓ Module Active' : '+ Click to include'}
                    </span>
                    <span className="text-white font-medium">{opt.inrEstimate}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Dynamic Summary Bar with INR Charges & Pill CTA */}
        <div className="p-6 sm:p-8 rounded-2xl spatial-glass flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div className="space-y-1.5">
            <div className="flex items-center gap-2 text-sm font-semibold text-white">
              <span className="w-2 h-2 rounded-full bg-[#D98B3A] animate-pulse" />
              <span>Unified Account Leadership & Coordinated Sprints</span>
            </div>
            <p className="text-xs text-[#A1A1A1]">
              {selectedServices.length} active service modules selected. Scaled precisely around your business objectives.
            </p>
            {pricing.save && (
              <p className="text-xs font-mono text-[#D98B3A] flex items-center gap-1 font-medium">
                <BadgePercent className="w-3.5 h-3.5" />
                {pricing.save}
              </p>
            )}
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 w-full lg:w-auto">
            <div className="text-left sm:text-right">
              <span className="text-[10px] font-mono text-[#A1A1A1] uppercase block">Estimated Scope Rate</span>
              <span className="text-xl sm:text-2xl font-bold font-mono text-white gold-gradient-text">
                {pricing.total}
              </span>
            </div>

            <button
              onClick={() => onBuildPresence(selectedServices)}
              className="w-full sm:w-auto spatial-pill spatial-pill-amber py-4 px-8 text-xs font-semibold text-black tracking-wider whitespace-nowrap"
            >
              <span>BUILD YOUR DIGITAL PRESENCE</span>
              <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
