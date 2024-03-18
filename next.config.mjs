/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "localhost",
        protocol: "http",
        port: "1337",
      },
    ],
  },
};

export default nextConfig;
