<template>
  <div id="nav-container">
    <div style="height: 100px;width: 86%;">
      <RBNav></RBNav>
    </div>
    <div style="height: 100px;width: 86%;">
      <RBNav type="info"></RBNav>
    </div>
    <div style="height: 100px;width: 86%;">
      <RBNav type="error"></RBNav>
    </div>
    <div style="height: 100px;width: 86%;">
      <RBNav type="success"></RBNav>
    </div>
    <div style="height: 100px;width: 86%;">
      <RBNav type="warning"></RBNav>
    </div>
    <div style="height: 100px;width: 86%;">
      <RBNav type="dark"></RBNav>
    </div>
    <div style="height: 100px;width: 56%;">
      <RBNav type="info" navType="tabbar"></RBNav>
    </div>
    <div style="height: 100px;width: 56%;">
      <RBNav type="warning" navType="tabbar"></RBNav>
    </div>
    <div style="height: 520px;width: 40%;padding: 20px 0;">
      <RBNav type="warning" navType="iconOnly"></RBNav>
    </div>
    <div style="height: 560px;width: 40%;padding: 20px 0;">
      <RBNav type="primary" navType="iconOnly"></RBNav>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'NavTest'
}
</script>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
</script>

<style lang="scss" scoped>
</style>