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
          path: "/keencomponents",
          component: BaseController,
          children: [
            {
              path: "/keencomponents/index",
              component: () => import("@/views/KeenComponents/Index.vue")
            },
            {
              path: "/keencomponents/utilities",
              component: () => import("@/views/KeenComponents/Utilities.vue"),
            },
            {
              path: "/keencomponents/flexlayouts",
              component: () => import("@/views/KeenComponents/FlexLayouts.vue"),
            },
            {
              path: "/keencomponents/text",
              component: () => import("@/views/KeenComponents/Text.vue"),
            },
            {
              path: "/keencomponents/background",
              component: () => import("@/views/KeenComponents/Background.vue"),
            },
            {
              path: "/keencomponents/borders",
              component: () => import("@/views/KeenComponents/Borders.vue"),
            },
            {
              path: "/keencomponents/opacity",
              component: () => import("@/views/KeenComponents/Opacity.vue"),
            },
            {
              path: "/keencomponents/controls",
              component: () => import("@/views/KeenComponents/Controls.vue"),
            },
            {
              path: "/keencomponents/checksandradios",
              component: () => import("@/views/KeenComponents/ChecksAndRadios.vue"),
            },
            {
              path: "/keencomponents/inputgroup",
              component: () => import("@/views/KeenComponents/InputGroup.vue"),
            },
            {
              path: "/keencomponents/floatinglabels",
              component: () => import("@/views/KeenComponents/FloatingLabels.vue"),
            },
            {
              path: "/keencomponents/advancedcontrols",
              component: () => import("@/views/KeenComponents/AdvancedControls.vue"),
            },
            {
              path: "/keencomponents/buttons",
              component: () => import("@/views/KeenComponents/Buttons.vue"),
            },
            {
              path: "/keencomponents/accordion",
              component: () => import("@/views/KeenComponents/Accordion.vue"),
            },
            {
              path: "/keencomponents/alerts",
              component: () => import("@/views/KeenComponents/Alerts.vue"),
            },
            {
              path: "/keencomponents/badges",
              component: () => import("@/views/KeenComponents/Badges.vue"),
            },
            {
              path: "/keencomponents/breadcrumps",
              component: () => import("@/views/KeenComponents/Breadcrumps.vue"),
            },
            {
              path: "/keencomponents/bullets",
              component: () => import("@/views/KeenComponents/Bullets.vue"),
            },
            {
              path: "/keencomponents/cards",
              component: () => import("@/views/KeenComponents/Cards.vue"),
            },
            {
              path: "/keencomponents/carousel",
              component: () => import("@/views/KeenComponents/Carousel.vue"),
            },
            {
              path: "/keencomponents/indicator",
              component: () => import("@/views/KeenComponents/Indicator.vue"),
            },
            {
              path: "/keencomponents/pageloading",
              component: () => import("@/views/KeenComponents/PageLoading.vue"),
            },
            {
              path: "/keencomponents/modal",
              component: () => import("@/views/KeenComponents/Modal.vue"),
            },
            {
              path: "/keencomponents/overlay",
              component: () => import("@/views/KeenComponents/Overlay.vue"),
            },
            {
              path: "/keencomponents/pagination",
              component: () => import("@/views/KeenComponents/Pagination.vue"),
            },
            {
              path: "/keencomponents/popovers",
              component: () => import("@/views/KeenComponents/Popovers.vue"),
            },
            {
              path: "/keencomponents/hover",
              component: () => import("@/views/KeenComponents/Hover.vue"),
            },
            {
              path: "/keencomponents/pulse",
              component: () => import("@/views/KeenComponents/Pulse.vue"),
            },
            {
              path: "/keencomponents/rating",
              component: () => import("@/views/KeenComponents/Rating.vue"),
            },
            {
              path: "/keencomponents/ribbon",
              component: () => import("@/views/KeenComponents/Ribbon.vue"),
            },
            {
              path: "/keencomponents/rotate",
              component: () => import("@/views/KeenComponents/Rotate.vue"),
            },
            {
              path: "/keencomponents/separator",
              component: () => import("@/views/KeenComponents/Separator.vue"),
            },
            {
              path: "/keencomponents/symbol",
              component: () => import("@/views/KeenComponents/Symbol.vue"),
            },
            {
              path: "/keencomponents/tables",
              component: () => import("@/views/KeenComponents/Tables.vue"),
            },
            {
              path: "/keencomponents/tabs",
              component: () => import("@/views/KeenComponents/Tabs.vue"),
            },
            {
              path: "/keencomponents/toasts",
              component: () => import("@/views/KeenComponents/Toasts.vue"),
            },
            {
              path: "/keencomponents/tooltips",
              component: () => import("@/views/KeenComponents/Tooltips.vue"),
            },
            {
              path: "/keencomponents/underline",
              component: () => import("@/views/KeenComponents/Underline.vue"),
            }
          ]
        },

        //Custom plugins
        {
          path: "/customplugins",
          component: BaseController,
          children: [
            {
              path: "/customplugins/index",
              component: () => import("@/views/CustomPlugins/Index.vue"),
            },
            {
              path: "/customplugins/datatables",
              component: () => import("@/views/CustomPlugins/DataTables.vue"),
            },
            {
              path: "/customplugins/vuelidate",
              component: () => import("@/views/CustomPlugins/Vuelidate.vue"),
            },
            {
              path: "/customplugins/sweetalert2",
              component: () => import("@/views/CustomPlugins/SweetAlert2.vue"),
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
              component: () => import("@/views/EmptyPages/Index.vue"),
            },
            {
              path: "/emptypages/simplecrud",
              component: BaseController,
              children: [
                {
                  path: "/emptypages/simplecrud/index",
                  component: () => import("@/views/EmptyPages/SimpleCRUD/Index.vue"),
                },
                {
                  path: "/emptypages/simplecrud/create",
                  component: () => import("@/views/EmptyPages/SimpleCRUD/Create.vue"),
                },
                {
                  path: "/emptypages/simplecrud/update/:id",
                  component: () => import("@/views/EmptyPages/SimpleCRUD/Update.vue"),
                }
              ]
            },
            {
              path: "/emptypages/simplecrudmodal",
              component: BaseController,
              children: [
                {
                  path: "/emptypages/simplecrudmodal/index",
                  component: () => import("@/views/EmptyPages/SimpleCRUDmodal/Index.vue"),
                }
              ]
            },
          ]
        },

        //Role-Based Plugin
        {
          path: "/rolebasedplugin",
          component: BaseController,
          meta: {Authorize: true, Roles: ["Administrator,Employee"]},
          children: [
            {
              path: "/rolebasedplugin/index",
              component: () => import("@/views/RoleBasedPlugin/Index.vue"),
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