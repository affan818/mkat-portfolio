<<<<<<< HEAD
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
=======
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/portfolio",
  assetPrefix: "/portfolio/",
  images: {
    unoptimized: true,
  },
  reactStrictMode: false,
>>>>>>> e698cd326e9f868d3d208a5b9da5faf278f2c9f7
};

module.exports = nextConfig;

// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   reactStrictMode: false,
// };

// export default nextConfig;
