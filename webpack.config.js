//Two things defined in this file
//1)entry point
//2)where to output the final bundle file

//__dirname --> C:\Users\tench\Desktop\React_Program\Indecision-App2
//path.join(__dirname,'public') --> C:\Users\tench\Desktop\React_Program\Indecision-App2\public

const path = require('path');

//we set module.exports to an object, and we are going to be defining all of the configuration details for our 
//webpack So Web pack is going to grab this file.It is going to run it and it's going to have access to whatever 
//we put on this object.
module.exports = {
    //tells webpack where the main file is
    entry: './src/playground/practice.js',
    output: {
        //the absolute path
        path: path.join(__dirname,'public'),
        filename:'bundle.js'
    },
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_module/
        }, {
            test: /\.s?css$/,
            use: [
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
        }]
    },
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: path.join(__dirname,'public'),
        historyApiFallback:true
    }
};

//loader --> lets you customize the behavior of webpack when it loads a given file (like app.js, utils.js)
//we can do something with that file, like running it through babel