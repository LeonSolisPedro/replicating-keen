import Vue from "vue"
import { library, config } from "@fortawesome/fontawesome-svg-core"
import { faAngleLeft, faAnglesLeft, faAngleRight, faAnglesRight, faArrowRight, faBars, faPlus, faHand, faFile, faPuzzlePiece, faRocket, faCreditCard, faImages, faChartPie, faLink, faStar, faHeart as faHeartSolid, faHome } from "@fortawesome/free-solid-svg-icons"
import { faHeart } from "@fortawesome/free-regular-svg-icons"
import { faVuejs, faFacebookF, faGoogle, faTwitter, faInstagram, faYoutube, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import "@fortawesome/fontawesome-svg-core/styles.css"



config.autoAddCss = false;
library.add(faAngleLeft, faAnglesLeft, faAngleRight, faAnglesRight, faHeart, faBars, faPlus, faArrowRight, faHand, faFile, faPuzzlePiece, faRocket, faVuejs, faCreditCard, faImages, faChartPie, faFacebookF, faGoogle, faTwitter, faInstagram, faYoutube, faLinkedin, faLink, faStar, faHeartSolid, faHome)

Vue.component("font-awesome-icon", FontAwesomeIcon)