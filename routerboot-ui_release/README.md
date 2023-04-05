# README

<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="122" height="20" role="img" aria-label="routerboot-ui: 1.0.0"><title>routerboot-ui: 1.0.0</title><linearGradient id="s" x2="0" y2="100%"><stop offset="0" stop-color="#bbb" stop-opacity=".1"/><stop offset="1" stop-opacity=".1"/></linearGradient><clipPath id="r"><rect width="122" height="20" rx="3" fill="#fff"/></clipPath><g clip-path="url(#r)"><rect width="83" height="20" fill="#555"/><rect x="83" width="39" height="20" fill="#fe7d37"/><rect width="122" height="20" fill="url(#s)"/></g><g fill="#fff" text-anchor="middle" font-family="Verdana,Geneva,DejaVu Sans,sans-serif" text-rendering="geometricPrecision" font-size="110"><text aria-hidden="true" x="425" y="150" fill="#010101" fill-opacity=".3" transform="scale(.1)" textLength="730">routerboot-ui</text><text x="425" y="140" transform="scale(.1)" fill="#fff" textLength="730">routerboot-ui</text><text aria-hidden="true" x="1015" y="150" fill="#010101" fill-opacity=".3" transform="scale(.1)" textLength="290">1.0.0</text><text x="1015" y="140" transform="scale(.1)" fill="#fff" textLength="290">1.0.0</text></g><script xmlns=""/></svg>

- author：syf20020816@outlook.com
- docName：routerboot-ui README
- createDate：20230405
- updateDate：20230405
- version：1.0.0
- des-tag：正式版
- email：syf20020816@outlook.com

## 版本更新说明(update introduction)

| 版本(version)         | 1.0.0        |
| --------------------- | ------------ |
| 版本说明(version tag) | 正式版 |
| 更新时间(update date) | 20230405    |
| 技术(technology)      | Vue3+TS+SCSS+Vite |

更新点(update points)：



## 安装(install)

### npm 安装（npm install）

```bash
npm i routerboot-ui
```

## 使用(use)

在`main.ts`下导入（import in `main.ts`）

```typescript
import { createApp } from "vue";
import App from "./App.vue";
//import routerboot-ui
import RouterBootUI from "routerboot-ui";
//import routerboot-ui style file
import "routerboot-ui/lib/packages/theme-chalk/index.scss";
//create app--------------------
const app = createApp(App);
//app use--------------------
app.use(RouterBootUI);
app.mount("#app");
```

## QuickStart

``` html
<template>
  <div id="index">
    <RBIcon icon="rb-icon-hezuo"></RBIcon>
    <RBIcon icon="rb-icon-exchange"></RBIcon>
    <RBButton>test</RBButton>
    
  </div>
</template>
```

##  证书(license)

MIT

# 主题切换（change theme）

我们当前支持`'primary,success,info,warning,error,dark'`这6种系统内置主题，所有组件默认采用`primary`黑暗主题色，但使用者也可以直接使用type属性直接进行指定

## 指定主题色

如下，我们在按钮组件中使用type属性指定主题为`dark`主题

```html
<RBButton type="dark">test</RBButton>
```

## 动态主题色

由于内置6种主题色，我们可以使用一个变量绑定主题，通过修改变量方式进行切换主题色，实现动态主题
### vue

```html
<RBButton :type="theme" @click="store.changeTheme()">点一下试试</RBButton>
<script lang="ts" setup>
import { ref, reactive, computed } from 'vue'
import { indexStore } from './store/indexPinia'

const store = indexStore()
let theme = computed(() => {
  return store.theme[store.current]
})

</script>
```
### pinia
```typescript
import { defineStore } from "pinia";

export const indexStore = defineStore("index", {
  state: () => {
    return {
      current: 0,
      theme: ["primary", "info", "success", "warning", "error", "dark"],
    };
  },

  actions: {
    changeTheme() {
      console.log(this.current);
      if (this.current == 5) {
        this.current = 0;
      } else {
        this.current++;
      }
    },
  },
});

```

## 自定义主题色

编写一个global.scss,然后导入main.ts
```scss
/* 只需要重写你需要的即可 */
@forward 'routerboot-ui/theme-chalk/src/common/var.scss' with (
  $colors: (
    'primary': #49c149
    'info': #49c149
  ),
);

```