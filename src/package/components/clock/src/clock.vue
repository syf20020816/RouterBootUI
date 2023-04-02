<template>
  <div :class="[nameBuilder.buildContainer(componentName),nameBuilder.when(componentName,props.type),nameBuilder.when(componentName,props.size)]">
    <div :class="nameBuilder.buildWrap(componentName,'clock')">
      <RBText :type="props.type" :size="props.size">{{ currentTime.clock }}</RBText>
    </div>
    <div :class="nameBuilder.buildWrap(componentName,'week')">
      <RBText :type="props.type" :size="props.size">{{ currentTime.week }}</RBText>
    </div>
    <div :class="nameBuilder.buildWrap(componentName,'date')">
      <RBText :type="props.type" :size="props.size"> {{ currentTime.date }}</RBText>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'RBClock',
  components: { RBText, RBIcon }
}
</script>

<script lang="ts" setup>
import { ref, reactive, PropType, computed, onMounted, onUpdated } from 'vue'
import { nameBuilder } from '../../../utils/index'
import { RBText } from '../../text'
import { RBIcon } from '../../icon'
import { CurrentTime } from './clock'
const componentName = 'clock'

const props = defineProps({
  type: {
    type: String,
    default: 'primary'
  },
  size: {
    type: String,
    default: 'default'
  }
})

let currentTime: CurrentTime = reactive({
  date: '',
  week: '',
  clock: ''
})

const getTime = () => {
  let date = new Date()
  let week = ['星期日', '星期一', '星期二', '星期三', '星	期四', '星期五', '星期六']
  let year = date.getFullYear()
  let month = date.getMonth() + 1
  let datee = date.getDate()
  let day = date.getDay()
  let time = year + '/' + month + '/' + datee
  let hourMinute = timeFormat()
  let tmp = {
    date: time,
    week: week[day],
    clock: hourMinute
  }
  currentTime.date = tmp.date
  currentTime.clock = tmp.clock
  currentTime.week = tmp.week
}

const timeFormat = () => {
  let time = new Date()
  let hour: any = time.getHours()
  hour = hour < 10 ? '0' + hour : hour
  let minute: any = time.getMinutes()
  minute = minute < 10 ? '0' + minute : minute
  return hour + ':' + minute
}

const timer = () => {
  getTime()
  setInterval(() => {
    getTime()
  }, 5000)
}

timer()
</script>
