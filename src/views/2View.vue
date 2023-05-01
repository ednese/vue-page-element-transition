<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <RouterLink to="/1" class="second">
    <p v-element-transition:text>TEXT</p>
    <img v-element-transition src="src\assets\whiplash-wallpaper.jpg"/>
  </RouterLink>
</template>

<style>
.second img {
  width: 600px;
  height: 300px;
  object-fit: cover;
}
</style>
