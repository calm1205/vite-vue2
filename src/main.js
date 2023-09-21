import Vue from "vue"
import Vuex from "vuex"
import App from "./App.vue"
import router from "./router"
import "material-icons/iconfont/material-icons.css"
import Logo from "./components/atoms/Logo.vue"

Vue.config.productionTip = false
Vue.use(Vuex)
Vue.component("Logo", Logo)

const store = new Vuex.Store({
  state: {
    count: 0,
  },
  getters: {
    doubleCount: ({ count }) => count * 2,
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
