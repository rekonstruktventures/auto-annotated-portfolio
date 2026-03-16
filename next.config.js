/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        stackbitPreview: process.env.STACK
    },
    trailingSlash: true,
    reactStrictMode: true,
    outout: 'export'
};

module.exports = nextConfig;
