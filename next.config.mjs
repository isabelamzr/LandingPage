/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["framer-motion"],
  output: "export",
  basePath: '/LandingPage',
  images: { unoptimized: true },
};

export default nextConfig;