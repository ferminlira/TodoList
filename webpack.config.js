const HtmlWebPack = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");


module.exports = {
  //esto setea el modo en desarrollo y es por eso que 
  //el archivo main.js pasa a estar desminificado
  mode: 'development', 

  output: {
    clean: true,
    //esto limpia nuestro directorio de distribucion. 
    //si un nuevo archivo no se ne esita, no lo usamos
  },

  module: {
    rules: [
      {
        test: /\.html$/,
        
        loader: 'html-loader',
        // options {
        //   sources: false
        // }
      },
      {
        test: /\.css$/,
        exclude: /styles\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /styles\.css$/,
        use: [ MiniCssExtractPlugin.loader, 'css-loader' ]
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        loader: 'file-loader'
      }
    ]
  },

  optimization: {},

  plugins: [
    new HtmlWebPack(
      {title: 'yoooo',
      filename: 'index.html',
      template: 'src/index.html'
      }
    ) ,
    new MiniCssExtractPlugin({
      filename: '[name].[fullhash].css',
      ignoreOrder: false
    }),
    new CopyPlugin({
      patterns: [
        { from: 'src/assets/img', to: 'assets/'}
      ]
    }) 
  ]
}