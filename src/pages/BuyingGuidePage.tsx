import { ArrowLeft, CheckCircle2, AlertTriangle, ShieldCheck, HelpCircle, ArrowRight } from 'lucide-react';
import { ASSETS } from '../data/content';

interface BuyingGuidePageProps {
  onNavigate: (path: string) => void;
  onRequestQuote: () => void;
}

export function BuyingGuidePage({ onNavigate, onRequestQuote }: BuyingGuidePageProps) {
  return (
    <article className="pt-24 pb-20 bg-[#0D0D0E]">
      {/* Breadcrumb Navigation */}
      <div className="max-w-4xl mx-auto px-6 sm:px-8 mb-8">
        <div className="flex items-center gap-2 text-xs text-neutral-400">
          <button
            onClick={() => onNavigate('/')}
            className="hover:text-white transition-colors cursor-pointer flex items-center gap-1"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Home</span>
          </button>
          <span>/</span>
          <span className="text-[#DE5B3E] font-medium">Buying Guide</span>
        </div>
      </div>

      {/* Main Article Header with H1, Main Keyword & Related Keywords */}
      <header className="max-w-4xl mx-auto px-6 sm:px-8 text-center mb-12">
        <span className="text-xs uppercase tracking-[0.25em] text-[#DE5B3E] font-semibold block mb-3">
          Material Selection Guide
        </span>
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold uppercase tracking-tight text-white font-display leading-tight mb-6">
          How to Choose Quality Bricks for House Construction
        </h1>
        {/* Opening paragraph with natural keyword placement */}
        <p className="text-base sm:text-lg text-neutral-300 font-light leading-relaxed">
          Understanding <strong className="text-white font-normal">how to choose quality bricks</strong> is one of the most critical decisions for homeowners, architects, and civil contractors. Selecting <strong className="text-white font-normal">good quality bricks</strong> ensures that structural load-bearing walls resist weather erosion, prevent moisture seepage, and provide lifelong stability. When selecting the <strong className="text-white font-normal">best bricks for house construction</strong>, learning <strong className="text-white font-normal">how to identify good quality bricks</strong> through straightforward on-site physical tests protects your building investment.
        </p>
      </header>

      {/* Primary Hero Image with Exact Alt Text */}
      <div className="max-w-4xl mx-auto px-6 sm:px-8 mb-14">
        <div className="relative aspect-[16/9] rounded-sm overflow-hidden border border-neutral-800 shadow-2xl bg-neutral-900">
          <img
            src={ASSETS.about}
            alt="Testing and inspecting good quality bricks for house construction in a brickyard"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <div className="absolute bottom-4 left-4 right-4 text-xs text-neutral-300">
            Evaluating stack uniformity, right angles, and kiln vitrification at the manufacturing yard
          </div>
        </div>
      </div>

      {/* Article Body Content */}
      <div className="max-w-4xl mx-auto px-6 sm:px-8 space-y-12">
        {/* Section 1: Visual and Physical Field Tests */}
        <section className="space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold uppercase tracking-tight text-white font-display border-b border-neutral-800 pb-3">
            Essential On-Site Tests for Good Quality Bricks
          </h2>
          <p className="text-neutral-300 text-sm sm:text-base leading-relaxed font-light">
            Before unloading a truckload of bricks onto your site, civil engineers recommend conducting five straightforward physical tests to assess quality, firing maturity, and structural soundness:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-2">
            <div className="p-5 bg-[#141417] border border-neutral-800 rounded-sm">
              <div className="flex items-center gap-2 mb-2 text-[#DE5B3E]">
                <ShieldCheck className="w-5 h-5 shrink-0" />
                <h3 className="text-base font-bold text-white font-display uppercase">
                  1. The Ringing Sound Test
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-neutral-400 font-light leading-relaxed">
                Hold two bricks and strike them firmly against each other. High-quality, well-vitrified bricks emit a clear, sharp metallic ringing sound. A dull, thudding sound indicates under-firing, high internal voids, or micro-cracks.
              </p>
            </div>

            <div className="p-5 bg-[#141417] border border-neutral-800 rounded-sm">
              <div className="flex items-center gap-2 mb-2 text-[#DE5B3E]">
                <ShieldCheck className="w-5 h-5 shrink-0" />
                <h3 className="text-base font-bold text-white font-display uppercase">
                  2. The One-Meter Drop Test
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-neutral-400 font-light leading-relaxed">
                Drop a test brick flat from approximately 1 meter (3.3 feet) onto firm, flat ground. A first-class construction brick will remain intact without shattering or corner crumbling.
              </p>
            </div>

            <div className="p-5 bg-[#141417] border border-neutral-800 rounded-sm">
              <div className="flex items-center gap-2 mb-2 text-[#DE5B3E]">
                <ShieldCheck className="w-5 h-5 shrink-0" />
                <h3 className="text-base font-bold text-white font-display uppercase">
                  3. Water Absorption Benchmark
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-neutral-400 font-light leading-relaxed">
                As per Indian Standard IS 1077 (Bureau of Indian Standards), first-class bricks should not absorb more than 20% of their dry weight in water after 24 hours of cold immersion. Excessive absorption leads to damp walls and efflorescence.
              </p>
            </div>

            <div className="p-5 bg-[#141417] border border-neutral-800 rounded-sm">
              <div className="flex items-center gap-2 mb-2 text-[#DE5B3E]">
                <ShieldCheck className="w-5 h-5 shrink-0" />
                <h3 className="text-base font-bold text-white font-display uppercase">
                  4. Hardness & Scratch Test
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-neutral-400 font-light leading-relaxed">
                Attempt to scratch the surface of the brick with a sharp nail or steel key. A well-fired brick is hard and dense; no permanent impression or loose powder should rub off.
              </p>
            </div>
          </div>
        </section>

        {/* Supporting Image with Exact Alt Text */}
        <div className="p-6 bg-[#17171C] border border-neutral-800 rounded-sm flex flex-col md:flex-row items-center gap-6">
          <div className="w-full md:w-1/2 aspect-[4/3] rounded-sm overflow-hidden bg-neutral-900 shrink-0">
            <img
              src={ASSETS.redClay}
              alt="Detailed view of high quality red clay bricks showing crisp edges and uniform texture"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="space-y-3">
            <span className="text-xs uppercase tracking-wider text-[#DE5B3E] font-semibold block">
              Dimensional Inspection
            </span>
            <h3 className="text-lg font-bold uppercase text-white font-display">
              Examining Edges & Shape Regularity
            </h3>
            <p className="text-xs sm:text-sm text-neutral-400 font-light leading-relaxed">
              High-quality bricks feature sharp, straight right-angled edges and flat rectangular faces without warping. Uniform edges ensure thin, consistent mortar joints, preventing uneven structural load distribution across walls.
            </p>
            <div className="pt-1">
              <a
                href="/types-of-bricks"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('/types-of-bricks');
                }}
                className="inline-flex items-center gap-1.5 text-xs uppercase font-semibold tracking-wider text-[#DE5B3E] hover:text-[#B84226]"
              >
                <span>Compare different types of bricks</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* AEO: Two Question-and-Answer Sections with H2 Format */}
        <div className="space-y-8 pt-4">
          {/* Question 1: How can you identify good quality bricks? */}
          <div className="p-8 bg-[#17171C] border border-neutral-800 rounded-sm">
            <h2 className="text-xl sm:text-2xl font-bold text-white font-display uppercase tracking-wide mb-3 flex items-start gap-3">
              <HelpCircle className="w-6 h-6 text-[#DE5B3E] shrink-0 mt-0.5" />
              <span>How can you identify good quality bricks?</span>
            </h2>
            <div className="text-neutral-300 text-sm sm:text-base leading-relaxed pl-9 space-y-3">
              <p>
                You can reliably identify good quality bricks by looking for four consistent characteristics:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-neutral-400 text-sm">
                <li><strong className="text-neutral-200">Uniform Deep Color:</strong> Consistent copper-red or terracotta shading without black burnt patches or yellowish under-fired spots.</li>
                <li><strong className="text-neutral-200">Sharp Right Angles:</strong> Clean, parallel edges and flat rectangular surfaces without severe pitting, blisters, or fissures.</li>
                <li><strong className="text-neutral-200">Clear Metallic Clink:</strong> Striking two bricks together produces a ringing chime, proving complete internal vitrification.</li>
                <li><strong className="text-neutral-200">Controlled Porosity:</strong> The brick resists crumbling under finger pressure and does not absorb more than 15%–20% of its weight in water.</li>
              </ul>
            </div>
          </div>

          {/* Question 2: Which bricks should you consider for house construction? */}
          <div className="p-8 bg-[#17171C] border border-neutral-800 rounded-sm">
            <h2 className="text-xl sm:text-2xl font-bold text-white font-display uppercase tracking-wide mb-3 flex items-start gap-3">
              <HelpCircle className="w-6 h-6 text-[#DE5B3E] shrink-0 mt-0.5" />
              <span>Which bricks should you consider for house construction?</span>
            </h2>
            <div className="text-neutral-300 text-sm sm:text-base leading-relaxed pl-9 space-y-3">
              <p>
                For residential house construction, first-class burnt red clay bricks are the traditional recommendation for exterior load-bearing walls, foundation masonry, and exposed facades because of their outstanding thermal mass and weather endurance.
              </p>
              <p>
                For framed multi-storey buildings (RCC columns and beams), fly ash bricks are an excellent choice for internal partitions and non-load-bearing exterior walls due to their uniform dimensions, lighter weight, and lower plaster requirement.
              </p>
              <p className="pt-1">
                To evaluate project cost implications, explore our{' '}
                <a
                  href="/brick-price-guide"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('/brick-price-guide');
                  }}
                  className="text-[#DE5B3E] underline underline-offset-4 hover:text-[#B84226] font-medium"
                >
                  brick price and cost factors
                </a>{' '}
                guide, or return to{' '}
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
                to request verified supply for your upcoming project.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Bar */}
        <div className="p-8 bg-gradient-to-r from-[#17171C] to-[#1F1715] border border-neutral-800 rounded-sm flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-lg font-bold uppercase text-white font-display mb-1">
              Need Brick Recommendations For Your Project?
            </h3>
            <p className="text-xs text-neutral-400">
              Our dispatch team coordinates site orders and provides batch consistency.
            </p>
          </div>
          <button
            onClick={onRequestQuote}
            type="button"
            className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-white bg-[#B84226] hover:bg-[#A3381E] rounded-sm shrink-0 cursor-pointer shadow-lg"
          >
            Request a Quote
          </button>
        </div>
      </div>
    </article>
  );
}
