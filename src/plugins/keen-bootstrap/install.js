import "./sass/style.scss"
import "./sass/plugins.scss"
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
import tooltip from "./tooltip"
import popover from "./popover"
import scrollspy from "./scrollspy"


export default {
  // The install method will be called with the Vue constructor as         
  // the first argument, along with possible options
  install(Vue) {
    // Add a component or directive to your plugin, so it will be installed globally to your project.
    

    //Adding Directives
    Vue.directive("tooltip", tooltip);
    Vue.directive("popover", popover);
    Vue.directive("scrollspy", scrollspy)

  }
}
