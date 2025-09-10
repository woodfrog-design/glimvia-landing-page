// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   swcMinify: true,
//   experimental: {
//     optimizePackageImports: ['framer-motion', 'lucide-react'],
//   },
//   images: {
//     formats: ['image/webp', 'image/avif'],
//   },
// }

// export default nextConfig

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Remove static export for server-side features
  // output: 'export', // Commented out - use SSR for better performance
  trailingSlash: true,
  images: {
    // unoptimized: true, // Not needed without static export
    domains: [], // Add image domains if needed
  },
  
  // Environment-based configuration
  env: {
    CUSTOM_KEY: process.env.CUSTOM_KEY,
  },
  
  // Performance optimizations
  compress: true,
  poweredByHeader: false,
  
  // Build optimizations
  experimental: {
    optimizeCss: true,
  },
  
  // Asset optimization
  assetPrefix: process.env.NODE_ENV === 'production' ? '' : '',
  
  // Redirect configuration
  async redirects() {
    return [
      // Add any redirects here if needed
    ];
  },
  
  // Headers for security
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;