const isProd = process.env.NODE_ENV === "production";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,

  ...(isProd && {
    output: "export",
    basePath: "/portfolio",
    trailingSlash: true,
  }),

  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;

// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   reactStrictMode: false,
// };

// export default nextConfig;
