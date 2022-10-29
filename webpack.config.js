const path = require('path')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
//const autoprefixer = require('autoprefixer')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {

    context: path.resolve(__dirname, 'src'),
    mode: 'development',

    entry: './js/index.js',
    output: {
        filename: `js/main.js`,
        path: path.resolve(__dirname, 'dist'),
        publicPath:''
    },
    devServer: {
        hot: true,
        static: {
            directory: './dist',
            watch: true,
        }
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src/index.html'),
            filename: 'index.html',
        }),

        new MiniCssExtractPlugin({
            filename: `css/main.css`,
        }),

        new CleanWebpackPlugin(),

        new CopyWebpackPlugin({
            patterns:[{
                from: path.resolve(__dirname, 'src/assets'), to: path.resolve(__dirname, 'dist'),
                from: path.resolve(__dirname, 'src/images'), to: path.resolve(__dirname, 'dist/images')
            }]
        }),
    ],
    module: {
        rules: [
          { test: /\.css$/, use: ['style-loader', 'css-loader', 'postcss-loader'] },
          {
            test: /\.s[ac]ss$/i,
            use: [
                {
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                        publicPath: (resourcePath, context) => {
                            return path.relative(path.dirname(resourcePath), context) + '/';
                        },
                    }
                },    
                'css-loader', 'sass-loader', 'postcss-loader'
            ],
          },
        ],
      },
}