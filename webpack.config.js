const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        enforce: "pre",
        use: ["source-map-loader"],
      },
    ],
  },
  entry: {
    main: { import: './build/main.js', filename: 'main.js' },
    child: { import: './build/child.js', filename: 'child.js' },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'assets/index.html',
    }),
  ],
};
