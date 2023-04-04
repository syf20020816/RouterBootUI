<template>
  <div :class="[nameBuilder.buildContainer(componentName),nameBuilder.when(componentName,props.type),nameBuilder.when(componentName,props.size)]" v-if="props.size=='large'">
    <div :class="nameBuilder.buildWrap(componentName,'top')">
      <RBIcon :type="props.type" icon="rb-icon-position-fill" size="large"></RBIcon>
      <RBText :type="props.type" size="default">{{ props.position }}</RBText>
    </div>
    <div :class="nameBuilder.buildWrap(componentName,'mid')">
      <svg :class="nameBuilder.build(componentName,'icon')" aria-hidden="true">
        <use :xlink:href="getWeather(props.dayType,props.weather)"></use>
      </svg>
      <div :class="nameBuilder.buildWrap(componentName,'temperature')">
        <RBText :type="props.type" fontSize="4vh">
          {{ props.temperature }}
          <RBText :type="props.type" fontSize="3vh">
            ℃
          </RBText>
        </RBText>
      </div>
    </div>
    <div :class="nameBuilder.buildWrap(componentName,'bottom')">
      <div :class="nameBuilder.buildWrap(componentName,'value')">
        <RBText :type="props.type" fontSize="2vh">
          {{ props.value }}
        </RBText>
      </div>
      <RBButton round :type="props.type" :size="props.size" @click="emits('check')">
        <RBIcon :type="props.type" :size="props.size" icon="rb-icon-ziyuan"></RBIcon>
        {{props.btn}}
      </RBButton>
    </div>
  </div>
  <div :class="[nameBuilder.buildContainer(componentName),nameBuilder.when(componentName,props.type),nameBuilder.when(componentName,props.size)]" v-else-if="props.size=='default'">
    <div :class="nameBuilder.buildWrap(componentName,'box')">
      <div :class="nameBuilder.buildWrap(componentName,'left')">
        <div :class="nameBuilder.buildWrap(componentName,'pos')">
          <RBIcon :type="props.type" icon="rb-icon-position-fill" size="default"></RBIcon>
          <RBText :type="props.type" size="small">{{ props.position }}</RBText>
        </div>
        <div :class="nameBuilder.buildWrap(componentName,'value')">
          <RBText :type="props.type" :size="props.size">
            {{ props.value }}
          </RBText>
        </div>
      </div>
      <div :class="nameBuilder.buildWrap(componentName,'right')">
        <svg :class="nameBuilder.build(componentName,'icon')" aria-hidden="true">
          <use :xlink:href="getWeather(props.dayType,props.weather)"></use>
        </svg>
        <div :class="nameBuilder.buildWrap(componentName,'temperature')">
          <RBText :type="props.type" fontSize="2vh">
            {{ props.temperature }}
            <RBText :type="props.type" fontSize="1.5vh">
              ℃
            </RBText>
          </RBText>
        </div>
      </div>
      <div :class="nameBuilder.buildWrap(componentName,'bottom')">
        <RBButton round :type="props.type" :size="props.size" @click="emits('check')">
          <RBIcon :type="props.type" :size="props.size" icon="rb-icon-ziyuan"></RBIcon>
          {{props.btn}}
        </RBButton>
      </div>
    </div>
  </div>
  <div :class="[nameBuilder.buildContainer(componentName),nameBuilder.when(componentName,props.type),nameBuilder.when(componentName,props.size)]" v-else-if="props.size=='small'">
    <div :class="nameBuilder.buildWrap(componentName,'top')">
      <RBText :type="props.type" fontSize="1.8vh">
        {{ props.temperature }}
        <RBText :type="props.type" fontSize="1.2vh">
          ℃
        </RBText>
      </RBText>
    </div>
    <div :class="nameBuilder.buildWrap(componentName,'mid')">
      <svg :class="nameBuilder.build(componentName,'icon')" aria-hidden="true">
        <use :xlink:href="getWeather(props.dayType,props.weather)"></use>
      </svg>
    </div>
    <div :class="nameBuilder.buildWrap(componentName,'bottom')">
      <RBIcon :type="props.type" :size="props.size" icon="rb-icon-ziyuan" @click="emits('check')"></RBIcon>
    </div>

  </div>
</template>

<script lang="ts">
export default {
  name: 'RBWeather'
}
</script>

<script lang="ts" setup>
import '../../../common/icon/iconfont'
import { ref, reactive, computed, PropType, onMounted } from 'vue'
import { nameBuilder, ComponentBuilder } from '../../../utils/index'
import type { Weather, DayType } from './weather'
import { RBIcon } from '../../icon'
import { RBButton } from '../../button'
import { getWeather } from './weather'

const componentName = 'weather'
const emits = defineEmits(['check', 'get'])

const props = defineProps({
  position: {
    type: String,
    default: '中国 上海'
  },
  dayType: {
    type: String as PropType<DayType>,
    default: 'day'
  },
  value: {
    type: String,
    default: 'sunny-晴天'
  },
  weather: {
    type: String as PropType<Weather>,
    default: 'sunny'
  },
  size: {
    type: String,
    default: 'large'
  },
  type: {
    type: String,
    default: 'primary'
  },
  temperature: {
    type: Number,
    default: 23
  },
  btn: {
    type: String,
    default: 'Check Details'
  }
})
/**
 * 组件的Get方法，用于获取可传入和已传入信息(props)
 */
const get = (): void => {
  let { position, dayType, value, size, weather, type, temperature, btn } = props
  let builder = new ComponentBuilder()
  builder
    .key('position')
    .value(position)
    .description('地点位置')
    .and()
    .key('dayType')
    .value(dayType)
    .description('可选值-DayType类型:night,day,night表示晚上,day表示早上')
    .and()
    .key('value')
    .value(value)
    .description('描述信息')
    .and()
    .key('size')
    .value(size)
    .description('组件尺寸')
    .and()
    .key('weather')
    .value(weather)
    .description('天气类型')
    .and()
    .key('type')
    .value(type)
    .description('组件主题类型-可选值:primary, success, warning, error, info, dark')
    .and()
    .key('temperature')
    .value(temperature)
    .description('温度')
    .and()
    .key('btn')
    .value(btn)
    .description('按钮显示文字')
    .and()
    .build()
  emits('get', builder.getComponentNodeList())
}

onMounted(() => {
  get()
})
</script>
