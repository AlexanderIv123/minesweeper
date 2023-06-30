const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: './src/script.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    assetModuleFilename: 'assets/[name][ext]',
  },
  devServer: {
    port: 8080,
  },
  plugins: [
    new HTMLWebpackPlugin({
      title: 'Minesweeper',
      template: './src/index.html',
    }),
    new CleanWebpackPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(?:png|jpg|gif|svg|ico|jpeg|svg|wav|mp3)$/,
        type: 'asset/resource',
      },
      // {
      //   test: /\.(ogg|mp3|wav|mpe?g)$/i,
      //   type: 'asset/resource',
      // },
    ],
  },
};
