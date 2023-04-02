<template>
  <div id="app">
    <div style="width:90px;height: 100vh;">
      <RBNav navType="iconOnly" :navNodeList="navList" @click="toNavPage">
        <template #navBox>
          <RBFlexbox>
            <template #flexItem>
              <RBFlexboxItem :name="navList[0].name" content="RouterBoot-UI的首页"></RBFlexboxItem>
              <RBFlexboxItem :name="navList[1].name" content="你可以在这里知道如何安装"></RBFlexboxItem>
              <RBFlexboxItem :name="navList[2].name">
                <template #content>
                  <ol>
                    <li v-for="item,index in componentList" :key="index" @click="toPage(item.uri)">
                      {{ item.name }}
                    </li>
                  </ol>
                </template>
              </RBFlexboxItem>
            </template>
          </RBFlexbox>
        </template>
      </RBNav>

    </div>
    <div style="width:calc(100% - 90px);height: 95vh;padding: 2vh 0;overflow: scroll;">
      <router-view></router-view>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'App'
}
</script>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'
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
  }
])

const toPage = (page: string) => {
  router.push({ path: page })
}

const toNavPage = (item: any) => {
  console.log(item)
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