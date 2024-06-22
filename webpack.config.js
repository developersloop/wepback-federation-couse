const webpack = require('webpack');
const path = require("path")
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require("terser-webpack-plugin");
const dotenvPlugin = require('dotenv-webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
	entry: './src/teste.js',
	output: {
		filename: '[name][contenthash].js', // gera um arquivo js com hash
		path: path.resolve(__dirname, './dist')
	},
	mode: 'development',
	devServer: {
		static: {
			directory: path.join(__dirname, 'dist'),
		},
		compress: true,
		port: 9000,
		open: false,
	},
	optimization: {
		minimize: true,
		minimizer: [new TerserPlugin()]
	},
	module: {
		rules: [
			{
				test: /\.(css|scss)$/,
				use: [
					MiniCssExtractPlugin.loader,
					'css-loader',
					'sass-loader',
				],
			},
			{
				test: /\.(png|jpg|jpeg)$/,
				use: [
					'file-loader'
				]
			},
			{
				test: /\.m?js$/,
				exclude: /(node_modules)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env'],
						plugins: ['@babel/plugin-proposal-object-rest-spread']
					}
				}
			},
			{
				test: /\.html$/,
				use: 'html-loader'
			},
			{
				test: /\.(ttf|woff|woff2)$/,
				use: 'url-loader'
			}
		]
	},
	plugins: [
		new MiniCssExtractPlugin({ // minify css
			filename: '[name][contenthash].css' // gera sempre um arquivo main.css com hash
		}),
		new webpack.DefinePlugin({ // var global
			VERSION: JSON.stringify('1.0.2'),
			PORT: JSON.stringify('8080')
		}),
		new dotenvPlugin(), // acesso a variaveis .env
		new HtmlWebpackPlugin() // gerar o index.html dentro da dist
	]
}