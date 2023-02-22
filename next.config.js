/** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
// };

// module.exports = nextConfig;

// const withTM = require("next-transpile-modules")([
//   "@stripe/firestore-stripe-payments",
// ]); // pass the modules you would like to see transpiled

// module.exports = withTM({
//   reactStrictMode: true,
//   images: {
//     domains: ["rb.gy", "image.tmdb.org"],
//   },
// });
module.exports = {
  // nextConfig,
  transpilePackages: ["@stripe/firestore-stripe-payments"],
};
