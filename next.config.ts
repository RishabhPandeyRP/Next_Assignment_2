import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    domains: ['www.theaudiostore.in' , 'https://encrypted-tbn1.gstatic.com' ], // Allow this domain for images
  },
};

export default nextConfig;
