<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
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
export default {
  name: "HelloWorld",
  data() {
    return {
      list: [
        {
          text: "item1",
          innerList: [
            { text: "1-1 Apple1" },
            { text: "1-2 Apple2" },
            { text: "1-3 Apple3" },
            { text: "1-4 Apple4" }
          ]
        },
        {
          text: "item2"
        },
        {
          text: "item3",
          innerList: [
            { text: "3-1 Banana1" },
            { text: "3-2 Banana2" },
            { text: "3-3 Banana3" },
            { text: "3-4 Banana4" }
          ]
        }
      ]
    };
  },
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
