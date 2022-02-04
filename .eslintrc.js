module.exports = {
    root: true,
    env: {
        browser: true,
        commonjs: true,
    },
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint'],
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
    ],
    rules: {
        'no-console': 'error',
    },
};
