import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/ui/SmoothScroll";
import CustomCursor from "@/components/ui/CustomCursor";
import Preloader from "@/components/ui/Preloader";
import MobileBottomBar from "@/components/ui/MobileBottomBar";
import { siteContent } from "@/data/content";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://gruhabuilders.in"),
  title: "GRUHA BUILDERS | Building Your Trust | Luxury Construction & Real Estate",
  description:
    "Award-winning turnkey luxury construction, architectural design, and landmark residences across South India. Backed by a 10-Year Structural Warranty and RERA compliance.",
  keywords: [
    "Gruha Builders",
    "Luxury Villa Construction Bangalore",
    "Turnkey Construction India",
    "Bespoke Architectural Builders",
    "Commercial Real Estate Builders",
    "Building Your Trust",
  ],
  authors: [{ name: "GRUHA BUILDERS" }],
  openGraph: {
    title: "GRUHA BUILDERS — Building Your Trust",
    description:
      "Crafting generational residences, iconic luxury villas, and landmark commercial spaces with unwavering architectural discipline.",
    url: "https://gruhabuilders.in",
    siteName: "GRUHA BUILDERS",
    images: [
      {
        url: "/assets/hero-poster.jpg",
        width: 1280,
        height: 720,
        alt: "GRUHA BUILDERS Luxury Architecture",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GRUHA BUILDERS — Building Your Trust",
    description: "Luxury Turnkey Construction and Bespoke Architecture in South India.",
    images: ["/assets/hero-poster.jpg"],
  },
  icons: {
    icon: "/assets/logo.png",
    apple: "/assets/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "GeneralContractor",
    name: siteContent.brand.name,
    legalName: "Gruha Builders Private Limited",
    alternateName: "Gruha Constructions",
    description: siteContent.brand.subTagline,
    url: "https://gruhabuilders.in",
    logo: "https://gruhabuilders.in/assets/logo.png",
    image: "https://gruhabuilders.in/assets/hero-poster.jpg",
    telephone: siteContent.brand.contact.phone,
    email: siteContent.brand.contact.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteContent.brand.address.street,
      addressLocality: siteContent.brand.address.city,
      addressRegion: siteContent.brand.address.state,
      postalCode: siteContent.brand.address.pincode,
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "12.9716",
      longitude: "77.6405",
    },
    priceRange: "₹₹₹₹",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "09:00",
        closes: "19:30",
      },
    ],
  };

  return (
    <html lang="en" className={`${cormorant.variable} ${manrope.variable}`}>
      <head>
        <meta name="theme-color" content="#0A0A0A" />
        <link rel="preload" href="/assets/hero-poster.jpg" as="image" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-background text-foreground antialiased selection:bg-gold/30 selection:text-gold-light">
        <Preloader />
        <CustomCursor />
        <SmoothScroll>
          <div className="relative flex min-h-screen flex-col overflow-x-hidden">
            {children}
          </div>
        </SmoothScroll>
        <MobileBottomBar />
      </body>
    </html>
  );
}
