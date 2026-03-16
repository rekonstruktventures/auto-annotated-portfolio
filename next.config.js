/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        stackbitPreview: process.env.STACK
    },
    trailingSlash: true,
    reactStrictMode: true,
    output: 'export'
};

module.exports = nextConfig;
