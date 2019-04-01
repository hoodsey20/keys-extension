const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        index: './src/storybook/index.js'
	},
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'storybook-build'),
    },
    devServer: {
        port: 3030,
    },
    mode: 'development',
    devtool: 'source-map',
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/storybook/index.html'
        })
    ],
    optimization: {
        splitChunks: {
            name: 'vendor',
            chunks: 'all',
        },
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 1000,
                        name: '[name].[ext]',
                        outputPath: 'img/'
                    }
                }
            },
        ]
    }
}
