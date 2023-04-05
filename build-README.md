# Build-README

- author：syf20020816@outlook.com
- docName：routerboot-ui Build-README
- createDate：20230405
- updateDate：20230405
- version：1.0.0
- des-tag：正式版
- email：syf20020816@outlook.com

# 项目构建

## 1. 安装Lerna

```shell
npm install -g lerna
```

## 2.lerna初始化文件夹
```shell
lerna init
```

## 3.配置lerna文件

### lerna.json
```json
{
  "$schema": "node_modules/lerna/schemas/lerna-schema.json",
  "useWorkspaces": true,
  "version": "0.0.0"
}
```
### package.json
```json
{
  "name": "root",
  "private": true,
  "workspaces": [
    "packages/*"
  ],
  "devDependencies": {
    "lerna": "^6.4.0"
  }
}
```
## 4.安装依赖

```shell
npm install
npm install @lerna/pro
```

## 5.生成组件
```shell
lerna create button
```
信息:
```
info cli using local version of lerna
lerna notice cli v6.4.0
package name: (button) @rb-ui/button
version: (0.0.0) 0.0.1
description: rb-button按钮组件
keywords:
homepage:
license: (ISC)
entry point: (lib/button.js)
git repository: (https://gitee.com/giteeforsyf/spring-cloud-formatter.git)
About to write to D:\个人项目\DIY\SpringCloud\RouterBoot-UI\routerboot-ui\packages\button\package.json:

{
  "name": "button",
  "version": "0.0.1",
  "description": "rb-button按钮组件",
  "author": "白嫖圣手fly <2654029407@qq.com>",
  "homepage": "",
  "license": "ISC",
  "main": "lib/button.js",
  "directories": {
    "lib": "lib",
    "test": "__tests__"
  },
  "files": [
    "lib"
  ],
  "publishConfig": {
    "registry": "https://registry.npm.taobao.org/"
  },
  "repository": {
    "type": "git",
    "url": "https://gitee.com/giteeforsyf/spring-cloud-formatter.git"
  },
  "scripts": {
    "test": "node ./__tests__/button.test.js"
  }
}


Is this OK? (yes) yes
```

### 修改组件目录

![image-20230112225704698](.\build-README\imgs\image-20230112225704698.png)

## 6.安装TS构建tsc文件

```shell
npm install typescript
npx tsc --init
```

## 7.修改tsconfig.json
```json
{
  "compilerOptions": {
    "target": "ESNext", //设置打包的目标语法
    "module": "ESNext",//模块转化后的格式
    "esModuleInterop": true,//支持模块化
    "skipLibCheck": true, //跳过类库检测
    "forceConsistentCasingInFileNames": true, //强制区分大小写
    "moduleResolution": "node", //模块解析方式
    "jsx": "preserve", //不转化为jsx
    "declaration": true, //生成声明文件
    "sourceMap": true //设置生成映射文件
  }
}
```

## 8.设置TS的声明文件来对非TS文件进行解析

创建`typings/vue-shim.d.ts`文件

```typescript
/**
 * 声明文件，帮助TS解析vue
 */

declare module "*.vue" {
  //所有的通过ts导出的文件如xxx.vue都会通过这个方法
  import { defineComponent } from "vue";
  const component: ReturnType<typeof defineComponent> & {
    install(app: App): void;
  };
  export default component;
}

```

## 9.安装Vue环境

```shell
npm install vue@latest
```

## 10.构建组件
### button
```vue
<template>
  <button>
    测试
  </button>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'rb-button'
})
</script>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
</script>

<style lang="scss" scoped>
</style>
```
### index.ts
```typescript
/**
 * 导出组件的文件
 */
//导出Button,vue文件类型需要安装
import { App } from "vue";
import Button from "./src/button.vue";

// export const RBButton;
Button.install = (app: App) => {
  //注册组件
  app.component(Button.name, Button);
};

export default Button;

```
## 11.全局导出
构建`rb-ui`包
```shell
lerna create rb-ui
```

![image-20230112225634567](./build-README\imgs\image-20230112225634567.png)

### 创建index.ts

```typescript
import Button from "@rb-ui/button";
import { App } from "vue";

//进行全局注册
const components = [Button];

//全局动态添加组件
const install = (app: App) => {
  components.forEach((component) => {
    app.component(component.name, component);
  });
};
//全局注册: use.(rb-ui)
export default {
  install,
};

```

## 12.装配Webpack

```shell
npm install webpack webpack-cli webpack-dev-server vue-loader@latest @vue/compiler-sfc --save

npm install babel-loader @babel/core @babel/preset-env @babel/preset-typescript babel-plugin-module-resolver url-loader html-webpack-plugin css-loader sass-loader style-loader sass --save
```

![image-20230113012055322](./build-README\imgs\image-20230113012055322.png)

### babel.config.js

```js
// 预设
module.exports = {
  presets: ['@babel/preset-env', '@babel/preset-typescript' ],
  overrides: [
    {
      test: /\.vue$/,
      plugins: ['@babel/transform-typescript']
    }
  ],
  env: {
    utils: {
      plugins: [
        [
          'babel-plugin-module-resolver', //配置正确找到ui模块
          {
            root: 'rb-ui'
          }
        ]
      ]
    }
  }
}

```

### 修改package.json

```json
{
  "name": "root",
  "private": true,
  "workspaces": [
    "packages/*"
  ],
  "devDependencies": {
    "lerna": "^6.4.0"
  },
  "dependencies": {
    "@babel/core": "^7.20.12",
    "@babel/preset-env": "^7.20.2",
    "@babel/preset-typescript": "^7.18.6",
    "@vue/compiler-sfc": "^3.2.45",
    "babel-loader": "^9.1.2",
    "babel-plugin-module-resolver": "^5.0.0",
    "css-loader": "^6.7.3",
    "html-webpack-plugin": "^5.5.0",
    "sass": "^1.57.1",
    "sass-loader": "^13.2.0",
    "style-loader": "^3.3.1",
    "typescript": "^4.9.4",
    "url-loader": "^4.1.1",
    "vue": "^3.2.45",
    "vue-loader": "^17.0.1",
    "webpack": "^5.75.0",
    "webpack-cli": "^5.0.1",
    "webpack-dev-server": "^4.11.1"
  },
  "scripts": {
    "website-dev":"webpack server --config ./test/webpack.config.js"
  }
}

```

## 13.设置运行包

### 创建test包

![image-20230113011859168](./build-README\imgs\image-20230113011859168.png)

### index.html

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <div id="app"></div>
  </body>
</html>

```

### main.ts

```typescript
import { createApp } from "vue";
import App from "./App.vue";
import RBUI from "rb-ui";

const app = createApp(App);
app.use(RBUI);
app.mount("#app");

```

### App.vue

```VUE
<template>
  <div id="app"> test</div>
</template>



<style lang="scss" scoped>
#app {
}
</style>
```

### webpack.config.js

```js
const { VueLoaderPlugin } = require('vue-loader')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
module.exports = {
  mode: 'development',
  devtool: 'source-map',
  entry: path.resolve(__dirname, 'main.ts'), //设置打包入口
  output: {
    path: path.resolve(__dirname, '../website-dist'), //出口
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.vue', '.json'] //设置解析文件的位置
  },
  //设置识别规则
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader'
      },
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.(svg|otf|ttf|woff|eot|gif|png)$/,
        loader: 'url-loader'
      },
      {
        test: /\.(scss|css)$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new HTMLWebpackPlugin({
      template: path.resolve(__dirname, 'index.html')
    })
  ]
}

```

## 14.测试运行UI库

```shell
npm run website-dev
```

```
assets by path *.js 761 KiB
  asset bundle.js 761 KiB [emitted] (name: main) 1 related asset
  asset main.ee7b24d516223213348b.hot-update.js 349 bytes [emitted] [immutable] [hmr] (name: main) 1 related asset
asset index.html 349 bytes [emitted]
asset main.ee7b24d516223213348b.hot-update.json 28 bytes [emitted] [immutable] [hmr]
Entrypoint main 761 KiB (802 KiB) = bundle.js 761 KiB main.ee7b24d516223213348b.hot-update.js 349 bytes 2 auxiliary assets
cached modules 609 KiB [cached] 50 modules
runtime modules 27.3 KiB 13 modules
webpack 5.75.0 compiled successfully in 136 ms
```

## 公共入参(props)

```typescript
//theme:主题色
theme: main, info, success, fail, warn, default, active;
```


# 项目打包

## 1.安装rollup依赖
使用3.0.0以上版本请开启注释增加模块依赖
``` bash
npm install rollup@2.79.1 rollup-plugin-typescript2 @rollup/plugin-node-resolve rollup-plugin-vue -S
```

## 2.打包FOR -> ES6

在`build`目录下创建`rollup.config.bundle.js`文件

```js
import typescript from 'rollup-plugin-typescript2'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import path from 'path'
import { getPackagesSync } from '@lerna/project'
import vue from 'rollup-plugin-vue'

const inputs = getPackagesSync()
  .map(pck => pck.name)
  .filter(name => name.includes('@rb-ui'))

export default {
  input: path.resolve(__dirname, `../packages/rb-ui/index.ts`),
  output: {
    format: 'es',
    file: `lib/index.esm.js`
  },
  plugins: [
    nodeResolve(),
    vue({
      target: 'browser'
    }),
    typescript({
      exclude: ['node_modules', 'website']
    })
  ],
  external(id) {
    return /^vue/.test(id)
  }
}

```

## 3.设置打包命令并打包


在package.json的script下增加

```js
"build:esm-bundle": "rollup -c ./build/rollup.config.bundle.js",
```

```js
  "scripts": {
    "website-dev": "webpack server --config ./test/webpack.config.js",
    "build": "webpack --config ./build/webpack.config.js",
    "build:esm-bundle": "rollup -c ./build/rollup.config.bundle.js",
    "lib": "vue-cli-service build --target lib ./packages/rb-ui/index.ts"
  }
```
进行打包
```bash
npm run build:esm-bundle
```


## 4.生成.d.ts文件

``` bash
npm install -g typescript
npm i install -g dtsmake
npm install tern
//生成
dtsmake -s ./index.esm.js
```
## 5.手动将依赖SCSS放置到打包好的package下

完整lib：

![image-20230209043027239](D:\个人项目\DIY\SpringCloud\RouterBoot-UI\routerboot-ui\build-README\imgs\image-20230209043027239.png)

# 发布NPM

## 1.编写.gitignore

```
node_modules/
build/
null/
test/
```

## 2.设置package.json

```
{
  "name": "routerboot-ui",
  "private": false,
  "version": "0.0.2",
  "description": "RouterBoot UI lib For Vue3(Vue3+TS+Scss)",
  "author": "syf20020816@outlook.com",
  "license": "MIT",
  "main": "lib/index.esm.js",
  "workspaces": [
    "packages/*"
  ],
  "devDependencies": {
    "lerna": "^6.4.0",
    "rollup-plugin-typescript2": "^0.34.1",
    "typescript": "^4.9.5"
  },
  "dependencies": {
    "@babel/core": "^7.20.12",
    "@babel/preset-env": "^7.20.2",
    "@babel/preset-typescript": "^7.18.6",
    "@rollup/plugin-commonjs": "^24.0.1",
    "@rollup/plugin-node-resolve": "^15.0.1",
    "@vue/compiler-sfc": "^3.2.45",
    "babel-loader": "^9.1.2",
    "babel-plugin-module-resolver": "^5.0.0",
    "css-loader": "^6.7.3",
    "html-webpack-plugin": "^5.5.0",
    "rollup": "^2.79.1",
    "rollup-plugin-vue": "^6.0.0",
    "sass": "^1.57.1",
    "sass-loader": "^13.2.0",
    "style-loader": "^3.3.1",
    "tern": "^0.24.3",
    "url-loader": "^4.1.1",
    "vue": "^3.2.45",
    "vue-loader": "^17.0.1",
    "webpack": "^5.75.0",
    "webpack-cli": "^5.0.1",
    "webpack-dev-server": "^4.11.1"
  },
  "scripts": {
    "website-dev": "webpack server --config ./test/webpack.config.js",
    "build": "webpack --config ./build/webpack.config.js",
    "build:esm-bundle": "rollup -c ./build/rollup.config.bundle.js",
    "lib": "vue-cli-service build --target lib ./packages/rb-ui/index.ts"
  }
}

```

## 3.license令牌

https://opensource.org/licenses/MIT

将下面文字复制到LISCENSE中，修改尖括号中的内容（第一个为年份，第二个为作者）

```
MIT License

Copyright <YEAR> <COPYRIGHT HOLDER>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

```

## 4.生成图标

https://shields.io/category/dependencies

![image-20230209044227126](D:\个人项目\DIY\SpringCloud\RouterBoot-UI\routerboot-ui\build-README\imgs\image-20230209044227126.png)

<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="122" height="20" role="img" aria-label="routerboot-ui: 0.0.2"><title>routerboot-ui: 0.0.2</title><linearGradient id="s" x2="0" y2="100%"><stop offset="0" stop-color="#bbb" stop-opacity=".1"/><stop offset="1" stop-opacity=".1"/></linearGradient><clipPath id="r"><rect width="122" height="20" rx="3" fill="#fff"/></clipPath><g clip-path="url(#r)"><rect width="83" height="20" fill="#555"/><rect x="83" width="39" height="20" fill="#fe7d37"/><rect width="122" height="20" fill="url(#s)"/></g><g fill="#fff" text-anchor="middle" font-family="Verdana,Geneva,DejaVu Sans,sans-serif" text-rendering="geometricPrecision" font-size="110"><text aria-hidden="true" x="425" y="150" fill="#010101" fill-opacity=".3" transform="scale(.1)" textLength="730">routerboot-ui</text><text x="425" y="140" transform="scale(.1)" fill="#fff" textLength="730">routerboot-ui</text><text aria-hidden="true" x="1015" y="150" fill="#010101" fill-opacity=".3" transform="scale(.1)" textLength="290">0.0.2</text><text x="1015" y="140" transform="scale(.1)" fill="#fff" textLength="290">0.0.2</text></g><script xmlns=""/></svg>

## 5.登录发布

```bash
npm login
------
npm publish .
```

![image-20230209045145115](D:\个人项目\DIY\SpringCloud\RouterBoot-UI\routerboot-ui\build-README\imgs\image-20230209045145115.png)