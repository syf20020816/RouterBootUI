<template>
  <div id="text-container">
    <div>
      <RBText fontSize="36px">
        Table 表格
      </RBText>
      <div>
        <RBText type="primary">在RouterBoot-UI中文字主使用Aa 厚底黑字体,副用Yulong字体,允许任何个人与企业免费使用，包括全媒体商用用途，无需取得任
          何书面授权,但禁止任何违法用途</RBText>
      </div>
    </div>

    <div style="margin: 16px 0;">
      <div>
        <RBText fontSize="26px">
          示例
        </RBText>
      </div>
      <div style="border: 2px dashed #192227; margin: 16px 30px 30px 0;padding: 16px;">
        <RBTable :tableData="tData">
          <template #column>
            <RBTableItem key="id" name="id1" width="150px"></RBTableItem>
            <RBTableItem key="age" name="年龄" width="160px"></RBTableItem>
            <RBTableItem key="height" name="height" width="100px"></RBTableItem>
          </template>
        </RBTable>
      </div>
      <div style="margin: 16px 30px 30px 0;">
        <RBEditor :render-view="TableMd"></RBEditor>
      </div>
    </div>
    <div>
      <div>
        <RBText fontSize="26px">
          Text-API
        </RBText>
      </div>
      <div>
        <RBText fontSize="22px">
          Text-Attributes
        </RBText>
      </div>
      <div>
        <RBText fontSize="22px">
          Text-Exposes
        </RBText>
      </div>
      <div>
        <RBText fontSize="22px">
          Text-Slots
        </RBText>
      </div>
    </div>

  </div>
</template>

<script lang="ts">
export default {
  name: 'TableTest'
}
</script>

<script lang="ts" setup>
import TableMd from '../code/Table.md'
import { RBEditor } from '../package/components/editor'
import { ref, reactive, computed } from 'vue'
import { read } from './readtxt'

const code1 = computed(() => {})

const tData = reactive([
  {
    id: 1,
    age: 16,
    height: 169.5,
    weight: 70.5
  },
  {
    id: 2,
    age: 21,
    height: 172.69,
    weight: 70.5
  }
])
</script>

<style lang="scss" scoped>
</style>