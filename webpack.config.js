const HtmlWebPackPlugin = require('html-webpack-plugin');
const root_path = process.cwd() + '/';

const path = require('path');

module.exports = {
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader'
				}
			},
			{
				test: /\.html$/,
				use: [
					{
						loader: 'html-loader'
					}
				]
			},
			{
				test: /\.css$/,
				use: [
					{
						loader: 'css-loader'
					}
				]
			}
		]
	},
	output: {
		path: path.join(root_path, 'dist'),
		filename: '[name].js',
		chunkFilename: '[name].js',
		publicPath: '/'
	},
	plugins: [
		new HtmlWebPackPlugin({
			template: path.join(root_path, 'public/index.html'),
			filename: path.join(root_path, 'dist/index.html'),
			inject: 'head'
		})
	]
};
