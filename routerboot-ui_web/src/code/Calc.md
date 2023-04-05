```html
<template>
  <RBCalc :calcNum="3" :initValue="0" name="a" doCalc="res.value=parseInt(a0.value)-parseInt(a1.value)+parseInt(a2.value)"></RBCalc>

</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
</script>
```