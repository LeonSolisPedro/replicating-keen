const ktscroll = {
  mounted(el) {
    el.ktscroll = new KTScroll(el)
    KTScroll.initVue()
  },
  unmounted(el) {
    el.ktscroll.destroy()
    el.ktscroll = null
    delete el.ktscroll
  }
}

export default ktscroll