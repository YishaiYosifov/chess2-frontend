/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "http",
                hostname: "127.0.0.1",
                port: "8000",
                pathname: "**",
            },
            {
                protocol: "http",
                hostname: "192.168.1.159",
                port: "8000",
                pathname: "**",
            },
        ],
    },
};

module.exports = nextConfig;
