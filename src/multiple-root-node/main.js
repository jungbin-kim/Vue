import Vue from "vue";
import App from "./App.vue";

import { Plugin } from "vue-fragment";
Vue.use(Plugin);

new Vue({
  render: h => h(App)
}).$mount("#app");
