import { ArrowRight, HelpCircle } from 'lucide-react';

interface HomeFAQProps {
  onNavigate: (path: string) => void;
}

export function HomeFAQ({ onNavigate }: HomeFAQProps) {
  return (
    <section className="py-20 sm:py-28 bg-[#121215] border-t border-neutral-800">
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        <div className="text-center max-w-xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#B84226] block mb-2">
            Answers & Guidance
          </span>
          <p className="text-2xl sm:text-3xl font-bold uppercase tracking-tight text-white font-display">
            Frequently Asked Questions
          </p>
        </div>

        <div className="space-y-8">
          {/* Question 1: What types of bricks are available for construction? */}
          <div className="p-8 bg-[#17171C] border border-neutral-800 rounded-sm">
            <h2 className="text-xl sm:text-2xl font-bold text-white font-display uppercase tracking-wide mb-3 flex items-start gap-3">
              <HelpCircle className="w-6 h-6 text-[#DE5B3E] shrink-0 mt-0.5" />
              <span>What types of bricks are available for construction?</span>
            </h2>
            <div className="text-neutral-300 text-sm sm:text-base leading-relaxed pl-9 space-y-3">
              <p>
                At Shree Balaji Bricks, we manufacture and supply four core brick categories engineered for diverse structural requirements:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-neutral-400 text-sm">
                <li><strong className="text-neutral-200">Red Clay Bricks:</strong> Traditional kiln-fired clay units known for high thermal mass, enduring weather resistance, and classic exposed architectural aesthetics.</li>
                <li><strong className="text-neutral-200">Fly Ash Bricks:</strong> Modern hydraulically compacted units offering sharp uniform dimensions, minimal mortar consumption, and smooth surfaces for interior and framed walls.</li>
                <li><strong className="text-neutral-200">Concrete Blocks:</strong> High-density hollow and solid concrete units designed for accelerated commercial construction and retaining masonry.</li>
                <li><strong className="text-neutral-200">Paving Bricks:</strong> Wear-resistant interlocking pavers crafted for driveways, pedestrian walkways, and courtyard landscaping.</li>
              </ul>
              <div className="pt-2">
                <a
                  href="/types-of-bricks"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('/types-of-bricks');
                  }}
                  className="inline-flex items-center gap-1.5 text-xs uppercase font-semibold tracking-wider text-[#DE5B3E] hover:text-[#B84226] transition-colors"
                >
                  <span>Explore all types of bricks in our comprehensive catalog</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

          {/* Question 2: How can I enquire about brick prices and bulk orders? */}
          <div className="p-8 bg-[#17171C] border border-neutral-800 rounded-sm">
            <h2 className="text-xl sm:text-2xl font-bold text-white font-display uppercase tracking-wide mb-3 flex items-start gap-3">
              <HelpCircle className="w-6 h-6 text-[#DE5B3E] shrink-0 mt-0.5" />
              <span>How can I enquire about brick prices and bulk orders?</span>
            </h2>
            <div className="text-neutral-300 text-sm sm:text-base leading-relaxed pl-9 space-y-3">
              <p>
                You can easily request a wholesale quotation through our online quote form or by messaging our sales dispatch team directly on WhatsApp. We quote rates per 1,000 bricks or in full truckload volumes (typically 5,000 to 10,000 units), factoring in your construction site location and unloading logistics.
              </p>
              <p>
                For estimated material quantities and cost factors, consult our{' '}
                <a
                  href="/brick-price-guide"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('/brick-price-guide');
                  }}
                  className="text-[#DE5B3E] underline underline-offset-4 hover:text-[#B84226] font-medium"
                >
                  understand brick price factors and bulk costs
                </a>{' '}
                guide, or learn{' '}
                <a
                  href="/how-to-choose-quality-bricks"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('/how-to-choose-quality-bricks');
                  }}
                  className="text-[#DE5B3E] underline underline-offset-4 hover:text-[#B84226] font-medium"
                >
                  how to choose quality bricks for your build
                </a>{' '}
                before placing your order.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
