var webpack = require("webpack");

module.exports = {
  entry: "./index.js",

  output: {
    path: "public",
    filename: "bundle.js",
    publicPath: "/"
  },

  // 在生产环境下对包进行压缩
  plugins:
    process.env.NODE_ENV === "production"
      ? [
          new webpack.optimize.DedupePlugin(),
          new webpack.optimize.OccurrenceOrderPlugin(),
          new webpack.optimize.UglifyJsPlugin()
        ]
      : [],

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader?presets[]=es2015&presets[]=react"
      }
    ]
  }
};
