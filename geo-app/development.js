import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const stat = path.resolve(__dirname, 'world/static/')
console.log(stat)
const dist = path.resolve(__dirname, 'world/dist/')
console.log(dist)
export default {
  mode: 'development',
  entry: {
    index: '/home/hidenaga/geod2/geo-app/world/static/index.jsx'
  },

  output: {
    path: '/home/hidenaga/geod2/geo-app/world/dist/',
    filename: 'bundle.js'
  },

  module: {
    rules: [
      {
        //test: /\.jsx$/,
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },

  resolve: {
    extensions: ['.js', 'jsx']
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: '/home/hidenaga/geod2/geo-app/world/templates/world/index.html',
      filename: 'index.html'
    })
  ]
}

