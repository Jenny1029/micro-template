<template>
  <div id="app">
    <div>
      <div class="nav-list">
        <router-link :class='["nav-item", activeNav==="/micro" ? "active-nav" : ""]'
                     to="/micro">我是基座导航</router-link>
        <router-link :class='["nav-item", activeNav===item.activeRule ? "active-nav" : ""]'
                     :to="item.activeRule"
                     v-for="(item, index) in microAppList"
                     :key="index">
          {{ item.name }}
        </router-link>
      </div>
      <div class="app-header">基座内容+业务公共部分</div>
      <div id="subapp"></div>
    </div>
  </div>
</template>

<script>
import microAppList from './microAppList'

export default {
  name: 'App',
  data() {
    return {
      microAppList,
      activeNav: '/micro',
    }
  },
  methods: {},
  watch: {
    $route(to, from) {
      console.log('$route--', to, from)
      this.activeNav = to.path
    },
  },
}
</script>

<style scoped>
#app {
  margin: 0;
}
.nav-list {
  height: 5vh;
  line-height: 5vh;
  background-color: #d88;
  text-align: center;
}

.nav-item {
  display: inline-block;
  padding: 0 20px;
  text-decoration: none;
  color: white;
}

.active-nav {
  background: #d66;
}

.app-header {
  height: 10vh;
  line-height: 10vh;
  font-size: 30px;
  text-align: center;
}
</style>
