import router from './router/index'
import Vue from 'vue'

import App from './App.vue'

new Vue({
  router,
  ...App
}).$mount('#app')
