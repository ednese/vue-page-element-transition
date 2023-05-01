<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <main>
    <RouterView v-slot="{ route, Component }">
      <Transition>
        <component :is="Component" :key="route.path" />
      </Transition>
    </RouterView>
  </main>
</template>

<style>
[class*='v-enter-active'],
[class*='v-leave-active'] {
  transition: translate 1000ms ease;
}

.v-enter-active,
.v-enter-to {
  position: absolute;
  opacity: 0;
  /* padding: inherit; */
}

.nav {
  position: absolute;
  display: flex;
  gap: 4px;
  top: 0;
}

.title {
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  max-width: 500px;
  text-align: center;
  transition: opacity 300ms ease;
}

.title h1,
.page {
  font-weight: bold;
}

.v-enter-active .title,
.v-leave-active .title {
  opacity: 0;
}

.page {
  margin-top: 16px;
}

/* v-enter-active v-enter-to */

/* // .mobile,
// .safari
//   [class*="v-enter-active"],
//   [class*="v-leave-active"]
//     transition ease .5s */
</style>
