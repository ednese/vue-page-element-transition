<script setup lang="ts">
import { RouterLink, useRoute } from 'vue-router'
const route = useRoute()
</script>

<template>
  <div class="content">
    <div class="title">
      <h1>Vue Page Element Transition V1</h1>
      <h2>Simple Vue Plugin That Creates Transitions Between Elements On Different Pages</h2>
    </div>
    <RouterLink to="/example" class="box_container home">
      <div class="example box" v-element-transition:example>Example</div>
    </RouterLink>
    <div class="title">
      <h2>Getting Started</h2>
    </div>
    <div class="instruction">
      <p class="code_title">installation</p>
      <code class="code">npm i vue-page-element-transition</code>
    </div>
    <div class="instruction">
      <p class="code_title">usage</p>
      <p>Import the plugin</p>
      <code class="code">
        <p>import vueElementTransition from './plugins/page-element-transition'</p>
        <span>//...</span>
        <span>app.use(vueElementTransition)</span>
      </code>
      <p>Use vue transitions</p>
      <code class="code">
        <span>{{'<RouterView v-slot="{ route, Component }">'}}</span>
        <span>{{' <Transition>'}}</span>
        <span>{{'   <component :is="Component" :key="route.path" />'}}</span>
        <span>{{' </Transition>'}}</span>
        <span>{{'</RouterView>'}}</span>
        <span>//...</span>
        <span>{{'<style>'}}</span>
        <span>{{'.v-enter-active, .v-leave-active {'}}</span>
        <span>{{' transition: opacity 0.5s ease;'}}</span>
        <span>{{'}'}}</span>
        <span>{{'</style>'}}</span>
      </code>
      <p>Add the "v-element-transition" class to the target elements</p>
      <code class="code">
        <span>{{'<div v-element-transition>Example</div>'}}</span>
      </code>
    </div>
    <div class="author">Created by <a href="https://evansende.com" target="_blank">Evan Sende</a> in 2023</div>
  </div>
</template>

<style>
.content {
  width: 100%;
  max-width: 600px;
}
.title {
  margin: auto;
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
.v-leave-active .title,
.v-enter-active .instruction,
.v-leave-active .instruction {
  opacity: 0;
}

.home {
  margin-top: 24px;
}
.home .example {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 400px;
  height: 100px;
}

.instruction {
  margin-top: 32px;
  transition: opacity 300ms ease;
}

.instruction p {
  margin-top: 8px;
}

.code_title {
  text-transform: uppercase;
  color: grey;
  font-weight: 500;
}

.code {
  margin-top: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: white;
  border-radius: 4px;
  padding: 8px;
  width: 100%;
}
span {
  white-space: pre;
}

.author {
  margin-top: 16px
}

.author a {
  color: grey;
  text-decoration: none;
}

</style>
