import { createRouter } from 'vue-router'
import routes from "./router"
import roleplugin from "./roleplugin"
import redirectplugin from "./redirectplugin"

const router = new createRouter(routes)
router.beforeEach((to, from, next) => roleplugin(to, from, next))
router.beforeEach((to, from, next) => redirectplugin(to, from, next))
export default router