import { Popover } from "bootstrap"

const popover = {
  mounted(el) {
    el.popover = new Popover(el)
  },

  unmounted(el){
    el.popover.dispose()
    el.popover = null
    delete el.popover
  }
}

export default popover