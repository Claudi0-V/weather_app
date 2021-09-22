const path = require('path')

const  { CleanWebpackPlugin } = require('clean-webpack-plugin');
let mode = "development";
const htmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
if (process.env.NODE_ENV === "production") {
	mode = "production";
}

module.exports = {
	mode: mode,
	devtool: "source-map",
	output: {
		path: path.resolve(__dirname, 'dist'),
		assetModuleFilename: "images/[hash][ext][query]"
	},
	module: {
		rules: [
			{
				test: /\.(png|jpe?g|gif|svg)$/i,
				type: "asset",
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
					}
				},
			{
				test: /\.css$/i,
				use: [{
 		loader: MiniCssExtractPlugin.loader,
 		options: {publicPath: ""},
	 	}, "css-loader"],
				},
			]
	},
	plugins: [
		new CleanWebpackPlugin(), 
		new MiniCssExtractPlugin(), 
		new htmlWebpackPlugin({
			template: './src/index.html'
		})
	],
	devServer: {
    static: {
      directory: path.join(__dirname, './src'),
    },
    hot: true,
    compress: true,
    port: 9000,
  	}
}