export interface PageSEO {
  path: string;
  title: string;
  description: string;
  mainKeyword: string;
  relatedKeywords: string[];
  canonical: string;
  ogType: string;
  schema: Record<string, unknown>;
}

export const BASE_PRODUCTION_URL = 'https://ais-dev-y74imuttq57s5lso5kwuzq-40350660207.asia-east1.run.app';

export const PAGES_SEO: Record<string, PageSEO> = {
  '/': {
    path: '/',
    title: 'Shree Balaji Bricks | Quality Bricks for Construction',
    description: 'Discover Shree Balaji Bricks for quality construction bricks, product information, bulk supply enquiries and reliable brick solutions for building projects.',
    mainKeyword: 'Shree Balaji Bricks',
    relatedKeywords: ['brick suppliers', 'quality bricks for construction'],
    canonical: `${BASE_PRODUCTION_URL}/`,
    ogType: 'website',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: 'Shree Balaji Bricks',
      description: 'Manufacturer and wholesale supplier of quality construction bricks including red clay bricks, fly ash bricks, concrete blocks, and paving bricks.',
      url: `${BASE_PRODUCTION_URL}/`,
      areaServed: 'Regional Construction Sites and Building Projects',
      priceRange: '₹₹',
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Construction Bricks & Masonry Products',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Product',
              name: 'Red Clay Bricks',
              description: 'Traditional kiln-fired natural clay building bricks with high compressive strength.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Product',
              name: 'Fly Ash Bricks',
              description: 'Hydraulically pressed uniform masonry units with smooth finish and minimal mortar consumption.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Product',
              name: 'Concrete Blocks',
              description: 'High load-bearing solid and hollow concrete masonry blocks for foundations and walls.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Product',
              name: 'Paving Bricks',
              description: 'Interlocking heavy-duty clay and concrete pavers for driveways and walkways.',
            },
          },
        ],
      },
    },
  },
  '/types-of-bricks': {
    path: '/types-of-bricks',
    title: 'Types of Bricks | Red Clay and Fly Ash Bricks',
    description: 'Explore different types of bricks used in construction, including red clay bricks and fly ash bricks. Learn about their features, uses and suitability for building projects.',
    mainKeyword: 'types of bricks',
    relatedKeywords: ['red clay bricks', 'fly ash bricks'],
    canonical: `${BASE_PRODUCTION_URL}/types-of-bricks`,
    ogType: 'article',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      name: 'Types of Bricks | Red Clay and Fly Ash Bricks',
      description: 'Explore different types of bricks used in construction, including red clay bricks and fly ash bricks.',
      url: `${BASE_PRODUCTION_URL}/types-of-bricks`,
      mainEntity: {
        '@type': 'ItemList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Red Clay Bricks',
            description: 'Kiln-fired clay bricks offering authentic texture, high load-bearing capacity, and thermal efficiency.',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Fly Ash Bricks',
            description: 'High-strength pulverized fuel ash blocks with uniform geometry and smooth plaster-ready finish.',
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: 'Concrete Blocks',
            description: 'Solid and hollow dense concrete units for fast commercial erection and retaining structures.',
          },
          {
            '@type': 'ListItem',
            position: 4,
            name: 'Paving Bricks',
            description: 'Heavy wear-resistant interlocking pavers for driveways, pedestrian walkways, and landscape design.',
          },
        ],
      },
    },
  },
  '/how-to-choose-quality-bricks': {
    path: '/how-to-choose-quality-bricks',
    title: 'How to Choose Quality Bricks for House Construction',
    description: 'Learn how to choose quality bricks for house construction, identify common signs of good bricks and understand important factors before purchasing building materials.',
    mainKeyword: 'how to choose quality bricks',
    relatedKeywords: ['good quality bricks', 'bricks for house construction'],
    canonical: `${BASE_PRODUCTION_URL}/how-to-choose-quality-bricks`,
    ogType: 'article',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: 'How to Choose Quality Bricks for House Construction',
      description: 'Learn how to choose quality bricks for house construction, identify common signs of good bricks and understand important factors before purchasing building materials.',
      author: {
        '@type': 'Organization',
        name: 'Shree Balaji Bricks',
      },
      publisher: {
        '@type': 'Organization',
        name: 'Shree Balaji Bricks',
      },
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': `${BASE_PRODUCTION_URL}/how-to-choose-quality-bricks`,
      },
    },
  },
  '/brick-price-guide': {
    path: '/brick-price-guide',
    title: 'Brick Price Guide | Understand Brick Costs and Quantities',
    description: 'Understand the factors affecting brick prices, compare brick types and learn what to consider when estimating the cost of bricks for a construction project.',
    mainKeyword: 'brick price',
    relatedKeywords: ['cost of bricks', 'bricks per 1000 price'],
    canonical: `${BASE_PRODUCTION_URL}/brick-price-guide`,
    ogType: 'article',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: 'Brick Price Guide | Understand Brick Costs and Quantities',
      description: 'Understand the factors affecting brick prices, compare brick types and learn what to consider when estimating the cost of bricks for a construction project.',
      author: {
        '@type': 'Organization',
        name: 'Shree Balaji Bricks',
      },
      publisher: {
        '@type': 'Organization',
        name: 'Shree Balaji Bricks',
      },
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': `${BASE_PRODUCTION_URL}/brick-price-guide`,
      },
    },
  },
};
