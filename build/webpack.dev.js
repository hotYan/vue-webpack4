const path = require('path')
const merge = require('webpack-merge')
const config = require('../webpack.config')

module.exports = merge(config,{
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    open: true,
    port: 8888
  }
})