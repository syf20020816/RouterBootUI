<template>
  <div :class="[nameBuilder.buildContainer(componentName),nameBuilder.when(componentName,props.size),nameBuilder.when(componentName,props.type)] " :style="explainStyle">
    <ruby>
      <RBText :type="props.type" :fontSize="props.fontSize" :size="props.size">{{ props.origin }}</RBText>
      <rp>(</rp>
      <rt>
        <RBText :type="props.type" :fontSize="props.fontSize" :size="props.size" style="transform: scale(0.75);">{{ props.explain }}</RBText>
      </rt>
      <rp>)</rp>
    </ruby>
  </div>
</template>

<script lang="ts">
export default {
  name: 'RBExplain'
}
</script>

<script lang="ts" setup>
import { ref, reactive, computed } from 'vue'
import { nameBuilder } from '../../../utils/index'
import { RBText } from '../../text'

const componentName = 'explain'

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
  },
  origin: {
    type: String,
    default: 'let us code'
  },
  explain: { type: String, default: '让我们码起来' }
})

const explainStyle = computed(() => {
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

