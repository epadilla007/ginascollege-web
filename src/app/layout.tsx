import type { Metadata } from 'next'
import Script from 'next/script'
import '../styles/globals.css'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { SmoothScroll } from '@/components/providers/SmoothScroll'

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
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: "Gina's College of Advanced Aesthetics",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Gina's College — Train Where the Industry Recruits",
    description: '45 years. CIDESCO-accredited. 3 campuses across Ontario.',
    images: ['/og-image.jpg'],
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
          href="/fonts/Nohemi-Variable.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/Ranade-Variable.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.webmanifest" />
      </head>
      <body>
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
          <main>{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  )
}
