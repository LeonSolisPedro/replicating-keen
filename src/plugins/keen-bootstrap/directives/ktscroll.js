
let KTScrollHandlersInitialized = false;

const ktscroll = {
  inserted(el) {
    el.ktscroll = new KTScroll(el)
    if (KTScrollHandlersInitialized === false) {
      window.addEventListener("resize", eventlistenerthree);
      KTScrollHandlersInitialized = true
    }
  },


  unbind(el) {
    el.ktscroll.destroy()
    const newArrayDataOfOjbect = Object.values(KTUtilElementDataStore)
    const allScrolls = newArrayDataOfOjbect.flatMap(x => x.scroll)
    if (allScrolls.length === 0) {
      window.removeEventListener("resize", eventlistenerthree)
      KTScrollHandlersInitialized = false
    }
    el.ktscroll = null
    delete el.ktscroll
  }
}


function eventlistenerthree() {
  let timer;

  KTUtil.throttle(timer, function () {
    // Locate and update Offcanvas instances on window resize
    var elements = document.body.querySelectorAll('[data-kt-scroll="true"]');

    if (elements && elements.length > 0) {
      for (var i = 0, len = elements.length; i < len; i++) {
        var scroll = KTScroll.getInstance(elements[i]);
        if (scroll) {
          scroll.update();
        }
      }
    }
  }, 200);
}



export default ktscroll