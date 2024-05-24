/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'drive.google.com',
        },
      ],
    },
    reactStrictMode: true,
    webpack: (config) => {
      config.externals = [...config.externals, "canvas", "jsdom"];
      return config;
    },
  }
export default nextConfig;
