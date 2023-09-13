import Vue from "vue"
import Vuex from "vuex"
import App from "./App.vue"
import router from "./router"
import "material-icons/iconfont/material-icons.css"

Vue.config.productionTip = false
Vue.use(Vuex)

new Vue({
  el: "#app",
  router,
  render: (h) => h(App),
})
