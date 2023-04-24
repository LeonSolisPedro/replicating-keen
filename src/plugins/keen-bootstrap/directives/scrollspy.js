import { ScrollSpy } from "bootstrap"

const scrollspy = {
  mounted(el) {
    el.scrollspy = new ScrollSpy(el)
  },

  unmounted(el){
    el.scrollspy.dispose()
    el.scrollspy = null
    delete el.scrollspy
  }
}

export default scrollspy