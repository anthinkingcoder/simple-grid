var path = require('path');
var webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
function resolve (dir) {
  return path.join(__dirname, '..', dir);
}
function assetsPath (_path) {
  return path.posix.join('static', _path)
}

module.exports = {
  mode: 'production',
  entry: {
    main: './src/index.js'
  },
  output: {
    path: resolve('/dist'),
    publicPath: "/dist/",
    filename: 'simple-grid.js',
    library: "simple-grid",
    libraryTarget: "umd",
    umdNamedDefine: true
  },
  externals: {
    vue: {
      root: 'Vue',
      commonjs: 'vue',
      commonjs2: 'vue',
      amd: 'vue'
    }
  },
  resolve: {
    extensions: ['', '.js', '.vue']
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader',
      },
      {
        test: /\.js$/,
        use:[
          {
            loader: 'babel-loader',
            options: {
            },
          }
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader',
            options: {
              sourceMap: true,
            },
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          },
          {
            loader: 'postcss-loader',
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          }
        ],
      },
      {
        test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
        use: 'url-loader?limit=8192'
      },
      {
        test: /\.(html|tpl)$/,
        use: 'html-loader'
      }
      // {
      //   test: /\.scss$/,
      //   use: ExtractTextPlugin.extract({
      //     fallback: 'style-loader',
      //     use: ['css-loader', 'autoprefixer-loader', 'sass-loader']
      //   })
      // },

    ],
  },
  resolve: {
    extensions: ['.js', '.vue'],
    alias: {
      'vue': 'vue/dist/vue.esm.js',
      '@': resolve('src')
    }
  },
  plugins: [
    new VueLoaderPlugin(),
    new webpack.DefinePlugin({
      'precess.env': {
        NODE_ENV: '"production"'
      }
    }),
    // new UglifyJsPlugin({
    //   parallel: true,
    //   sourceMap: true,

    // }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    // new ExtractTextPlugin({
    //   filename: 'simple-grid.css',
    //   allChunks: false,
    // })
  ]
};
