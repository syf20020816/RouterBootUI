<template>
  <div :class="[nameBuilder.buildContainer(componentName),nameBuilder.when(componentName,props.type)]">
    <table cellspacing="0" :class="nameBuilder.buildWrap(componentName,'table')">
      <colgroup>
        <col :span="item.span" v-for="item,index in tableColumnDataList" :key="index" :width="item.width">
      </colgroup>
      <thead :class="nameBuilder.buildWrap(componentName,'header')">
        <tr :class="nameBuilder.build(componentName,'row')">
          <th v-for="hItem,index in tableColumnDataList" :key="index" :class="nameBuilder.build(componentName,'ceil')">
            <RBText :type="props.type">{{ hItem.name }}</RBText>
          </th>
        </tr>
      </thead>
      <tbody :class="nameBuilder.buildWrap(componentName,'body')">
        <tr v-for="vItem,index in props.tableData" :key="index" :class="nameBuilder.build(componentName,'row')">
          <td v-for="kItem,index in tableColumnDataList" :key="index" :class="nameBuilder.build(componentName,'ceil')">
            <RBText :type="props.type" size="default">{{ vItem[kItem.key] }}</RBText>
          </td>
        </tr>
      </tbody>
      <tfoot :class="nameBuilder.buildWrap(componentName,'footer')">
        <slot name="footer"></slot>
      </tfoot>
    </table>
  </div>

  <div :id="tableItemContainerId" ref="tableColumnContainerRef" style="display: none;">
    <slot name="column">

    </slot>
  </div>
</template>

<script lang="ts">
export default {
  name: 'RBTable'
}
</script>

<script lang="ts" setup>
import { ref, reactive, PropType, computed, onMounted, onUpdated, useSlots } from 'vue'
import { nameBuilder, uuidBuilder } from '../../../utils/index'
import { RBText } from '../../text'
import { RBIcon } from '../../icon'
import { buildTableColumn } from './table'

import RBTableItem from '../src/tableItem.vue'

const componentName = 'table'
let slots = useSlots()
let tableItemContainerId = uuidBuilder.generateUUID()
let tableColumnContainerRef = ref(null)
let tableColumnDataList = reactive<Array<any>>([])
let col1 = ref<any>(null)
const props = defineProps({
  type: {
    type: String,
    default: 'primary'
  },

  tableData: {
    type: Array<any>,
    default: []
  }
})

const getTableColumnSlot = () => {
  //获取slot中的组件
  if (slots.column) {
    let targetList: any = slots.column()
    for (const target of targetList) {
      tableColumnDataList.push(target.props)
    }
  }
}

onMounted(() => {
  getTableColumnSlot()
})
</script>
