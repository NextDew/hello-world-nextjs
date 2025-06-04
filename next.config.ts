import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  experimental: {
    viewTransition: true,
  },
  images: {
    domains: ['raw.githubusercontent.com'],
  },
}

export default nextConfig
