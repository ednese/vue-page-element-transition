<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <div>
    <div class="title">
      <h1 class="title">Page Example</h1>
    </div>
    <RouterLink to="/" class="box_container example_page">
      <div class="example box" v-element-transition:example>Home</div>
    </RouterLink>
  </div>
</template>

<style>
.example_page {
  margin-top: 24px;
}
.example_page .example {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 600px;
  height: 300px;
}
</style>
