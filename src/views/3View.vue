<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <RouterLink to="/1" class="third">
    <img v-element-transition src="src\assets\star-wars-wallpaper.jpg"/>
    <p v-element-transition:text>PAGE</p>
  </RouterLink>
</template>

<style>
.third img {
  width: 400px;
  height: 600px;
  object-fit: cover;
}

.third p {
  color: white;
  right: 0;
  position: absolute;
}
</style>
