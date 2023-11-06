/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    contentDispositionType: 'attachment',
    contentSecurityPolicy: 'default-src \'self\'; script-src \'none\'; sandbox; connect-src \'vitals.vercel-insights.com\'',
  },
};

export default nextConfig;