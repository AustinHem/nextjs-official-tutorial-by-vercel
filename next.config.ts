import type { NextConfig } from 'next';

// Avoid strict typing here because this Next.js version's NextConfig type
// may not include the `eslint` build flag in its definition. Use a
// plain const so the extra property is allowed.
const nextConfig = {
  /* config options here */
  typescript: {
    // !WARNING!
    // Dangerously allow  production builds to successfully complete even if 
    // your project has type errors.
    // !WARNING!
    ignoreBuildErrors: true,
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  }
}

export default nextConfig;
