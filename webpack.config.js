const path = require("path")
const CopyPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    context: path.resolve(__dirname, "src"),
    entry: "./index.js",
    output: {
        filename: "./bundle.js",
        path: path.resolve(__dirname, "dist"),
    },
    mode: "development",
    devServer: {
        port: 1500,
        hot: true,
        open: true,
        historyApiFallback: true,
        inline: true,
        watchContentBase: true,
        contentBase: ["./dist", "./src"],
    },
    devtool: "source-map",
    plugins: [new HtmlWebpackPlugin({
        title: 'Shake',
        template: "./index.pug",
        filename: './index.html',
    }),
        new MiniCssExtractPlugin({
            filename: "./main.css"
        }),
    ],
    module: {
        rules: [
            {

                test: /\.pug$/,
                loader: 'pug-loader'

            },
            {
                test: /\.s[ac]ss$/i,
                use: [

                    MiniCssExtractPlugin.loader,

                    // Translates CSS into CommonJS
                    "css-loader",
                    // Compiles Sass to CSS
                    "sass-loader",
                ],
            },
        ]
    }

}