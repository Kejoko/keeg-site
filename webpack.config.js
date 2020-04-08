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
            filename: 'index.html',
            template: './src/index.html'
        }),
        new HtmlWebpackPlugin({
            filename: 'about',
            template: './src/about.html'
        }),
        new HtmlWebpackPlugin({
            filename: 'blog',
            template: './src/blog.html'
        }),
        new HtmlWebpackPlugin({
            filename: 'contact',
            template: './src/contact.html'
        }),
        new HtmlWebpackPlugin({
            filename: 'fun',
            template: './src/fun.html'
        }),
        new HtmlWebpackPlugin({
            filename: 'photos',
            template: './src/photos.html'
        })
    ]
};