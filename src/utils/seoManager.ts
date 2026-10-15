import { useEffect } from 'react';
import { PAGES_SEO, BASE_PRODUCTION_URL } from '../data/seo';

export function normalizePath(pathname: string): string {
  if (!pathname || pathname === '/' || pathname === '/index.html') {
    return '/';
  }
  // Strip trailing /index.html and trailing slashes
  const cleaned = pathname.replace(/\/index\.html$/i, '').replace(/\/+$/, '');
  return cleaned === '' ? '/' : cleaned;
}

export function updatePageMetadata(pathname: string) {
  const normalized = normalizePath(pathname);
  const seo = PAGES_SEO[normalized] || PAGES_SEO['/'];

  // Update Document Title
  document.title = seo.title;

  // Update or create Meta Description (Ensure exactly one unique meta description exists)
  const existingMetaDescs = document.querySelectorAll('meta[name="description"]');
  if (existingMetaDescs.length > 1) {
    // Remove duplicates if any
    for (let i = 1; i < existingMetaDescs.length; i++) {
      existingMetaDescs[i].remove();
    }
  }
  let metaDesc = existingMetaDescs[0];
  if (!metaDesc) {
    metaDesc = document.createElement('meta');
    metaDesc.setAttribute('name', 'description');
    document.head.appendChild(metaDesc);
  }
  metaDesc.setAttribute('content', seo.description);

  // Update or create Canonical Link
  let canonicalLink = document.querySelector('link[rel="canonical"]');
  if (!canonicalLink) {
    canonicalLink = document.createElement('link');
    canonicalLink.setAttribute('rel', 'canonical');
    document.head.appendChild(canonicalLink);
  }
  const currentCanonical = typeof window !== 'undefined' && window.location.origin
    ? `${window.location.origin}${normalized === '/' ? '/' : normalized}`
    : seo.canonical;
  canonicalLink.setAttribute('href', currentCanonical);

  // Helper for OpenGraph and Twitter tags
  const setMetaTag = (selector: string, attr: string, value: string, createAttr: [string, string]) => {
    let el = document.querySelector(selector);
    if (!el) {
      el = document.createElement('meta');
      el.setAttribute(createAttr[0], createAttr[1]);
      document.head.appendChild(el);
    }
    el.setAttribute(attr, value);
  };

  setMetaTag('meta[property="og:title"]', 'content', seo.title, ['property', 'og:title']);
  setMetaTag('meta[property="og:description"]', 'content', seo.description, ['property', 'og:description']);
  setMetaTag('meta[property="og:type"]', 'content', seo.ogType, ['property', 'og:type']);
  setMetaTag('meta[property="og:url"]', 'content', currentCanonical, ['property', 'og:url']);

  setMetaTag('meta[name="twitter:title"]', 'content', seo.title, ['name', 'twitter:title']);
  setMetaTag('meta[name="twitter:description"]', 'content', seo.description, ['name', 'twitter:description']);

  // Update JSON-LD Script
  let jsonLdScript = document.querySelector('script[data-seo-jsonld="true"]');
  if (!jsonLdScript) {
    jsonLdScript = document.createElement('script');
    jsonLdScript.setAttribute('type', 'application/ld+json');
    jsonLdScript.setAttribute('data-seo-jsonld', 'true');
    document.head.appendChild(jsonLdScript);
  }
  jsonLdScript.textContent = JSON.stringify(seo.schema, null, 2);
}

export function usePageSEO(pathname: string) {
  useEffect(() => {
    updatePageMetadata(pathname);
  }, [pathname]);
}
