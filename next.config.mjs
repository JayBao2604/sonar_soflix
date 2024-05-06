/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: "bcrxqnfmoeygfezttpeo.supabase.co",
                port: "",
            },
            {
                protocol: 'https',
                hostname: "i.ytimg.com",
                port: "",
            },
        ],
        domains: [
            "bcrxqnfmoeygfezttpeo.supabase.co",
            "i.ytimg.com"
        ],
    },
};

export default nextConfig;
