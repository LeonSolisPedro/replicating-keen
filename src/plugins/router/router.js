import Vue from "vue"
import VueRouter from "vue-router"
import DashboardView from "@/views/Shared/DashboardView.vue"
import BaseController from "@/views/Shared/BaseController.vue"
import globalBeforeEach from "./globalguard"
import redirects from "./redirects"

Vue.use(VueRouter)

const router = new VueRouter({
  mode: "history",
  base: import.meta.env.BASE_URL,
  routes: [
    {
      path: "/",
      component: DashboardView,
      meta: { Authorize: true },
      children: [
        {
          path: "/admin",
          component: () => import("@/views/Dashboards/Admin.vue"),
          meta: {Authorize: true, Roles: ["Administrator"] }
        },
        {
          path: "/employee",
          component: () => import("@/views/Dashboards/Employee.vue"),
          meta: {Authorize: true, Roles: ["Employee"] }
        },
        {
          path: "/unauthorized",
          component: () => import("@/views/Shared/Error/Unauthorized.vue"),
        },
        {
          path: "/items",
          component: BaseController,
          meta: {Authorize: true, Roles: ["Administrator,Employee"]},
          children: [
            {
              path: "/items/index",
              component: () => import("@/views/Items/Index.vue"),
            },
            {
              path: "/items/create",
              component: () => import("@/views/Items/Create.vue"),
            }
          ]
        }
      ]
    },
    {
      path: "/login",
      component: () => import("@/views/Account/LoginView.vue")
    },
    {
      path: "/signup",
      component: () => import("@/views/Account/SignUpView.vue")
    },
  ]
})


router.beforeEach((to, from, next) => {
  globalBeforeEach(to, from, next)
  redirects(to, from, next)
})


export default router
