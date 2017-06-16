var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: './src/index.js',
    vendor: [ 'react', 'react-dom' ]
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
    publicPath:'/'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader'
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Output Management',
      favicon: './assets/images/favicon.ico',
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  devtool: "cheap-eval-source-map",
  devServer: {
    hot: true, // Tell the dev-server we're using HMR
    contentBase: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  }
};