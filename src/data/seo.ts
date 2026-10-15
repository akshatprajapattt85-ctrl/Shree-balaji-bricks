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
  '/blog': {
    path: '/blog',
    title: 'Brick & Construction Knowledge Hub | Shree Balaji Bricks',
    description: 'Explore expert articles and practical guides on brick manufacturing, quality testing, house construction, brick price estimation, and masonry advice.',
    mainKeyword: 'Shree Balaji Bricks blog',
    relatedKeywords: ['brick construction articles', 'brick buying guides', 'construction brick knowledge'],
    canonical: `${BASE_PRODUCTION_URL}/blog`,
    ogType: 'website',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      name: 'Brick & Construction Knowledge Hub | Shree Balaji Bricks',
      description: 'Explore expert articles and practical guides on brick manufacturing, quality testing, house construction, brick price estimation, and masonry advice.',
      url: `${BASE_PRODUCTION_URL}/blog`,
    },
  },
};

// Detailed metadata for all blog articles
const BLOG_METAS = [
  {
    slug: 'how-to-choose-quality-bricks',
    title: 'How to Choose Quality Bricks for House Construction | Shree Balaji Bricks',
    description: 'Learn how to choose quality bricks for house construction, identify common signs of good bricks and understand important factors before purchasing building materials.',
    mainKeyword: 'how to choose quality bricks',
    relatedKeywords: ['good quality bricks', 'bricks for house construction'],
  },
  {
    slug: 'best-bricks-for-house-construction',
    title: 'Which Bricks Are Best for House Construction? | Shree Balaji Bricks',
    description: 'Discover which bricks are best for house construction. Compare red clay, fly ash, and concrete blocks to find the ideal material for your building project.',
    mainKeyword: 'best bricks for house construction',
    relatedKeywords: ['bricks for house construction', 'types of bricks for construction'],
  },
  {
    slug: 'bricks-per-1000-price',
    title: 'How Much Do 1,000 Bricks Cost? | Shree Balaji Bricks',
    description: 'Understand the factors affecting the cost of 1,000 bricks, compare brick types, and learn how to request an accurate wholesale quotation for construction.',
    mainKeyword: 'bricks per 1000 price',
    relatedKeywords: ['brick price', 'cost of bricks'],
  },
  {
    slug: 'red-clay-bricks-vs-fly-ash-bricks',
    title: 'Red Clay Bricks vs Fly Ash Bricks | Shree Balaji Bricks',
    description: 'Compare red clay bricks vs fly ash bricks. Learn differences in strength, thermal insulation, water absorption, cost, and suitable construction applications.',
    mainKeyword: 'red clay bricks vs fly ash bricks',
    relatedKeywords: ['types of bricks', 'best bricks for house construction'],
  },
  {
    slug: 'how-to-identify-good-quality-bricks',
    title: 'How to Identify Good Quality Bricks | Shree Balaji Bricks',
    description: 'Learn how to identify good quality bricks with practical on-site tests, shape and color inspection, and standard compressive strength guidelines.',
    mainKeyword: 'how to identify good quality bricks',
    relatedKeywords: ['how to choose quality bricks', 'good quality bricks'],
  },
  {
    slug: 'types-of-bricks-for-construction',
    title: 'Different Types of Bricks Used in Construction | Shree Balaji Bricks',
    description: 'Explore different types of bricks used in construction, including burnt clay, fly ash, concrete masonry, and engineering pavers for modern building projects.',
    mainKeyword: 'types of bricks for construction',
    relatedKeywords: ['types of bricks', 'red clay bricks', 'fly ash bricks'],
  },
  {
    slug: 'bricks-required-to-build-a-house',
    title: 'How Many Bricks Are Needed to Build a House? | Shree Balaji Bricks',
    description: 'Calculate how many bricks are needed to build a house. Learn step-by-step wall estimation formulas, mortar deductions, and realistic wastage allowances.',
    mainKeyword: 'bricks required to build a house',
    relatedKeywords: ['cost of bricks for house construction', 'bricks per 1000 price'],
  },
  {
    slug: 'factors-affecting-brick-prices',
    title: 'Factors That Affect Brick Prices in Construction | Shree Balaji Bricks',
    description: 'Explore key factors that affect brick prices, including raw materials, kiln fuel costs, order volumes, transportation distance, and seasonal market demand.',
    mainKeyword: 'factors affecting brick prices',
    relatedKeywords: ['brick price', 'cost of bricks'],
  },
  {
    slug: 'things-to-check-before-buying-bricks',
    title: 'What Should You Check Before Buying Bricks? | Shree Balaji Bricks',
    description: 'Essential checklist of things to check before buying bricks, from physical dimensions and batch quality to supplier reliability and site unloading terms.',
    mainKeyword: 'things to check before buying bricks',
    relatedKeywords: ['how to choose quality bricks', 'wholesale brick suppliers'],
  },
  {
    slug: 'cost-of-bricks-for-house-construction',
    title: 'How to Calculate the Cost of Bricks for House Construction | Shree Balaji Bricks',
    description: 'Learn how to calculate the cost of bricks for house construction with an illustrative step-by-step example covering volume, haulage, and wastage margins.',
    mainKeyword: 'cost of bricks for house construction',
    relatedKeywords: ['brick price', 'bricks per 1000 price'],
  },
];

BLOG_METAS.forEach((item) => {
  const blogUrl = `${BASE_PRODUCTION_URL}/blog/${item.slug}`;

  const articleSEO: PageSEO = {
    path: `/blog/${item.slug}`,
    title: item.title,
    description: item.description,
    mainKeyword: item.mainKeyword,
    relatedKeywords: item.relatedKeywords,
    canonical: blogUrl,
    ogType: 'article',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: item.title,
      description: item.description,
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
        '@id': blogUrl,
      },
    },
  };

  PAGES_SEO[`/blog/${item.slug}`] = articleSEO;

  // Also support clean route if not already set
  if (!PAGES_SEO[`/${item.slug}`]) {
    PAGES_SEO[`/${item.slug}`] = {
      ...articleSEO,
      path: `/${item.slug}`,
      canonical: `${BASE_PRODUCTION_URL}/${item.slug}`,
    };
  }
});
