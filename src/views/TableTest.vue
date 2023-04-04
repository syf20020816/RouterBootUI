<template>
  <div id="text-container">
    <div>
      <RBText fontSize="2.5vw" :type="theme">
        Table 表格
      </RBText>
      <div>
        <RBText :type="theme" fontSize="1.1vw">基础的Table表格组件自适应大小变化,没有华丽的外表,若你追求更好的选择请访问: <a href="https://element-plus.gitee.io/zh-CN/component/table.html" target="_blank">ElementPlus-Table</a></RBText>
      </div>
    </div>

    <div style="margin: 16px 0;">
      <div>
        <RBText fontSize="2vw" :type="theme">
          示例
        </RBText>
      </div>
      <div style="border: 2px dashed #192227; margin: 16px 30px 30px 0;padding: 16px;display: flex; align-items: center;justify-content: space-evenly;flex-wrap: wrap;">
        <RBTable :tableData="tData">
          <template #column>
            <RBTableItem key="id" name="id1" width="150px"></RBTableItem>
            <RBTableItem key="age" name="年龄" width="160px"></RBTableItem>
            <RBTableItem key="height" name="height" width="100px"></RBTableItem>
          </template>
        </RBTable>
      </div>

      <div style="margin: 16px 30px 30px 0;">
        <RBEditor :render-view="Md" :type="theme"></RBEditor>
      </div>
    </div>
    <div>
      <div>
        <RBText fontSize="2vw" :type="theme">
          Table API
        </RBText>
      </div>
      <div>
        <RBText fontSize="1.5vw" :type="theme">
          Table Attributes 属性
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
          Table Exposes 暴露事件
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
          Table Slots 插槽
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
    <div>
      <div>
        <RBText fontSize="2vw" :type="theme">
          TableItem API
        </RBText>
      </div>
      <div>
        <RBText fontSize="1.5vw" :type="theme">
          TableItem Attributes 属性
        </RBText>
        <div>
          <RBTable :tableData="AttrData2" :type="theme">
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
          TableItem Exposes 暴露事件
        </RBText>
        <div>
          <div>
            <RBTable :tableData="ExpData2" :type="theme">
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
          TableItem Slots 插槽
        </RBText>
        <div>
          <div>
            <RBTable :tableData="SlotData2" :type="theme">
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
import Md from '../code/Table.md'
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
    name: 'tableData',
    des: '表格数据',
    type: 'Array<any>',
    able: '~',
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
    name: 'footer',
    des: 'tfooter插槽,或许你想在表格底部加点什么'
  },
  {
    name: 'column',
    des: '列插槽，想要渲染什么数据，就增加一个列==>RBTableItem'
  }
])

const AttrData2 = reactive([
  {
    name: 'col',
    des: '列的匹配键',
    type: 'String',
    able: '~',
    default: ''
  },
  {
    name: 'name',
    des: '表格列头部显示内容',
    type: 'String',
    able: '~',
    default: 'head'
  },
  {
    name: 'width',
    des: '列宽',
    type: 'String',
    able: '~',
    default: '120px'
  },
  {
    name: 'span',
    des: '跨度',
    type: 'Number',
    able: '~',
    default: '1'
  }
])
const ExpData2 = reactive([
  {
    name: '',
    des: ''
  }
])
const SlotData2 = reactive([
  {
    name: '',
    des: ''
  }
])

const tData = reactive([
  {
    id: 1,
    age: 16,
    height: 169.5,
    weight: 70.5
  },
  {
    id: 2,
    age: 21,
    height: 172.69,
    weight: 70.5
  }
])
</script>

<style lang="scss" scoped>
</style>