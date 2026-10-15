import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  onQuoteClick: () => void;
}

export function Navbar({ onQuoteClick }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Products', href: '#products' },
    { label: 'About', href: '#about' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#111113]/95 backdrop-blur-md border-b border-neutral-800/80 py-3.5 shadow-2xl'
          : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark with Brick-Inspired Geometric Symbol */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleLinkClick('#home');
          }}
          className="flex items-center gap-3 group whitespace-nowrap shrink-0"
        >
          {/* Custom brick-layer architectural emblem */}
          <div className="w-8 h-8 rounded-sm bg-[#B84226] flex flex-col justify-between p-1 shadow-md shadow-[#B84226]/20 transition-transform duration-200 group-hover:scale-105">
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
          <span className="text-base sm:text-lg font-bold tracking-wider text-white uppercase font-display">
            PAWANSHAKTI ENTERPRISES
          </span>
        </a>

        {/* Zone 2: Clean 4–5 single-line navigation links */}
        <nav className="hidden md:flex items-center gap-8 text-xs lg:text-sm font-medium tracking-wide text-neutral-300">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick(link.href);
              }}
              className="hover:text-white transition-colors duration-150 whitespace-nowrap shrink-0 relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#B84226] hover:after:w-full after:transition-all after:duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Primary Action & Mobile Hamburger */}
        <div className="flex items-center gap-4 shrink-0">
          <button
            onClick={onQuoteClick}
            type="button"
            className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#B84226] hover:bg-[#A3381E] active:scale-[0.98] transition-all duration-200 rounded-sm shadow-md shadow-[#B84226]/30 whitespace-nowrap shrink-0 cursor-pointer"
          >
            GET A QUOTE
          </button>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            type="button"
            aria-label="Toggle navigation menu"
            className="md:hidden p-2 text-neutral-300 hover:text-white rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B84226]"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#111113]/98 backdrop-blur-xl border-b border-neutral-800 px-6 py-6 transition-all">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
                className="text-sm font-medium text-neutral-200 hover:text-[#B84226] transition-colors py-2 border-b border-neutral-800/50"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onQuoteClick();
                }}
                type="button"
                className="w-full py-3 text-xs font-semibold uppercase tracking-wider text-white bg-[#B84226] hover:bg-[#A3381E] rounded-sm text-center shadow-lg cursor-pointer"
              >
                GET A QUOTE
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
