import path from "path";
import { Configuration as WebpackConfiguration } from "webpack";
import { Configuration as WebpackDevServerConfiguration } from "webpack-dev-server";

const HtmlWebpackPlugin = require('html-webpack-plugin');

interface Configuration extends WebpackConfiguration {
    devServer?: WebpackDevServerConfiguration;
}

const config: Configuration = {
    mode: (process.env.NODE_ENV as "production" | "development" | undefined) ?? "development",
    devtool: "source-map",
    devServer: {
        static: {
            directory: path.join(__dirname, 'public'),
        },
        compress: true,
        port: 8080,
        open: true,
        hot: true
    },
    entry: './src/index.tsx',
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                use: "ts-loader",
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
        ],
    },
    resolve: {
        alias: {
            components: path.resolve(__dirname, "src/components"),
        },
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, "dist"),
        clean: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: __dirname + "/public/index.html",
        }),
    ],


}

export default config;
