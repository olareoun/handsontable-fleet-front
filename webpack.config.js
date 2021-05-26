/* eslint-disable */
const path = require("path");
const webpack = require("webpack");

const sourceDir = path.join(__dirname, "src");
const outDir = path.join(__dirname, "dist");

module.exports = {
  mode: "development",
  entry: {
    core: `${sourceDir}/index.js`
  },
  output: {
    path: outDir,
    filename: "[name].bundle.js"
  },
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        include: sourceDir,
        test: /\.(js|jsx)$/,
        use: ["babel-loader"]
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  optimization: {
    splitChunks: {
      chunks: "all"
    }
  },
  devServer: {
    contentBase: outDir,
    hot: true,
    inline: true
  }
};
