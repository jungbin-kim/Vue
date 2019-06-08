<template>
  <div>
    <h1>Current Mode: {{ msg }}</h1>
    <h2> DynamicMixinComponent </h2>
    <dynamic-mixin-component></dynamic-mixin-component>
    <h2> DynamicJs </h2>
    <dynamic-js></dynamic-js>
  </div>
</template>

<script>
import DynamicMixinComponent from "./components/DynamicMixinComponentTest.vue";
import DynamicJs from "./components/DynamicJsTest.vue";

export default {
  name: "app",
  data() {
    return {
      msg: process.env.VUE_APP_MODE
    };
  },
  components: {
    DynamicMixinComponent,
    DynamicJs
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

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
