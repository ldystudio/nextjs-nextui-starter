/** @type {import("eslint").Linter.Config} */
module.exports = {
    $schema: "https://json.schemastore.org/eslintrc.json",
    env: {
        browser: false,
        es2021: true,
        node: true
    },
    extends: [
        "next/core-web-vitals",
        "plugin:react/recommended",
        "plugin:prettier/recommended",
        "plugin:react-hooks/recommended",
        "plugin:jsx-a11y/recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:tailwindcss/recommended"
    ],
    plugins: [
        "react",
        "unused-imports",
        "@typescript-eslint",
        "jsx-a11y",
        "prettier",
        "tailwindcss"
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaFeatures: { jsx: true },
        ecmaVersion: 12,
        sourceType: "module"
    },
    settings: {
        react: { version: "detect" },
        tailwindcss: {
            callees: ["classnames", "cn", "clsx", "tv", "twx"],
            config: "tailwind.config.js"
        }
    },
    rules: {
        "no-console": "warn",
        "react/prop-types": "off",
        "react/jsx-uses-react": "off",
        "react/react-in-jsx-scope": "off",
        "react-hooks/exhaustive-deps": "off",
        "jsx-a11y/click-events-have-key-events": "warn",
        "jsx-a11y/interactive-supports-focus": "warn",
        "prettier/prettier": "warn",
        "no-unused-vars": "off",
        "unused-imports/no-unused-vars": "off",
        "unused-imports/no-unused-imports": "warn",
        "@typescript-eslint/no-unused-vars": [
            "warn",
            {
                args: "after-used",
                ignoreRestSiblings: false,
                argsIgnorePattern: "^_.*?$"
            }
        ],
        "react/self-closing-comp": "warn",
        "react/jsx-sort-props": [
            "warn",
            {
                callbacksLast: true,
                shorthandFirst: true,
                noSortAlphabetically: false,
                reservedFirst: true
            }
        ],
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
    },
    overrides: [
        {
            files: ["*.ts", "*.js", "*.tsx", "*.jsx"],
            parser: "@typescript-eslint/parser"
        }
    ],
    ignorePatterns: ["node_modules/", ".next/"]
}
