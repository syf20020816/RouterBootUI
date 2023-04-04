<template>
  <div :class="[nameBuilder.buildContainer(componentName),nameBuilder.when(componentName,props.size),nameBuilder.when(componentName,props.type)] " v-if="props.size=='large'">
    <div :class="nameBuilder.buildWrap(componentName,'top')">
      <slot name="avatar">
        <img :class="nameBuilder.build(componentName,'avatar')" src="../../../common/avatar/man.svg" alt="avatar" v-if="props.sex=='man'">
        <img :class="nameBuilder.build(componentName,'avatar')" src="../../../common/avatar/woman.svg" alt="avatar" v-else-if="props.sex=='woman'">
      </slot>
    </div>
    <div :class="nameBuilder.buildWrap(componentName,'mid')">
      <div :class="nameBuilder.buildWrap(componentName,'username')">
        <RBText :type="props.type" :size="props.size">
          {{ props.name }}
        </RBText>
      </div>
      <div :class="nameBuilder.buildWrap(componentName,'details')">
        <slot name="content">
          <RBText :type="props.type" size="small">
            {{ props.description }}
          </RBText>
        </slot>
      </div>
    </div>
    <div :class="nameBuilder.buildWrap(componentName,'bottom')">
      <RBButton :type="props.type" style="width: 8vw;" @click="emits('detail')">
        Details
      </RBButton>
      <RBButton :type="props.type" style="width: 8vw;" @click="emits('msg')">
        Message
      </RBButton>
      <div :class="nameBuilder.buildWrap(componentName,'icons')">
        <RBIcon :type="props.type" style="font-size: 2vw;" :icon="item.name" v-for="item in IntroIconList" :key="item.id"></RBIcon>
      </div>
    </div>
  </div>
  <div v-else-if="props.size=='default'" :class="[nameBuilder.buildContainer(componentName),nameBuilder.when(componentName,props.size),nameBuilder.when(componentName,props.type)] ">
    <div :class="nameBuilder.buildWrap(componentName,'top')">
      <slot name="avatar">
        <img :class="nameBuilder.build(componentName,'avatar')" src="../../../common/avatar/man.svg" alt="avatar" v-if="props.sex=='man'">
        <img :class="nameBuilder.build(componentName,'avatar')" src="../../../common/avatar/woman.svg" alt="avatar" v-else-if="props.sex=='woman'">
      </slot>
    </div>
    <div :class="nameBuilder.buildWrap(componentName,'mid')">
      <div :class="nameBuilder.buildWrap(componentName,'username')">
        <RBText :type="props.type" :size="props.size">
          {{ props.name }}
        </RBText>
      </div>
      <div :class="nameBuilder.buildWrap(componentName,'details')">
        <slot name="content">
          <RBText :type="props.type" size="small">
            {{ props.description }}
          </RBText>
        </slot>
      </div>
    </div>
  </div>
  <div v-else-if="props.size=='small'" :class="[nameBuilder.buildContainer(componentName),nameBuilder.when(componentName,props.size),nameBuilder.when(componentName,props.type)] ">
    <div :class="nameBuilder.buildWrap(componentName,'box')">
      <div :class="nameBuilder.buildWrap(componentName,'left')">
        <slot name="avatar">
          <img :class="nameBuilder.build(componentName,'avatar')" src="../../../common/avatar/man.svg" alt="avatar" v-if="props.sex=='man'">
          <img :class="nameBuilder.build(componentName,'avatar')" src="../../../common/avatar/woman.svg" alt="avatar" v-else-if="props.sex=='woman'">
        </slot>
      </div>
      <div :class="nameBuilder.buildWrap(componentName,'right')">
        <div :class="nameBuilder.buildWrap(componentName,'username')">
          <RBText :type="props.type" :size="props.size">
            {{ props.name }}
          </RBText>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'RBIntroduction',
  components: { RBButton }
}
</script>

<script lang="ts" setup>
import { ref, reactive, computed, PropType } from 'vue'
import { Sex } from './intro'
import { nameBuilder } from '../../../utils/index'
import { RBButton } from '../../button'
import { RBIcon } from '../../icon'
import { RBText } from '../../text'
const componentName = 'introduction'

const emits = defineEmits(['msg', 'detail'])
const props = defineProps({
  sex: {
    type: String as PropType<Sex>,
    default: 'man'
  },
  size: {
    type: String,
    default: 'large'
  },
  type: {
    type: String,
    default: 'primary'
  },
  name: {
    type: String,
    default: 'syf20020816@outlook.com'
  },
  description: {
    type: String,
    default: 'A Java / Vue Developer'
  }
})

const IntroIconList = reactive([
  {
    id: 0,
    name: 'rb-icon-icon-test74'
  },
  {
    id: 1,
    name: 'rb-icon-icon-test76 '
  },
  {
    id: 2,
    name: 'rb-icon-icon-test77'
  },
  {
    id: 3,
    name: 'rb-icon-icon-test79'
  }
])
</script>
