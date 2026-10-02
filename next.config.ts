import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // Disabled: the production build was timing out past 15 minutes on
  // Hostinger's build runner at the "Creating an optimized production
  // build..." step (same codebase builds fine locally), starting with the
  // commit that added the cookie consent system and hero carousel. The
  // React Compiler's Babel-based analysis pass is the leading suspect for
  // that build-time blowup on a resource-constrained build container.
  reactCompiler: false,
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
            // 1. Prevents browser-side HTTPS downgrades (HSTS). Deliberately
            // scoped to this domain only — no includeSubDomains, since
            // subdomains aren't guaranteed to be served over HTTPS. (Note:
            // includeSubDomains is also a hard requirement for HSTS preload
            // submission, so preload is dropped too — it isn't valid without it.)
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000',
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
