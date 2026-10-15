import { ArrowLeft, Calculator, Truck, HelpCircle, ArrowRight, Layers, DollarSign } from 'lucide-react';
import { ASSETS } from '../data/content';

interface PriceGuidePageProps {
  onNavigate: (path: string) => void;
  onRequestQuote: () => void;
}

export function PriceGuidePage({ onNavigate, onRequestQuote }: PriceGuidePageProps) {
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
          <span className="text-[#DE5B3E] font-medium">Price Guide</span>
        </div>
      </div>

      {/* Main Header with H1, Main Keyword & Related Keywords */}
      <header className="max-w-4xl mx-auto px-6 sm:px-8 text-center mb-12">
        <span className="text-xs uppercase tracking-[0.25em] text-[#DE5B3E] font-semibold block mb-3">
          Estimation & Budgeting
        </span>
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold uppercase tracking-tight text-white font-display leading-tight mb-6">
          Brick Price Guide: Understanding Brick Costs and Quantities
        </h1>
        {/* Opening paragraph with natural keyword placement */}
        <p className="text-base sm:text-lg text-neutral-300 font-light leading-relaxed">
          Estimating the overall <strong className="text-white font-normal">brick price</strong> is a vital step in construction budgeting for residential buildings, commercial complexes, and boundary walls. Calculating the <strong className="text-white font-normal">cost of bricks for house construction</strong> depends on raw material quality, manufacturing kiln methods, regional transportation distances, and order quantity. Understanding how suppliers quote the <strong className="text-white font-normal">bricks per 1000 price</strong> helps project managers and homeowners plan material orders without unexpected expenses.
        </p>
      </header>

      {/* Primary Hero Image with Exact Alt Text */}
      <div className="max-w-4xl mx-auto px-6 sm:px-8 mb-14">
        <div className="relative aspect-[16/9] rounded-sm overflow-hidden border border-neutral-800 shadow-2xl bg-neutral-900">
          <img
            src={ASSETS.kiln}
            alt="Stacked bricks at manufacturing facility ready for bulk wholesale price estimation"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <div className="absolute bottom-4 left-4 right-4 text-xs text-neutral-300">
            Hoffmann kiln firing facility where production volume and energy costs influence wholesale brick rates
          </div>
        </div>
      </div>

      {/* Article Body Content */}
      <div className="max-w-4xl mx-auto px-6 sm:px-8 space-y-12">
        {/* Section 1: Major Factors Influencing Brick Prices */}
        <section className="space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold uppercase tracking-tight text-white font-display border-b border-neutral-800 pb-3">
            Core Factors That Influence the Cost of Bricks
          </h2>
          <p className="text-neutral-300 text-sm sm:text-base leading-relaxed font-light">
            When purchasing building materials, the price per brick varies based on five primary operational and economic variables:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-2">
            <div className="p-5 bg-[#141417] border border-neutral-800 rounded-sm">
              <div className="flex items-center gap-2 mb-2 text-[#DE5B3E]">
                <Calculator className="w-5 h-5 shrink-0" />
                <h3 className="text-base font-bold text-white font-display uppercase">
                  1. Kiln Fuel & Raw Soil Quality
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-neutral-400 font-light leading-relaxed">
                When estimating the <strong className="text-neutral-200">red bricks price</strong>, raw soil extraction and heating kilns with coal or biomass account for over 50% of direct production expenditure. Established <strong className="text-neutral-200">wholesale brick suppliers</strong> maintain consistent thermal firing to deliver uniform structural strength at stable rates. In contrast, fly ash bricks use industrial ash byproducts, resulting in lower basic energy input costs.
              </p>
            </div>

            <div className="p-5 bg-[#141417] border border-neutral-800 rounded-sm">
              <div className="flex items-center gap-2 mb-2 text-[#DE5B3E]">
                <Truck className="w-5 h-5 shrink-0" />
                <h3 className="text-base font-bold text-white font-display uppercase">
                  2. Haulage & Site Proximity
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-neutral-400 font-light leading-relaxed">
                Because bricks are heavy and bulky, freight charges constitute a significant percentage of the delivered cost. Distance from the manufacturing kiln to the unloading site, road tolls, and labor unloading fees are included in finalized commercial invoices.
              </p>
            </div>

            <div className="p-5 bg-[#141417] border border-neutral-800 rounded-sm">
              <div className="flex items-center gap-2 mb-2 text-[#DE5B3E]">
                <Layers className="w-5 h-5 shrink-0" />
                <h3 className="text-base font-bold text-white font-display uppercase">
                  3. Order Volume & Truckload Scale
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-neutral-400 font-light leading-relaxed">
                Brick suppliers quote wholesale rates per 1,000 units. Ordering in full 6-wheeler or 10-wheeler truckloads (typically 5,000 to 10,000 bricks) maximizes logistics efficiency and reduces per-unit transportation costs.
              </p>
            </div>

            <div className="p-5 bg-[#141417] border border-neutral-800 rounded-sm">
              <div className="flex items-center gap-2 mb-2 text-[#DE5B3E]">
                <DollarSign className="w-5 h-5 shrink-0" />
                <h3 className="text-base font-bold text-white font-display uppercase">
                  4. Seasonal Kiln Production
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-neutral-400 font-light leading-relaxed">
                Open-air clay brick kilns halt molding during monsoon rains, leading to tightening regional inventories. Booking orders during peak production cycles ensures predictable supply schedules and steady price brackets.
              </p>
            </div>
          </div>
        </section>

        {/* Supporting Image with Exact Alt Text */}
        <div className="p-6 bg-[#17171C] border border-neutral-800 rounded-sm flex flex-col md:flex-row items-center gap-6">
          <div className="w-full md:w-1/2 aspect-[4/3] rounded-sm overflow-hidden bg-neutral-900 shrink-0">
            <img
              src={ASSETS.hero}
              alt="Organized inventory of construction bricks for calculating cost per 1000 bricks"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="space-y-3">
            <span className="text-xs uppercase tracking-wider text-[#DE5B3E] font-semibold block">
              Estimation Rule of Thumb
            </span>
            <h3 className="text-lg font-bold uppercase text-white font-display">
              Estimating Bricks Per Square Foot
            </h3>
            <p className="text-xs sm:text-sm text-neutral-400 font-light leading-relaxed">
              For a standard 4.5-inch single-brick partition wall, plan approximately 4.5 to 5 bricks per square foot. For a 9-inch load-bearing wall, double that to 9 to 10 bricks per square foot, plus an extra 5% to 7% buffer to accommodate transit handling and site cutting.
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
                <span>Explore brick types and specifications</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* AEO: Two Question-and-Answer Sections with H2 Format */}
        <div className="space-y-8 pt-4">
          {/* Question 1: What factors affect the price of bricks? */}
          <div className="p-8 bg-[#17171C] border border-neutral-800 rounded-sm">
            <h2 className="text-xl sm:text-2xl font-bold text-white font-display uppercase tracking-wide mb-3 flex items-start gap-3">
              <HelpCircle className="w-6 h-6 text-[#DE5B3E] shrink-0 mt-0.5" />
              <span>What factors affect the price of bricks?</span>
            </h2>
            <div className="text-neutral-300 text-sm sm:text-base leading-relaxed pl-9 space-y-3">
              <p>
                The market price of construction bricks is primarily driven by:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-neutral-400 text-sm">
                <li><strong className="text-neutral-200">Material Classification:</strong> High-grade clay bricks incur higher coal kiln costs, while fly ash units benefit from lower curing overheads.</li>
                <li><strong className="text-neutral-200">Order Quantity:</strong> Bulk shipments in full truckloads (5,000+ units) receive wholesale quantity discounts compared to small fragmented orders.</li>
                <li><strong className="text-neutral-200">Site Distance & Freight:</strong> Diesel fuel rates and transit distance from the kiln or storage yard directly impact delivered estimates.</li>
                <li><strong className="text-neutral-200">Seasonal Demand:</strong> Peak pre-monsoon building seasons drive higher local demand, whereas monsoon production halts affect supply reserves.</li>
              </ul>
              <p>
                To learn how to test brick strength before confirming an order, see our{' '}
                <a
                  href="/how-to-choose-quality-bricks"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('/how-to-choose-quality-bricks');
                  }}
                  className="text-[#DE5B3E] underline underline-offset-4 hover:text-[#B84226] font-medium"
                >
                  guide to choosing good quality bricks
                </a>.
              </p>
            </div>
          </div>

          {/* Question 2: How is the cost of 1,000 bricks calculated? */}
          <div className="p-8 bg-[#17171C] border border-neutral-800 rounded-sm">
            <h2 className="text-xl sm:text-2xl font-bold text-white font-display uppercase tracking-wide mb-3 flex items-start gap-3">
              <HelpCircle className="w-6 h-6 text-[#DE5B3E] shrink-0 mt-0.5" />
              <span>How is the cost of 1,000 bricks calculated?</span>
            </h2>
            <div className="text-neutral-300 text-sm sm:text-base leading-relaxed pl-9 space-y-3">
              <p>
                Suppliers calculate the delivered cost of 1,000 bricks using three distinct components:
              </p>
              <ol className="list-decimal pl-5 space-y-1.5 text-neutral-400 text-sm">
                <li><strong className="text-neutral-200">Ex-Kiln Base Rate:</strong> The foundational manufacturing price per 1,000 pieces at the factory yard.</li>
                <li><strong className="text-neutral-200">Transportation & Toll Charges:</strong> Commercial vehicle freight calculated based on road kilometers from the yard to the destination.</li>
                <li><strong className="text-neutral-200">Site Unloading & Handling:</strong> Labor or hydraulic tipping charges for stacking and unloading safely at the job site.</li>
              </ol>
              <p className="pt-1">
                For a project-specific estimate based on your exact delivery location,{' '}
                <button
                  onClick={onRequestQuote}
                  className="text-[#DE5B3E] underline underline-offset-4 hover:text-[#B84226] font-medium cursor-pointer"
                >
                  request a custom wholesale quotation
                </button>{' '}
                from our dispatch office.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Bar */}
        <div className="p-8 bg-gradient-to-r from-[#17171C] to-[#1F1715] border border-neutral-800 rounded-sm flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-lg font-bold uppercase text-white font-display mb-1">
              Ready to Estimate Your Brick Order?
            </h3>
            <p className="text-xs text-neutral-400">
              Provide your delivery location and approximate quantity for transparent pricing.
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
