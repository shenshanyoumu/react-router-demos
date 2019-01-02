var fs = require("fs");
var path = require("path");

module.exports = {
  entry: path.resolve(__dirname, "server.js"),

  output: {
    filename: "server.bundle.js"
  },

  target: "node",

  // externals字段将第三方库排除在最终的打包文件中
  externals: fs
    .readdirSync(path.resolve(__dirname, "node_modules"))
    .concat(["react-dom/server"])
    .reduce(function(ext, mod) {
      ext[mod] = "commonjs " + mod;
      return ext;
    }, {}),

  node: {
    __filename: false,
    __dirname: false
  },

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
