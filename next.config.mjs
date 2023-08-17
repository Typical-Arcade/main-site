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
}

export default nextConfig;