<template>
  <div id="text-container">
    <div>
      <RBText fontSize="2.5vw" :type="theme">
        Abbr 缩写
      </RBText>
      <div>
        <RBText type="primary" fontSize="1.1vw">特长的内容可以应用一下缩写哦</RBText>
      </div>
    </div>

    <div style="margin: 16px 0;">
      <div>
        <RBText fontSize="2vw" :type="theme">
          示例
        </RBText>
      </div>
      <div style="border: 2px dashed #192227; margin: 16px 30px 30px 0;padding: 16px;display: flex; align-items: center;justify-content: space-evenly;flex-wrap: wrap;">
        <RBAbbr></RBAbbr>
        <RBAbbr origin="TypeScript" shot="TS" size="default"></RBAbbr>
        <RBAbbr origin="TypeScript" shot="TS" fontSize="20px"></RBAbbr>
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
import Md from '../code/Abbr.md'
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
    name: 'size',
    des: '自适应字体大小(default|large|small)flex根据容器自适应',
    type: 'String',
    able: 'default|large|small',
    default: 'default'
  },
  {
    name: 'fontSize',
    des: '字体大小',
    type: 'String',
    able: '~任意px,vh,vw,em,rem单位字体大小',
    default: '-'
  },
  {
    name: 'origin',
    des: '原始语句',
    type: 'String',
    able: '~',
    default: 'RouterBoot'
  },
  {
    name: 'shot',
    des: '简化语句',
    type: 'String',
    able: '~',
    default: 'RB'
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