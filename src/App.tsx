import React, { useState } from 'react';
import { Navbar } from './components/layout/Navbar';
import { HeroSection } from './components/hero/HeroSection';
import { AboutSection } from './components/about/AboutSection';
import { ServicesSection } from './components/services/ServicesSection';
import { PortfolioSection } from './components/portfolio/PortfolioSection';
import { ProcessSection } from './components/process/ProcessSection';
import { WhyUsSection } from './components/why-us/WhyUsSection';
import { TargetAudienceSection } from './components/audiences/TargetAudienceSection';
import { ContactSection } from './components/contact/ContactSection';
import { Footer } from './components/layout/Footer';

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

  const handleModularScopeBuild = (services: string[]) => {
    setSelectedServices(services);
    setInquiryContext(`Custom modular package with ${services.length} active service modules: ${services.join(', ')}`);
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

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-[#C6A96C]/30 selection:text-white">
      {/* Sticky Luxury Navbar */}
      <Navbar onStartProject={scrollToContact} />

      {/* Main Content Sections */}
      <main>
        {/* 04. Hero Section */}
        <HeroSection
          onExploreServices={scrollToServices}
          onStartProject={scrollToContact}
        />

        {/* 05. About DRS Studios */}
        <AboutSection onStartProject={scrollToContact} />

        {/* 06. Complete Digital Ecosystem (5 Services + Modular Configurator) */}
        <ServicesSection
          onInquireService={handleInquireService}
          onModularScopeBuild={handleModularScopeBuild}
        />

        {/* 07. Creative Portfolio (Work That Speaks For Itself) */}
        <PortfolioSection onInquireProject={handleInquireProject} />

        {/* 08. Our Process (From Idea To Execution) */}
        <ProcessSection />

        {/* 09. Why DRS Studios (Simplify Digital. Elevate Your Brand) */}
        <WhyUsSection />

        {/* Target Audience Tailored Solutions */}
        <TargetAudienceSection
          onSelectAudienceServices={handleSelectAudienceServices}
        />

        {/* 10. Contact & Project Inquiry */}
        <ContactSection
          initialServices={selectedServices}
          initialContext={inquiryContext}
        />
      </main>

      {/* 11. Footer */}
      <Footer onStartProject={scrollToContact} />
    </div>
  );
};

export default App;
