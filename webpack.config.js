const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'kk_index_bundke.js'
    },
    module: {
        rules: [
            //  Javascript source compile rule
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            //  Css file loader rule
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            //  Image file loader rule
            {
                test: /\.(png|jpg|gif|svg)$/,
                use: {
                    loader: 'file-loader',
                    options: { name: 'images/[name]-[hash:8].[ext]' }
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ]
};