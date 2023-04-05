<template>
  <transition name="fade">
    <div :class="[nameBuilder.buildContainer(componentName),nameBuilder.when(componentName,props.type)]">
      <slot></slot>
    </div>
  </transition>
</template>

<script lang="ts">
export default {
  name: 'RBContainer'
}
</script>

<script lang="ts" setup>
import { ref, reactive, PropType, computed, onMounted, onUpdated } from 'vue'
import { nameBuilder } from '../../../utils/index'
const componentName = 'container'

const props = defineProps({
  type: {
    type: String,
    default: 'primary'
  }
})
</script>
