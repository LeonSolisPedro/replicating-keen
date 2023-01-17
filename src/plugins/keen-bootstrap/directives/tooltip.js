import Tooltip from "bootstrap/js/src/tooltip"

const tooltip = {
  inserted(el) {
    el.tooltip = new Tooltip(el)
  },

  unbind(el){
    el.tooltip.dispose()
    el.tooltip = null
    delete el.tooltip
  }
}

export default tooltip