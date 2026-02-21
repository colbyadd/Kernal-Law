import type { Metadata } from "next";
import localFont from "next/font/local";
import Script from "next/script";
import "./globals.css";
import { CinematicNav } from "./components/CinematicNav";
import { ContactFab } from "./components/ContactFab";
import { Footer } from "./components/Footer";
import { JsonLd } from "./components/JsonLd";
import { BaseJsonLd } from "./components/BaseJsonLd";
import { AnalyticsEvents } from "./components/AnalyticsEvents";
import { LeadAttributionClient } from "./components/LeadAttributionClient";
import { BASE_URL } from "@/lib/constants";

const headingFont = localFont({
  src: "./fonts/geist-latin.woff2",
  variable: "--font-serif-local",
  weight: "100 900",
  display: "swap",
});

const bodyFont = localFont({
  src: "./fonts/noto-sans-v27-latin-regular.ttf",
  variable: "--font-sans-local",
  weight: "400",
  display: "swap",
});

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || BASE_URL;
const gaMeasurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
const googleSiteVerification = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION;
const bingSiteVerification = process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION;

const verification: Metadata["verification"] = {};
if (googleSiteVerification) {
  verification.google = googleSiteVerification;
}
if (bingSiteVerification) {
  verification.other = { "msvalidate.01": bingSiteVerification };
}

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
  verification,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
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
        url: '/images/todd-kernal-lhl.jpg',
        width: 300,
        height: 300,
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

export const viewport = {
  themeColor: '#0a0a0a',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${headingFont.variable} ${bodyFont.variable} antialiased selection:bg-silver-100 selection:text-iron-950 bg-iron-950`}
      >
        <CinematicNav />
        {children}
        <Footer />
        <ContactFab />
        <BaseJsonLd />
        <JsonLd />
        {gaMeasurementId ? (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaMeasurementId}`}
              strategy="afterInteractive"
            />
            <Script id="ga4-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                window.gtag = gtag;
                gtag('js', new Date());
                gtag('config', '${gaMeasurementId}', {
                  send_page_view: false,
                  anonymize_ip: true,
                  allow_google_signals: false
                });
              `}
            </Script>
          </>
        ) : null}
        <AnalyticsEvents />
        <LeadAttributionClient />
      </body>
    </html>
  );
}
