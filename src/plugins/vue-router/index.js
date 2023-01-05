import Vue from "vue"
import VueRouter from "vue-router"
import router from "./router"
import globalguard from "./globalguard"
import redirects from "./redirects"

Vue.use(VueRouter)
const vuerouter = new VueRouter(router)
vuerouter.beforeEach((to, from, next) => {
  globalguard(to, from, next)
  redirects(to, from, next)
})

export default vuerouter