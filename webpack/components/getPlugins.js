const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = function getPlugins() {
  return [
    new HtmlWebpackPlugin({ title: "Parser Brain", favicon: "./webpack/components/brain.png" }),
    new webpack.DefinePlugin({
      "process.env.BACKEND_PORT": JSON.stringify(process.env.BACKEND_PORT),
      "process.env.PRODUCTION": JSON.stringify(process.env.PRODUCTION),
    }),
  ];
};
