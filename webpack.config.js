var path = require('path');
var webpack = require('webpack');

module.exports = {
	entry: {
		global: './js/app.js',
	},
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: 'main.bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
				query: {
					presets: ['es2015']
				}
			}

		]
	},
	stats: {
		colors: true
	},
	watch: true,
	devtool: 'source-map',
}
