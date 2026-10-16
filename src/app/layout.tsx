import type { Metadata } from "next";
import "./globals.css";
import SmoothScrollProvider from "@/components/providers/SmoothScrollProvider";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import Navbar from "@/components/ui/Navbar";
import FooterSection from "@/components/ui/FooterSection";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.sabilabs.co.ke"),
  title: "SABILABS | Business Technology & Intelligence",
  description:
    "Sabi Labs Limited is a business technology and intelligence company that designs secure, intelligent digital systems around how organizations actually operate.",
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
    "data engineering Kenya",
    "business intelligence East Africa",
    "systems integration Kenya",
    "geospatial technology Kenya",
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
    title: "SABILABS | Business Technology & Intelligence",
    description:
      "We transform business operations into intelligent digital systems designed around how organizations actually work.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "SABILABS — Business Technology & Intelligence",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SABILABS | Business Technology & Intelligence",
    description:
      "Business analysis, software engineering, data intelligence, and technology integration designed around real operations.",
    images: ["/og-image.png"],
    creator: "@sabilabs",
  },
  alternates: {
    canonical: "https://sabilabs.co.ke",
  },
  category: "Technology",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any", type: "image/x-icon" },
      { url: "/favicon-16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-48.png", sizes: "48x48", type: "image/png" },
      { url: "/icon.png", sizes: "512x512", type: "image/png" },
    ],
    shortcut: [{ url: "/favicon.ico", type: "image/x-icon" }],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
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
    logo: "https://sabilabs.co.ke/images/logo.png",
    description:
      "Business technology and intelligence company in Nairobi, Kenya, designing secure, intelligent digital systems around real operational, financial, data, security, and organizational requirements.",
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
      "Data Engineering",
      "Business Intelligence",
      "Systems Integration",
      "Geospatial Technology",
      "Business Analysis",
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
      email: "info@sabilabs.co.ke",
      telephone: ["+254757041695", "+254792322034"],
      availableLanguage: ["English", "Swahili"],
    },
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "SABILABS",
    description:
      "Business technology and intelligence company designing secure digital systems around how organizations operate.",
    url: "https://sabilabs.co.ke",
    telephone: ["+254757041695", "+254792322034"],
    email: "info@sabilabs.co.ke",
    address: {
      "@type": "PostalAddress",
      postOfficeBoxNumber: "79170",
      postalCode: "00400",
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
      name: "Business Technology and Intelligence Capabilities",
      itemListElement: [
        "Business and Technology Advisory",
        "Custom Software and Enterprise Systems",
        "Business Process Automation and AI",
        "Data Engineering, Analytics and Intelligence",
        "Systems Integration and Cloud Solutions",
        "Geospatial Technology and Spatial Intelligence",
      ].map((name) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name },
      })),
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
        name: "What is SABILABS' delivery approach?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Every SABILABS engagement follows six connected steps: Discover, Analyze, Design, Engineer, Implement, and Improve. The approach begins with the organization and carries business, security, data, and technical requirements through implementation and continuous improvement.",
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
    <html lang="en" data-theme="white" data-scroll-behavior="smooth" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("sabilabs-theme");if(t!=="white"&&t!=="blue"&&t!=="green"){t="white";localStorage.setItem("sabilabs-theme",t)}document.documentElement.setAttribute("data-theme",t)}catch(e){document.documentElement.setAttribute("data-theme","white")}})()`,
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
