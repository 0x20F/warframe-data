const webpack               = require("webpack");
const path                  = require("path");
const html_webpack_plugin   = require("html-webpack-plugin");
const mini_css_plugin       = require("mini-css-extract-plugin");



module.exports = (env, argv) => {

    let dev = argv.mode === "development";

    return {
        entry: path.resolve(__dirname, "src") + "/index.js",

        output: {
            path: path.resolve(__dirname, "public"),
            filename: "bundle.js"
        },

        resolve: {
            extensions: [".jsx", ".js", ".scss", ".html", "*"],
            alias: {
                "@Components": path.resolve(__dirname, "src/app/components"),
                "@Pages": path.resolve(__dirname, "src/app/pages"),
                "@Styles": path.resolve(__dirname, "src/styles"),
                AppRouter$: path.resolve(__dirname, "src/app/AppRouter.jsx") // Bound to change eventually
            }
        },

        devServer: {
            historyApiFallback: true
        },

        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    use: {
                        loader: "babel-loader"
                    }
                },
                {
                    test: /\.html$/,
                    use: {
                        loader: "html-loader"
                    }
                },
                {
                    test: /\.scss$/,
                    use: [
                        "style-loader",
                        mini_css_plugin.loader,
                        "css-loader", 
                        "postcss-loader",
                        "sass-loader"
                    ]
                }
            ]
        },

        plugins: [
            new html_webpack_plugin({
                template: "./src/index.html",
                filename: "index.html"
            }),
            new mini_css_plugin({
                filename: "app.css"
            })
        ]
    }
}