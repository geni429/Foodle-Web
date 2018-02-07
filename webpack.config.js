const path = require('path');

const config = {
  entry: './src/index.js',

  output: {
    path: path.join(__dirname, '/public/'),
    filename: 'bundle.js'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          cacheDirectory: true,
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'
      }
    ]
  },

  devServer: {
    inline: true,
    port: 3030,
    contentBase: path.join(__dirname, '/public/')
  },
}

module.exports = config;