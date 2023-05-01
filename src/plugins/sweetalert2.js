import sweetalert2 from "sweetalert2/dist/sweetalert2.js"
import "sweetalert2/dist/sweetalert2.css"

export default {
  install(){
    window.swal = window.Swal = sweetalert2.mixin({
      buttonsStyling: false,
      allowOutsideClick: false,
      customClass: {
        confirmButton: "btn fw-bold btn-primary",
        cancelButton: 'btn fw-bold btn-light btn-color-dark btn-active-color-dark'
      }
    })
  }
}