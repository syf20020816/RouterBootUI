<template>
  <div id="clock-container">
    <div style="height: 460px; width: 600px;margin: 20px;">
      <RBCode></RBCode>
    </div>
    <div style="height: 460px; width: 600px;margin: 20px;">
      <RBCode type="success"></RBCode>
    </div>
    <div style="height: 460px; width: 600px;margin: 20px;">
      <RBCode type="info"></RBCode>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'CodeTest'
}
</script>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
</script>

<style lang="scss" scoped>
</style>