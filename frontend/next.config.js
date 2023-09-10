/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "unlock-yushanwebdev.vercel.app",
      },
    ],
  },
};

module.exports = nextConfig;
