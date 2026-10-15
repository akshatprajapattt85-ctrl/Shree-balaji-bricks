import { useState, useEffect } from 'react';
import { Send, MessageSquare, CheckCircle, AlertCircle, RefreshCw } from 'lucide-react';
import { ASSETS, BUSINESS_INFO } from '../data/content';
import type { QuoteFormData } from '../types';
import { ImageWithFallback } from './ImageWithFallback';

interface QuoteSectionProps {
  preselectedProduct?: string;
  onClearPreselected?: () => void;
}

export function QuoteSection({ preselectedProduct }: QuoteSectionProps) {
  const [formData, setFormData] = useState<QuoteFormData>({
    fullName: '',
    phoneNumber: '',
    productType: 'Red Clay Bricks',
    requiredQuantity: '10,000 Bricks (approx 1 Truckload)',
    deliveryLocation: '',
    additionalMessage: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof QuoteFormData, string>>>({});
  const [submittedReceipt, setSubmittedReceipt] = useState<{
    referenceId: string;
    data: QuoteFormData;
  } | null>(null);

  useEffect(() => {
    if (preselectedProduct) {
      setFormData((prev) => ({ ...prev, productType: preselectedProduct }));
    }
  }, [preselectedProduct]);

  const productOptions = [
    'Red Clay Bricks',
    'Fly Ash Bricks',
    'Concrete Blocks',
    'Paving Bricks',
    'Multiple / Custom Bulk Order',
  ];

  const quantityOptions = [
    'Under 5,000 Bricks (Sample / Small Project)',
    '5,000 – 10,000 Bricks (Standard Truckload)',
    '15,000 – 30,000 Bricks (Commercial / Multi-floor)',
    '50,000+ Bricks (Large Infrastructure / Developer)',
  ];

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof QuoteFormData, string>> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Please enter your full name.';
    }

    const cleanPhone = formData.phoneNumber.replace(/[\s-]/g, '');
    if (!cleanPhone) {
      newErrors.phoneNumber = 'Phone number is required for dispatch estimation.';
    } else if (cleanPhone.length < 8) {
      newErrors.phoneNumber = 'Please enter a valid phone number (at least 8 digits).';
    }

    if (!formData.deliveryLocation.trim()) {
      newErrors.deliveryLocation = 'Please provide the delivery destination or city.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    // Generate reference code
    const refCode = `PSE-${Math.floor(100000 + Math.random() * 900000)}`;
    setSubmittedReceipt({
      referenceId: refCode,
      data: { ...formData },
    });
  };

  const getWhatsAppUrl = (data: QuoteFormData, refId?: string) => {
    const text = encodeURIComponent(
      `Hello Pawanshakti Enterprises,\n\nI would like to request a quotation for my project:\n` +
      (refId ? `*Reference:* ${refId}\n` : '') +
      `*Name:* ${data.fullName || 'Prospective Customer'}\n` +
      `*Product:* ${data.productType}\n` +
      `*Quantity:* ${data.requiredQuantity}\n` +
      `*Delivery Location:* ${data.deliveryLocation || 'To be specified'}\n` +
      (data.additionalMessage ? `*Notes:* ${data.additionalMessage}\n` : '') +
      `\nPlease provide wholesale pricing and dispatch schedule.`
    );
    return `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${text}`;
  };

  const handleReset = () => {
    setSubmittedReceipt(null);
    setFormData({
      fullName: '',
      phoneNumber: '',
      productType: 'Red Clay Bricks',
      requiredQuantity: '10,000 Bricks (approx 1 Truckload)',
      deliveryLocation: '',
      additionalMessage: '',
    });
    setErrors({});
  };

  return (
    <section id="quote" className="py-24 sm:py-32 bg-[#121215] relative border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Visual & Copy */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#B84226] block mb-2">
                Direct Yard & Kiln Supply
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-tight text-white font-display mb-4">
                LET'S BUILD SOMETHING STRONG.
              </h2>
              <p className="text-neutral-300 text-sm sm:text-base font-light leading-relaxed mb-8">
                Tell us what you need. We'll help you find the right bricks for your project.
              </p>
            </div>

            {/* Complementary Kiln/Brick Photography */}
            <div className="relative rounded-sm overflow-hidden border border-neutral-800 shadow-xl aspect-[16/11] bg-neutral-900 mb-8">
              <ImageWithFallback
                src={ASSETS.kiln}
                alt="Pawanshakti Enterprises Kiln Production"
                fallbackTitle="Manufacturing Kiln"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <span className="text-[11px] font-medium text-neutral-300 tracking-wider uppercase block">
                  Continuous Hoffmann Kiln Operations
                </span>
                <span className="text-xs text-neutral-400">
                  Bulk order logistics dispatched daily to regional construction sites.
                </span>
              </div>
            </div>

            {/* Direct WhatsApp Quick Contact Alternative */}
            <div className="p-5 bg-[#17171B] border border-neutral-800 rounded-sm">
              <div className="flex items-center gap-3 mb-2">
                <MessageSquare className="w-5 h-5 text-emerald-400" />
                <span className="text-sm font-semibold uppercase tracking-wider text-white font-display">
                  Prefer Instant WhatsApp Inquiry?
                </span>
              </div>
              <p className="text-xs text-neutral-400 mb-4 leading-relaxed">
                Connect directly with our sales desk on WhatsApp for instant volume rates, site freight estimation, and stock queries.
              </p>
              <a
                href={getWhatsAppUrl(formData)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-emerald-700 hover:bg-emerald-600 transition-colors rounded-sm w-full cursor-pointer shadow-md"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Open WhatsApp Chat</span>
              </a>
            </div>
          </div>

          {/* Right Column: Quote Form or Confirmation Receipt */}
          <div className="lg:col-span-7 bg-[#17171C] border border-neutral-800 rounded-sm p-6 sm:p-10 shadow-2xl">
            {submittedReceipt ? (
              /* Success Confirmation Receipt */
              <div className="text-center py-6 animate-in fade-in duration-300">
                <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mx-auto mb-5">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold uppercase text-white font-display mb-2">
                  Quote Request Prepared
                </h3>
                <p className="text-xs text-neutral-400 uppercase tracking-widest mb-6 font-mono">
                  Ref Code: <span className="text-white font-semibold">{submittedReceipt.referenceId}</span>
                </p>

                <div className="bg-[#121215] border border-neutral-800 rounded-sm p-5 text-left mb-8 space-y-3">
                  <div className="flex justify-between border-b border-neutral-800/80 pb-2 text-xs">
                    <span className="text-neutral-400">Customer Name:</span>
                    <span className="font-semibold text-white">{submittedReceipt.data.fullName}</span>
                  </div>
                  <div className="flex justify-between border-b border-neutral-800/80 pb-2 text-xs">
                    <span className="text-neutral-400">Contact Number:</span>
                    <span className="font-mono text-white">{submittedReceipt.data.phoneNumber}</span>
                  </div>
                  <div className="flex justify-between border-b border-neutral-800/80 pb-2 text-xs">
                    <span className="text-neutral-400">Selected Product:</span>
                    <span className="font-semibold text-[#DE5B3E]">{submittedReceipt.data.productType}</span>
                  </div>
                  <div className="flex justify-between border-b border-neutral-800/80 pb-2 text-xs">
                    <span className="text-neutral-400">Target Volume:</span>
                    <span className="text-neutral-200">{submittedReceipt.data.requiredQuantity}</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-neutral-400">Delivery Destination:</span>
                    <span className="text-neutral-200">{submittedReceipt.data.deliveryLocation}</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <a
                    href={getWhatsAppUrl(submittedReceipt.data, submittedReceipt.referenceId)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3.5 px-6 text-xs font-semibold uppercase tracking-wider text-white bg-emerald-600 hover:bg-emerald-500 transition-colors rounded-sm inline-flex items-center justify-center gap-2 shadow-lg"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Send Details on WhatsApp (Instant Reply)</span>
                  </a>

                  <button
                    onClick={handleReset}
                    type="button"
                    className="w-full py-3 px-6 text-xs font-medium uppercase tracking-wider text-neutral-400 hover:text-white transition-colors rounded-sm inline-flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <RefreshCw className="w-3.5 h-3.5" />
                    <span>Submit Another Enquiry</span>
                  </button>
                </div>
              </div>
            ) : (
              /* Quotation Input Form */
              <form onSubmit={handleSubmit} noValidate className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold uppercase text-white font-display mb-1">
                    Request Wholesale Quotation
                  </h3>
                  <p className="text-xs text-neutral-400 font-light">
                    Fill out your site specs for an accurate price estimation and transport schedule.
                  </p>
                </div>

                {/* Full Name & Phone Number */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="fullName"
                      className="block text-xs uppercase tracking-wider font-semibold text-neutral-300 mb-2"
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      value={formData.fullName}
                      onChange={(e) => {
                        setFormData({ ...formData, fullName: e.target.value });
                        if (errors.fullName) setErrors({ ...errors, fullName: undefined });
                      }}
                      placeholder="e.g. Ramesh Sharma"
                      className={`w-full px-4 py-3 bg-[#111114] border ${
                        errors.fullName ? 'border-red-500' : 'border-neutral-700'
                      } rounded-sm text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#B84226] focus:ring-1 focus:ring-[#B84226] transition-colors`}
                    />
                    {errors.fullName && (
                      <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3 shrink-0" />
                        <span>{errors.fullName}</span>
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="phoneNumber"
                      className="block text-xs uppercase tracking-wider font-semibold text-neutral-300 mb-2"
                    >
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={(e) => {
                        setFormData({ ...formData, phoneNumber: e.target.value });
                        if (errors.phoneNumber) setErrors({ ...errors, phoneNumber: undefined });
                      }}
                      placeholder="+91 98765 43210"
                      className={`w-full px-4 py-3 bg-[#111114] border ${
                        errors.phoneNumber ? 'border-red-500' : 'border-neutral-700'
                      } rounded-sm text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#B84226] focus:ring-1 focus:ring-[#B84226] transition-colors`}
                    />
                    {errors.phoneNumber && (
                      <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3 shrink-0" />
                        <span>{errors.phoneNumber}</span>
                      </p>
                    )}
                  </div>
                </div>

                {/* Product Type Selection */}
                <div>
                  <label
                    htmlFor="productType"
                    className="block text-xs uppercase tracking-wider font-semibold text-neutral-300 mb-2"
                  >
                    Product Type *
                  </label>
                  <select
                    id="productType"
                    value={formData.productType}
                    onChange={(e) => setFormData({ ...formData, productType: e.target.value })}
                    className="w-full px-4 py-3 bg-[#111114] border border-neutral-700 rounded-sm text-sm text-white focus:outline-none focus:border-[#B84226] focus:ring-1 focus:ring-[#B84226] transition-colors cursor-pointer"
                  >
                    {productOptions.map((opt) => (
                      <option key={opt} value={opt} className="bg-neutral-900 text-white">
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Required Quantity & Delivery Location */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="requiredQuantity"
                      className="block text-xs uppercase tracking-wider font-semibold text-neutral-300 mb-2"
                    >
                      Required Quantity *
                    </label>
                    <select
                      id="requiredQuantity"
                      value={formData.requiredQuantity}
                      onChange={(e) => setFormData({ ...formData, requiredQuantity: e.target.value })}
                      className="w-full px-4 py-3 bg-[#111114] border border-neutral-700 rounded-sm text-sm text-white focus:outline-none focus:border-[#B84226] focus:ring-1 focus:ring-[#B84226] transition-colors cursor-pointer"
                    >
                      {quantityOptions.map((qty) => (
                        <option key={qty} value={qty} className="bg-neutral-900 text-white">
                          {qty}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="deliveryLocation"
                      className="block text-xs uppercase tracking-wider font-semibold text-neutral-300 mb-2"
                    >
                      Delivery Location *
                    </label>
                    <input
                      type="text"
                      id="deliveryLocation"
                      value={formData.deliveryLocation}
                      onChange={(e) => {
                        setFormData({ ...formData, deliveryLocation: e.target.value });
                        if (errors.deliveryLocation) setErrors({ ...errors, deliveryLocation: undefined });
                      }}
                      placeholder="City / Construction Site Address"
                      className={`w-full px-4 py-3 bg-[#111114] border ${
                        errors.deliveryLocation ? 'border-red-500' : 'border-neutral-700'
                      } rounded-sm text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#B84226] focus:ring-1 focus:ring-[#B84226] transition-colors`}
                    />
                    {errors.deliveryLocation && (
                      <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3 shrink-0" />
                        <span>{errors.deliveryLocation}</span>
                      </p>
                    )}
                  </div>
                </div>

                {/* Additional Message */}
                <div>
                  <label
                    htmlFor="additionalMessage"
                    className="block text-xs uppercase tracking-wider font-semibold text-neutral-300 mb-2"
                  >
                    Additional Message (Optional)
                  </label>
                  <textarea
                    id="additionalMessage"
                    rows={3}
                    value={formData.additionalMessage}
                    onChange={(e) => setFormData({ ...formData, additionalMessage: e.target.value })}
                    placeholder="Project requirements, expected delivery timeline, or site unloading details..."
                    className="w-full px-4 py-3 bg-[#111114] border border-neutral-700 rounded-sm text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#B84226] focus:ring-1 focus:ring-[#B84226] transition-colors resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full py-4 text-xs sm:text-sm font-semibold uppercase tracking-wider text-white bg-[#B84226] hover:bg-[#A3381E] active:scale-[0.99] transition-all rounded-sm flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-[#B84226]/30"
                >
                  <Send className="w-4 h-4" />
                  <span>REQUEST A QUOTE</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
