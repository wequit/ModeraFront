import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['res.cloudinary.com', 'source.unsplash.com', 'modera25.s3.eu-north-1.amazonaws.com'],
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        pathname: '/api/images/**',
      },
    ],
  },
};

export default nextConfig;
