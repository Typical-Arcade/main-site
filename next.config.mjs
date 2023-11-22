import WithPWA from 'next-pwa'; 

const nextConfig = WithPWA({
  scope: '/',
  dest: 'public',
  disable: process.env.NODE_ENV === 'development',
  register: true,
})({
  images: {
    contentDispositionType: 'attachment',
    contentSecurityPolicy: 'default-src \'self\'; script-src \'none\'; sandbox; connect-src \'vitals.vercel-insights.com\'',
  },
});

export default nextConfig;