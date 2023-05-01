import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vueElementTransition from './plugins/page-element-transition'

import './assets/main.css'

const app = createApp(App)

app.use(vueElementTransition)
app.use(router)

app.mount('#app')
