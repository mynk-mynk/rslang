const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ESLintPlugin = require('eslint-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: {
    index: './src/index.ts',
    about: './src/pages/about/about.ts',
    audiocall: './src/pages/audiocall/audiocall.ts',
    authorization: './src/pages/authorization/authorization.ts',
    sprint: './src/pages/sprint/sprint.ts',
    statistics: './src/pages/statistics/statistics.ts',
    team: './src/pages/team/team.ts',
    textbook: './src/pages/textbook/textbook.ts'
  },
  output: {
    filename: '[name].bundle.js',
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
    ['about', 'audiocall', 'authorization', 'sprint', 'statistics', 'team', 'textbook'].map(page =>
      new HtmlWebpackPlugin({
        inject: true,
        filename: `pages/${page}.html`,
        template: `src/pages/${page}/${page}.html`,
        chunks: [page]
      }),
    ),
  
  [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
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