<template>
  <div :class="[nameBuilder.buildContainer(componentName),nameBuilder.when(componentName,props.type)]">
    <div :class="nameBuilder.buildWrap('item','header')" @click="openContent">
      <div :class="nameBuilder.build('header','main')">
        <RBText :type="props.type">
          <slot name="header">
            {{ props.name }}
          </slot>
        </RBText>
      </div>
      <RBIcon :type="props.type" icon="rb-icon-arrows-v" :style="iconOpen"></RBIcon>
    </div>
    <transition name="flexboxItem">
      <div :class="nameBuilder.buildWrap('item','content')" v-if="contentOpen">
        <slot name="content">
          <RBText size="small" :type="props.type">{{ props.content }}</RBText>
        </slot>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
export default {
  name: 'RBFlexboxItem'
}
</script>

<script lang="ts" setup>
import { ref, reactive, PropType, computed, onMounted, onUpdated } from 'vue'
import { nameBuilder } from '../../../utils/index'
import RBText from '../../text/src/text.vue'
import RBIcon from '../../icon/src/icon.vue'

const componentName = 'flexboxItem'

let contentOpen = ref(false)

const props = defineProps({
  type: {
    type: String,
    default: 'primary'
  },

  name: {
    type: String,
    default: 'routerbootUI'
  },
  content: {
    type: String,
    default: 'this is flexbox content you can define it yourself!'
  },
  id: {
    type: String,
    default: '0'
  }
})

let iconOpen = computed(() => {
  if (contentOpen.value) {
    return {
      transform: 'rotate(90deg)'
    }
  }
  return 'rotate(0deg)'
})

const openContent = () => {
  contentOpen.value = !contentOpen.value
}

onMounted(() => {})
</script>
