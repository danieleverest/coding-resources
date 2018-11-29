const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports.resolve = { extensions: ['.js', '.jsx'] };

module.exports.entry = { filename: './client/index.js' };

module.exports.devServer = {
  historyApiFallback: true,
  contentBase: './dist',
};

module.exports.output = { filename: 'main.js' };

module.exports.module = {
  rules: [
    {
      test: /\.(sc|c)ss$/,
      use: [
        MiniCssExtractPlugin.loader,
        'css-loader',
        'sass-loader?sourceMap',
      ],
    },
    {
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: ['babel-loader'],
    },
    {
      test: /\.(png|jpg|gif)$/i,
      use: [
        {
          loader: 'url-loader',
          options: { limit: 8192 },
        },
      ],
    },
  ],
};

module.exports.plugins = [
  new MiniCssExtractPlugin({ filename: 'main.css' }),
];
