<template>
  <div :class="[nameBuilder.buildContainer(componentName),nameBuilder.when(componentName,props.type),nameBuilder.when(componentName,props.navType)]" v-if="props.navType == 'default'">
    <slot>
      <div :class="nameBuilder.buildWrap(componentName,'item')" :style="navNodeWidth" v-for="item in props.navNodeList" :key="item.id" @click="emits('click')">
        <RBIcon :type="props.type" :icon="item.icon" v-if="item.icon!=null"></RBIcon>
        <RBText fontSize="18px" :type="props.type">{{ item.name }}</RBText>
      </div>
    </slot>
  </div>
  <div :class="[nameBuilder.buildContainer(componentName),nameBuilder.when(componentName,props.type),nameBuilder.when(componentName,props.navType)]" v-if="props.navType == 'tabbar'">
    <div ref="tabbarRef" :class="[nameBuilder.buildWrap(componentName,'tItem')]" :style="navNodeWidth" v-for="item,index in props.navNodeList" :key="item.id" @click="tabbarNodeClick(index)">
      <div :class="nameBuilder.buildWrap('item','icon')">
        <RBIcon :type="props.type" :icon="item.icon"></RBIcon>
      </div>
      <div :class="nameBuilder.buildWrap('item','name')">
        <RBText fontSize="14px" :type="props.type">{{ item.name }}</RBText>
      </div>
    </div>
    <div v-if="isActive" :class="nameBuilder.build(componentName,'shower')" :style="showPosMove"></div>
  </div>
  <div :class="[nameBuilder.buildContainer(componentName),nameBuilder.when(componentName,props.type),nameBuilder.when(componentName,props.navType)]" v-if="props.navType == 'iconOnly'">
    <div :class="[nameBuilder.buildWrap(componentName,'top')]">
      <div :class="[nameBuilder.buildWrap(componentName,'iItem')]" v-for="item in props.navNodeList" :key="item.id" @click="emits('click',item)">
        <div :class="nameBuilder.buildWrap('item','icon')">
          <RBIcon :type="props.type" :icon="item.icon"></RBIcon>
        </div>
      </div>
    </div>
    <div :class="[nameBuilder.buildWrap(componentName,'bottom')]">
      <RBClock size="small" :type="props.type"></RBClock>
      <RBIcon :type="props.type" icon="rb-icon-comment-lines" @click="emits('chat')"></RBIcon>
      <div :class="[nameBuilder.build(componentName,'flex'),'rb-icon','rb-icon-switch ']" @click="flexVisible = !flexVisible"></div>
    </div>
    <transition>
      <div :class="nameBuilder.buildWrap(componentName,'flex')" v-if="flexVisible">
        <slot name="navBox">
          <RBFlexbox :type="props.type">
            <template #flexItem>
              <RBFlexboxItem :name="item.name" v-for="item in props.navNodeList" :key="item.id" :type="props.type"></RBFlexboxItem>
            </template>
          </RBFlexbox>
        </slot>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
export default {
  name: 'RBNav'
}
</script>

<script lang="ts" setup>
import { ref, reactive, PropType, computed, onMounted, onUpdated } from 'vue'
import { nameBuilder } from '../../../utils/index'
import { NavType, NavNode, defalutNavNode } from './nav'
import { RBText } from '../../text'
import { RBIcon } from '../../icon'
import { RBClock } from '../../clock'
import { RBFlexbox } from '../../flexbox'
const componentName = 'nav'
/**
 * iconOnly展开
 */
let flexVisible = ref(false)
const emits = defineEmits(['click', 'chat'])
let tabbarRef = ref<any>(null)
/**
 * 单个导航栏元素宽度
 */
let singleNodeWidth = ref('auto')
/**
 * 激活索引
 */
let activeIndex = ref(0)
/**
 * 是否被激活
 */
let isActive = ref(false)
const props = defineProps({
  navType: {
    type: String as PropType<NavType>,
    default: 'default'
  },
  type: {
    type: String,
    default: 'primary'
  },
  navNodeList: {
    type: Array<NavNode>,
    default: defalutNavNode
  }
})
/**
 * 动态计算导航栏元素一栏的宽度
 */
const navNodeWidth = computed(() => {
  let { navNodeList } = props
  let len = navNodeList.length
  singleNodeWidth.value = 100 / len + '%'
  return {
    width: 'calc(100% / ' + len + ')',
    minWidth: 'auto'
  }
})
/**
 * tabbar中圆行的移动位置
 */
const showPosMove = computed(() => {
  return {
    left: 'calc( ' + singleNodeWidth.value + ' / 2  + ' + singleNodeWidth.value + '*' + activeIndex.value + ')'
  }
})
/**
 * tabbar点击事件
 * @param index
 */
const tabbarNodeClick = (index: number) => {
  let nodeList: any = tabbarRef.value!
  for (const node of nodeList) {
    node.classList.remove(nameBuilder.when(componentName, 'active'))
  }
  nodeList[index].classList.add(nameBuilder.when(componentName, 'active'))
  activeIndex.value = index
  isActive.value = true
  emits('click')
}

onMounted(() => {})

onUpdated(() => {})
</script>
