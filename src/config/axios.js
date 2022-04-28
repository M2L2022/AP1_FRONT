import axios from "axios";

const instance = axios.create({
    baseURL:"http://localhost:8000"
})

instance.defaults.headers.post["Content-Type"] = "application/json"
instance.defaults.withCredentials = true

export default instance