const { nextui } = require("@nextui-org/react")

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ["var(--font-sans)"],
                mono: ["var(--font-geist-mono)"]
            }
        }
    },
    darkMode: "class",
    plugins: [require("tailwindcss-animate"), require("tailwindcss-motion"), nextui()]
}
