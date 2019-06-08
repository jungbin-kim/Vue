import Vue from "vue";
import App from "./App.mixin-extends.vue";

new Vue({
  render: h => h(App)
}).$mount("#app");
