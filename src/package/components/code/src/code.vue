<template>
  <div :class="[nameBuilder.buildContainer(componentName), nameBuilder.when(componentName, props.type)]">
    <div :class="nameBuilder.buildWrap(componentName, 'code')">
      <div :class="nameBuilder.buildWrap(componentName, 'row')">
        <div :class="nameBuilder.build('row', 'item')" v-for="item in rowNum" :key="item">
          {{ item }}
        </div>
      </div>
      <pre :contenteditable="props.editable" :id="codeId" ref="codeRef" @keyup.enter="nextRow" @keyup.delete="deleteRow" @blur="countTextLength">
          <slot >
            <img src="../../../common/routerboot-ui.svg" alt="">
          {{ props.code }}
          </slot>
        </pre>
      <div :class="nameBuilder.buildWrap(componentName, 'text')">
        <RBText size="small" :type="props.type">{{ textLength }}个字符</RBText>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'RBCode',
  components: { RBText, RBIcon }
}
</script>

<script lang="ts" setup>
import { ref, reactive, PropType, computed, onMounted, onUpdated, onBeforeUpdate } from 'vue'
import { nameBuilder } from '../../../utils/index'
import { RBText } from '../../text'
import { RBIcon } from '../../icon'
import { defaultCode } from './code'
import { uuidBuilder } from '../../../utils/index'
const componentName = 'code'
let codeFontSize = ref(16)
let codeRef = ref(null)
let textLength = ref(0)
const codeId = uuidBuilder.generateUUID()
let rowNum = ref(0)
const props = defineProps({
  type: {
    type: String,
    default: 'primary'
  },
  code: {
    type: String,
    default: defaultCode
  },
  editable: {
    type: Boolean,
    default: false
  }
})
/**
 * 计算行数
 */
const countRowNumber = (): void => {
  let codeDom: any = codeRef.value!
  //获取dom元素的样式表
  let domStyles = window.getComputedStyle(codeDom, null)
  let domHeight = parseFloat(domStyles.height.replace('px', ''))
  rowNum.value = Math.round(domHeight / (codeFontSize.value * 1.5))
}
/**
 * 计算文字长度
 */
const countTextLength = () => {
  let codeDom: any = codeRef.value!
  textLength.value = codeDom.innerText.length
}

/**
 * 切换下一行，再次计算行数
 */
const nextRow = () => {
  countRowNumber()
}
/**
 * 退格事件
 */
const deleteRow = () => {
  countTextLength()
  countRowNumber()
}
onMounted(() => {
  countRowNumber()
  countTextLength()
})

let innerCode = computed(() => {
  let { code } = props
  return code
})

defineExpose({
  innerCode
})
</script>
