<template>
  <div class="hello">
    <h1> [TestExtends] </h1>
  </div>
</template>

<script>
import VueLifeCycle from './VueLifeCycle'

export default {
  extends: VueLifeCycle,
  beforeCreate() {
    console.log("[TestExtends] beforeCreate");
  },
  created() {
    console.log("[TestExtends] created");
  },
  beforeMount() {
    console.log("[TestExtends] beforeMount");
  },
  mounted() {
    console.log("[TestExtends] mounted");
  },
  beforeUpdate() {
    console.log("[TestExtends] beforeUpdate");
  },
  updated() {
    console.log("[TestExtends] updated");
  },
  beforeDestory() {
    console.log('[TestExtends] beforeDestory')
  },
  destroyed() {
    console.log('[TestExtends] destroyed')
  }
};
</script>
