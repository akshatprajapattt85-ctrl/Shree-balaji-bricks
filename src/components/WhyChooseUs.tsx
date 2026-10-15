import { CheckCircle2, Factory, Boxes, Truck } from 'lucide-react';

export function WhyChooseUs() {
  const points = [
    {
      title: 'Quality Materials',
      subtitle: 'Rigid raw material selection & uniform kiln firing',
      icon: CheckCircle2,
    },
    {
      title: 'Reliable Supply',
      subtitle: 'Consistent production schedules and stock reserves',
      icon: Factory,
    },
    {
      title: 'Bulk Orders',
      subtitle: 'Direct wholesale rates for large-scale building sites',
      icon: Boxes,
    },
    {
      title: 'Delivery Enquiries',
      subtitle: 'Safe direct site transportation and yard pickup',
      icon: Truck,
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-[#151518] border-t border-b border-neutral-800/80">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#B84226] block mb-2">
            Our Standard
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold uppercase tracking-tight text-white font-display">
            WHY CHOOSE US?
          </h2>
        </div>

        {/* 4 Minimal Icons & Short Labels Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {points.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center text-center p-8 rounded-sm bg-[#1A1A1E] border border-neutral-800/90 hover:border-neutral-700 transition-colors duration-200"
              >
                <div className="w-14 h-14 rounded-full bg-[#B84226]/10 border border-[#B84226]/25 flex items-center justify-center text-[#B84226] mb-5">
                  <Icon className="w-6 h-6 stroke-[1.75]" />
                </div>
                <h3 className="text-base sm:text-lg font-bold uppercase text-white font-display tracking-wide mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-400 font-light leading-relaxed">
                  {item.subtitle}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
