import { createApp } from "vue"
import App from "./App.vue"
import keenBootstrap from "./plugins/keen-bootstrap"
import fontawesome from "./plugins/fontawesome"
import sweetalert from "./plugins/sweetalert2"
import axios from "./plugins/axios"
import router from "./plugins/vue-router"

//Global Plugins
const app = createApp(App)
app.use(keenBootstrap)
app.use(fontawesome)
app.use(sweetalert)
app.use(axios)
app.use(router)
app.mount('#app')