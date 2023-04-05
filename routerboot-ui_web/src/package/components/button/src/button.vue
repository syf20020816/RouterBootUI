<template>

  <button :class="[nameBuilder.buildContainer(componentName),nameBuilder.when(componentName,props.type),nameBuilder.when(componentName,props.size),nameBuilder.when(componentName,btnRound),nameBuilder.when(componentName,btnCircle)]">
    <RBIcon :size="props.size" :type="props.type" :icon="props.icon" v-if="props.icon!=''"></RBIcon>
    <RBText :size="props.size" :type="props.type">
      <slot></slot>
    </RBText>
  </button>

</template>

<script lang="ts">
export default {
  name: 'RBButton'
}
</script>

<script lang="ts" setup>
import { ref, reactive, computed } from 'vue'
import { nameBuilder } from '../../../utils/index'
import RBText from '../../text/src/text.vue'
import RBIcon from '../../icon/src/icon.vue'
const componentName = 'button'

const props = defineProps({
  size: {
    type: String,
    default: 'default'
  },
  type: {
    type: String,
    default: 'primary'
  },
  icon: {
    type: String,
    default: ''
  },
  round: {
    type: Boolean,
    default: false
  },
  circle: {
    type: Boolean,
    default: false
  }
})
/**
 * 按钮为圆角
 */
let btnRound = computed(() => {
  const { round } = props
  if (round) {
    return 'round'
  }
  return ''
})
/**
 * 按钮为圆形
 */
let btnCircle = computed(() => {
  const { circle } = props
  if (circle) {
    return 'circle'
  }
  return ''
})
</script>
