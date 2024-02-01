const HtmlWebpackPlugin = require('html-webpack-plugin');

const path = require('path');
const resolve = file => path.resolve(__dirname, file);

module.exports = {
  mode: 'development',
  entry: resolve('src/main.jsx'),
  output: {
    path: resolve('dist'),
    filename: 'index.js'
  },
  resolve: {
    alias: {
      '@': resolve('src')
    },
    extensions: ['.js', '.jsx', '.css', '.scss']
  },
  module: {
    rules: [
      { test: /\.jsx?$/, use: 'babel-loader', exclude: /node_modules/ },
      { test: /.css$/, use: ['style-loader', 'css-loader'] }
    ]
  },
  devServer: {
    // port: 3000
    /* static: {
      directory: resolve('dist')
    } */
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve('index.html')
    })
  ]
};
