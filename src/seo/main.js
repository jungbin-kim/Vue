import router from "./router/index";
import Vue from "vue";
import VueMeta from "vue-meta";

Vue.use(VueMeta, {
  refreshOnceOnNavigation: true
});

import CommonMixin from "./common/Common.mixin.vue";
Vue.mixin(CommonMixin);

import App from "./App.vue";

new Vue({
  router,
  ...App
}).$mount("#app");
