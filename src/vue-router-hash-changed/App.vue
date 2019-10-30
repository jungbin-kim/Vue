<template>
  <div>
    <h1>vue-router using hash on history mode</h1>
    <ul>
      <li>
        <router-link :to="'/page1'">Page1</router-link>
      </li>
      <li>
        <router-link :to="'/page2'">Page2</router-link>
      </li>
    </ul>

    <transition name="page" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {};
</script>
