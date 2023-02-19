import sweetalert2 from "sweetalert2"
import "sweetalert2/dist/sweetalert2.css"
import "./def.scss"

const Swal = sweetalert2.mixin({
  buttonsStyling: false,
  customClass: {
    confirmButton: "btn fw-bold btn-primary",
    cancelButton: 'btn fw-bold btn-light btn-color-dark btn-active-color-dark'
  }
})

export default {
  install(Vue){
    window.Swal = Swal
  }
}