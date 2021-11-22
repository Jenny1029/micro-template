import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import { registerMicroApps, start } from 'qiankun';
import microAppList from './microAppList';

import './style/main.css'

Vue.config.productionTip = false


const router = new VueRouter({
  mode: 'history'
})

Vue.use(VueRouter)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

registerMicroApps(microAppList)
start()

