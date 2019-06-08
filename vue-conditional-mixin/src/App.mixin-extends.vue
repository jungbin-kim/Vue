<template>
  <div id="app">
    <test-extends-vue-life-cycle/>
    <test-mixin-vue-life-cycle/>
  </div>
</template>

<script>
import TestExtendsVueLifeCycle from "./components/TestExtendsVueLifeCycle.vue";
import TestMixinVueLifeCycle from "./components/TestMixinVueLifeCycle.vue"; // #2

export default {
  components: {
    TestExtendsVueLifeCycle,
    TestMixinVueLifeCycle
  }
};
</script>
