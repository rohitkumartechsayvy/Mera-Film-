var path = require('path');

module.exports = {
	context: path.resolve('public/js'),
	entry: "./app",
	output: {
		path: path.resolve('build/'),
		publicPath: '/public/assets/',
		filename: "bundle.js"
	},
	devServer: {
		contentBase: 'public'
	},

	module: {
		// preLoaders:[
		// 	{
		// 		test: /\.js$/,
		// 		exclude: 'node_modules',
		// 		loader: 'jshint-loader'
		// 	}
		// ],

		loaders: [

			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: "babel-loader"
			},
			{
				test: /\.css$/,
				exclude: /node_modules/,
				loader: "style-loader!css-loader"
			},
			{
				test: /\.scss$/,
				exclude: /node_modules/,
				loader: "style-loader!css-loader!sass-loader"
			},
			{
		        test: /\.html$/,
		        exclude: /node_modules/,
		        loader: "raw-loader"
		     }

		]
	},

	resolve: {
		extensions: ['', '.js', '.es6']
	}
}
