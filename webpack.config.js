const path = require('path');

const HtmlWebPackPlugin = require('html-webpack-plugin');

require('dotenv').config();

const htmlPlugin = new HtmlWebPackPlugin({
    template: path.resolve('./src/index.html'),
    filename: './index.html',
});

const { PORT: port } = process.env;

const devServer = {
    port,
    open: true,
};

module.exports = {
    mode: 'development',
    entry: './src/index.tsx',
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                resolve: {
                    extensions: ['.ts', '.tsx', '.js', '.json'],
                },
                use: 'ts-loader',
            },
            {
                test: /\.css$/,
                use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
            },
            {
                test: /\.(gif|svg|jpg|png)$/,
                loader: 'file-loader',
            },
        ],
    },
    plugins: [htmlPlugin],
    output: {
        path: path.resolve(__dirname, 'build'),
        publicPath: '/',
        filename: 'bundle.js',
    },
    devServer,
};
