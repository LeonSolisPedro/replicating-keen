import Vue from "vue"
import App from "./App.vue"

/**
 * Global plugins goes here
 */
import "./plugins/keen-bootstrap"
import "./plugins/fontawesome"
import "./plugins/sweetalert2"
import "./plugins/axios"
import router from "./plugins/vue-router"


new Vue({
  router,
  render: (h) => h(App)
}).$mount("#app")
