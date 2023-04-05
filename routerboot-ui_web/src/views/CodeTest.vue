<template>
  <div id="text-container">
    <div>
      <RBText fontSize="2.5vw" :type="theme">
        Code 代码
      </RBText>
      <div>
        <RBText :type="theme" fontSize="1.1vw">代码组件通过插槽您可以对他进行增强，本组件库中RBEditor就是对code的增强使其可以渲染Markdown</RBText>
      </div>
    </div>

    <div style="margin: 16px 0;">
      <div>
        <RBText fontSize="2vw" :type="theme">
          示例
        </RBText>
      </div>
      <div style="border: 2px dashed #192227; margin: 16px 30px 30px 0;padding: 16px;display: flex; align-items: center;justify-content: space-evenly;flex-wrap: wrap;">
        <div style="height: 460px; width: 600px;margin: 20px;">
          <RBCode></RBCode>
        </div>
        <div style="height: 460px; width: 600px;margin: 20px;">
          <RBCode type="success"></RBCode>
        </div>
        <div style="height: 460px; width: 600px;margin: 20px;">
          <RBCode type="info"></RBCode>
        </div>
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
import Md from '../code/Code.md'
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
    name: 'code',
    des: '默认显示的代码',
    type: 'String',
    able: '~',
    default: 'Routerboot-ui Code Component'
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
    name: 'innerCode',
    des: '通过Ref获取暴露出去的code内容'
  }
])
const SlotData = reactive([
  {
    name: '默认插槽',
    des: '通过默认插槽尝试对其进行增强'
  }
])
</script>

<style lang="scss" scoped>
</style>