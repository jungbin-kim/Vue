<template>
  <div class="hello">
    <h1> [TestMixin] </h1>
  </div>
</template>

<script>
import VueLifeCycle from './VueLifeCycle'

export default {
  mixins: [VueLifeCycle],
  beforeCreate() {
    console.log("[TestMixin] beforeCreate");
  },
  created() {
    console.log("[TestMixin] created");
  },
  beforeMount() {
    console.log("[TestMixin] beforeMount");
  },
  mounted() {
    console.log("[TestMixin] mounted");
  },
  beforeUpdate() {
    console.log("[TestMixin] beforeUpdate");
  },
  updated() {
    console.log("[TestMixin] updated");
  },
  beforeDestory() {
    console.log('[TestMixin] beforeDestory')
  },
  destroyed() {
    console.log('[TestMixin] destroyed')
  }
};
</script>
