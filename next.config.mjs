/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*",
        port: "",
        pathname: "**",
      },
    ],
  },
  experimental: {
    appDir: true,
  },
  env: {
    CUSTOM_ENV_VAR: "value",
  },
};

export default nextConfig;
