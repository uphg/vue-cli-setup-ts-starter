<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Vue2 + TypeScript + script setup App"/>
    <Count />
  </div>
</template>

<script setup lang="ts">
import Count from '@/components/Count.vue';
import HelloWorld from '@/components/HelloWorld.vue';
</script>
