const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: { "index.js": "./src/index.js", "data.js": "./src/data.js" },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name]",
  },
  module: {
    rules: [
      {
        type: "javascript/auto",
        test: /\.json$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "langs/[name].[ext]",
            },
          },
        ],
        include: [path.resolve(__dirname, "src/langs")],
      },
      {
        test: /\.(js|jsx)$/,
        loader: "babel-loader",
        exclude: /[\\/]node_modules[\\/]/,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      inject: "body",
      template: path.resolve(__dirname, "./src", "index.html"),
    }),
    new CleanWebpackPlugin(),
  ],
};

// module.exports = config;
