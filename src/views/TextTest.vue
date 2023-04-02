<template>
  <div id="text-container">
    <div>
      <RBText fontSize="36px">
        Text 文字
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
        <div>
          <RBText type="success">文字示例-success</RBText>
        </div>
        <div>
          <RBText type="error">文字示例-error</RBText>
        </div>
        <div>
          <RBText type="warning">文字示例-warning</RBText>
        </div>
        <div>
          <RBText type="info">文字示例-info</RBText>
        </div>
        <div>
          <RBText type="primary" size="small">文字示例-primary-small</RBText>
        </div>
        <div>
          <RBText type="success" size="large">文字示例-success-large</RBText>
        </div>
      </div>
      <div style="margin: 16px 30px 30px 0;">
        <RBCode>
          {{ code1 }}
        </RBCode>
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
  name: 'TextTest'
}
</script>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
const code1 = ref(
  '<RBText type="success">文字示例-success</RBText>\n' +
    '<RBText type="error">文字示例-error</RBText>\n' +
    '<RBText type="warning">文字示例-warning</RBText>\n' +
    '<RBText type="info">文字示例-info</RBText>\n' +
    '<RBText type="primary" size="small">文字示例-primary-small</RBText>\n' +
    '<RBText type="success" size="large">文字示例-success-large</RBText>\n'
)
</script>

<style lang="scss" scoped>
</style>