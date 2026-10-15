export interface Product {
  id: string;
  name: string;
  shortDesc: string;
  fullDesc: string;
  image: string;
  dimensions: string;
  applications: string[];
  features: string[];
  recommendedUse: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Bricks & Texture' | 'Architecture' | 'Manufacturing' | 'Paving & Site';
  image: string;
  aspect: 'landscape' | 'portrait' | 'square';
}

export interface QuoteFormData {
  fullName: string;
  phoneNumber: string;
  productType: string;
  requiredQuantity: string;
  deliveryLocation: string;
  additionalMessage: string;
}

export interface BlogSection {
  id: string;
  title: string;
  level?: 'h2' | 'h3';
  content: string[];
  list?: string[];
  callout?: string;
  table?: {
    headers: string[];
    rows: string[][];
  };
}

export interface BlogPost {
  slug: string;
  title: string;
  seoTitle: string;
  metaDescription: string;
  mainKeyword: string;
  relatedKeywords: string[];
  category: 'Quality & Selection' | 'Brick Pricing & Cost' | 'Brick Types & Materials' | 'House Construction';
  publishDate: string;
  readTime: string;
  featuredImage: string;
  imageAlt: string;
  excerpt: string;
  toc: Array<{ id: string; label: string }>;
  sections: BlogSection[];
  qa: Array<{ question: string; answer: string }>;
  conclusion: string;
  relatedSlugs: string[];
}
