<template>
  <div id="text-container">
    <div>
      <RBText fontSize="2.5vw" :type="theme">
        Nav 导航栏
      </RBText>
      <div>
        <RBText :type="theme" fontSize="1.1vw">导航栏有三种不同的类型default|tabbar|iconOnly,你可以对default进行充分的扩展</RBText>
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
              navType = default
            </RBText>
          </div>
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
        </div>
        <div>
          <div>
            <RBText fontSize="1.5vw" :type="theme">
              navType = tabbar
            </RBText>
          </div>
          <div style="height: 100px;width: 56%;">
            <RBNav type="info" navType="tabbar"></RBNav>
          </div>
          <div style="height: 100px;width: 56%;">
            <RBNav type="warning" navType="tabbar"></RBNav>
          </div>
        </div>
        <div>
          <div>
            <RBText fontSize="1.5vw" :type="theme">
              navType = iconOnly
            </RBText>
          </div>
          <div style="height: 520px;width: 40%;padding: 20px 0;">
            <RBNav type="warning" navType="iconOnly"></RBNav>
          </div>
          <div style="height: 560px;width: 40%;padding: 20px 0;">
            <RBNav type="primary" navType="iconOnly"></RBNav>
          </div>
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
import Md from '../code/Nav.md'
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
    name: 'navType',
    des: '导航栏类型(default|iconOnly|tabbar)共三种',
    type: 'NavType',
    able: 'default|iconOnly|tabbar',
    default: 'default'
  },
  {
    name: 'navNodeList',
    des: '用于构建导航的数据',
    type: 'Array<NavNode>',
    able: '~',
    default: 'defalutNavNode见代码处'
  }
])
const ExpData = reactive([
  {
    name: 'click',
    des: 'Nav选项点击事件,含有一个默认获取的参数'
  },
  {
    name: 'chat',
    des: 'chat图标按钮点击事件'
  }
])
const SlotData = reactive([
  {
    name: 'navBox插槽',
    des: '只能在iconOnly类型中使用用于自定义设置展开的区域'
  },
  {
    name: '默认插槽',
    des: '默认插槽只有在使用default类型才生效用于自定义导航栏中的Item'
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