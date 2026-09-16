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
};

export default nextConfig;
