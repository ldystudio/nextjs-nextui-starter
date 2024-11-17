/** @type {import('postcss-load-config').Config} */
module.exports = {
    plugins: {
        tailwindcss: {},
        "postcss-nested": {},
        "postcss-preset-env": { stage: 0 },
        autoprefixer: {},
        cssnano: { preset: "default" }
    }
}
