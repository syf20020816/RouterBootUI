<template>
  <div id="text-container">
    <div>
      <RBText fontSize="2.5vw" :type="theme">
        Editor 代码编辑器
      </RBText>
      <div>
        <RBText :type="theme" fontSize="1.1vw">RBEditor是对code组件的增强使其可以渲染Markdown,内部使用的是动态组件component,或许甚至可以渲染其他类型?没错vue,ts,js,只要是能够通过编译的都可以渲染,不过可能会在样式上有些许问题,这取决于样式层级,目前看来若你想用这种方式渲染vue/html/等需要将样式暴露于最外层,封装过的RouterBoot组件为什么不受影响?这是因为本来在theme-chalk中就将样式暴露在最外层了</RBText>
      </div>
    </div>

    <div style="margin: 16px 0;">
      <div>
        <RBText fontSize="2vw" :type="theme">
          示例
        </RBText>
      </div>
      <div style="border: 2px dashed #192227; margin: 16px 30px 30px 0;padding: 16px;display: flex; align-items: center;justify-content: space-evenly;flex-wrap: wrap;">
        <RBEditor :render-view="Index" :type="theme"></RBEditor>
      </div>

      <div style="margin: 16px 30px 30px 0;">
        <RBEditor :render-view="Md" :type="theme"></RBEditor>
      </div>
    </div>
    <div>
      <div>
        <RBText fontSize="2vw" :type="theme">
          API
        </RBText>
      </div>
      <div>
        <RBText fontSize="1.5vw" :type="theme">
          Attributes 属性
        </RBText>
        <div>
          <RBTable :tableData="AttrData" :type="theme">
            <template #column>
              <RBTableItem key="name" name="属性名" width="150px"></RBTableItem>
              <RBTableItem key="des" name="说明" width="460px"></RBTableItem>
              <RBTableItem key="type" name="类型" width="100px"></RBTableItem>
              <RBTableItem key="able" name="可选值" width="200px"></RBTableItem>
              <RBTableItem key="default" name="默认值" width="100px"></RBTableItem>
            </template>
          </RBTable>
        </div>
      </div>
      <div>
        <RBText fontSize="1.5vw" :type="theme">
          Exposes 暴露事件
        </RBText>
        <div>
          <div>
            <RBTable :tableData="ExpData" :type="theme">
              <template #column>
                <RBTableItem key="name" name="事件名" width="150px"></RBTableItem>
                <RBTableItem key="des" name="说明" width="460px"></RBTableItem>
              </template>
            </RBTable>
          </div>
        </div>
      </div>
      <div>
        <RBText fontSize="1.5vw" :type="theme">
          Slots 插槽
        </RBText>
        <div>
          <div>
            <RBTable :tableData="SlotData" :type="theme">
              <template #column>
                <RBTableItem key="name" name="插槽名" width="150px"></RBTableItem>
                <RBTableItem key="des" name="说明" width="460px"></RBTableItem>
              </template>
            </RBTable>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script lang="ts">
export default {
  name: 'ButtonTest'
}
</script>

<script lang="ts" setup>
import { ref, reactive, computed } from 'vue'
import Index from './Index.vue'
import Md from '../code/Editor.md'
import { indexStore } from '../store/indexPinia'
const store = indexStore()
let theme = computed(() => {
  return store.theme[store.current]
})
const AttrData = reactive([
  {
    name: 'type',
    des: '主题类型(primary|success|warning|error|info|dark)',
    type: 'String',
    able: 'primary|success|warning|error|info|dark',
    default: 'primary'
  },
  {
    name: 'renderView',
    des: '渲染对象,或许甚至可以渲染其他类型?没错vue,ts,js,只要是能够通过Import编译的都可以渲染',
    type: 'String',
    able: '~',
    default: '-'
  },
  {
    name: 'editable',
    des: '是否可编辑',
    type: 'Boolean',
    able: 'true|false',
    default: 'false'
  }
])
const ExpData = reactive([
  {
    name: '',
    des: ''
  }
])
const SlotData = reactive([
  {
    name: '',
    des: ''
  }
])
</script>

<style lang="scss" scoped>
</style>