const ExtractTextPlugin = require("extract-text-webpack-plugin");

///
module.exports = {
  entry: './src/index.js',
  output: {
    filename: './public/build.js'
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
              fallback: "style-loader",
              use: "css-loader?importLoaders=1!postcss-loader",
            }),
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },

  plugins: [
      new ExtractTextPlugin("./public/style.css"),
    ]
}