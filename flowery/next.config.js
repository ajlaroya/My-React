/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.shopify.com/**',
      },
    ],
    domains: ['cdn.shopify.com', 'images.unsplash.com', '64.media.tumblr.com'],
    formats: ['image/avif', 'image/webp'],
  },
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig
