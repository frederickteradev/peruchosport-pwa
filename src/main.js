import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import AOS from 'aos'
import '../node_modules/aos/dist/aos.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min'
import './style.css'

AOS.init()

createApp(App).use(router).mount('#app')
