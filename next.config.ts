import type { NextConfig } from "next";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // Required for static export if you're using <Image />
  },
  basePath: '/Resume',
  assetPrefix: '/Resume/',
};

module.exports = nextConfig;
