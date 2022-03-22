<template>
  <div class="count">
    <p>{{ count }}</p>
    <el-button @click="count += 1">点击+1</el-button>
  </div>
</template>

<script setup lang="ts">
import { ref } from '@vue/composition-api'

const count = ref(0)
</script>