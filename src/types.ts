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
