<template>
  <RBCode :type="props.type" :editable="props.editable">
    <component :is="props.renderView"></component>
  </RBCode>
</template>

<script lang="ts">
export default {
  name: 'RBEditor'
}
</script>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import { nameBuilder } from '../../../utils/index'
import { RBCode } from '../../code'

const componentName = 'editor'

const props = defineProps({
  renderView: {
    type: String,
    default: ''
  },
  type: {
    type: String,
    default: 'primary'
  },
  editable: {
    type: Boolean,
    default: false
  }
})
</script>

