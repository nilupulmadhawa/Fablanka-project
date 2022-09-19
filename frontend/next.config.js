module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["assets.example.com"],
    loader: "akamai",
    path: "",
  },
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "https://api.fablanka.org/:path*",
      },
    ];
  },
};
