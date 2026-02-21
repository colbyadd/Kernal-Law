import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  trailingSlash: false,
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
