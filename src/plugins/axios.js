import axios from "axios"

export default {
  install(){
    axios.defaults.baseURL = import.meta.env.VITE_API
    window.axios = axios
  }
}