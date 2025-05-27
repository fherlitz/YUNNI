/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static image optimization
  images: {
    domains: ['www.youtube.com', 'www.youtube-nocookie.com'],
  },
};

export default nextConfig;