import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SmoothScrollProvider from "@/components/providers/SmoothScrollProvider";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import Navbar from "@/components/ui/Navbar";
import FooterSection from "@/components/ui/FooterSection";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.sabilabs.co.ke"),
  title: "SABILABS | Strategy-Led Technology Consulting | East Africa",
  description:
    "SABILABS is a strategy-led technology and cybersecurity consulting firm in Nairobi, Kenya. We solve business problems through custom software engineering, business automation, cloud solutions, and cybersecurity — built on a structured Business Analysis Framework.",
  keywords: [
    "software consulting Kenya",
    "ERP Kenya",
    "cybersecurity Kenya",
    "business automation East Africa",
    "custom software development Nairobi",
    "distribution management system",
    "school ERP Kenya",
    "hospital management system",
    "POS system Kenya",
    "digital transformation East Africa",
    "cloud migration Kenya",
    "penetration testing Kenya",
    "Kenya Data Protection Act compliance",
    "SACCO security audit",
    "business process optimization",
    "Microsoft 365 Kenya",
    "Xero integration Kenya",
    "SABILABS",
  ],
  authors: [{ name: "SABILABS" }],
  creator: "SABILABS",
  publisher: "SABILABS",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_KE",
    siteName: "SABILABS",
    title: "SABILABS | Strategy-Led Technology Consulting | East Africa",
    description:
      "We don't build software. We solve business problems. SABILABS is a strategy-led technology consulting firm delivering custom software, cybersecurity, and business automation across East Africa.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "SABILABS — Strategy-Led Technology Consulting",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SABILABS | Strategy-Led Technology Consulting",
    description:
      "We don't build software. We solve business problems. Custom software, cybersecurity, and business automation for organizations across East Africa.",
    images: ["/og-image.png"],
    creator: "@sabilabs",
  },
  alternates: {
    canonical: "https://sabilabs.co.ke",
  },
  category: "Technology",
  icons: {
    icon: [
      { url: "/favicon-16.svg", sizes: "16x16", type: "image/svg+xml" },
      { url: "/favicon-32.svg", sizes: "32x32", type: "image/svg+xml" },
      { url: "/favicon-48.svg", sizes: "48x48", type: "image/svg+xml" },
    ],
    apple: [{ url: "/apple-touch-icon.svg", sizes: "180x180", type: "image/svg+xml" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // JSON-LD Structured Data
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "SABILABS",
    url: "https://sabilabs.co.ke",
    logo: "https://sabilabs.co.ke/logo.png",
    description:
      "Strategy-led technology and cybersecurity consulting firm in Nairobi, Kenya. Custom software engineering, business automation, cloud solutions, and cybersecurity.",
    foundingLocation: {
      "@type": "Place",
      name: "Nairobi, Kenya",
    },
    areaServed: [
      { "@type": "Country", name: "Kenya" },
      { "@type": "Continent", name: "Africa" },
    ],
    knowsAbout: [
      "Software Engineering",
      "Cybersecurity",
      "Business Automation",
      "Cloud Solutions",
      "ERP Implementation",
      "Digital Transformation",
      "Kenya Data Protection Act Compliance",
    ],
    numberOfEmployees: {
      "@type": "QuantitativeValue",
      value: 8,
    },
    sameAs: [],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      email: "contact@sabilabs.co.ke",
      availableLanguage: ["English", "Swahili"],
    },
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "SABILABS",
    description:
      "Strategy-led technology consulting firm specializing in custom software engineering, cybersecurity, business automation, and cloud solutions for organizations in East Africa.",
    url: "https://sabilabs.co.ke",
    telephone: "+254700000000",
    email: "contact@sabilabs.co.ke",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Nairobi",
      addressCountry: "KE",
    },
    priceRange: "$$",
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Technology Consulting Services",
      itemListElement: [
        {
          "@type": "OfferCatalog",
          name: "Software Engineering",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Custom ERP Development",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Distribution Management Systems",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "School Management ERP",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Hospital Management Systems",
              },
            },
          ],
        },
        {
          "@type": "OfferCatalog",
          name: "Cybersecurity",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Penetration Testing",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Security Audits",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Kenya DPA Compliance Readiness",
              },
            },
          ],
        },
      ],
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What industries does SABILABS serve?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "SABILABS serves SMEs, NGOs, schools, hospitals, logistics companies, retail businesses, distribution companies, and startups across East Africa.",
        },
      },
      {
        "@type": "Question",
        name: "What is SABILABS' Business Analysis Framework?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Every SABILABS engagement follows a structured 12-stage methodology: Business Discovery, Stakeholder Workshops, Current Process Mapping, Pain Point Identification, Requirements Engineering, Risk Assessment, Solution Architecture, Validation, Development, Testing, Deployment, and Continuous Improvement. This approach reduces project failure, unnecessary costs, scope creep, and rework.",
        },
      },
      {
        "@type": "Question",
        name: "Does SABILABS help with Kenya Data Protection Act compliance?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. SABILABS provides Kenya Data Protection Act (DPA) readiness assessments, Data Protection Impact Assessments (DPIA), ODPC registration support, and builds systems with privacy-by-design principles including encryption, role-based access control, and audit logging.",
        },
      },
      {
        "@type": "Question",
        name: "Where is SABILABS based?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "SABILABS is based in Nairobi, Kenya, serving clients across East Africa with plans to expand pan-African operations.",
        },
      },
      {
        "@type": "Question",
        name: "Does SABILABS offer cybersecurity services?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. SABILABS offers penetration testing, vulnerability assessments, security audits, risk assessments, managed security, managed IT, security awareness training, and compliance readiness services including SACCO regulatory compliance.",
        },
      },
    ],
  };

  return (
    <html lang="en" data-theme="blue" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("sabilabs-theme");if(t==="blue"||t==="gold"||t==="green")document.documentElement.setAttribute("data-theme",t)}catch(e){}})()`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema),
          }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
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
