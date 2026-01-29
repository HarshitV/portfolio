const js = require("@eslint/js");
const nextPlugin = require("@next/eslint-plugin-next");
const tsParser = require("@typescript-eslint/parser");
const tsPlugin = require("@typescript-eslint/eslint-plugin");

module.exports = [
    {
        ignores: [".next", "node_modules", "out", "build", "dist", ".git", "public", ".babelrc"],
    },
    {
        files: ["**/*.{js,jsx,ts,tsx}"],
        languageOptions: {
            parser: tsParser,
            parserOptions: {
                ecmaVersion: "latest",
                sourceType: "module",
                ecmaFeatures: {
                    jsx: true,
                },
            },
            globals: {
                React: "readonly",
                JSX: "readonly",
                window: "readonly",
                document: "readonly",
                navigator: "readonly",
            },
        },
        plugins: {
            "@typescript-eslint": tsPlugin,
            "@next/next": nextPlugin,
        },
        rules: {
            ...js.configs.recommended.rules,
            ...tsPlugin.configs.recommended.rules,
            ...nextPlugin.configs.recommended.rules,
            "react/react-in-jsx-scope": "off",
            "react/prop-types": "off",
            "@next/next/no-html-link-for-pages": "off",
            "no-unused-vars": "off",
            "@typescript-eslint/no-unused-vars": [
                "warn",
                {
                    argsIgnorePattern: "^_",
                    varsIgnorePattern: "^_",
                },
            ],
            "@typescript-eslint/no-explicit-any": "warn",
            "@typescript-eslint/no-require-imports": "off",
            "prefer-const": "warn",
            "no-var": "error",
            "no-undef": "off",
        },
    },
    {
        files: ["next.config.js", "eslint.config.js"],
        languageOptions: {
            sourceType: "commonjs",
            globals: {
                require: "readonly",
                module: "readonly",
                __dirname: "readonly",
            },
        },
        rules: {
            "@typescript-eslint/no-require-imports": "off",
            "no-undef": "off",
        },
    },
];
