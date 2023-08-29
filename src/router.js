import Vue from "vue"
import VueRouter from "vue-router"
import { Logo } from "@/components/atoms/index"

Vue.use(VueRouter)

const Foo = { render: (h) => h(Logo) }
const Bar = { render: (h) => h(Logo) }

const routes = [
  { path: "/", name: "home", component: Foo },
  { path: "/index", name: "index", component: Bar },
]

const router = new VueRouter({ mode: "history", routes })

export default router
