const ktdrawer = {
  mounted(el) {
    el.ktdrawer = new KTDrawer(el)
    KTDrawer.initVue()
  },
  unmounted(el) {
    el.ktdrawer.destroy()
    el.ktdrawer = null
    delete el.ktdrawer
  }
}

export default ktdrawer