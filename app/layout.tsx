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
    default: "Kernal & Associates | Oklahoma Criminal Defense Lawyer",
    template: "%s | Kernal & Associates"
  },
  description:
    "Kernal & Associates provides Oklahoma criminal defense for DUI, drug charges, warrants, and other serious cases, with selected personal injury representation.",
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
    title: "Kernal & Associates | Oklahoma Criminal Defense",
    description:
      "Oklahoma criminal defense for DUI, felony, drug, warrant, and probation matters, with selected serious-injury representation.",
    url: baseUrl,
    siteName: "Kernal & Associates",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kernal & Associates | Oklahoma Criminal Defense',
    description:
      'Oklahoma criminal defense for DUI, felony, drug, warrant, and probation matters, with selected serious-injury representation.',
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
      <head>
        <meta property="og:image" content={`${baseUrl}/social-card`} />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          property="og:image:alt"
          content="Kernal & Associates — Oklahoma criminal defense and selected personal injury matters"
        />
        <meta name="twitter:image" content={`${baseUrl}/social-card`} />
        <meta
          name="twitter:image:alt"
          content="Kernal & Associates — Oklahoma criminal defense and selected personal injury matters"
        />
      </head>
      <body
        className={`${headingFont.variable} ${bodyFont.variable} antialiased selection:bg-silver-100 selection:text-iron-950 bg-iron-950`}
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:bg-white focus:text-iron-950 focus:px-4 focus:py-3 focus:font-semibold focus:rounded-sm"
        >
          Skip to main content
        </a>
        <CinematicNav />
        <ContactFab />
        <div id="main-content" tabIndex={-1}>{children}</div>
        <Footer />
        <BaseJsonLd />
        <JsonLd />
        {gaMeasurementId ? (
          <>
            <Script id="ga4-queue" strategy="beforeInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                window.gtag = window.gtag || function(){dataLayer.push(arguments);};
              `}
            </Script>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaMeasurementId}`}
              strategy="afterInteractive"
            />
            <Script id="ga4-init" strategy="afterInteractive">
              {`
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
        {gaMeasurementId ? <AnalyticsEvents /> : null}
        <LeadAttributionClient />
      </body>
    </html>
  );
}
