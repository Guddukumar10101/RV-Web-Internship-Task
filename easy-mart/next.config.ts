/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // ✅ Required for static export
  images: {
    unoptimized: true, // ✅ Required because static export doesn't support optimized images
    domains: [
      "res.cloudinary.com",
      "m.media-amazon.com",
      "images.unsplash.com",
      "cdn.example.com"
    ],
  },
};

module.exports = nextConfig;
