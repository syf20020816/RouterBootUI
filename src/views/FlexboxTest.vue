<template>
  <div id="text-container">
    <RBFlexbox>
      <template #flexItem>
        <RBFlexboxItem></RBFlexboxItem>
        <RBFlexboxItem></RBFlexboxItem>
        <RBFlexboxItem></RBFlexboxItem>
      </template>
    </RBFlexbox>

    <RBFlexbox type="info" :flexboxList="define">
      <template #flexItem>
        <RBFlexboxItem type="info"></RBFlexboxItem>
        <RBFlexboxItem type="info"></RBFlexboxItem>
        <RBFlexboxItem type="info"></RBFlexboxItem>
      </template>
    </RBFlexbox>

    <RBFlexbox type="warning" :flexboxList="define">
      <template #flexItem>
        <RBFlexboxItem type="warning">
          <template #header>
            <div>
              <RBIcon icon="rb-icon-heart-fill" type="warning"></RBIcon> defineHeader
            </div>
          </template>
        </RBFlexboxItem>
        <RBFlexboxItem type="warning"></RBFlexboxItem>
        <RBFlexboxItem type="warning"></RBFlexboxItem>
      </template>
    </RBFlexbox>
  </div>
</template>

<script lang="ts">
export default {
  name: 'FlexboxTest'
}
</script>

<script lang="ts" setup>
import { ref, reactive } from 'vue'

const define = reactive([
  {
    id: 0,
    name: '文本1',
    content: '测试文本1'
  },
  {
    id: 1,
    name: '文本2',
    content: ' Consistent with real life: in line with the process and logic of real life, and comply with languages and habits that the users are used to;'
  },
  {
    id: 2,
    name: '文本3',
    content: ' Consistent with real life: in line with the process and logic of real life, and comply with languages and habits that the users are used to;'
  }
])
</script>

<style lang="scss" scoped>
</style>