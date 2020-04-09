const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        main: './src/entries/index.js',
        about: './src/entries/about.js',
        blog: './src/entries/blog.js',
        contact: './src/entries/contact.js',
        fun: './src/entries/fun.js',
        photos: './src/entries/photos.js'
    },
    output: {
        path: __dirname + '/dist',
        filename: 'dist/[name].kk_bundle.js'
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
            },
            // Font file loader
            {
                test: /\.(ttf|woff|woff2)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'fonts/'
                    }
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