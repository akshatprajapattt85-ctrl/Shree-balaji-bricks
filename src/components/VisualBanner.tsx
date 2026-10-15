import { ASSETS } from '../data/content';

export function VisualBanner() {
  return (
    <section className="relative w-full h-[60vh] sm:h-[70vh] flex items-center justify-center overflow-hidden bg-neutral-950">
      {/* Edge-to-Edge Architectural Photography */}
      <div className="absolute inset-0">
        <img
          src={ASSETS.architecture}
          alt="Shree Balaji Bricks - Modern contemporary architecture featuring exposed brickwork"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center"
        />
        {/* Subtle dark overlay for contrast */}
        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0E] via-transparent to-[#0D0D0E]" />
      </div>

      {/* Typography Overlay */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-8 text-center">
        <span className="text-xs uppercase tracking-[0.25em] text-[#DE5B3E] font-semibold block mb-4">
          Architectural Endurance
        </span>
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold uppercase tracking-tight text-white font-display leading-tight drop-shadow-lg">
          THE FOUNDATION OF EVERY GREAT STRUCTURE.
        </h2>
      </div>
    </section>
  );
}
