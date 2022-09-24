/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["assets.example.com"],
    loader: "akamai",
    path: "",
  },
  distDir: '.next',
};

module.exports = nextConfig