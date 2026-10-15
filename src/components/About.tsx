import { ShieldCheck, Truck, Users } from 'lucide-react';
import { ASSETS } from '../data/content';
import { ImageWithFallback } from './ImageWithFallback';

export function About() {
  const highlights = [
    {
      title: 'Quality-Focused Products',
      desc: 'Selected raw materials, thorough kiln firing, and rigid dimensional inspection.',
      icon: ShieldCheck,
    },
    {
      title: 'Bulk Supply Available',
      desc: 'Dependable volume capability with direct-from-yard logistics for ongoing builds.',
      icon: Truck,
    },
    {
      title: 'Customer-First Service',
      desc: 'Transparent pricing, responsive scheduling, and dedicated dispatch coordination.',
      icon: Users,
    },
  ];

  return (
    <section id="about" className="py-24 sm:py-32 bg-[#111113] relative border-t border-b border-neutral-900">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Column 1: Large Architectural Brickyard Stack Photography */}
          <div className="relative overflow-hidden rounded-sm border border-neutral-800/80 shadow-2xl bg-neutral-900">
            <div className="aspect-[4/3] w-full">
              <ImageWithFallback
                src={ASSETS.about}
                alt="Shree Balaji Bricks - Precision stacked terracotta bricks"
                fallbackTitle="Precision Stacked Bricks"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-4 left-4 right-4 text-xs text-neutral-300 font-medium">
              Precision stacked clay bricks ready for wholesale dispatch
            </div>
          </div>

          {/* Column 2: Minimalist Text Content & 3 Compact Highlights */}
          <div className="flex flex-col justify-center">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#B84226] block mb-3">
              About Pawanshakti Enterprises
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-tight text-white font-display mb-5 leading-tight">
              STRENGTH IN EVERY BRICK.
            </h2>
            <p className="text-neutral-300 text-base sm:text-lg font-light leading-relaxed mb-10">
              We supply quality brick products for residential, commercial, and construction projects.
            </p>

            {/* 3 Compact Highlights */}
            <div className="space-y-6">
              {highlights.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <div key={idx} className="flex items-start gap-4 p-4 rounded-sm bg-[#141417] border border-neutral-800/60">
                    <div className="p-2.5 rounded-sm bg-[#B84226]/15 border border-[#B84226]/30 text-[#DE5B3E] shrink-0 mt-0.5">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-sm sm:text-base font-semibold uppercase text-white tracking-wide mb-1 font-display">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-neutral-400 font-light leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
