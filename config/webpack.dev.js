const { merge } = require('webpack-merge');
const paths = require('./paths.js');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devServer: {
    open: true,
    contentBase: paths.build
  }
})