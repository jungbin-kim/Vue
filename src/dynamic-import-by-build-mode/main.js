/**
 * 이 프로젝트은 빌드 모드에 따라 import하는 대상을 다르게 하는 방법에 관한 것이다.
 * 빌드 모드에 따라 다른 js 파일 / vue 파일을 import 해본다.
 */

import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
