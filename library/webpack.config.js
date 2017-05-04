const path = require('path');

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

const config = {
  entry: './src/index.js',
  devtool: 'source-map',
  output: {
    path: __dirname + '/dist',
    filename: 'webpack-numbers.js',
    library: 'webpackNumbers',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  externals: {
    'lodash': {
      commonjs: 'lodash',
      commonjs2: 'lodash',
      amd: 'lodash',
      root: '_'
    }
  },
  module: {
    rules: [
      {
        test: /(\.jsx|\.js)$/,
        loaders: [
          'babel-loader'
        ],
        exclude: /(node_modules|bower_components)/,
        include: [resolve('src'), resolve('test')]
      }
    ]
  },
  resolve: {
    extensions: ['.json', '.js'],
    alias: {
      '@': resolve('src')
    }
  }
}

module.exports = config;