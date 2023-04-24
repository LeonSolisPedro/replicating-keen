import axios from "axios"

export default {
  install(app){
    axios.defaults.baseURL = import.meta.env.VITE_API
    window.axios = axios
  }
}