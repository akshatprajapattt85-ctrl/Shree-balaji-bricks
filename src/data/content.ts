import type { Product, GalleryItem } from '../types';

import heroImg from '../assets/images/hero_red_clay_bricks_1792071580089.jpg';
import redClayImg from '../assets/images/product_red_clay_brick_1792071577093.jpg';
import flyAshImg from '../assets/images/product_fly_ash_brick_1792071576962.jpg';
import concreteImg from '../assets/images/product_concrete_block_1792071577988.jpg';
import pavingImg from '../assets/images/product_paving_brick_1792071577164.jpg';
import aboutImg from '../assets/images/about_brick_stack_1792071578061.jpg';
import architectureImg from '../assets/images/architecture_brick_facade_1792071578391.jpg';
import kilnImg from '../assets/images/manufacturing_kiln_facility_1792071578207.jpg';

export const ASSETS = {
  hero: heroImg,
  redClay: redClayImg,
  flyAsh: flyAshImg,
  concrete: concreteImg,
  paving: pavingImg,
  about: aboutImg,
  architecture: architectureImg,
  kiln: kilnImg,
};

export const PRODUCTS: Product[] = [
  {
    id: 'red-clay-bricks',
    name: 'Red Clay Bricks',
    shortDesc: 'Traditional kiln-fired clay bricks with rich natural terracotta texture and enduring structural strength.',
    fullDesc: 'Manufactured from selected natural clay and kiln-fired to optimal maturity. Offers excellent thermal insulation, classic architectural charm, and proven durability for load-bearing walls and exposed brickwork.',
    image: redClayImg,
    dimensions: 'Standard nominal 9" × 4.25" × 2.75" (230 × 110 × 70 mm)',
    applications: ['Load-Bearing Exterior Walls', 'Architectural Exposed Brick Facades', 'Boundary Walls & Residential Enclosures'],
    features: ['Even deep kiln burn', 'Sharp defined edges', 'Natural thermal efficiency'],
    recommendedUse: 'Residential villas, heritage facades, and structural masonry.',
  },
  {
    id: 'fly-ash-bricks',
    name: 'Fly Ash Bricks',
    shortDesc: 'Modern eco-friendly bricks featuring uniform dimensions, smooth surfaces, and high compressive strength.',
    fullDesc: 'Engineered using pulverized fuel ash, cement, and sand under hydraulic compaction. Uniform edges drastically reduce mortar consumption and plastering requirements while providing consistent load-bearing capability.',
    image: flyAshImg,
    dimensions: 'Standard 230 × 110 × 75 mm (Custom configurations on request)',
    applications: ['Multi-Storey Framed Structures', 'Internal Partition Walls', 'Commercial & Industrial Developments'],
    features: ['High dimensional precision', 'Minimal mortar consumption', 'Lightweight & eco-conscious'],
    recommendedUse: 'High-rise structural infills and commercial complexes.',
  },
  {
    id: 'concrete-blocks',
    name: 'Concrete Blocks',
    shortDesc: 'Heavy-duty solid and hollow concrete masonry units built for speed, durability, and high load capacity.',
    fullDesc: 'Manufactured from dense aggregates and hydraulic cement to deliver consistent compressive performance. Available in solid and hollow variants for accelerated wall assembly and acoustic performance.',
    image: concreteImg,
    dimensions: '400 × 200 × 200 mm & 400 × 200 × 100 mm',
    applications: ['Heavy Retaining Walls', 'Industrial Warehouses & Enclosures', 'Foundation & Basement Construction'],
    features: ['High load-bearing index', 'Accelerated construction speed', 'Exceptional fire resistance'],
    recommendedUse: 'Commercial warehouses, industrial compounds, and perimeter walls.',
  },
  {
    id: 'paving-bricks',
    name: 'Paving Bricks',
    shortDesc: 'High-density interlocking and architectural pavers designed for elegant outdoor walkways and driveways.',
    fullDesc: 'Designed to withstand heavy pedestrian traffic, vehicular movement, and weathering. Crafted with non-slip tactile textures and rich earthen tones that enhance landscape architecture.',
    image: pavingImg,
    dimensions: 'Interlocking & rectangular 200 × 100 × 60/80 mm',
    applications: ['Driveways & Parking Zones', 'Courtyards & Pedestrian Promenades', 'Landscape & Garden Walkways'],
    features: ['Heavy wear resistance', 'Non-slip surface texture', 'Weather-resistant earthen hues'],
    recommendedUse: 'Architectural landscaping, resort pathways, and modern driveways.',
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gallery-1',
    title: 'Precision Brickyard Stacks',
    category: 'Bricks & Texture',
    image: heroImg,
    aspect: 'landscape',
  },
  {
    id: 'gallery-2',
    title: 'Textured Red Clay Detail',
    category: 'Bricks & Texture',
    image: redClayImg,
    aspect: 'portrait',
  },
  {
    id: 'gallery-3',
    title: 'Contemporary Exposed Brick Facade',
    category: 'Architecture',
    image: architectureImg,
    aspect: 'landscape',
  },
  {
    id: 'gallery-4',
    title: 'High-Capacity Hoffmann Kiln Facility',
    category: 'Manufacturing',
    image: kilnImg,
    aspect: 'portrait',
  },
  {
    id: 'gallery-5',
    title: 'Herringbone Courtyard Paving',
    category: 'Paving & Site',
    image: pavingImg,
    aspect: 'landscape',
  },
  {
    id: 'gallery-6',
    title: 'Architectural Masonry Stacks',
    category: 'Bricks & Texture',
    image: aboutImg,
    aspect: 'portrait',
  },
  {
    id: 'gallery-7',
    title: 'Uniform Fly Ash Masonry Units',
    category: 'Manufacturing',
    image: flyAshImg,
    aspect: 'landscape',
  },
  {
    id: 'gallery-8',
    title: 'Structural Concrete Masonry Units',
    category: 'Manufacturing',
    image: concreteImg,
    aspect: 'portrait',
  },
];

export const BUSINESS_INFO = {
  name: 'SHREE BALAJI BRICKS',
  tagline: 'Built on Quality. Made to Last.',
  description: 'Supplying premium kiln-fired clay bricks, fly ash bricks, concrete blocks, and paving solutions for residential, commercial, and infrastructure builds.',
  phonePlaceholder: '+91 98765 43210',
  whatsappNumber: '919876543210',
  emailPlaceholder: 'inquiries@shreebalajibricks.com',
  addressPlaceholder: 'Industrial Estate, Brick Manufacturing Zone, India',
  dispatchHours: 'Mon - Sat: 7:00 AM - 7:00 PM',
};
