/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  distDir: "dist",
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "",
        pathname: "/sites/default/files/**",
      },
      {
        protocol: "https",
        hostname: process.env.DRUPAL_DOMAIN || "localhost",
        port: "",
        pathname: "/sites/default/files/**",
      },
    ],
    formats: ["image/avif", "image/webp"],
  },
  // Enable ISR
  experimental: {
    // Enable partial prerendering for better performance
  },
};

export default nextConfig;
