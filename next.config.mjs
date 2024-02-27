/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "dev-strapi.xinthesys.com", // if your website has no www, drop it
      },
      {
  	    protocol: "https",
        hostname: "https://strapi-backend-afks.onrender.com", // if your website has no www, drop it
  		  port: '443',
  	    pathname: "/upload/**",
  	 },
      {
        protocol: "http",
        hostname: "localhost",
      },
    ],
  },
};

export default nextConfig;
