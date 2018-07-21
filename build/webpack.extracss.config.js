const merge = require('webpack-merge')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpackBaseConfig = require('./webpack.base.config.js')

module.exports = merge(webpackBaseConfig, {
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {

            }
          },
          "css-loader","postcss-loader","sass-loader"
        ]
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "simple-grid.css",
      chunkFilename: "[id].css"
    })
  ]
})
