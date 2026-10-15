/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import type { Product } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Products } from './components/Products';
import { ProductModal } from './components/ProductModal';
import { About } from './components/About';
import { VisualBanner } from './components/VisualBanner';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Gallery } from './components/Gallery';
import { QuoteSection } from './components/QuoteSection';
import { Footer } from './components/Footer';

export default function App() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [quoteProductPreset, setQuoteProductPreset] = useState<string>('Red Clay Bricks');

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleRequestQuoteFromProduct = (productName: string) => {
    setQuoteProductPreset(productName);
    scrollToSection('quote');
  };

  return (
    <div className="min-h-screen bg-[#0D0D0E] text-[#E6E4E2] flex flex-col selection:bg-[#B84226] selection:text-white">
      {/* Navigation */}
      <Navbar onQuoteClick={() => scrollToSection('quote')} />

      <main className="flex-1">
        {/* 1. Hero Section */}
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

        {/* 7. Get a Quote Section */}
        <QuoteSection preselectedProduct={quoteProductPreset} />
      </main>

      {/* 8. Footer & Contact */}
      <Footer />

      {/* Product Detail Modal */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onRequestQuote={handleRequestQuoteFromProduct}
      />
    </div>
  );
}
