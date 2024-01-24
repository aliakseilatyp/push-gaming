const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env, argv) => {
  const mode = (argv || {}).mode || 'development';
  return {
    mode,
    entry: ['./src/index.tsx'],
    module: {
      rules: [
        {
          test: /\.(js|ts)x?$/,
          exclude: /node_modules/,
          use: ['babel-loader'],
        },
        {
          test: /\.scss$/,
          use: [
            { loader: 'style-loader' },
            { loader: 'css-loader', options: { modules: true } },
            { loader: 'sass-loader' },
          ],
        },
        { test: /\.css$/i, use: ['style-loader', 'css-loader'] },
        {
          test: /\.(jpe?g|png|gif)$/,
          use: [{ loader: 'url-loader', options: { limit: 10000 } }],
        },
        // {
        //   test: /\.svg$/,
        //   use: ['@svgr/webpack'],
        // },
      ],
    },
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        template: './src/index.html',
      }),
      new MiniCssExtractPlugin({ filename: 'app_[chunkhash].css' }),
    ],
    optimization: {
      minimizer: [`...`, new CssMinimizerPlugin()],
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.jsx'],
      alias: {
        // components: path.resolve(__dirname, './src/components'),
      },
    },
    output: {
      path: path.resolve(__dirname, './dist'),
      filename: 'bundle.[name].[chunkhash].js',
      chunkFilename: '[name].[chunkhash].js',
      publicPath: '/',
    },
    devServer: {
      port: 3000,
      open: '/',
      historyApiFallback: true,
      static: './dist',
    },
  };
};
