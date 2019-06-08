<template>
  <div></div>
</template>

<script>
import { writeTo } from "../logger";
import VueLifeCycle from "./VueLifeCycle.mixin.vue";
const LOG_CONTAINER_ELEMENT_ID = "vue-mixins-order";
const TARGET_COMPONENT = "[Component mixins VueLifeCycle]";
writeTo(LOG_CONTAINER_ELEMENT_ID, `${TARGET_COMPONENT} Vue Script`);

export default {
  mixins: [VueLifeCycle],
  beforeCreate() {
    const log = `${TARGET_COMPONENT} beforeCreate()`;
    writeTo(LOG_CONTAINER_ELEMENT_ID, log);
  },
  created() {
    const log = `${TARGET_COMPONENT} created()`;
    writeTo(LOG_CONTAINER_ELEMENT_ID, log);
  },
  beforeMount() {
    const log = `${TARGET_COMPONENT} beforeMount()`;
    writeTo(LOG_CONTAINER_ELEMENT_ID, log);
  },
  mounted() {
    const log = `${TARGET_COMPONENT} mounted()`;
    writeTo(LOG_CONTAINER_ELEMENT_ID, log);
  },
  beforeUpdate() {
    const log = `${TARGET_COMPONENT} beforeUpdate()`;
    writeTo(LOG_CONTAINER_ELEMENT_ID, log);
  },
  updated() {
    const log = `${TARGET_COMPONENT} update()`;
    writeTo(LOG_CONTAINER_ELEMENT_ID, log);
  },
  beforeDestory() {
    const log = `${TARGET_COMPONENT} beforeDestory()`;
    writeTo(LOG_CONTAINER_ELEMENT_ID, log);
  },
  destroyed() {
    const log = `${TARGET_COMPONENT} destroyed()`;
    writeTo(LOG_CONTAINER_ELEMENT_ID, log);
  }
};
</script>
