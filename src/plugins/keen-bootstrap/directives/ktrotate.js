const ktrotate = {
  beforeMount(el) {
    el.addEventListener("click", handler)
  },

  unmounted(el) {
    el.removeEventListener("click", handler)
  }
}

function handler(){
  this.classList.toggle('active');
}

export default ktrotate