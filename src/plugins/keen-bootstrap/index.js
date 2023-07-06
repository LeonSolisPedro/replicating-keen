import { defineAsyncComponent } from "vue"
import "@fontsource/inter/latin-300.css"
import "@fontsource/inter/latin-400.css"
import "@fontsource/inter/latin-500.css"
import "@fontsource/inter/latin-600.css"
import "@fontsource/inter/latin-700.css"
import "./src/sass/style.scss"
import "./src/sass/plugins.scss"
import * as bootstrap from "bootstrap"
import tooltip from "./directives/tooltip"
import popover from "./directives/popover"
import scrollspy from "./directives/scrollspy"
import ktbuttons from "./directives/ktbuttons"
import ktrotate from "./directives/ktrotate"
import ktmenu from "./directives/ktmenu"
import kttoggle from "./directives/kttoggle"
import ktscroll from "./directives/ktscroll"
import ktdrawer from "./directives/ktdrawer"
import KTApp from "./src/js/components/appcustomvue"
import KTBlockUI from "./src/js/components/blockui"
import KTDrawer from "./src/js/components/drawer"
import KTEventHandler from "./src/js/components/event-handler"
import KTMenu from "./src/js/components/menu"                              
import KTScroll from "./src/js/components/scroll"
import KTToggle from "./src/js/components/toggle"
import KTUtil from "./src/js/components/util"


export default {
  install(app){

    //Global Keen objects
    window.KTApp = KTApp
    window.KTBlockUI = KTBlockUI
    window.KTDrawer = KTDrawer
    window.KTEventHandler = KTEventHandler
    window.KTMenu = KTMenu
    window.KTScroll = KTScroll
    window.KTToggle = KTToggle
    window.KTUtil = KTUtil

    //Bootstrap configuration
    bootstrap.Modal.Default.backdrop = "static"

    //Adding Directives
    app.directive("tooltip", tooltip);
    app.directive("popover", popover);
    app.directive("scrollspy", scrollspy)
    app.directive("ktbuttons", ktbuttons)
    app.directive("ktrotate", ktrotate)
    app.directive("ktmenu", ktmenu)
    app.directive("kttoggle", kttoggle)
    app.directive("ktscroll", ktscroll)
    app.directive("ktdrawer", ktdrawer)

    //Adding Components
    app.component("VueDatatable", defineAsyncComponent(() => import("./components/VueDatatable.vue")))

    //Adding global methods
    app.config.globalProperties.$globalDelete = async function (id, listap, url) {
      const question = await swal.fire({
        title: `Do you want to delete this item?`,
        text: "This action is irreversible",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete!",
        cancelButtonText: 'No, cancel!',
        showLoaderOnConfirm: true,
        preConfirm(){
          const finalURL = /[^&?]*?=[^&?]*/.test(url) ? url + id : url.replace(/\/$/, "") + "/" + id;
          return axios.delete(finalURL).catch(() => {
            swal.showValidationMessage("An error has been ocurred, please try again")
          })
        }
      });
      if(!question.isConfirmed) return
      const lista = listap?.split(".")[0] ?? "lista"
      const listaid = listap?.split(".")[1] ?? "id"
      const data = this.$data[lista]
      const index = data?.findIndex(x => x[listaid] === id)
      if(data === undefined) return console.error(`Unable to find this.$data.${lista} on current component`)
      if(index === -1) return console.error(`Property "${listaid} - ${id}", does not exist on this.$data.${lista}`)
      await swal.fire("Success", "Item deleted successfully", "success")
      data.splice(index, 1)
    }
    app.config.globalProperties.$setupLayout = function () {
      document.body.classList.add("app-default")
      document.body.setAttribute("data-kt-app-layout", "dark-sidebar")
      document.body.setAttribute("data-kt-app-header-fixed", "true")
      document.body.setAttribute("data-kt-app-sidebar-enabled", "true")
      document.body.setAttribute("data-kt-app-sidebar-fixed", "true")
      document.body.setAttribute("data-kt-app-sidebar-hoverable", "true")
      document.body.setAttribute("data-kt-app-sidebar-push-header", "true")
      document.body.setAttribute("data-kt-app-sidebar-push-toolbar", "true")
      document.body.setAttribute("data-kt-app-sidebar-push-footer", "true")
      document.body.setAttribute("data-kt-app-toolbar-enabled", "true")
      document.body.id = "kt_app_body"
      const approot = document.getElementById("app")
      const classes = ["d-flex", "flex-column", "flex-root", "app-root"]
      approot.classList.add(...classes)
    }
    app.config.globalProperties.$destroyLayout = function () {
      document.body.classList.remove("app-default")
      document.body.removeAttribute("data-kt-app-layout")
      document.body.removeAttribute("data-kt-app-header-fixed")
      document.body.removeAttribute("data-kt-app-sidebar-enabled")
      document.body.removeAttribute("data-kt-app-sidebar-fixed")
      document.body.removeAttribute("data-kt-app-sidebar-hoverable")
      document.body.removeAttribute("data-kt-app-sidebar-push-header")
      document.body.removeAttribute("data-kt-app-sidebar-push-toolbar")
      document.body.removeAttribute("data-kt-app-sidebar-push-footer")
      document.body.removeAttribute("data-kt-app-toolbar-enabled")
      document.body.id = ""
      const approot = document.getElementById("app")
      const classes = ["d-flex", "flex-column", "flex-root", "app-root"]
      approot.classList.remove(...classes)
    }
    app.config.globalProperties.$setupAuthLayout = function () {
      document.body.classList.add("app-blank")
      document.body.id = "kt_body"
      const approot = document.getElementById("app")
      const classes = ["d-flex", "flex-column", "flex-root"]
      approot.classList.add(...classes)
    }
    app.config.globalProperties.$destroyAuthLayout = function () {
      document.body.classList.remove("app-blank")
      document.body.id = ""
      const approot = document.getElementById("app")
      const classes = ["d-flex", "flex-column", "flex-root"]
      approot.classList.remove(...classes)
    }
  }
}