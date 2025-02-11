/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["framer-motion"],
  output: "export",
  basePath: '/LandingPage',
  assetPrefix: '/LandingPage/',
  images: { unoptimized: true },
};

export default nextConfig;