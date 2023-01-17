import Scrollspy from "bootstrap/js/src/scrollspy"

const scrollspy = {
  inserted(el) {
    el.scrollspy = new Scrollspy(el)
  },

  unbind(el){
    el.scrollspy.dispose()
    el.scrollspy = null
    delete el.scrollspy
  }
}

export default scrollspy