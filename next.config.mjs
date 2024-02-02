/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["s3-eu-west-1.amazonaws.com"],
  },
  redirects: async () => [
    {
      source: "/",
      destination: "/productList",
      permanent: true,
    },
  ],
};

export default nextConfig;
