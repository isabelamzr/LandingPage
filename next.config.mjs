/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["framer-motion", "three"],
  output: 'standalone', 
  images: {
      unoptimized: false,
      remotePatterns: [{
          protocol: 'https',
          hostname: '**',
      }],
  },
 
  assetPrefix: process.env.NODE_ENV === 'production' ? '' : '',
  experimental: {
      optimizeCss: true, 
  },

  webpack: (config) => {
      config.module.rules.push({
          test: /\.(mp4|webm|ogg)$/,
          use: {
              loader: 'file-loader',
              options: {
                  publicPath: '/_next/static/media/',
                  outputPath: 'static/media/',
                  name: '[name].[hash].[ext]',
              },
          },
      });
      return config;
  }
};

export default nextConfig;