/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['cdn.shopify.com'],
  },
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig
