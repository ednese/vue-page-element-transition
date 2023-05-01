<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <RouterLink to="/" class="first">
    <img v-element-transition src="src\assets\spierman-wallpaper.jpg"/>
    <p v-element-transition:text>TEXT</p>
  </RouterLink>
</template>

<style>
.first img {
  width: 1000px;
  height: 450px;
  object-fit: cover;
  /* height: auto; */
}
@media (max-width: 1024px) {
  .first img {
    width: 50%;
  }
}
</style>
