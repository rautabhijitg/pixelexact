import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  async redirects() {
    return [
      { source: "/blog", destination: "/insights", permanent: true },
      { source: "/case-studies", destination: "/work", permanent: true },
      { source: "/services/frontend-development", destination: "/services/frontend-application-development", permanent: true },
    ];
  },
  async headers() {
    return [
      {
        // Apply these security headers to every page and route
        source: '/:path*',
        headers: [
          {
            // 1. Prevents browser-side HTTPS downgrades (HSTS)
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
          {
            // 2. Prevents clickjacking by blocking other sites from framing your content
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            // 3. Prevents browsers from guessing/sniffing the MIME type of a file
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          }
        ],
      },
    ];
  },
};

export default nextConfig;
