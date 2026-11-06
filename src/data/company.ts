import { ProcessStep, ValuePillar, TargetAudience } from '../types';

export const companyIdentity = {
  name: 'DRS STUDIOS',
  tagline: 'Your Entire Digital World. One Creative Partner.',
  supportingStatement: 'Creative Intelligence. Digital Excellence.',
  positioning: 'DRS STUDIOS helps businesses establish, manage, and elevate their digital presence through social media management, website development, creative production, and AI-powered digital solutions.',
  aboutHeadline: 'WE MAKE DIGITAL WORK BETTER.',
  aboutContent: [
    'DRS STUDIOS is a digital solutions and creative production company built to simplify how businesses operate and grow online.',
    'We bring strategy, creativity, technology, and execution together to create meaningful digital experiences.',
    'Our approach is simple: understand the business, create with purpose, and deliver with precision.'
  ],
  stats: [
    { label: 'Completed Projects', value: '140+' },
    { label: 'Average Growth Multiplier', value: '4.8x' },
    { label: 'Client Retention Rate', value: '96%' },
    { label: 'Global & Indian Partners', value: '12 Countries' },
  ],
  contact: {
    email: 'contact@drsstudios.com',
    whatsapp: '+919876543210',
    displayPhone: '+91 98765 43210',
    location: 'Mumbai, India — Serving Global Clients',
    instagram: 'https://instagram.com/drsstudios',
    youtube: 'https://youtube.com/@drsstudios',
    status: 'Accepting Select Q2/Q3 2026 Collaborations',
  }
};

export const processSteps: ProcessStep[] = [
  {
    step: '01',
    name: 'DISCOVER',
    tagline: 'Deep Immersion Into Your DNA',
    description: 'Understand the business, audience, objectives, and vision. We conduct in-depth competitive audits, stakeholder interviews, and target market analysis.',
    deliverables: ['Brand & Competitor Audit', 'Target Persona Archetypes', 'Core Objective Alignment', 'Technical Scope Document'],
    duration: 'Week 1'
  },
  {
    step: '02',
    name: 'STRATEGIZE',
    tagline: 'Architecting The Master Roadmap',
    description: 'Develop a creative direction, service plan, and execution strategy. We map out content hierarchies, technological stacks, and measurable milestone trajectories.',
    deliverables: ['Creative Moodboards & Tone of Voice', 'Content Calendars / Web Architecture', 'Channel Strategy Blueprint', 'Production Schedule'],
    duration: 'Week 2'
  },
  {
    step: '03',
    name: 'CREATE',
    tagline: 'Relentless High-Fidelity Execution',
    description: 'Produce the required digital assets, content, and experiences. From cinematic grading and generative AI workflows to pixel-perfect responsive web development.',
    deliverables: ['High-Res Creative Deliverables', 'Iterative Sprint Reviews', 'Interactive Web Prototypes', 'Rigorous Quality Assurance'],
    duration: 'Week 3–5'
  },
  {
    step: '04',
    name: 'DELIVER',
    tagline: 'Flawless Launch & Sustained Impact',
    description: 'Launch, publish, implement, and provide agreed support. We deploy live assets, monitor real-time audience metrics, and guarantee continuous optimization.',
    deliverables: ['Production Launch & Domain Deployment', 'Asset Library Handoff', 'Publishing & Analytics Sync', 'Ongoing Support & Reporting'],
    duration: 'Launch & Ongoing'
  }
];

export const whyUsPillars: ValuePillar[] = [
  {
    number: '01',
    title: 'ONE CREATIVE PARTNER',
    description: 'Manage multiple digital requirements through one coordinated creative partner.',
    detail: 'Eliminate the chaotic friction of juggling separate web agencies, freelance video editors, thumbnail designers, and social media managers. We unite all under one roof.'
  },
  {
    number: '02',
    title: 'STRATEGIC EXECUTION',
    description: 'Every project begins with a clear understanding of business objectives.',
    detail: 'We do not design in a vacuum. Every layout, frame of video, and headline is engineered to generate trust, accelerate conversion, and compound brand equity.'
  },
  {
    number: '03',
    title: 'CREATIVE EXCELLENCE',
    description: 'High-quality design, content, and digital production.',
    detail: 'International aesthetic standards inspired by luxury editorial publishing and cinematic studio production. No generic templates, no compromised aesthetics.'
  },
  {
    number: '04',
    title: 'FLEXIBLE SOLUTIONS',
    description: 'Services customized according to business requirements and budgets.',
    detail: 'Modular packages tailored precisely to your growth stage. We scale up production or focus on high-impact sprints without bloated overhead or locked contracts.'
  },
  {
    number: '05',
    title: 'CONSISTENT BRANDING',
    description: 'Maintain a coherent visual identity across digital platforms.',
    detail: 'Your website, Instagram grid, YouTube packaging, and paid ads speak one unified visual language that builds instant brand recognition and executive prestige.'
  },
  {
    number: '06',
    title: 'MODERN TECHNOLOGY',
    description: 'Use contemporary creative tools, AI workflows, and digital development technologies.',
    detail: 'Leverage cutting-edge generative AI models, high-performance web frameworks, and advanced post-production pipelines to produce superior output 5x faster.'
  }
];

export const targetAudiences: TargetAudience[] = [
  {
    id: 'fashion-jewellery',
    title: 'Fashion & Jewellery Brands',
    badge: 'Luxury & E-Commerce',
    problem: 'Generic photography and fragmented social grids fail to evoke the sensory desire and craftsmanship required to justify luxury pricing.',
    solution: 'Cinematic macro product reels, bespoke editorial aesthetic grids, and high-conversion e-commerce storefronts that look like luxury art books.',
    recommendedServices: ['Instagram Management', 'Creative Production Studio', 'Website Development']
  },
  {
    id: 'startups-founders',
    title: 'Startups & Growing Companies',
    badge: 'Scale & Authority',
    problem: 'Fast-moving teams lack the internal creative bandwidth to build credible web presences while simultaneously producing investor and customer media.',
    solution: 'Turnkey full-stack digital flagship builds paired with AI-accelerated marketing assets and authority-building content pipelines.',
    recommendedServices: ['Website Development', 'Complete Digital Management', 'Creative Production Studio']
  },
  {
    id: 'creators-personal-brands',
    title: 'Content Creators & Personal Brands',
    badge: 'Influence & Audience Growth',
    problem: 'Stuck on the burnout treadmill of editing, thumbnail design, and multi-platform distribution instead of focusing on content and monetization.',
    solution: 'End-to-end YouTube channel strategy, high-CTR thumbnail systems, short-form editing, and high-converting personal websites.',
    recommendedServices: ['YouTube Management', 'Instagram Management', 'Creative Production Studio']
  },
  {
    id: 'smes-local',
    title: 'SMEs & Professional Services',
    badge: 'Credibility & Inquiries',
    problem: 'Outdated websites and dormant social profiles lead prospective high-value clients to doubt legitimacy and choose competitors.',
    solution: 'Modernization of your digital footprint with sleek corporate design, lead-capture architectures, and professional brand storytelling.',
    recommendedServices: ['Website Development', 'Complete Digital Management']
  }
];
