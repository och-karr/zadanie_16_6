const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OptimizeJsPlugin = require('optimize-js-plugin');
const plugins = [new HtmlWebpackPlugin({
    template: 'src/index.html',
    filename: 'index.html',
    inject: 'body'
})];

module.exports = (env = 'development') => {
    if (env === 'production') {
        plugins.push(
            new OptimizeJsPlugin({
                sourceMap: false
            })
        )
    };

    return {
        entry: './src/index.js',
            output: {
            path: path.resolve(__dirname, 'build'),
            filename: 'index.bundle.js'
        },
        mode: env,
        test: /\.js$/,
        loader: "babel-loader",
        options: {
            plugins: env !== 'production' ? ["react-hot-loader/babel"] : []
        },
        devtool: env !== 'production' ? 'source-map' : '',
        module: {
            rules: [
                {
                    test: /\.js$/,
                    loader: "babel-loader"
                },
                {
                    test: /\.css$/,
                    use: [
                        { loader: 'style-loader'},
                        {
                            loader: 'css-loader',
                            options: {
                                modules: true
                            }
                        }
                    ]
                }
            ],
        },
        devtool: 'source-map',
        plugins: plugins
    }
};