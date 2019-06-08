<template>
  <div></div>
</template>

<script>
import { init, writeTo } from "../logger";
const EXTENDS_LOG_CONTAINER_ELEMENT_ID = "vue-extends-order";
const TARGET_COMPONENT = "[VueLifeCycle]";
init(EXTENDS_LOG_CONTAINER_ELEMENT_ID, "[Test Extends]");
writeTo(EXTENDS_LOG_CONTAINER_ELEMENT_ID, `${TARGET_COMPONENT} Vue Script`);

export default {
  beforeCreate() {
    const log = `${TARGET_COMPONENT} beforeCreate()`;
    writeTo(EXTENDS_LOG_CONTAINER_ELEMENT_ID, log);
  },
  created() {
    const log = `${TARGET_COMPONENT} created()`;
    writeTo(EXTENDS_LOG_CONTAINER_ELEMENT_ID, log);
  },
  beforeMount() {
    const log = `${TARGET_COMPONENT} beforeMount()`;
    writeTo(EXTENDS_LOG_CONTAINER_ELEMENT_ID, log);
  },
  mounted() {
    const log = `${TARGET_COMPONENT} mounted()`;
    writeTo(EXTENDS_LOG_CONTAINER_ELEMENT_ID, log);
  },
  beforeUpdate() {
    const log = `${TARGET_COMPONENT} beforeUpdate()`;
    writeTo(EXTENDS_LOG_CONTAINER_ELEMENT_ID, log);
  },
  updated() {
    const log = `${TARGET_COMPONENT} update()`;
    writeTo(EXTENDS_LOG_CONTAINER_ELEMENT_ID, log);
  },
  beforeDestory() {
    const log = `${TARGET_COMPONENT} beforeDestory()`;
    writeTo(EXTENDS_LOG_CONTAINER_ELEMENT_ID, log);
  },
  destroyed() {
    const log = `${TARGET_COMPONENT} destroyed()`;
    writeTo(EXTENDS_LOG_CONTAINER_ELEMENT_ID, log);
  }
  // beforeCreate() {
  //   console.log("[VueLifeCycle] beforeCreate");
  // },
  // created() {
  //   console.log("[VueLifeCycle] created");
  // },
  // beforeMount() {
  //   console.log("[VueLifeCycle] beforeMount");
  // },
  // mounted() {
  //   console.log("[VueLifeCycle] mounted");
  // },
  // beforeUpdate() {
  //   console.log("[VueLifeCycle] beforeUpdate");
  // },
  // updated() {
  //   console.log("[VueLifeCycle] updated");
  // },
  // beforeDestory() {
  //   console.log("[VueLifeCycle] beforeDestory");
  // },
  // destroyed() {
  //   console.log("[VueLifeCycle] destroyed");
  // }
};
</script>
