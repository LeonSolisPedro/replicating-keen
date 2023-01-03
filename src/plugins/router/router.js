import Vue from "vue"
import VueRouter from "vue-router"
import DashboardView from "@/views/Shared/DashboardView.vue"
import BaseController from "@/views/Shared/BaseController.vue"
import globalguard from "./globalguard"

Vue.use(VueRouter)

const router = new VueRouter({
  mode: "history",
  base: import.meta.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "dashboard",
      component: DashboardView,
      meta: { Authorize: true },
      children: [
        {
          path: "/unauthorized",
          component: () => import("@/views/Error/Unauthorized.vue"),
        },
        {
          path: "/employees",
          component: BaseController,
          meta: {Authorize: true, Roles: ["Administrador"]},
          children: [
            {
              path: "/employees/index",
              component: () => import("@/views/Employees/Index.vue"),
            },
            {
              path: "/employees/create",
              component: () => import("@/views/Employees/Create.vue"),
            }
          ],
        },
        {
          path: "/items",
          component: BaseController,
          meta: {Authorize: true, Roles: ["Administrador"]},
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
      name: "login",
      component: () => import("@/views/Account/LoginView.vue")
    },
    {
      path: "/signup",
      name: "signup",
      component: () => import("@/views/Account/SignUpView.vue")
    }
  ]
})


router.beforeEach(globalguard)


export default router
