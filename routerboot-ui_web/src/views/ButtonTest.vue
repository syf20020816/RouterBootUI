<template>
  <div id="text-container">
    <div>
      <RBText fontSize="2.5vw" :type="theme">
        Button 按钮
      </RBText>
      <div>
        <RBText :type="theme" fontSize="1.1vw">按钮组件使用方式同原始button按钮</RBText>
      </div>
    </div>

    <div style="margin: 16px 0;">
      <div>
        <RBText fontSize="2vw" :type="theme">
          示例
        </RBText>
      </div>
      <div style="border: 2px dashed #192227; margin: 16px 30px 30px 0;padding: 16px;">
        <RBButton round>测试按钮-test</RBButton>
        <RBButton type="primary">测试按钮-test</RBButton>
        <RBButton type="success">测试按钮-test</RBButton>
        <RBButton round type="warning">测试按钮-test</RBButton>
        <RBButton round type="error">测试按钮-test</RBButton>
        <RBButton type="info">测试按钮-test</RBButton>
        <RBButton type="dark" icon="rb-icon-hezuo">测试按钮-test</RBButton>
        <RBButton type="dark" icon="rb-icon-hezuo"></RBButton>
        <RBButton type="dark" icon="rb-icon-hezuo" round size="large"></RBButton>
        <RBButton type="info" icon="rb-icon-hezuo" circle size="small"></RBButton>
      </div>
      <div style="margin: 16px 30px 30px 0;">
        <RBEditor :render-view="BtnMd" :type="theme"></RBEditor>
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
import BtnMd from '../code/Button.md'
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
    des: '自适应按钮大小(default|large|small)flex根据容器自适应',
    type: 'String',
    able: 'default|large|small',
    default: 'default'
  },
  {
    name: 'icon',
    des: '图标,详情请见RBIcon文档',
    type: 'String',
    able: '~任意RBIcon图标',
    default: '-'
  },
  {
    name: 'round',
    des: '圆角按钮',
    type: 'Boolean',
    able: 'true|false',
    default: 'false'
  },
  {
    name: 'circle',
    des: '在单图标下，会呈现圆形按钮',
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
    name: '默认插槽',
    des: '不含名称直接传入'
  }
])
</script>

<style lang="scss" scoped>
</style>