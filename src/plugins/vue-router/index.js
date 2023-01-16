import Vue from "vue"
import VueRouter from "vue-router"
import routes from "./router"
import globalguard from "./globalguard"
import redirects from "./redirects"

Vue.use(VueRouter)

const router = new VueRouter(routes)
router.beforeEach((to, from, next) => {
  globalguard(to, from, next)
  redirects(to, from, next)
})
export default router