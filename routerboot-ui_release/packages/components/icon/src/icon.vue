<template>
  <i :class="['rb-icon',props.icon,nameBuilder.when(componentName,props.size),nameBuilder.when(componentName,props.type)]"></i>
</template>

<script lang="ts">
export default {
  name: 'RBIcon'
}
</script>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import { nameBuilder } from '../../../utils/index'
const componentName = 'icon'

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
  }
})
</script>
