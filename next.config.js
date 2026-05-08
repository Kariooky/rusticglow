/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  allowedDevOrigins: ['192.168.100.9'],
}

module.exports = nextConfig