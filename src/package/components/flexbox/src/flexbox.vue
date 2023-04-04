<template>
  <div :class="[nameBuilder.buildContainer(componentName),nameBuilder.when(componentName,props.type)]">
    <dl :class="nameBuilder.buildWrap(componentName,'box')">
      <li :class="nameBuilder.buildWrap('box','item')">
        <slot name="flexItem">
        </slot>
      </li>
    </dl>
  </div>
</template>

<script lang="ts">
export default {
  name: 'RBFlexbox'
}
</script>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import { nameBuilder } from '../../../utils/index'
import { RBFlexboxItem } from '..'

const componentName = 'flexbox'

const props = defineProps({
  type: {
    type: String,
    default: 'primary'
  }
})

onMounted(() => {})
</script>
