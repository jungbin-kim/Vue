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
  name: "HelloWorld2",
  props: {
    msg: String,
    list: Array
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
