const ktrotate = {
  bind(el) {
    el.addEventListener("click", handler)
  },

  unbind(el) {
    el.removeEventListener("click", handler)
  }
}

function handler(){
  this.classList.toggle('active');
}

export default ktrotate