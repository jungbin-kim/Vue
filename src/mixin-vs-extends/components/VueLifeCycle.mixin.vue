<template>
  <div></div>
</template>

<script>
import { init, writeTo } from "../logger";
const MIXINS_LOG_CONTAINER_ELEMENT_ID = "vue-mixins-order";
const TARGET_COMPONENT = "[VueLifeCycle]";
init(MIXINS_LOG_CONTAINER_ELEMENT_ID, "[Test Mixins]");
writeTo(MIXINS_LOG_CONTAINER_ELEMENT_ID, `${TARGET_COMPONENT} Vue Script`);

export default {
  beforeCreate() {
    const log = `${TARGET_COMPONENT} beforeCreate()`;
    writeTo(MIXINS_LOG_CONTAINER_ELEMENT_ID, log);
  },
  created() {
    const log = `${TARGET_COMPONENT} created()`;
    writeTo(MIXINS_LOG_CONTAINER_ELEMENT_ID, log);
  },
  beforeMount() {
    const log = `${TARGET_COMPONENT} beforeMount()`;
    writeTo(MIXINS_LOG_CONTAINER_ELEMENT_ID, log);
  },
  mounted() {
    const log = `${TARGET_COMPONENT} mounted()`;
    writeTo(MIXINS_LOG_CONTAINER_ELEMENT_ID, log);
  },
  beforeUpdate() {
    const log = `${TARGET_COMPONENT} beforeUpdate()`;
    writeTo(MIXINS_LOG_CONTAINER_ELEMENT_ID, log);
  },
  updated() {
    const log = `${TARGET_COMPONENT} update()`;
    writeTo(MIXINS_LOG_CONTAINER_ELEMENT_ID, log);
  },
  beforeDestory() {
    const log = `${TARGET_COMPONENT} beforeDestory()`;
    writeTo(MIXINS_LOG_CONTAINER_ELEMENT_ID, log);
  },
  destroyed() {
    const log = `${TARGET_COMPONENT} destroyed()`;
    writeTo(MIXINS_LOG_CONTAINER_ELEMENT_ID, log);
  }
};
</script>
