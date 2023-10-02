/** @type {import('next').NextConfig} */
const nextConfig = {
  rewrites: async () => ({
    afterFiles: [
      {
        source: '/garbage-drop',
        destination: '/garbage-drop/index.html',
      },
    ]
  }),
  images: {
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: 'default-src \'self\'; script-src \'none\'; sandbox;',
  },
};

export default nextConfig;