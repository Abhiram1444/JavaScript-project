const path = require("path");

module.exports = {

    mode: "development",

    entry: "./src/task 06-08-2026/index.js",

    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist")
    },

    module: {

        rules: [

            {

                test: /\.js$/,

                exclude: /node_modules/,

                use: {

                    loader: "babel-loader"

                }

            }

        ]

    }

};