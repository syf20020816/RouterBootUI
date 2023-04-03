<template>
  <div id="text-container">
    <div>
      <RBText fontSize="2.5vw">
        Calc 计算
      </RBText>
      <div>
        <RBText type="primary" fontSize="1.1vw">一个看似简易的计算小组件，但是只要你设置的公式正确，他将无所不能</RBText>
      </div>
    </div>

    <div style="margin: 16px 0;">
      <div>
        <RBText fontSize="2vw">
          示例
        </RBText>
      </div>
      <div style="border: 2px dashed #192227; margin: 16px 30px 30px 0;padding: 16px;">
        <RBCalc :calcNum="3" :initValue="2" name="a" doCalc="res.value=parseInt(a0.value)+parseInt(a1.value)+parseInt(a2.value)"></RBCalc>
      </div>
      <div style="margin: 16px 30px 30px 0;">
        <RBEditor :render-view="TextMd"></RBEditor>
      </div>
    </div>
    <div>
      <div>
        <RBText fontSize="2vw">
          Text-API
        </RBText>
      </div>
      <div>
        <RBText fontSize="1.5vw">
          Text-Attributes 属性
        </RBText>
        <div>
          <RBTable :tableData="AttrData">
            <template #column>
              <RBTableItem key="name" name="属性名" width="150px"></RBTableItem>
              <RBTableItem key="des" name="说明" width="200px"></RBTableItem>
              <RBTableItem key="type" name="类型" width="100px"></RBTableItem>
              <RBTableItem key="able" name="可选值" width="150px"></RBTableItem>
              <RBTableItem key="default" name="默认值" width="100px"></RBTableItem>
            </template>
          </RBTable>
        </div>
      </div>
      <div>
        <RBText fontSize="1.5vw">
          Text-Exposes 暴露事件
        </RBText>
        <div>
          <div>
            <RBTable :tableData="ExpData">
              <template #column>
                <RBTableItem key="name" name="事件名" width="150px"></RBTableItem>
                <RBTableItem key="des" name="说明" width="200px"></RBTableItem>
              </template>
            </RBTable>
          </div>
        </div>
      </div>
      <div>
        <RBText fontSize="1.5vw">
          Text-Slots 插槽
        </RBText>
        <div>
          <div>
            <RBTable :tableData="SlotData">
              <template #column>
                <RBTableItem key="name" name="插槽名" width="150px"></RBTableItem>
                <RBTableItem key="des" name="说明" width="200px"></RBTableItem>
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
  name: 'CalcTest'
}
</script>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import TextMd from '../code/Text.md'

const AttrData = reactive([
  {
    name: '',
    des: '',
    type: '',
    able: '',
    default: ''
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