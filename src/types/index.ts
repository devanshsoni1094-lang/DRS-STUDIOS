export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  features: string[];
  ctaText: string;
  badge: string;
  image: string;
  metric: {
    label: string;
    value: string;
  };
  details: {
    deliverables: string[];
    turnaround: string;
    idealFor: string[];
  };
}

export type PortfolioCategory =
  | 'All'
  | 'Brand Identity'
  | 'Website Development'
  | 'YouTube Creatives'
  | 'Instagram Campaigns'
  | 'AI Image Generation'
  | 'AI Video Production'
  | 'Advertising Creatives'
  | 'Product Photography'
  | 'Promotional Videos';

export interface ProjectItem {
  id: string;
  title: string;
  client: string;
  category: PortfolioCategory;
  year: string;
  heroImage: string;
  gallery: string[];
  summary: string;
  challenge: string;
  solution: string;
  deliverables: string[];
  results: {
    label: string;
    value: string;
  }[];
  testimonial?: {
    quote: string;
    author: string;
    role: string;
    company: string;
  };
}

export interface ProcessStep {
  step: string;
  name: string;
  tagline: string;
  description: string;
  deliverables: string[];
  duration: string;
}

export interface ValuePillar {
  number: string;
  title: string;
  description: string;
  detail: string;
}

export interface TargetAudience {
  id: string;
  title: string;
  badge: string;
  problem: string;
  solution: string;
  recommendedServices: string[];
}

export type PricingCategory = 'all' | 'retainers' | 'web-dev';

export interface PricingPackageItem {
  id: string;
  category: 'retainers' | 'web-dev';
  packageNumber: string; // e.g. "PACKAGE 01"
  title: string;
  subtitle: string;
  price: string; // e.g. "₹55K", "₹32K", "₹25K", "₹28K", "₹30K"
  period: string; // e.g. "/ month" or "/ project"
  isPopular?: boolean;
  iconType: 'sparkles' | 'youtube' | 'instagram' | 'globe' | 'palette' | 'film' | 'zap' | 'code';
  deliverables: string[];
  workflowTitle?: string;
  workflowDetails: string[];
  ctaText?: string;
}

export interface InquiryFormData {
  name: string;
  businessName: string;
  email: string;
  whatsapp: string;
  businessType: string;
  services: string[];
  estimatedBudget: string;
  description: string;
}
