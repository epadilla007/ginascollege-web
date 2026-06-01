import type { Metadata } from 'next'
import Script from 'next/script'
import '../styles/globals.css'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { SmoothScroll } from '@/components/providers/SmoothScroll'

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': ['EducationalOrganization', 'LocalBusiness'],
  name: "Gina's College of Advanced Aesthetics",
  url: 'https://ginascollege.com',
  logo: 'https://ginascollege.com/images/logo.png',
  foundingDate: '1979',
  description:
    "Ontario's only CIDESCO-accredited career college offering diploma and certificate programs in medical aesthetics, hairstyling, and aesthetics. OSAP-eligible. 3 campuses.",
  telephone: '1-888-886-2998',
  email: 'admissions@ginascollege.com',
  sameAs: [
    'https://www.facebook.com/ginascollege',
    'https://www.instagram.com/ginascollege',
  ],
  hasCredential: {
    '@type': 'EducationalOccupationalCredential',
    name: 'CIDESCO International Diploma',
    credentialCategory: 'International Accreditation',
  },
  location: [
    {
      '@type': 'Place',
      name: "Gina's College — Mississauga",
      address: {
        '@type': 'PostalAddress',
        streetAddress: '7-3045 Southcreek Rd.',
        addressLocality: 'Mississauga',
        addressRegion: 'ON',
        postalCode: 'L4X 2E9',
        addressCountry: 'CA',
      },
      telephone: '(905) 602-8891',
    },
    {
      '@type': 'Place',
      name: "Gina's College — Waterloo",
      address: {
        '@type': 'PostalAddress',
        streetAddress: '385 Weber St. N.',
        addressLocality: 'Waterloo',
        addressRegion: 'ON',
        postalCode: 'N2J 3J2',
        addressCountry: 'CA',
      },
      telephone: '(519) 886-2998',
    },
    {
      '@type': 'Place',
      name: "Gina's College — Ottawa",
      address: {
        '@type': 'PostalAddress',
        streetAddress: '215 Dalhousie St.',
        addressLocality: 'Ottawa',
        addressRegion: 'ON',
        postalCode: 'K1N 7C9',
        addressCountry: 'CA',
      },
      telephone: '(613) 789-7875',
    },
  ],
}

export const metadata: Metadata = {
  title: {
    default: "Gina's College of Advanced Aesthetics — Ontario's Premier Aesthetics School",
    template: "%s | Gina's College",
  },
  description:
    "Ontario's most prestigious aesthetics school for 45 years. CIDESCO-accredited, OSAP-eligible diploma and certificate programs in Mississauga, Waterloo, and Ottawa.",
  keywords: [
    'aesthetics school ontario',
    'aesthetics program mississauga',
    'medical aesthetics school',
    'CIDESCO accreditation canada',
    'aesthetics diploma program',
    "gina's college",
    'aesthetics career ontario',
    'beauty school OSAP',
  ],
  metadataBase: new URL('https://ginascollege.com'),
  openGraph: {
    type: 'website',
    locale: 'en_CA',
    url: 'https://ginascollege.com',
    siteName: "Gina's College of Advanced Aesthetics",
    title: "Gina's College — Train Where the Industry Recruits",
    description:
      '45 years. CIDESCO-accredited. 3 campuses across Ontario. Graduate ready. Get hired first.',
    images: [
      {
        url: 'https://lirp.cdn-website.com/ae4ce602/dms3rep/multi/opt/banner1-590eafd6-1920w.png',
        width: 1920,
        height: 1080,
        alt: "Gina's College of Advanced Aesthetics — Ontario aesthetics school",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Gina's College — Train Where the Industry Recruits",
    description: '45 years. CIDESCO-accredited. 3 campuses across Ontario.',
    images: ['https://lirp.cdn-website.com/ae4ce602/dms3rep/multi/opt/banner1-590eafd6-1920w.png'],
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
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-CA" className="lenis">
      <head>
        {/* Preload critical fonts */}
        <link
          rel="preload"
          href="/fonts/Nohemi-SemiBold.woff"
          as="font"
          type="font/woff"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/Ranade-Variable.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>
      <body>
        {/* Skip to main content — accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-[#01426A] focus:text-white focus:rounded-[4px] focus:text-sm focus:font-semibold"
        >
          Skip to main content
        </a>

        {/* Organization Schema */}
        <Script
          id="org-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-FNP4PLP1JZ"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-FNP4PLP1JZ');
          `}
        </Script>

        <SmoothScroll>
          <Navbar />
          <main id="main-content">{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  )
}
