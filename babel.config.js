module.exports = {
    presets: [
        '@babel/preset-env',
        [
            '@babel/preset-react',
            {
                runtime: 'automatic',
            },
        ],
        '@babel/preset-typescript',
    ],
    plugins: [
        ['@babel/plugin-proposal-class-properties', {}],
        ['istanbul', {}, 'plugin for Cypress instrumentation'],
    ],
};
