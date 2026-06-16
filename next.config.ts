import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  trailingSlash: false,
  images: {
    qualities: [65, 70, 75],
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Strict-Transport-Security",
            value: "max-age=31536000; includeSubDomains; preload",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=(), fullscreen=(self)",
          },
          {
            key: "Cross-Origin-Opener-Policy",
            value: "same-origin-allow-popups",
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/practice/criminal-defense",
        destination: "/criminal-defense",
        permanent: true,
      },
      {
        source: "/practice/criminal-defense/:path*",
        destination: "/criminal-defense/:path*",
        permanent: true,
      },
      {
        source: "/practice/personal-injury",
        destination: "/personal-injury",
        permanent: true,
      },
      {
        source: "/practice/personal-injury/:path*",
        destination: "/personal-injury/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
