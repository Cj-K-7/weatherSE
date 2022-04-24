/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['openweathermap.org'],
  },
}

module.exports = nextConfig

const withImages = require('next-images')
module.exports = withImages()

module.exports = withImages({
images: {
    loader: "imgix",
    path: "",
},
exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      '/': { page: '/' },
    }
  },
})