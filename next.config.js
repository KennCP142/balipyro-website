/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Serve AVIF first (best compression), fallback to WebP, then original
    formats: ['image/avif', 'image/webp'],

    // Device widths used to generate srcset for full-width images
    deviceSizes: [375, 640, 750, 828, 1080, 1200, 1920],

    // Fixed-size image breakpoints (for images with explicit width props)
    imageSizes: [64, 96, 128, 200, 256, 384],

    // Cache optimized images on Vercel CDN for 1 year (in seconds)
    minimumCacheTTL: 31536000,
  },
};

module.exports = nextConfig;
