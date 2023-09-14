import Vue from "vue"
import Vuex from "vuex"
import App from "./App.vue"
import router from "./router"
import "material-icons/iconfont/material-icons.css"

Vue.config.productionTip = false
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 0,
  },
  getters: {
    count: ({ count }) => count,
  },
  mutations: {
    increment: (state) => state.count++,
    decrement: (state) => state.count--,
    reset: (state) => (state.count = 0),
  },
})

new Vue({
  el: "#app",
  router,
  store,
  render: (h) => h(App),
})
