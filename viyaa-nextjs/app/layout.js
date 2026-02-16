import './globals.css'

export const metadata = {
  title: 'Viyaa Estates - Premium Villas & Homes in Goa',
  description: 'Discover Viyaa Estates - thoughtfully designed luxury villas in Goa. Experience harmonious architecture and refined living at Viyaa Shantam.',
  keywords: 'Viyaa Estates, Goa real estate, luxury villas Goa, premium homes Goa, Viyaa Shantam, AJDA, architectural design, interior design, PMC services',
  authors: [{ name: 'Viyaa Estates' }],
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://viyaaestates.com/',
    title: 'Viyaa Estates - Premium Villas & Homes in Goa',
    description: 'Discover Viyaa Estates - thoughtfully designed luxury villas in Goa. Experience harmonious architecture and refined living at Viyaa Shantam.',
    siteName: 'Viyaa Estates',
    images: [{
      url: 'https://viyaaestates.com/pictures/viyalogonew1.png',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Viyaa Estates - Premium Villas & Homes in Goa',
    description: 'Discover Viyaa Estates - thoughtfully designed luxury villas in Goa. Experience harmonious architecture and refined living at Viyaa Shantam.',
    images: ['https://viyaaestates.com/pictures/viyalogonew1.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/pictures/viyalogotab.png',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
