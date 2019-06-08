<template>
  <div class="hello">

  </div>
</template>

<script>
export default {
  beforeCreate() {
    console.log("[VueLifeCycle] beforeCreate");
  },
  created() {
    console.log("[VueLifeCycle] created");
  },
  beforeMount() {
    console.log("[VueLifeCycle] beforeMount");
  },
  mounted() {
    console.log("[VueLifeCycle] mounted");
  },
  beforeUpdate() {
    console.log("[VueLifeCycle] beforeUpdate");
  },
  updated() {
    console.log("[VueLifeCycle] updated");
  },
  beforeDestory() {
    console.log('[VueLifeCycle] beforeDestory')
  },
  destroyed() {
    console.log('[VueLifeCycle] destroyed')
  }
};
</script>
