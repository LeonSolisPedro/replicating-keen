"use strict";


// Custom Vue implementation of keen's KTApp
var KTApp = function () {

  return {
    showPageLoading: function () {
      document.body.classList.add('page-loading');
      document.body.setAttribute('data-kt-app-page-loading', "on");
    },


    hidePageLoading: function () {
      document.body.classList.remove('page-loading');
      document.body.removeAttribute('data-kt-app-page-loading');
    },
  }
}();

export default KTApp