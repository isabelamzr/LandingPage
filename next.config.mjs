/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["framer-motion"],
  output: "export", // Para permitir exportação estática
  basePath: process.env.NODE_ENV === "production" ? "/LandingPage" : "",
  assetPrefix: process.env.NODE_ENV === "production" ? "/LandingPage/" : "",
  images: { unoptimized: true }, // ✅ Corrige o erro de otimização de imagens
};

export default nextConfig;
