<template>
  <div id="text-container">
    <div>
      <RBText fontSize="2.5vw" :type="theme">
        Text 文字
      </RBText>
      <div>
        <RBText :type="theme" fontSize="1.1vw">在RouterBoot-UI中文字主使用Aa 厚底黑字体,副用Yulong字体,允许任何个人与企业免费使用，包括全媒体商用用途，无需取得任
          何书面授权,但禁止任何违法用途</RBText>
      </div>
    </div>

    <div style="margin: 16px 0;">
      <div>
        <RBText fontSize="2vw" :type="theme">
          示例
        </RBText>
      </div>
      <div style="border: 2px dashed #192227; margin: 16px 30px 30px 0;padding: 16px;">
        <div>
          <RBText type="success">文字示例-success</RBText>
        </div>
        <div>
          <RBText type="error">文字示例-error</RBText>
        </div>
        <div>
          <RBText type="warning">文字示例-warning</RBText>
        </div>
        <div>
          <RBText type="info">文字示例-info</RBText>
        </div>
        <div>
          <RBText type="primary" size="small">文字示例-primary-small</RBText>
        </div>
        <div>
          <RBText type="success" size="large">文字示例-success-large</RBText>
        </div>
      </div>
      <div style="margin: 16px 30px 30px 0;">
        <RBEditor :render-view="TextMd" :type="theme"></RBEditor>
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
  name: 'TextTest'
}
</script>

<script lang="ts" setup>
import { ref, reactive, computed } from 'vue'
import TextMd from '../code/Text.md'
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
    name: '默认插槽',
    des: '不含名称直接传入'
  }
])
</script>

<style lang="scss" scoped>
</style>