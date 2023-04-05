<template>
  <div class="index-container">
    <div class="logo_wrap">
      <div class="logo">
        <img src="../assets/logo.png" alt="" class="svgIcon" style="height: 75%;">
      </div>
      <div>
        <RBText :type="theme" size="large"> - with - </RBText>
      </div>
      <div class="build_wrap">
        <img src="../assets/vite.svg" alt="" class="svgIcon2" style="height: 32%;margin: 0 20px; ">
        <img src="../assets/vue.svg" alt="" class="svgIcon2" style="height: 32%;margin: 0 20px; ">
        <img src="../assets/typescript.svg" alt="" class="svgIcon2" style="height: 32%;margin: 0 20px; ">
      </div>
    </div>
    <div class="btn_wrap">
      <div class="des">
        <RBText :type="theme" size="large">RouterBoot-UI 是 RouterBoot 的一个UI组件库,我在开发时始终认为多数常规组件Element-Plus|Vant|Bootstrap3已经十分突出,并且优势明显,成熟,所以RouterBoot-UI不去重复做一些挑战“权威”的事情,而是构建一些奇思妙想!</RBText>
        <RBText :type="theme">RouterBoot UI is a UI component library for RouterBoot. During development, I always believed that most regular components, Element Plus | Vant | Bootstrap 3, were already very prominent and had obvious advantages and maturity. Therefore, RouterBoot UI does not repeat things that challenge "authority", but instead builds some imaginative ideas!</RBText>
      </div>
      <div class="btns">
        <!-- <RBButton :type="theme">Why RouterBootUI</RBButton> -->
        <RBButton :type="theme">Get Started</RBButton>
        <RBButton :type="theme">How To Install</RBButton>
        <RBButton :type="theme">More Repositories</RBButton>
      </div>
      <div style="height: 25%;text-align: center;">
        <div>
          <RBText :type="theme">如果您有什么建议欢迎联系作者:syf20020816@outlook.com</RBText>
        </div>
        <div>
          <RBText :type="theme">If you have any suggestions, please connect to the author:syf20020816@outlook.com</RBText>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Index'
}
</script>

<script lang="ts" setup>
import { ref, reactive, computed } from 'vue'
import { indexStore } from '../store/indexPinia'
const store = indexStore()
let theme = computed(() => {
  return store.theme[store.current]
})
</script>

<style lang="scss" scoped>
.index-container {
  height: 100%;
  width: 100%;
  .logo_wrap {
    height: 55%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-wrap: wrap;

    .logo {
      height: 60%;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .build_wrap {
      height: 40%;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
  .btn_wrap {
    height: 45%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    .des {
      height: 40%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
      width: calc(100% - 40px);
      padding: 0 20px;
    }
    .btns {
      height: 35%;
      display: flex;
      align-items: center;
      justify-content: center;

      width: 100%;
      .rb-button_container {
        margin: 0 40px;
      }
    }
  }
}
</style>