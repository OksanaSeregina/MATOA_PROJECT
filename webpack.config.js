const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsWebpackPlugin = require("optimize-css-assets-webpack-plugin");
const TerserWebpackPlugin = require("terser-webpack-plugin");
const ESLintPlugin = require("eslint-webpack-plugin");

const isDevelopment = process.env.NODE_ENV === "development";
const isProduction = !isDevelopment;

const optimization = () => {
    const config = {
        splitChunks: {
            chunks: "async"
        }
    };

    if (isProduction) {
        config.minimizer = [new OptimizeCssAssetsWebpackPlugin(), new TerserWebpackPlugin()];
    }

    return config;
};

const fileName = (ext) => (isDevelopment ? `[name].${ext}` : `[name].[hash].${ext}`);
const htmlWebpackPlugin = (name, chunks = [name]) =>
    new HTMLWebpackPlugin({
        template: path.resolve(__dirname, `./src/${name}.html`),
        filename: `${name}.html`,
        chunks,
        minify: { collapseWhitespace: isProduction }
    });

module.exports = {
    context: path.resolve(__dirname, "src"),
    mode: "development",
    entry: {
        main: ["@babel/polyfill", "./js/main.js"],
        payment: ["@babel/polyfill", "./js/payment.js"],
        product: ["@babel/polyfill", "./js/product.js"],
        confirmation: ["@babel/polyfill", "./js/confirmation.js"],
        checkout: ["@babel/polyfill", "./js/checkout.js"]
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: fileName("js")
    },
    resolve: {
        extensions: [".js"]
    },
    optimization: optimization(),
    devServer: {
        port: 4200
    },
    plugins: [
        htmlWebpackPlugin("index", ["main"]),
        htmlWebpackPlugin("payment"),
        htmlWebpackPlugin("product"),
        htmlWebpackPlugin("confirmation"),
        htmlWebpackPlugin("checkout"),
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, "src/images"),
                    to: path.resolve(__dirname, "dist/images")
                }
            ]
        }),
        new MiniCssExtractPlugin({
            filename: fileName("css")
        }),
        new ESLintPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    "css-loader"
                ]
            },
            {
                test: /\.s(a|c)ss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    "css-loader",
                    "sass-loader"
                ]
            },
            {
                test: /\.(jpg|jpeg|svg|gif|png|ico)$/,
                use: ["file-loader"]
            },
            {
                test: /\.(ttf|wof|wof2|eot)$/,
                use: ["file-loader"]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"],
                        plugins: ["@babel/plugin-proposal-class-properties"]
                    }
                }
            }
        ]
    }
};
