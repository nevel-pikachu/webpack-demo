const paths = require('./paths.js')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');

module.exports = {
  entry: paths.src + '/index.js',
  output: {
    path: paths.build,
    filename: 'bundle.js',
    // remove not used file after bundle src
    clean: true
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
  optimization: {
    minimizer: [new TerserJSPlugin({})],
  },
  plugins: [
    new HtmlWebpackPlugin({
      hash: true,
      title: 'Home landing',
      filename: 'index.html',
      template: './src/template.html'
    }),
    new MiniCssExtractPlugin({
      filename: 'style.min.css'
    })
  ],
  mode: 'production'
}
