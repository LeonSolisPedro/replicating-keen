import sweetalert2 from "sweetalert2"
import "sweetalert2/dist/sweetalert2.css"
import "./style.scss"

const swal = sweetalert2.mixin({
  buttonsStyling: false,
  allowOutsideClick: false,
  customClass: {
    confirmButton: "btn fw-bold btn-primary",
    cancelButton: 'btn fw-bold btn-light btn-color-dark btn-active-color-dark'
  }
})

window.swal = swal