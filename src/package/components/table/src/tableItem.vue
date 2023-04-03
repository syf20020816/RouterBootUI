

<script lang="ts">
export default {
  name: 'RBTableItem'
}
</script>

<script lang="ts" setup>
import { ref, reactive, computed } from 'vue'
import { nameBuilder } from '../../../utils/index'
const componentName = 'tableItem'

const props = defineProps({
  //匹配键
  col: {
    type: String,
    default: ''
  },
  //显示head
  name: {
    type: String,
    default: 'head'
  },
  width: {
    type: String,
    default: '120px'
  },
  span: {
    type: Number,
    default: 1
  }
})

let itemProps = computed(() => {
  let { col, name, width, span } = props
  return {
    col: col,
    name: name,
    width: width,
    span: span
  }
})

defineExpose({ itemProps })
</script>
