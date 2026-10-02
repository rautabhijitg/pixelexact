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
          },
          {
            // 4. Limits how much referrer URL data is sent to other origins
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            // 5. This site doesn't use any of these browser APIs, so deny them outright
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          }
        ],
      },
    ];
  },
};

export default nextConfig;
