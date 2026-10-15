/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import type { Product } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Products } from './components/Products';
import { ProductModal } from './components/ProductModal';
import { About } from './components/About';
import { VisualBanner } from './components/VisualBanner';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Gallery } from './components/Gallery';
import { HomeFAQ } from './components/HomeFAQ';
import { QuoteSection } from './components/QuoteSection';
import { Footer } from './components/Footer';
import { ProductsPage } from './pages/ProductsPage';
import { BuyingGuidePage } from './pages/BuyingGuidePage';
import { PriceGuidePage } from './pages/PriceGuidePage';
import { usePageSEO, normalizePath } from './utils/seoManager';

export default function App() {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      return normalizePath(window.location.pathname);
    }
    return '/';
  });

  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [quoteProductPreset, setQuoteProductPreset] = useState<string>('Red Clay Bricks');

  // Sync Document Title, Meta Description, Canonical URL, OG tags & JSON-LD
  usePageSEO(currentPath);

  // Handle browser back/forward buttons
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(normalizePath(window.location.pathname));
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleNavigate = (path: string) => {
    if (path.startsWith('/#') || path.startsWith('#')) {
      const targetId = path.replace(/^\/?#/, '');
      if (currentPath !== '/') {
        window.history.pushState({}, '', '/');
        setCurrentPath('/');
        setTimeout(() => {
          const el = document.getElementById(targetId);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        const el = document.getElementById(targetId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
      return;
    }

    const cleanPath = normalizePath(path);
    if (cleanPath !== currentPath) {
      window.history.pushState({}, '', cleanPath);
      setCurrentPath(cleanPath);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const scrollToSection = (id: string) => {
    if (currentPath !== '/') {
      handleNavigate(`/#${id}`);
    } else {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleRequestQuoteFromProduct = (productName?: string) => {
    if (productName) {
      setQuoteProductPreset(productName);
    }
    scrollToSection('quote');
  };

  return (
    <div className="min-h-screen bg-[#0D0D0E] text-[#E6E4E2] flex flex-col selection:bg-[#B84226] selection:text-white">
      {/* Navigation */}
      <Navbar
        currentPath={currentPath}
        onNavigate={handleNavigate}
        onQuoteClick={() => scrollToSection('quote')}
      />

      <main className="flex-1">
        {currentPath === '/' && (
          <>
            {/* 1. Hero Section with exact H1 keywords and image alt text */}
            <Hero
              onExploreClick={() => scrollToSection('products')}
              onQuoteClick={() => scrollToSection('quote')}
            />

            {/* 2. Product Showcase */}
            <Products onSelectProduct={(prod) => setSelectedProduct(prod)} />

            {/* 3. About the Business */}
            <About />

            {/* 4. Full-Width Visual Section */}
            <VisualBanner />

            {/* 5. Why Choose Us? */}
            <WhyChooseUs />

            {/* 6. Image Gallery */}
            <Gallery />

            {/* 7. Homepage AEO Question-and-Answer Section */}
            <HomeFAQ onNavigate={handleNavigate} />

            {/* 8. Get a Quote Section */}
            <QuoteSection preselectedProduct={quoteProductPreset} />
          </>
        )}

        {currentPath === '/types-of-bricks' && (
          <ProductsPage
            onNavigate={handleNavigate}
            onRequestQuote={handleRequestQuoteFromProduct}
          />
        )}

        {currentPath === '/how-to-choose-quality-bricks' && (
          <BuyingGuidePage
            onNavigate={handleNavigate}
            onRequestQuote={() => scrollToSection('quote')}
          />
        )}

        {currentPath === '/brick-price-guide' && (
          <PriceGuidePage
            onNavigate={handleNavigate}
            onRequestQuote={() => scrollToSection('quote')}
          />
        )}
      </main>

      {/* Footer & Contact */}
      <Footer onNavigate={handleNavigate} />

      {/* Product Detail Modal */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onRequestQuote={handleRequestQuoteFromProduct}
      />
    </div>
  );
}
