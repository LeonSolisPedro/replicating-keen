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

import KTUtil from "./src/js/components/util"
import KTApp from "./src/js/components/appcustomvue"
// import KTEventHandler from "./src/js/components/event-handler"
// import KTBlockUI from "./src/js/components/blockui"
// import KTCookie from "./src/js/components/cookie"
// import KTDialer from "./src/js/components/dialer"
// import KTDrawer from "./src/js/components/drawer"
// import KTFeedback from "./src/js/components/feedback"
// import KTImageInput from "./src/js/components/image-input"
// import KTMenu from "./src/js/components/menu"
// import KTPasswordMeter from "./src/js/components/password-meter"
// import KTScroll from "./src/js/components/scroll"
// import KTScrolltop from "./src/js/components/scrolltop"
// import KTSearch from "./src/js/components/search"
// import KTStepper from "./src/js/components/stepper"
// import KTSticky from "./src/js/components/sticky"
// import KTSwapper from "./src/js/components/swapper"
// import KTToggle from "./src/js/components/toggle"


export default {
  // The install method will be called with the Vue constructor as
  // the first argument, along with possible options
  install(Vue) {
    // Add a component or directive to your plugin, so it will be installed globally to your project.
    
    //Global Keen objects
    window.KTUtil = KTUtil
    window.KTApp = KTApp
    // window.KTEventHandler = KTEventHandler
    // window.KTBlockUI = KTBlockUI
    // window.KTCookie = KTCookie
    // window.KTDialer = KTDialer
    // window.KTDrawer = KTDrawer
    // window.KTFeedback = KTFeedback
    // window.KTImageInput = KTImageInput
    // window.KTMenu = KTMenu
    // window.KTPasswordMeter = KTPasswordMeter
    // window.KTScroll = KTScroll
    // window.KTScrolltop = KTScrolltop
    // window.KTSearch = KTSearch
    // window.KTStepper = KTStepper
    // window.KTSticky = KTSticky
    // window.KTSwapper = KTSwapper
    // window.KTToggle = KTToggle


    //Adding Directives
    Vue.directive("tooltip", tooltip);
    Vue.directive("popover", popover);
    Vue.directive("scrollspy", scrollspy)
    Vue.directive("ktbuttons", ktbuttons)
    Vue.directive("ktrotate", ktrotate)

  }
}
