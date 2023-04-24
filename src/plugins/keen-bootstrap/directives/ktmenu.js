let KTMenuHandlersInitialized = false
let KTUtilIdOne = 0;
let KTUtilIdTwo = 0;
let KTUtilIdThree = 0;
let KTUtilIdFour = 0;
let KTUtilIdFive = 0;

const ktmenu = {
  mounted(el) {
    //Copied from KTMenu.js
    el.ktmenu = new KTMenu(el)
    if (KTMenuHandlersInitialized === false) {
      document.addEventListener("click", eventlistenerone);
      KTUtilIdOne = KTUtil.on(document.body, '.menu-item[data-kt-menu-trigger] > .menu-link, [data-kt-menu-trigger]:not(.menu-item):not([data-kt-menu-trigger="auto"])', 'click', function (e) {
        const menu = KTMenu.getInstance(this);
        if (menu !== null) {
          return menu.click(this, e);
        }
      });
      KTUtilIdTwo = KTUtil.on(document.body, '.menu-item:not([data-kt-menu-trigger]) > .menu-link', 'click', function (e) {
        const menu = KTMenu.getInstance(this);
        if (menu !== null) {
          return menu.link(this, e);
        }
      });
      KTUtilIdThree = KTUtil.on(document.body, '[data-kt-menu-dismiss="true"]', 'click', function (e) {
        const menu = KTMenu.getInstance(this);
        if (menu !== null) {
          return menu.dismiss(this, e);
        }
      });
      KTUtilIdFour = KTUtil.on(document.body, '[data-kt-menu-trigger], .menu-sub', 'mouseover', function (e) {
        const menu = KTMenu.getInstance(this);
        if (menu !== null && menu.getItemSubType(this) === 'dropdown') {
          return menu.mouseover(this, e);
        }
      });
      KTUtilIdFive = KTUtil.on(document.body, '[data-kt-menu-trigger], .menu-sub', 'mouseout', function (e) {
        const menu = KTMenu.getInstance(this);
        if (menu !== null && menu.getItemSubType(this) === 'dropdown') {
          return menu.mouseout(this, e);
        }
      });
      window.addEventListener("resize", eventlistenertwo);
      KTMenuHandlersInitialized = true
    }
  },

  unmounted(el) {
    el.ktmenu.destroy()
    const newArrayDataOfOjbect = Object.values(KTUtilElementDataStore)
    const allMenus = newArrayDataOfOjbect.flatMap(x => x.menu)
    if (allMenus.length === 0) {
      document.removeEventListener("click", eventlistenerone)
      KTUtil.off(document.body, "click", KTUtilIdOne)
      KTUtilIdOne = 0
      KTUtil.off(document.body, "click", KTUtilIdTwo)
      KTUtilIdTwo = 0
      KTUtil.off(document.body, "click", KTUtilIdThree)
      KTUtilIdThree = 0
      KTUtil.off(document.body, "mouseover", KTUtilIdFour)
      KTUtilIdFour = 0
      KTUtil.off(document.body, "mouseout", KTUtilIdFive)
      KTUtilIdFive = 0
      window.removeEventListener("resize", eventlistenertwo)
      KTMenuHandlersInitialized = false
    }
    el.ktmenu = null
    delete el.ktmenu
  }
}


function eventlistenerone(e) {
  let items = document.querySelectorAll('.show.menu-dropdown[data-kt-menu-trigger]:not([data-kt-menu-static="true"])');
  let menu;
  let item;
  let sub;
  let menuObj;
  if (items && items.length > 0) {
    for (var i = 0, len = items.length; i < len; i++) {
      item = items[i];
      menuObj = KTMenu.getInstance(item);
      if (menuObj && menuObj.getItemSubType(item) === 'dropdown') {
        menu = menuObj.getElement();
        sub = menuObj.getItemSubElement(item);
        if (item === e.target || item.contains(e.target)) {
          continue;
        }
        if (sub === e.target || sub.contains(e.target)) {
          continue;
        }
        menuObj.hide(item);
      }
    }
  }
}

function eventlistenertwo(e) {
  let menu = null;
  let timer = null;
  KTUtil.throttle(timer, function () {
    var elements = document.querySelectorAll('[data-kt-menu="true"]');
    if (elements && elements.length > 0) {
      for (var i = 0, len = elements.length; i < len; i++) {
        menu = KTMenu.getInstance(elements[i]);
        if (menu) {
          menu.update();
        }
      }
    }
  }, 200);
}

export default ktmenu