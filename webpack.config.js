const path = require('path');

require('dotenv').config();
const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const appHtml = path.resolve(__dirname, 'public', 'index.html');

const appIndex = path.resolve(__dirname, 'src', 'index.tsx');
const appBuild = path.resolve(__dirname, '/build');

module.exports = (webpackEnv = 'development') => {
    return {
        mode: webpackEnv,
        entry: appIndex,
        resolve: {
            extensions: ['.ts', '.tsx', '.js'],
        },
        output: {
            path: appBuild,
            filename: '[name].[hash].js',
        },
        module: {
            rules: [
                {
                    test: /\.(ts|tsx)$/,
                    exclude: /node_modules/,
                    use: [
                        {
                            loader: 'ts-loader',
                            options: {
                                transpileOnly:
                                    webpackEnv === 'development' ? true : false,
                            },
                        },
                    ],
                },
                {
                    test: /\.(ts|tsx)$/,
                    exclude: /node_modules/,
                    use: [
                        'cache-loader',
                        {
                            loader: 'ts-loader',
                            options: {
                                transpileOnly: isEnvDevelopment ? true : false,
                            },
                        },
                    ],
                },
                {
                    loader: 'file-loader',
                    exclude: [
                        /\.(js|mjs|jsx|ts|tsx)$/,
                        /\.html$/,
                        /\.json$/,
                        /\.(png|jpe?g|gif)$/i,
                    ],
                    options: {
                        outputPath: 'static/media',
                        name: '[name].[hash:8].[ext]',
                        esModule: false,
                    },
                },
                {
                    test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
                    loader: 'url-loader',
                    options: {
                        limit: 10000,
                        outputPath: 'static/media',
                        name: '[name].[hash:8].[ext]',
                    },
                },
            ],
        },
        plugins: [new HtmlWebpackPlugin({ template: appHtml })],
    };
};
