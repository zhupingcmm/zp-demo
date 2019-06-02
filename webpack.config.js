let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports={
    entry: './src/index.js',
    output: {
        path:path.resolve(__dirname,'dist'),
        filename: "bundle.js"
    },
    devtool: "inline-source-map",
    mode: "development",
    devServer: {
        port:4000,
        open:true,
        historyApiFallback: true,
        proxy:{
            '/api/todo':'http://localhost:5000/'
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            filename: "index.html"
        })
    ],
    module: {
        rules: [{
            test:/\.js$/,
            exclude: /node_modules/,
            use:{
                loader: 'babel-loader',
                query: {
                    plugins: ["@babel/plugin-proposal-class-properties"],
                    presets:["@babel/react" ,
                        "@babel/env" , ],
                }
            },
        }]
    },

};
