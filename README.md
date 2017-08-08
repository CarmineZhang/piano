# shop

> 移动端网上商城

## Build Before

### 安装node

[node](https://nodejs.org/en/)

### 修改为淘宝镜像
``` bash
npm config set registry https://registry.npm.taobao.org 
```
   #### 建议
	 window系统下，直接安装cnpm 
   
   ```bash
   npm install -g cnpm --registry=https://registry.npm.taobao.org 
   ```
   这是淘宝提供的安装工具可以代替npm。如果使用了cnpm，下面的npm install 替换为cnpm install 

## Build Setup
### 所有命令的目录都是当前目录，即package.json的目录

``` bash
# 安装所有的依赖,时间可能稍长。
npm install

# 运行此命令可以本地调试（会自动打开默认的浏览器，建议用chrome）
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
