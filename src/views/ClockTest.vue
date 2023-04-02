<template>
  <div id="clock-container">
    <RBClock size="small"></RBClock>
    <RBClock type="success"></RBClock>
    <RBClock type="info" size="large"></RBClock>
  </div>
</template>

<script lang="ts">
export default {
  name: 'ClockTest'
}
</script>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
</script>

<style lang="scss" scoped>
</style>