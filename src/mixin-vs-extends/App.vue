<template>
  <div id="app">
    <test-extends-vue-life-cycle/>
    <test-mixin-vue-life-cycle/>
  </div>
</template>

<script>
// import를 하면 해당 vue 파일의 script에 정의된 내용은 실행이 됨.
// 대신 vue 객체 내 정의된 것들은 실행하지 않음.
import TestExtendsVueLifeCycle from "./components/ComponentExtendsVueLifeCycle";
import TestMixinVueLifeCycle from "./components/ComponentMixinVueLifeCycle"; // #2

export default {
  components: {
    TestExtendsVueLifeCycle,
    TestMixinVueLifeCycle
  }
};
</script>
