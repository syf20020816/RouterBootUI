<template>
  <div id="text-container">
    <RBIntroduction></RBIntroduction>
    <RBIntroduction type="info" name="168894554@163.com" sex="woman" description="An UI Designer"></RBIntroduction>
    <RBIntroduction type="success" description="A lovely dog" name="Max">
      <template #avatar>
        <img src="../assets/dog.svg" alt="">
      </template>
    </RBIntroduction>
    <RBIntroduction type="error" name="Greek" description="A Bank Manager">
      <template #avatar>
        <img src="../assets/man.svg" alt="">
      </template>
    </RBIntroduction>
    <RBIntroduction type="warning" name="Lisa" description="A Teacher">
      <template #avatar>
        <img src="../assets/woman.svg" alt="">
      </template>
    </RBIntroduction>
    <RBIntroduction type="error" name="lighthouse" description="I am your boat, sailing for you every day. You're my lighthouse, navigating when I get lost" size="default">
      <template #avatar>
        <img src="../assets/view2.png" alt="" style="height: 100%; width: 100%;border-radius: 6px;object-fit: cover;">
      </template>
    </RBIntroduction>
    <RBIntroduction type="warning" name="群山" description="银装素裹的群山，登高远望，就像是大海被暴风卷起的雪浪，弯曲崎岖，一望无际。" size="default">
      <template #avatar>
        <img src="../assets/veiw1.png" alt="" style="height: 100%; width: 100%;border-radius: 6px;object-fit: cover;">
      </template>
    </RBIntroduction>

    <RBIntroduction size="small"></RBIntroduction>
    <RBIntroduction type="info" name="168894554@163.com" sex="woman" size="small"></RBIntroduction>
    <RBIntroduction type="warning" name="群山" size="small">
      <template #avatar>
        <img src="../assets/veiw1.png" alt="" style="height: 100%; width: 100%;border-radius: 6px;object-fit: cover;">
      </template>
    </RBIntroduction>
  </div>
</template>

<script lang="ts">
export default {
  name: 'IntroductionTest'
}
</script>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
</script>

<style lang="scss" scoped>
</style>