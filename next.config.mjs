/** @type {import('next').NextConfig} */
const nextConfig = {
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
};

export default nextConfig;
