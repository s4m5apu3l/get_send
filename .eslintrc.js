module.exports = {
    root: true,
    ignorePatterns: ['dist', 'node_modules'],
    env: {
        browser: true,
        node: true,
    },
    parser: 'vue-eslint-parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
            // modules: true,
        },
        // ecmaVersion: 2022,
        ecmaVersion: 13,
        sourceType: 'module',
        // parser: '@typescript-eslint/parser',
    },
    extends: [
        '@nuxtjs/eslint-config-typescript',
        'plugin:prettier/recommended',
    ],
    plugins: [],
    rules: {
        'prettier/prettier': ['error', { endOfLine: 'auto' }],
    },
};
