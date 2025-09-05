/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // تنبيه للأخطاء المحتملة أثناء التطوير
  swcMinify: true,       // تقليل حجم الكود تلقائيًا
  images: {
    domains: [
      'images.unsplash.com', // لو هتجيب صور من Unsplash
      'avatars.githubusercontent.com' // لو هتجيب صور LinkedIn/GitHub
    ],
  },
  eslint: {
    ignoreDuringBuilds: true, // يسمح بالبناء حتى لو فيه تحذيرات eslint
  },
  experimental: {
    scrollRestoration: true, // دعم parallax و scroll effects
  },
}

module.exports = nextConfig;

