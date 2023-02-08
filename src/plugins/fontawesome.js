import Vue from "vue"
import { library, config } from "@fortawesome/fontawesome-svg-core"
import { faAnglesLeft, faArrowRight, faBars, faPlus, faHand, faFile, faPuzzlePiece, faRocket } from "@fortawesome/free-solid-svg-icons"
import { faHeart } from "@fortawesome/free-regular-svg-icons"
import { faVuejs } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import "@fortawesome/fontawesome-svg-core/styles.css"



config.autoAddCss = false;
library.add(faAnglesLeft, faHeart, faBars, faPlus, faArrowRight, faHand, faFile, faPuzzlePiece, faRocket, faVuejs)

Vue.component("font-awesome-icon", FontAwesomeIcon)