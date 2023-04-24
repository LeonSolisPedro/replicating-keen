
let KTDrawerHandlersInitialized = false
let KTUtilIdOne = 0;
let KTUtilIdTwo = 0;


const ktdrawer = {
  mounted(el) {
    el.ktdrawer = new KTDrawer(el)
    if (KTDrawerHandlersInitialized === false) {
      window.addEventListener("resize", eventlistenerfour)
      KTUtilIdOne = KTUtil.on(document.body, '[data-kt-drawer-show="true"][data-kt-drawer-target]', 'click', function (e) {
        e.preventDefault();
        var element = document.querySelector(this.getAttribute('data-kt-drawer-target'));
        if (element) {
          KTDrawer.getInstance(element).show();
        }
      });
      KTUtilIdTwo = KTUtil.on(document.body, '[data-kt-drawer-dismiss="true"]', 'click', function (e) {
        var element = this.closest('[data-kt-drawer="true"]');
        if (element) {
          var drawer = KTDrawer.getInstance(element);
          if (drawer.isShown()) {
            drawer.hide();
          }
        }
      });
      KTDrawerHandlersInitialized = true
    }
  },
  unmounted(el) {
    el.ktdrawer.destroy()
    const newArrayDataOfOjbect = Object.values(KTUtilElementDataStore)
    const allDrawers = newArrayDataOfOjbect.flatMap(x => x.drawer)
    if (allDrawers.length === 0) {
      window.removeEventListener("resize", eventlistenerfour)
      KTUtil.off(document.body, "click", KTUtilIdOne)
      KTUtil.off(document.body, "click", KTUtilIdTwo)
      KTUtilIdOne = 0
      KTUtilIdTwo = 0
      KTDrawerHandlersInitialized = false
    }
    el.ktdrawer = null
    delete el.ktdrawer
  }
}


function eventlistenerfour() {
  // Window resize Handling
  window.addEventListener('resize', function () {
    let timer;
    KTUtil.throttle(timer, function () {
      // Locate and update drawer instances on window resize
      var elements = document.querySelectorAll('[data-kt-drawer="true"]');
      if (elements && elements.length > 0) {
        for (var i = 0, len = elements.length; i < len; i++) {
          var drawer = KTDrawer.getInstance(elements[i]);
          if (drawer) {
            drawer.update();
          }
        }
      }
    }, 200);
  });
}


export default ktdrawer