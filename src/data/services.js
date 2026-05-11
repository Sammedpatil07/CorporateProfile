import {
  Globe, Smartphone, Cloud, Palette, TrendingUp, Shield,
  Code, Database, BarChart3, Megaphone, Users, Cpu
} from 'lucide-react';

const services = [
  {
    id: 1,
    slug: 'web-development',
    title: 'Web Development',
    icon: Globe,
    shortDescription: 'Crafting high-performance, responsive websites that convert visitors into customers.',
    fullDescription: 'We build modern, scalable web applications using cutting-edge technologies like React, Next.js, and Node.js. Our websites are engineered for speed, SEO, and conversion optimization — ensuring your digital presence drives real business results.',
    features: [
      'Custom React / Next.js applications',
      'E-commerce platforms & marketplaces',
      'Progressive Web Apps (PWA)',
      'Performance optimization & Core Web Vitals',
      'CMS integration (WordPress, Strapi, Contentful)',
      'API development & third-party integrations'
    ],
    process: [
      { step: 'Discovery', desc: 'Understanding your goals, audience, and requirements' },
      { step: 'Design', desc: 'Wireframing and visual design in Figma' },
      { step: 'Development', desc: 'Agile development with weekly sprints' },
      { step: 'Launch', desc: 'Testing, deployment, and post-launch support' }
    ],
    color: '#2563EB'
  },
  {
    id: 2,
    slug: 'mobile-apps',
    title: 'Mobile Applications',
    icon: Smartphone,
    shortDescription: 'Native and cross-platform apps that deliver exceptional user experiences.',
    fullDescription: 'From concept to App Store, we design and develop mobile applications that users love. Our cross-platform expertise with React Native and Flutter ensures your app reaches the widest audience with a native feel.',
    features: [
      'iOS & Android native development',
      'React Native cross-platform apps',
      'Flutter development',
      'App Store optimization (ASO)',
      'Push notifications & real-time features',
      'Offline-first architecture'
    ],
    process: [
      { step: 'Strategy', desc: 'Market research and technical feasibility' },
      { step: 'Prototype', desc: 'Interactive prototypes and user testing' },
      { step: 'Build', desc: 'Iterative development with beta releases' },
      { step: 'Deploy', desc: 'App store submission and growth support' }
    ],
    color: '#7C3AED'
  },
  {
    id: 3,
    slug: 'cloud-consulting',
    title: 'Cloud & DevOps',
    icon: Cloud,
    shortDescription: 'Scalable cloud infrastructure and automation to power your growth.',
    fullDescription: 'We help businesses migrate, optimize, and manage cloud infrastructure across AWS, Azure, and Google Cloud. Our DevOps practices ensure continuous delivery, security, and cost efficiency.',
    features: [
      'Cloud migration & architecture design',
      'AWS, Azure, GCP expertise',
      'CI/CD pipeline setup',
      'Container orchestration (Docker, Kubernetes)',
      'Infrastructure as Code (Terraform)',
      'Cost optimization & monitoring'
    ],
    process: [
      { step: 'Audit', desc: 'Assess current infrastructure and pain points' },
      { step: 'Architect', desc: 'Design scalable cloud architecture' },
      { step: 'Migrate', desc: 'Zero-downtime migration execution' },
      { step: 'Optimize', desc: 'Continuous monitoring and cost optimization' }
    ],
    color: '#0EA5E9'
  },
  {
    id: 4,
    slug: 'branding-design',
    title: 'Branding & Design',
    icon: Palette,
    shortDescription: 'Building memorable brand identities that resonate with your audience.',
    fullDescription: 'Our creative team crafts compelling brand identities, UI/UX designs, and visual systems that differentiate your business. We blend strategy with aesthetics to create brands that leave lasting impressions.',
    features: [
      'Brand identity & logo design',
      'UI/UX design for web & mobile',
      'Design systems & component libraries',
      'Marketing collateral & print design',
      'Motion graphics & animation',
      'Brand strategy & guidelines'
    ],
    process: [
      { step: 'Research', desc: 'Competitive analysis and brand positioning' },
      { step: 'Concept', desc: 'Multiple creative directions and moodboards' },
      { step: 'Refine', desc: 'Iterative refinement based on feedback' },
      { step: 'Deliver', desc: 'Complete brand kit and guidelines' }
    ],
    color: '#EC4899'
  },
  {
    id: 5,
    slug: 'digital-marketing',
    title: 'Digital Marketing',
    icon: TrendingUp,
    shortDescription: 'Data-driven strategies to grow your online presence and revenue.',
    fullDescription: 'We implement comprehensive digital marketing strategies combining SEO, PPC, social media, and content marketing. Our data-driven approach ensures maximum ROI and sustainable growth for your business.',
    features: [
      'Search Engine Optimization (SEO)',
      'Pay-Per-Click advertising (Google Ads)',
      'Social media marketing & management',
      'Content marketing & strategy',
      'Email marketing campaigns',
      'Analytics & performance reporting'
    ],
    process: [
      { step: 'Analyze', desc: 'Market analysis and opportunity identification' },
      { step: 'Strategize', desc: 'Custom marketing plan with KPIs' },
      { step: 'Execute', desc: 'Multi-channel campaign deployment' },
      { step: 'Report', desc: 'Monthly analytics and strategy refinement' }
    ],
    color: '#F59E0B'
  },
  {
    id: 6,
    slug: 'cybersecurity',
    title: 'Cybersecurity',
    icon: Shield,
    shortDescription: 'Protecting your digital assets with enterprise-grade security solutions.',
    fullDescription: 'We provide comprehensive cybersecurity services including vulnerability assessments, penetration testing, and security architecture design. Our proactive approach keeps your business safe from evolving threats.',
    features: [
      'Security audits & vulnerability assessment',
      'Penetration testing',
      'Security architecture design',
      'Compliance consulting (GDPR, ISO 27001)',
      'Incident response planning',
      'Security awareness training'
    ],
    process: [
      { step: 'Assess', desc: 'Comprehensive security posture evaluation' },
      { step: 'Plan', desc: 'Risk-based security roadmap' },
      { step: 'Implement', desc: 'Deploy security controls and tools' },
      { step: 'Monitor', desc: 'Continuous threat monitoring and response' }
    ],
    color: '#10B981'
  }
];

export default services;
