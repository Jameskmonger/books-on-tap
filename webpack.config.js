const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const outDir = path.resolve(__dirname, "public");

module.exports = {
    entry: ["./src/index.tsx"],
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: "awesome-typescript-loader",
                exclude: /node_modules/
            }
        ]
    },

    resolve: {
        extensions: [".tsx", ".ts", ".js"]
    },

    output: {
        filename: "bundle.js",
        path: outDir
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            filename: "index.html"
        })
    ],

    devServer: {
        contentBase: outDir,
        compress: true,
        port: 9000
    }
};
