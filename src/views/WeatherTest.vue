<template>
  <div id="text-container">
    <div>
      <RBText fontSize="2.5vw" :type="theme">
        Weather 天气组件
      </RBText>
      <div>
        <RBText :type="theme" fontSize="1.1vw">精美天气卡片,依照大小分为三种样式,用户通过借助获取天气的API传入数据,生成样式</RBText>
      </div>
    </div>

    <div style="margin: 16px 0;">
      <div>
        <RBText fontSize="2vw" :type="theme">
          示例
        </RBText>
      </div>
      <div style="border: 2px dashed #192227; margin: 16px 30px 30px 0;padding: 16px;">
        <div>
          <div>
            <RBText fontSize="1.5vw" :type="theme">
              size = large
            </RBText>
          </div>
          <RBWeather></RBWeather>
          <RBWeather type="success" weather="rainy" value="下雨天和你不太配" :temperature="12"></RBWeather>
          <RBWeather position="俄罗斯 莫斯科" type="info" weather="snowy" value="下雪了！" :temperature="-1"></RBWeather>
          <RBWeather position="美国 纽约" type="dark" weather="sunny" dayType="night" value="天气晚了"></RBWeather>
          <RBWeather position="黄土高坡" type="error" weather="sandStorm" dayType="night" value="这里是北京?"></RBWeather>
          <RBWeather position="none" type="warning" weather="undefined" :temperature="16" dayType="night" value="未知天气就像你的♥"></RBWeather>
        </div>
        <div>
          <div>
            <RBText fontSize="1.5vw" :type="theme">
              size = default
            </RBText>
          </div>
          <RBWeather size="default"></RBWeather>
          <RBWeather size="default" type="success" weather="rainy" value="下雨天和你不太配" :temperature="12"></RBWeather>
          <RBWeather size="default" position="俄罗斯 莫斯科" type="info" weather="snowy" value="下雪了！" :temperature="-1"></RBWeather>
          <RBWeather size="default" position="美国 纽约" type="dark" weather="sunny" dayType="night" value="天气晚了"></RBWeather>
          <RBWeather size="default" position="黄土高坡" type="error" weather="sandStorm" dayType="night" value="这里是北京?" @check="check('niaho')"></RBWeather>
          <RBWeather size="default" position="none" type="warning" weather="undefined" :temperature="16" dayType="night" value="未知天气就像你的♥"></RBWeather>
        </div>
        <div>
          <div>
            <RBText fontSize="1.5vw" :type="theme">
              size = small
            </RBText>
          </div>
          <RBWeather size="small"></RBWeather>
          <RBWeather size="small" type="success" weather="rainy" value="下雨天和你不太配" :temperature="12"></RBWeather>
          <RBWeather size="small" position="俄罗斯 莫斯科" type="info" weather="snowy" value="下雪了！" :temperature="-1"></RBWeather>
          <RBWeather size="small" position="美国 纽约" type="dark" weather="sunny" dayType="night" value="天气晚了"></RBWeather>
          <RBWeather size="small" position="黄土高坡" type="error" weather="sandStorm" dayType="night" value="这里是北京?" @get="getDetails"></RBWeather>
          <RBWeather size="small" position="none" type="warning" weather="undefined" :temperature="16" dayType="night" value="未知天气就像你的♥"></RBWeather>
        </div>
      </div>

      <div style="margin: 16px 30px 30px 0;">
        <RBEditor :render-view="Md" :type="theme"></RBEditor>
      </div>
    </div>
    <div>
      <div>
        <RBText fontSize="2vw" :type="theme">
          API
        </RBText>
      </div>
      <div>
        <RBText fontSize="1.5vw" :type="theme">
          Attributes 属性
        </RBText>
        <div>
          <RBTable :tableData="AttrData" :type="theme">
            <template #column>
              <RBTableItem key="name" name="属性名" width="150px"></RBTableItem>
              <RBTableItem key="des" name="说明" width="460px"></RBTableItem>
              <RBTableItem key="type" name="类型" width="100px"></RBTableItem>
              <RBTableItem key="able" name="可选值" width="200px"></RBTableItem>
              <RBTableItem key="default" name="默认值" width="100px"></RBTableItem>
            </template>
          </RBTable>
        </div>
      </div>
      <div>
        <RBText fontSize="1.5vw" :type="theme">
          Exposes 暴露事件
        </RBText>
        <div>
          <div>
            <RBTable :tableData="ExpData" :type="theme">
              <template #column>
                <RBTableItem key="name" name="事件名" width="150px"></RBTableItem>
                <RBTableItem key="des" name="说明" width="460px"></RBTableItem>
              </template>
            </RBTable>
          </div>
        </div>
      </div>
      <div>
        <RBText fontSize="1.5vw" :type="theme">
          Slots 插槽
        </RBText>
        <div>
          <div>
            <RBTable :tableData="SlotData" :type="theme">
              <template #column>
                <RBTableItem key="name" name="插槽名" width="150px"></RBTableItem>
                <RBTableItem key="des" name="说明" width="460px"></RBTableItem>
              </template>
            </RBTable>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script lang="ts">
export default {
  name: 'ButtonTest'
}
</script>

<script lang="ts" setup>
import { ref, reactive, computed } from 'vue'
import Md from '../code/Weather.md'
import { indexStore } from '../store/indexPinia'
const store = indexStore()
let theme = computed(() => {
  return store.theme[store.current]
})
const AttrData = reactive([
  {
    name: 'type',
    des: '主题类型(primary|success|warning|error|info|dark)',
    type: 'String',
    able: 'primary|success|warning|error|info|dark',
    default: 'primary'
  },
  {
    name: 'size',
    des: '自适应大小(default|large|small)flex根据容器自适应',
    type: 'String',
    able: 'default|large|small',
    default: 'default'
  },
  {
    name: 'position',
    des: '设置地点位置',
    type: 'String',
    able: '~',
    default: '中国 上海'
  },
  {
    name: 'dayType',
    des: '设置早上或晚上',
    type: 'DayType',
    able: 'day|night',
    default: 'day'
  },
  {
    name: 'value',
    des: '显示文字',
    type: 'String',
    able: '~',
    default: 'sunny-晴天'
  },
  {
    name: 'temperature',
    des: '温度',
    type: 'Number',
    able: '~',
    default: '23'
  },
  {
    name: 'btn',
    des: '按钮文字',
    type: 'String',
    able: '~',
    default: 'Check Details'
  }
])
const ExpData = reactive([
  {
    name: 'get',
    des: '获取所有具体的prop参数,以及传入提示'
  },
  {
    name: 'check',
    des: '按钮点击事件'
  }
])
const SlotData = reactive([
  {
    name: '',
    des: ''
  }
])

const getDetails = (e: any) => {
  console.log(e)
}
const check = (pam: any) => {
  console.log(pam)
}
</script>

<style lang="scss" scoped>
</style>