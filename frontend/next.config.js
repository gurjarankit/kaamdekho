/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

// module.exports = () => {
//   // const rewrites = () => {
//   //   return [
//   //     {
//   //       source: "/home/job",
//   //       destination: "https://3820-2402-8100-3861-fa1-f49d-78b1-8867-15cc.ngrok.io/api/dashboard/search/searchByKeyword/Commi",
//   //     },
//   //   ];
//   // };
//   const assetPrefix = "https://3820-2402-8100-3861-fa1-f49d-78b1-8867-15cc.ngrok.io"
//   return {
//     assetPrefix,
//   };
// };

module.exports = nextConfig



// module.exports = {
//   httpAgentOptions: {
//     keepAlive: false,
//   }
// }