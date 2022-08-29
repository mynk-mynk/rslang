const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ESLintPlugin = require('eslint-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: path.resolve(__dirname, './src/index.ts'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './dist'),
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
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
        type: 'asset/resource',
      },
    ],
  },
  devtool: 'inline-source-map',
  devServer: {
    historyApiFallback: {
      rewrites: [
        // { from: /\/textbook$/, to: '/' },
      ],
    },
    // contentBase: path.resolve(__dirname, './dist'),
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/index.html'),
      favicon: './src/assets/icons/favicon.png',
    }),
    new CleanWebpackPlugin(),
    new ESLintPlugin({ extensions: 'ts' }),
    new webpack.HotModuleReplacementPlugin(),
    // new CopyPlugin({
    //   patterns: [
    //     { from: "src/assets", to: path.resolve(__dirname, './dist/assets') }
    //   ],
    // }),
  ],
};
