const kttoggle = {
  inserted(el){
    el.kttoggle = new KTToggle(el)
  },
  unbind(el){
    el.kttoggle.destroy()
    el.kttoggle = null
    delete el.kttoggle
  }
}

export default kttoggle