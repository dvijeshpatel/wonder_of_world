const path = require('path');
module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve('./dist'),
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    port: 8080,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ],
      }
    ]
  },
  devtool: "source-map",
};
