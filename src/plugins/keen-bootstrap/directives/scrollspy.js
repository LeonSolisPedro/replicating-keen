import { ScrollSpy } from "bootstrap"

const scrollspy = {
  inserted(el) {
    el.scrollspy = new ScrollSpy(el)
  },

  unbind(el){
    el.scrollspy.dispose()
    el.scrollspy = null
    delete el.scrollspy
  }
}

export default scrollspy