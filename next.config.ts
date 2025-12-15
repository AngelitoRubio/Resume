import type { NextConfig } from "next";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // Required for static export if you're using <Image />
  },
  basePath: '/your-repo-name', // 👈 important if not deploying to username.github.io
  assetPrefix: '/your-repo-name/',
};

module.exports = nextConfig;
