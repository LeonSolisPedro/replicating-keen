import { createRouter } from 'vue-router'
import routes from "./router"
import globalguard from "./globalguard"
import redirects from "./redirects"

const router = new createRouter(routes)
router.beforeEach((to, from, next) => globalguard(to, from, next))
router.beforeEach((to, from, next) => redirects(to, from, next))
export default router