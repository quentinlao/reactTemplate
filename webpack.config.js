const path = require('path');

const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsWepackPlugin = require('optimize-css-assets-webpack-plugin');
const BabelMinifyWebpackPlugin = require('babel-minify-webpack-plugin');

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
                test: /\.(ts|tsx|js)$/,
                exclude: /node_modules/,
                resolve: {
                    extensions: ['.ts', '.tsx', '.js', '.json'],
                },
                use: [
                    {
                        loader: 'babel-loader',
                    },
                ],
            },
            {
                test: /\.css$/,
                use: [
                    { loader: MiniCssExtractPlugin.loader },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                localIdentName:
                                    '[name]_[local]_[hash:base64:5]',
                            },
                        },
                    },
                ],
            },
            {
                test: /\.(gif|svg|jpg|png)$/,
                loader: 'file-loader',
            },
        ],
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json'],
    },

    plugins: [
        htmlPlugin,
        new MiniCssExtractPlugin(),
        new OptimizeCssAssetsWepackPlugin(),
        new BabelMinifyWebpackPlugin(),
    ],
    output: {
        path: path.resolve(__dirname, 'build'),
        publicPath: '/',
        filename: 'bundle.js',
    },
    devServer,
};
