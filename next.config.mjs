/** @type {import('next').NextConfig} */

// Minimal security headers (safe defaults)
const securityHeaders = [
  { key: 'X-Frame-Options', value: 'DENY' },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'Referrer-Policy', value: 'origin-when-cross-origin' },
  { key: 'Permissions-Policy', value: "camera=(), microphone=(), geolocation=()" },
];

const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,

  // Do NOT set `output: 'export'` (we want SSR on Netlify's Next.js Runtime)
  // and do NOT force trailing slashes to avoid extra redirects.
  // trailingSlash: false, // (default)

  images: {
    // Add remotePatterns later if you load external images.
    remotePatterns: [],
  },

  // Let the build succeed even if ESLint finds problems (handy on CI)
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
  ignoreBuildErrors: true,
},

  // If you ever need hard redirects, add them here.
  async redirects() {
    return [
      // example:
      // { source: '/home', destination: '/', permanent: true },
    ];
  },

  async headers() {
    return [
      {
        source: '/:path*',
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
