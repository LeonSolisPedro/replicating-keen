import Vue from "vue"
import App from "./App.vue"
import * as plugins from "./plugins"

new Vue({
  router: plugins.vuerouter,
  render: (h) => h(App)
}).$mount("#app")
