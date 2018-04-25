const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath:'/'
  },
  //webpack-dev-server的配置信息，以下配置是默认选项
  devServer: {
     contentBase: './dist'
   },
   plugins: [
   		//在dist下，将自动生成index.html  
   		new HtmlWebpackPlugin(
   			{  	title: 'Output Management',//指定template时title将失效
   				template: './src/index.html'
   			}
   		)
   ],
   //各种加载器(json数据可以webpack核心程序加载)
   module:{
   		rules:[	
	   		{test:/\.css$/,use:['style-loader','css-loader']},
	   		{test:/\.(jpg|jpeg|gif|)$/,use:['file-loader']}	
   		]
   }
};