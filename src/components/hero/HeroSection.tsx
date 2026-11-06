import React from 'react';
import { ArrowDown, ArrowUpRight, Youtube, Instagram, Globe, Sparkles, Film, Compass } from 'lucide-react';
import { AmbientMesh } from './AmbientMesh';

interface HeroSectionProps {
  onExploreServices: () => void;
  onStartProject: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreServices,
  onStartProject,
}) => {
  const domains = [
    {
      id: 'youtube',
      title: 'YouTube Management',
      metric: '+248%',
      metricLabel: 'Retention',
      desc: 'End-to-end channel strategy, 4K retention editing, thumbnail engineering & algorithmic growth.',
      image: '/services/youtube-management.jpg',
      icon: <Youtube className="w-4 h-4 text-[#D98B3A]" />,
      tag: 'Channel Growth',
    },
    {
      id: 'instagram',
      title: 'Instagram Growth',
      metric: '+312%',
      metricLabel: 'Reach',
      desc: 'High-conversion Reels architecture, cinematic aesthetics, daily community management & brand scaling.',
      image: '/services/instagram-management.jpg',
      icon: <Instagram className="w-4 h-4 text-[#D98B3A]" />,
      tag: 'Social Dominance',
    },
    {
      id: 'web',
      title: 'Web Development',
      metric: '99/100',
      metricLabel: 'Lighthouse',
      desc: 'Bespoke spatial glass digital platforms, sub-second latency, modern frameworks & production excellence.',
      image: '/services/website-development.jpg',
      icon: <Globe className="w-4 h-4 text-[#D98B3A]" />,
      tag: 'Spatial Web',
    },
    {
      id: 'production',
      title: 'Creative Production',
      metric: '5x',
      metricLabel: 'Sprints',
      desc: 'Studio-grade commercial video, 3D brand assets, high-concept photography & motion direction.',
      image: '/services/creative-production.jpg',
      icon: <Film className="w-4 h-4 text-[#D98B3A]" />,
      tag: 'Studio Quality',
    },
  ];

  return (
    <section
      id="hero"
      data-section-name="HERO ECOSYSTEM"
      className="relative min-h-[100svh] flex flex-col justify-between pt-28 sm:pt-36 md:pt-42 pb-10 sm:pb-14 overflow-hidden bg-[#050505] border-b border-white/10"
    >
      {/* Interactive atmospheric canvas mesh with warm amber lighting */}
      <AmbientMesh />

      {/* Warm amber bloom center glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[600px] md:w-[900px] h-[320px] sm:h-[550px] bg-[#D98B3A]/12 rounded-full blur-[120px] sm:blur-[180px] pointer-events-none" />

      {/* Main Spatial Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 w-full flex-1 flex flex-col justify-between py-2 sm:py-4">
        
        {/* Top Kicker Capsule with Breathable Clearance */}
        <div className="flex justify-center mb-5 sm:mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 sm:px-5 py-1.5 sm:py-2 rounded-full spatial-nav-capsule text-[10px] sm:text-xs font-mono tracking-widest uppercase text-[#C6A96C]">
            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#D98B3A] animate-ping" />
            <span>Creative Intelligence. Digital Excellence.</span>
          </div>
        </div>

        {/* Master Editorial Headline with Generous Spacing */}
        <div className="text-center max-w-5xl mx-auto mb-8 sm:mb-12 md:mb-14">
          <h1 className="font-headline font-bold text-white tracking-tight text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-[1.1] sm:leading-[1.05] uppercase safe-break">
            Your Entire{' '}
            <span className="gold-gradient-text font-extrabold">
              Digital World.
            </span>
            <br />
            One Creative Partner.
          </h1>

          <p className="max-w-2xl mx-auto mt-4 sm:mt-6 text-xs sm:text-base md:text-lg text-[#A1A1A1] font-light leading-relaxed px-2">
            DRS STUDIOS engineers premier social media dominance, high-performance web applications, and cinema-grade creative production for forward-thinking brands.
          </p>

          {/* Glass Action Pills with Generous Margins */}
          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 px-2">
            <button
              onClick={onStartProject}
              className="w-full sm:w-auto spatial-pill spatial-pill-amber py-3.5 sm:py-4 px-7 sm:px-9 text-xs font-semibold tracking-wider text-black rounded-full"
            >
              <span>START A PROJECT</span>
              <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
            </button>

            <button
              onClick={onExploreServices}
              className="w-full sm:w-auto spatial-pill py-3.5 sm:py-4 px-7 sm:px-9 text-xs font-medium tracking-wider text-white rounded-full"
            >
              <Compass className="w-4 h-4 text-[#C6A96C]" />
              <span>EXPLORE SERVICES</span>
            </button>
          </div>
        </div>

        {/* Flagship Domains 4-Column Spatial Glass Showcase (Clean 16:9 Uncropped Thumbnails) */}
        <div className="w-full my-6 sm:my-10">
          {/* Header Row for Ecosystem */}
          <div className="flex items-center justify-between mb-5 px-1 sm:px-2">
            <div className="flex items-center gap-3">
              <img
                src="/drs-logo.png"
                alt="DRS STUDIOS"
                className="h-6 w-auto object-contain filter drop-shadow-[0_0_10px_rgba(217,139,58,0.35)]"
              />
              <span className="text-xs font-mono tracking-widest text-[#A1A1A1] uppercase">
                Core Digital Disciplines
              </span>
            </div>
            <span className="text-[11px] font-mono text-[#D98B3A] uppercase tracking-wider hidden sm:inline-flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D98B3A] animate-pulse" />
              Integrated Spatial Ecosystem
            </span>
          </div>

          {/* Symmetrical 4-Card Spatial Glass Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {domains.map((domain) => (
              <div
                key={domain.id}
                onClick={onExploreServices}
                className="spatial-glass rounded-2xl p-3.5 sm:p-4 flex flex-col justify-between group cursor-pointer hover:border-[#D98B3A]/50 transition-all duration-300 relative overflow-hidden"
              >
                {/* 16:9 Crisp Uncropped Thumbnail Image Container */}
                <div className="domain-thumbnail-frame relative aspect-[16/9] w-full rounded-xl overflow-hidden mb-3.5 border border-white/10 bg-[#08080C] group-hover:border-[#D98B3A]/40 transition-all flex items-center justify-center p-0.5">
                  <img
                    src={domain.image}
                    alt={domain.title}
                    className="w-full h-full object-contain filter contrast-105 group-hover:scale-[1.02] transition-transform duration-500"
                  />
                  <div className="absolute top-2 right-2 px-2 py-0.5 rounded-full bg-black/80 backdrop-blur-md border border-white/15 text-[10px] font-mono font-bold text-[#D98B3A]">
                    {domain.metric}
                  </div>
                </div>

                {/* Domain Header & Description */}
                <div>
                  <div className="flex items-center gap-2 mb-1.5">
                    {domain.icon}
                    <h3 className="font-headline font-bold text-white text-sm group-hover:text-[#D98B3A] transition-colors">
                      {domain.title}
                    </h3>
                  </div>

                  <p className="text-[11px] text-[#A1A1A1] leading-relaxed line-clamp-2 font-light">
                    {domain.desc}
                  </p>
                </div>

                {/* Card Footer Bar */}
                <div className="mt-3.5 pt-2.5 border-t border-white/10 flex items-center justify-between text-[10px] font-mono uppercase tracking-wider text-[#C6A96C]">
                  <span>{domain.tag}</span>
                  <div className="flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    <span>EXPLORE</span>
                    <ArrowUpRight className="w-3 h-3 text-[#D98B3A]" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Bottom Subtle Scroll Indicator with Balanced Padding */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 w-full pt-4 sm:pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3 text-[10px] sm:text-[11px] font-mono uppercase text-[#A1A1A1] tracking-widest">
        <div className="hidden sm:flex items-center gap-4 lg:gap-6">
          <span>140+ ENTERPRISE RELEASES</span>
          <span className="text-white/20">•</span>
          <span>4.8X AVERAGE GROWTH</span>
          <span className="text-white/20">•</span>
          <span>INDIAN & GLOBAL CLIENTELE</span>
        </div>

        <div className="sm:hidden flex items-center gap-2 text-[10px] text-[#A1A1A1]">
          <span>140+ RELEASES</span>
          <span className="text-white/20">•</span>
          <span>4.8X AVG GROWTH</span>
        </div>

        <button
          onClick={onExploreServices}
          className="flex items-center gap-2 text-[#A1A1A1] hover:text-[#D98B3A] transition-colors cursor-pointer text-[10px] sm:text-xs"
        >
          <span>EXPLORE SPATIAL ECOSYSTEM</span>
          <ArrowDown className="w-3.5 h-3.5 text-[#D98B3A] animate-bounce" />
        </button>
      </div>
    </section>
  );
};
