<template>
  <div></div>
</template>

<script>
import VueLifeCycle from "./VueLifeCycle.extends.vue";
import { writeTo } from "../logger";
const LOG_CONTAINER_ELEMENT_ID = "vue-extends-order";
const TARGET_COMPONENT = "[Component extends VueLifeCycle]";
writeTo(LOG_CONTAINER_ELEMENT_ID, `${TARGET_COMPONENT} Vue Script`);

export default {
  extends: VueLifeCycle,
  data() {
    return {
      existData: true
    };
  },
  methods: {
    existMethods() {
      return true;
    }
  },
  computed: {
    existComputed() {
      return true;
    }
  },
  beforeCreate() {
    const log = `${TARGET_COMPONENT} beforeCreate() 
      <ul><li>this 가 생성 안된 상태.</li>
      <li>현재 Vue Component에 있는 data, computed, methods 등에 접근 불가</li></ul>`;
    writeTo(LOG_CONTAINER_ELEMENT_ID, log);
  },
  created() {
    const log = `${TARGET_COMPONENT} created() 
      <ul><li>this는 생성됨.</li>
      <li>Is 'this.$el' exist? ${!!this.$el}</li>
      <li>Is 'this.existData' exist? ${!!this.existData}</li>
      <li>Is 'this.existMethods' exist? ${!!this.existMethods}</li>
      <li>Is 'this.existComputed' exist? ${!!this.existComputed}</li></ul>`;
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
