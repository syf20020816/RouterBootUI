# 如何配置Editor

## 安装md解析插件
``` shell
npm install -D vite-plugin-md
```
若遇到不能解析依赖树 ，需要先修复上面依赖关系冲突或者重新执行一下npm install命令
后面跟–-force或者–-legacy-peer-deps去接受不正确的(并可能被破坏的)依赖解析。
根据它的建议，我们去执行`npm install -D vite-plugin-md --force`或者`npm install -D vite-plugin-md --legacy-peer-deps`

## 配置tsconfig.json
目的是为了使其可以解析.md文件,include节点下增加`"src/**/*.md"`
```json
"include": ["src/**/*.ts", "src/**/*.d.ts", "src/**/*.tsx", "src/**/*.vue","src/**/*.md"],
```
## 配置vite.config.js
这里的目的是为了加载vite-plugin-md插件
``` js
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import Markdown from "vite-plugin-md";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      include: [/\.vue$/, /\.md$/],
    }),
    Markdown({
      builders: [],
    }),
  ],
  resolve: {
    alias: {
      "@": "/src/",
      vue: "vue/dist/vue.esm-bundler.js",
    },
  },
});

```
## 使用

使用起来十分简单直接使用RBEditor然后设置渲染对象`:render-view="Md"`即可对md文件读取渲染
```html
<template>
  <RBEditor :render-view="Md" :type="theme"></RBEditor>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import Md from '../code/README.md'
</script>
```