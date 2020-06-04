const webpack = require("webpack");
var path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const dotenv = require("dotenv");
const env = dotenv.config().parsed;
const envKeys = Object.keys(env).reduce((prev, next) => {
	prev[`process.env.${next}`] = JSON.stringify(env[next]);
	return prev;
}, {});

const htmlWebpackPlugin = new HtmlWebPackPlugin({
  template: "./src/index.html",
  filename: "./index.html"
});

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader",
            options: {
              modules: true,
              importLoaders: 1,
              localIdentName: "[name]_[local]_[hash:base64]",
              sourceMap: true,
              minimize: true
            }
          }
        ]
      },
      {
				test: /\.(jpg|png|woff|woff2|eot|ttf|svg)$/,
				loaders: ["url-loader?limit=100000"]
			},
    ]
  },
  resolve: {
    modules: [path.resolve(__dirname, "./src"), "node_modules"],
    extensions: ["*", ".js", ".jsx"],
    alias: {
      components: path.resolve(__dirname, "./src/components"),
      images: path.resolve(__dirname, "./src/assets/images/"), 
    },
  },
  plugins: [htmlWebpackPlugin,new webpack.DefinePlugin(envKeys)]
};
