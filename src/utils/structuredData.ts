export const getLocalBusinessSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://agnibookshop.com/#organization',
  name: 'Agni Bookshop & Communication',
  image: 'https://agnibookshop.com/favicon.png',
  url: 'https://agnibookshop.com/',
  telephone: '+94725451111',
  email: 'agnibookshop1@gmail.com',
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'LK',
    addressLocality: 'Sri Lanka',
  },
  geo: {
    '@type': 'GeoCoordinates',
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '18:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Saturday',
      opens: '08:00',
      closes: '16:00',
    },
  ],
  sameAs: [
    'https://www.facebook.com/agnibookshop',
    'https://wa.me/94725451111',
  ],
  description:
    'Leading printing & communication center in Sri Lanka offering professional photocopy, color printing, laminating, mug printing, seal cutting, mobile reloads, and bill payment services.',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Printing and Communication Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Photocopy & Printing Services',
          description: 'High-quality black & white and color printing services',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Laminating Services',
          description: 'Professional document lamination in A4 and A3 sizes',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Mug Printing',
          description: 'Custom mug printing with photos and designs',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Seal Cutting',
          description: 'Custom rubber stamps and seals for official use',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Mobile Reloads',
          description: 'Instant mobile reloads for all networks',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Bill Payments',
          description: 'Utility bill payment services',
        },
      },
    ],
  },
});

export const getWebsiteSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': 'https://agnibookshop.com/#website',
  url: 'https://agnibookshop.com/',
  name: 'Agni Bookshop & Communication',
  description:
    'Professional printing, laminating, and communication services in Sri Lanka',
  publisher: {
    '@id': 'https://agnibookshop.com/#organization',
  },
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: 'https://agnibookshop.com/?s={search_term_string}',
    },
    'query-input': 'required name=search_term_string',
  },
});

export const getBreadcrumbSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: 'https://agnibookshop.com/',
    },
  ],
});

export const getOrganizationSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': 'https://agnibookshop.com/#organization',
  name: 'Agni Bookshop & Communication',
  legalName: 'Agni Bookshop & Communication',
  url: 'https://agnibookshop.com/',
  logo: 'https://agnibookshop.com/favicon.png',
  image: 'https://agnibookshop.com/favicon.png',
  description:
    'Leading printing & communication center in Sri Lanka offering professional services',
  telephone: '+94725451111',
  email: 'agnibookshop1@gmail.com',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'LK',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+94725451111',
    contactType: 'Customer Service',
    email: 'agnibookshop1@gmail.com',
    availableLanguage: ['English', 'Sinhala'],
  },
  sameAs: [
    'https://www.facebook.com/agnibookshop',
    'https://wa.me/94725451111',
  ],
});

export const getCombinedSchema = () => ({
  '@context': 'https://schema.org',
  '@graph': [
    getOrganizationSchema(),
    getWebsiteSchema(),
    getLocalBusinessSchema(),
    getBreadcrumbSchema(),
  ],
});
