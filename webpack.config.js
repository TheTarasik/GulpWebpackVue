const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
	mode: process.env.NODE_ENV,
	entry: './src/',
	output: {
		path: path.resolve(__dirname, 'dist/js'),
		publicPath: './js/',
		filename: 'app.js',
		chunkFilename: 'chunk-[chunkhash:8].js'
	},
	module: {
		rules: [
			{
				test: /\.vue$/,
				loader: 'vue-loader'
			},
			{
				test: /\.css$/,
				use: [
				  'vue-style-loader',
				  'css-loader',
				]
			},
			{
				test: /\.scss$/,
				use: [
				  'vue-style-loader',
				  'css-loader',
				  'sass-loader'
				]
			},
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: /node_modules/
			}
		],
	},
	plugins: [
		new VueLoaderPlugin()
	],
	resolve: {
		extensions: ['.js', '.vue', '.scss'],
		alias: {
			'vue': 'vue/dist/vue.common.js'
		}
	},
	performance: {
		hints: false
	}
};