import DashboardView from "@/views/Shared/DashboardView.vue"
import BaseController from "@/views/Shared/BaseController.vue"

const routes = {
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
          component: () => import("@/views/Shared/Dashboards/Admin.vue"),
          meta: {Authorize: true, Roles: ["Administrator"] }
        },
        {
          path: "/employee",
          component: () => import("@/views/Shared/Dashboards/Employee.vue"),
          meta: {Authorize: true, Roles: ["Employee"] }
        },
        {
          path: "/unauthorized",
          component: () => import("@/views/Shared/Error/Unauthorized.vue"),
        },

        //Keen components
        {
          path: "/components",
          component: BaseController,
          children: [
            {
              path: "/components/index",
              component: () => import("@/views/Components/Index.vue")
            },
            {
              path: "/components/utilities",
              component: () => import("@/views/Components/Utilities.vue"),
            },
            {
              path: "/components/flexlayouts",
              component: () => import("@/views/Components/FlexLayouts.vue"),
            },
            {
              path: "/components/text",
              component: () => import("@/views/Components/Text.vue"),
            },
            {
              path: "/components/background",
              component: () => import("@/views/Components/Background.vue"),
            },
            {
              path: "/components/borders",
              component: () => import("@/views/Components/Borders.vue"),
            },
            {
              path: "/components/opacity",
              component: () => import("@/views/Components/Opacity.vue"),
            },
            {
              path: "/components/controls",
              component: () => import("@/views/Components/Controls.vue"),
            },
            {
              path: "/components/checksandradios",
              component: () => import("@/views/Components/ChecksAndRadios.vue"),
            },
            {
              path: "/components/inputgroup",
              component: () => import("@/views/Components/InputGroup.vue"),
            },
            {
              path: "/components/floatinglabels",
              component: () => import("@/views/Components/FloatingLabels.vue"),
            },
            {
              path: "/components/advancedcontrols",
              component: () => import("@/views/Components/AdvancedControls.vue"),
            },
            {
              path: "/components/buttons",
              component: () => import("@/views/Components/Buttons.vue"),
            },
            {
              path: "/components/accordion",
              component: () => import("@/views/Components/Accordion.vue"),
            },
            {
              path: "/components/alerts",
              component: () => import("@/views/Components/Alerts.vue"),
            },
            {
              path: "/components/badges",
              component: () => import("@/views/Components/Badges.vue"),
            },
            {
              path: "/components/breadcrumps",
              component: () => import("@/views/Components/Breadcrumps.vue"),
            },
            {
              path: "/components/bullets",
              component: () => import("@/views/Components/Bullets.vue"),
            },
            {
              path: "/components/cards",
              component: () => import("@/views/Components/Cards.vue"),
            },
            {
              path: "/components/carousel",
              component: () => import("@/views/Components/Carousel.vue"),
            },
            {
              path: "/components/indicator",
              component: () => import("@/views/Components/Indicator.vue"),
            },
            {
              path: "/components/pageloading",
              component: () => import("@/views/Components/PageLoading.vue"),
            },
            {
              path: "/components/modal",
              component: () => import("@/views/Components/Modal.vue"),
            },
            {
              path: "/components/overlay",
              component: () => import("@/views/Components/Overlay.vue"),
            },
            {
              path: "/components/pagination",
              component: () => import("@/views/Components/Pagination.vue"),
            },
            {
              path: "/components/popovers",
              component: () => import("@/views/Components/Popovers.vue"),
            },
            {
              path: "/components/hover",
              component: () => import("@/views/Components/Hover.vue"),
            },
            {
              path: "/components/pulse",
              component: () => import("@/views/Components/Pulse.vue"),
            },
            {
              path: "/components/rating",
              component: () => import("@/views/Components/Rating.vue"),
            },
            {
              path: "/components/ribbon",
              component: () => import("@/views/Components/Ribbon.vue"),
            },
            {
              path: "/components/rotate",
              component: () => import("@/views/Components/Rotate.vue"),
            },
            {
              path: "/components/separator",
              component: () => import("@/views/Components/Separator.vue"),
            },
            {
              path: "/components/symbol",
              component: () => import("@/views/Components/Symbol.vue"),
            },
            {
              path: "/components/tables",
              component: () => import("@/views/Components/Tables.vue"),
            },
            {
              path: "/components/tabs",
              component: () => import("@/views/Components/Tabs.vue"),
            },
            {
              path: "/components/toasts",
              component: () => import("@/views/Components/Toasts.vue"),
            },
            {
              path: "/components/tooltips",
              component: () => import("@/views/Components/Tooltips.vue"),
            },
            {
              path: "/components/underline",
              component: () => import("@/views/Components/Underline.vue"),
            }
          ]
        },

        //Custom plugins
        {
          path: "/plugins",
          component: BaseController,
          children: [
            {
              path: "/plugins/index",
              component: () => import("@/views/Plugins/Index.vue"),
            },
            {
              path: "/plugins/normalmode",
              component: () => import("@/views/Plugins/Normalmode.vue"),
            },
            {
              path: "/plugins/manualmode",
              component: () => import("@/views/Plugins/Manualmode.vue"),
            },
            {
              path: "/plugins/vuelidate",
              component: () => import("@/views/Plugins/Vuelidate.vue"),
            },
          ]
        },


        //Empty Pages
        {
          path: "/emptypages",
          component: BaseController,
          children: [
            {
              path: "/emptypages/index",
              component: () => import("@/views/Emptypages/Index.vue"),
            },
            
          ]
        },

        //Role-Based Sample
        {
          path: "/items",
          component: BaseController,
          meta: {Authorize: true, Roles: ["Administrator,Employee"]},
          children: [
            {
              path: "/items/index",
              component: () => import("@/views/Items/Index.vue"),
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
}

export default routes