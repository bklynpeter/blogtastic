const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    
    entry: {
        src: './client/index.js',
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build'),
    },
    mode:  process.enc.NODE_ENV,
    module: {
        rules: [
            {
                test: /\.jsx?/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/env', '@babel/react'],
                },
            },
            {
                test: /\.s?css/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Development',
            template: '/index.html',
        }),
    ],
    devServer: {
        static: {
            publicPath: '/build',
            directory: path.resolve(_dirname, 'public'),
        },
        proxy: {
            '/api': 'http://localhost:3000',
        },
    },
};
