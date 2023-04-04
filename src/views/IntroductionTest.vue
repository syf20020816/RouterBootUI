<template>
  <div id="text-container">
    <div>
      <RBText fontSize="2.5vw" :type="theme">
        Introduction 介绍
      </RBText>
      <div>
        <RBText :type="theme" fontSize="1.1vw">精美介绍卡片,依照大小分为三种样式,人物、景色、物品介绍的卡片直接来试试吧</RBText>
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

        </div>
        <div>
          <div>
            <RBText fontSize="1.5vw" :type="theme">
              size = default
            </RBText>
          </div>
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

        </div>
        <div>
          <div>
            <RBText fontSize="1.5vw" :type="theme">
              size = small
            </RBText>
          </div>
          <RBIntroduction size="small"></RBIntroduction>
          <RBIntroduction type="info" name="168894554@163.com" sex="woman" size="small"></RBIntroduction>
          <RBIntroduction type="warning" name="群山" size="small">
            <template #avatar>
              <img src="../assets/veiw1.png" alt="" style="height: 100%; width: 100%;border-radius: 6px;object-fit: cover;">
            </template>
          </RBIntroduction>
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
import Md from '../code/Intro.md'
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
    des: '自适应按钮大小(default|large|small)flex根据容器自适应',
    type: 'String',
    able: 'default|large|small',
    default: 'default'
  },
  {
    name: 'sex',
    des: '设置性别,能够快速显示对应性别的默认头像',
    type: 'String',
    able: 'man|woman',
    default: 'man'
  },
  {
    name: 'name',
    des: '设置介绍对象的名称',
    type: 'String',
    able: '~',
    default: 'syf20020816@outlook.com'
  },
  {
    name: 'description',
    des: '描述信息,不建议传入超长的描述',
    type: 'String',
    able: '~',
    default: 'A Java / Vue Developer'
  }
])
const ExpData = reactive([
  {
    name: 'msg',
    des: 'message按钮点击事件'
  },
  {
    name: 'detail',
    des: 'detail按钮点击事件'
  }
])
const SlotData = reactive([
  {
    name: 'avatar插槽',
    des: '头像插槽可以自定义传入头像'
  },
  {
    name: 'content插槽',
    des: '描述内容插槽可以自定义描述内容'
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