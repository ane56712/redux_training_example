const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: {
        index: './index.jsx'
    },
    output: {
        publicPath: '/dist',
        path: path.resolve(__dirname, "dist"),
        filename: '[name].js'
    },
    plugins: [],
    resolve: {
        extensions: ['.js', '.jsx']
    },
    externals: {},
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    query: {
                        "presets": ['react', 'es2015']
                    }
                }
            }
        ]
    }
}

