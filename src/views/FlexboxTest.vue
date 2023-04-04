<template>
  <div id="text-container">
    <div>
      <RBText fontSize="2.5vw" :type="theme">
        Flexbox 伸缩盒
      </RBText>
      <div>
        <RBText :type="theme" fontSize="1.1vw">一个伸缩盒，分为flexbox和flexboxItem两部分，你应该集中关注flexboxItem</RBText>
      </div>
    </div>

    <div style="margin: 16px 0;">
      <div>
        <RBText fontSize="2vw" :type="theme">
          示例
        </RBText>
      </div>
      <div style="border: 2px dashed #192227; margin: 16px 30px 30px 0;padding: 16px;">
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

      <div style="margin: 16px 30px 30px 0;">
        <RBEditor :render-view="Md" :type="theme"></RBEditor>
      </div>
    </div>
    <div>
      <div>
        <RBText fontSize="2vw" :type="theme">
          Flexbox API
        </RBText>
      </div>
      <div>
        <RBText fontSize="1.5vw" :type="theme">
          Flexbox Attributes 属性
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
          Flexbox Exposes 暴露事件
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
          Flexbox Slots 插槽
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
    <div>
      <div>
        <RBText fontSize="2vw" :type="theme">
          FlexboxItem API
        </RBText>
      </div>
      <div>
        <RBText fontSize="1.5vw" :type="theme">
          FlexboxItem Attributes 属性
        </RBText>
        <div>
          <RBTable :tableData="AttrData2" :type="theme">
            <template #column>
              <RBTableItem key="name" name="属性名" width="150px"></RBTableItem>
              <RBTableItem key="des" name="说明" width="460px"></RBTableItem>
              <RBTableItem key="type" name="类型" width="100px"></RBTableItem>
              <RBTableItem key="able" name="可选值" width="200px"></RBTableItem>
              <RBTableItem key="default" name="默认值" width="200px"></RBTableItem>
            </template>
          </RBTable>
        </div>
      </div>
      <div>
        <RBText fontSize="1.5vw" :type="theme">
          FlexboxItem Exposes 暴露事件
        </RBText>
        <div>
          <div>
            <RBTable :tableData="ExpData2" :type="theme">
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
          FlexboxItem Slots 插槽
        </RBText>
        <div>
          <div>
            <RBTable :tableData="SlotData2" :type="theme">
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
import Md from '../code/Flexbox.md'
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
  }
])
const ExpData = reactive([
  {
    name: '',
    des: ''
  }
])
const SlotData = reactive([
  {
    name: 'flexItem插槽',
    des: '指明flexboxItem组件'
  }
])

const AttrData2 = reactive([
  {
    name: 'type',
    des: '主题类型(primary|success|warning|error|info|dark)',
    type: 'String',
    able: 'primary|success|warning|error|info|dark',
    default: 'primary'
  },
  {
    name: 'name',
    des: '头部显示名称',
    type: 'String',
    able: '~',
    default: 'routerbootUI'
  },
  {
    name: 'content',
    des: '内容部分显示',
    type: 'String',
    able: '~',
    default: 'this is flexbox content you can define it yourself!'
  },
  {
    name: 'id',
    des: 'Item的ID您可以暂时忽略这个传入,主要是为了语义',
    type: 'String',
    able: '~',
    default: '0'
  }
])
const ExpData2 = reactive([
  {
    name: '',
    des: ''
  }
])
const SlotData2 = reactive([
  {
    name: 'header插槽',
    des: '自定义头部'
  },
  {
    name: 'content插槽',
    des: '自定义内容'
  }
])

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