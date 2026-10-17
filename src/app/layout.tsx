import type { Metadata } from 'next';
import './globals.css';
import SmoothScrollProvider from '@/components/providers/SmoothScrollProvider';
import { ThemeProvider } from '@/components/providers/ThemeProvider';
import Navbar from '@/components/ui/Navbar';
import FooterSection from '@/components/ui/FooterSection';
import { DEFAULT_DESCRIPTION, OG_IMAGE, safeJsonLd, SITE_NAME, SITE_URL } from '@/lib/seo';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.sabilabs.co.ke'),
  title: {
    default: 'Sabi Labs | Business Technology & Intelligence',
    template: '%s | Sabi Labs',
  },
  description: DEFAULT_DESCRIPTION,
  applicationName: SITE_NAME,
  authors: [{ name: 'Sabi Labs Limited', url: SITE_URL }],
  creator: 'Sabi Labs Limited',
  publisher: 'Sabi Labs Limited',
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
  openGraph: {
    type: 'website',
    locale: 'en_KE',
    siteName: SITE_NAME,
    url: SITE_URL,
    title: 'Sabi Labs | Business Technology & Intelligence',
    description: DEFAULT_DESCRIPTION,
    images: [OG_IMAGE],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sabi Labs | Business Technology & Intelligence',
    description: DEFAULT_DESCRIPTION,
    images: [OG_IMAGE.url],
  },
  alternates: { canonical: '/' },
  category: 'Business Technology',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any', type: 'image/x-icon' },
      { url: '/favicon-16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-48.png', sizes: '48x48', type: 'image/png' },
      { url: '/icon.png', sizes: '512x512', type: 'image/png' },
    ],
    shortcut: [{ url: '/favicon.ico', type: 'image/x-icon' }],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
  },
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Sabi Labs Limited',
  alternateName: 'Sabi Labs',
  url: SITE_URL,
  logo: `${SITE_URL}/images/logo.png`,
  description: 'Business Technology & Intelligence company',
  email: 'info@sabilabs.co.ke',
  telephone: ['+254757041695', '+254792322034'],
  address: {
    '@type': 'PostalAddress',
    postOfficeBoxNumber: '79170',
    postalCode: '00400',
    addressLocality: 'Nairobi',
    addressCountry: 'KE',
  },
  areaServed: ['Kenya', 'East Africa'],
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: SITE_NAME,
  url: SITE_URL,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-KE" data-theme="white" data-scroll-behavior="smooth" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("sabilabs-theme");if(t!=="white"&&t!=="blue"&&t!=="green"){t="white";localStorage.setItem("sabilabs-theme",t)}document.documentElement.setAttribute("data-theme",t)}catch(e){document.documentElement.setAttribute("data-theme","white")}})()`,
          }}
        />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(organizationSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(websiteSchema) }} />
      </head>
      <body className="font-sans antialiased">
        <ThemeProvider>
          <SmoothScrollProvider>
            <Navbar />
            {children}
            <FooterSection />
          </SmoothScrollProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
