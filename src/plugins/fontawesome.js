import Vue from "vue"
import { library, config } from "@fortawesome/fontawesome-svg-core"
import { faHome, faAnglesLeft, faBars, faScissors } from "@fortawesome/free-solid-svg-icons"
import { faHeart } from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import "@fortawesome/fontawesome-svg-core/styles.css"


config.autoAddCss = false;
library.add(faHome, faAnglesLeft, faHeart, faBars, faScissors)

Vue.component("font-awesome-icon", FontAwesomeIcon)