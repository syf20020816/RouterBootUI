```vue
<template>
  <RBWeather></RBWeather>
    <RBWeather type="success" weather="rainy" value="下雨天和你不太配" :temperature="12"></RBWeather>
    <RBWeather position="俄罗斯 莫斯科" type="info" weather="snowy" value="下雪了！" :temperature="-1"></RBWeather>
    <RBWeather position="美国 纽约" type="dark" weather="sunny" dayType="night" value="天气晚了"></RBWeather>
    <RBWeather position="黄土高坡" type="error" weather="sandStorm" dayType="night" value="这里是北京?"></RBWeather>
    <RBWeather position="none" type="warning" weather="undefined" :temperature="16" dayType="night" value="未知天气就像你的♥"></RBWeather>
    <RBWeather size="default"></RBWeather>
    <RBWeather size="default" type="success" weather="rainy" value="下雨天和你不太配" :temperature="12"></RBWeather>
    <RBWeather size="default" position="俄罗斯 莫斯科" type="info" weather="snowy" value="下雪了！" :temperature="-1"></RBWeather>
    <RBWeather size="default" position="美国 纽约" type="dark" weather="sunny" dayType="night" value="天气晚了"></RBWeather>
    <RBWeather size="default" position="黄土高坡" type="error" weather="sandStorm" dayType="night" value="这里是北京?" @check="check('niaho')"></RBWeather>
    <RBWeather size="default" position="none" type="warning" weather="undefined" :temperature="16" dayType="night" value="未知天气就像你的♥"></RBWeather>
    <RBWeather size="small"></RBWeather>
    <RBWeather size="small" type="success" weather="rainy" value="下雨天和你不太配" :temperature="12"></RBWeather>
    <RBWeather size="small" position="俄罗斯 莫斯科" type="info" weather="snowy" value="下雪了！" :temperature="-1"></RBWeather>
    <RBWeather size="small" position="美国 纽约" type="dark" weather="sunny" dayType="night" value="天气晚了"></RBWeather>
    <RBWeather size="small" position="黄土高坡" type="error" weather="sandStorm" dayType="night" value="这里是北京?" @get="getDetails"></RBWeather>
    <RBWeather size="small" position="none" type="warning" weather="undefined" :temperature="16" dayType="night" value="未知天气就像你的♥"></RBWeather>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
const getDetails = (e: any) => {
  console.log(e)
}
const check = (pam: any) => {
  console.log(pam)
}
</script>
```