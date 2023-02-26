import axios from "axios"

axios.defaults.baseURL = import.meta.env.VITE_API

window.axios = axios