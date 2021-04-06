const path = require('path');

module.exports = {
    entry: './frontend/bookoffaces.jsx',
    output: {
        filename: './bundle.js',
        path: path.resolve(__dirname, 'app', 'assets', 'javascripts') // set it up?
    },
    module: {
        rules: [
            {
                test: [/\.jsx?$/],
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/env', '@babel/react']
                    }
                },
            }
        ]
    },
    devtool: 'source-map',
    resolve: {
        extensions: ['.js', '.jsx', '*']
    }
};