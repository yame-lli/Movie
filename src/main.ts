import { createApp } from 'vue'
import './reset.css'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import piniaPlugin from './piniaPlugin'
import 'uno.css'
import "element-plus/theme-chalk/el-notification.css";
import 'animate.css';


const pinia = createPinia()
pinia.use(piniaPlugin({ key: 'pinia' }))


createApp(App).use(pinia).use(router).mount('#app')
