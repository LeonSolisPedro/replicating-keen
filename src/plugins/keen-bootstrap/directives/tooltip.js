import { Tooltip } from "bootstrap"

const tooltip = {
  mounted(el) {
    el.tooltip = new Tooltip(el)
  },

  unmounted(el){
    el.tooltip.dispose()
    el.tooltip = null
    delete el.tooltip
  }
}

export default tooltip