const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        main: './src/entries/index.js',
        about: './src/entries/about.js',
        about: './src/entries/blog.js',
        about: './src/entries/contact.js',
        about: './src/entries/fun.js',
        about: './src/entries/photos.js'
    },
    output: {
        path: path.join(__dirname, '/dist'),
        filename: '[name].kk_index_bundle.js'
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
            template: './src/entries/index.html',
            chunks: ['main']
        }),
        new HtmlWebpackPlugin({
            filename: 'about',
            template: './src/entries/about.html',
            chunks: ['about']
        }),
        new HtmlWebpackPlugin({
            filename: 'blog',
            template: './src/entries/blog.html',
            chunks: ['blog']
        }),
        new HtmlWebpackPlugin({
            filename: 'contact',
            template: './src/entries/contact.html',
            chunks: ['contact']
        }),
        new HtmlWebpackPlugin({
            filename: 'fun',
            template: './src/entries/fun.html',
            chunks: ['fun']
        }),
        new HtmlWebpackPlugin({
            filename: 'photos',
            template: './src/entries/photos.html',
            chunks: ['photos']
        })
    ]
};