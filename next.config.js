// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'http',
                hostname: 'www.foodsafetykorea.go.kr',
                port: '',
                pathname: '/uploadimg/**',
            },
        ],
    },
};

module.exports = nextConfig;
