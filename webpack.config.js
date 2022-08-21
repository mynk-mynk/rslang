const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ESLintPlugin = require('eslint-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");

const pages = ['audiocall', 'authorization', 'index', 'sprint', 'statistics', 'team', 'textbook'];

module.exports = {
  entry: pages.reduce((config, page) => {
    config[page] = `./src/pages/${page}/${page}.ts`;
    return config;
  }, {}),
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, './dist'),
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.ts$/i,
        use: 'ts-loader',
      },
      {
        test: /\.(png|svg|jp*g|ico)$/i,
        type: 'asset/resource'
      }
    ],
  },
  devtool: 'inline-source-map',
  resolve: {
    extensions: ['.ts', '.js'],
  },
  plugins: [].concat(
    pages.map(
      (page) =>
        new HtmlWebpackPlugin({
          inject: true,
          template: `src/pages/${page}/${page}.html`,
          filename: `${page}.html`,
          chunks: [page],
        })
    ),
  [
    new CleanWebpackPlugin(),
    new ESLintPlugin({ extensions: 'ts' }),
    new webpack.HotModuleReplacementPlugin(),
    new CopyPlugin({
      patterns: [
        { from: "src/assets", to: path.resolve(__dirname, './dist/assets') }
      ],
    }),
  ]
  ),
};