import { ArrowRight } from 'lucide-react';
import { PRODUCTS } from '../data/content';
import type { Product } from '../types';
import { ImageWithFallback } from './ImageWithFallback';

interface ProductsProps {
  onSelectProduct: (product: Product) => void;
}

export function Products({ onSelectProduct }: ProductsProps) {
  return (
    <section id="products" className="py-24 sm:py-32 bg-[#0D0D0E] relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="mb-14 sm:mb-18 text-center max-w-2xl mx-auto">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#B84226] block mb-2">
            Catalog & Supply
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-tight text-white font-display mb-3">
            OUR PRODUCTS
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base font-light">
            Reliable materials for every build.
          </p>
        </div>

        {/* 4 Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {PRODUCTS.map((product) => (
            <article
              key={product.id}
              className="group flex flex-col bg-[#141416] border border-neutral-800/80 hover:border-neutral-700/90 rounded-sm overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-black/60"
            >
              {/* Product Photograph */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-900">
                <ImageWithFallback
                  src={product.image}
                  alt={`Shree Balaji Bricks - ${product.name}`}
                  fallbackTitle={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>

              {/* Product Info */}
              <div className="p-6 flex flex-col flex-1 justify-between">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold uppercase text-white font-display tracking-wide mb-2 group-hover:text-[#DE5B3E] transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed line-clamp-3 mb-6">
                    {product.shortDesc}
                  </p>
                </div>

                {/* View Details Link */}
                <div className="pt-2 border-t border-neutral-800/60">
                  <button
                    onClick={() => onSelectProduct(product)}
                    type="button"
                    className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#B84226] hover:text-[#DE5B3E] transition-colors cursor-pointer group/link py-1"
                  >
                    <span>VIEW DETAILS</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover/link:translate-x-1" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
