import { X, ArrowRight, Check } from 'lucide-react';
import type { Product } from '../types';
import { ImageWithFallback } from './ImageWithFallback';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
  onRequestQuote: (productName: string) => void;
}

export function ProductModal({
  product,
  onClose,
  onRequestQuote,
}: ProductModalProps) {
  if (!product) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="product-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl bg-[#141416] border border-neutral-800 rounded-sm shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          type="button"
          aria-label="Close product details"
          className="absolute top-4 right-4 z-20 p-2 text-neutral-400 hover:text-white bg-black/50 hover:bg-black/80 rounded-full transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="overflow-y-auto">
          {/* Product Header Image */}
          <div className="relative h-64 sm:h-80 w-full overflow-hidden bg-neutral-900">
            <ImageWithFallback
              src={product.image}
              alt={product.name}
              fallbackTitle={product.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#141416] via-transparent to-transparent opacity-90" />
            <div className="absolute bottom-6 left-6 right-6">
              <span className="text-xs uppercase tracking-widest text-[#B84226] font-semibold mb-1 block">
                Wholesale & Manufacturing
              </span>
              <h2
                id="product-modal-title"
                className="text-2xl sm:text-3xl font-bold text-white uppercase font-display"
              >
                {product.name}
              </h2>
            </div>
          </div>

          {/* Details Body */}
          <div className="p-6 sm:p-8 space-y-6">
            <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
              {product.fullDesc}
            </p>

            {/* Specifications & Dimensions */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              <div className="p-4 bg-neutral-900/60 border border-neutral-800/80 rounded-sm">
                <span className="text-xs font-semibold uppercase tracking-wider text-neutral-400 block mb-1">
                  Nominal Dimensions
                </span>
                <p className="text-sm font-medium text-white">
                  {product.dimensions}
                </p>
              </div>

              <div className="p-4 bg-neutral-900/60 border border-neutral-800/80 rounded-sm">
                <span className="text-xs font-semibold uppercase tracking-wider text-neutral-400 block mb-1">
                  Recommended Deployment
                </span>
                <p className="text-sm font-medium text-white">
                  {product.recommendedUse}
                </p>
              </div>
            </div>

            {/* Applications List */}
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-neutral-400 block mb-3">
                Key Applications & Uses
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {product.applications.map((app, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 p-3 bg-neutral-900/40 border border-neutral-800/50 rounded-sm text-xs text-neutral-200"
                  >
                    <Check className="w-3.5 h-3.5 text-[#B84226] shrink-0" />
                    <span>{app}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Bar */}
            <div className="pt-4 border-t border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-neutral-400">
                Bulk lot orders dispatched directly from our yard & manufacturing kiln.
              </span>
              <button
                type="button"
                onClick={() => {
                  onRequestQuote(product.name);
                  onClose();
                }}
                className="w-full sm:w-auto px-6 py-3 text-xs font-semibold uppercase tracking-wider text-white bg-[#B84226] hover:bg-[#A3381E] active:scale-[0.98] transition-all rounded-sm flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-[#B84226]/20 whitespace-nowrap"
              >
                <span>Request Quote for {product.name}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
