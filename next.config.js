/** @type {import('next').NextConfig} */
module.exports = {
    reactStrictMode: true,
    env: {},
    eslint: { ignoreDuringBuilds: true },
    typescript: { ignoreBuildErrors: true },
    logging: {
        fetches: {
            fullUrl: true
        }
    },
}
