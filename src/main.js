import { createApp } from "vue"
import App from "./App.vue"
import fontawesome from "./plugins/fontawesome"
import sweetalert from "./plugins/sweetalert2"
import axios from "./plugins/axios"
import router from "./plugins/vue-router"
import keenBootstrap from "./plugins/keen-bootstrap"

//Global Plugins
const app = createApp(App)
app.use(fontawesome)
app.use(sweetalert)
app.use(axios)
app.use(router)
app.use(keenBootstrap)
app.mount('#app')