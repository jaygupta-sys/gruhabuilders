/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false, // GSAP ScrollTrigger and Three.js canvas are cleaner without double-mount effects
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  transpilePackages: ['three'],
};

export default nextConfig;
