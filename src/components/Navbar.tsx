import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  currentPath: string;
  onNavigate: (path: string) => void;
  onQuoteClick: () => void;
}

export function Navbar({ currentPath, onNavigate, onQuoteClick }: NavbarProps) {
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
    { label: 'Home', path: '/' },
    { label: 'Products', path: '/types-of-bricks' },
    { label: 'Buying Guide', path: '/how-to-choose-quality-bricks' },
    { label: 'Price Guide', path: '/brick-price-guide' },
  ];

  const handleLinkClick = (path: string) => {
    setMobileMenuOpen(false);
    onNavigate(path);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || currentPath !== '/'
          ? 'bg-[#111113]/95 backdrop-blur-md border-b border-neutral-800/80 py-3.5 shadow-2xl'
          : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark with Brick-Inspired Geometric Symbol */}
        <a
          href="/"
          onClick={(e) => {
            e.preventDefault();
            handleLinkClick('/');
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
            SHREE BALAJI BRICKS
          </span>
        </a>

        {/* Zone 2: Clean 4–5 single-line navigation links */}
        <nav className="hidden md:flex items-center gap-7 text-xs lg:text-sm font-medium tracking-wide text-neutral-300">
          {navLinks.map((link) => {
            const isActive = currentPath === link.path;
            return (
              <a
                key={link.label}
                href={link.path}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.path);
                }}
                className={`transition-colors duration-150 whitespace-nowrap shrink-0 relative py-1 ${
                  isActive ? 'text-white font-semibold' : 'hover:text-white text-neutral-300'
                } after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-[#B84226] ${
                  isActive ? 'after:w-full' : 'after:w-0 hover:after:w-full'
                } after:transition-all after:duration-200`}
              >
                {link.label}
              </a>
            );
          })}
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
                href={link.path}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.path);
                }}
                className={`text-sm font-medium transition-colors py-2 border-b border-neutral-800/50 ${
                  currentPath === link.path ? 'text-[#DE5B3E]' : 'text-neutral-200 hover:text-[#B84226]'
                }`}
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
