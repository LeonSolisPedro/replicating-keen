import Vue from "vue"
import { library, config } from "@fortawesome/fontawesome-svg-core"
import { faHome, faAnglesLeft } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import "@fortawesome/fontawesome-svg-core/styles.css"

config.autoAddCss = false;
library.add(faHome, faAnglesLeft)

Vue.component("font-awesome-icon", FontAwesomeIcon)