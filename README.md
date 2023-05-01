## Introduction

[**Vue Page Element Transition**](https://evansende.com) is a Simple Vue Plugin That Creates Transitions Between Elements On Different Pages:
<!-- ![](.github/demo.gif) -->

## Usage

To start using the plugin, install it to your project:

```bash
npm i vue-page-element-transition
```

Import it


```js
import vueElementTransition from './plugins/page-element-transition'

// ...

app.use(vueElementTransition)
```

Use vue transitions

```js
<RouterView v-slot="{ route, Component }">
 <Transition>
   <component :is="Component" :key="route.path" />
 </Transition>
</RouterView>
//...
<style>
.v-enter-active, .v-leave-active {
 transition: opacity 0.5s ease;
}
</style>
```

And add the "v-element-transition" class to the target elements

```html
<div v-element-transition>Example</div>
```