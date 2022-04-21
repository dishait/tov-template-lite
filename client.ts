// 现代重置 css
import 'modern-css-reset'

// unocss
import 'uno.css'

// 你的全局 css
import './global.css'

import App from './app.vue'
import { createApp } from 'vue'
import { useModules } from 'virtual:modules'

const app = createApp(App)

useModules(app)

app.mount('#app')
