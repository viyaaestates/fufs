import './globals.css'

export const metadata = {
  title: 'Luxury Villas in Goa | Premium Homes & Real Estate - Viyaa Estates',
  description: 'Buy luxury villas in Goa with Viyaa Estates. Premium 4BHK villas with modern architecture, Vaastu-compliant design. Explore Viyaa Shantam - your dream villa in Goa.',
  keywords: 'villas in Goa, luxury villas Goa, buy villa in Goa, Goa real estate, premium villas Goa, 4BHK villas Goa, Viyaa Estates, Viyaa Shantam, Goa property, villas for sale Goa, luxury homes Goa, Goa villas, real estate Goa, villa projects Goa, luxury boutique villas, curated living, limited edition residences, bespoke homes, private estate living, design-led development, ultra-premium villas, signature residences, tropical modern architecture, coastal contemporary, lush green living, forest-view villas, Japanese architecture inspired, sustainable coastal living, harmony with nature, architectural masterpiece, spatial luxury, open-plan living, double-height volumes, natural light optimised, courtyard homes, infinity pool villas, seamless indoor-outdoor living, handcrafted detailing, high rental yield villas, holiday home investment, second-home destination, scarcity-driven appreciation, low-density development, capital growth asset, lifestyle investment, sanctuary living, tranquil retreat, mindful luxury, private oasis, slow living, wellness-oriented spaces, elevated coastal lifestyle, timeless elegance, understated luxury, crafted with integrity, refined minimalism, discreet opulence, artisanal excellence, thoughtfully curated, luxury property developer India, architectural real estate solutions, bespoke villa design, architectural excellence in Goa, featured Goa real estate, Goa villa portfolio, luxury home portfolio, real estate consultancy Goa, property search luxury Goa, architectural design Goa, interior design Goa, PMC services Goa',
  authors: [{ name: 'Viyaa Estates' }],
  alternates: {
    canonical: 'https://www.viyaaestates.com/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://www.viyaaestates.com/',
    title: 'Luxury Villas in Goa | Premium Homes & Real Estate - Viyaa Estates',
    description: 'Buy luxury villas in Goa with Viyaa Estates. Premium 4BHK villas with modern architecture, Vaastu-compliant design. Explore Viyaa Shantam - your dream villa in Goa.',
    siteName: 'Viyaa Estates',
    images: [{
      url: 'https://www.viyaaestates.com/pictures/viyalogonew1.png',
      width: 1200,
      height: 630,
      alt: 'Viyaa Estates - Luxury Villas in Goa',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Luxury Villas in Goa | Premium Homes & Real Estate - Viyaa Estates',
    description: 'Buy luxury villas in Goa with Viyaa Estates. Premium 4BHK villas with modern architecture, Vaastu-compliant design. Explore Viyaa Shantam - your dream villa in Goa.',
    images: ['https://www.viyaaestates.com/pictures/viyalogonew1.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/pictures/viyalogotab.png',
  },
  verification: {
    google: 'your-google-verification-code', // Add your Google Search Console verification code
  },
}

export default function RootLayout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    "name": "Viyaa Estates",
    "description": "Luxury villas in Goa - Premium real estate development with architectural design and interior design services",
    "url": "https://www.viyaaestates.com",
    "logo": "https://www.viyaaestates.com/pictures/viyalogonew1.png",
    "image": "https://www.viyaaestates.com/pictures/viyalogonew1.png",
    "telephone": "+91-9810955103",
    "email": "info@viyaaestates.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "A106, 3rd Floor, Okhla Phase 2",
      "addressLocality": "New Delhi",
      "postalCode": "110020",
      "addressCountry": "IN"
    },
    "areaServed": {
      "@type": "State",
      "name": "Goa"
    },
    "priceRange": "Premium",
    "openingHours": "Mo-Sa 10:00-18:00",
    "sameAs": [
      "https://www.instagram.com/viyaa_estates/",
      "https://www.facebook.com/people/Viyaa-Estates/61587509340610/",
      "https://www.linkedin.com/company/viyaa-estates/",
      "https://www.youtube.com/@viyaa_estates"
    ]
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
