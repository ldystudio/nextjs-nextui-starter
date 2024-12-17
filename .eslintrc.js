/** @type {import("eslint").Linter.Config} */
module.exports = {
    $schema: "https://json.schemastore.org/eslintrc",
    root: true,
    env: {
        browser: true,
        es2021: true,
        node: true
    },
    plugins: ["unused-imports", "@typescript-eslint", "jsx-a11y", "tailwindcss", "@tanstack/query"],
    extends: [
        "plugin:react/recommended",
        "plugin:react-hooks/recommended",
        "next/core-web-vitals",
        "airbnb",
        "airbnb-typescript",
        "plugin:sonarjs/recommended",
        "prettier"
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaVersion: 2021,
        sourceType: "module",
        project: "./tsconfig.json"
    },
    settings: {
        react: {
            version: "detect"
        },
        tailwindcss: {
            callees: ["classnames", "cn", "clsx", "tv", "twc", "twx"],
            config: "tailwind.config.js"
        },
        "import/resolver": {
            typescript: {}
        },
        "import/parsers": {
            "@typescript-eslint/parser": [".js", ".jsx", ".ts", ".tsx"]
        }
    },
    ignorePatterns: ["node_modules/", ".next/", "components/ui"],
    rules: {
        "no-console": "warn",
        "react/react-in-jsx-scope": "off",
        "@typescript-eslint/no-unused-vars": [
            "warn",
            {
                args: "after-used",
                ignoreRestSiblings: false,
                argsIgnorePattern: "^_.*?$"
            }
        ],
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/no-var-requires": "warn",
        "padding-line-between-statements": [
            "warn",
            { blankLine: "always", prev: "*", next: "return" },
            { blankLine: "always", prev: ["const", "let", "var"], next: "*" },
            {
                blankLine: "any",
                prev: ["const", "let", "var"],
                next: ["const", "let", "var"]
            }
        ]
    }
}