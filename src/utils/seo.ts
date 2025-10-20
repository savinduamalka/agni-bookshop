/**
 * SEO Utilities and Helper Functions
 */

/**
 * Generate dynamic sitemap
 */
export const generateSitemap = (
  pages: {
    url: string;
    lastmod?: string;
    priority?: number;
    changefreq?: string;
  }[]
) => {
  const baseUrl = 'https://agnibookshop.com';

  const urlEntries = pages
    .map(
      (page) => `
  <url>
    <loc>${baseUrl}${page.url}</loc>
    ${page.lastmod ? `<lastmod>${page.lastmod}</lastmod>` : ''}
    ${page.changefreq ? `<changefreq>${page.changefreq}</changefreq>` : ''}
    ${page.priority ? `<priority>${page.priority}</priority>` : ''}
  </url>`
    )
    .join('');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlEntries}
</urlset>`;
};

/**
 * Track page views for analytics
 */
export const trackPageView = (url: string, title: string) => {
  // Google Analytics 4
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('config', 'GA_MEASUREMENT_ID', {
      page_path: url,
      page_title: title,
    });
  }

  // Facebook Pixel
  if (typeof window !== 'undefined' && (window as any).fbq) {
    (window as any).fbq('track', 'PageView');
  }
};

/**
 * Track custom events
 */
export const trackEvent = (eventName: string, eventParams?: object) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', eventName, eventParams);
  }
};

/**
 * Generate meta tags object
 */
export const generateMetaTags = (options: {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
}) => {
  const baseUrl = 'https://agnibookshop.com';

  return {
    title: options.title,
    meta: [
      { name: 'description', content: options.description },
      { name: 'keywords', content: options.keywords || '' },
      { property: 'og:title', content: options.title },
      { property: 'og:description', content: options.description },
      {
        property: 'og:image',
        content: options.image || `${baseUrl}/favicon.png`,
      },
      { property: 'og:url', content: options.url || baseUrl },
      { property: 'og:type', content: options.type || 'website' },
      { name: 'twitter:title', content: options.title },
      { name: 'twitter:description', content: options.description },
      {
        name: 'twitter:image',
        content: options.image || `${baseUrl}/favicon.png`,
      },
      { name: 'twitter:card', content: 'summary_large_image' },
    ],
  };
};

/**
 * Get canonical URL
 */
export const getCanonicalUrl = (path: string = '') => {
  const baseUrl = 'https://agnibookshop.com';
  return `${baseUrl}${path}`;
};

/**
 * Generate breadcrumb structured data
 */
export const generateBreadcrumbSchema = (
  items: { name: string; url: string }[]
) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
};

/**
 * Generate FAQ structured data
 */
export const generateFAQSchema = (
  faqs: { question: string; answer: string }[]
) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
};

/**
 * Generate Article schema
 */
export const generateArticleSchema = (article: {
  headline: string;
  description: string;
  image: string;
  datePublished: string;
  dateModified?: string;
  author: string;
}) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.headline,
    description: article.description,
    image: article.image,
    datePublished: article.datePublished,
    dateModified: article.dateModified || article.datePublished,
    author: {
      '@type': 'Person',
      name: article.author,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Agni Bookshop & Communication',
      logo: {
        '@type': 'ImageObject',
        url: 'https://agnibookshop.com/favicon.png',
      },
    },
  };
};

/**
 * Check if content matches search intent keywords
 */
export const optimizeForKeywords = (content: string, keywords: string[]) => {
  const lowerContent = content.toLowerCase();
  const matchedKeywords = keywords.filter((keyword) =>
    lowerContent.includes(keyword.toLowerCase())
  );

  const density = matchedKeywords.length / keywords.length;

  return {
    matchedKeywords,
    density,
    suggestions: keywords.filter((k) => !matchedKeywords.includes(k)),
  };
};

/**
 * Generate alt text suggestions for images
 */
export const generateAltText = (filename: string, context?: string) => {
  // Remove file extension and replace hyphens/underscores with spaces
  const cleanName = filename
    .replace(/\.[^/.]+$/, '')
    .replace(/[-_]/g, ' ')
    .trim();

  if (context) {
    return `${cleanName} - ${context}`;
  }

  return cleanName;
};

/**
 * Validate structured data
 */
export const validateStructuredData = (data: object) => {
  try {
    const jsonString = JSON.stringify(data);
    JSON.parse(jsonString); // Validate JSON

    // Check required fields for LocalBusiness
    if (data['@type'] === 'LocalBusiness') {
      const required = ['name', 'address', 'telephone'];
      const missing = required.filter((field) => !data[field]);

      if (missing.length > 0) {
        console.warn(`Missing required fields: ${missing.join(', ')}`);
        return false;
      }
    }

    return true;
  } catch (error) {
    console.error('Invalid structured data:', error);
    return false;
  }
};

/**
 * Social sharing utilities
 */
export const generateSocialShareUrl = (
  platform: 'facebook' | 'twitter' | 'whatsapp' | 'linkedin',
  options: {
    url: string;
    title?: string;
    description?: string;
  }
) => {
  const encodedUrl = encodeURIComponent(options.url);
  const encodedTitle = encodeURIComponent(options.title || '');
  const encodedDesc = encodeURIComponent(options.description || '');

  const urls = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
    whatsapp: `https://wa.me/?text=${encodedTitle}%20${encodedUrl}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
  };

  return urls[platform];
};

/**
 * Get reading time estimate
 */
export const getReadingTime = (text: string, wordsPerMinute: number = 200) => {
  const words = text.trim().split(/\s+/).length;
  return Math.ceil(words / wordsPerMinute);
};

/**
 * SEO-friendly URL slug generator
 */
export const generateSlug = (text: string) => {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '') // Remove special characters
    .replace(/[\s_-]+/g, '-') // Replace spaces and underscores with hyphens
    .replace(/^-+|-+$/g, ''); // Remove leading/trailing hyphens
};
