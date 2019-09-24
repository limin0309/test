let path=require('path');
let HtmlWebpackPlugin=require('html-webpack-plugin');
module.exports={
    // 入口和出口
    entry:'./src/main.js',
    output:{
        filename:'bundle.js',
        path:path.resolve('dist'),// path是绝对路径
    },
    module:{
        rules:[
            {test:/\.js$/,use:'babel-loader',exclude:/node_modules/},
            {test:/\.less$/,use:['style-loader','css-loader','less-loader']},   // 解析是从后往前解析的
            {test:/\.(jpg|png|gif)$/,use:'url-loader'}
        ]
    },
    devtool:'dource-map',// 可以映射出对应的源码位置
    plugins:[
        new HtmlWebpackPlugin({
            template:'./src/index.html' // 解析index.html 
        })
    ]

}