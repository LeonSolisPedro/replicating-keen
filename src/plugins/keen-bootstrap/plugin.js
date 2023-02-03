import "./src/sass/style.scss"
import "./src/sass/plugins.scss"
import "@fontsource/inter/latin-100.css"
import "@fontsource/inter/latin-200.css"
import "@fontsource/inter/latin-300.css"
import "@fontsource/inter/latin-400.css"
import "@fontsource/inter/latin-500.css"
import "@fontsource/inter/latin-600.css"
import "@fontsource/inter/latin-700.css"
import "@fontsource/inter/latin-800.css"
import "@fontsource/inter/latin-900.css"
import "bootstrap"
import tooltip from "./directives/tooltip"
import popover from "./directives/popover"
import scrollspy from "./directives/scrollspy"
import ktbuttons from "./directives/ktbuttons"
import ktrotate from "./directives/ktrotate"
import ktmenu from "./directives/ktmenu"
import kttoggle from "./directives/kttoggle"
import ktscroll from "./directives/ktscroll"
import ktdrawer from "./directives/ktdrawer"

import KTUtil from "./src/js/components/util"
import KTApp from "./src/js/components/appcustomvue"
import KTEventHandler from "./src/js/components/event-handler"
import KTBlockUI from "./src/js/components/blockui"
import KTCookie from "./src/js/components/cookie"
import KTMenu from "./src/js/components/menu"                              
// import KTDialer from "./src/js/components/dialer"                        //Replaced by Vue
import KTDrawer from "./src/js/components/drawer"
// import KTFeedback from "./src/js/components/feedback"                  //???
//import KTImageInput from "./src/js/components/image-input"              //Memory leak detected
// import KTPasswordMeter from "./src/js/components/password-meter"       //Memory leak detected.
import KTScroll from "./src/js/components/scroll"
// import KTScrolltop from "./src/js/components/scrolltop"               //Replaced by vue
// import KTSearch from "./src/js/components/search"                     //Memory leak detected.
// import KTStepper from "./src/js/components/stepper"                   //Memory leak detected.
// import KTSticky from "./src/js/components/sticky"                     //Replaced by bootstrap sticky
// import KTSwapper from "./src/js/components/swapper"                   //Replaced by bootstrap
import KTToggle from "./src/js/components/toggle"


export default {
  // The install method will be called with the Vue constructor as
  // the first argument, along with possible options
  install(Vue) {
    // Add a component or directive to your plugin, so it will be installed globally to your project.

    //Global Keen objects
    window.KTUtil = KTUtil
    window.KTApp = KTApp
    window.KTEventHandler = KTEventHandler
    window.KTBlockUI = KTBlockUI
    window.KTCookie = KTCookie
    window.KTMenu = KTMenu
    window.KTToggle = KTToggle
    window.KTDrawer = KTDrawer
    window.KTScroll = KTScroll


    //Adding Directives
    Vue.directive("tooltip", tooltip);
    Vue.directive("popover", popover);
    Vue.directive("scrollspy", scrollspy)
    Vue.directive("ktbuttons", ktbuttons)
    Vue.directive("ktrotate", ktrotate)
    Vue.directive("ktmenu", ktmenu)
    Vue.directive("kttoggle", kttoggle)
    Vue.directive("ktscroll", ktscroll)
    Vue.directive("ktdrawer", ktdrawer)


    Vue.prototype.$setupTemplate = function () {
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
    Vue.prototype.$destroyTemplate = function () {
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
    Vue.prototype.$setupBlankPage = function () {
      document.body.classList.add("app-blank")
      document.body.id = "kt_body"
      const approot = document.getElementById("app")
      const classes = ["d-flex", "flex-column", "flex-root"]
      approot.classList.add(...classes)
    }
    Vue.prototype.$destroyBlankPage = function () {
      document.body.classList.remove("app-blank")
      document.body.id = ""
      const approot = document.getElementById("app")
      const classes = ["d-flex", "flex-column", "flex-root"]
      approot.classList.remove(...classes)
    }
  }
}
