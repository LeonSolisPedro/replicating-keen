const ktmenu = {
  mounted(el) {
    el.ktmenu = new KTMenu(el)
    KTMenu.initVue()
  },
  unmounted(el) {
    el.ktmenu.destroy()
    el.ktmenu = null
    delete el.ktmenu
  }
}

export default ktmenu