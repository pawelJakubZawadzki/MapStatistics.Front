const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
    context: __dirname,
    entry: [
      'react-hot-loader/patch',
      './src/index'
    ],
    devServer: {
      host: 'localhost',
      port: 3000,
      contentBase: './public',
      historyApiFallback: true
    },
    output: {
      path: path.resolve('./dist'),
      filename: 'app.js',
      publicPath: '/'
    },
    resolve: {
        extensions: ['.ts', '.js', '.json'],
        modules: [
            path.resolve('./src'),
            path.resolve('./node_modules')
        ]
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        }
      ]
    },
    devtool: 'sourcemap',
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new HtmlWebpackPlugin({
        template: "./public/index.html"
      })
    ]
  };

  module.exports = config;