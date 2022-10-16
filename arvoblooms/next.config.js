/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['cdn.shopify.com', 'images.unsplash.com', '64.media.tumblr.com'],
    formats: ['image/avif', 'image/webp']
  },
}

module.exports = nextConfig
