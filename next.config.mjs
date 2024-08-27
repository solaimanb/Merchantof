/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'nextui.org',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'promotions.newegg.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'c1.neweggimages.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
