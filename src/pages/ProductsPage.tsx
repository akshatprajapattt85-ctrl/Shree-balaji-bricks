import { useState } from 'react';
import { ArrowRight, HelpCircle, Layers, Check, ArrowLeft } from 'lucide-react';
import { PRODUCTS, ASSETS } from '../data/content';
import type { Product } from '../types';
import { ProductModal } from '../components/ProductModal';

interface ProductsPageProps {
  onNavigate: (path: string) => void;
  onRequestQuote: (productName?: string) => void;
}

export function ProductsPage({ onNavigate, onRequestQuote }: ProductsPageProps) {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // Exact alt text mapping specified in requirements
  const productAltMap: Record<string, string> = {
    'red-clay-bricks': 'Kiln-fired red clay bricks with textured surface and uniform edges',
    'fly-ash-bricks': 'Smooth grey fly ash bricks with precise uniform dimensions',
    'concrete-blocks': 'Solid and hollow concrete masonry blocks for structural construction',
    'paving-bricks': 'Interlocking clay and concrete paving bricks for outdoor walkways',
  };

  return (
    <div className="pt-24 pb-20 bg-[#0D0D0E]">
      {/* Breadcrumb & Navigation Back */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 mb-8">
        <div className="flex items-center gap-2 text-xs text-neutral-400">
          <button
            onClick={() => onNavigate('/')}
            className="hover:text-white transition-colors cursor-pointer flex items-center gap-1"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Home</span>
          </button>
          <span>/</span>
          <span className="text-[#DE5B3E] font-medium">Types of Bricks</span>
        </div>
      </div>

      {/* Main Header with H1, Main Keyword & Related Keywords */}
      <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center mb-16">
        <span className="text-xs uppercase tracking-[0.25em] text-[#DE5B3E] font-semibold block mb-3">
          Construction Masonry Catalog
        </span>
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold uppercase tracking-tight text-white font-display leading-tight mb-6">
          Types of Bricks: Red Clay and Fly Ash Bricks for Construction
        </h1>
        {/* Opening paragraph with natural keyword placement */}
        <p className="text-base sm:text-lg text-neutral-300 font-light leading-relaxed">
          Understanding the diverse <strong className="text-white font-normal">types of bricks</strong> used in modern construction is essential for structural stability, thermal insulation, and material budgeting. From traditional kiln-fired <strong className="text-white font-normal">red clay bricks</strong> to engineered <strong className="text-white font-normal">fly ash bricks</strong> and dense concrete blocks, each masonry option delivers specific benefits for residential, commercial, and boundary wall applications.
        </p>
      </div>

      {/* Product Showcase Grid with Exact Alt Text */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {PRODUCTS.map((product) => (
            <article
              key={product.id}
              className="flex flex-col bg-[#141416] border border-neutral-800 rounded-sm overflow-hidden hover:border-neutral-700 transition-all duration-300 shadow-xl"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-900">
                <img
                  src={product.image}
                  alt={productAltMap[product.id] || product.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6 flex flex-col flex-1 justify-between">
                <div>
                  <h2 className="text-lg sm:text-xl font-bold uppercase text-white font-display mb-2">
                    {product.name}
                  </h2>
                  <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed mb-4">
                    {product.shortDesc}
                  </p>
                  <div className="text-xs text-neutral-500 mb-4">
                    <span className="block text-neutral-400 font-medium">Dimensions:</span>
                    <span>{product.dimensions}</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-neutral-800/80 flex items-center justify-between">
                  <button
                    onClick={() => setSelectedProduct(product)}
                    type="button"
                    className="text-xs font-semibold uppercase tracking-wider text-[#DE5B3E] hover:text-[#B84226] transition-colors cursor-pointer"
                  >
                    VIEW DETAILS
                  </button>
                  <button
                    onClick={() => onRequestQuote(product.name)}
                    type="button"
                    className="text-xs font-semibold uppercase tracking-wider text-neutral-300 hover:text-white transition-colors cursor-pointer"
                  >
                    Get Quote
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Comparison Matrix Table */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 mb-20">
        <div className="bg-[#141417] border border-neutral-800 rounded-sm p-6 sm:p-8">
          <div className="mb-6">
            <span className="text-xs uppercase tracking-wider text-[#DE5B3E] font-semibold block mb-1">
              Technical Comparison
            </span>
            <h2 className="text-xl sm:text-2xl font-bold uppercase text-white font-display">
              Comparing Brick Types: Performance & Practical Application
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm text-neutral-300 border-collapse">
              <thead>
                <tr className="border-b border-neutral-800 text-neutral-400 uppercase tracking-wider text-[11px]">
                  <th className="py-3 px-4 font-semibold">Brick Type</th>
                  <th className="py-3 px-4 font-semibold">Primary Raw Material</th>
                  <th className="py-3 px-4 font-semibold">Curing / Manufacturing</th>
                  <th className="py-3 px-4 font-semibold">Surface & Plastering</th>
                  <th className="py-3 px-4 font-semibold">Best Applied In</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-800/60 font-light">
                <tr>
                  <td className="py-4 px-4 font-medium text-white">Red Clay Bricks</td>
                  <td className="py-4 px-4">Alluvial or shale natural clay</td>
                  <td className="py-4 px-4">High-temperature Hoffmann/clamp kiln</td>
                  <td className="py-4 px-4">Textured, rustic, excellent mortar grip</td>
                  <td className="py-4 px-4">Load-bearing foundations, villas, exposed facades</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-medium text-white">Fly Ash Bricks</td>
                  <td className="py-4 px-4">Pulverized ash, cement, sand/lime</td>
                  <td className="py-4 px-4">Hydraulic pressing & water/steam curing</td>
                  <td className="py-4 px-4">Smooth, sharp edges, low plaster volume</td>
                  <td className="py-4 px-4">Framed structures, multi-storey partition walls</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-medium text-white">Concrete Blocks</td>
                  <td className="py-4 px-4">Portland cement and graded aggregates</td>
                  <td className="py-4 px-4">Vibratory machine compaction</td>
                  <td className="py-4 px-4">Dense modular surface, solid or hollow</td>
                  <td className="py-4 px-4">Basement retaining walls, commercial warehouses</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-medium text-white">Paving Bricks</td>
                  <td className="py-4 px-4">High-density clay or reinforced cement</td>
                  <td className="py-4 px-4">Heavy pressure moulding</td>
                  <td className="py-4 px-4">Non-slip chamfered edges, wear-resistant</td>
                  <td className="py-4 px-4">Pedestrian walkways, courtyards, vehicular driveways</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* AEO: Two Question-and-Answer Sections with H2 Format */}
      <div className="max-w-5xl mx-auto px-6 sm:px-8 mb-16 space-y-8">
        {/* AEO Question 1 */}
        <div className="p-8 bg-[#17171C] border border-neutral-800 rounded-sm">
          <h2 className="text-xl sm:text-2xl font-bold text-white font-display uppercase tracking-wide mb-3 flex items-start gap-3">
            <HelpCircle className="w-6 h-6 text-[#DE5B3E] shrink-0 mt-0.5" />
            <span>What are the different types of bricks used in construction?</span>
          </h2>
          <div className="text-neutral-300 text-sm sm:text-base leading-relaxed pl-9 space-y-3">
            <p>
              The primary types of bricks used in construction include burnt red clay bricks, fly ash bricks, concrete masonry blocks, and paving bricks. Burnt clay bricks remain standard for load-bearing and exposed architectural walls due to their high thermal mass. Fly ash bricks provide lightweight, uniform alternatives that reduce dead load in multi-storey reinforced concrete framed structures. Concrete blocks are favored for rapid commercial erection and perimeter walls, while interlocking pavers provide durable exterior surfaces.
            </p>
            <p>
              Before purchasing building materials, review our detailed guide on{' '}
              <a
                href="/how-to-choose-quality-bricks"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('/how-to-choose-quality-bricks');
                }}
                className="text-[#DE5B3E] underline underline-offset-4 hover:text-[#B84226] font-medium"
              >
                how to choose quality bricks for house construction
              </a>{' '}
              to inspect compressive strength, shape regularity, and water absorption.
            </p>
          </div>
        </div>

        {/* AEO Question 2 */}
        <div className="p-8 bg-[#17171C] border border-neutral-800 rounded-sm">
          <h2 className="text-xl sm:text-2xl font-bold text-white font-display uppercase tracking-wide mb-3 flex items-start gap-3">
            <HelpCircle className="w-6 h-6 text-[#DE5B3E] shrink-0 mt-0.5" />
            <span>What is the difference between red clay bricks and fly ash bricks?</span>
          </h2>
          <div className="text-neutral-300 text-sm sm:text-base leading-relaxed pl-9 space-y-3">
            <p>
              The primary difference lies in their raw materials, manufacturing methods, and dimensional tolerances:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-neutral-400 text-sm">
              <li><strong className="text-neutral-200">Raw Composition:</strong> Red clay bricks are crafted from natural clay soil and fired in kilns at over 1,000°C. Fly ash bricks are made by blending industrial fly ash, cement, and sand compacted under high hydraulic pressure.</li>
              <li><strong className="text-neutral-200">Dimensional Uniformity:</strong> Fly ash bricks have machine-moulded razor-sharp edges and flat faces, leading to lower mortar and plaster consumption. Red clay bricks have natural organic variations that add classic character and strong mechanical mortar bonding.</li>
              <li><strong className="text-neutral-200">Weight & Thermal Performance:</strong> Fly ash bricks are slightly lighter, reducing overall dead load on columns. Red clay bricks offer superior natural thermal insulation, keeping interiors cooler during hot summers.</li>
            </ul>
            <p className="pt-1">
              To learn how prices and transportation impact your total project budget, read our{' '}
              <a
                href="/brick-price-guide"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('/brick-price-guide');
                }}
                className="text-[#DE5B3E] underline underline-offset-4 hover:text-[#B84226] font-medium"
              >
                brick price guide and cost estimation
              </a>, or contact{' '}
              <a
                href="/"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('/');
                }}
                className="text-[#DE5B3E] underline underline-offset-4 hover:text-[#B84226] font-medium"
              >
                Shree Balaji Bricks
              </a>{' '}
              to request site delivery.
            </p>
          </div>
        </div>
      </div>

      {/* Product Detail Modal */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onRequestQuote={(productName) => onRequestQuote(productName)}
      />
    </div>
  );
}
