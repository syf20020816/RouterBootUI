<template>
  <div :class="[nameBuilder.buildContainer(componentName),nameBuilder.when(componentName,props.type)]">
    <form :oninput="calcDo" :class="nameBuilder.buildWrap(componentName,'calc')">
      <input v-for="item,index in props.calcNum" :key="index" type="text" :id="props.name + index" :value="props.initValue" :class="nameBuilder.build(componentName,'input')">
      <div :class="nameBuilder.buildWrap(componentName,'eq')">
        <RBIcon :type="props.type" icon="rb-icon-vector"></RBIcon>
      </div>
      <output name="res" :for="forItem" :class="nameBuilder.build(componentName,'out')"></output>
    </form>
  </div>
</template>

<script lang="ts">
export default {
  name: 'RBCalc'
}
</script>

<script lang="ts" setup>
import { ref, reactive, PropType, computed, onMounted, onUpdated } from 'vue'
import { nameBuilder } from '../../../utils/index'
import { RBText } from '../../text'
import { RBIcon } from '../../icon'
const componentName = 'calc'

const props = defineProps({
  type: {
    type: String,
    default: 'primary'
  },
  name: {
    type: String,
    default: 'rbCalc'
  },
  calcNum: {
    type: Number,
    default: 2
  },
  initValue: {
    type: Number,
    default: 0
  },
  doCalc: {
    type: String,
    default: 'res.value=parseInt(rbCalc0.value)+parseInt(rbCalc1.value)'
  }
})

let forItem = computed(() => {
  let { calcNum, name } = props
  let buildName: string = ''
  for (let i = 0; i < calcNum; i++) {
    i == calcNum - 1 ? (buildName = name + i) : (buildName = name + i + ' ')
  }

  return buildName
})

let calcDo = computed(() => {
  let { doCalc } = props

  return doCalc
})
</script>
