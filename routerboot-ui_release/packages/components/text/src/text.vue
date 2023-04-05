<template>
  <div :class="[nameBuilder.buildContainer(componentName),nameBuilder.when(componentName,props.size),nameBuilder.when(componentName,props.type)] " :style="textStyle">
    <slot></slot>
  </div>
</template>

<script lang="ts">
export default {
  name: 'RBText'
}
</script>

<script lang="ts" setup>
import { ref, reactive, computed } from 'vue'
import { nameBuilder } from '../../../utils/index'
const componentName = 'text'

const props = defineProps({
  size: {
    type: String,
    default: 'default'
  },
  type: {
    type: String,
    default: 'primary'
  },
  fontSize: {
    type: String,
    default: ''
  }
})

const textStyle = computed(() => {
  const { fontSize } = props
  let fontUnit = ['px', 'vh', 'vw', 'em', 'rem']
  if (fontSize != '') {
    let useFont = false
    for (const unit of fontSize) {
      if (fontSize.endsWith(unit)) {
        useFont = true
      }
    }
    if (useFont) {
      return {
        fontSize: fontSize
      }
    }
  }
  return ''
})
</script>
