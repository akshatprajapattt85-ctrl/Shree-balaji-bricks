import { ChevronDown } from 'lucide-react';
import { ASSETS } from '../data/content';

interface HeroProps {
  onExploreClick: () => void;
  onQuoteClick: () => void;
}

export function Hero({ onExploreClick, onQuoteClick }: HeroProps) {
  return (
    <section
      id="home"
      className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-center overflow-hidden bg-neutral-950"
    >
      {/* High-Resolution Hero Photography with Measured Contrast Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src={ASSETS.hero}
          alt="Shree Balaji Bricks yard with stacks of quality bricks for construction in natural sunlight"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center scale-[1.02] transform transition-transform duration-1000 ease-out"
        />
        {/* Measured dark gradient overlay ensuring strict WCAG AAA contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0E] via-black/55 to-black/45" />
        <div className="absolute inset-0 bg-radial from-transparent via-black/20 to-black/70 pointer-events-none" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-8 text-center pt-24 pb-20">
        <span className="text-xs uppercase tracking-[0.25em] text-[#DE5B3E] font-semibold block mb-3">
          Trusted Brick Suppliers
        </span>
        {/* H1 with Main and Related Keywords */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white uppercase font-display leading-[1.08] mb-6 drop-shadow-md">
          SHREE BALAJI BRICKS<br />
          <span className="text-neutral-100 text-3xl sm:text-5xl md:text-6xl font-light block mt-2">Quality Bricks for Construction</span>
        </h1>

        {/* Supporting Text naturally integrating keywords */}
        <p className="text-base sm:text-lg md:text-xl text-neutral-200 font-light tracking-wide max-w-2xl mx-auto mb-10 drop-shadow">
          Built on quality, made to last. As leading wholesale brick suppliers, Shree Balaji Bricks provides high-durability clay and masonry solutions for stronger foundations. For builders seeking dependable brick suppliers near me, we supply verified materials directly from our kilns and manufacturing yards.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5">
          <button
            onClick={onExploreClick}
            type="button"
            className="w-full sm:w-auto px-8 py-4 text-xs sm:text-sm font-semibold uppercase tracking-wider text-white bg-transparent hover:bg-white/10 active:scale-[0.98] border border-white/40 hover:border-white transition-all duration-200 rounded-sm whitespace-nowrap cursor-pointer backdrop-blur-xs"
          >
            EXPLORE OUR PRODUCTS
          </button>
          <button
            onClick={onQuoteClick}
            type="button"
            className="w-full sm:w-auto px-8 py-4 text-xs sm:text-sm font-semibold uppercase tracking-wider text-white bg-[#B84226] hover:bg-[#A3381E] active:scale-[0.98] transition-all duration-200 rounded-sm shadow-xl shadow-[#B84226]/30 whitespace-nowrap cursor-pointer"
          >
            REQUEST A QUOTE
          </button>
        </div>
      </div>

      {/* Elegant Minimal Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 pointer-events-none opacity-80 hover:opacity-100 transition-opacity">
        <span className="text-[10px] uppercase tracking-[0.25em] text-neutral-300 font-medium">
          Scroll Down
        </span>
        <ChevronDown className="w-4 h-4 text-neutral-300 animate-bounce" />
      </div>
    </section>
  );
}
