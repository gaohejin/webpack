var _webpack = require('webpack')
var path = require('path')
var autoprefixer = require('autoprefixer')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var resolve = (dir) => {
  return path.join(__dirname, '..', dir)
}
var assetsPath = function (_path) {
  var assetsSubDirectory = process.env.NODE_ENV === 'production'
    ? 'dist/css'
    : 'dist/css'
  return path.posix.join(assetsSubDirectory, _path)
}
module.exports = {
  entry: './src/main.js',
  output: {
    path: __dirname,
    filename: './dist/bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader'
        })
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        })
      }
    ]
  },
  resolve: {
    extensions: ['.json', '.js', '.scss'],
    alias: {
      '@': resolve('src')
    }
  },
  plugins: [
    new _webpack.BannerPlugin('Created by FDD on 2017/3/23.'),
    new ExtractTextPlugin({
      filename: assetsPath('../[name].css'),
      allChunks: true
    }),
    new _webpack.LoaderOptionsPlugin({
      options: {
        postcss: function () {
          return [
            autoprefixer({
              browsers: ['ie>=8', '>1% in CN']
            })
          ]
        }
      }
    })
  ]
}