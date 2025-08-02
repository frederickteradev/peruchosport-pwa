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

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/sw.js')
  .then(reg => console.log('[SW] Registrado', reg))
  .catch(err => console.error('[SW] Error', err));
  });
  }
