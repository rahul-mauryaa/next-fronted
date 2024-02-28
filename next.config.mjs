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
  	  protocol: 'https',
		hostname: 'strapi-backend-afks.onrender.com',
		port: '',
		pathname: '/**',
  	 },
	    {
  	  protocol: 'https',
		hostname: 'enduring-bloom-b572fb4b11.strapiapp.com',
		port: '',
		pathname: '/**',
  	 },
      {
        protocol: "http",
        hostname: "localhost",
      },
    ],
  },
};

export default nextConfig;
