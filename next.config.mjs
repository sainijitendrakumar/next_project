/** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
    crossOrigin: 'anonymous',
    async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.seehdmovie.xyz' }],
        destination: 'https://seehdmovie.xyz/:path*',
        permanent: true,
      },
    ]
  },
}
 
export default nextConfig;