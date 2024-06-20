/** @type {import('next').NextConfig} */
module.exports = {
    reactStrictMode: true,
    logging: {
        fetches: {
            fullUrl: true
        }
    }
    // eslint: {
    //     ignoreDuringBuilds: true
    // },
    // typescript: {
    //     ignoreBuildErrors: true
    // }
};
