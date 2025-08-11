

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["res.cloudinary.com",
      "m.media-amazon.com", // Amazon product images
      "images.unsplash.com", // Agar Unsplash use karo future me
      "cdn.example.com" // Agar apne CDN ka use ho future me
    ],
  },
};

module.exports = nextConfig;
