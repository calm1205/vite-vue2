import Vue from "vue"
import VueRouter from "vue-router"
import { ConclusionVersion } from "@/components/pages/index"

Vue.use(VueRouter)

const renderComponent = (component) => ({ render: (h) => h(component) })

const routes = [
  { path: "/", component: renderComponent(ConclusionVersion) },
  { path: "/fixed", component: renderComponent(ConclusionVersion) },
  { path: "/knowledge" },
  { path: "/lowConsultation" },
  { path: "/templates" },
  { path: "/tests" },
]

const router = new VueRouter({ mode: "history", routes })

export default router
