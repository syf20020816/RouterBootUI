<template>
  <div id="text-container">
    <div>
      <RBText fontSize="2.5vw" :type="theme">
        Icon 图标
      </RBText>
      <div>
        <RBText :type="theme" fontSize="1.1vw">RouterBoot中包含有共计348个图标均可以直接使用</RBText>
      </div>
    </div>

    <div style="margin: 16px 0;">
      <div>
        <RBText fontSize="2vw" :type="theme">
          示例
        </RBText>
      </div>
      <div style="border: 2px dashed #192227; margin: 16px 30px 30px 0;padding: 16px;">
        <RBIcon icon="rb-icon-hezuo"></RBIcon>
        <RBIcon icon="rb-icon-exchange"></RBIcon>
        <RBIcon icon="rb-icon-hezuo" size="large"></RBIcon>
        <RBIcon icon="rb-icon-exchange" size="small"></RBIcon>
        <RBIcon icon="rb-icon-hezuo" type="primary"></RBIcon>
        <RBIcon icon="rb-icon-exchange" type="error"></RBIcon>
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
    <div>
      <div style="margin: 8px;" v-for="item in allIcon" :key="item.name">
        <RBIcon size="large" :type="theme" :icon="item.iconName"></RBIcon>
        <span>{{ item.iconName }}</span>
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
import Md from '../code/Icon.md'
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
    des: '自适应图标大小(default|large|small)flex根据容器自适应',
    type: 'String',
    able: 'default|large|small',
    default: 'default'
  },
  {
    name: 'icon',
    des: '图标,所有图标请查看common/icon/demo_index.html或请参考下述',
    type: 'String',
    able: '~任意RBIcon图标',
    default: '-'
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
    name: '',
    des: ''
  }
])

const allIcon = reactive([
  { name: '晴天', iconName: 'rb-icon-icon_qingtian' },
  { name: '夜间晴天', iconName: 'rb-icon-icon_yejianqingtian' },
  { name: '阴天', iconName: 'rb-icon-icon_yintian' },
  { name: '多云', iconName: 'rb-icon-icon_duoyun' },
  { name: '夜间多云', iconName: 'rb-icon-icon_yejianduoyun' },
  { name: '阵雨', iconName: 'rb-icon-icon_zhenyu' },
  { name: '小雨', iconName: 'rb-icon-icon_xiaoyu' },
  { name: '中雨', iconName: 'rb-icon-icon_zhongyu' },
  { name: '大雨', iconName: 'rb-icon-icon_dayu' },
  { name: '暴雨', iconName: 'rb-icon-icon_baoyu' },
  { name: '雷阵雨', iconName: 'rb-icon-icon_leizhenyu' },
  { name: '阵雪', iconName: 'rb-icon-icon_zhenxue' },
  { name: '小雪', iconName: 'rb-icon-icon_xiaoxue' },
  { name: '中雪', iconName: 'rb-icon-icon_zhongxue' },
  { name: '大雪', iconName: 'rb-icon-icon_daxue' },
  { name: '暴雪', iconName: 'rb-icon-icon_baoxue' },
  { name: '雾', iconName: 'rb-icon-icon_wu' },
  { name: '夜间雾', iconName: 'rb-icon-icon_yejianwu' },
  { name: '浮尘', iconName: 'rb-icon-icon_fuchen' },
  { name: '扬沙', iconName: 'rb-icon-icon_yangsha' },
  { name: '沙尘暴', iconName: 'rb-icon-icon_shachenbao' },
  { name: '无数据', iconName: 'rb-icon-icon_wushuju' },
  { name: '24小时', iconName: 'rb-icon-xiaoshi' },
  { name: '帮助', iconName: 'rb-icon-bangzhu' },
  { name: '编辑', iconName: 'rb-icon-bianji' },
  { name: '成功', iconName: 'rb-icon-chenggong' },
  { name: '点击_选中', iconName: 'rb-icon-dianji_xuanzhong' },
  { name: '点赞_默认', iconName: 'rb-icon-dianzan_moren' },
  { name: '附件', iconName: 'rb-icon-fujian' },
  { name: '复制', iconName: 'rb-icon-fuzhi' },
  { name: '共享', iconName: 'rb-icon-gongxiang' },
  { name: '合作', iconName: 'rb-icon-hezuo' },
  { name: '客服', iconName: 'rb-icon-kefu' },
  { name: '链接', iconName: 'rb-icon-lianjie' },
  { name: '评分_选中', iconName: 'rb-icon-pingfen_xuanzhong' },
  { name: '签到', iconName: 'rb-icon-qiandao' },
  { name: '好友', iconName: 'rb-icon-haoyou' },
  { name: '热销', iconName: 'rb-icon-rexiao' },
  { name: '全球', iconName: 'rb-icon-quanqiu' },
  { name: '设置', iconName: 'rb-icon-shezhi' },
  { name: '审核', iconName: 'rb-icon-shenhe' },
  { name: '失败', iconName: 'rb-icon-shibai' },
  { name: '提醒', iconName: 'rb-icon-tixing' },
  { name: '添加好友', iconName: 'rb-icon-tianjiahaoyou' },
  { name: '提示', iconName: 'rb-icon-tishi' },
  { name: '图文列表', iconName: 'rb-icon-tuwenliebiao' },
  { name: '退出', iconName: 'rb-icon-tuichu' },
  { name: '图片', iconName: 'rb-icon-tupian' },
  { name: '相机', iconName: 'rb-icon-xiangji' },
  { name: '我的', iconName: 'rb-icon-wode' },
  { name: '休息', iconName: 'rb-icon-xiuxi' },
  { name: '新闻', iconName: 'rb-icon-xinwen' },
  { name: '移除', iconName: 'rb-icon-yichu' },
  { name: '移除好友', iconName: 'rb-icon-yichuhaoyou' },
  { name: '邮件', iconName: 'rb-icon-youjian' },
  { name: '勋章', iconName: 'rb-icon-xunzhang' },
  { name: '增加', iconName: 'rb-icon-zengjia' },
  { name: '注意', iconName: 'rb-icon-zhuyi' },
  { name: '文档', iconName: 'rb-icon-wendang' },
  { name: '资源', iconName: 'rb-icon-ziyuan' },
  { name: '预警', iconName: 'rb-icon-yujing' },
  { name: '折扣', iconName: 'rb-icon-zhekou' },
  { name: '资金', iconName: 'rb-icon-zijin' },
  { name: 'checklist', iconName: 'rb-icon-checklist' },
  { name: 'code', iconName: 'rb-icon-code' },
  { name: 'git-merge', iconName: 'rb-icon-git-merge' },
  { name: 'git-compare', iconName: 'rb-icon-git-compare' },
  { name: 'graph', iconName: 'rb-icon-graph' },
  { name: 'hubot', iconName: 'rb-icon-hubot' },
  { name: 'tag', iconName: 'rb-icon-tag1' },
  { name: 'terminal', iconName: 'rb-icon-terminal1' },
  { name: 'cry-fill', iconName: 'rb-icon-cry-fill' },
  { name: 'smile-fill', iconName: 'rb-icon-smile-fill' },
  { name: 'unlock-fill', iconName: 'rb-icon-unlock-fill' },
  { name: 'lock-fill', iconName: 'rb-icon-lock-fill' },
  { name: 'align right-fill', iconName: 'rb-icon-alignright-fill' },
  { name: 'align left-fill', iconName: 'rb-icon-alignleft-fill' },
  { name: 'border bottom-fill', iconName: 'rb-icon-borderbottom-fill' },
  { name: 'border top-fill', iconName: 'rb-icon-bordertop-fill' },
  { name: 'align center-fill', iconName: 'rb-icon-aligncenter-fill' },
  { name: 'border verticle-fill', iconName: 'rb-icon-borderverticle-fill' },
  { name: 'pic center-fill', iconName: 'rb-icon-piccenter-fill' },
  { name: 'pic side-fill', iconName: 'rb-icon-picside-fill' },
  { name: 'folder open-fill', iconName: 'rb-icon-folderopen-fill' },
  { name: 'folder plus-fill', iconName: 'rb-icon-folderplus-fill' },
  { name: 'folder-fill', iconName: 'rb-icon-folder-fill' },
  { name: 'file-SQL', iconName: 'rb-icon-file-SQL' },
  { name: 'file plus-fill', iconName: 'rb-icon-fileplus-fill' },
  { name: 'file-fill', iconName: 'rb-icon-file-fill' },
  { name: 'copy-fill', iconName: 'rb-icon-copy-fill' },
  { name: 'headset-fill', iconName: 'rb-icon-headset-fill' },
  { name: 'phone-fill', iconName: 'rb-icon-phone-fill' },
  { name: 'pause circle-fill', iconName: 'rb-icon-pausecircle-fill' },
  { name: 'stop circle-fill', iconName: 'rb-icon-stopcircle-fill' },
  { name: 'play circle-fill', iconName: 'rb-icon-playcircle-fill' },
  { name: 'delete-fill', iconName: 'rb-icon-delete-fill' },
  { name: 'picture-fill', iconName: 'rb-icon-picture-fill' },
  { name: 'mail-fill', iconName: 'rb-icon-mail-fill' },
  { name: 'heart-fill', iconName: 'rb-icon-heart-fill' },
  { name: 'collection-fill', iconName: 'rb-icon-collection-fill' },
  { name: 'user-group-fill', iconName: 'rb-icon-user-group-fill' },
  { name: 'user plus-fill', iconName: 'rb-icon-userplus-fill' },
  { name: 'user-fill', iconName: 'rb-icon-user-fill' },
  { name: 'cog-fill', iconName: 'rb-icon-cog-fill' },
  { name: 'clock-fill', iconName: 'rb-icon-clock-fill' },
  { name: 'calendar alt-fill', iconName: 'rb-icon-calendaralt-fill' },
  { name: 'cloud download-fill', iconName: 'rb-icon-clouddownload-fill' },
  { name: 'cloud upload-fill', iconName: 'rb-icon-cloudupload-fill' },
  { name: 'exchange-fill', iconName: 'rb-icon-exchange-fill' },
  { name: 'info-circle-fill', iconName: 'rb-icon-info-circle-fill' },
  { name: 'question-circle-fill', iconName: 'rb-icon-question-circle-fill' },
  { name: 'exclamation circle-f', iconName: 'rb-icon-exclamationcircle-f' },
  { name: 'minus-circle-fill', iconName: 'rb-icon-minus-circle-fill' },
  { name: 'plus-circle-fill', iconName: 'rb-icon-plus-circle-fill' },
  { name: 'times-circle-fill', iconName: 'rb-icon-times-circle-fill' },
  { name: 'check-circle-fill', iconName: 'rb-icon-check-circle-fill' },
  { name: 'compress alt-fill', iconName: 'rb-icon-compressalt-fill' },
  { name: 'expand alt-fill', iconName: 'rb-icon-expandalt-fill' },
  { name: 'filter', iconName: 'rb-icon-filter' },
  { name: 'all', iconName: 'rb-icon-all' },
  { name: 'database-plus', iconName: 'rb-icon-database-plus' },
  { name: 'database', iconName: 'rb-icon-database' },
  { name: 'comment-lines', iconName: 'rb-icon-comment-lines' },
  { name: 'comment-dots', iconName: 'rb-icon-comment-dots' },
  { name: 'paper-plane', iconName: 'rb-icon-paper-plane' },
  { name: 'eye-slash', iconName: 'rb-icon-eye-slash' },
  { name: 'eye', iconName: 'rb-icon-eye' },
  { name: 'lightbulb', iconName: 'rb-icon-lightbulb' },
  { name: 'flag', iconName: 'rb-icon-flag' },
  { name: 'tag', iconName: 'rb-icon-tag' },
  { name: 'position', iconName: 'rb-icon-position' },
  { name: 'location', iconName: 'rb-icon-location' },
  { name: 'map', iconName: 'rb-icon-map' },
  { name: 'inbox-in', iconName: 'rb-icon-inbox-in' },
  { name: 'box', iconName: 'rb-icon-box' },
  { name: 'database-set', iconName: 'rb-icon-database-set' },
  { name: 'layer-group', iconName: 'rb-icon-layer-group' },
  { name: 'wind-cry', iconName: 'rb-icon-wind-cry' },
  { name: 'wind-smile', iconName: 'rb-icon-wind-smile' },
  { name: 'unlock', iconName: 'rb-icon-unlock' },
  { name: 'lock', iconName: 'rb-icon-lock' },
  { name: 'align-right', iconName: 'rb-icon-align-right' },
  { name: 'align-left', iconName: 'rb-icon-align-left' },
  { name: 'border-bottom', iconName: 'rb-icon-border-bottom' },
  { name: 'border-top', iconName: 'rb-icon-border-top' },
  { name: 'align-center', iconName: 'rb-icon-align-center' },
  { name: 'border-verticle', iconName: 'rb-icon-border-verticle' },
  { name: 'pic-center', iconName: 'rb-icon-pic-center' },
  { name: 'pic-side', iconName: 'rb-icon-pic-side' },
  { name: 'folder-open', iconName: 'rb-icon-folder-open' },
  { name: 'folder-plus', iconName: 'rb-icon-folder-plus' },
  { name: 'folder', iconName: 'rb-icon-folder' },
  { name: 'headset', iconName: 'rb-icon-headset' },
  { name: 'phone', iconName: 'rb-icon-phone' },
  { name: 'pause circle', iconName: 'rb-icon-pausecircle' },
  { name: 'stop circle', iconName: 'rb-icon-stopcircle' },
  { name: 'play circle', iconName: 'rb-icon-playcircle' },
  { name: 'delete', iconName: 'rb-icon-delete' },
  { name: 'picture', iconName: 'rb-icon-picture' },
  { name: 'mail', iconName: 'rb-icon-mail' },
  { name: 'like', iconName: 'rb-icon-like' },
  { name: 'collection', iconName: 'rb-icon-collection' },
  { name: 'user-group', iconName: 'rb-icon-user-group' },
  { name: 'account-plus', iconName: 'rb-icon-account-plus' },
  { name: 'account', iconName: 'rb-icon-account' },
  { name: 'cog', iconName: 'rb-icon-cog' },
  { name: 'clock', iconName: 'rb-icon-clock' },
  { name: 'calendar-alt', iconName: 'rb-icon-calendar-alt' },
  { name: 'cloud download', iconName: 'rb-icon-clouddownload' },
  { name: 'cloud upload', iconName: 'rb-icon-cloudupload' },
  { name: 'exchange', iconName: 'rb-icon-exchange' },
  { name: 'info-circle', iconName: 'rb-icon-info-circle' },
  { name: 'question-circle', iconName: 'rb-icon-question-circle' },
  { name: 'exclamation-circle', iconName: 'rb-icon-exclamation-circle' },
  { name: 'minus-circle', iconName: 'rb-icon-minus-circle' },
  { name: 'plus-circle', iconName: 'rb-icon-plus-circle' },
  { name: 'times-circle', iconName: 'rb-icon-times-circle' },
  { name: 'check-circle', iconName: 'rb-icon-check-circle' },
  { name: 'compress-alt', iconName: 'rb-icon-compress-alt' },
  { name: 'expand-alt', iconName: 'rb-icon-expand-alt' },
  { name: 'ban', iconName: 'rb-icon-ban' },
  { name: 'minus', iconName: 'rb-icon-minus' },
  { name: 'plus', iconName: 'rb-icon-plus' },
  { name: 'times', iconName: 'rb-icon-times' },
  { name: 'check', iconName: 'rb-icon-check' },
  { name: 'search-minus', iconName: 'rb-icon-search-minus' },
  { name: 'search-plus', iconName: 'rb-icon-search-plus' },
  { name: 'search', iconName: 'rb-icon-search' },
  { name: 'reply', iconName: 'rb-icon-reply' },
  { name: 'undo', iconName: 'rb-icon-undo' },
  { name: 'redo', iconName: 'rb-icon-redo' },
  { name: 'external-link', iconName: 'rb-icon-external-link' },
  { name: 'arrows-alt', iconName: 'rb-icon-arrows-alt' },
  { name: 'indent', iconName: 'rb-icon-indent' },
  { name: 'outdent', iconName: 'rb-icon-outdent' },
  { name: 'sort-line', iconName: 'rb-icon-sort-line' },
  { name: 'switch', iconName: 'rb-icon-switch' },
  { name: 'wind-descending', iconName: 'rb-icon-wind-descending' },
  { name: 'wind-ascending', iconName: 'rb-icon-wind-ascending' },
  { name: 'download', iconName: 'rb-icon-download' },
  { name: 'upload', iconName: 'rb-icon-upload' },
  { name: 'arrow-to-bottom', iconName: 'rb-icon-arrow-to-bottom' },
  { name: 'arrow-to-top', iconName: 'rb-icon-arrow-to-top' },
  { name: 'long-arrow-down', iconName: 'rb-icon-long-arrow-down' },
  { name: 'long-arrow-up', iconName: 'rb-icon-long-arrow-up' },
  { name: 'arrow-right', iconName: 'rb-icon-arrow-right' },
  { name: 'arrow-left', iconName: 'rb-icon-arrow-left' },
  { name: 'sort', iconName: 'rb-icon-sort' },
  { name: 'sort-down', iconName: 'rb-icon-sort-down' },
  { name: 'sort-up', iconName: 'rb-icon-sort-up' },
  { name: 'caret-right', iconName: 'rb-icon-caret-right' },
  { name: 'caret-left', iconName: 'rb-icon-caret-left' },
  { name: 'arrows-v', iconName: 'rb-icon-arrows-v' },
  { name: 'angle- double-down', iconName: 'rb-icon-angle-double-down' },
  { name: 'angle-double-up', iconName: 'rb-icon-angle-double-up' },
  { name: 'angle-double-right', iconName: 'rb-icon-angle-double-right' },
  { name: 'angle-double-left', iconName: 'rb-icon-angle-double-left' },
  { name: 'angle-down', iconName: 'rb-icon-angle-down' },
  { name: 'angle-up', iconName: 'rb-icon-angle-up' },
  { name: 'angle-right', iconName: 'rb-icon-angle-right' },
  { name: 'angle-left', iconName: 'rb-icon-angle-left' },
  { name: 'paperclip', iconName: 'rb-icon-paperclip' },
  { name: 'connection', iconName: 'rb-icon-connection' },
  { name: 'training', iconName: 'rb-icon-training' },
  { name: 'process', iconName: 'rb-icon-process' },
  { name: 'news', iconName: 'rb-icon-news' },
  { name: 'save', iconName: 'rb-icon-save' },
  { name: 'print', iconName: 'rb-icon-print' },
  { name: 'new-releases', iconName: 'rb-icon-new-releases' },
  { name: 'release', iconName: 'rb-icon-release' },
  { name: 'alert', iconName: 'rb-icon-alert' },
  { name: 'backspace', iconName: 'rb-icon-backspace' },
  { name: 'gem', iconName: 'rb-icon-gem' },
  { name: 'integral', iconName: 'rb-icon-integral' },
  { name: 'star-circle', iconName: 'rb-icon-star-circle' },
  { name: 'user-circle', iconName: 'rb-icon-user-circle' },
  { name: 'cloud-machine-fill', iconName: 'rb-icon-cloud-machine-fill' },
  { name: 'cloud-machine', iconName: 'rb-icon-cloud-machine' },
  { name: 'terminal-fill', iconName: 'rb-icon-terminal-fill' },
  { name: 'terminal', iconName: 'rb-icon-terminal' },
  { name: 'shopping-cart-fill', iconName: 'rb-icon-shopping-cart-fill' },
  { name: 'resource', iconName: 'rb-icon-resource' },
  { name: 'rank', iconName: 'rb-icon-rank' },
  { name: 'sync-alt', iconName: 'rb-icon-sync-alt' },
  { name: 'compass', iconName: 'rb-icon-compass' },
  { name: 'arrow-alt- from-top', iconName: 'rb-icon-arrow-alt-from-top' },
  { name: 'menu', iconName: 'rb-icon-menu' },
  { name: 'icon-drag', iconName: 'rb-icon-icon-drag' },
  { name: 'early-warning', iconName: 'rb-icon-early-warning' },
  { name: 'share', iconName: 'rb-icon-share' },
  { name: 'share', iconName: 'rb-icon-share1' },
  { name: 'management', iconName: 'rb-icon-management-' },
  { name: 'accesskeys', iconName: 'rb-icon-accesskeys' },
  { name: 'arrow-sort down-small', iconName: 'rb-icon-arrow-sortdown-smal' },
  { name: 'minus-square-fill', iconName: 'rb-icon-minus-square-fill' },
  { name: 'plus-square-fill', iconName: 'rb-icon-plus-square-fill' },
  { name: 'minus-square', iconName: 'rb-icon-minus-square' },
  { name: 'plus-square', iconName: 'rb-icon-plus-square' },
  { name: 'step mode', iconName: 'rb-icon-stepmode' },
  { name: 'scrolling mode', iconName: 'rb-icon-scrollingmode' },
  { name: 'shopping cart', iconName: 'rb-icon-shoppingcart' },
  { name: 'waiting-fill', iconName: 'rb-icon-waiting-fill' },
  { name: 'waiting', iconName: 'rb-icon-waiting' },
  { name: 'right-arrow-rect', iconName: 'rb-icon-right-arrow-rect' },
  { name: 'left-arrow-rect', iconName: 'rb-icon-left-arrow-rect' },
  { name: 'bell', iconName: 'rb-icon-bell' },
  { name: 'structured data', iconName: 'rb-icon-structured-data' },
  { name: 'vector', iconName: 'rb-icon-vector' },
  { name: 'NEW', iconName: 'rb-icon-NEW-copy' },
  { name: 'HOT', iconName: 'rb-icon-HOT-copy' },
  { name: 'home', iconName: 'rb-icon-home' },
  { name: 'monitoring', iconName: 'rb-icon-monitoring' },
  { name: 'drag', iconName: 'rb-icon-drag' },
  { name: 'diagnose', iconName: 'rb-icon-diagnose' },
  { name: 'ellipsis-v', iconName: 'rb-icon-ellipsis-vertical' },
  { name: 'loading', iconName: 'rb-icon-loading' },
  { name: 'gallery-view', iconName: 'rb-icon-gallery-view' },
  { name: 'Directory tree', iconName: 'rb-icon-Directory-tree' },
  { name: 'WIFI', iconName: 'rb-icon-WIFI' },
  { name: 'application', iconName: 'rb-icon-application' },
  { name: 'bug-report', iconName: 'rb-icon-bug-report' },
  { name: 'application group', iconName: 'rb-icon-applicationgroup' },
  { name: 'qrcode', iconName: 'rb-icon-qrcode' },
  { name: 'scan', iconName: 'rb-icon-scan' },
  { name: 'cut', iconName: 'rb-icon-cut' },
  { name: 'gift', iconName: 'rb-icon-gift' },
  { name: 'link', iconName: 'rb-icon-link' },
  { name: 'poweroff', iconName: 'rb-icon-poweroff' },
  { name: 'key', iconName: 'rb-icon-key' },
  { name: 'safety-certificate', iconName: 'rb-icon-safety-certificate' },
  { name: 'supervise', iconName: 'rb-icon-supervise' },
  { name: 'tag-subscipt', iconName: 'rb-icon-tag-subscipt' },
  { name: 'chart-pie-alt', iconName: 'rb-icon-chart-pie-alt' },
  { name: 'chart-relation', iconName: 'rb-icon-chart-relation' },
  { name: 'chart-scatter-plot', iconName: 'rb-icon-chart-scatter-plot' },
  { name: 'chart-area', iconName: 'rb-icon-chart-area' },
  { name: 'chart-line', iconName: 'rb-icon-chart-line' },
  { name: 'chart-bar', iconName: 'rb-icon-chart-bar' },
  { name: 'display-code', iconName: 'rb-icon-display-code' },
  { name: 'display-arrow-right', iconName: 'rb-icon-display-arrow-right' },
  { name: 'display-arrow-left', iconName: 'rb-icon-display-arrow-left' },
  { name: 'laptop-error', iconName: 'rb-icon-laptop-error' },
  { name: 'laptop-check', iconName: 'rb-icon-laptop-check' },
  { name: 'laptop', iconName: 'rb-icon-laptop' },
  { name: 'mobile-error', iconName: 'rb-icon-mobile-error' },
  { name: 'mobile-check', iconName: 'rb-icon-mobile-check' },
  { name: 'mobile-alt', iconName: 'rb-icon-mobile-alt' },
  { name: 'nail', iconName: 'rb-icon-nail' },
  { name: 'nail-fixed', iconName: 'rb-icon-nail-fixed' },
  { name: 'edit', iconName: 'rb-icon-edit' },
  { name: 'dollar', iconName: 'rb-icon-dollar' },
  { name: 'transanction', iconName: 'rb-icon-transanction' },
  { name: 'filter-fill', iconName: 'rb-icon-filter-fill' },
  { name: 'all-fill', iconName: 'rb-icon-all-fill' },
  { name: 'database plus-fill', iconName: 'rb-icon-databaseplus-fill' },
  { name: 'database-fill', iconName: 'rb-icon-database-fill' },
  { name: 'comment lines-fill', iconName: 'rb-icon-commentlines-fill' },
  { name: 'comment dots-fill', iconName: 'rb-icon-commentdots-fill' },
  { name: 'paper plane-fill', iconName: 'rb-icon-paperplane-fill' },
  { name: 'eye slash-fill', iconName: 'rb-icon-eyeslash-fill' },
  { name: 'eye-fill', iconName: 'rb-icon-eye-fill' },
  { name: 'lightbulb-fill', iconName: 'rb-icon-lightbulb-fill' },
  { name: 'flag-fill', iconName: 'rb-icon-flag-fill' },
  { name: 'tag-fill', iconName: 'rb-icon-tag-fill' },
  { name: 'position-fill', iconName: 'rb-icon-position-fill' },
  { name: 'location-fill', iconName: 'rb-icon-location-fill' },
  { name: 'map-fill', iconName: 'rb-icon-map-fill' },
  { name: 'inbox in-fill', iconName: 'rb-icon-inboxin-fill' },
  { name: 'box-fill', iconName: 'rb-icon-box-fill' },
  { name: 'database set-fill', iconName: 'rb-icon-databaseset-fill' },
  { name: 'layer group-fill', iconName: 'rb-icon-layergroup-fill' },
  { name: 'social_fb', iconName: 'rb-icon-icon-test69' },
  { name: 'social_linkedin', iconName: 'rb-icon-icon-test70' },
  { name: 'social_sina', iconName: 'rb-icon-icon-test71' },
  { name: 'social_google', iconName: 'rb-icon-icon-test72' },
  { name: 'social_naver', iconName: 'rb-icon-icon-test73' },
  { name: 'social_stackflow', iconName: 'rb-icon-icon-test74' },
  { name: 'social_youtube', iconName: 'rb-icon-icon-test75' },
  { name: 'social_github', iconName: 'rb-icon-icon-test76' },
  { name: 'social_twitter', iconName: 'rb-icon-icon-test77' },
  { name: 'applets', iconName: 'rb-icon-icon-test78' },
  { name: 'social_wechat', iconName: 'rb-icon-icon-test79' },
  { name: 'social_server_fault', iconName: 'rb-icon-icon-test80' },
  { name: 'dingtalk', iconName: 'rb-icon-dingtalk' },
  { name: 'alipay', iconName: 'rb-icon-alipay' },
  { name: 'taobao', iconName: 'rb-icon-taobao' },
  { name: '1688', iconName: 'rb-icon-icon-test84' }
])
</script>

<style lang="scss" scoped>
</style>