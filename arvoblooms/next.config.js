/** @type {import('next').NextConfig} */

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

const nextConfig = withBundleAnalyzer({
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['cdn.shopify.com', 'images.unsplash.com', '64.media.tumblr.com'],
    formats: ['image/avif', 'image/webp']
  },
})

module.exports = nextConfig
