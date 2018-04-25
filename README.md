# webpack学习性项目
## 初步完成了两个demo
* 前端整合

  + 安装  
  `npm install --save-dev webpack`
`npm install --save-dev webpack-cli`
  + 编译方式：  
  `"scripts": {
    "start": "webpack --config webpack.config.js"
  }`
  + 起步  
   ```  
        mkdir webpack-demo && cd webpack-demo
        npm init -y
        npm install webpack webpack-cli --save-dev
    ```

* 将前端进行编译后的文件，发送到node的express框架
