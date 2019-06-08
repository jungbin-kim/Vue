<template>
  <div id="app">
    <!-- #1 HelloWorld Component 내부에서 mixin 방법 -->
    <HelloWorld :msg="msg" />
    <!-- #2 HelloWorld Component 외부에서 데이터 객체를 변수로 넘기는 방법 -->
    <!-- <HelloWorld2 :msg="msg" :list="list" /> -->
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue"; // #1
import HelloWorld2 from "./components/HelloWorld2.vue"; // #2

// #2 build 조건에 따라 다른 데이터 모듈을 임포트 (json format도 가능)
const HelloWorldListData = (() => {
  let result = "";
  switch (process.env.VUE_APP_MODE) {
    case "PROJECT2": {
      result = require("./components/data/HelloWorld.Project2.js");
      break;
    }
    default: {
      result = require("./components/data/HelloWorld.Default.js");
      break;
    }
  }
  return result;
})().default;

export default {
  name: "app",
  data() {
    return {
      msg: process.env.VUE_APP_MODE,
      list: HelloWorldListData.list
    };
  },
  components: {
    HelloWorld, // #1
    HelloWorld2 // #2
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
