/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        optimizePackageImports: ['package-name'],
    },
    compress: true,
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "iili.io",
            },
        ],
    },
};

export default nextConfig;
