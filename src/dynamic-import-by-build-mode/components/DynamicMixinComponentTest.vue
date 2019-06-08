<template>
  <div class="hello">
    <ul>
      <li v-for="(item, index) in list" :key="index">
        {{ item.text }}
        <ul v-if="item.innerList && item.innerList.length > 0">
          <li v-for="(l, k) in item.innerList" :key="k">
            {{ l.text }}
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
import { getDummyVueComponent } from "./data/index";
const DummyVueComponent = getDummyVueComponent(process.env.VUE_APP_MODE);

export default {
  name: "DynamicMixinComponent",
  mixins: [DummyVueComponent]
};
</script>
