const kttoggle = {
  mounted(el){
    el.kttoggle = new KTToggle(el)
  },
  unmounted(el){
    el.kttoggle.destroy()
    el.kttoggle = null
    delete el.kttoggle
  }
}

export default kttoggle