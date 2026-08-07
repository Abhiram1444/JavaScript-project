const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  // Starting point of the application
  entry: "./src/index.js",

  // Output configuration
  output: {
    filename: "bundles.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/"
  },

  // Development server configuration
  devServer: {
    static: "./dist",
    historyApiFallback: true,
    port: 3000,
    open: true,
    hot: true
  },

  // Source maps help during debugging
  devtool: "source-map",

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: "babel-loader"
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          "css-loader"
        ]
      }
    ]
  },

  resolve: {
    extensions: [".js"]
  },

  plugins: [
    new CleanWebpackPlugin(),

    new HtmlWebpackPlugin({
      template: "./public/index.html"
    })
  ]
};