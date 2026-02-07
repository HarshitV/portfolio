/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        formats: ["image/avif", "image/webp"],
    },
    i18n: {
        locales: ["en"],
        defaultLocale: "en",
    },
    async redirects() {
        return [
            {
                source: "/:path*",
                has: [{ type: "host", value: "vermaharshit.com" }],
                destination: "https://www.vermaharshit.com/:path*",
                permanent: true, // 301
            },
        ];
    },
};

module.exports = nextConfig;
