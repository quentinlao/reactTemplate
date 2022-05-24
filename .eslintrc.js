module.exports = {
    root: true,
    env: {
        browser: true,
        commonjs: true,
        jest: true,
    },
    parser: '@typescript-eslint/parser',
    plugins: ['react-hooks', '@typescript-eslint', 'react', 'jest'],
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'plugin:jest/recommended',
    ],
    rules: {
        'no-console': 'error',
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',
        '@typescript-eslint/no-explicit-any': 'warn',
        'react/jsx-uses-react': 'off',
        'react/react-in-jsx-scope': 'off',
    },
    ignorePatterns: [
        '**/node_modules/**',
        '**/public/**',
        '**/dist/**',
        '**/build/**',
    ],
};
