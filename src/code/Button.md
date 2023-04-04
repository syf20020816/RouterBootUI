```vue
<template>
        <RBButton round>测试按钮-test</RBButton>
        <RBButton type="primary">测试按钮-test</RBButton>
        <RBButton type="success">测试按钮-test</RBButton>
        <RBButton round type="warning">测试按钮-test</RBButton>
        <RBButton round type="error">测试按钮-test</RBButton>
        <RBButton type="info">测试按钮-test</RBButton>
        <RBButton type="dark" icon="rb-icon-hezuo">测试按钮-test</RBButton>
        <RBButton type="dark" icon="rb-icon-hezuo"></RBButton>
        <RBButton type="dark" icon="rb-icon-hezuo" round size="large"></RBButton>
        <RBButton type="info" icon="rb-icon-hezuo" circle size="small"></RBButton>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
</script>
```