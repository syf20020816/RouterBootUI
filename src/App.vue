<template>
  <div id="app">
    <RBContainer :type="theme">

      <div style="width:90px;height: 100vh;">
        <RBNav :type="theme" navType="iconOnly" :navNodeList="navList" @click="toNavPage">
          <template #navBox>
            <RBFlexbox :type="theme">
              <template #flexItem>
                <RBFlexboxItem :type="theme" :name="navList[0].name" content="RouterBoot-UI的首页"></RBFlexboxItem>
                <RBFlexboxItem :type="theme" :name="navList[1].name" content="你可以在这里知道如何安装"></RBFlexboxItem>
                <RBFlexboxItem :type="theme" :name="navList[2].name">
                  <template #content>
                    <ol>
                      <li v-for="item,index in componentList" :key="index" @click="toPage(item.uri)">
                        <RBText :type="theme">{{ item.name }}</RBText>
                      </li>
                    </ol>
                  </template>
                </RBFlexboxItem>
                <RBFlexboxItem :type="theme" :name="navList[3].name" content="">
                  <template #content>
                    <RBButton :type="theme" @click="store.changeTheme()">点一下试试</RBButton>
                  </template>
                </RBFlexboxItem>
                <RBFlexboxItem :type="theme" :name="navList[4].name" content="去GitHub仓库看看源码-->"></RBFlexboxItem>
              </template>
            </RBFlexbox>
          </template>
        </RBNav>

      </div>
      <div style="width:calc(100% - 90px);height: 95vh;padding: 2vh 0;overflow: scroll;">
        <router-view></router-view>
      </div>

    </RBContainer>
  </div>
</template>

<script lang="ts">
export default {
  name: 'App'
}
</script>

<script lang="ts" setup>
import { ref, reactive, computed } from 'vue'
import { useRouter } from 'vue-router'
import { indexStore } from './store/indexPinia'
const store = indexStore()
let theme = computed(() => {
  return store.theme[store.current]
})
const router = useRouter()
const navList = reactive([
  {
    id: 0,
    name: 'index-首页',
    icon: 'rb-icon-home'
  },
  {
    id: 1,
    name: 'install-安装',
    icon: 'rb-icon-inbox-in '
  },
  {
    id: 2,
    name: 'component-组件',
    icon: 'rb-icon-layer-group '
  },
  {
    id: 3,
    name: '一键更改主题色',
    icon: 'rb-icon-process '
  },
  {
    id: 4,
    name: 'Github!',
    icon: 'rb-icon-icon-test76  '
  }
])
const componentList = reactive([
  {
    name: 'text-文本',
    uri: '/text'
  },
  {
    name: 'icon-图标',
    uri: '/icon'
  },
  {
    name: 'button-按钮',
    uri: '/button'
  },
  {
    name: 'weather-天气',
    uri: '/weather'
  },
  {
    name: 'introduction-介绍卡片',
    uri: '/intro'
  },
  {
    name: 'nav-导航栏',
    uri: '/nav'
  },
  {
    name: 'clock-时间',
    uri: '/clock'
  },
  {
    name: 'flexbox-伸缩盒',
    uri: '/flexbox'
  },
  {
    name: 'code-代码',
    uri: '/code'
  },
  {
    name: 'editor-编辑器(code增强)',
    uri: '/editor'
  },
  {
    name: 'table-表格',
    uri: '/table'
  },
  {
    name: 'calc-计算',
    uri: '/calc'
  },
  {
    name: 'explain-注明',
    uri: '/explain'
  },
  {
    name: 'container-容器',
    uri: '/container'
  },
  {
    name: 'abbr-缩写',
    uri: '/abbr'
  }
])

const toPage = (page: string) => {
  router.push({ path: page })
}

const toNavPage = (item: any) => {
  switch (item.id) {
    case 0:
      toPage('/')
      break
    case 3:
      store.changeTheme()
      break
    default:
      break
  }
}
</script>

<style lang="scss" scoped>
#app {
  height: 100vh;
  width: 100vw;
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>