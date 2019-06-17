<template>
  <div >
    <h1>vue-router with meta</h1>
    <ul>
      <li><router-link :to="baseUrl" >Home</router-link></li>
      <li><router-link :to="`${baseUrl}/about`">About</router-link></li>
    </ul>
    
    <transition name="page" mode="out-in">
      <router-view></router-view>
    </transition>
    <p>© KJB {{ this.baseCountryName }} . All rights reserved.</p>
  </div>
</template>

<script>
export default {
  // 아래와 같이 metaInfo를 선언하면 this로 접근해서 수정할 수 없다. 정적일 때 사용.
  metaInfo: {
    title: "Default Title",
    titleTemplate: "%s | My Awesome Webapp"
  },
  computed: {
    baseUrl() {
      const routeCountry = this.$route.params.country;
      return routeCountry ? `/${routeCountry}` : "/";
    }
  }
};
</script>

<style>
html,
body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
    Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  color: #2c3e50;
}

#app {
  padding: 0 20px;
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #333;
}

li {
  float: left;
}

li a {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

/* Change the link color to #111 (black) on hover */
li a:hover {
  background-color: #111;
}
</style>
