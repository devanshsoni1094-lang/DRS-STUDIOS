import React, { useState } from 'react';
import { Navbar } from './components/layout/Navbar';
import { HeroSection } from './components/hero/HeroSection';
import { AboutSection } from './components/about/AboutSection';
import { ServicesSection } from './components/services/ServicesSection';
import { PortfolioSection } from './components/portfolio/PortfolioSection';
import { ProcessSection } from './components/process/ProcessSection';
import { WhyUsSection } from './components/why-us/WhyUsSection';
import { TargetAudienceSection } from './components/audiences/TargetAudienceSection';
import { PricingSection } from './components/pricing/PricingSection';
import { ContactSection } from './components/contact/ContactSection';
import { Footer } from './components/layout/Footer';
import { GlowCursor } from './components/ui/GlowCursor';

export const App: React.FC = () => {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [inquiryContext, setInquiryContext] = useState<string>('');

  const scrollToContact = () => {
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToServices = () => {
    const servicesElem = document.getElementById('services');
    if (servicesElem) {
      servicesElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleInquireService = (serviceTitle: string) => {
    setSelectedServices([serviceTitle]);
    setInquiryContext(`Direct inquiry for ${serviceTitle}`);
    scrollToContact();
  };

  const handleInquireProject = (context: string) => {
    setInquiryContext(context);
    scrollToContact();
  };

  const handleSelectAudienceServices = (services: string[]) => {
    setSelectedServices(services);
    setInquiryContext(`Tailored industry solution scope: ${services.join(', ')}`);
    scrollToContact();
  };

  const handleSelectPricingPackage = (packageTitle: string, priceSummary: string) => {
    setSelectedServices([packageTitle]);
    setInquiryContext(`Selected Plan: ${packageTitle} (${priceSummary})`);
    scrollToContact();
  };

  const handleCustomBudgetInquiry = () => {
    setInquiryContext('Custom Plan or Budget Consultation Scope Request');
    scrollToContact();
  };

  return (
    <div className="min-h-screen bg-[#050505] text-[#F5F5F5] selection:bg-[#D98B3A]/30 selection:text-white relative">
      {/* Interactive Glowing Cursor Following the Mouse */}
      <GlowCursor />

      {/* Floating Spatial Glass Navbar */}
      <Navbar onStartProject={scrollToContact} />

      {/* Main Content Sections */}
      <main>
        {/* 05. Hero Section */}
        <HeroSection
          onExploreServices={scrollToServices}
          onStartProject={scrollToContact}
        />

        {/* 09. About DRS Studios */}
        <AboutSection onStartProject={scrollToContact} />

        {/* 07. Complete Digital Ecosystem (5 Services) */}
        <ServicesSection
          onInquireService={handleInquireService}
        />

        {/* 08. Creative Portfolio (Work That Speaks For Itself) */}
        <PortfolioSection onInquireProject={handleInquireProject} />

        {/* 08. Our Process (From Idea To Execution) */}
        <ProcessSection />

        {/* 09. Why DRS Studios (Simplify Digital. Elevate Your Brand) */}
        <WhyUsSection />

        {/* Target Audience Tailored Solutions */}
        <TargetAudienceSection
          onSelectAudienceServices={handleSelectAudienceServices}
        />

        {/* 10. Transparent Scaling Pricing Packages (Growth & Branding / Web Design & Dev) */}
        <PricingSection
          onSelectPackage={handleSelectPricingPackage}
          onCustomBudget={handleCustomBudgetInquiry}
        />

        {/* 11. Contact & Project Inquiry */}
        <ContactSection
          initialServices={selectedServices}
          initialContext={inquiryContext}
        />
      </main>

      {/* Footer */}
      <Footer onStartProject={scrollToContact} />
    </div>
  );
};

export default App;
