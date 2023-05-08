/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/home',
        permanent: true,
      },
    ]
  },
  basePath: '/Portfoliov0',
  assetPrefix: '/Portfoliov0/',
}

module.exports = nextConfig
