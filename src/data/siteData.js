export const navItems = [
  { label: 'Services', key: 'services', hasDropdown: true },
  { label: 'Our work', key: 'our-work', hasDropdown: false, target: '#our-work' },
  { label: 'Why us', key: 'why-us', hasDropdown: true },
  { label: 'Resources', key: 'resources', hasDropdown: true },
  { label: 'Pricing', key: 'pricing', hasDropdown: false, target: '#success' },
  { label: 'Enterprise', key: 'enterprise', hasDropdown: false, target: '#creative' },
];

export const servicesMenu = [
  {
    chip: 'Creative design services',
    tone: 'lime',
    groups: [
      {
        items: [
          { title: 'Ad creative', desc: 'Eye-catching designs that perform', to: '/work/reddit', icon: 'target' },
          { title: 'Social media creative', desc: 'Engaging assets for all platforms', to: '/work/reddit', icon: 'plus-circle' },
          { title: 'Presentation design', desc: 'Captivating slides that tell your story', to: '/work/microsoft', icon: 'monitor' },
          { title: 'Illustration design', desc: 'Visual storytelling for your brand', to: '/work/bolt', icon: 'aperture' },
          { title: 'Branding services', desc: 'Expertise & custom design services', to: '/work/pernod-ricard', icon: 'users' },
          { title: 'eBooks & report design', desc: 'Your digital content supercharged', to: '/work/pernod-ricard', icon: 'book' },
          { title: 'Concept creation', desc: 'Big ideas crafted for maximum impact', to: '/work/bolt', icon: 'bulb' },
          { title: 'Print design', desc: 'Tangible designs that leave a lasting impression', to: '/work/oyster', icon: 'map' },
          { title: 'Packaging & merchandise design', desc: 'Bring your brand to life', to: '/work/pernod-ricard', icon: 'package' },
        ],
      },
    ],
  },
  {
    chip: 'Specialized production services',
    tone: 'teal',
    groups: [
      {
        items: [
          { title: 'Video production', desc: 'Effortless video production at scale', to: '/work/bolt', icon: 'play' },
          { title: 'Motion design', desc: 'For websites, ads, and presentations', to: '/work/bolt', icon: 'activity' },
          { title: 'Immersive design', desc: 'Innovative solutions for 3D/AR design services', to: '/work/microsoft', icon: 'box' },
          { title: 'Email creation', desc: 'Click-worthy emails that drive engagement', to: '/work/oyster', icon: 'at' },
          { title: 'Web design', desc: 'Stunning websites and landing pages built to engage', to: '/work/oyster', icon: 'smartphone' },
          { title: 'Design Systems', desc: 'Robust design systems that drive visual consistency', to: '/work/microsoft', icon: 'grid', isNew: true },
          { title: 'Product Design', desc: 'Engaging & intuitive experiences', to: '/work/bolt', icon: 'layout', isNew: true },
          { title: 'Copywriting', desc: 'Persuasive words for clarity and action', to: '/work/outbrain', icon: 'type', isNew: true },
        ],
      },
    ],
  },
  {
    chip: 'AI services',
    tone: 'blue',
    groups: [
      {
        items: [
          { title: 'AI-powered creative', desc: 'Human brilliance powered by AI', to: '/work/microsoft', icon: 'sparkle' },
          { title: 'AI consulting', desc: 'Maximize AI with tailored strategies', to: '/work/oyster', icon: 'message' },
          { title: 'Automation', desc: 'Move fast without compromising craft', to: '/work/outbrain', icon: 'sliders', isNew: true },
        ],
      },
      {
        chip: 'Marketing services',
        tone: 'sand',
        items: [
          { title: 'Marketing strategy', desc: 'Grow your brand with expert consultants', to: '/work/outbrain', icon: 'shuffle', isNew: true },
          { title: 'Campaign strategy', desc: 'Strategy, messaging, and concept for multi-market campaigns', to: '/work/marqeta', icon: 'flag', isNew: true },
        ],
      },
    ],
  },
];

export const resourcesMenu = {
  links: [
    { title: 'Learning Center', desc: 'Tips, guides and recordings', to: '/work/microsoft' },
    { title: 'Events & Summits', desc: 'Upcoming events and sessions', to: '/work/oyster' },
    { title: 'Guides', desc: 'Insights from marketing leaders', to: '/work/pernod-ricard' },
    { title: 'Reports', desc: 'Data for smarter decisions', to: '/work/marqeta' },
    { title: 'Video library', desc: 'Superside latest videos', to: '/work/bolt' },
    { title: 'Playbooks', desc: 'Quick ways to step up your game', to: '/work/reddit' },
  ],
  blogs: [
    {
      title: 'How AI has changed the state of creative',
      image:
        'https://images.unsplash.com/photo-1526498460520-4c246339dccb?auto=format&fit=crop&w=1200&q=80',
      to: '/work/microsoft',
    },
    {
      title: 'Design systems for SaaS: Top agencies',
      image:
        'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80',
      to: '/work/bolt',
    },
  ],
  stories: [
    {
      title: 'Transforming creative workflows with AI',
      image:
        'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80',
      to: '/work/oyster',
    },
    {
      title: 'How Fortune 500 doubled adoption',
      image:
        'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80',
      to: '/work/pernod-ricard',
    },
  ],
};

export const whyUsCards = [
  {
    title: 'Our creative talent',
    desc: 'Meet your dedicated team',
    image:
      'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=80',
    to: '/work/pernod-ricard',
  },
  {
    title: 'AI excellence',
    desc: "Your shortcut to AI's creative advantage",
    image:
      'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&w=1200&q=80',
    to: '/work/microsoft',
  },
  {
    title: 'Our technology',
    desc: 'The tech powering your creative edge',
    image:
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80',
    to: '/work/bolt',
  },
];

export const projects = [
  {
    id: 'pernod-ricard',
    title: 'Pernod Ricard',
    category: 'Food Beverage',
    description:
      'Superside helped Pernod Ricard USA turn a static quarterly report into a premium editorial experience that lifted engagement by 300%.',
    tags: ['EBook & Digital Reports', 'Campaign Design', 'Motion'],
    heroThumb:
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1481391319762-47dff72954d9?auto=format&fit=crop&w=1300&q=80',
      'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1514361892635-6ab7b7a5e6a3?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&w=1300&q=80',
      'https://images.unsplash.com/photo-1478145046317-39f10e56b5e9?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1497534446932-c925b458314e?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1445116572660-236099ec97a0?auto=format&fit=crop&w=900&q=80',
    ],
  },
  {
    id: 'reddit',
    title: 'Reddit Recap',
    category: 'Product Launch',
    description:
      'A bold campaign world for Reddit recap visuals designed for social-first motion and interactive storytelling across channels.',
    tags: ['Ad Creative', 'Social Media', 'Illustration'],
    heroThumb:
      'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=900&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?auto=format&fit=crop&w=1300&q=80',
      'https://images.unsplash.com/photo-1611162616475-46b635cb6868?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1611162618758-2a29f9ef4f9a?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1611162616475-46b635cb6868?auto=format&fit=crop&w=1300&q=80',
      'https://images.unsplash.com/photo-1611605698335-8b1569810432?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1611162616805-6f31c7f2d8f4?auto=format&fit=crop&w=900&q=80',
    ],
  },
  {
    id: 'bolt',
    title: 'Bolt',
    category: 'SaaS',
    description:
      "Bolt needed a B2B explainer video to show how seamless their checkout is. Superside led it from concept to delivery with bold motion design.",
    tags: ['Motion Design', 'Ad Creative', 'Video Production'],
    heroThumb:
      'https://images.unsplash.com/photo-1522199710521-72d69614c702?auto=format&fit=crop&w=900&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1300&q=80',
      'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1484417894907-623942c8ee29?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1523475472560-d2df97ec485c?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1517336714739-489689fd1ca8?auto=format&fit=crop&w=1300&q=80',
    ],
  },
  {
    id: 'oyster',
    title: 'Oyster',
    category: 'B2B',
    description:
      'A global thought-leadership launch with campaign pages, paid social, and interactive assets crafted for a distributed workforce audience.',
    tags: ['Web Design', 'Paid Social', 'Campaign Strategy'],
    heroThumb:
      'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=900&q=80',
    ],
  },
  {
    id: 'microsoft',
    title: 'Microsoft',
    category: 'Enterprise',
    description:
      'From keynotes to growth campaigns, Superside delivered enterprise-ready design systems and multilingual content for global launches.',
    tags: ['Design System', 'Presentation', 'Localization'],
    heroThumb:
      'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=900&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1300&q=80',
      'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=900&q=80',
    ],
  },
  {
    id: 'outbrain',
    title: 'Outbrain',
    category: 'Performance Marketing',
    description:
      'Creative production pipeline for webinars and enterprise events with reusable templates and rapid turnaround from brief to launch.',
    tags: ['Webinar Creative', 'Templates', 'Scale Production'],
    heroThumb:
      'https://images.unsplash.com/photo-1516382799247-87df95d790b7?auto=format&fit=crop&w=900&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1551836022-deb4988cc6c0?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=900&q=80',
    ],
  },
  {
    id: 'marqeta',
    title: 'Marqeta',
    category: 'Fintech',
    description:
      'End-to-end creative support for fintech storytelling, social campaigns, motion explainers, and product launch assets.',
    tags: ['Fintech Creative', 'Launch Campaign', 'Video'],
    heroThumb:
      'https://images.unsplash.com/photo-1559526324-593bc073d938?auto=format&fit=crop&w=900&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1559526324-593bc073d938?auto=format&fit=crop&w=1300&q=80',
      'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=900&q=80',
    ],
  },
];

export const heroColumns = [
  ['pernod-ricard', 'microsoft', 'reddit', 'marqeta', 'oyster', 'outbrain'],
  ['bolt', 'reddit', 'pernod-ricard', 'microsoft', 'marqeta', 'outbrain'],
  ['oyster', 'outbrain', 'marqeta', 'bolt', 'microsoft', 'pernod-ricard'],
];

export const brandLogos = [
  'Figma',
  'Grammarly',
  'Amazon',
  'Booking.com',
  'BCG',
  'Coinbase',
  'Colgate',
  'Databricks',
  'Dropbox',
  'MasterClass',
  'Palo Alto',
  'Reddit',
  'Rakuten',
  'Robinhood',
  'Reuters',
  'Vimeo',
  'Intuit',
];

export const flexCards = [
  {
    title: 'Top global creative talent',
    detail: "We're not restricted by borders. AI-powered quality work for your brand.",
    image:
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1200&q=80',
    tone: 'tone-mint',
  },
  {
    title: 'Ultra-fast turnaround times',
    detail: 'Flexible process with creative ops support and dedicated delivery rhythm.',
    image:
      'https://images.unsplash.com/photo-1487014679447-9f8336841d58?auto=format&fit=crop&w=1200&q=80',
    tone: 'tone-cream',
  },
  {
    title: 'Flexible subscription model',
    detail: 'Scale up or down with one team that adapts with your roadmap.',
    image:
      'https://images.unsplash.com/photo-1535223289827-42f1e9919769?auto=format&fit=crop&w=1200&q=80',
    tone: 'tone-lime',
  },
];

export const successStats = [
  {
    body: 'Startup, enterprises and mid-market companies trust Superside to deliver pixel-perfect creative, at scale.',
    cta: 'Read more in the Forrester TEI report',
    value: '500+',
  },
  {
    body: 'Projects delivered to this day and counting with consistent quality and speed.',
    cta: 'Read more in the Forrester TEI report',
    value: '70k+',
  },
  {
    body: 'Brands see a three-year ROI of 94% on their Superside subscription.',
    cta: 'Read more in the Forrester TEI report',
    value: '94%',
  },
  {
    body: 'Brands see a six-month payback period on their Superside subscription.',
    cta: 'Read more in the Forrester TEI report',
    value: '6 months',
  },
];

export const storyVideos = [
  {
    id: 'forter-story',
    title: '"It makes me look good." How Forter uses Superside to turn ideas into reality',
    source: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    poster:
      'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1600&q=80',
  },
  {
    id: 'palo-alto-story',
    title: '"Hassle-free" Why Palo Alto Networks uses Superside for scale and creativity',
    source: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
    poster:
      'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1600&q=80',
  },
];

export const creativeSectionVideo = {
  source: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
  poster:
    'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1600&q=80',
};
