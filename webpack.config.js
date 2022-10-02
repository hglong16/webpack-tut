const path = require('path')
const ESlintPlugin = require('eslint-webpack-plugin')


module.exports = {
  entry: path.resolve(__dirname, './src/index.js'),
  plugins: [new ESLintPlugin()]
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js']
  },
  output: {
    path: path.resolve(__dirname, '/dist'),
    filename: 'bundle.js'
  },

  devServer: {
    static: path.resolve(__dirname, './dist')
  }

}
