<template>
  <div id="text-container">
    <div>
      <RBText fontSize="2.5vw" :type="theme">
        Calc 计算
      </RBText>
      <div>
        <RBText type="primary" fontSize="1.1vw">一个看似简易的计算小组件，但是只要你设置的公式正确，他将无所不能</RBText>
      </div>
    </div>

    <div style="margin: 16px 0;">
      <div>
        <RBText fontSize="2vw" :type="theme">
          示例
        </RBText>
      </div>
      <div style="border: 2px dashed #192227; margin: 16px 30px 30px 0;padding: 16px;display: flex; align-items: center;justify-content: space-evenly;flex-wrap: wrap;">
        <RBCalc :calcNum="3" :initValue="0" name="a" doCalc="res.value=parseInt(a0.value)-parseInt(a1.value)+parseInt(a2.value)"></RBCalc>
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
import Md from '../code/Calc.md'
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
    name: 'name',
    des: '计算组件名字每个组件都应该有一个自己的名字，通过名字对计算公式进行编写',
    type: 'String',
    able: '~',
    default: 'rbCalc'
  },
  {
    name: 'calcNum',
    des: '参与计算的值的个数',
    type: 'Number',
    able: '~',
    default: '2'
  },
  {
    name: 'initValue',
    des: '初始每个参与计算的值的值',
    type: 'Number',
    able: '~',
    default: '0'
  },
  {
    name: 'doCalc',
    des: '进行运算的公式,通过合理的公式,他将变得强大,res是结果的名字,而前面设置的name就是下面的计算值的变量名,完整变量名则是name+索引',
    type: 'String',
    able: '~',
    default: 'res.value=parseInt(rbCalc0.value)+parseInt(rbCalc1.value)'
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