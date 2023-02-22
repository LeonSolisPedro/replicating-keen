import { Popover } from "bootstrap"

const popover = {
  inserted(el) {
    el.popover = new Popover(el)
  },

  unbind(el){
    el.popover.dispose()
    el.popover = null
    delete el.popover
  }
}

export default popover