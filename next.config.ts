import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    domains: ['www.theaudiostore.in' , 'encrypted-tbn1.gstatic.com' ], // Allow this domain for images
  },
};

export default nextConfig;
