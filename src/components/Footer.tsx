import { Phone, Mail, MapPin, Clock, MessageSquare, ArrowUp } from 'lucide-react';
import { BUSINESS_INFO } from '../data/content';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Products', href: '#products' },
    { label: 'About', href: '#about' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Get a Quote', href: '#quote' },
  ];

  return (
    <footer id="contact" className="bg-[#0B0B0C] border-t border-neutral-900 text-neutral-400 text-xs">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-neutral-800/80">
          {/* Brand & Description (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-sm bg-[#B84226] flex flex-col justify-between p-1 shadow-md shadow-[#B84226]/20">
                <div className="flex gap-0.5 h-1.5">
                  <div className="bg-amber-100/90 rounded-[1px] w-full" />
                  <div className="bg-amber-100/90 rounded-[1px] w-full" />
                </div>
                <div className="flex gap-0.5 h-1.5">
                  <div className="bg-amber-100/90 rounded-[1px] w-1/3" />
                  <div className="bg-amber-100/90 rounded-[1px] w-full" />
                  <div className="bg-amber-100/90 rounded-[1px] w-1/3" />
                </div>
                <div className="flex gap-0.5 h-1.5">
                  <div className="bg-amber-100/90 rounded-[1px] w-full" />
                  <div className="bg-amber-100/90 rounded-[1px] w-full" />
                </div>
              </div>
              <span className="text-lg font-bold tracking-wider text-white uppercase font-display">
                SHREE BALAJI BRICKS
              </span>
            </div>

            <p className="text-neutral-400 text-xs sm:text-sm font-light leading-relaxed max-w-sm">
              {BUSINESS_INFO.description}
            </p>

            <div className="pt-2">
              <a
                href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=Hello%20Shree%20Balaji%20Bricks,%20I%20would%20like%20to%20inquire%20about%20brick%20pricing%20and%20orders.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 hover:border-emerald-700/60 text-neutral-300 hover:text-white rounded-sm transition-colors"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span className="text-xs font-medium">WhatsApp Sales Desk</span>
              </a>
            </div>
          </div>

          {/* Quick Navigation (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-white font-display block">
              Quick Navigation
            </span>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Placeholders (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-white font-display block">
              Facility & Dispatch
            </span>
            <ul className="space-y-3 text-neutral-300">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#B84226] shrink-0 mt-0.5" />
                <span>{BUSINESS_INFO.addressPlaceholder}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#B84226] shrink-0" />
                <span>Sales Desk: {BUSINESS_INFO.phonePlaceholder}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#B84226] shrink-0" />
                <span>{BUSINESS_INFO.emailPlaceholder}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-[#B84226] shrink-0" />
                <span>{BUSINESS_INFO.dispatchHours}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-neutral-500 text-[11px]">
          <div>
            © {new Date().getFullYear()} {BUSINESS_INFO.name}. All rights reserved.
          </div>

          <button
            onClick={scrollToTop}
            type="button"
            className="inline-flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
