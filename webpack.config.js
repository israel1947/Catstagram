/* import {path} from 'path';
 */

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  /* Este corresponde al archivo principal que contendra la info del proyecto */
  entry: './src/index.js',

  /* Es la salida a produccion, es decir es donde se guarda toda la info antes de mandarlo a produccion. */
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },

  /* Estas son todas las extensiones qiue se estaran manejando en el proyecto */
  resolve: {
    extensions: ['*', '.mjs', '.js', '.svelte']
  },

  /* Dectecta los archivos que se estan leyendo, y los loader con os que se estara trabjando */
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.svelte$/,
        exclude: /node_modules/,
        use: {
          loader: 'svelte-loader'
        }
      }
    ]

  },

  /* Sirve para poder trabajar con HTML dentro del proyecto */
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: './public/index.html',
      filename: './index.html'
    })
  ]
}
