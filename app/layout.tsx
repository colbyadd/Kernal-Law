import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { CinematicNav } from "./components/CinematicNav";
import { ContactFab } from "./components/ContactFab";
import { Footer } from "./components/Footer";
import { JsonLd } from "./components/JsonLd";
import { BreadcrumbSchema } from "./components/BreadcrumbSchema";


const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

// Define the base URL for the site to ensure all links are absolute
const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://kernallaw.com';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Kernal & Associates | Oklahoma Criminal Defense & Personal Injury",
    template: "%s | Kernal & Associates"
  },
  description: "When your freedom is on the line. Todd Kernal is a 25+ year veteran criminal defense attorney in Oklahoma City. Serious defense for serious charges.",
  keywords: ["Criminal Defense Attorney Oklahoma City", "DUI Lawyer OKC", "Personal Injury Attorney Oklahoma", "Todd Kernal", "Kernal Law"],
  authors: [{ name: "Todd Kernal" }],
  creator: "Kernal & Associates",
  publisher: "Kernal & Associates",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Kernal & Associates | Criminal Defense & Personal Injury",
    description: "Uncompromising defense for criminal charges and personal injury cases in Oklahoma. 25+ years of experience.",
    url: baseUrl,
    siteName: "Kernal & Associates",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: '/images/todd-kernal-lhl.jpg', // Using the bio image as a fallback OG image
        width: 800,
        height: 600,
        alt: "Todd Kernal - Kernal & Associates",
      },
    ],
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${inter.variable} antialiased selection:bg-silver-100 selection:text-iron-950 bg-iron-950`}
      >
        <CinematicNav />
        {children}
        <Footer />
        <ContactFab />
        <JsonLd />
        <BreadcrumbSchema />
      </body>
    </html>
  );
}
