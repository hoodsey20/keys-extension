const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: {
        contentBundle: `${__dirname}/src/content/index.js`,
        backgroundBundle: `${__dirname}/src/background/index.js`,
        popupBundle: `${__dirname}/src/popup/index.js`,
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'public'),
    },
    mode: 'development',
    plugins: [
        new CopyPlugin([
          { from: `${__dirname}/src/popup/popup.html`, to: `${__dirname}/public` },
          { from: `${__dirname}/src/manifest.json`, to: `${__dirname}/public` },
          { from: `${__dirname}/src/img`, to: `${__dirname}/public/img` },
        ]),
    ],
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
