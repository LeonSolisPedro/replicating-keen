const ktbuttons = {
  inserted(el) {
    //Copied from KTApp.js
    var selector = el.hasAttribute('data-kt-buttons-target') ? el.getAttribute('data-kt-buttons-target') : '.btn';
    var activeButtons = [].slice.call(el.querySelectorAll(selector));
    const id = KTUtil.on(el, selector, 'click', function (e) {
      activeButtons.map(function (button) {
        button.classList.remove('active');
      });
      this.classList.add('active');
    });
    el.ktbuttonsId = id
  },

  unbind(el){
    KTUtil.off(el, "click", el.ktbuttonsId)
  }
}

export default ktbuttons