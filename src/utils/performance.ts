/**
 * Performance Utilities for SEO and Web Vitals Optimization
 */

/**
 * Lazy load images when they come into viewport
 */
export const lazyLoadImages = () => {
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          if (img.dataset.src) {
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
            observer.unobserve(img);
          }
        }
      });
    });

    document.querySelectorAll('img[data-src]').forEach((img) => {
      imageObserver.observe(img);
    });
  }
};

/**
 * Preload critical resources
 */
export const preloadCriticalResources = () => {
  const preloadLink = (href: string, as: string, type?: string) => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = href;
    link.as = as;
    if (type) link.type = type;
    document.head.appendChild(link);
  };

  // Preload critical fonts if not already done
  // Example: preloadLink('/fonts/Poppins-Bold.woff2', 'font', 'font/woff2');
};

/**
 * Report Web Vitals to analytics
 * Note: Install 'web-vitals' package to use this function
 * npm install web-vitals
 */
export const reportWebVitals = (onPerfEntry?: (metric: any) => void) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    // Uncomment after installing web-vitals package
    // import('web-vitals').then(({ onCLS, onFID, onFCP, onLCP, onTTFB }) => {
    //   onCLS(onPerfEntry);
    //   onFID(onPerfEntry);
    //   onFCP(onPerfEntry);
    //   onLCP(onPerfEntry);
    //   onTTFB(onPerfEntry);
    // });

    // Alternative: Use Performance Observer API
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          onPerfEntry(entry);
        }
      });
      observer.observe({
        entryTypes: ['navigation', 'paint', 'largest-contentful-paint'],
      });
    }
  }
};

/**
 * Defer non-critical scripts
 */
export const deferNonCriticalScripts = () => {
  // Load analytics after page load
  if (document.readyState === 'complete') {
    loadAnalytics();
  } else {
    window.addEventListener('load', loadAnalytics);
  }
};

const loadAnalytics = () => {
  // Initialize Google Analytics 4 here
  // Example:
  // const script = document.createElement('script');
  // script.async = true;
  // script.src = 'https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID';
  // document.head.appendChild(script);
};

/**
 * Optimize third-party scripts
 */
export const optimizeThirdPartyScripts = () => {
  // Add facade for third-party embeds (YouTube, Facebook, etc.)
  // Only load when user interacts
};

/**
 * Prefetch next pages for faster navigation
 */
export const prefetchPages = (urls: string[]) => {
  if ('IntersectionObserver' in window) {
    const linkObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const url = (entry.target as HTMLAnchorElement).href;
          if (
            url &&
            !document.querySelector(`link[rel="prefetch"][href="${url}"]`)
          ) {
            const link = document.createElement('link');
            link.rel = 'prefetch';
            link.href = url;
            document.head.appendChild(link);
          }
        }
      });
    });

    urls.forEach((url) => {
      const links = document.querySelectorAll(`a[href="${url}"]`);
      links.forEach((link) => linkObserver.observe(link));
    });
  }
};

/**
 * Service Worker registration for PWA
 */
export const registerServiceWorker = async () => {
  if ('serviceWorker' in navigator) {
    try {
      const registration = await navigator.serviceWorker.register('/sw.js');
      console.log('ServiceWorker registered:', registration);
    } catch (error) {
      console.error('ServiceWorker registration failed:', error);
    }
  }
};

/**
 * Add structured data to page
 */
export const injectStructuredData = (data: object) => {
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.text = JSON.stringify(data);
  document.head.appendChild(script);
};

/**
 * Optimize fonts loading
 */
export const optimizeFontLoading = () => {
  // Use font-display: swap in CSS
  // Preload critical fonts
  const fontPreload = (href: string) => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'font';
    link.type = 'font/woff2';
    link.href = href;
    link.crossOrigin = 'anonymous';
    document.head.appendChild(link);
  };

  // Add your critical fonts here
  // fontPreload('/fonts/Poppins-Bold.woff2');
};

/**
 * Reduce layout shift by setting image dimensions
 */
export const setImageDimensions = () => {
  document.querySelectorAll('img:not([width])').forEach((img) => {
    const element = img as HTMLImageElement;
    if (element.naturalWidth && element.naturalHeight) {
      element.setAttribute('width', element.naturalWidth.toString());
      element.setAttribute('height', element.naturalHeight.toString());
    }
  });
};

/**
 * Enable critical CSS inlining
 */
export const inlineCriticalCSS = (css: string) => {
  const style = document.createElement('style');
  style.textContent = css;
  document.head.appendChild(style);
};

/**
 * Monitor performance metrics
 */
export const monitorPerformance = () => {
  if ('PerformanceObserver' in window) {
    // Observe long tasks
    const longTaskObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        console.warn('Long task detected:', entry);
        // Send to analytics
      }
    });
    longTaskObserver.observe({ entryTypes: ['longtask'] });

    // Observe layout shifts
    const clsObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (!(entry as any).hadRecentInput) {
          console.warn('Layout shift detected:', entry);
          // Send to analytics
        }
      }
    });
    clsObserver.observe({ entryTypes: ['layout-shift'] });
  }
};

/**
 * Implement resource hints
 */
export const addResourceHints = () => {
  const addHint = (rel: string, href: string) => {
    const link = document.createElement('link');
    link.rel = rel;
    link.href = href;
    document.head.appendChild(link);
  };

  // Preconnect to external domains
  addHint('preconnect', 'https://fonts.googleapis.com');
  addHint('preconnect', 'https://fonts.gstatic.com');

  // DNS prefetch for other domains
  addHint('dns-prefetch', 'https://www.google-analytics.com');
};
