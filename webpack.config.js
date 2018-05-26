const webpack = require('webpack');

module.exports = {
    entry: [
        'webpack-dev-server/client?'“http://localhost:4001',
        'webpack/hot/only-dev-server',
        './src/index.js'
    ],
    module: {
        loaders: [{
            test: /\.js?/,
            exclude: /node_modules/,
            loader: 'react-hot!babel'
        }]
    },
    resolve: {
        extensions: ['', '.js']
    },
    output: {
        path: 'public',
        publicPath: '/',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: './public',
        hot: true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
};