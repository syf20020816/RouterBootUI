```vue
<template>
  <RBTable :tableData="tData">
    <template #column>
      <RBTableItem key="id" name="id1" width="150px"></RBTableItem>
      <RBTableItem key="age" name="年龄" width="160px"></RBTableItem>
      <RBTableItem key="height" name="height" width="100px"></RBTableItem>
    </template>
  </RBTable>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'

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
```