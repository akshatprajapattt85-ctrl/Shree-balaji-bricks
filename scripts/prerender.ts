import fs from 'node:fs';
import path from 'node:path';
import { PAGES_SEO, BASE_PRODUCTION_URL } from '../src/data/seo';

const distDir = path.resolve('dist');

// Base template to copy for dynamic nested routes
const baseTemplatePath = fs.existsSync(path.join(distDir, 'blog/index.html'))
  ? path.join(distDir, 'blog/index.html')
  : path.join(distDir, 'index.html');

// Verification and enhancement of dist HTML files
for (const [routePath, seo] of Object.entries(PAGES_SEO)) {
  const isHome = routePath === '/';
  const slug = routePath.replace(/^\//, '');
  const htmlFilePath = isHome
    ? path.join(distDir, 'index.html')
    : path.join(distDir, slug, 'index.html');

  if (!fs.existsSync(htmlFilePath)) {
    const dir = path.dirname(htmlFilePath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    if (fs.existsSync(baseTemplatePath)) {
      fs.copyFileSync(baseTemplatePath, htmlFilePath);
    } else {
      console.error(`Warning: ${htmlFilePath} not found and no base template available.`);
      continue;
    }
  }

  let html = fs.readFileSync(htmlFilePath, 'utf-8');

  // Verify and ensure exact Title
  html = html.replace(/<title>[\s\S]*?<\/title>/i, `<title>${seo.title}</title>`);

  // Ensure exactly one unique Meta Description in <head>
  const metaDescRegex = /<meta\s+name=["']description["'][^>]*>/gi;
  html = html.replace(metaDescRegex, ''); // remove any existing
  const metaDescTag = `<meta name="description" content="${seo.description}" />`;
  html = html.replace('</head>', `  ${metaDescTag}\n  </head>`);

  // Ensure exactly one Canonical Link in <head>
  const canonicalRegex = /<link\s+rel=["']canonical["'][^>]*>/gi;
  html = html.replace(canonicalRegex, '');
  const canonicalTag = `<link rel="canonical" href="${seo.canonical}" />`;
  html = html.replace('</head>', `  ${canonicalTag}\n  </head>`);

  // Update OG Title and Description
  html = html.replace(/<meta\s+property=["']og:title["'][^>]*>/gi, '');
  html = html.replace('</head>', `  <meta property="og:title" content="${seo.title}" />\n  </head>`);
  html = html.replace(/<meta\s+property=["']og:description["'][^>]*>/gi, '');
  html = html.replace('</head>', `  <meta property="og:description" content="${seo.description}" />\n  </head>`);

  // Update JSON-LD if schema present
  if (seo.schema) {
    const jsonLdTag = `<script type="application/ld+json" data-seo-jsonld="true">\n${JSON.stringify(
      seo.schema,
      null,
      2
    )}\n</script>`;
    const existingJsonLd = /<script\s+type=["']application\/ld\+json["'][^>]*>[\s\S]*?<\/script>/gi;
    html = html.replace(existingJsonLd, '');
    html = html.replace('</head>', `  ${jsonLdTag}\n  </head>`);
  }

  fs.writeFileSync(htmlFilePath, html, 'utf-8');
  console.log(`Verified & finalized: ${routePath} -> ${htmlFilePath}`);

  // Also write flat clean-url HTML file for static hosts (e.g. dist/types-of-bricks.html)
  if (!isHome && !slug.includes('/')) {
    const flatFile = path.join(distDir, `${slug}.html`);
    fs.writeFileSync(flatFile, html, 'utf-8');
  }
}

// Copy robots.txt and sitemap.xml to dist if needed
const publicRobots = path.resolve('public/robots.txt');
const distRobots = path.join(distDir, 'robots.txt');
if (fs.existsSync(publicRobots) && !fs.existsSync(distRobots)) {
  fs.copyFileSync(publicRobots, distRobots);
}

const publicSitemap = path.resolve('public/sitemap.xml');
const distSitemap = path.join(distDir, 'sitemap.xml');
if (fs.existsSync(publicSitemap) && !fs.existsSync(distSitemap)) {
  fs.copyFileSync(publicSitemap, distSitemap);
}

// Ensure Google Search Console verification file is placed in dist root
const gscFile = 'google45f4ff32df33ba1a.html';
const publicGSC = path.resolve('public', gscFile);
const distGSC = path.join(distDir, gscFile);
if (fs.existsSync(publicGSC)) {
  fs.copyFileSync(publicGSC, distGSC);
  console.log(`Verified GSC file in: ${distGSC}`);
}

console.log('SEO verification and multi-page finalization complete.');
