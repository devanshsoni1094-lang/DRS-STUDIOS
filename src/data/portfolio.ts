import { ProjectItem, PortfolioCategory } from '../types';

export const portfolioCategories: PortfolioCategory[] = [
  'All',
  'Brand Identity',
  'Website Development',
  'YouTube Creatives',
  'Instagram Campaigns',
  'AI Image Generation',
  'AI Video Production',
  'Advertising Creatives',
  'Product Photography',
  'Promotional Videos',
];

export const portfolioData: ProjectItem[] = [
  {
    id: 'aurelia-atelier',
    title: 'Aurelia Haute Horlogerie',
    client: 'Aurelia Geneva & Mumbai',
    category: 'Brand Identity',
    year: '2026',
    heroImage: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1400&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1509114397022-ed747cca3f65?auto=format&fit=crop&w=1200&q=80'
    ],
    summary: 'A minimalist, heritage-infused identity system and digital design language for an independent Swiss-Indian high watchmaking maison.',
    challenge: 'Aurelia required an identity that honored centuries-old horological craft while resonating with modern digital-native collectors across Europe and Asia.',
    solution: 'Engineered an ultra-refined typographic brandmark, bespoke metallic packaging standards, and a dark editorial visual system with custom micro-interactions.',
    deliverables: ['Brand Architecture', 'Monogram & Wordmark', 'Packaging Guidelines', 'Digital Design Tokens'],
    results: [
      { label: 'Collector Inquiries', value: '+340%' },
      { label: 'Brand Perception Score', value: '98/100' }
    ],
    testimonial: {
      quote: 'DRS STUDIOS understood our restraint and reverence for craftsmanship. The visual identity elevated us instantly to peer status with top Swiss independents.',
      author: 'Marcus Vance',
      role: 'Creative Director',
      company: 'Aurelia Geneva'
    }
  },
  {
    id: 'lumina-saas',
    title: 'Lumina Cloud Intelligence',
    client: 'Lumina AI Inc.',
    category: 'Website Development',
    year: '2026',
    heroImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1400&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80'
    ],
    summary: 'A next-generation digital flagship website featuring interactive WebGL shaders, sub-second latency, and frictionless conversion architecture.',
    challenge: 'Lumina needed to communicate deeply technical neural-infrastructure capabilities to enterprise CTOs without burying them in incomprehensible jargon.',
    solution: 'Designed and engineered an ultra-fast React website with interactive data simulations, clear value propositions, and an intuitive live terminal preview.',
    deliverables: ['UI/UX Design System', 'React 19 & Tailwind Build', 'Motion Transitions', 'Technical SEO'],
    results: [
      { label: 'Demo Conversion Rate', value: '4.6%' },
      { label: 'Lighthouse Performance', value: '100/100' }
    ],
    testimonial: {
      quote: 'Our bounce rate dropped by 42% on day one. DRS STUDIOS brought a standard of aesthetic excellence that tech companies rarely achieve.',
      author: 'Elena Rostova',
      role: 'VP of Product',
      company: 'Lumina AI'
    }
  },
  {
    id: 'velocity-media',
    title: 'Velocity Tech Media Channel',
    client: 'Velocity Media Network',
    category: 'YouTube Creatives',
    year: '2025 - 2026',
    heroImage: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=1400&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&w=1200&q=80'
    ],
    summary: 'Full-spectrum YouTube channel packaging, thumbnail psychology, title optimization, and narrative pacing for a 1.2M subscriber channel.',
    challenge: 'Stagnating click-through rates (CTR 3.8%) and algorithmic saturation caused by legacy thumbnail aesthetics and predictable pacing.',
    solution: 'Restructured the thumbnail typography, color grading, and A/B testing pipeline while re-engineering opening hook pacing for the first 45 seconds.',
    deliverables: ['High-CTR Thumbnail System', 'Hook Architecture', 'Video Title Strategy', 'SEO & Chapter Tagging'],
    results: [
      { label: 'Average CTR Surge', value: '9.4%' },
      { label: 'Monthly Organic Views', value: '12.8M' }
    ],
    testimonial: {
      quote: 'The difference between average thumbnails and DRS STUDIOS thumbnails was literally millions of views and massive sponsorship revenue.',
      author: 'Karan Mehra',
      role: 'Creator & Founder',
      company: 'Velocity Media'
    }
  },
  {
    id: 'elysian-jewelry',
    title: 'Elysian High Fine Jewels',
    client: 'Elysian Jewels',
    category: 'Instagram Campaigns',
    year: '2026',
    heroImage: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=1400&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=1200&q=80'
    ],
    summary: 'A curated visual narrative, bespoke editorial carousels, and cinematic macro reels highlighting bespoke 18k gold and diamond collections.',
    challenge: 'Standing out in a hyper-competitive luxury Instagram landscape where generic white-background product shots fail to provoke desire.',
    solution: 'Designed an editorial layout system pairing dramatic warm chiaroscuro lighting with tactile macro video storytelling and artisanal voiceover captions.',
    deliverables: ['Editorial Grid Curation', 'Macro Reels Direction', 'Story Sales Funnels', 'Influencer Collaboration Kit'],
    results: [
      { label: 'Direct DM Sales Volume', value: '+185%' },
      { label: 'Saves & Shares Rate', value: '6.2x' }
    ],
    testimonial: {
      quote: 'DRS STUDIOS turned our Instagram into a virtual salon that high-net-worth clients browse like a Paris exhibition.',
      author: 'Sunaina Singhania',
      role: 'Founder & Head Jeweller',
      company: 'Elysian Fine Jewels'
    }
  },
  {
    id: 'cyber-synthetic',
    title: 'NeuraGenesis AI Campaign',
    client: 'Synthetica Spatial Labs',
    category: 'AI Image Generation',
    year: '2026',
    heroImage: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1400&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=1200&q=80'
    ],
    summary: 'Hyper-realistic AI-synthesized architectural visualizations and speculative product imagery created with custom prompt models and neural upscalers.',
    challenge: 'Traditional physical set builds and 3D rendering for 40 conceptual spaces would have taken 9 months and cost over ₹1.5 Crore.',
    solution: 'Developed a proprietary LoRA-trained workflow generating ultra-high-resolution 12K key visuals with realistic material refractions and shadows.',
    deliverables: ['Generative Neural Concept Art', '12K Print Master Assets', 'Material Physics Tuning', 'Billboard Campaign Suite'],
    results: [
      { label: 'Production Cost Reduction', value: '78%' },
      { label: 'Time to Market', value: '10 Days' }
    ]
  },
  {
    id: 'solis-cinematic',
    title: 'Solis Autonomous Horizon',
    client: 'Solis Mobility',
    category: 'AI Video Production',
    year: '2026',
    heroImage: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1400&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1508974239320-0a029497e820?auto=format&fit=crop&w=1200&q=80'
    ],
    summary: 'A futuristic brand film blending photorealistic AI neural camera trajectories with commercial-grade sound engineering and color grading.',
    challenge: 'Showcasing unreleased autonomous vehicle concepts in dynamic weather conditions before physical prototypes were completed.',
    solution: 'Generated cinematic camera fly-throughs, realistic particle dynamics, and dramatic anamorphic flare compositions using advanced generative video workflows.',
    deliverables: ['Concept Narrative & Script', 'AI Neural Video Sequences', 'Custom Cinematic Foley', 'Multi-Aspect Commercial Cuts'],
    results: [
      { label: 'Global Video Views', value: '4.2M' },
      { label: 'Earned Media Impressions', value: '18M' }
    ]
  },
  {
    id: 'kaviar-fragrance',
    title: 'Verve Botanique Luxury Scents',
    client: 'Maison Verve',
    category: 'Product Photography',
    year: '2026',
    heroImage: 'https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&w=1400&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=1200&q=80'
    ],
    summary: 'Atmospheric still life and luxury commercial product imagery capturing liquid glass refractions and organic botanical textures.',
    challenge: 'Capturing clear glass bottles without dull reflections while making the tactile aroma sensation palpable through a screen.',
    solution: 'Designed an artisanal studio lighting rig with dark mirror water basins, botanical smoke diffusion, and focus-stacked micro-detail photography.',
    deliverables: ['Studio Art Direction', 'High-Res E-Commerce Imagery', 'Editorial Campaign Lookbook', 'Retouching & Color Grading'],
    results: [
      { label: 'E-Commerce Cart Size', value: '+38%' },
      { label: 'Editorial Press Features', value: '14 Outlets' }
    ]
  },
  {
    id: 'zenith-performance',
    title: 'Apex Kinetic Ad Campaign',
    client: 'Apex Performance Apparel',
    category: 'Advertising Creatives',
    year: '2025 - 2026',
    heroImage: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1400&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1200&q=80'
    ],
    summary: 'High-conversion multi-format digital advertising creatives engineered for Meta, YouTube Shorts, and programmatic luxury display networks.',
    challenge: 'Combatting audience ad fatigue and rising customer acquisition costs (CAC) across competitive fitness and streetwear sectors.',
    solution: 'Produced a modular matrix of 45 high-velocity creative variants featuring bold typography, kinetic motion, and psychological hook variations.',
    deliverables: ['Ad Creative Matrix', 'Motion Design & Typography', 'Static Display Banners', 'ROAS Optimization Framework'],
    results: [
      { label: 'Return on Ad Spend (ROAS)', value: '4.8x' },
      { label: 'CAC Reduction', value: '-34%' }
    ]
  },
  {
    id: 'chronicle-film',
    title: 'The Modern Artisan Anthem',
    client: 'Heritage Craft Guild',
    category: 'Promotional Videos',
    year: '2026',
    heroImage: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1400&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1200&q=80'
    ],
    summary: 'A cinematic 3-minute brand manifesto film celebrating bespoke leathercraft, Japanese denim, and precision metalwork.',
    challenge: 'Condensing months of intricate artisan labor into a captivating video experience that converts passive viewers into loyal advocates.',
    solution: 'Directed and produced a cinematic documentary-style short film with anamorphic lenses, original ambient score, and intimate human storytelling.',
    deliverables: ['Full Documentary Short', '60s & 30s Cutdowns', 'Vertical Social Teasers', 'Cinema Master Audio Mix'],
    results: [
      { label: 'Global Video Completion Rate', value: '72%' },
      { label: 'Brand Sentiment Approval', value: '99.4%' }
    ]
  }
];
