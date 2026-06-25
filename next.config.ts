import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
      },
      {
        protocol: 'https',
        hostname: 'lirp.cdn-website.com',
      },
      {
        protocol: 'https',
        hostname: 'irp.cdn-website.com',
      },
    ],
  },
  // Preserve trailing slashes to match Duda URL structure during transition
  trailingSlash: false,
}

export default nextConfig
