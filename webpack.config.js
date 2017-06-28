const webpack = require('webpack');
const path = require('path');

const nodeEnv = process.env.NODE_ENV || 'development';
const isProd = nodeEnv === 'production';

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './app/index.html',
  filename: 'index.html',
  inject: 'body'
})
module.exports = {
  devtool: isProd ? 'hidden-source-map' : 'cheap-eval-source-map',
  context: path.join(__dirname, './src'),
  output: {
    // path: path.resolve('src'),
    path: path.join(__dirname, './dist'),
    filename: '[name].js'
  },
  entry: {
    jsx: './app/index.js',
    vendor: ['react'],
    body: [
      `./sass/common.scss`,
    ],
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.jsx$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },{
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },{
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      },{
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader'
        ]
      },{
        test: /\.scss$/,
        loaders: [
          'style-loader?sourceMap',
          'css-loader?modules&importLoaders=1&localIdentName=[name]-[local]',
          'sass-loader'
        ]
      }
    ],
  },
  plugins:[HtmlWebpackPluginConfig],
  resolve: {
    modules: [  'node_modules' ],
    extensions: [
      '.js', '.jsx', '.es', '.es6', '.scss',
    ],
  },
  // devServer: {
  //   contentBase: './client',
  //   hot: true
  // }
}