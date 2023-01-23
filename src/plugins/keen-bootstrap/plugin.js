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

import KTUtil from "./src/js/components/util"
import KTApp from "./src/js/components/appcustomvue"
import KTEventHandler from "./src/js/components/event-handler"
import KTBlockUI from "./src/js/components/blockui"
import KTCookie from "./src/js/components/cookie"
import KTMenu from "./src/js/components/menu"                              //It has memory leaks, but considering that is going to be executed once...
// import KTDialer from "./src/js/components/dialer"                        //Replaced by Vue
// import KTDrawer from "./src/js/components/drawer"                       //Replaced by bootstrap offcanvas
// import KTFeedback from "./src/js/components/feedback"                  //???
//import KTImageInput from "./src/js/components/image-input"              //Memory leak detected
// import KTPasswordMeter from "./src/js/components/password-meter"       //Memory leak detected.
// import KTScroll from "./src/js/components/scroll"                      //???
// import KTScrolltop from "./src/js/components/scrolltop"               //Replaced by vue
// import KTSearch from "./src/js/components/search"                     //Memory leak detected.
// import KTStepper from "./src/js/components/stepper"                   //Memory leak detected.
// import KTSticky from "./src/js/components/sticky"                     //Replaced by bootstrap sticky
// import KTSwapper from "./src/js/components/swapper"                   //Replaced by bootstrap
// import KTToggle from "./src/js/components/toggle"                     //Replaced by vue


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


    //Adding Directives
    Vue.directive("tooltip", tooltip);
    Vue.directive("popover", popover);
    Vue.directive("scrollspy", scrollspy)
    Vue.directive("ktbuttons", ktbuttons)
    Vue.directive("ktrotate", ktrotate)
    Vue.directive("ktmenu", ktmenu)
  }
}
