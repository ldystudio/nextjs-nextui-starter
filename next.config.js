/** @type {import('next').NextConfig} */
module.exports = {
    reactStrictMode: true,
    env: {},
    logging: {
        fetches: {
            fullUrl: true
        }
    },
    eslint: { ignoreDuringBuilds: true },
    typescript: { ignoreBuildErrors: true }
}
