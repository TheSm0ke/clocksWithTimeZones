const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin  = require('html-webpack-plugin');
//const SvgChunkWebpackPlugin  = require('svg-chunk-webpack-plugin');

module.exports = {
  context: __dirname,
  entry: {
    main: './src/index.tsx',
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  module: {
    rules: [
      { test: /\.json$/, type: 'json' },
      {
        test: /\.[jt]sx?$/,
        exclude: /node_modules/,
        use: ['babel-loader']

      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true,
            },
          },
        ],
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.svg$/i,
        type: 'asset',
        resourceQuery: /url/,
      },
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        resourceQuery: { not: [/url/] },
        use: ['@svgr/webpack'],
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'ClocksWithTimeZonne',
      template: path.resolve(__dirname,  './public/index.html'),
      favicon: path.resolve(__dirname,  './public/favicon.ico'),
    }),
    new MiniCssExtractPlugin({filename: '[name].css'}),
    //new SvgChunkWebpackPlugin({filename: '[name].svg'})
  ],
  devServer: {
    port: 3000,
  }
}