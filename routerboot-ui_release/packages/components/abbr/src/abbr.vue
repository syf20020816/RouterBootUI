<template>
  <div :class="[nameBuilder.buildContainer(componentName),nameBuilder.when(componentName,props.size),nameBuilder.when(componentName,props.type)] " :style="textStyle">
    <RBText :font-size="props.fontSize" :type="props.type" :size="props.size">
      <abbr :title="props.origin">{{ props.shot }}</abbr>
    </RBText>
  </div>

</template>

<script lang="ts">
export default {
  name: 'RBAbbr'
}
</script>

<script lang="ts" setup>
import { ref, reactive, computed } from 'vue'
import { nameBuilder } from '../../../utils/index'
import RBText from '../../text/src/text.vue'
const componentName = 'abbr'

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
    default: 'RouterBoot'
  },
  shot: {
    type: String,
    default: 'RB'
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
